import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ScriptFormComponent } from './script-form/script-form.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ScriptFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatInputModule,
    NoopAnimationsModule,
    MatSelectModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
