import { Component } from '@angular/core';

@Component({
  selector: 'app-client-infos-card',
  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss'
})
export class ClientInfosCardComponent {
  dadosClient = [
    {
      tipo: 'Nome',
      valor: 'Felipe da Silva Freitas'
    },
    {
      tipo: 'Idade',
      valor: '26 anos'
    },
    {
      tipo: 'Renda Mensal',
      valor: 'R$ -1000,00'
    },
    {
      tipo: 'Nacionalidade',
      valor: 'Brasileiro'
    }
  ]
}
