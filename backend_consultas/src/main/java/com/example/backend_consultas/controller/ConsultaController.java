package com.example.backend_consultas.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.backend_consultas.Consulta;
import com.example.backend_consultas.repository.ConsultaRepository;
import com.example.backend_consultas.service.ConsultaService;
@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping(path="/api")
public class ConsultaController {
    @Autowired
    private ConsultaRepository consultaRepository;
    private final ConsultaService consultaService;
    public ConsultaController(ConsultaService consultaService){
        this.consultaService = consultaService;
    }

    @PostMapping(path="/add")
    public @ResponseBody ResponseEntity<Consulta> addNewConsulta(@RequestBody Consulta consulta){
        return consultaService.addNewConsulta(consulta);
    }

    @DeleteMapping(path="/remove/{id}")
    public @ResponseBody String deleteById(@PathVariable Long id){
        return consultaService.deleteById(id);
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Consulta> getAll() {
        return consultaRepository.findAll();
    }

    @GetMapping(path="/get/{id}")
    public @ResponseBody Consulta getById(@PathVariable Long id){
        Optional<Consulta> consultaOptional = consultaRepository.findById(id);
        if (consultaOptional.isPresent()){
            Consulta c = consultaOptional.get();
            return c;
        } else{
            throw new RuntimeException("Consulta não encontrada com ID" + id);
        }
    }

    @PatchMapping(path="/{id}/mudarsituacao")
    public ResponseEntity<Consulta> changeAvailableConsulta(@PathVariable Long id){
        Consulta atualizada = consultaService.changeAvailableConsulta(id);
        return ResponseEntity.ok(atualizada);
    }
}
