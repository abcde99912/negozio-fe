import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

import { Ordini } from 'src/app/models/ordini';


@Injectable({
  providedIn: 'root'
})
export class OrdiniService {
  private apiUrl = 'http://localhost:8080/api/v1/ordini';

  constructor(private httpClient: HttpClient) { }

  getOrdini(): Observable<Ordini[]> {
    return this.httpClient.get<Ordini[]>(this.apiUrl);
  }


}
