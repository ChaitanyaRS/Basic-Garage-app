package com.practice.garage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Garage")
public class Car {
    @Id
    private int id;
    private String carName;
    private String brandName;
    private String carColor;
    private float carPrice;

}
