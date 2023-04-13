import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '대진대학교 | 4학년 2학기 휴학 中 | 2024년 2월 졸업 예정 | 취업계 가능 | 평점 3.93/4.5',
      subTitle:
        '산업경영학과 / 컴퓨터공학과(복수전공) ' +
        '\n\n <> 객체지향 프로그래밍 , 웹프로그래밍 , 자바 프로그래밍 , 프론트엔드 웹 디자인' +
        '          인공지능 , 컴퓨터 네트워크 및 보안 ,논리회로 및 실습 , 캡스톤 디자인' +
        '          데이터베이스론 , 컴퓨터 시스템 구조 , 운영체제론 , 컴퓨터 알고리즘',
      startedAt: '2017-03',
      // endedAt: '2022',
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
