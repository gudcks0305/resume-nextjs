import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'Java/Spring 기반 서비스의 설계·개발과 운영을 담당해온 백엔드 엔지니어입니다. 대량 발송과 LLM 평가 파이프라인을 직접 설계하고, 조회 성능과 장애 복구 흐름을 개선했습니다.',
    },
    {
      content:
        '처리 지연과 데이터 불일치의 원인을 찾아 비동기 처리, 트랜잭션 경계, 인덱스와 재시도 구조를 개선하며 운영 문제를 해결합니다.',
    },
    {
      content:
        'FastAPI 서비스 개발과 AWS·Kubernetes·ArgoCD 운영 경험이 있으며, Rust 오픈소스 프로젝트의 빌드 오류 수정과 macOS 지원에도 기여했습니다.',
    },
  ],
  sign: 'Yoo Hyeong Chan',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
