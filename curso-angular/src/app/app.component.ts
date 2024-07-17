import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Bacana';
  userData = {
    email: "natan@natan.br",
    cargo: "admin"
  };
  userInfo = {
    endereco: "rua das luzes",
    numero: 30
  };

  title = 'curso-angular';
}
