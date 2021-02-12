import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from '../services/content.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  authorForm: FormGroup;
  submitted = false;

  file;

  authorContent: any ;


  constructor(private readonly contentsService: ContentService, private formBuilder: FormBuilder){}


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
      subjectarea: ['', Validators.required],
      language: ['', Validators.required],
      qualification: ['', Validators.required],
      subject: ['', Validators.required]
   });


  }

    // convenience getter for easy access to form fields
    get f() { return this.authorForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.authorForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.authorForm.value, null, 4));
    }

  // tslint:disable-next-line:typedef
  // onSubmit(form: any) {

  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));

  //   setTimeout(() => {
  //    form.reset();
  //   }, 3000);
  // }


}
