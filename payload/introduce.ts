import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'AI/채용 평가 도메인에서 대용량 배치, 이벤트 파이프라인, LLM 런타임을 운영하며 성능 병목과 장애 복구, 데이터 일관성을 개선해온 백엔드 엔지니어입니다.',
    },
    {
      content:
        'Java/Spring 기반 서비스 개발을 중심으로 Kafka, Redis, MariaDB/MySQL, MongoDB를 활용한 비동기 처리와 데이터 처리 구조를 설계하고 운영해왔습니다.',
    },
    {
      content:
        'Kubernetes/EKS, ArgoCD, AWS 환경에서의 운영 경험을 바탕으로 애플리케이션 코드뿐 아니라 배포, 리소스, 장애 원인까지 함께 보는 것을 중요하게 생각합니다.',
    },
    {
      content:
        '운영 이슈를 재현 조건, 영향 범위, 원인 후보와 지표로 구조화하고, 병목 제거와 재발 방지까지 연결하는 방식으로 문제를 해결합니다.',
    },
    {
      content:
        '백엔드 전문성을 기반으로 분산 시스템, 인프라, 시스템 프로그래밍 영역까지 기술적 범위를 넓혀가고 있습니다.',
    },
  ],
  sign: 'Yoo Hyeong Chan',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
