import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Natan Sales";
  age: number = 23;
  trampo = "programador";

  constructor() { }

  ngOnInit(): void {
  }

}
