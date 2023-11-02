import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Category = () => {
    const id = useParams;
    const [data, setData] = useState('');

    async function getData(id){
        const res = await axios.get('http://localhost:3000/category/${id}')
        console.log(res);
        setData(res)
    }

    useEffect(){
        getData(id);
    }

    return (
        <div>

        </div>
    )
}

export default Category