import { IProject } from '../component/project/IProject';
import { yataProject } from './project_list/yataProject';
import { gdscBlog } from './project_list/gdscblog';

const project: IProject.Payload = {
  disable: false,
  list: [yataProject, gdscBlog],
};
export default project;
