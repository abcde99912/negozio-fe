import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.css'],
})
export class ListaClientiComponent implements OnInit {

  clienti: Cliente[] = [];
  filter: string = '';
  pagina : number = 1;
  righe : number = 20;
  paginaPri: number = 1;
  mostraFinestra = false;
  messaggioErrore: string = '';


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.getClienti(this.filter);

  }

  public getClienti(filter: string) {
    this.clienteService.getListaClienti().subscribe(data => {
      this.messaggioErrore = '';
      
      if (filter) {  
        const filtrato = data.filter(cliente =>
          cliente.nomeCli.includes(filter) ||
          cliente.cognomeCli.includes(filter) ||
          cliente.emailCli.includes(filter) ||
          cliente.codiceFiscaleCli.includes(filter) ||
          cliente.profiloCli.descPrf.includes(filter) ||
          cliente.indirizzoCli.includes(filter)
        );
        this.pagina = this.paginaPri; 

        if (filtrato.length > 0) {
          this.clienti = filtrato;
        } else {
          this.messaggioErrore = 'Cliente non trovato';
          this.clienti = [];
        }
      } 
      else {

        if (data.length > 0) {
          this.clienti = data;
        } else {
          this.messaggioErrore = 'Cliente non trovato';
          this.clienti = []; 
        }
      }

    }
  
  );

  }

  dettagliCliente(id: number){
    this.router.navigate(['dettagli-clienti',id]);
  }

  modificaCliente(id: number){
    this.router.navigate(['modifica-clienti', id]);
  }

  aggingiCliente(){
    this.router.navigate(['crea-clienti']);
  }

eliminaCliente(id: number) {
  this.clienteService.eliminaClienteS(id).subscribe({
    next: (data) => {
      console.log(data);
      this.getClienti(this.filter); 
    },
    error: (error) => {
        if (error.status === 500) {
        alert('Impossibile eliminare il cliente.');
      } else {
        alert('Si è verificato un errore durante l\'eliminazione del cliente.');
      }
    }
  });

}

eliminaClientiSelezionati() {
  for (const cliente of this.clienti) {

    if (cliente.selezionato) {
 
      this.eliminaCliente(cliente.idCli);
      this.mostraFinestra = false

    }
  }
}

messaggioEliminazione() {
  this.mostraFinestra = true;
}


clienteSelezionato() {
  return this.clienti.some(cliente => cliente.selezionato);
}

}



