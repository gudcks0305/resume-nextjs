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
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<b>서버리스 아키텍처</b>를 기반으로 <b>대규모 이메일 동기화 및 저장 시스템</b> 구축. 여러 이메일 계정에서 메일을 유실 없이 처리하고 저장할 수 있도록 설계.',
            },
            {
              content:
                '이메일 수집, 동기화 및 저장 과정을 <b>완전 자동화</b>하여 사용자 개입 없이 지속적인 메일 처리가 가능한 시스템 구현.',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<b>이메일 UID 동기화 및 상태 관리 시스템</b> 구축으로 메일 처리 성능 최적화 및 중복 처리 방지.',
            },
            {
              content:
                '<b>S3 및 Elasticsearch</b>를 활용한 <b>확장 가능한 메일 저장 구조</b> 구현으로 대용량 데이터 처리 역량 확보.',
            },
            {
              content:
                '<b>Kafka</b>를 통한 <b>비동기적 메시지 처리 아키텍처</b> 구현으로 시스템 안정성 및 성능 대폭 개선.',
            },
          ],
        },
        {
          content: '담당 역할 및 기술적 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '<b>서버리스 아키텍처 설계 및 구현</b>',
              descriptions: [
                {
                  content:
                    '<b>AWS Lambda 기반 마이크로서비스 아키텍처</b> 설계 및 구현으로 확장성과 비용 효율성 확보.',
                },
                {
                  content:
                    '총 <b>11개의 Lambda 함수</b>를 개발하여 이메일 수집, 처리, 저장, 검색 등 전체 이메일 처리 흐름 구현.',
                },
                {
                  content:
                    '<b>Node.js와 Spring Boot</b>를 활용한 서버리스 함수 개발로 다양한 이메일 프로토콜 지원.',
                },
              ],
            },
            {
              content: '<b>메시징 시스템 및 데이터 파이프라인 구축</b>',
              descriptions: [
                {
                  content:
                    '<b>Kafka MSK</b>를 활용한 <b>이벤트 기반 아키텍처</b> 구현으로 시스템 컴포넌트 간 느슨한 결합 달성.',
                },
                {
                  content:
                    '<b>비동기적 메시지 처리 파이프라인</b> 구축으로 시스템 부하 분산 및 처리량 향상.',
                },
                {
                  content:
                    '<b>이메일 UID 관리 및 upsert 로직</b> 구현으로 중복 다운로드 방지 및 데이터 일관성 유지.',
                },
              ],
            },
            {
              content: '<b>데이터 저장 및 검색 시스템 최적화</b>',
              descriptions: [
                {
                  content:
                    '<b>Amazon S3</b>에 이메일 본문 및 첨부 파일을 <b>JSON 형식</b>으로 저장하는 효율적인 저장 구조 설계.',
                },
                {
                  content:
                    '<b>Elasticsearch</b>를 활용한 메타데이터 인덱싱 및 <b>고성능 검색 시스템</b> 구현.',
                },
                {
                  content:
                    '첨부 파일 처리 최적화를 통한 <b>저장 공간 효율성 및 검색 성능</b> 향상.',
                },
              ],
            },
            {
              content: '<b>시스템 모니터링 및 오류 처리</b>',
              descriptions: [
                {
                  content:
                    '<b>CloudWatch</b> 로그 및 알람 설정을 통한 <b>실시간 시스템 모니터링</b> 체계 구축.',
                },
                {
                  content:
                    '<b>장애 복구 메커니즘</b> 구현으로 시스템 안정성 및 데이터 무결성 보장.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
