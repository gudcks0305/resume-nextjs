import { IProject } from '../component/project/IProject';
import { acca } from './project_list/acca';
import { yataProject } from './project_list/yataProject';
import { gdscBlog } from './project_list/gdscblog';
import { ociKubernetesProject } from './project_list/ociKubernetes';
import { aimsWeb } from './project_list/aimsWeb';
import { pageone } from './project_list/pageone';
import { mailbox } from './project_list/mailbox';

const project: IProject.Payload = {
  disable: false,
  list: [acca, pageone, aimsWeb, ociKubernetesProject, mailbox, yataProject, gdscBlog],
};
export default project;
