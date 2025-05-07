package com.example.backend_consultas;

import org.springframework.boot.SpringApplication;

public class TestBackendConsultasApplication {

	public static void main(String[] args) {
		SpringApplication.from(BackendConsultasApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
