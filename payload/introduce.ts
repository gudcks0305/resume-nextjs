import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'JAVA & Spring 개발자로 내부 포워딩 자동 물류 시스템 개발, Python & FastAPI 물류 ERP 시스템 개발 및 운영 경험이 있습니다.',
    },
    {
      content: 'EKS, ArgoCD 기반의  CI/CD 파이프 라인 구축 경험이 있습니다.',
    },
    {
      content:
        '저는 단순 하게 코드를 작성 하는 것이 아닌 문제를 해결 하는 개발자인 엔지니어가 되고 싶습니다.',
    },
    {
      content:
        '저는 빠르게 변화 하는 기술에 대한 관심이 많고, 새로운 기술을 배우는 것에 두려움이 없습니다. 물론 신기술이 항상 좋은 것은 아니지만, 현재 개발의 트렌드를 파악하고, 적용 하는 것이 중요 하다고 생각 합니다.',
    },
    {
      content:
        ' 제가 동료 개발자 들에 비해 가지고 있는 강점은  문제 해결 능력 입니다. 문제 해결 능력은 문제를 정의하는 것부터 시작됩니다.',
    },
    {
      content:
        '문제를 파악 하고, 기술적으로 해결 해야 할 문제 인지 비 기술적으로 해결 해야할 문제 인지 파악 하는 것이 중요 하다고 생각 합니다.',
    },
    {
      content:
        '이를 통해 기획 및 팀원들과 소통을 통하여 물류 도메인의 어려운 문제를 해결 해왔습니다.',
    },
    /*    {
      content: '• 매일 적은 성과라고 하더라도 1일 1커밋을 실천 중 입니다.',
      // postHref: 'https://ghchart.rshah.org/219138/gudcks0305',
      // postImage: 'https://ghchart.rshah.org/219138/gudcks0305',
    }, */
  ],
  sign: 'Yoo Hyeong Chan',
  // sign: packageJson.author.name,
  // latestUpdated: '2023-02-07',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
