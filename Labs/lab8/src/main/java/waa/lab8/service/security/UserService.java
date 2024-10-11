package waa.lab8.service.security;


import waa.lab8.dto.RegistrationDTO;
import waa.lab8.dto.UserDTO;

public interface UserService {

    //public User save(User u);
    public RegistrationDTO save(UserDTO u);

}
