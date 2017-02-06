import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NavbarComponent } from './nav/navbar.component'
import { PortfolioAppComponent } from './portfolio-app.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    NavbarComponent,
    PortfolioAppComponent
  ],
  bootstrap: [PortfolioAppComponent]
})

export class AppModule {}
