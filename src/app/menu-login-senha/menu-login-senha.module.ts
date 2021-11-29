import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsenhaComponent } from './loginsenha/loginsenha.component';
import { ServiçosService } from './serviços/serviços.service';
import { EsquecisenhaComponent } from './esquecisenha/esquecisenha/esquecisenha.component';


@NgModule({
  declarations: [
    LoginsenhaComponent,
    EsquecisenhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginsenhaComponent,
    EsquecisenhaComponent
  ],
  providers: [
    ServiçosService
  ]
})
export class MenuLoginSenhaModule { }
