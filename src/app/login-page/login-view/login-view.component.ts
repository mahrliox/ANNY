import { Component, OnInit } from '@angular/core';
import { Login } from '../login'; // se importa la clase login.ts
import { LoginService} from '../login.service'; // se importa el servicio login.service.ts

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  muestraLogin = true;
  muestraRegistro = false;
  muestraInicio: string[];
  value = '';
  constructor(private ServicioRegistro: LoginService) { // Se una variable privada para el componente, se le asigna el tipo LoginService

  }
  showRegisterForm() {
    this.muestraLogin = false;
    this.muestraRegistro = true;
  }
  muestraLista(value: string) {
    this.value = value;
    this.muestraInicio = this.ServicioRegistro.muestrameAlgo();
  }
  ngOnInit() {

  }

}
