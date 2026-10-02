import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name, notice } = payload;
  return (
    <div className="resume-profile">
      <div className="resume-profile-layout">
        <ProfileImage src={image} alt={`${name.title} 프로필 사진`} />
        <div className="resume-profile-main">
          {createNameArea(name)}
          {createNoticeArea(notice)}
          {createProfileContactMap(contact)}
        </div>
      </div>
    </div>
  );
}

function createNameArea(name: Payload['name']) {
  return (
    <h1 className="resume-profile-name" style={Style.blue}>
      {name.title} <small>{name.small || ''}</small>
    </h1>
  );
}

function createProfileContactMap(contacts: Payload['contact']) {
  return (
    <div className="resume-profile-contacts">
      {contacts.map((contact, index) => (
        <ProfileContact key={index.toString()} payload={contact} />
      ))}
    </div>
  );
}

function createNoticeArea(notice: Payload['notice']) {
  return (
    <p className="resume-profile-notice">
      {notice.icon ? <FontAwesomeIcon className="me-2" icon={notice.icon} /> : ''}
      {notice.title}
    </p>
  );
}
