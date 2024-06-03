package com.bek.DentalClinic.security;

import com.bek.DentalClinic.enums.Role;
import com.bek.DentalClinic.models.User;
import com.bek.DentalClinic.repositories.UserRepository;
import com.bek.DentalClinic.viewModels.UserVM;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;
    public UserVM register(UserVM user)
    {
        User saveUser=new User(user.getFirstName(), user.getLastName(), Role.PATIENT, user.getEmail(), passwordEncoder.encode(user.getPassword()));
        saveUser=userRepository.save(saveUser);
        return new UserVM(saveUser.getFirstName(),saveUser.getLastName(),saveUser.getRole(),saveUser.getEmail(),saveUser.getPassword());
    }

    public String authenticate(AuthenticationRequest authenticationRequest)
    {
        Authentication authentication= authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()
                )
        );
        UserVM user= (UserVM) authentication.getPrincipal();
//        UserDetails user=; //userDetailsService.loadUserByUsername(authenticationRequest.getEmail());
        return jwtService.generateToken(user);
    }
}
