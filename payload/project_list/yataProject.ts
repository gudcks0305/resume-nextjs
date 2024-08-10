import image1 from '../../asset/yata구조.png';
import { IProject } from '../../component/project/IProject';

export const yataProject: IProject.Item = {
  title: 'YATA! : 카풀 매칭 서비스',
  startedAt: '2023-01',
  endedAt: '2023-02',
  where: '코드스테이츠 메인 프로젝트 (6인/4주)',
  descriptions: [
    {
      content: '[백엔드]: Spring, SpringBoot,Spring Batch,Mysql, Redis, OCI , AWS S3 ',
      postImage: image1,
      weight: 'MEDIUM',
      descriptions: [
        { content: '[배포링크]:', postHref: 'https://yata-tau.vercel.app/' },
        {
          content: `
                [테스트 계정]
                아이디 : test1@gmail.com,
                비밀번호 : password
                `,
        },
        { content: '[깃헙레포]:', postHref: 'https://github.com/gudcks0305/seb41_main_021' },
        {
          content: '맡은 역할',
          descriptions: [
            { content: '백엔드 총괄' },
            { content: 'Toss 결제 API 연동' },
            { content: '위치 기반 서비스 구축' },
            { content: '알림 서비스 구축' },
            { content: '인프라 구축( 배포, CI/CD )' },
            { content: '배치 기능 구축' },
            { content: 'AOP를 이용한 알림 기능 분리 ' },
            { content: 'Spring Security Auth , Email 인증' },
          ],
        },
        {
          content: '기여한 점',
          descriptions: [
            { content: ' Redis 캐싱 , Hibernate 2차 캐싱 도입으로 성능 응답 시간 60% 감소' },
            {
              content:
                ' 배치 기능을 통해 만료된 예약을 자동으로 취소 , 만료된 카풀 글을 만료 처리하여 사용자 편의성 증진 ',
            },
            { content: ' 외부 의존성을 제거한 개발 환경 구축 ( Docker X )' },
          ],
        },
      ],
    },
  ],
  image: image1,
};
