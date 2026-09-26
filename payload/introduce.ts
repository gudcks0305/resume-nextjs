import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'Java/Spring 백엔드 개발자입니다. 메일·SMS 5만 건의 외부 큐 적재 완료 시간을 2시간에서 1분으로 단축하고, LLM 면접·평가 작업의 재시도·복구 구조를 직접 설계했습니다.',
    },
    {
      content:
        'Kafka 비동기 처리와 DB 트랜잭션·인덱스 설계로 처리 지연, 중복 작업, 관리자 조회 병목을 개선했습니다.',
    },
    {
      content:
        'FastAPI 서비스 개발과 AWS·Kubernetes·ArgoCD 운영 경험이 있으며, Rust/C++ 연동 및 macOS 오픈소스에도 기여했습니다.',
    },
  ],
  sign: 'Yoo Hyeong Chan',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
