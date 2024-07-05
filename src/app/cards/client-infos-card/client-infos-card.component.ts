import { Component } from '@angular/core';

@Component({
  selector: 'app-client-infos-card',
  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss'
})
export class ClientInfosCardComponent {
  dataInfoClient = [
    {
      text: 'Nome',
      value: 'Felipe da Silva Freitas'
    },
    {
      text: 'Idade',
      value: '26 anos'
    },
    {
      text: 'Renda Mensal',
      value: 'R$ -1000,00'
    },
    {
      text: 'Nacionalidade',
      value: 'Brasileiro'
    }
  ]
}
