import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente, ProfiloCliente } from '../app/models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = 'http://localhost:8080/api/v1/clienti'

  constructor(private httpClient : HttpClient) { }

  getListaClienti = (): Observable<Cliente[]> => this.httpClient.get<Cliente[]>(`${this.apiURL}`);

  getListaProfili = (): Observable<ProfiloCliente[]> => this.httpClient.get<ProfiloCliente[]>(`http://localhost:8080/api/v1/cat`);
  
  creaCliente = (cliente: Cliente): Observable<Object> => this.httpClient.post(`${this.apiURL}`, cliente);
  
  getClienteById = (id: number): Observable<Cliente> => this.httpClient.get<Cliente>(`${this.apiURL}/${id}`);
  
  updateCliente = (id: number, cliente: Cliente): Observable<Object> => this.httpClient.put(`${this.apiURL}/${id}`, cliente);
  
  eliminaClienteS = (id: number): Observable<Object> => this.httpClient.delete(`${this.apiURL}/${id}`);

  getArticoliByDesc = (nomeCli: string): Observable<Cliente[]> => this.httpClient.get<Cliente[]>(`${this.apiURL}/cerca/${nomeCli}`);
  
  controlloCf = (codiceFiscaleCli: string): Observable<boolean> => this.httpClient.get<boolean>(`${this.apiURL}/check/${codiceFiscaleCli}`);

}
