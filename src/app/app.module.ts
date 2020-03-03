import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ScriptFormComponent } from './script-form/script-form.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {TestComponent} from "./test/test.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarBlueComponent} from "./sidebar-blue/sidebar-blue.component";

@NgModule({
  declarations: [
    AppComponent,
    ScriptFormComponent,
    TestComponent,
    ToolBarComponent,
    SidebarComponent,
    SidebarBlueComponent
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
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

