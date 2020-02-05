import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScriptFormComponent} from "./script-form/script-form.component";


const routes: Routes = [
  {path: '', component: ScriptFormComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
