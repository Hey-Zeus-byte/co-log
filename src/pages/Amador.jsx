import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../files/Amador.jpg";

const Amador = () => {
    const navigate = useNavigate();
    return(
        <div>
            <img src={img1} className="Amador" alt="" />
            <button onClick={() => {navigate("/");}} className="Home">Home</button>
        </div>
    )
}

export default Amador;