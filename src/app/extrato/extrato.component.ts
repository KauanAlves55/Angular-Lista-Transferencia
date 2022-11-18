import { TransferenciasService } from './../services/TransferenciasService';
import { Component, OnInit } from '@angular/core';
import Transferencia from '../services/models/Transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TransferenciasService) {}

  ngOnInit() {
    this.service.todas().subscribe((trasnferencias: Transferencia[]) => {
      console.table(trasnferencias);
      this.transferencias = trasnferencias;
    });
  }
}
