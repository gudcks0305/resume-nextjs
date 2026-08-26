import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '마이다스인',
      position: 'BACKEND DEVELOPER',
      startedAt: '2025-05',
      descriptions: [
        '<b>AI 역량검사 센터(ACCA) 백엔드 개발</b> - AI 면접/평가, LLM 런타임, 대용량 배치, 스케줄러, 멀티테넌트 데이터 영역 개발 및 운영',
        '- 4만 명 규모 메일·SMS 파이프라인을 cursor batch와 Kafka 비동기 처리로 개선하고, ST2 41,289명 검증에서 약 14.5만 건의 상태 event backlog를 <b>13분 34초 만에 해소</b>',
        '- durable worker queue, runtime state, inbox/outbox와 재시도·복구 흐름을 설계해 장시간 LLM 평가 중단과 중복 처리 리스크를 완화',
        '- Querydsl 조회 최적화와 대용량 엑셀 처리 구조 개선으로 관리자 조회 쿼리를 <b>93% 감소</b>시키고 OOM 리스크를 완화',
        '- QA/배포 이슈를 재현 조건, 영향 범위, 원인 후보 단위로 정리하고 DevOps/기획/동료 개발자와 함께 운영 병목과 반복 장애를 개선',
      ],
      skillKeywords: [
        'Java 21',
        'Spring Boot 3.3',
        'Spring AI',
        'Langchain4j',
        'OpenAI GPT-5',
        'OpenAI STT/TTS',
        'JPA/Hibernate',
        'Querydsl',
        'MariaDB',
        'MongoDB',
        'Redis',
        'Kafka',
      ],
    },
    {
      title: '그릿스탠다드',
      position: 'BACKEND DEVELOPER',
      startedAt: '2023-04',
      endedAt: '2025-02',
      descriptions: [
        '<b>물류 플랫폼/ERP 백엔드 개발 및 클라우드 운영</b> - API, 데이터 모델, 문서 처리, 이벤트 파이프라인과 배포 환경 개발',
        '- AWS Kubernetes 환경과 Docker, ArgoCD 기반 GitOps 배포 파이프라인을 도입하고 FastAPI Blocking I/O, JVM/Kubernetes 리소스 설정 등 운영 병목을 개선',
        '- AWS Lambda, Kafka MSK, S3, Elasticsearch 기반 이메일 처리 시스템을 개발하고 CloudWatch 로그/알람과 장애 복구 흐름을 구성',
        '- Java Lambda에 SnapStart를 적용해 cold start를 <b>10초에서 1초</b> 수준으로 단축하고, 물류 ERP 웹 전환과 자동화를 통해 운영 효율을 개선',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'JPA',
        'Querydsl',
        'Python',
        'FastAPI',
        'Kubernetes',
        'EKS',
        'ArgoCD',
        'AWS Lambda',
        'Kafka MSK',
        'MySQL',
      ],
    },
  ],
};

export default experience;
