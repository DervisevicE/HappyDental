package com.bek.DentalClinic.viewModels;

import com.bek.DentalClinic.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserVM {
    private String firstName;
    private String lastName;
    private Role role;
    private String username;
    private String password;
}
