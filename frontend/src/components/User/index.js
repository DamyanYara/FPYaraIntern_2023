import { useState } from "react";
import useUsersContext from "../../hooks/use-user-context";
import { StyledUserForm } from "./style.css";
import { StyledLabel } from "./style.css";


function User(){
    // eslint-disable-next-line no-unused-vars
    const [userInput, setUserInput] = useState({
        username: '',
        password: '',
    });
    const [userSignup, setUserSignup]= useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // eslint-disable-next-line no-unused-vars
    const {login} = useUsersContext();
    const {signup} = useUsersContext();

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
    }

    return (
    //<div className="container">
        <StyledUserForm onSubmit={handleSubmit}>
            <StyledLabel for= "username"><b>Username</b></StyledLabel>
            <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} required></input>

            <StyledLabel for= "password"><b>Password</b></StyledLabel>
            <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} required></input>

            <button type="submit">Login</button>
        </StyledUserForm>
   // </div>
    )
    //TODO create signup Form & Logout, add to the frontpage
}

export default User