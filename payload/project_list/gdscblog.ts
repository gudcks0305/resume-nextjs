import { IProject } from '../../component/project/IProject';

export const gdscBlog: IProject.Item = {
  title: 'GDSC 기술 블로그 플랫폼 개발 프로젝트',
  startedAt: '2022-02',
  endedAt: '2022-09',
  where: 'GDSC 내부 팀 프로젝트 (백엔드 팀장, 9인 팀)',
  descriptions: [
    {
      content: '기술 스택: Spring, Spring Boot, MySQL, Nginx, AWS EC2, OCI',
      weight: 'BOLD',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Google Developer Student Clubs(GDSC) 커뮤니티를 위한 기술 블로그 플랫폼 개발 프로젝트. 회원들의 기술 공유와 지식 교류를 촉진하기 위한 웹 서비스 구축.',
            },
            {
              content:
                '백엔드 시스템 설계부터 배포까지 전체 개발 라이프사이클을 경험하며, 실제 사용자를 대상으로 한 서비스 운영 경험 확보.',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'OCI(Oracle Cloud Infrastructure) 플랫폼 도입을 통해 연간 20만원의 서버 운영 비용 절감 달성.',
            },
            {
              content:
                'GDSC 커뮤니티 최초로 외부 인원이 지속적으로 사용하는 안정적인 서비스 구축 및 운영.',
            },
            {
              content: 'GitHub 레포지토리: ',
              postHref: 'https://github.com/GDSC-Daejin/GDSC-WEB-BackEnd',
            },
          ],
        },
        {
          content: '담당 역할 및 기술적 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '백엔드 아키텍처 설계 및 개발',
              descriptions: [
                {
                  content:
                    'Spring Boot 기반 RESTful API 서버 설계 및 구현으로 프론트엔드와의 효율적인 통신 구조 확립.',
                },
                {
                  content: 'JWT와 OAuth 2.0을 활용한 안전한 사용자 인증 및 권한 관리 시스템 구현.',
                },
                {
                  content:
                    'MySQL 데이터베이스 설계 및 최적화를 통한 데이터 무결성 및 조회 성능 확보.',
                },
              ],
            },
            {
              content: '인프라 구축 및 배포 자동화',
              descriptions: [
                {
                  content:
                    'AWS EC2에서 OCI로의 마이그레이션을 주도하여 비용 효율성 향상 및 인프라 안정성 확보.',
                },
                {
                  content:
                    'Nginx를 활용한 웹 서버 구성 및 리버스 프록시 설정으로 보안 및 성능 최적화.',
                },
                {
                  content: '지속적 통합 및 배포(CI/CD) 파이프라인 구축으로 개발 생산성 향상.',
                },
              ],
            },
            {
              content: '팀 리더십 및 프로젝트 관리',
              descriptions: [
                {
                  content:
                    '백엔드 팀장으로서 9인 개발팀 내 역할 분담 및 일정 관리를 통한 프로젝트 진행.',
                },
                {
                  content: '팀 내 기술 스터디 주도 및 최신 개발 트렌드 공유를 통한 팀원 역량 강화.',
                },
                {
                  content: '팀 내 갈등 조정 및 의사소통 촉진을 통한 협업 환경 개선.',
                },
              ],
            },
            {
              content: '핵심 기능 구현',
              descriptions: [
                {
                  content: '블로그 게시물 CRUD 기능 및 카테고리 관리 시스템 개발.',
                },
                {
                  content: '사용자 프로필 관리 및 권한 기반 접근 제어 시스템 구현.',
                },
                {
                  content: '댓글 및 좋아요 기능을 통한 사용자 상호작용 기능 개발.',
                },
              ],
            },
          ],
        },
        {
          content: '프로젝트 의의 및 학습 경험',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '실제 사용자를 대상으로 한 서비스 개발 및 운영 경험을 통해 사용자 중심 설계의 중요성 체득.',
            },
            {
              content:
                '클라우드 인프라 마이그레이션 경험을 통한 비용 최적화 및 인프라 관리 역량 강화.',
            },
            {
              content: '팀 리더십 경험을 통한 프로젝트 관리 및 의사소통 능력 향상.',
            },
          ],
        },
      ],
    },
  ],
};
