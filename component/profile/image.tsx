import { PropsWithChildren } from 'react';

export default function ProfileImage({
  src,
  alt,
}: PropsWithChildren<{ src: string; alt: string }>) {
  return (
    <div className="pb-3 text-md-end text-center">
      <img className="img-fluid rounded resume-profile-image" src={src} alt={alt} />
    </div>
  );
}
