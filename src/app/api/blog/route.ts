import { NextResponse } from 'next/server';

// 읽기 시간 계산 (대략적으로 분당 200단어 기준)
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// 텍스트만 추출하는 더 강력한 함수
function extractPlainText(html: string): string {
  if (!html) return '';
  
  let text = html;
  
  // 먼저 HTML 엔티티를 디코딩 (이게 가장 중요!)
  const entityMap: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&hellip;': '...',
    '&mdash;': '—',
    '&ndash;': '–',
    '&rsquo;': "'",
    '&lsquo;': "'",
    '&rdquo;': '"',
    '&ldquo;': '"'
  };
  
  // 엔티티 변환 (순서 중요: &amp;를 마지막에 처리)
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  text = text.replace(/&apos;/g, "'");
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&hellip;/g, '...');
  text = text.replace(/&mdash;/g, '—');
  text = text.replace(/&ndash;/g, '–');
  text = text.replace(/&rsquo;/g, "'");
  text = text.replace(/&lsquo;/g, "'");
  text = text.replace(/&rdquo;/g, '"');
  text = text.replace(/&ldquo;/g, '"');
  text = text.replace(/&amp;/g, '&'); // 마지막에 처리
  
  // 숫자 엔티티 제거
  text = text.replace(/&#\d+;/g, '');
  text = text.replace(/&#x[0-9a-fA-F]+;/g, '');
  
  // CDATA 섹션 처리
  text = text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  
  // 스크립트, 스타일, 주석 완전 제거
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  text = text.replace(/<!--[\s\S]*?-->/g, '');
  
  // 블록 레벨 요소들을 줄바꿈으로 변환
  text = text.replace(/<\/(div|p|br|h[1-6]|li|tr|td|th)>/gi, '\n');
  text = text.replace(/<(div|p|br|h[1-6]|li|tr|td|th)[^>]*>/gi, '\n');
  
  // 모든 HTML 태그 제거
  text = text.replace(/<[^>]*>/g, '');
  
  // 제어 문자 제거
  text = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');
  
  // 연속된 공백과 줄바꿈 정리
  text = text.replace(/\n\s*\n/g, '\n'); // 연속된 줄바꿈을 하나로
  text = text.replace(/[ \t]+/g, ' '); // 연속된 공백을 하나로
  text = text.replace(/\n /g, '\n'); // 줄바꿈 후 공백 제거
  
  // 앞뒤 공백 제거
  text = text.trim();
  
  return text;
}

// HTML 태그 제거 및 요약 생성 (완전히 새로운 버전)
function createExcerpt(content: string, maxLength: number = 150): string {
  const plainText = extractPlainText(content);
  
  if (!plainText || plainText.length < 10) {
    return '블로그 포스트 내용을 확인하세요.';
  }
  
  // 첫 번째 문단만 가져오기 (줄바꿈 기준)
  const firstParagraph = plainText.split('\n')[0].trim();
  const textToUse = firstParagraph || plainText;
  
  return textToUse.length > maxLength ? textToUse.substring(0, maxLength) + '...' : textToUse;
}

// 제목 정리 함수 (완전히 새로운 버전)
function cleanTitle(title: string): string {
  const plainTitle = extractPlainText(title);
  return plainTitle || 'Untitled';
}

// 카테고리 매핑 (티스토리 카테고리를 우리 카테고리로 변환)
function mapCategory(category: string): string {
  const categoryMap: Record<string, string> = {
    'AWS': 'AWS',
    'Docker': 'Docker',
    'Kubernetes': 'Kubernetes',
    'Linux': 'Linux',
    'DevOps': 'DevOps',
    'CI/CD': 'Projects',
    '트러블슈팅': 'Troubleshooting',
    '문제해결': 'Troubleshooting',
  };
  
  return categoryMap[category] || 'Tech';
}

// 간단한 XML 파싱 함수
function parseRSSXML(xmlString: string) {
  const items: any[] = [];
  
  // <item> 태그들을 찾아서 파싱
  const itemMatches = xmlString.match(/<item[^>]*>([\s\S]*?)<\/item>/g);
  
  if (itemMatches) {
    itemMatches.forEach((itemXML, index) => {
      const title = itemXML.match(/<title[^>]*><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || 
                   itemXML.match(/<title[^>]*>(.*?)<\/title>/)?.[1] || 'Untitled';
      
      const link = itemXML.match(/<link[^>]*>(.*?)<\/link>/)?.[1] || '#';
      
      const description = itemXML.match(/<description[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] || 
                         itemXML.match(/<description[^>]*>([\s\S]*?)<\/description>/)?.[1] || '';
      
      const pubDate = itemXML.match(/<pubDate[^>]*>(.*?)<\/pubDate>/)?.[1] || new Date().toISOString();
      
      const category = itemXML.match(/<category[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/)?.[1] || 
                      itemXML.match(/<category[^>]*>(.*?)<\/category>/)?.[1] || 'Tech';
      
      const guid = itemXML.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1] || link;
      
      items.push({
        title,
        link,
        description,
        pubDate,
        category,
        guid
      });
    });
  }
  
  return { items };
}

export async function GET() {
  try {
    console.log('RSS 피드 요청 시작...');
    
    const response = await fetch('https://seongw00.tistory.com/rss', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      console.log('HTTP 에러:', response.status, response.statusText);
      // 임시로 더미 데이터 반환
      const dummyPosts = [
        {
          id: '1',
          title: 'AWS EC2 인스턴스 설정 가이드',
          excerpt: 'AWS EC2 인스턴스를 처음 설정할 때 알아야 할 기본 사항들을 정리했습니다. 보안 그룹 설정부터 키 페어 관리까지 단계별로 설명합니다.',
          content: 'AWS EC2 인스턴스를 처음 설정할 때 알아야 할 기본 사항들을 정리했습니다.',
          category: 'AWS',
          url: 'https://seongw00.tistory.com',
          date: new Date().toISOString().split('T')[0],
          readTime: 8,
          featured: true
        },
        {
          id: '2',
          title: 'Docker 컨테이너 최적화 방법',
          excerpt: 'Docker 이미지 크기를 줄이고 컨테이너 성능을 향상시키는 실용적인 방법들을 소개합니다. 멀티 스테이지 빌드와 레이어 캐싱 활용법을 다룹니다.',
          content: 'Docker 이미지 크기를 줄이고 컨테이너 성능을 향상시키는 방법들을 소개합니다.',
          category: 'Docker',
          url: 'https://seongw00.tistory.com',
          date: new Date().toISOString().split('T')[0],
          readTime: 12,
          featured: true
        },
        {
          id: '3',
          title: 'Kubernetes 트러블슈팅 가이드',
          excerpt: '실무에서 자주 발생하는 Kubernetes 문제들과 해결 방법을 정리했습니다. Pod 상태 확인부터 네트워크 이슈까지 체계적으로 접근하는 방법을 설명합니다.',
          content: '실무에서 자주 발생하는 Kubernetes 문제들과 해결 방법을 정리했습니다.',
          category: 'Kubernetes',
          url: 'https://seongw00.tistory.com',
          date: new Date().toISOString().split('T')[0],
          readTime: 15,
          featured: true
        }
      ];
      return NextResponse.json({ posts: dummyPosts });
    }
    
    const xmlText = await response.text();
    console.log('RSS XML 길이:', xmlText.length);
    
    const feed = parseRSSXML(xmlText);
    console.log('파싱된 아이템 수:', feed.items.length);
    
    const posts = feed.items.map((item, index) => {
      const content = item.description || '';
      const category = item.category || 'Tech';
      
      // 디버깅을 위한 로그 (첫 번째 아이템만)
      if (index === 0) {
        console.log('첫 번째 포스트 원본 제목:', item.title);
        console.log('첫 번째 포스트 원본 설명 (처음 200자):', content.substring(0, 200));
      }
      
      const cleanedTitle = cleanTitle(item.title || 'Untitled');
      const cleanedExcerpt = createExcerpt(content);
      
      // 디버깅을 위한 로그 (첫 번째 아이템만)
      if (index === 0) {
        console.log('정리된 제목:', cleanedTitle);
        console.log('정리된 설명:', cleanedExcerpt);
      }
      
      return {
        id: item.guid || item.link || `post-${index}`,
        title: cleanedTitle,
        excerpt: cleanedExcerpt,
        content: content,
        category: mapCategory(category),
        url: item.link || '#',
        date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        readTime: calculateReadTime(content),
        featured: index < 3 // 최신 3개 포스트를 featured로 설정
      };
    });

    console.log('변환된 포스트 수:', posts.length);
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('RSS 피드를 가져오는데 실패했습니다:', error);
    console.error('에러 상세:', error instanceof Error ? error.message : String(error));
    
    // 에러 발생 시 더미 데이터 반환
    const dummyPosts = [
      {
        id: '1',
        title: 'Linux 시스템 모니터링 명령어',
        excerpt: 'top, htop, vmstat 등 시스템 관리자가 알아야 할 필수 모니터링 명령어들을 정리했습니다. 각 명령어의 옵션과 실제 사용 예시를 포함합니다.',
        content: 'Linux 시스템 모니터링에 필요한 명령어들을 정리했습니다.',
        category: 'Linux',
        url: 'https://seongw00.tistory.com',
        date: new Date().toISOString().split('T')[0],
        readTime: 6,
        featured: true
      },
      {
        id: '2',
        title: 'CI/CD 파이프라인 구축하기',
        excerpt: 'GitHub Actions를 활용한 자동화된 빌드, 테스트, 배포 파이프라인을 구축하는 방법을 단계별로 설명합니다. 실제 프로젝트에 적용할 수 있는 예시 코드를 포함합니다.',
        content: 'GitHub Actions를 활용한 CI/CD 파이프라인 구축 방법을 설명합니다.',
        category: 'DevOps',
        url: 'https://seongw00.tistory.com',
        date: new Date().toISOString().split('T')[0],
        readTime: 10,
        featured: false
      }
    ];
    
    return NextResponse.json({ posts: dummyPosts });
  }
}