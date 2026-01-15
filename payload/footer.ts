import { homepage, version, dependencies } from '../package.json';

import { IFooter } from '../component/footer/IFooter';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: dependencies.next,
  reactVersion: dependencies.react,
  bootstrapVersion: dependencies.bootstrap,
};

export default footer;
