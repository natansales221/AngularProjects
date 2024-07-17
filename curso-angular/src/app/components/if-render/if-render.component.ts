import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  beautyNatan: boolean = false;
  outroTeste: number = 30
  constructor() { }

  ngOnInit(): void {
  }

}
