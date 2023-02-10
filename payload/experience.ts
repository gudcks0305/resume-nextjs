import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Google Developer Student Clubs : Dae-jin University',
      position: 'MEMBER',
      startedAt: '2021-09',
      endedAt: '2022-12',
      descriptions: [
        'GOOGLE : 이 프로그램은 학생들이 개발/리더십 능력을 키울 수 있도록 지원하는 프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을 지원합니다.',
        '구글 I/O 시청 이벤트를 참여하여 차세대 미래에 중요시 여겨지는 기술 동향을 파악.',
        '타 GDSC 와 연합 활동으로 커리어 세션 등을 운영 스태프로 참가',
      ],
      // skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
