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
        '- 메일·SMS 발송 아키텍처를 직접 재설계해 <b>5만 건의 외부 큐 적재 완료 시간을 2시간에서 1분으로 단축</b>하고, SES 발송 단계에서 <b>초당 약 40건</b> 처리량 달성',
        '- LLM 면접·평가 파이프라인을 직접 설계·구현하고, 영속 작업 큐와 inbox/outbox 기반 재시도·복구 구조로 평가 중단과 중복 처리 리스크 완화',
        '- 관리자 조회의 인덱스·쿼리를 직접 재설계해 <b>전체 스캔을 인덱스 기반 조회로 전환</b>하고, 대량 엑셀의 배치 처리로 OOM 위험 완화',
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
