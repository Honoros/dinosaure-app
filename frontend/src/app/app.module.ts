import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogregpageComponent } from './components/logregpage/logregpage.component';
import { DinosaurepageComponent } from './components/dinosaurepage/dinosaurepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LogregpageComponent,
    DinosaurepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
