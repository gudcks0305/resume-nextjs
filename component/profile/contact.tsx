import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Badge } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

export default function ProfileContact({
  payload,
}: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <div className="resume-profile-contact">
      <FontAwesomeIcon icon={payload.icon} />
      {createLink(payload)}
    </div>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return (
      <Badge color="secondary" className="resume-contact-badge">
        {payload.title || payload.link}
      </Badge>
    );
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
