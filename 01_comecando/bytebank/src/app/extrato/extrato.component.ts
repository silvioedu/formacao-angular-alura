import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: any[]

  constructor(private service: TransferenciaService) {
    // This is intentional
  }

  ngOnInit(): void {
    this.service.todas().subscribe(transferencias => {
      console.table(transferencias)
      this.transferencias = transferencias
    })
  }

}
