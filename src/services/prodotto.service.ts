import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Prodotto } from 'src/app/models/prodotto';


@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private baseURL = 'http://localhost:8080/api/v1/inventario'
  constructor(private httpClient : HttpClient) { }

  getListaProdotti(): Observable<Prodotto[]>{
    return this.httpClient.get<Prodotto[]>(`${this.baseURL}`)
  }


}
