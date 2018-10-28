import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, enableProdMode , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service, Employee } from './components/service.service';
import { DxDataGridModule, DxCheckBoxModule, DxSelectBoxModule, DxListModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DxDataGridModule, DxCheckBoxModule, DxSelectBoxModule, DxListModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
