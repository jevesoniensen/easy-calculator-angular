import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableAccountEntriesComponent } from './table-account-entries/table-account-entries.component';
import { MatTableModule } from '@angular/material/table'  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TableAccountEntriesComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
