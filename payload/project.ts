import { IProject } from '../component/project/IProject';
import image1 from '../asset/yata구조.png';
import image2 from '../asset/img.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
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
    },
    {
      title: 'GDSC_TECH_BLOG : GDSC 기술 블로그 프로젝트',
      startedAt: '2022-02',
      endedAt: '2022-09',
      where: 'GDSC 내부 팀 프로젝트 (9인)',
      descriptions: [
        {
          content: '[팀장, 백엔드]: Spring, SpringBoot, Mysql, Nginx, AWS(EC2)',
          postImage: image2,
          weight: 'MEDIUM',
          descriptions: [
            { content: '[배포링크]:', postHref: 'https://blog.gdsc-dju.com/' },
            {
              content: '[깃헙레포]:',
              postHref: 'https://github.com/GDSC-Daejin/GDSC-WEB-BackEnd',
            },
            {
              content: '맡은 역할',
              descriptions: [
                { content: '백엔드 팀의 팀장으로 팀내 갈등 해결' },
                { content: '역할 분담 , 스터디 진행 및 트렌드 공유' },
                { content: 'OCI 플랫폼을 도입 및 배포' },
                {
                  content:
                    '대부분의 기초 골자 코드를 작성, JWT Oauth2.0을 이용한 로그인 기능을 구현',
                },
              ],
            },
            {
              content: '기여한 점',
              descriptions: [
                { content: 'OCI 플랫폼을 도입 하며 연간 20만원의 서버 비용을 절감 ' },
                { content: '최초로 외부 인원이 지속적으로 사용하는 서버를 제작 ' },
              ],
            },
          ],
        },
      ],
      image: image2,
    },
    {
      title: ' GDSC_MSA : 아키텍쳐 이전',
      startedAt: '2022-05',
      endedAt: '2022-09',
      where: 'SOLO PROJECT',
      descriptions: [
        {
          content: ' Java | Spring | Mysql | OCI | Spring Netflix | Eureka',
          weight: 'MEDIUM',
          descriptions: [
            { content: '[배포링크]:', postHref: 'https://blog.gdsc-dju.com/' },
            {
              content: '[깃헙레포]:',
              postHref: 'https://github.com/GDSC-Daejin/GDSC-DJU-MSA',
            },
            {
              content: '기여한 점',
              descriptions: [
                { content: 'Spring Netflix Eureka를 이용한 서비스 디스커버리 구현' },
                { content: 'Spring Netflix Zuul을 이용한 API Gateway 구현' },
                { content: '동일한 도메인에서 서비스 할 수 있게 하여 서비스 확장성에 기여 ' },
                {
                  content:
                    '서버의 확장을 수직적인 구조에서 수평적인 구조로 변경하며 서버 부담 감소에 기여 ',
                },
                {
                  content:
                    '각각의 서비스를 나누어 관리할 수 있게 됨에 따라유지보수의 능률 상승에 기여  ',
                },
              ],
            },
          ],
        },
      ],
      image: image2,
    },
  ],
};

export default project;
