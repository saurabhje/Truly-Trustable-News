import React, { useEffect } from 'react'
import axios from 'axios';

const Test = () =>{
    const fetchInfo = () =>{
        axios
        .get('http://localhost:3000/test')
        .then((response) => console.log((response.data)))
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
    useEffect(() =>{ fetchInfo() }, [])
    return(
        <div>

        </div>
    )
}

export default Test;