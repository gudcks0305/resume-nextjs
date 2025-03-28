import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      // level: 3,
    },
    {
      title: 'Gradle',
      // level: 3,
    },
    {
      title: 'Spring Boot',
      // level: 3,
    },
    {
      title: 'Spring MVC',
      // level: 3,
    },
    {
      title: 'Spring Security',
      // level: 2,
    },
    {
      title: 'Spring Cloud',
      // level: 2,
    },
    {
      title: 'Spring Data JPA',
      // level: 2,
    },
    {
      title: 'Querydsl',
      // level: 2,
    },
    {
      title: 'Nginx',
      // level: 2,
    },
    {
      title: 'Python FastAPI',
      // level: 2,
    },
    // {
    //   title: 'Querydsl',
    //   // level: 1,
    // },
    // {
    //   title: 'Nginx',
    //   // level: 1,
    // },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      // level: 3,
    },
    {
      title: 'Redis',
      // level: 2,
    },
    // {
    //   title: 'Oracle',
    //   level: 1,
    // },
    // {
    //   title: 'MongoDB',
    //   level: 1,
    // },
  ],
};

// const frontend: ISkill.Skill = {
//   category: 'Front-end',
//   items: [
//     {
//       title: 'Next.js',
//       level: 2,
//     },
//     {
//       title: 'React.js',
//       level: 2,
//     },
//     {
//       title: 'javascript',
//       level: 2,
//     },
//     {
//       title: 'HTML/CSS',
//       level: 2,
//     },
//   ],
// };

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Git',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Vim',
    },
    {
      title: 'VS Code',
    },
  ],
};

const Studying: ISkill.Skill = {
  category: 'Studying',
  items: [
    {
      title: 'Kubernetes',
    },
    {
      title: 'AWS',
    },
    {
      title: 'Go language',
    },
  ],
};

const Infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'Kubernetes',
      // level: 2,
    },
    {
      title: 'ArgoCD',
      // level: 2,
    },
    {
      title: 'AWS CloudWatch',
      // level: 2,
    },
    {
      title: 'AWS EC2',
      // level: 2,
    },
    {
      title: 'AWS VPC',
      // level: 2,
    },
    {
      title: 'AWS EKS',
      // level: 2,
    },
    {
      title: 'AWS S3',
      // level: 2,
    },
    {
      title: 'AWS Lambda',
      // level: 2,
    },
    {
      title: 'Oracle Cloud Kubernetes (OKE)',
      // level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, Infrastructure, database, etc, Studying],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
