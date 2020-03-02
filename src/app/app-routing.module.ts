import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScriptFormComponent} from "./script-form/script-form.component";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  {path: '', component: ScriptFormComponent},
  {path: 'hello', component: TestComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
