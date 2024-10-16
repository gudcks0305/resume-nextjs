import { IProject } from '../component/project/IProject';
import { yataProject } from './project_list/yataProject';
import { gdscBlog } from './project_list/gdscblog';
import { ociKubernetesProject } from './project_list/ociKubernetes';
import { aimsWeb } from './project_list/aimsWeb';
import { pageone } from './project_list/pageone';
import { mailbox } from './project_list/mailbox';

const project: IProject.Payload = {
  disable: false,
  list: [pageone, aimsWeb, ociKubernetesProject, mailbox, yataProject, gdscBlog],
};
export default project;
