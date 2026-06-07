import { IProject } from '../../component/project/IProject';

export const aimsWeb: IProject.Item = {
  title: '물류 ERP 시스템 현대화 프로젝트',
  startedAt: '2023-08',
  endedAt: '2024-08',
  where: 'Grit Standard (백엔드 개발자, 3인 팀)',
  descriptions: [
    {
      content:
        '기술 스택: <b>Python</b>, <b>FastAPI</b>, <b>AWS</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>MySQL</b>',
      weight: 'BOLD',
      descriptions: [
        {
          content: '문제와 제약',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Windows 기반 ERP에 업무가 집중되어 팀별 분업, 배포, 운영 변경이 어렵고 실무 담당자의 반복 작업 비용이 컸습니다.',
            },
            {
              content:
                '기존 레거시 업무 흐름을 유지하면서도 웹 기반 기능으로 전환해야 해, 실무 담당자와 Windows 개발자 간 요구사항 조율이 중요했습니다.',
            },
          ],
        },
        {
          content: '역할과 판단',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<b>백엔드 1인 개발자</b>로 요구사항 분석, API 설계, FastAPI 기반 서비스 구현을 주도했습니다.',
            },
            {
              content:
                'AWS Kubernetes 클러스터와 Docker 기반 배포 환경을 구성하고 ArgoCD 기반 GitOps CI/CD 파이프라인을 도입했습니다.',
            },
            {
              content:
                '기존 Windows 개발자 및 실무 담당자와 협업해 레거시 업무 흐름을 웹 기반 기능으로 재설계했습니다.',
            },
          ],
        },
        {
          content: '결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Windows 기반 ERP를 클라우드 웹 환경으로 전환하여 팀별 업무 분담과 운영 효율을 개선했습니다.',
            },
            {
              content:
                '업무 분업화와 자동화 흐름 개선으로 <b>업무 처리 속도 30% 이상 향상</b>에 기여했습니다.',
            },
            {
              content: 'GitOps 기반 배포 자동화로 배포 반복 작업과 운영 변경 부담을 줄였습니다.',
            },
          ],
        },
      ],
    },
  ],
};
