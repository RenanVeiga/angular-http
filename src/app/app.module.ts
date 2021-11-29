import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MenuLoginSenhaModule } from './menu-login-senha/menu-login-senha.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelasComponent } from './tabelas/tabelas.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenuLoginSenhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
