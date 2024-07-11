import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { ProdottoService } from '../../../services/prodotto.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})



export class InventarioComponent implements OnInit { 

  hoverStates: boolean[] = [];
  


  prodotti: Prodotto[] = [];

  filteredProdotti: Prodotto[] = [];  
  filter: string = '';
  errore : string = "";

  pagina : number = 1;
  righe : number = 10;



  constructor(private prodottoService: ProdottoService) { }

  ngOnInit(): void {
    this.getProdotti();


  }


  private getProdotti() {
    this.prodottoService.getListaProdotti().subscribe(data => {
        this.prodotti = data;
    });
}


}


