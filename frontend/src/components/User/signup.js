import { useState } from "react";
import { useNavigate } from "react-router";
import useUsersContext from "../../hooks/use-user-context";
import { StyledUserForm } from "./style.css";
import { StyledLabel } from "./style.css";
import { StyledButton } from "./style.css";

function UserSignup(){
    const navigate = useNavigate();

    const [userSignup, setUserSignup]= useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const {signup} = useUsersContext();

    const handleChange = (event) => {
        setUserSignup({
            ...userSignup,
            [event.target.name]: event.target.value,
        
        });
       
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        signup(userSignup);

    }
    console.log(userSignup.email);

    return(
    <StyledUserForm onSubmit={handleSignupSubmit}>
        <StyledLabel for= "firstName"><b>First Name</b></StyledLabel>
        <input type="text" placeholder="Enter Username" value={userSignup.firstName} name="firstName" onChange={handleChange} required></input>
        <StyledLabel for= "lastName"><b>Last Name</b></StyledLabel>
        <input type="text" placeholder="Enter Username" value={userSignup.lastName} name="lastName" onChange={handleChange} required></input>
        <StyledLabel for= "email"><b>Email</b></StyledLabel>
        <input type="text" placeholder="Enter Username" value={userSignup.email} name="email" onChange={handleChange} required></input>
        <StyledLabel for= "password"><b>Password</b></StyledLabel>
        <input type="password" placeholder="Enter Username" value={userSignup.password} name="password" onChange={handleChange} required></input>
        <StyledButton type="submit">Signup</StyledButton>
        <label onClick={()=> {navigate('/user')}}>You have Account? Login</label>
    </StyledUserForm>
    )
}

export default UserSignup;