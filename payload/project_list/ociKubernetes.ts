import image1 from '../../asset/yata구조.png';
import { IProject } from '../../component/project/IProject';

export const ociKubernetesProject: IProject.Item = {
  title: '개인 kubernetes 클라우드 인프라 GIT OPS 구축',
  startedAt: '2024-03',
  endedAt: '2024-04',
  where: '개인 프로젝트',
  descriptions: [
    {
      content: '[인프라]: Oracle Cloud Infrastructure, Kubernetes, OCI Container Registry, Argocd',
      weight: 'MEDIUM',
      descriptions: [
        { content: '[ArgoCD 배포링크]:', postHref: 'https://argocd.fun-utils.com/' },
        {
          content: '목적',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '회사에서 사용하는 K8s 인프라 환경을 구축 하고 운영 하는 데 필요한 기술을 학습 하고 실습 하기 위한 프로젝트',
            },
            {
              content:
                'Oracle Cloud Infrastructure(OCI), Kubernetes, OCI Container Registry, Argocd를 이용하여 개인 클라우드 인프라 환경을 구축',
            },
            {
              content:
                'GitOps를 통해 자동화된 배포 및 운영 환경을 구성, 이 프로젝트는 DevOps와 클라우드 인프라의 핵심 기술을 학습 하고 실습 하는 데 중점',
            },
          ],
        },
        {
          content: '학습 및 결과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '회사 내 eks 운영에 있어 로그 설정 및 k8s yaml 명세 이해 상승 , 명령어 체득',
            },
            {
              content: '클라우드 인프라에대한 이해도 상승 및 클라우드 인프라 구축 능력 향상',
            },
            { content: 'OCI에서의 Kubernetes 클러스터 구축' },
            { content: 'ArgoCD를 이용한 GitOps 구축' },
            { content: 'OCI Container Registry를 이용한 이미지 빌드 및 배포' },
            { content: 'OCI LoadBalancer를 이용한 외부 접속 환경 구축' },
            { content: 'OCI Block Volume을 이용한 데이터 저장 환경 구축' },
            { content: 'OCI IAM을 이용한 권한 관리' },
            { content: 'OCI VCN을 이용한 네트워크 환경 구축' },
          ],
        },
      ],
    },
  ],
  image: image1,
};
