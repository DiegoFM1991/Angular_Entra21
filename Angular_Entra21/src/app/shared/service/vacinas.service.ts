import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { Vacina } from '../model/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  private readonly API = 'http://localhost:8080/vacina'; // endpoint do servidor backend.

  constructor(private HttpClient: HttpClient) { }

  listarTodas(): Observable<Vacina[]> {
    return this.HttpClient.get<Vacina[]>(this.API);
  }

  buscarPorId(id: number): Observable<Vacina>{
    return this.HttpClient.get<Vacina>(this.API + '/detalhe/' + id);
  }

  salvar(vacina: Vacina): Observable<Vacina>{
    return this.HttpClient.post<Vacina>(this.API, vacina);
  }

  atualizar(vacina: Vacina):Observable<Vacina> {
    return this.HttpClient.put<Vacina>(this.API, vacina);
  }

}
