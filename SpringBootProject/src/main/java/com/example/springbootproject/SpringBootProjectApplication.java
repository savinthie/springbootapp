package com.example.springbootproject;

import com.example.springbootproject.model.Project;
import com.example.springbootproject.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootProjectApplication {

@Autowired
ProjectRepository projectRepository;
	public static void main(String[] args) {
		SpringApplication.run(SpringBootProjectApplication.class, args);
	}


}
