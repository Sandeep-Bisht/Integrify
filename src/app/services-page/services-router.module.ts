import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesPageComponent } from './services-page.component';
import { PlagiarismComponent } from './plagiarism/plagiarism.component';
import { ProofreadingComponent } from './proofreading/proofreading.component';
import { EditingComponent } from './editing/editing.component';
import { TranslationComponent } from './translation/tranlation.component';

const routes: Routes = [
  { path: '', component: ServicesPageComponent,
    children : [
        { path: '',   redirectTo: 'plagiarism', pathMatch: 'full' },
        { path: 'plagiarism', component: PlagiarismComponent, pathMatch : 'full'},
        { path: 'proofreading', component: ProofreadingComponent, pathMatch : 'full'},
        { path: 'editing', component: EditingComponent, pathMatch : 'full'},
        { path: 'translation', component: TranslationComponent, pathMatch : 'full'}
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
