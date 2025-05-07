import { Component, Input, SimpleChanges } from '@angular/core';
import { Consulta } from '../Consulta';
import { ConsultasServiceService } from '../consultas-service.service';
import { NgFor, NgIf } from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { response } from 'express';
@Component({
  selector: 'app-render-date',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './render-date.component.html',
  styleUrl: './render-date.component.css'
})
export class RenderDateComponent {
  @Input() data!: string;

  agendar(){
    const id: number | null = Number(this.horarioSelecionado.value)
    if(id == 0){
      alert("Selecione um horário.")
    } else{
      const confirmar = window.confirm("Deseja realmente agendar essa consulta?");
      if (confirmar && id){
        this.consultaService.changeItem(id).subscribe({
          next: (response) => {
            alert("Consulta agendada para " + this.formataData(response.date) + " em " + this.data.split('-').reverse().join('-'))
            this.getConsultas()
          }, error: (err) => {
            alert("erro: " + err)
          }
        })
      } else{
          alert("Agendamento cancelado.")
      }
    }
  }

  horarioSelecionado = new FormControl('');
  consultasEspecificas: Consulta[] = [];
   getConsultas(): void{
   this.consultaService.getAll().subscribe((consultas) => {
    this.consultas = consultas;

    this.consultasEspecificas = this.consultas.
    filter(consulta => consulta.date.substring(0, 10) === this.data)
    .sort((a, b) => {
      const horaA = a.date.substring(11, 16); 
      const horaB = b.date.substring(11, 16);
      return horaA.localeCompare(horaB);
    })
  }
  )
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.getConsultas();
    }
  }
  constructor(private consultaService: ConsultasServiceService){
    this.getConsultas()
    
  }
  
  consultas: Consulta[] = []

  formataData(data: string): string{
    const partes = data.split(' ');
  
    if (partes.length < 2) return '';

    const horaMinuto = partes[1].split(':').slice(0, 2).join(':');
  
    return horaMinuto;
  }

}
