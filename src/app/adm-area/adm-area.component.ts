import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { ConsultasServiceService } from '../consultas-service.service';
import { Consulta } from '../Consulta';

@Component({
  selector: 'app-adm-area',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './adm-area.component.html',
  styleUrl: './adm-area.component.css'
})
export class AdmAreaComponent {
  horarioSelecionado = new FormControl('');
  seeAll: boolean = false
  visibility(){
    this.seeAll = !this.seeAll
    this.getConsultas()
  }
  consultas: Consulta[] = []
  getConsultas(): void{
    this.consultaService.getAll().subscribe((consultas) => {
     this.consultas = consultas;
   })
  }
  async addConsulta(){
    if (this.horarioSelecionado.value !== null){
      const myConsulta = {
        date: this.horarioSelecionado.value.replace("T", " "),
        available: true
      }
      this.consultaService.addItem(myConsulta).subscribe({
        next: () => {
          alert("Consulta cadastrada com sucesso!");
        },
        error: () => {
          alert('Erro ao agendar consulta.');
        }
      });
      
    }

  }
  formatarData(dataStr: string) {
    const [data, hora] = dataStr.split(' ');
    const [ano, mes, dia] = data.split('-');
    const horaMinuto = hora.slice(0, 5);
    return `${dia}/${mes}/${ano}, ${horaMinuto}`;
  }
  att(i: number){
    this.consultaService.changeItem(i).subscribe({
      next: () => {
        alert("Mudança de disponibilidade.")
      }, error: (err) => {
        alert("Erro ao mudar: " + err)
      }
    })
    this.seeAll = false
  }
  excluir(i: number){
    this.consultaService.deleteItem(i).subscribe({
      next: () => {
        alert("Consulta removida com sucesso!");
      },
      error: (err) => {
        alert('Erro ao remover consulta.' + err.message);
      }
    
    });
    this.seeAll = false
    
  }
  constructor(private consultaService: ConsultasServiceService){}
}
