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
          content: '핵심 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Windows 기반 ERP를 클라우드 웹 환경으로 전환하여 팀별 업무 분담과 운영 효율을 개선.',
            },
            {
              content: '업무 분업화와 자동화 흐름 개선으로 <b>업무 처리 속도 30% 이상 향상</b>.',
            },
            {
              content: 'ArgoCD 기반 GitOps CI/CD 파이프라인으로 배포 자동화와 운영 안정성을 확보.',
            },
          ],
        },
        {
          content: '담당 역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<b>백엔드 1인 개발자</b>로 요구사항 분석, API 설계, FastAPI 기반 서비스 구현을 주도.',
            },
            {
              content:
                'AWS Kubernetes 클러스터와 Docker 기반 배포 환경을 구성하고 인프라 비용을 최적화.',
            },
            {
              content:
                '기존 Windows 개발자 및 실무 담당자와 협업해 레거시 업무 흐름을 웹 기반 기능으로 재설계.',
            },
          ],
        },
      ],
    },
  ],
};
