import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuantComponent } from './quant/quant.component';
import { VerbalComponent } from './verbal/verbal.component';
import { OverallComponent } from './overall/overall.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    QuantComponent,
    VerbalComponent,
    OverallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
