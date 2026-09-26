import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/preview.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: image.src,
  name: {
    title: '유형찬',
    small: '',
  },
  contact: [
    {
      title: 'gudcks305@gmail.com',
      link: '',
      icon: faEnvelope,
    },
    {
      title: 'https://github.com/gudcks0305',
      link: 'https://github.com/gudcks0305',
      icon: faGithub,
    },
  ],
  notice: {
    title: 'Java/Spring 백엔드 · 대량 비동기 처리 · LLM 런타임',
  },
};

export default profile;
