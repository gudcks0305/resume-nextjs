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
                'LLM 기반 면접/평가 기능은 응답 형식 불일치, 장시간 평가 중단, 평가 기준 누락이 곧 고객 신뢰도와 결과 데이터 신뢰성 리스크로 이어질 수 있었습니다.',
            },
            {
              content:
                'AI 면접, 실무능력 LLM 런타임, NCS/공공 역검, 파일/엑셀 배치, 스케줄러, 멀티테넌트 DB가 12개 독립 모듈에 걸쳐 있어 장애 원인 추적과 팀 간 변경 조율이 어려운 구조였습니다.',
            },
            {
              content:
                '4만 명 규모 안내 발송에서 전형 전체 대상·본문 적재, 장기 tenant transaction, 순차 Kafka 발행이 메모리·DB 부하와 서버 재시작 후 중복 발송 위험으로 이어졌습니다.',
            },
          ],
        },
        {
          content: '핵심 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'LLM 런타임',
              weight: 'MEDIUM',
              descriptions: [
                {
                  content:
                    '평가 중단 시 고객 응시 경험이 끊기지 않도록 질문 계획, 답변 추적, 꼬리질문, Phase2 생성, 결과 outbox 발행 흐름을 설계하고 durable worker queue를 도입했습니다.',
                },
                {
                  content:
                    '장시간 평가의 재현/복구 근거를 남기기 위해 MongoDB 기반 session, turn, event log, trace, transcript, runtime inbox/outbox 문서 모델로 런타임 상태를 저장했습니다.',
                },
                {
                  content:
                    '모듈 간 변경 충돌을 줄이기 위해 Kafka topic/DTO, Redis lock/progress cache, 질문 출처 enum, TTS scene 분기 기준을 공통 계약으로 이동했습니다.',
                },
              ],
            },
            {
              content: 'AI 연동/관측성',
              weight: 'MEDIUM',
              descriptions: [
                {
                  content:
                    '면접 품질이 곧 서비스 신뢰도로 이어지는 영역에서 OpenAI native SDK 기반 STT/TTS, realtime STT client secret, 파일 전사 API, TTS streaming/cache/voice option을 분리 구현했습니다.',
                },
                {
                  content:
                    'LLM 장애와 비용 이슈를 감으로 추적하지 않도록 Langfuse trace, prompt link, token/rate-limit metadata logging을 보강했습니다.',
                },
              ],
            },
            {
              content: '평가/결과표 도메인',
              weight: 'MEDIUM',
              descriptions: [
                {
                  content:
                    '기획/운영 담당자의 질문 설계 시간을 줄이기 위해 GPT-5 기반 Spring AI ChatClient, Tool 호출, JSON Schema Structured Output으로 면접 질문 생성/평가기준 검증 흐름을 설계했습니다.',
                },
                {
                  content:
                    '전형 운영 중 설정 오류와 결과 해석 혼선을 줄이기 위해 ACC/NCS 필터, 설정 검증, 결과/코멘트/점수 변환, 평가 보조 지표 노출을 데이터 모델에 반영했습니다.',
                },
                {
                  content:
                    '결과표를 다양한 소비 경로에서 안정적으로 활용하도록 LLM-friendly 결과표 텍스트화, section separator, Apache POI 기반 엑셀 생성, 출력용 블라인드 옵션을 구현했습니다.',
                },
              ],
            },
            {
              content: '성능/운영 안정화',
              weight: 'MEDIUM',
              descriptions: [
                {
                  content:
                    '전형 전체 적재 구조를 200건 cursor batch와 최대 4개 묶음의 Kafka 비동기 callback으로 분리하고, 발행 결과를 조건부 bulk update로 반영했습니다.',
                },
                {
                  content:
                    '메일·SMS consumer를 4개 partition에 맞춰 병렬화하고 poll 크기를 10건으로 조정했으며, 상태 변경이 없는 이벤트는 DB 접근 전에 종료했습니다.',
                },
                {
                  content:
                    'SMS fallback polling을 100건 cursor 조회와 JDBC batch update로 전환하고 외부 API 호출을 transaction 밖으로 이동해 DB 점유 범위를 축소했습니다.',
                },
                {
                  content:
                    'CMS 발송 결과 조회를 애플리케이션 후처리에서 DB status/name filter와 page/count 조회로 전환해 대량 조회 비용과 상태 정합성 문제를 개선했습니다.',
                },
                {
                  content:
                    '행 잠금·처리 시도 ID로 중복 선점을 방지하고 발행 결과를 50건 또는 첫 결과 후 1초마다 반영했으며, 15분 WAITING 복구와 동일 발송 ID 재조회·graceful shutdown으로 상태별 재개 흐름을 구성했습니다.',
                },
                {
                  content:
                    '관리자 조회 지연과 반복 쿼리 비용을 줄이기 위해 Querydsl, Fetch Join, where in 일괄 조회, batch size 설정을 적용했습니다.',
                },
                {
                  content:
                    '대량 응시자 결과표 처리 중 OOM과 운영 지연을 줄이기 위해 SXSSFWorkbook, pagination, batch size, map-in 조회, SQL 기반 복사 흐름을 적용했습니다.',
                },
                {
                  content:
                    'DevOps 팀의 DB 운영 부담을 줄이기 위해 성능 개선 전후 비교 근거를 남기고, S3/temp cleanup, 전형 삭제 FK 정리로 배치 안정성을 개선했습니다.',
                },
              ],
            },
          ],
        },
        {
          content: '결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'ST2 41,289명 부하 검증에서 약 14.5만 건의 Kafka 상태 event backlog를 <b>13분 34초 만에 해소</b>했고, 관련 <b>자동화 테스트 147건을 통과</b>했습니다.',
            },
            {
              content:
                '12개 독립 모듈에 걸친 채용 평가 플랫폼에서 장애 원인 추적, 재시도/복구, 결과 데이터 일관성을 확보하는 백엔드 기반을 마련했습니다.',
            },
            {
              content:
                '운영자 질문 설계 플로우 기준으로 Spring AI 기반 질문 생성/평가기준 검증을 적용해 <b>면접 질문 설계 시간 70% 단축</b>에 기여했습니다.',
            },
            {
              content:
                '관리자 조회 쿼리 수 비교 기준으로 Querydsl 조회 최적화를 적용해 <b>쿼리 93% 감소</b> 및 대용량 엑셀 OOM 리스크 완화에 기여했습니다.',
            },
          ],
        },
      ],
    },
  ],
};
