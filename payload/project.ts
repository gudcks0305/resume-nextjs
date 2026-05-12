import { IProject } from '../component/project/IProject';
import { acca } from './project_list/acca';
import { aimsWeb } from './project_list/aimsWeb';
import { pageone } from './project_list/pageone';
import { mailbox } from './project_list/mailbox';

const project: IProject.Payload = {
  disable: false,
  list: [acca, pageone, aimsWeb, mailbox],
};
export default project;
