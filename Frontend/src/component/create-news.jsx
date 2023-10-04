import axios from 'axios';
import React, { useState } from 'react';

function Create_news() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    axios.post('http://localhost:3000/create-news', { name })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Create_news;
