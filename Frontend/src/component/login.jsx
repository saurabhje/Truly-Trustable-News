import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import AdminPage from './CRUD/AdminPage';

const Login = () =>{
    const [loggedin, setLoggedin] = useState(true);
    const [formData, setFormData] = useState({ password: '' });
    const navigate = useNavigate();    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            });
            document.getElementById("password").value = "";
            if(response.ok){
                setLoggedin(false)
            }
            else{
                navigate('/')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return(
        <>
            {loggedin?
            <form onSubmit={handleSubmit}>
                <label>
                    Password:
                    <input id="password" type="pasword" name="password" value={formData.password}
            onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>:
            <AdminPage/>
            }       
        </>
        
    )
}

export default Login;
