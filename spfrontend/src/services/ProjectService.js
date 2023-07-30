import axios from 'axios';

const SERVER_URL="http://localhost:8080/api/v1/projects";


class ProjectService{
 getprojects(){
    return axios.get(SERVER_URL);
 }

 createProject(project){
  return axios.post(SERVER_URL, project)
 }

 getProjectId(projectId){
  return axios.get(SERVER_URL+'/'+projectId);
 }

 updateProjectId(projectId,project){
  return axios.put(SERVER_URL+'/'+projectId, project);
 }

 deleteProjectId(projectId){
  return axios.delete(SERVER_URL+'/'+projectId)
 }
 
}

export default new ProjectService();