import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

    contactForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        qualification: ['', Validators.required],
        language: ['', Validators.required],
        subject: ['', Validators.required],
        information: ['', Validators.required],
    });

  }


  get f() { return this.contactForm.controls; }

    // tslint:disable-next-line:typedef
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        // display form values on success
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    }

    // tslint:disable-next-line:typedef
    onReset() {
        this.submitted = false;
        this.contactForm.reset();
    }

}
