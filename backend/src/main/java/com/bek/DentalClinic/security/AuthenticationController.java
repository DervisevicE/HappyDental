package com.bek.DentalClinic.security;

import com.bek.DentalClinic.viewModels.PatientVM;
import com.bek.DentalClinic.viewModels.UserVM;
import jakarta.annotation.security.RolesAllowed;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {


    private final AuthenticationService authenticationService;

    @GetMapping(path = "/me")
    public String me(@AuthenticationPrincipal UserDetails userDetails)
    {
        System.out.println(
                userDetails.getAuthorities());
        return userDetails.getUsername();
    }

    @GetMapping(path = "/me-patient")
    public Integer mePatientId(@AuthenticationPrincipal UserDetails userDetails)
    {
        return authenticationService.findPatientId(userDetails);
    }
//    @GetMapping(path = "/me-doctor")
////    @RolesAllowed({"ROLE_DOCTOR"})
//    public String meDoctor(@AuthenticationPrincipal UserDetails userDetails)
//    {
//        System.out.println(
//                userDetails.getUsername()
//        );
//        return userDetails.getUsername();
//    }

    @PostMapping(path = "/register")
    public UserVM registerUser(@RequestBody UserVM user)
    {
        return authenticationService.register(user);
    }

    @PostMapping(path = "/login")
    public String authenticateUser(@RequestBody AuthenticationRequest request)
    {
        return authenticationService.authenticate(request);
    }
}
