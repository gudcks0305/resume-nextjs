import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '대진대학교 | 졸업 | 평점 3.93/4.5',
      subTitle: '산업경영학과 / 컴퓨터공학과(복수전공)',
      courses: [
        '객체지향 프로그래밍',
        '자바 프로그래밍',
        '데이터베이스',
        '운영체제',
        '컴퓨터 네트워크',
        '컴퓨터 알고리즘',
        '캡스톤 디자인',
      ],
      startedAt: '2017-03',
      endedAt: '2024-03',
    },
    {
      title: '저동고등학교',
      subTitle: '인문계 이과',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
