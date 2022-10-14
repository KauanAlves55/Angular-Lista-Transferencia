import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferecnia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-trasnferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    console.log('Solicitada nova transferêcnia');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
