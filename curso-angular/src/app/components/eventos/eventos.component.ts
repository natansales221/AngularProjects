import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  name: boolean = true;
  nome: string = 'lenadro'
  userData = {
    email: "lenadro.mente@senaque",
    cargo: "assistente"
  };
  userInfo = {
    endereco: "joao santa ana",
    numero: 8
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
