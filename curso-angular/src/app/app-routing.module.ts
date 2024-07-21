import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'first', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way', component: TwoWayBindingComponent},
];

  
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
