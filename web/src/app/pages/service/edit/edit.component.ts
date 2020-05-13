import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../../service/service.service';
import { Service } from '../../../entity/service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  private id: number;

  constructor(private builder: FormBuilder,
              private serviceService: ServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      price: [0, Validators.required]
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.serviceService.getServiceById(this.id)
      .subscribe((service: Service) => {
        this.form.patchValue({
          name: service.name,
          price: service.price
        });
      });
  }

  submit() {
    this.serviceService.update(this.id, this.form.value)
      .subscribe(() => {
        alert('更新成功');
        this.router.navigateByUrl('service');
      });
  }

}
