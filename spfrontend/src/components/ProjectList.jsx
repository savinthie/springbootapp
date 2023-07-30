import React, { useEffect, useState } from "react";
import ProjectService from "../services/ProjectService";
import { Link} from "react-router-dom";
import  './projectList.css';
import{AiFillDelete} from 'react-icons/ai';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    getprojects();
  },([]))


  //taking all the projects in the table
  const getprojects =()=>{
    ProjectService.getprojects().then((response)=>{
        setProjects(response.data)//seting a new project
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    
    })
  }

  

// delete a project by searching a project by its id
  const deleteProject=(projectId)=>{
    ProjectService.deleteProjectId(projectId).then((response)=>{
        getprojects();
    }).catch(error =>{
        console.log(error)
    })
  }


  return (
  <div className="container">
    <h1 className="text-center">Projects</h1>
    <table >
        <thead>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Project Owner</th>
            <th>Project Owner Email</th>
            <th></th>
        </thead>
        <tbody>
            {
                projects.map(project=>
                   <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.projectName}</td>
                    <td>{project.projectOwner}</td>
                    <td>{project.projectOwnerEmail}</td>
                    <td className='btnClass'>
                        <Link className="addbtn" to={`/editproject/${project.id}`}>Update</Link>
                        <Link className="dltbtn" onClick={()=>deleteProject(project.id)}><AiFillDelete/>Delete</Link>
                    </td>
                   </tr> 
                    )
            }
        </tbody>
    </table>
    <Link to="/addproject" className="addbtn">Add Project</Link>
  </div>
  );
};
export default ProjectList;
