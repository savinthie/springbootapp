package com.example.springbootproject.controller;

import com.example.springbootproject.exception.ResourceNotFoundException;
import com.example.springbootproject.model.Project;
import com.example.springbootproject.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;


    @GetMapping//retrieve projects from the db
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // create project REST API
    @PostMapping//postmapping requires json body. therefore @RequestBody annotation must be used
    public Project addProject(@RequestBody Project newproject) {//add  projects to the db
        return projectRepository.save(newproject);
    }

    //get project by restapi
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable long id) {
        Project project = getById(id);
        return ResponseEntity.ok(project);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable long id, @RequestBody Project projectDetails) {
        Project updateProject = getById(id);
        updateProject.setProjectName(projectDetails.getProjectName());
        updateProject.setProjectOwner(projectDetails.getProjectOwner());
        updateProject.setProjectOwnerEmail(projectDetails.getProjectOwnerEmail());
        projectRepository.save(updateProject);
        return ResponseEntity.ok(updateProject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Project> deleteProject(@PathVariable long id) {
        Project deleteProject = getById(id);
        projectRepository.delete(deleteProject);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private Project getById(long id) {
        return projectRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Project not exit with id : " + id));

    }

}
