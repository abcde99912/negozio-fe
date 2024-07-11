import { Component, OnInit } from '@angular/core';
import { Ordini } from 'src/app/models/ordini';
import { OrdiniService } from 'src/services/ordini.service';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit {
  ordini: Ordini[] = [];

  constructor(private ordiniService: OrdiniService) { }

  ngOnInit() {
    this.loadOrdini();
  }

  loadOrdini() {
    this.ordiniService.getOrdini().subscribe(data => {
      this.ordini = data;
    });
  }
  
}