import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CateringService } from '../../../service/catering.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../../entity/room';
import { Catering } from '../../../entity/catering';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;

  private id: number;

  constructor(private builder: FormBuilder,
              private cateringService: CateringService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', Validators.required],
      price: [0, Validators.required]
    });
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.cateringService.getCateringById(this.id)
      .subscribe((catering: Catering) => {
        this.form.patchValue({
          name: catering.name,
          price: catering.price
        });
      });
  }

  submit() {
    this.cateringService.update(this.id, this.form.value)
      .subscribe(() => {
        alert('更新成功');
        this.router.navigateByUrl('catering');
      });
  }

}
