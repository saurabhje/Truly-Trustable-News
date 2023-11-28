import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPage from "./CRUD/AdminPage";
import axios from "axios";
import { Helmet } from "react-helmet";
const baseurl = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [formData, setFormData] = useState({ password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseurl}/login`,
        formData,
      );
      document.getElementById("password").value = "";
      if (response.status === 200) {
        sessionStorage.setItem("password", `${formData.password}`);
        setLoggedin(true);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("password")) {
      authorise();
    }
  }, []);

  const authorise = async () => {
    axios
      .post(
        `${baseurl}/login`,
        {
          password: sessionStorage.getItem("password"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          setLoggedin(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login to perform admin operations" />
      </Helmet>
      {!loggedin ? (
        <form
          onSubmit={handleSubmit}
          className="text-center flex items-center justify-center h-screen"
        > <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            className="mx-5 py-2 rounded-none"
          />
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mx-5 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Login
          </button>
          <button className='py-2 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 border-none rounded focus:shadow-outline hover:bg-indigo-800'
           onClick={() => navigate('/')}>Head Home</button>
        </form>
      ) : (
        <>
          <AdminPage />
        </>
      )}
    </>
  );
};

export default Login;
