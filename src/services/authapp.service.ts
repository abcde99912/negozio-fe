import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthappService {
  constructor(private httpClient : HttpClient) { }

  autentica(username: string, password: string): Observable<boolean> {
    return this.httpClient.post('http://localhost:8080/api/v1/login', { username, password }).pipe(
      map(() => {
        sessionStorage.setItem('utenteAutenticato', 'true');
        return true;
      }),
      catchError(error => {
        console.error('Utente non autorizzato', error);
        return of(false);
      })
    );
  }

  logout = (): void => sessionStorage.clear();

}