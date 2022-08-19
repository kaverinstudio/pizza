// @ts-ignore
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
    const params = useParams()
    const [pizza, setPizza] = useState<{
        imageUrl: string;
        title: string;
        price: string;
    }>()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchPizza(){
            try {
                const {data} = await axios.get("https://62b1f42520cad3685c86bd7d.mockapi.io/items/" + params.id)
                setPizza(data)
            }catch (e) {
                alert("Пицца не найдена")
                navigate('/')
            }
        }
        fetchPizza();
    },[])

    if (!pizza){
        return <>"Загрузка"</>
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl} alt=""/>
            <h2>{pizza.title}</h2>
            <p>{pizza.price} ₽</p>
        </div>
    );
};

export default FullPizza;