import { Component, OnInit } from '@angular/core';
import { CateringService } from '../../../service/catering.service';
import { Catering } from '../../../entity/catering';
import { User } from '../../../entity/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private caterings: Array<Catering>;

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

  delete(catering: Catering) {
    this.cateringService.delete(catering.id)
      .subscribe(() => {
        alert('删除成功');
        this.load();
      });
  }

}
