import { IProject } from '../../component/project/IProject';

export const mailbox: IProject.Item = {
  title: 'Mailbox Engine',
  startedAt: '2023-05',
  endedAt: '2023-11',
  where: 'Grit Standard',
  descriptions: [
    {
      content:
        '[Mailbox Engine]: AWS Lambda, Kafka MSK, Amazon S3, Elasticsearch, Node.js, Spring Boot',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: '목적',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '서버리스 아키텍처를 기반으로 대규모 이메일 동기화 및 저장 시스템 구축. 여러 이메일 계정에서 메일을 유실 없이 처리하고 저장할 수 있도록 설계.',
            },
            {
              content: '이메일 수집, 동기화 및 저장 과정 자동화.',
            },
          ],
        },
        {
          content: '결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '이메일 UID 동기화 및 상태 관리로 메일 처리 성능 최적화. S3 및 Elasticsearch를 활용한 확장 가능한 메일 저장 구조 구현.',
            },
            {
              content: 'Kafka를 통해 비동기적 메시지 처리로 시스템 안정성 및 성능 개선.',
            },
          ],
        },
        {
          content: '역할 및 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'AWS Lambda와 Kafka MSK를 사용해 이메일 동기화, 저장 및 상태 업데이트 자동화.',
            },
            { content: '메타데이터를 Elasticsearch에 저장하여 빠른 메일 검색 기능 제공.' },
            { content: 'S3에 메일 내용을 JSON 형식으로 저장하고 첨부 파일 처리 최적화.' },
            { content: '비동기적 UID 관리 및 upsert 로직으로 중복 다운로드 방지.' },
            { content: 'Lambda 함수 11개를 사용하여 전체 이메일 처리 흐름 구현.' },
          ],
        },
      ],
    },
  ],
};
