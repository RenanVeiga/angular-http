import { Component, OnInit } from '@angular/core';
import { ServiçosService } from '../serviços/serviços.service';

@Component({
  selector: 'loginsenha',
  templateUrl: './loginsenha.component.html',
  styleUrls: ['./loginsenha.component.css']
})
export class LoginsenhaComponent implements OnInit {

  constructor( private menuService: ServiçosService) {  }

  ngOnInit(): void {
  }

}
