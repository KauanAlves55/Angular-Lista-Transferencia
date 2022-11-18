import Transferencia from './../services/models/Transferencia';
import { TransferenciasService } from './../services/TransferenciasService';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferecnia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-trasnferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router) {}

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    console.log('Solicitada nova transferêcnia');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();

        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
