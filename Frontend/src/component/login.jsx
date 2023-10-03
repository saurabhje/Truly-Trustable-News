import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Login = () =>{
    const [formData, setFormData] = useState({ password: '' });
    const navigate = useNavigate();    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            });
            console.log(response);
            if(response.ok){
                navigate('/')
            }
            else{
                navigate('/login')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Password:
                <input type="pasword" name="password" value={formData.password}
          onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Login;