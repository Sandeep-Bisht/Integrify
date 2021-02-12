import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { AuthorComponent } from './author/author.component';
import { InquireComponent } from './inquire/inquire.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CondationsComponent } from './condations/condations.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path: 'services',
    loadChildren: () => import('./services-page/services-page.module').then(m => m.ServicesPageModule)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch : 'full'},
  { path: 'prices', component: PricesComponent, pathMatch : 'full'},
  { path: 'author', component: AuthorComponent, pathMatch : 'full'},
  { path: 'inquire', component: InquireComponent, pathMatch : 'full'},
  { path: 'imprint', component: ImprintComponent, pathMatch : 'full'},
  { path: 'condations', component: CondationsComponent, pathMatch : 'full'},
  { path: 'privacy', component: PrivacyComponent, pathMatch : 'full'},
  { path: 'thankyou', component: ThankyouComponent, pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
