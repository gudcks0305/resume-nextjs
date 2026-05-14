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
          content: '핵심 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '서버리스 아키텍처 기반으로 다중 이메일 계정의 수집, 동기화, 저장 흐름을 자동화.',
            },
            {
              content:
                '이메일 UID 상태 관리와 upsert 로직으로 <b>중복 다운로드 방지</b> 및 데이터 일관성 확보.',
            },
            {
              content:
                'S3와 Elasticsearch 기반 저장/검색 구조로 대용량 메일 데이터 처리와 검색 성능을 개선.',
            },
          ],
        },
        {
          content: '담당 역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '총 11개의 Lambda 함수를 개발해 이메일 수집, 처리, 저장, 검색 흐름을 구현.',
            },
            {
              content:
                'Kafka MSK 기반 이벤트 파이프라인으로 컴포넌트 간 결합도를 낮추고 처리 부하를 분산.',
            },
            {
              content:
                'CloudWatch 로그/알람과 장애 복구 흐름을 구성해 운영 모니터링과 데이터 무결성을 강화.',
            },
          ],
        },
      ],
    },
  ],
};
