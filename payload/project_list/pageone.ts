import { IProject } from '../../component/project/IProject';

export const pageone: IProject.Item = {
  title: '물류 플랫폼 자동화 서비스',
  startedAt: '2024-02',
  where: 'Grit Standard (백엔드 개발자, 6인 팀)',
  descriptions: [
    {
      content:
        '기술 스택: Java, Spring Boot, JPA/Hibernate, Querydsl, AWS Lambda, MySQL, AWS S3, EKS',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '수작업 중심의 세관 신고와 문서 처리 흐름 때문에 처리 속도와 데이터 일관성이 업무 병목이었습니다.',
            },
            {
              content:
                '물류 도메인 특성상 400개 이상 필드를 가진 복잡한 테이블과 문서 변환, S3 저장, 외부 연동 흐름을 함께 다뤄야 했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '물류 도메인 테이블을 정규화하고 핵심 CRUD/API, 세관 연동 데이터 확보, 신고 자동화 흐름을 개발했습니다.',
            },
            {
              content:
                'LibreOffice Lambda Layer 기반 문서 PDF 변환과 S3 저장 흐름을 구현하고, AWS Lambda SnapStart로 Java Lambda cold start 병목을 줄였습니다.',
            },
            {
              content:
                'SQL Migration, Restdocs, Swagger 문서화를 정비해 데이터 이전과 팀 협업 비용을 줄였습니다.',
            },
          ],
        },
        {
          content: '결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '세관 연동 데이터 확보와 신고 자동화 시스템 구축으로 <b>세관 처리 속도 2배 향상</b>에 기여했습니다.',
            },
            {
              content:
                'AWS Lambda SnapStart 도입으로 Java Lambda Cold Start를 <b>10초에서 1초</b> 수준으로 단축.',
            },
            {
              content:
                'AI 기반 PDF 분석 파이프라인으로 인보이스 데이터 추출, 저장, 신고서 생성을 자동화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};
