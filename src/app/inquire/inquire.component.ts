import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss']
})
export class InquireComponent implements OnInit {
  inquiryContent: any;
  inquireForm: FormGroup;
  submitted = false;
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';
  formSuccess = false;
  constructor(private fb: FormBuilder, private readonly contentsService: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    this.contentsService.getPage('inquire').subscribe(res => {
      console.log(res);
      this.inquiryContent = res.data;
    });
    this.createForm();
  }

  createForm(): void {
    this.inquireForm = this.fb.group({
      salutation: ['Mr.', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      typeOfService: ['', Validators.required],
      preferredLanguage: ['', Validators.required],
      deliveryDate: [new Date(), Validators.required],
      description: ['', Validators.required],
      empiricalElaboration: ['Yes', Validators.required],
      phone: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.inquireForm.invalid) {
      return;
    }
    const param = JSON.stringify(this.generateParam());
    this.contentsService.sendRequest('inquiryform', param).subscribe(item => {
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
        iv: this.inquireForm.controls.firstName.value
      },
      lastName: {
        iv: this.inquireForm.controls.lastName.value
      },
      typeOfService: {
        iv: this.inquireForm.controls.typeOfService.value
      },
      preferredLanguage: {
        iv: this.inquireForm.controls.preferredLanguage.value
      },
      phone: {
        iv: Number(this.inquireForm.controls.phone.value)
      },
      empiricalElaboration: {
        iv: this.inquireForm.controls.empiricalElaboration.value
      },
      email: {
        iv: this.inquireForm.controls.email.value
      },
      salutation: {
        iv: this.inquireForm.controls.salutation.value
      },
      description: {
        iv: this.inquireForm.controls.description.value
      },
      deliveryDate: {
        iv: `${moment(this.inquireForm.controls.deliveryDate.value).format('YYYY-MM-DD')}T00:00:00Z`
      },
    };
  }
  // tslint:disable-next-line:typedef
  get f() { return this.inquireForm.controls; }

}
