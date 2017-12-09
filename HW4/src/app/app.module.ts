import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { Http, Jsonp, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {MatAutocompleteModule, MatTableModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataSource} from '@angular/cdk/collections';
import {MatSortModule} from '@angular/material';

import { SlidePanelComponent } from './slide';

@NgModule({
  declarations: [
    AppComponent,
    SlidePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    JsonpModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
