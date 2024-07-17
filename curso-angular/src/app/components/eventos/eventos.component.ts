import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  name: boolean = true;
  nome: string = 'ailto'
  userData = {
    email: "luiz.souza@camilo",
    cargo: "analista"
  };
  userInfo = {
    endereco: "areias alves",
    numero: 116
  }

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show 
  }

  showName(): void{
    this.name = !this.name
  }

}
