import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private addForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      sex: [false, Validators.required],
      authority: [1, Validators.required]
    });
  }

  submit() {
    console.log(this.addForm.value);
  }

}
