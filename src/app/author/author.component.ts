import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from '../services/content.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  authorForm: FormGroup;
  submitted = false;
  file;
  authorContent: any;
  formSuccess = false;
  lang = 'en';
  constructor(private readonly contentsService: ContentService,
              private formBuilder: FormBuilder, public translation: TranslationService) { }


  ngOnInit(): void {
    this.contentsService.getPage('author').subscribe(res => {
      console.log(res);
      this.authorContent = res.data;
    });


    this.authorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      title: ['', Validators.required],
      language: ['', Validators.required],
      qualification: ['', Validators.required],
      message: ['', Validators.required],
      document: ['', Validators.required],
      documentName: ['']
    });
    this.translation.getLangValue().subscribe(item => {
      this.lang = item;
    });

  }

  deleteFile(): void {
    this.contentsService.deleteDocument(`assets/${this.authorForm.controls.document.value}`).subscribe();
    this.authorForm.controls.document.setValue('');
    this.authorForm.controls.documentName.setValue('');
  }

  onImageUpload(event): void {
    if (event && event.target.files[0]) {
      const formdata = new FormData();
      formdata.append('file', event.target.files[0], event.target.files[0].name);
      this.contentsService.uploadDocument('assets', formdata).subscribe(item => {
        this.authorForm.controls.document.setValue(item.id);
        this.authorForm.controls.documentName.setValue(item.fileName);
      }, error => {
        console.log(error);
      });
    }
  }

  // tslint:disable-next-line:typedef
  get f() { return this.authorForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authorForm.invalid) {
      return;
    }
    const param = JSON.stringify(this.generateParam());
    this.contentsService.sendRequest('authorform', param).subscribe(item => {
      console.log(item);
      this.formSuccess = true;
    }, error => {
      console.log(error);
      this.formSuccess = false;
    });
  }

  generateParam = () => {
    return {
      firstName: {
        iv: this.authorForm.controls.firstName.value
      },
      lastName: {
        iv: this.authorForm.controls.lastName.value
      },
      language: {
        iv: this.authorForm.controls.language.value
      },
      phone: {
        iv: this.authorForm.controls.phone.value
      },
      email: {
        iv: this.authorForm.controls.email.value
      },
      title: {
        iv: this.authorForm.controls.title.value
      },
      document: {
        iv: this.authorForm.controls.document.value
      },
      message: {
        iv: this.authorForm.controls.message.value
      },
      qualification: {
        iv: this.authorForm.controls.qualification.value
      }
    };
  }

}
