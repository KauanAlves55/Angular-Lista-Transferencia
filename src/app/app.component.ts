import { TransferenciasService } from './services/TransferenciasService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciasService) {}

  transferir($event) {
    this.service.adicionar($event);
  }
}
