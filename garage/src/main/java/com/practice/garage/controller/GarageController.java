package com.practice.garage.controller;

import com.practice.garage.model.Car;
import com.practice.garage.service.GarageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class GarageController {

    @Autowired
    private GarageService service;

    @GetMapping("cars")
    public List<Car> carList(){
        return service.carList();
    }

    @GetMapping("cars/{id}")
    public Optional<Car> getCar(@PathVariable("id") int id){
        return service.getCar(id);
    }

    @DeleteMapping("deletecar")
    public void deleteCar(@RequestBody Car car){
        service.deleteCar(car);
    }

    @PutMapping("udpatecar")
    public Car udpateCar(@RequestBody Car car){
        return service.editCarDetails(car);
    }

    @PostMapping("addcar")
    public Car addCar(@RequestBody Car car){
        return service.addCar(car);
    }
}
