package com.practice.garage.repo;

import com.practice.garage.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GarageRepo extends JpaRepository<Car,Integer> {


    List<Car> findByCarNameContainingIgnoreCase(String name);
}
