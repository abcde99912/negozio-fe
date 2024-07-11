import { Component} from '@angular/core';

import { AuthappService } from 'src/services/authapp.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string = '';;


  password: string = '';;


  autenticato: boolean = true;

  errMsg: string = "Spiacente, la userid e/o la password sono errati!";

  sottotitolo: string = "Procedi ad inserire la userid e la password";

  loginFallito: boolean = false;

  constructor(private route: Router, private authAppService: AuthappService) {
  }

  gestAuth() {
    this.authAppService.autentica(this.username, this.password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.route.navigate(['benvenuto', this.username]);
        this.loginFallito = false;
      } else {
        this.loginFallito = true;
      }
    });
  }
}

