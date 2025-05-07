package com.example.backend_consultas;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;

@Entity
public class Consulta {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String date;
    private boolean available;
    public Long getId(){
        return id;
    }

    @Override
    public String toString() {
        return "Consulta [id=" + id + ", date=" + date + ", available=" + available + "]";
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getDate() {
        return date;
    }
    
    public void setDate(String date) {
        this.date = date;
    }

    public boolean getAvailable(){
        return available;
    }

    public void setAvailable(boolean available){
        this.available = available;
    }

    
}
