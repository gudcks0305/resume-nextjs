import image1 from '../../asset/yata구조.png';
import { IProject } from '../../component/project/IProject';

export const yataProject: IProject.Item = {
  title: 'YATA! : 실시간 위치 기반 카풀 매칭 서비스',
  startedAt: '2023-01',
  endedAt: '2023-02',
  where: '코드스테이츠 메인 프로젝트 (백엔드 팀장, 6인 팀)',
  descriptions: [
    {
      content:
        '기술 스택: <b>Spring Boot</b>, <b>Spring Security</b>, <b>Spring Batch</b>, <b>MySQL</b>, <b>Redis</b>, <b>OCI</b>, <b>AWS S3</b>, <b>Toss Payments API</b>',
      weight: 'BOLD',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<b>실시간 위치 기반 카풀 매칭 서비스</b>로, 사용자 간 효율적인 이동 수단 공유를 위한 플랫폼 개발 프로젝트.',
            },
            {
              content:
                '<b>결제 시스템</b>, <b>실시간 알림</b>, <b>위치 기반 서비스</b> 등 핵심 기능을 구현하여 완성도 높은 서비스 구축.',
            },
            { content: '배포 링크: ', postHref: 'https://yata-tau.vercel.app/' },
            {
              content: '깃허브 저장소: ',
              postHref: 'https://github.com/gudcks0305/seb41_main_021',
            },
            {
              content: '테스트 계정: 아이디 - test1@gmail.com, 비밀번호 - password',
            },
          ],
        },
        {
          content: '담당 역할 및 기술적 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '<b>백엔드 아키텍처 설계 및 개발 총괄</b>',
              descriptions: [
                {
                  content:
                    '<b>백엔드 팀장</b>으로서 전체 시스템 아키텍처 설계 및 개발 방향성 수립.',
                },
                {
                  content:
                    '<b>Spring Security</b>를 활용한 <b>인증/인가 시스템</b> 구현 및 이메일 인증 기능 개발.',
                },
                {
                  content:
                    '<b>AOP(Aspect-Oriented Programming)</b>를 활용한 알림 기능 분리로 코드 모듈화 및 유지보수성 향상.',
                },
              ],
            },
            {
              content: '<b>위치 기반 서비스 및 결제 시스템 구현</b>',
              descriptions: [
                {
                  content:
                    '<b>지리적 좌표 기반 카풀 매칭 알고리즘</b> 개발로 사용자 간 최적 매칭 제공.',
                },
                {
                  content:
                    '<b>Toss Payments API</b> 연동을 통한 안전하고 신뢰성 있는 <b>결제 시스템</b> 구현.',
                },
                {
                  content: '위치 데이터 최적화 및 <b>인덱싱</b>을 통한 검색 성능 향상.',
                },
              ],
            },
            {
              content: '<b>성능 최적화 및 캐싱 전략 구현</b>',
              descriptions: [
                {
                  content:
                    '<b>Redis 캐싱</b> 및 <b>Hibernate 2차 캐싱</b> 도입으로 API 응답 시간 <b>60% 감소</b> 달성.',
                },
                {
                  content:
                    '데이터베이스 <b>쿼리 최적화</b> 및 인덱싱 전략 수립으로 시스템 전반적 성능 향상.',
                },
                {
                  content:
                    '자주 접근하는 데이터에 대한 효율적인 <b>캐싱 전략</b> 구현으로 데이터베이스 부하 감소.',
                },
              ],
            },
            {
              content: '<b>자동화 및 배치 프로세스 구현</b>',
              descriptions: [
                {
                  content:
                    '<b>Spring Batch</b>를 활용한 만료된 예약 자동 취소 및 카풀 글 만료 처리 시스템 구현.',
                },
                {
                  content:
                    '배치 작업 <b>스케줄링</b> 및 <b>모니터링 시스템</b> 구축으로 운영 효율성 향상.',
                },
                {
                  content:
                    '<b>자동화된 데이터 정리 프로세스</b> 구현으로 시스템 안정성 및 성능 유지.',
                },
              ],
            },
            {
              content: '<b>인프라 구축 및 배포 환경 최적화</b>',
              descriptions: [
                {
                  content:
                    '<b>OCI 클라우드</b> 환경에 서비스 배포 및 <b>CI/CD 파이프라인</b> 구축으로 개발 생산성 향상.',
                },
                {
                  content: '<b>AWS S3</b>를 활용한 효율적인 파일 저장 및 관리 시스템 구현.',
                },
                {
                  content: '외부 의존성을 최소화한 개발 환경 구축으로 팀 내 개발 효율성 증대.',
                },
              ],
            },
          ],
        },
        {
          content: '주요 성과 및 학습 경험',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '성능 최적화 기법 적용을 통한 응답 시간 <b>60% 감소</b>로 사용자 경험 대폭 개선.',
            },
            {
              content:
                '<b>자동화된 배치 프로세스</b> 구현으로 운영 효율성 향상 및 사용자 편의성 증진.',
            },
            {
              content:
                '<b>위치 기반 서비스</b> 및 <b>결제 시스템</b> 구현 경험을 통한 실무 역량 강화.',
            },
            {
              content: '<b>백엔드 팀장</b>으로서의 리더십 경험과 팀 협업 역량 향상.',
            },
          ],
        },
      ],
    },
  ],
  image: image1,
};
