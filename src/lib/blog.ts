export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  url: string;
  date: string;
  readTime: number;
  featured: boolean;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blog');
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('블로그 포스트를 가져오는데 실패했습니다:', error);
    return [];
  }
}