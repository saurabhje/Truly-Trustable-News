import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPage from "./CRUD/AdminPage";
import axios from "axios";
const Login = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [formData, setFormData] = useState({ password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
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
        "http://localhost:3000/login",
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
      {!loggedin ? (
        <form
          onSubmit={handleSubmit}
          className="text-center flex items-center justify-center h-screen"
        >
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            className="mx-5 py-2 px-4 border rounded-none"
          />
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mx-5 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Login
          </button>
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
