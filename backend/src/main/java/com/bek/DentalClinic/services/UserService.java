package com.bek.DentalClinic.services;

import com.bek.DentalClinic.models.User;
import com.bek.DentalClinic.repositories.UserRepository;
import com.bek.DentalClinic.viewModels.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User addUser(UserVM user)
    {
        return userRepository.save(
                new User(user.getFirstName(),
                        user.getLastName(),
                        user.getRole(),
                        user.getUsername(),
                        user.getPassword()
                )
        );
    }
    public Page<User> getAllUsers(Integer page,Integer size,String sortBy)
    {
        Pageable pageable= PageRequest.of(page,size, Sort.by(sortBy));
        Page<User> users=userRepository.findAll(pageable);
        return users;
    }
    public User getUser(Integer id)
    {
        return userRepository.findById(id).orElse(null);
    }
    public void deleteUser(Integer id)
    {
        userRepository.deleteById(id);
    }
}
