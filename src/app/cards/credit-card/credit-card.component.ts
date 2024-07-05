import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  dataCredit = [
    {
      text: 'Limite de Compra',
      value: '1000,00'
    },
    {
      text: 'Disponível',
      value: '1200,00'
    },
    {
      text: 'Limite de Saque',
      value: '2000,00'
    },
    {
      text: 'Disponível',
      value: '1300,00'
    },
    {
      text: 'Limite Total Utilizado',
      value: '3000,00'
    }
  ]

}
