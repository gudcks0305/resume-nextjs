import { IProject } from '../../component/project/IProject';

export const mailbox: IProject.Item = {
  title: '대규모 이메일 처리 시스템 (Mailbox Engine)',
  startedAt: '2023-05',
  endedAt: '2023-11',
  where: 'Grit Standard (백엔드 개발자)',
  descriptions: [
    {
      content:
        '기술 스택: <b>AWS Lambda</b>, <b>Kafka MSK</b>, <b>Amazon S3</b>, <b>Elasticsearch</b>, <b>Node.js</b>, <b>Spring Boot</b>',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '다중 이메일 계정의 수집/동기화 과정에서 중복 다운로드와 Elasticsearch/RDBMS 간 상태 불일치가 발생할 수 있었습니다.',
            },
            {
              content:
                '메일 원문 저장, 검색 인덱싱, 이벤트 처리 부하 분산을 함께 해결해야 해 서버리스 함수 간 책임 분리가 중요했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '총 11개의 Lambda 함수를 개발해 이메일 수집, 처리, 저장, 검색 흐름을 단계별로 분리했습니다.',
            },
            {
              content:
                '이메일 UID 상태 관리와 upsert 로직을 적용해 재처리 상황에서도 중복 저장을 방지하도록 설계했습니다.',
            },
            {
              content:
                'Kafka MSK 기반 이벤트 파이프라인으로 컴포넌트 간 결합도를 낮추고 처리 부하를 분산했습니다.',
            },
          ],
        },
        {
          content: '결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '서버리스 아키텍처 기반으로 다중 이메일 계정의 수집, 동기화, 저장 흐름을 자동화했습니다.',
            },
            {
              content:
                'S3와 Elasticsearch 기반 저장/검색 구조로 대용량 메일 데이터 처리와 검색 성능을 개선했습니다.',
            },
            {
              content:
                'CloudWatch 로그/알람과 장애 복구 흐름을 구성해 운영 모니터링과 데이터 무결성을 강화했습니다.',
            },
          ],
        },
      ],
    },
  ],
};
