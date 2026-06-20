import { ISkill } from '../component/skill/ISkill';

const coreBackend: ISkill.Skill = {
  category: 'Core Backend',
  items: [
    { title: 'Java 21' },
    { title: 'Spring Boot' },
    { title: 'Spring Data JPA' },
    { title: 'Querydsl' },
    { title: 'Batch/Excel Processing' },
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

const dataPerformance: ISkill.Skill = {
  category: 'Data & Performance',
  items: [
    { title: 'MariaDB/MySQL' },
    { title: 'MongoDB' },
    { title: 'Redis' },
    { title: 'Kafka' },
    { title: 'Performance Testing' },
  ],
};

const cloudOperations: ISkill.Skill = {
  category: 'Cloud & Ops',
  items: [
    { title: 'Kubernetes' },
    { title: 'EKS' },
    { title: 'ArgoCD' },
    { title: 'AWS Lambda' },
    { title: 'CloudWatch' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [coreBackend, aiRuntime, dataPerformance, cloudOperations],
};

export default skill;
