import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "maya" , type: "cachorro", age: 4  },
    { name: "tom"  , type: "gato"    , age: 5  },
    { name: "jerry", type: "rato"    , age: 8  },
    { name: "jegue", type: "cavalo"  , age: 28 },
  ];

  animal: Animal = {
    name: "Teste",
    type: "Alguma coisa",
    age: 45
  };

  constructor() { }

  animalDetails = '';

  ngOnInit(): void {
  };

  showAge(animal: Animal) {
    this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos`;

  }
}
