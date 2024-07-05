import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  dataBalance = [
    {
      text: 'Conta corrente',
      value: '2000,00'
    },
    {
      text: 'Conta corrente saldo vinculado',
      value: '2000,00'
    },
    {
      text: 'Conta Poupança Saldo Vinculado',
      value: '400,00'
    },
    {
      text: 'Investimento com Baixa Automática',
      value: '500,00'
    },
    {
      text: 'Investimento sem Baixa Automática',
      value: '500,00'
    }
  ]
}
