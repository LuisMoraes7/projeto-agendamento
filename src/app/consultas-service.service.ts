import { Injectable } from '@angular/core';
import { Consulta } from './Consulta';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Cons, Observable, of } from 'rxjs';
import { ConsultaToPost } from './ConsultaToPost';
@Injectable({
  providedIn: 'root'
})


export class ConsultasServiceService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }
  getAll(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.apiUrl}/all`)
  }
  getItem(id: number): Observable<Consulta | false> {
    return this.http.get<Consulta>(`${this.apiUrl}/get/${id}`).pipe(catchError(this.handleError))
  } 

  changeItem(id: number): Observable<Consulta>{
    return this.http.patch<Consulta>(`${this.apiUrl}/${id}/mudarsituacao`, null)
  }

  addItem(consulta: ConsultaToPost): Observable<Consulta>{
    return this.http.post<Consulta>(`${this.apiUrl}/add`, consulta)
  }

  deleteItem(id: number){
    return this.http.delete(`${this.apiUrl}/remove/${id}`, {responseType: 'text'})
  }

  private handleError(error: HttpErrorResponse): Observable<false>{
    return of(false)
  }
}
