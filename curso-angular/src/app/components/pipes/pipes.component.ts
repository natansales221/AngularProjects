import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  today = new Date()

  myTest = "testando o pipe ";
  constructor() { }

  ngOnInit(): void {
  }

}
