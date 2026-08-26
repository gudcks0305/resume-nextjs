import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        '대용량 배치·이벤트 파이프라인·AI 런타임을 운영하며 성능 병목, 장애 복구, 데이터 일관성, 배포 안정성을 개선해온 백엔드 엔지니어입니다.',
    },
    {
      content:
        'Kafka 비동기 처리, worker queue, inbox/outbox, Redis, DB 튜닝을 활용해 대규모 처리 흐름의 병목과 재시작·중복 처리 리스크를 줄여왔습니다.',
    },
    {
      content:
        'Kubernetes/EKS 기반 서비스 운영과 ArgoCD GitOps, AWS 환경 개선 경험을 바탕으로 애플리케이션과 인프라 경계의 문제를 해결하는 데 관심이 있습니다.',
    },
    {
      content:
        '운영 이슈를 재현 조건, 영향 범위, 원인 후보와 지표로 구조화하고 성능·신뢰성 문제를 재발 방지까지 연결하는 방식을 중요하게 생각합니다.',
    },
    {
      content:
        '백엔드 경험을 기반으로 Platform/Infrastructure Engineering과 분산 시스템 영역으로 전문성을 확장하고 있습니다.',
    },
  ],
  sign: 'Yoo Hyeong Chan',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
