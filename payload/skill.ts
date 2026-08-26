import { ISkill } from '../component/skill/ISkill';

const platformCloud: ISkill.Skill = {
  category: 'Platform & Cloud',
  items: [
    { title: 'Kubernetes' },
    { title: 'EKS' },
    { title: 'ArgoCD' },
    { title: 'AWS Lambda' },
    { title: 'CloudWatch' },
  ],
};

const distributedData: ISkill.Skill = {
  category: 'Distributed & Data',
  items: [
    { title: 'Kafka' },
    { title: 'Redis' },
    { title: 'MariaDB/MySQL' },
    { title: 'MongoDB' },
    { title: 'Performance Testing' },
  ],
};

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Java 21' },
    { title: 'Spring Boot' },
    { title: 'Spring Data JPA' },
    { title: 'Querydsl' },
    { title: 'Python / FastAPI' },
  ],
};

const aiRuntime: ISkill.Skill = {
  category: 'AI Runtime',
  items: [
    { title: 'Spring AI' },
    { title: 'Langchain4j' },
    { title: 'OpenAI GPT' },
    { title: 'STT/TTS' },
    { title: 'Langfuse' },
  ],
};

const systemsOpenSource: ISkill.Skill = {
  category: 'Systems / Open Source',
  items: [
    { title: 'Rust' },
    { title: 'macOS Mach API' },
    { title: 'Mach-O' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [platformCloud, distributedData, backend, aiRuntime, systemsOpenSource],
};

export default skill;
