export const portfolioData = {
  hero: {
    tagline: "Architecting Reliability",
    subtitle: "Cloud Engineer Student",
  },
  
  about: {
    title: "About Me",
    story: `인프라의 매력을 찾아 모험을 떠나는 학부생입니다.
    컴퓨터공학과에 재학중이며, 기초 CS 지식 습득을 위한 학업과 사이드 프로젝트를 진행중입니다. 
    안정적이고 효율적인 서버 인프라 환경을 구축해주는 엔지니어가 되고싶습니다.`,
  },

  projects: [
    {
      id: 1,
      title: "MoA",
      summary: "인지증 인식 개선 프로젝트",
      techStack: ["Next.js", "Naver Cloud", "Docker"],
      architectureDiagram: "로드 밸런싱을 포함한 멀티 클라우드 배포 아키텍처",
      githubUrl: "https://github.com/PublicIsDJ/moa-app.git",
      blogUrl: "https://blog.example.com/multi-cloud-automation",
    },
    {
      id: 2,
      title: "Drone Dilivery Project",
      summary: "Parrot드론을 PWA 환경에서의 제어를 통한 자동 배달 서비스",
      techStack: ["Parrot SDK", "Next.js", "Doker"],
      architectureDiagram: "메트릭 수집 파이프라인을 포함한 K8s 모니터링 아키텍처",
      githubUrl: "https://github.com/DroneDelivery2/Embedded_PJ.git",
      blogUrl: "https://blog.example.com/k8s-monitoring-setup",
    },
    {
      id: 3,
      title: "REVEYE",
      summary: "상품 리뷰를 쉽게 이해하는 혁신적 웹서비스",
      techStack: ["Python", "FireBase", "API", "Git"],
      architectureDiagram: "자동화된 테스트와 배포를 포함한 GitOps 워크플로우",
      githubUrl: "https://github.com/OSP-PJ/RevKeyRec.git",
      blogUrl: "https://blog.example.com/gitops-implementation",
    },
    {
      id: 4,
      title: "스마트 신호등 시스템",
      summary: "라즈베리파이와 UART 통신을 통한 스마트 신호 시스템 구축",
      techStack: ["UART", "Raspberry pi", "OpenCV", "Python"],
      architectureDiagram: "데이터 처리를 위한 서버리스 이벤트 기반 아키텍처",
      githubUrl: "https://github.com/username/serverless-data",
      blogUrl: "https://blog.example.com/serverless-data-pipeline",
    },
  ],

  skills: {
    "인프라 & 클라우드": [
      "AWS", "Docker", "AWS Certified Cloud Practitioner"
    ],
    "CI/CD & 자동화": [
      
    ],
    "백엔드 & 네트워킹": [
      "Node.js", "Python", "PostgreSQL", "Load Balancing"
    ],
  },

  contact: {
    github: "https://github.com/swtae0214",
    linkedin: "www.linkedin.com/in/성우-태-77620b386",
    email: "swtae0214@gmail.com",
  },
};