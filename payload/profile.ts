import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/preview.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
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
      title: '010-9132-7434',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/gudcks0305',
      link: 'https://github.com/gudcks0305',
      icon: faGithub,
    },
    /*    {
      link: 'https://velog.io/@gudcks0305',
      icon: faBlog,
    }, */
    // {
    //   title: '희망 연봉 : 38,000,000',
    //   icon: faMoneyBill,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '☀️ 더 나은 실패를 하라 - 사뮈엘 베케트',
    // icon: faBell,
  },
};

export default profile;
