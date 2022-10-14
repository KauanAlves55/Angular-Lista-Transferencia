import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],

  imports: [BrowserModule, FormsModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
