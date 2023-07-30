package com.example.springbootproject.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="project_details")
public class Project {
    @Id
    @GeneratedValue
    private long id;
    @Column(name="project_name")
    private String projectName;
    @Column(name="project_owner")
    private String projectOwner;
    @Column(name="project_owner_email")
    private String projectOwnerEmail;


    public Project(){}

    public Project(long id, String projectName, String projectOwner, String projectOwnerEmail) {
        this.id = id;
        this.projectName = projectName;
        this.projectOwner = projectOwner;
        this.projectOwnerEmail = projectOwnerEmail;
    }

    public Project(long id, String projectName, String projectOwner, String projectOwnerEmail, List<String> members) {
        this.id = id;
        this.projectName = projectName;
        this.projectOwner = projectOwner;
        this.projectOwnerEmail = projectOwnerEmail;

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectOwner() {
        return projectOwner;
    }

    public void setProjectOwner(String projectOwner) {
        this.projectOwner = projectOwner;
    }

    public String getProjectOwnerEmail() {
        return projectOwnerEmail;
    }

    public void setProjectOwnerEmail(String projectOwnerEmail) {
        this.projectOwnerEmail = projectOwnerEmail;
    }





    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", projectName='" + projectName + '\'' +
                ", projectOwner='" + projectOwner + '\'' +
                ", projectOwnerEmail='" + projectOwnerEmail + '\'' +

                '}';
    }
}
