import favicon from '../asset/favicon.png';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '유형찬 이력서 ';
const description = '백엔드 개발자 유형찬의 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 600,
          height: 800,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'HyungChan',
        lastName: 'Yoo',
        username: 'HyungChanYoo',
        gender: 'male',
      },
    },
  },
};
