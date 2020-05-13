import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder,
              private serviceService: ServiceService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      price: [0, Validators.required]
    });
  }

  submit() {
    this.serviceService.save(this.form.value)
      .subscribe(() => {
        alert('添加成功');
        this.router.navigateByUrl('service');
      });
  }

}
