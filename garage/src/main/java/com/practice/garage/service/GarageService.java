package com.practice.garage.service;

import com.practice.garage.model.Car;
import com.practice.garage.repo.GarageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GarageService {

    @Autowired
    private GarageRepo repo;

    public Car addCar(Car car){
        return repo.save(car);
    }

    public List<Car> carList(){
        return repo.findAll();
    }

    public void deleteCar(Car car){
        repo.delete(car);
    }

    public Car editCarDetails(Car car){
        return repo.save(car);
    }

    public Optional<Car> getCar(int id) {
        return repo.findById(id);
    }

    public List<Car> getCarListByName(String name) {
        return repo.findByCarNameContainingIgnoreCase(name);
    }
}
