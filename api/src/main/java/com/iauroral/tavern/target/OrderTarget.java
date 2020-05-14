package com.iauroral.tavern.target;

import java.util.List;

public class OrderTarget {

    public static class CateringTarget {
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

    public static class ServiceTarget {
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

    private Long roomId;

    private List<CateringTarget> caterings;

    private List<ServiceTarget> services;

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public List<CateringTarget> getCaterings() {
        return caterings;
    }

    public void setCaterings(List<CateringTarget> caterings) {
        this.caterings = caterings;
    }

    public List<ServiceTarget> getServices() {
        return services;
    }

    public void setServices(List<ServiceTarget> services) {
        this.services = services;
    }
}
