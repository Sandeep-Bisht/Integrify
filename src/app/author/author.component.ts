import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  model: any = {};
  form: any;


  constructor() { }

  ngOnInit(): void {

  }


  // tslint:disable-next-line:typedef
  onSubmit(form: any) {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));

    setTimeout(() => { 
     form.reset();
    }, 3000);
  }


}
