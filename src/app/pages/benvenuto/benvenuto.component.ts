import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.css']
})
export class BenvenutoComponent implements OnInit {
  messaggioBenvenuto = false;

  utente: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['username'];
    if (!sessionStorage.getItem('visitato')) {
      sessionStorage.setItem('visitato', 'true');
      this.messaggioBenvenuto = true;
    }
  }
}
