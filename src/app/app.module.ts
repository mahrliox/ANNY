import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './Login/login/login.component';
import { LoginViewComponent } from './login-page/login-view/login-view.component';
import { LoginService } from './login-page/login.service';
@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
