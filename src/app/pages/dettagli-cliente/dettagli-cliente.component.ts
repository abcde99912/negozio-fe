import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/services/cliente.service';

@Component({
  selector: 'app-dettagli-cliente',
  templateUrl: './dettagli-cliente.component.html',
  styleUrls: ['./dettagli-cliente.component.css']
})
export class DettagliClienteComponent implements OnInit {

  id: number = 0;
  cliente: Cliente = new Cliente;
  constructor(private route: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCli'];

    this.cliente = new Cliente();
    this.clienteService.getClienteById(this.id).subscribe( data => {
      this.cliente = data;
    });
  }

}
