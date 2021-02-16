
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { AuthorComponent } from './author/author.component';
import { InquireComponent } from './inquire/inquire.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CondationsComponent } from './condations/condations.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Config, DefaultConfig } from 'src/app/services/config';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';
import { PreloaderComponent } from './preloader/preloader.component';
import { ngfModule } from 'angular-file';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PricesComponent,
    AuthorComponent,
    InquireComponent,
    ImprintComponent,
    CondationsComponent,
    PrivacyComponent,
    PreloaderComponent,
    ThankyouComponent,
    ServiceComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ngfModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    { provide: Config, useValue: DefaultConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
