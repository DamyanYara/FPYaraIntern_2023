import {createContext, useState} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const UsersContext = createContext();

function decodeToken() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(!token){
        return null;
    }

    const tokenValue = jwt_decode(token);

    const {id, firstName, lastName, email} = tokenValue
    return {id, firstName, lastName,email};

}

const  Provider = ({children}) => {
    const [user, setUser] = useState(decodeToken());


    const login = async ({username, password}) =>{
        try{
            console.log(username, password);
            const response = await axios.post('http://localhost:8080/auth/login', {username, password});
            const {data} = response;

            localStorage.setItem('token', data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            setUser(data.user);
        }catch (error){
            console.log(error);
        }
        
    };

    const signup = async({firstName, lastName, email, password}) => {
        try{
            const response = await axios.post('http://localhost:8080/auth/signup', {firstName,lastName,email,password});
            const {data} =response;

            localStorage.setItem('token', data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            setUser(data.user);
        }catch (error) {
            console.error(error)
        }
    };

    const valueToShare = {
        user,
        login,
        signup
    }

   return (
    <UsersContext.Provider value = {valueToShare}>
        {children}
    </UsersContext.Provider>
   );
}

export default UsersContext;
export {Provider};
