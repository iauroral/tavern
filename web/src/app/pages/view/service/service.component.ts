import { Component, OnInit } from '@angular/core';
import { Service } from '../../../entity/service';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

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

}
