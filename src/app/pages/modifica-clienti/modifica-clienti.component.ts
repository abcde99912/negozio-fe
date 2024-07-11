import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
// import { Observer } from 'rxjs';


@Component({
  selector: 'app-modifica-clienti',
  templateUrl: './modifica-clienti.component.html',
  styleUrls: ['./modifica-clienti.component.css']
})
export class ModificaClientiComponent implements OnInit {

  id: number = 0;

  clienti: Cliente = new Cliente();
  
  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCli'];
  
    this.clienteService.getClienteById(this.id).subscribe({
      next: (data: Cliente) => {
        this.clienti = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onSubmit(){
    this.clienteService.updateCliente(this.id, this.clienti).subscribe({
      next: () => {
        this.vaiListaClienti();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  vaiListaClienti(){
    this.router.navigate(['/lista-clienti']);
  }
}
