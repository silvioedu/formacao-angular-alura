import { Transferencia } from './../models/transferencia/transferencia.module';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 0
  destino: number = 0

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService,
    private router: Router) {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  transferir() {
    // console.log(`O valor ${this.valor} para o destino ${this.destino}`)
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
      },
        error => console.error(error)
    )
  }

  limparCampos() {
    this.valor = 0
    this.destino = 0
  }
}
