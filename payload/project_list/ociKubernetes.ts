import image1 from '../../asset/yata구조.png';
import { IProject } from '../../component/project/IProject';

export const ociKubernetesProject: IProject.Item = {
  title: 'GitOps 기반 Kubernetes 클라우드 인프라 구축 프로젝트',
  startedAt: '2024-03',
  endedAt: '2024-04',
  where: '개인 연구 프로젝트 (DevOps 역량 강화)',
  descriptions: [
    {
      content:
        '기술 스택: Oracle Cloud Infrastructure(OCI), Kubernetes, OCI Container Registry, ArgoCD, Helm, Terraform',
      weight: 'BOLD',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기업 환경에서 활용되는 Kubernetes 인프라 아키텍처를 개인 클라우드 환경에 구축하여 DevOps 및 클라우드 네이티브 기술 역량을 강화하기 위한 실무 연구 프로젝트.',
            },
            {
              content:
                'GitOps 방법론을 적용한 자동화된 배포 파이프라인을 구축하여 인프라 변경 사항의 버전 관리, 자동화, 감사 추적 기능을 확보.',
            },
            {
              content: 'ArgoCD 배포 링크: ',
              postHref: 'https://argocd.fun-utils.com/',
            },
          ],
        },
        {
          content: '구현 내용 및 기술적 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'OCI Kubernetes 클러스터 구축',
              descriptions: [
                {
                  content:
                    'OCI Always Free Tier 리소스를 최대한 활용한 비용 효율적인 Kubernetes 클러스터 아키텍처 설계.',
                },
              ],
            },
            {
              content: 'GitOps 기반 배포 파이프라인 구축',
              descriptions: [
                {
                  content:
                    'ArgoCD를 활용한 GitOps 워크플로우 구현으로 Git 저장소와 Kubernetes 클러스터 간 상태 동기화 자동화.',
                },
                {
                  content:
                    'Helm 차트를 활용한 애플리케이션 패키징 및 배포 표준화로 일관된 환경 구성 관리.',
                },
                {
                  content:
                    'OCI Container Registry를 활용한 컨테이너 이미지 관리 및 배포 파이프라인 통합.',
                },
              ],
            },
            {
              content: '클라우드 리소스 최적화 및 관리',
              descriptions: [
                {
                  content:
                    'OCI Block Volume을 활용한 영구 스토리지 솔루션 구현 및 Kubernetes PersistentVolume 연동.',
                },
                {
                  content: 'OCI Load Balancer 서비스를 활용한 외부 트래픽 라우팅 및 SSL 종단 구현.',
                },
                {
                  content:
                    'OCI IAM(Identity and Access Management)을 활용한 세분화된 권한 관리 체계 구축.',
                },
              ],
            },
          ],
        },
        {
          content: '학습 성과 및 실무 적용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기업 환경의 EKS 운영에 직접 적용 가능한 로그 설정 및 Kubernetes 리소스 관리 역량 강화.',
            },
            {
              content:
                'Kubernetes YAML 명세에 대한 이해도 향상 및 kubectl 명령어 숙달을 통한 문제 해결 능력 개발.',
            },
            {
              content:
                'GitOps 방법론의 실무 적용을 통한 인프라 변경 관리 및 배포 자동화 경험 축적.',
            },
            {
              content:
                '클라우드 네이티브 아키텍처 설계 및 구현 역량 강화로 현업 프로젝트에서의 기술 리더십 발휘.',
            },
          ],
        },
      ],
    },
  ],
  image: image1,
};
