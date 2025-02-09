import { IProject } from '../../component/project/IProject';
import image2 from '../../asset/img.png';

export const gdscBlog: IProject.Item = {
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
        // { content: '[배포링크]:', postHref: 'https://blog.gdsc-dju.com/' },
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
              content: '대부분의 기초 골자 코드를 작성, JWT Oauth2.0을 이용한 로그인 기능을 구현',
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
};
