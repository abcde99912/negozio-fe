import { Component, OnInit } from '@angular/core';
import { Cliente, ProfiloCliente} from '../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crea-clienti',
  templateUrl: './crea-clienti.component.html',
  styleUrls: ['./crea-clienti.component.css']
})
export class CreaClientiComponent extends Cliente implements OnInit  {

  cliente: Cliente = new Cliente();
  verificato: boolean = false; 
  messaggioErrore: string = '';
  descPrfList: string[] = [];


Cat: ProfiloCliente[] =[];

  constructor(private clienteService: ClienteService,
    private router: Router, http:HttpClient) {
      super();
  }

  ngOnInit(): void {
     this.getListaProfili();
  }


private getListaProfili() {
  this.clienteService.getListaProfili().subscribe(data => {
      this.Cat = data;
  });
}

  saveCliente(){
    this.clienteService.creaCliente(this.cliente).subscribe({
      next: data => {
        console.log(data);
        this.goToClienteList();
      },
      error: error => console.log(error)
    });


  }


  goToClienteList(){
    this.router.navigate(['/lista-clienti']);
  }
  

  onSubmit() {
    this.clienteService.controlloCf(this.cliente.codiceFiscaleCli).pipe(
      catchError(error => {
        this.messaggioErrore = 'Si è verificato un errore. Per favore riprova.';
        throw error;
      })
    ).subscribe(exists => {
      if (exists) {
        this.messaggioErrore = 'Cliente già presente in anagrafica.';
        this.verificato = true;
      } else {
        console.log(this.cliente);
        this.saveCliente();
        this.messaggioErrore = '';
      }
    });
  }

  

}