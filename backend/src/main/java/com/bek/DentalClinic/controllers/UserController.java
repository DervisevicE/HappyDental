package com.bek.DentalClinic.controllers;

import com.bek.DentalClinic.models.User;
import com.bek.DentalClinic.services.UserService;
import com.bek.DentalClinic.viewModels.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User addUser(@RequestBody UserVM user)
    {
        return userService.addUser(user);
    }

    @GetMapping
    public ResponseEntity<Page<User>> getAllUsers(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "1") Integer size,
            @RequestParam(defaultValue = "id") String sortBy
    )
    {
        Page<User> users=userService.getAllUsers(page,size,sortBy);
        return (users!=null) ? ResponseEntity.ok(users):ResponseEntity.notFound().build();

    }

    @GetMapping(path = "{id}")
    public ResponseEntity<User> getUser(@PathVariable Integer id)
    {
        User user=userService.getUser(id);
        return (user!=null) ? ResponseEntity.ok(user):ResponseEntity.notFound().build();
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable Integer id)
    {
        userService.deleteUser(id);
    }
}
