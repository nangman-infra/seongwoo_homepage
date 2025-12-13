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
      title: "멀티 클라우드 인프라 자동화",
      summary: "Terraform 기반 AWS와 Azure 인프라 프로비저닝",
      techStack: ["Terraform", "AWS", "Azure", "Docker", "GitHub Actions"],
      architectureDiagram: "로드 밸런싱을 포함한 멀티 클라우드 배포 아키텍처",
      githubUrl: "https://github.com/username/multi-cloud-infra",
      blogUrl: "https://blog.example.com/multi-cloud-automation",
    },
    {
      id: 2,
      title: "쿠버네티스 모니터링 스택",
      summary: "Prometheus와 Grafana를 활용한 완전한 관측성 솔루션",
      techStack: ["Kubernetes", "Prometheus", "Grafana", "Helm", "AlertManager"],
      architectureDiagram: "메트릭 수집 파이프라인을 포함한 K8s 모니터링 아키텍처",
      githubUrl: "https://github.com/username/k8s-monitoring",
      blogUrl: "https://blog.example.com/k8s-monitoring-setup",
    },
    {
      id: 3,
      title: "GitOps 기반 CI/CD 파이프라인",
      summary: "ArgoCD와 Jenkins를 활용한 자동화된 배포 파이프라인",
      techStack: ["ArgoCD", "Jenkins", "Docker", "Kubernetes", "Git"],
      architectureDiagram: "자동화된 테스트와 배포를 포함한 GitOps 워크플로우",
      githubUrl: "https://github.com/username/gitops-pipeline",
      blogUrl: "https://blog.example.com/gitops-implementation",
    },
    {
      id: 4,
      title: "서버리스 데이터 처리",
      summary: "AWS Lambda와 SQS를 활용한 이벤트 기반 데이터 파이프라인",
      techStack: ["AWS Lambda", "SQS", "DynamoDB", "CloudWatch", "Python"],
      architectureDiagram: "데이터 처리를 위한 서버리스 이벤트 기반 아키텍처",
      githubUrl: "https://github.com/username/serverless-data",
      blogUrl: "https://blog.example.com/serverless-data-pipeline",
    },
  ],

  skills: {
    "인프라 & 클라우드": [
      "AWS", "Docker"
    ],
    "CI/CD & 자동화": [
      "Jenkins", "GitHub Actions", "ArgoCD", "Ansible", "Helm", "GitOps"
    ],
    "백엔드 & 네트워킹": [
      "Node.js", "Python", "Go", "PostgreSQL", "Redis", "Nginx", "Load Balancing"
    ],
  },

  contact: {
    github: "https://github.com/swtae0214",
    linkedin: "www.linkedin.com/in/성우-태-77620b386",
    email: "swtae0214@gmail.com",
  },
};