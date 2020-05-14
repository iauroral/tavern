package com.iauroral.tavern.target;

import java.util.List;

public class OrderTarget {

    private Long roomId;

    private List<CateringTarget> caterings;

    private List<ServiceTarget> services;
}

class CateringTarget {
    private Long cateringId;
    private Integer number;

    public Long getCateringId() {
        return cateringId;
    }

    public void setCateringId(Long cateringId) {
        this.cateringId = cateringId;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}

class ServiceTarget {
    private Long serviceId;
    private Integer number;

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
