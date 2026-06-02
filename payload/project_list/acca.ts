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
          content: '핵심 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '12개 독립 모듈의 ACCA 채용 평가 플랫폼 백엔드를 담당하며 AI 면접, 실무능력 LLM 런타임, NCS/공공 역검, 파일/엑셀 배치, 스케줄러, 멀티테넌트 DB 영역을 구현.',
            },
            {
              content:
                '실무능력 평가용 LLM 런타임에서 질문 계획, 답변 추적, 꼬리질문, Phase2 생성, 결과 outbox 발행 흐름을 구축하고 durable worker queue를 도입해 장시간 평가 흐름의 재시도/복구 가능성을 확보.',
            },
            {
              content:
                'OpenAI native SDK 기반 STT/TTS, realtime STT client secret, 파일 전사 API, TTS streaming/cache/voice option, Langfuse trace/rate-limit logging을 서비스 경계에 맞게 분리.',
            },
            {
              content:
                'MongoDB 기반 session, turn, event log, trace, transcript, runtime inbox/outbox 문서 모델을 설계해 LLM 런타임 상태를 durable state로 저장.',
            },
            {
              content:
                'Querydsl 기반 조회 처리, Fetch Join, where in 일괄 조회, batch size 설정으로 <b>쿼리 93% 감소</b> 및 대용량 엑셀 OOM 리스크 완화.',
            },
          ],
        },
        {
          content: '담당 역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'GPT-5 기반 Spring AI ChatClient, Tool 호출, JSON Schema Structured Output으로 면접 질문 생성/평가기준 검증 흐름을 설계해 <b>면접 질문 설계 시간 70% 단축</b>.',
            },
            {
              content:
                'CMS AI 면접 질문 생성기와 큐레이터 챗봇 API를 구현하며 프롬프트, 평가기준 매핑, validation, chat history, 저장 구조를 정비.',
            },
            {
              content:
                'ACC/NCS 통합 전형 운영을 위해 필터, 설정 검증, 결과/코멘트/점수 변환, LLM-friendly 결과표 텍스트화, mental health fact, 주목 역량 코드 노출을 백엔드와 데이터 모델에 반영.',
            },
            {
              content:
                'Kafka topic/DTO, Redis lock/progress cache, 질문 출처 enum, TTS scene 분기 기준을 공통 계약으로 이동해 acca-llm, acca-examinee, acca-core 간 런타임 연동 경계를 정리.',
            },
            {
              content:
                '외부 API 호출 클래스를 트랜잭션 경계 밖으로 분리해 응시자 runtime API의 DB transaction 점유 시간을 줄이고, STOMP/HTTP 인증 경계를 구성.',
            },
            {
              content:
                '대량 안내 메일 스케줄러의 DB churn을 줄이고 Querydsl Q-type startup warmup, S3/temp cleanup, 전형 삭제 FK 정리로 운영 배치 안정성을 개선.',
            },
          ],
        },
      ],
    },
  ],
};
