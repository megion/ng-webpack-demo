import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component'
import { SharedModule } from './shared/shared.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { BannerComponent } from './components/banner/banner.component'
import { HttpClientModule } from '@angular/common/http'
import { AboutComponent } from './components/about/about.component'
import { TwainComponent } from './components/twain/twain.component'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { HeroService } from './model/hero.service'
import { TwainService } from './components/twain/twain.service'
import { UserService } from './model/user.service'
import { InMemoryDataService } from './in-memory-data.service'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertsComponent,
    BannerComponent,
    AboutComponent,
    TwainComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HeroService,
    TwainService,
    UserService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: PlatformLocation, useExisting: platformBrowser },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
