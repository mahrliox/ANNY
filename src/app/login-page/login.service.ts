import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  muestrameAlgo() {
    return ['jamón', 'sal', 'fruta', 'verdura'];
  }
}
