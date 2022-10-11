import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferecnia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-trasnferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferêcnia');
    console.log('Valor:', this.valor);
    console.log('Destino:', this.destino);
  }
}
