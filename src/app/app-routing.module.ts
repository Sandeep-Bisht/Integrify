import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { AuthorComponent } from './author/author.component';
import { InquireComponent } from './inquire/inquire.component';
import { GhostwritingComponent } from './ghostwriting/ghostwriting.component';
import { ProofreadingComponent } from './proofreading/proofreading.component';
import { PlagiarismcheckComponent } from './plagiarismcheck/plagiarismcheck.component';
import { TranslationComponent } from './translation/translation.component';
import { FormattingComponent } from './formatting/formatting.component';
import { LektoratComponent } from './lektorat/lektorat.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CondationsComponent } from './condations/condations.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch : 'full'},
  { path: 'prices', component: PricesComponent, pathMatch : 'full'},
  { path: 'author', component: AuthorComponent, pathMatch : 'full'},
  { path: 'inquire', component: InquireComponent, pathMatch : 'full'},
  { path: 'ghostwriting', component: GhostwritingComponent, pathMatch : 'full'},
  { path: 'proofreading', component: ProofreadingComponent, pathMatch : 'full'},
  { path: 'Lektorat', component: LektoratComponent, pathMatch : 'full'},
  { path: 'plagiarism', component: PlagiarismcheckComponent, pathMatch : 'full'},
  { path: 'translation', component: TranslationComponent, pathMatch : 'full'},
  { path: 'formatting', component: FormattingComponent, pathMatch : 'full'},
  { path: 'imprint', component: ImprintComponent, pathMatch : 'full'},
  { path: 'condations', component: CondationsComponent, pathMatch : 'full'},
  { path: 'privacy', component: PrivacyComponent, pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
