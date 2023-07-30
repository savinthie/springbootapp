import React, { useState, useEffect } from "react";
import ProjectService from "../services/ProjectService";
import { useHistory, withRouter, useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./createProject.css";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const CreateProject = () => {
  //hooks used to caapture data
  const [projectName, setProjectName] = useState("");
  const [projectOwner, setprojectOwner] = useState("");
  const [projectOwnerEmail, setprojectOwnerEmail] = useState("");
  const [projectId, setId] = useState("");

  const { id } = useParams();

  //to navigate through paths
  const navigate = useNavigate();

  //project save
  const saveProject = (e) => {
    e.preventDefault();
    console.log(id);
    const project = { projectName, projectOwner, projectOwnerEmail, projectId };
    if (id) {
      ProjectService.updateProjectId(id, project)
        .then((response) => {
          //window.location.href="/projects"
          navigate("/projects");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ProjectService.createProject(project)
        .then((response) => {
          console.log(project);
          //window.location.href="/projects"
          navigate("/projects");
          console.log(project);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    ProjectService.getProjectId(id)
      .then((response) => {
        setProjectName(response.data.projectName);
        setprojectOwner(response.data.projectOwner);
        setprojectOwnerEmail(response.data.projectOwnerEmail);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return (
        <h3
          id="addheading"
          className="text-center"
          style={{ color: "rgb(14, 74, 152)" }}>
          <AiOutlineFolderAdd />
          Update Project{" "}
        </h3>
      );
    } else {
      return (
        <h3
          id="addheading"
          className="text-center"
          style={{ color: "rgb(14, 74, 152)" }}>
          {" "}
          <AiOutlineFolderAdd /> Add Project
        </h3>
      );
    }
  };

  return (
    <div>
      <div className="card-container">
        <div className="app-card">
          {title()}
          <div className="main-card">
            <form>
              <div className="form-group mb-2">
                {/* <label className="form-label">Project ID : </label>
                <input
                  type="text"
                  name="projectId"
                  className="form-control"
                  value={projectId}
                  onChange={(e) => setId(e.target.value)}
                /> */}
                <label className="form-label">Project Name : </label>
                <input
                  type="text"
                  name="projectName"
                  className="form-control"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <label className="form-label">Project Owner : </label>
                <input
                  type="text"
                  name="projectOwner"
                  className="form-control"
                  value={projectOwner}
                  onChange={(e) => setprojectOwner(e.target.value)}
                />

                <label className="form-label">
                  Project Owner projectOwnerEmail :{" "}
                </label>
                <input
                  type="email"
                  name="projectOwnerEmail"
                  className="form-control"
                  value={projectOwnerEmail}
                  onChange={(e) => setprojectOwnerEmail(e.target.value)}
                />
              </div>

              <button className="savebtn" onClick={(e) => saveProject(e)}>
                Save
              </button>
              <div className="canceldiv">
                <MdCancel />
                <Link to="/projects" className="cancelbtn">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
