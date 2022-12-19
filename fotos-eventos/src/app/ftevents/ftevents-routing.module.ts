import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompinicialComponent } from '../componente/compinicial/compinicial.component';
import { AddComponent } from '../componente/add/add.component';


const routes: Routes = [

  { path:'ftevents/home',
    component: CompinicialComponent},

  {path: 'ftevents/add',
    component: AddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FteventsRoutingModule { }
