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
          content: '핵심 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Spring AI ChatClient 기반 대화형 AI 생성기로 <b>면접 질문 설계 시간 70% 단축</b>.',
            },
            {
              content:
                'N+1 쿼리를 Fetch Join, @EntityGraph, Bulk 조회 조합으로 해결하여 <b>쿼리 93% 감소</b>.',
            },
            {
              content:
                'JSON Schema 기반 Structured Output과 Function Calling 검증으로 <b>LLM 응답 안정성</b> 확보.',
            },
          ],
        },
        {
          content: '담당 역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '직군/난이도별 프롬프트 템플릿 12종과 평가 기준 검증 로직을 설계 및 구현.',
            },
            {
              content:
                'Langchain4j SupervisorAgent 패턴으로 예측/판단 에이전트와 비교분석 에이전트 협업 구조 설계.',
            },
            {
              content:
                'NCS 직업기초능력 점수 산출, 블라인드 옵션, Apache POI 기반 엑셀 결과표 생성 기능 개발.',
            },
          ],
        },
      ],
    },
  ],
};
