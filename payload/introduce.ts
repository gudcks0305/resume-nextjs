import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'JAVA & Spring 개발자로 내부 포워딩 자동 물류 시스템 개발, Python & FastAPI 물류 ERP 시스템 개발 및 운영 경험이 있습니다.,',
    },
    {
      content: '',
    },
    {
      content:
        '저는 단순 하게 코드를 작성하는 것이 아닌 문제를 해결 하는 개발자 인 엔지니어 가 되고 싶습니다.',
    },
    {
      content:
        ' 제가 동료 개발자 들에 비해 가지고 있는 강점은  문제 해결 능력 입니다. 문제 해결 능력은 문제를 정의하는 것부터 시작됩니다.',
    },
    {
      content:
        ' 주 전공이 산업경영공학 이었기 때문에 문제 해결에 있어 다각적으로 고려 할 수 있습니다.  기술적 으로 해결 할 수 있는 부분 뿐 아니라 비지니스 관점으로 풀어 나가는 방식 또한 문제를 해결 할 수 있다 생각 합니다. ',
    },
    {
      content: '',
    },
    {
      content:
        ' 이런 강점이 있었기 때문에 현재 동료 개발자들에 비해 유연한 사고 가지고 성장 이루고 있습니다.',
    },
    {
      content: '',
    },
    {
      content: ' 또한, 저는 기술적인 부분을 융통성 있게 사용 할 수 있습니다.',
    },
    {
      content:
        '• 신기술, 새로운 언어가 성능이 좋더라도 팀원들의 러닝 커브를 고려 합니다. 장단기적인 관점을 모두 고려합니다. ',
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
