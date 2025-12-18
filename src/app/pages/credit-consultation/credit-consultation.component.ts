import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

import { CreditoService } from '../../core/services/credito.service';
import { Credito } from '../../core/models/credito.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-credit-consultation',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe],
  templateUrl: './credit-consultation.component.html',
  styleUrl: './credit-consultation.component.scss',
})
export class CreditConsultationComponent {
  numeroNfse = '';
  numeroCredito = '';

  resultados: Credito[] = [];
  loading = false;
  error = '';

  constructor(private creditoService: CreditoService) {}

  /** 🔍 Consulta por NFS-e */
  consultarPorNfse() {
    if (!this.numeroNfse) return;

    this.resetEstado();
    this.loading = true;

    this.creditoService
      .findByNumeroNfse(this.numeroNfse)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          if (!res || res.length === 0) {
            this.error = 'Nenhum crédito encontrado para esta NFS-e';
            return;
          }
          this.resultados = res;
        },
        error: () => {
          this.error = 'Erro ao consultar NFS-e. Verifique a numeração e tente novamente.';
        },
      });
  }

  /** 🔍 Consulta por número do crédito */
  consultarPorCredito() {
    if (!this.numeroCredito) return;

    this.resetEstado();
    this.loading = true;

    this.creditoService
      .findByNumeroCredito(this.numeroCredito)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res) => {
          if (!res) {
            this.error = 'Crédito não encontrado';
            return;
          }
          this.resultados = [res]; // API retorna objeto
        },
        error: () => {
          this.error = 'Erro ao consultar crédito. Verifique a numeração e tente novamente.';
        },
      });
  }

  resetEstado() {
    this.error = '';
    this.resultados = [];
  }
}
