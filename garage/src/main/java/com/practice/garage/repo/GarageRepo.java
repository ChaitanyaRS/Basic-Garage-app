package com.practice.garage.repo;

import com.practice.garage.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GarageRepo extends JpaRepository<Car,Integer> {

}
