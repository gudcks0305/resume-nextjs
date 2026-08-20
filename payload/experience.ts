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
        '<b>AI 역량검사 센터(ACCA) 백엔드 개발</b> - AI 기반 채용 평가 플랫폼의 LLM 런타임, AI 면접, NCS/공공 역검, 파일/엑셀 배치, 스케줄러, 멀티테넌트 DB 영역 담당',
        '- 4만 명 규모 메일·SMS 파이프라인을 200건 cursor batch와 Kafka 비동기 상태 처리로 개선하고, ST2 41,289명 검증에서 약 14.5만 건의 상태 event backlog를 <b>13분 34초 만에 해소</b>',
        '- 행 잠금과 처리 시도 ID로 중복 선점을 방지하고, 15분 WAITING 복구·동일 발송 ID 재조회·graceful shutdown을 구성해 서버 재시작 후 남은 상태부터 이어가는 장애 복구 흐름을 구현',
        '- AI 면접/평가 품질 저하가 서비스 신뢰도에 바로 영향을 주는 영역에서 STT/TTS, LLM 평가 흐름, 결과표 데이터 안정성을 개선',
        '- 장시간 평가 중단, 응답 형식 불일치, 평가 기준 누락을 줄이기 위해 runtime state, worker queue, inbox/outbox 기반 복구 구조 설계',
        '- 공통 요청 경로와 운영 조회 성능을 점검해 반복 비용을 줄이고, 대용량 엑셀/배치 처리의 운영 리스크를 완화',
        '- QA/배포 이슈를 재현 조건, 영향 범위, 원인 후보 단위로 정리하고 DevOps/기획/동료 개발자와 병목을 공유해 일정 리스크를 낮춤',
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
        '<b>물류 플랫폼/ERP 백엔드 개발 및 인프라 운영</b>',
        '- 물류 플랫폼/ERP의 핵심 백엔드 API, 데이터 모델, 문서 처리, 운영 자동화 기능 개발',
        '- 메일 시스템 동시성 문제와 Elasticsearch/RDBMS 상태 동기화 문제를 개선해 고객에게 노출될 수 있는 중복/누락 리스크 축소',
        '- FastAPI Blocking I/O 병목, Kubernetes 리소스/JVM 옵션, Deployment 제약을 개선해 운영 지연과 인프라 비용 낭비를 줄임',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'JPA',
        'Querydsl',
        'Kubernetes',
        'MySQL',
        'AWS',
        'Python',
        'FastAPI',
      ],
    },
  ],
};

export default experience;
