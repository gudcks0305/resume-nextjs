import { IProject } from '../../component/project/IProject';

export const acca: IProject.Item = {
  title: 'AI 역량검사 센터 (ACCA)',
  startedAt: '2025-10',
  where: '마이다스인 (백엔드 개발자)',
  descriptions: [
    {
      content:
        '기술 스택: Java 21, Spring Boot 3.3, Spring AI 1.0, Langchain4j, OpenAI GPT-5, JPA/Hibernate, Querydsl, MariaDB, Redis, Kafka',
      weight: 'BOLD',
      descriptions: [
        {
          content: '핵심 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'GPT-5 기반 Spring AI ChatClient와 Tool 연동으로 <b>면접 질문 설계 시간 70% 단축</b>.',
            },
            {
              content:
                'Querydsl 기반 조회 처리, Fetch Join, where in 일괄 조회, batch size 설정으로 <b>쿼리 93% 감소</b>.',
            },
            {
              content:
                'Spring AI Tool 호출과 JSON Schema 기반 Structured Output으로 <b>LLM 응답 안정성</b> 확보.',
            },
          ],
        },
        {
          content: '담당 역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '직군/난이도별 프롬프트 템플릿 12종과 GPT-5 기반 평가 기준 생성 및 검증 로직을 설계.',
            },
            {
              content:
                'Langchain4j SupervisorAgent 패턴으로 예측/판단 에이전트와 비교분석 에이전트 협업 구조 설계.',
            },
            {
              content:
                'Code Interpreter container 활용 흐름과 NCS 점수 산출, 블라인드 옵션, Apache POI 기반 엑셀 결과표 생성 기능 개발.',
            },
          ],
        },
      ],
    },
  ],
};
