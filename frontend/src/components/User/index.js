import { useState } from "react";
import { useNavigate } from "react-router";
import useUsersContext from "../../hooks/use-user-context";
import { StyledUserForm } from "./style.css";
import { StyledLabel } from "./style.css";
import { StyledButton } from "./style.css";



function User(){
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });
    

    // eslint-disable-next-line no-unused-vars
    const {login} = useUsersContext();
    

    const handleChange = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]:  event.target.value
        });
           
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userInput);
        console.log(userInput);
    };

    return (
    //<div className="container">
        <StyledUserForm onSubmit={handleSubmit}>
            <StyledLabel for= "username"><b>Username</b></StyledLabel>
            <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} required></input>

            <StyledLabel for= "password"><b>Password</b></StyledLabel>
            <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required></input>

            <StyledButton type="submit">Login</StyledButton>
            <label onClick={()=> {navigate('/userSingup')}}>You havent sign up yet? Sign Up</label>
        </StyledUserForm>
        // label You dent have account  onclick => navigate(path Page/Component)
   // </div>
    )
    //TODO create signup Form & Logout, add to the frontpage
}

export default User