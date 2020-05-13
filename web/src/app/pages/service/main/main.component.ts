import { Component, OnInit } from '@angular/core';
import { Service } from '../../../entity/service';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  services: Array<Service> = new Array<Service>();

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.serviceService.getAll()
      .subscribe((data: any) => {
        this.services = data._embedded.services;
      });
  }

  delete(service: Service) {
    this.serviceService.delete(service.id)
      .subscribe(() => {
        alert('删除成功');
        this.load();
      });
  }

}
