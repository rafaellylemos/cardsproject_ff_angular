import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  dadosCredit = [
    {
      tipo: 'Limite de Compra',
      valor: '1000,00'
    },
    {
      tipo: 'Disponível',
      valor: '1200,00'
    },
    {
      tipo: 'Limite de Saque',
      valor: '2000,00'
    },
    {
      tipo: 'Disponível',
      valor: '1300,00'
    },
    {
      tipo: 'Limite Total Utilizado',
      valor: '3000,00'
    }
  ]

}
