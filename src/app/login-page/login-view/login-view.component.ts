import { Component, OnInit } from '@angular/core';
import { Login } from '../login'; // se importa la clase login.ts
import { LoginService} from '../login.service'; // se importa el servicio login.service.ts

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
