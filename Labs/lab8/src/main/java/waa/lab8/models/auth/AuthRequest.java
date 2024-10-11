package waa.lab8.models.auth;

import lombok.Data;

@Data
public class AuthRequest {

    private String email;
    private String password;

}
