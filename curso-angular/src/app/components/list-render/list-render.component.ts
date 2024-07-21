import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {
    name: "Teste",
    type: "Alguma coisa",
    age: 45
  };

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals)=> (this.animals = animals));
  }

  animalDetails = '';

  ngOnInit(): void {
  };

  showAge(animal: Animal) {
    this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos`;

  }

  removeAnimal(animal: Animal){
    console.log("removendo animal... ");
    this.animals = this.listService.remove(this.animals, animal);
  }
}
