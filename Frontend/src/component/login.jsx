import React from 'react'
const Login = () =>{
    return(
        <form action="http://localhost:3000/login" method="post">
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="pasword" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Login;