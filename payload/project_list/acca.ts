import { IProject } from '../../component/project/IProject';

export const acca: IProject.Item = {
  title: 'AI 역량검사 센터 (ACCA)',
  startedAt: '2025-10',
  where: '마이다스인 (백엔드 개발자)',
  descriptions: [
    {
      content:
        '기술 스택: Java 21, Spring Boot 3.3, Spring AI 1.0, Langchain4j, OpenAI GPT-4, JPA/Hibernate, QueryDSL, MariaDB, Redis, Kafka',
      weight: 'BOLD',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '채용 담당자가 인재 조건만 설정하면 <b>LLM이 맞춤형 면접 질문과 평가 기준을 자동 생성</b>하는 AI 기반 HR-Tech 평가 시스템.',
            },
            {
              content:
                '공공기관 <b>NCS(국가직무능력표준)</b> 기반 채용 프로세스 대응을 위한 역량검사 결과 분석 및 리포팅 시스템.',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Spring AI ChatClient 기반 대화형 AI 생성기 구축으로 <b>면접 질문 설계 시간 70% 단축</b>.',
            },
            {
              content: 'N+1 쿼리 문제 해결로 <b>93% 쿼리 감소</b> (30번 → 2번 쿼리).',
            },
            {
              content:
                'Chain-of-Thought 기반 단계별 추론 프롬프트로 <b>평가 기준 일관성 30% 향상</b>.',
            },
            {
              content:
                '웹 기반 결과표와 엑셀 다운로드 간 <b>데이터 일관성 100% 보장</b> 체계 구현.',
            },
          ],
        },
        {
          content: '담당 역할 및 기술적 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'AI/LLM 기반 HR-Tech 평가 시스템 개발',
              descriptions: [
                {
                  content:
                    '<b>Function Calling(Tool Use)</b> 기반 검증 로직으로 평가 기준 정합성 실시간 검증.',
                },
                {
                  content:
                    'JSON Schema 기반 <b>Structured Output</b>으로 LLM 응답 파싱 안정성 확보.',
                },
                {
                  content:
                    '비동기 LLM 호출(<b>CompletableFuture + Virtual Thread</b>)로 응답 대기 시간 최적화.',
                },
                {
                  content: '직군별/난이도별 특화 프롬프트 템플릿 <b>12종</b> 개발.',
                },
              ],
            },
            {
              content: '역량검사 해석 에이전트 시스템 (Multi-Agent)',
              descriptions: [
                {
                  content:
                    '<b>Langchain4j SupervisorAgent 패턴</b> 도입으로 복수 에이전트 오케스트레이션 구현.',
                },
                {
                  content: '예측/판단 에이전트 + 비교분석 에이전트 협업 구조 설계.',
                },
                {
                  content:
                    'Tool 기반 데이터 조회 패턴으로 <b>hallucination 방지</b> 및 근거 기반 분석 강화.',
                },
              ],
            },
            {
              content: 'NCS 직업기초능력 역량검사 시스템',
              descriptions: [
                {
                  content: 'NCS <b>10대 직업기초능력</b> 영역별 점수/등수 산출 로직 개발.',
                },
                {
                  content: '출력용 결과표 및 블라인드 옵션으로 <b>공정채용 가이드라인 준수</b>.',
                },
                {
                  content:
                    '<b>Apache POI</b> 기반 엑셀 결과표 생성 (요인 점수 → 직업기초능력 점수 체계 전환).',
                },
                {
                  content: 'NCS 항목 <b>100점 환산</b> 기준 자동 심사 기능 (기존 9단계 → 99단계).',
                },
              ],
            },
            {
              content: '통합그리드 엑셀 다운로드 최적화',
              descriptions: [
                {
                  content: '<b>@EntityGraph</b> 활용한 연관 엔티티 일괄 조회로 N+1 문제 해결.',
                },
                {
                  content: 'Bulk 조회 후 메모리 내 Map 처리로 DB 라운드트립 최소화.',
                },
                {
                  content: '<b>SXSSFWorkbook</b> 스트리밍 방식으로 대용량 데이터 메모리 이슈 해결.',
                },
                {
                  content:
                    '<b>Strategy 패턴</b>으로 전형별 처리 로직 분리, Template Method 패턴으로 다중 탭 동적 생성.',
                },
              ],
            },
            {
              content: 'AI 기반 채용 플래너 및 큐레이터 시스템',
              descriptions: [
                {
                  content:
                    '채용 프로세스를 단계별 워크플로우로 재구조화 (인재 조건 정의 → 전형 설계 → 검사 설정).',
                },
                {
                  content: '직무 기술서(JD) 분석을 통한 <b>역량 기반 면접 질문 자동 생성</b>.',
                },
                {
                  content:
                    '다공고/다전형 영상 면접 설정에서 전형 내 할당된 직군/직무 기반 동적 처리.',
                },
              ],
            },
          ],
        },
        {
          content: '기술적 도전과 해결 방안',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'N+1 쿼리 문제 해결',
              descriptions: [
                {
                  content:
                    'AS-IS: 30번 쿼리 (N+1 발생) → TO-BE: 2번 쿼리 (<b>Fetch Join + Bulk 조회</b>).',
                },
                {
                  content: '<b>@EntityGraph</b>와 Bulk 조회 후 메모리 내 Map 처리 조합으로 해결.',
                },
              ],
            },
            {
              content: 'LLM 응답 안정성 확보',
              descriptions: [
                {
                  content: '<b>JSON Schema 기반 Structured Output</b>으로 파싱 실패율 최소화.',
                },
                {
                  content: '<b>Function Calling</b>을 통한 실시간 검증 로직으로 품질 보장.',
                },
              ],
            },
            {
              content: '대용량 데이터 처리',
              descriptions: [
                {
                  content: '<b>SXSSFWorkbook</b> 스트리밍 방식으로 메모리 효율적 엑셀 생성.',
                },
                {
                  content: '파일함 PDF/ZIP 다운로드 500 에러 해결 및 대용량 파일 처리 로직 개선.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
