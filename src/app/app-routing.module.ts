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
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceComponent } from './service/service.component';
import {AuthguardGuard} from 'src/app/core/authguard.guard';
const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full', canActivate: [AuthguardGuard] },
  { path: 'home', component: HomeComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  { path: 'prices', component: PricesComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  { path: 'author', component: AuthorComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  { path: 'inquire', component: InquireComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  { path: 'imprint', component: ImprintComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  { path: 'terms-condition', component: CondationsComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  { path: 'privacy', component: PrivacyComponent, pathMatch : 'full', canActivate: [AuthguardGuard]},
  // { path: 'plagiarism', component: PlagiarismComponent, pathMatch : 'full'},
  { path: 'service', component: ServiceComponent,
    children: [
      {path: ':id', component: ServiceDetailComponent}
    ], canActivate: [AuthguardGuard]
  },
  { path: 'thankyou', component: ThankyouComponent, pathMatch : 'full', canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
