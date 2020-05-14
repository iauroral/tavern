export class OrderTarget {
  roomId: number;
  caterings: Array<CateringTarget>;
  services: Array<ServiceTarget>;

  constructor() {
    this.caterings = new Array<CateringTarget>();
    this.services = new Array<ServiceTarget>();
  }
}

export class CateringTarget {
  cateringId: number;
  number: number;

  constructor(cateringId: number, number: number) {
    this.cateringId = cateringId;
    this.number = number;
  }
}

export class ServiceTarget {
  serviceId: number;
  number: number;

  constructor(serviceId: number, number: number) {
    this.serviceId = serviceId;
    this.number = number;
  }
}
