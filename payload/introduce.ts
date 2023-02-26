import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'JAVA & Spring 개발자로 GDSC ( Google Developer Student Clubs ) DJU 라는 동아리에서 백엔드 개발자로 내부 서비스를 구축 및 관리 경험이 있습니다.',
    },
    {
      content: '',
    },
    {
      content:
        '저는 단순하게 코드를 작성하는 것이 아닌 문제를 해결하는 개발자인 엔지니어가 되고 싶습니다.',
    },
    {
      content:
        ' 제가 동료 개발자들에 비해 가지고 있는 강점은  문제 해결 능력입니다. 문제 해결 능력은 문제를 정의하는 것부터 시작됩니다.',
    },
    {
      content:
        ' 주전공이 산업경영공학 이었기 때문에 문제 정의에 있어서는 뛰어난 편입니다. 주전공 내에서 교수님과 함께 문제 정의를 통해 토론 형식의 강의를 진행 했었고 이를 통해 문제 정의에 있어서는 뛰어난 편입니다.',
    },
    {
      content: '',
    },
    {
      content: ' 이런 강점이 있었기 때문에 현재 동료 개발자들에 비해 빠른 성장을 이루고 있습니다. ',
    },
    {
      content: ' 또한, 저는 동료 개발자들에 비해 뛰어난 커뮤니케이션 능력을 가지고 있습니다.',
    },
    {
      content:
        '• 동아리 내에서 후배 개발자들을 이끌어주는 멘토로서 활동 경험을 통해 팀원들과의 소통 능력을 키웠습니다.',
    },
    {
      content: '• 매일 적은 성과라고 하더라도 1일 1커밋을 실천 중 입니다.',
      postHref: 'https://ghchart.rshah.org/219138/gudcks0305',
      postImage: 'https://ghchart.rshah.org/219138/gudcks0305',
    },
  ],
  sign: 'Yoo Hyung Chan',
  // sign: packageJson.author.name,
  // latestUpdated: '2023-02-07',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
