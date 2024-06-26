import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {

  dadosBalance = [
    {
      tipo: 'Conta corrente',
      valor: '2000,00'
    },
    {
      tipo: 'Conta corrente saldo vinculado',
      valor: '2000,00'
    },
    {
      tipo: 'Conta Poupança Saldo Vinculado',
      valor: '400,00'
    },
    {
      tipo: 'Investimento com Baixa Automática',
      valor: '500,00'
    },
    {
      tipo: 'Investimento sem Baixa Automática',
      valor: '500,00'
    }
  ]

}
