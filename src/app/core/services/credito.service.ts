import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credito } from '../models/credito.model';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  private readonly API = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) { }

  findByNumeroNfse(numeroNfse: string): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.API}/${numeroNfse}`);
  }
  
  findByNumeroCredito(numeroCredito: string): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.API}/${numeroCredito}`);

  }
}
