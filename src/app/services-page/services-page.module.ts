import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-router.module';
import { ServicesPageComponent } from './services-page.component';
import { PlagiarismComponent } from './plagiarism/plagiarism.component';
import { ProofreadingComponent } from './proofreading/proofreading.component';
import { EditingComponent } from './editing/editing.component';
import { TranslationComponent } from './translation/tranlation.component';




@NgModule({
  declarations: [
    ServicesPageComponent,
    PlagiarismComponent,
    ProofreadingComponent,
    EditingComponent,
    TranslationComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesPageModule { }
