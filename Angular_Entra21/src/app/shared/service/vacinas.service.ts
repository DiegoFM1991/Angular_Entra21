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

}
