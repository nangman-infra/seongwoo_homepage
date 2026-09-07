export const portfolioData = {
  nav: {
    brand: "Seongwoo",
  },

  hero: {
    eyebrow: "Cloud Infra Engineer",
    title: "안정적인 인프라를\n설계합니다.",
    description:
      "클라우드와 네트워크 등 전반적인 CS 지식 학습 및 직접 인프라를 구축•운영 해보며 수많은 장애 상황을 극복해나갑니다.",
    primaryCta: { label: "프로젝트 보기", href: "#projects" },
    secondaryCta: { label: "GitHub", href: "https://github.com/swtae0214" },
    tertiaryCta: { label: "Tistory", href: "https://seongw00.tistory.com/" },
  },

  statement: {
    quote: '"왜 이 아키텍처여야 하는가"를\n끊임없이 고민합니다.',
    description:
      "실패를 두려워하지 않고, 직접 구축하고 부딪히며 이론을 실전 지식으로 체화합니다.",
  },

  about: {
    title: "About Me",
    story:
      "인프라의 매력을 찾아 모험을 떠나는 학부생입니다. 컴퓨터공학과에 재학중이며, 기초 CS 지식 습득을 위한 학업과 사이드 프로젝트를 진행중입니다. 안정적이고 효율적인 서버 인프라 환경을 구축해주는 엔지니어가 되고싶습니다.",
    tags: ["클라우드", "ROS", "네트워크", "운영체제", "시스템 프로그래밍"],
    photo: "/selfi.jpg",
  },

  projects: [
    {
      id: 1,
      title: "Nangman-ArchLab",
      summary:
        "클라우드 인프라 아키텍처를 캔버스에 직접 설계하고, 정적 검증과 큐잉 이론 기반 시뮬레이션으로 SPOF·가용성·성능을 검증해보는 GUI 학습 서비스.",
      techStack: ["Next.js", "NestJS", "PostgreSQL", "React Flow"],
      architectureDiagram: "Nangman-ArchLab 아키텍처 다이어그램",
      architectureImage: "/projects/nangman-archlab.png",
      architectureImageWidth: 1917,
      architectureImageHeight: 912,
      githubUrl: "https://github.com/swtae0214/Nangman-ArcLab",
      blogUrl: "https://blog.example.com/multi-cloud-automation",
    },
    {
      id: 2,
      title: "모니터링 대시보드 구축",
      summary:
        "Zabbix·Netdata 기반 개인 서버에 USE/RED 방법론을 적용해, 장애 원인 파악 시간을 줄이는 4단계 구조의 Grafana 모니터링 대시보드를 구축.",
      techStack: ["Grafana", "Zabbix", "Netdata", "Prometheus"],
      architectureDiagram: "모니터링 대시보드 아키텍처",
      architectureImage: "/projects/monitoring-stack.png",
      architectureImageWidth: 863,
      architectureImageHeight: 484,
      blogUrl: "https://seongw00.tistory.com/31",
    },
    {
      id: 3,
      title: "REVEYE",
      summary: "상품 리뷰를 쉽게 이해할 수 있도록 요약·분석해주는 웹 서비스.",
      techStack: ["Python", "Firebase", "API"],
      architectureDiagram: "리뷰 데이터 처리 아키텍처",
      githubUrl: "https://github.com/OSP-PJ/RevKeyRec.git",
      blogUrl: "https://blog.example.com/gitops-implementation",
    },
    {
      id: 4,
      title: "스마트 신호등 시스템",
      summary: "라즈베리파이와 UART 통신으로 구현한 스마트 신호 제어 시스템.",
      techStack: ["UART", "Raspberry Pi", "OpenCV", "Python"],
      architectureDiagram: "신호 제어 시스템 다이어그램",
      githubUrl: "https://github.com/username/serverless-data",
      blogUrl: "https://blog.example.com/serverless-data-pipeline",
    },
  ],

  skills: {
    "인프라 & 클라우드": ["AWS", "Docker", "Terraform"],
    "백엔드 & 네트워킹": ["Node.js", "Python", "PostgreSQL", "Load Balancing"],
    "CI/CD & 자동화": ["Git", "GitHub Actions", "Jenkins"],
  },

  contact: {
    github: "https://github.com/swtae0214",
    linkedin: "https://www.linkedin.com/in/성우-태-77620b386",
    email: "swtae0214@gmail.com",
  },
};
