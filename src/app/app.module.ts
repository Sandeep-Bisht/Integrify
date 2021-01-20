
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { AuthorComponent } from './author/author.component';
import { TranslationComponent } from './translation/translation.component';
import { InquireComponent } from './inquire/inquire.component';
import { ProofreadingComponent } from './proofreading/proofreading.component';
import { PlagiarismComponent } from './plagiarism/plagiarism.component';
import { EditiComponent } from './editi/editi.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CondationsComponent } from './condations/condations.component';
import { PrivacyComponent } from './privacy/privacy.component';

import { Config, DefaultConfig } from 'src/app/services/config';
import { AuthInterceptor } from 'src/app/services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PricesComponent,
    AuthorComponent,
    InquireComponent,
    TranslationComponent,
    ProofreadingComponent,
    ImprintComponent,
    CondationsComponent,
    PrivacyComponent,
    PlagiarismComponent,
    EditiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: Config, useValue: DefaultConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
