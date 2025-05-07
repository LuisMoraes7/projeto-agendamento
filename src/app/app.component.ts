import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RenderDateComponent } from './render-date/render-date.component';
import { AdmAreaComponent } from './adm-area/adm-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, RenderDateComponent, NgIf, AdmAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-consultas'
  diasDaSemana: String[] = ['Domingo', 'Seg', 'Ter', 'Qua', 'Quin', 'Sex', 'Sáb']
  
  diasRestantes: { data: string; diaSemana: String; mostrar: boolean }[] = [];
  constructor(){
  const hoje = new Date();
  const diaHoje = hoje.getDay();

  for (let i = 0; i <= (8 - diaHoje); i++) {
    const novaData = new Date(hoje);
    novaData.setDate(hoje.getDate() + i);
    const ano = novaData.getFullYear();
    const mes = String(novaData.getMonth() + 1).padStart(2, '0');
    const dia = String(novaData.getDate()).padStart(2, '0');
  
    const dataFormatada = `${ano}-${mes}-${dia}`;
    if (novaData.getDay() !== 0){
      const diaSemana: String = this.diasDaSemana[novaData.getDay()];
      this.diasRestantes.push({ data: dataFormatada, diaSemana, mostrar: false });
    }
  }
  console.log(this.diasRestantes)
  }
  //aplicacao starta permitindo ver os horarios. mudar isso dps
  mostrarConsultas: boolean = false
  //--------------------------------------
  mostrarConsultas2: boolean = false

  areaDoAdm: boolean = true
  changeMostrarConsultas(): void{
    this.mostrarConsultas = !this.mostrarConsultas
    console.log(this.mostrarConsultas)
    this.areaDoAdm = false
  }

  changeAreaDoAdm(): void{
    this.areaDoAdm = !this.areaDoAdm
    this.mostrarConsultas = false
  }

  changeMostrarConsultas2(index: number): void{
    this.diasRestantes.forEach(diaRestante => {
      if (diaRestante.data !== this.diasRestantes[index].data){
        diaRestante.mostrar = false
      } else{
        diaRestante.mostrar = !diaRestante.mostrar
      }
    })
  }
}

