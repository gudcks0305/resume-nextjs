import { IProject } from '../../component/project/IProject';

export const acca: IProject.Item = {
  title: 'AI 역량검사 센터 (ACCA)',
  startedAt: '2025-05',
  where: '마이다스인 (백엔드 개발자)',
  descriptions: [
    {
      content:
        '기술 스택: Java 21, Spring Boot 3.3, Spring AI 1.0, Langchain4j, OpenAI GPT-5, OpenAI STT/TTS, JPA/Hibernate, Querydsl, MariaDB, MongoDB, Redis, Kafka',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'LLM 기반 면접/평가 기능은 응답 형식 불일치, 장시간 평가 중단, 평가 기준 누락이 곧 운영 리스크와 공정성 문제로 이어질 수 있었습니다.',
            },
            {
              content:
                'AI 면접, 실무능력 LLM 런타임, NCS/공공 역검, 파일/엑셀 배치, 스케줄러, 멀티테넌트 DB가 12개 독립 모듈에 걸쳐 있어 서비스 간 계약과 데이터 경계를 명확히 잡아야 했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '질문 계획, 답변 추적, 꼬리질문, Phase2 생성, 결과 outbox 발행 흐름을 설계하고 durable worker queue를 도입해 장시간 평가의 재시도/복구 가능성을 확보했습니다.',
            },
            {
              content:
                'MongoDB 기반 session, turn, event log, trace, transcript, runtime inbox/outbox 문서 모델을 설계해 LLM 런타임 상태를 durable state로 저장했습니다.',
            },
            {
              content:
                'Kafka topic/DTO, Redis lock/progress cache, 질문 출처 enum, TTS scene 분기 기준을 공통 계약으로 이동해 acca-llm, acca-examinee, acca-core 간 연동 경계를 정리했습니다.',
            },
            {
              content:
                'GPT-5 기반 Spring AI ChatClient, Tool 호출, JSON Schema Structured Output으로 면접 질문 생성/평가기준 검증 흐름을 설계해 <b>면접 질문 설계 시간 70% 단축</b>에 기여했습니다.',
            },
            {
              content:
                'OpenAI native SDK 기반 STT/TTS, realtime STT client secret, 파일 전사 API, TTS streaming/cache/voice option, Langfuse trace/rate-limit logging을 서비스 경계에 맞게 분리했습니다.',
            },
          ],
        },
        {
          content: '결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '12개 독립 모듈의 ACCA 채용 평가 플랫폼 백엔드를 담당하며 LLM 런타임, AI 면접, NCS/공공 역검, 파일/엑셀 배치, 스케줄러, 멀티테넌트 DB 영역을 구현했습니다.',
            },
            {
              content:
                'ACC/NCS 통합 전형 운영을 위해 필터, 설정 검증, 결과/코멘트/점수 변환, LLM-friendly 결과표 텍스트화, mental health fact, 주목 역량 코드 노출을 백엔드와 데이터 모델에 반영했습니다.',
            },
            {
              content:
                'Querydsl 기반 조회 처리, Fetch Join, where in 일괄 조회, batch size 설정으로 <b>쿼리 93% 감소</b> 및 대용량 엑셀 OOM 리스크를 완화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};
