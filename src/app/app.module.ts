import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { BalanceCardComponent } from './cards/balance-card/balance-card.component';
import { ClientInfosCardComponent } from './cards/client-infos-card/client-infos-card.component';
import { CreditCardComponent } from './cards/credit-card/credit-card.component';
import { DebitCardComponent } from './cards/debit-card/debit-card.component';
import { CardTitleComponent } from './cards/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    BalanceCardComponent,
    ClientInfosCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    CardTitleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
