import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: "maya" , type: "cachorro" },
    { name: "tom"  , type: "gato"     },
    { name: "jerry", type: "rato"     },
    { name: "jegue", type: "cavalo"   },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
