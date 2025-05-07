package com.example.backend_consultas.service;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.example.backend_consultas.Consulta;
import com.example.backend_consultas.repository.ConsultaRepository;

@Service
public class ConsultaService {
    private final ConsultaRepository consultaRepository;
    public ConsultaService(ConsultaRepository consultaRepository){
        this.consultaRepository = consultaRepository;
    }

    public ResponseEntity<Consulta> addNewConsulta(Consulta consulta){
        Consulta c = new Consulta();
        c.setDate(consulta.getDate());
        c.setAvailable(consulta.getAvailable());
        consultaRepository.save(c);
        return ResponseEntity.ok(c);
    }

    public String deleteById(Long id){
        if (consultaRepository.existsById(id)){
            String thisConsulta = consultaRepository.findById(id).toString();
            consultaRepository.deleteById(id);
            return "Consulta " + thisConsulta + " de id " + id + " deletado com sucesso.";
        } else{
            return "Consulta com id " + id + " não encontrado.";
        }
    }

    public Consulta changeAvailableConsulta(Long id){
        Optional<Consulta> consultaOptional = consultaRepository.findById(id);
        if (consultaOptional.isPresent()){
            Consulta c = consultaOptional.get();
            c.setAvailable(!c.getAvailable());
            return consultaRepository.save(c);
        } else{
            throw new RuntimeException("Consulta não encontrada com ID" + id);
        }
    }

}
