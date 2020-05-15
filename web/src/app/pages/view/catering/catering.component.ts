import { Component, OnInit } from '@angular/core';
import { Catering } from '../../../entity/catering';
import { CateringService } from '../../../service/catering.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {

  caterings: Array<Catering> = new Array<Catering>();

  constructor(private cateringService: CateringService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.cateringService.getAll()
      .subscribe((data: any) => {
        this.caterings = data._embedded.caterings;
      });
  }

}
