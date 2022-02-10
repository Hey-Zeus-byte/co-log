import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../files/Amador.jpg";

const Amador = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={() => {navigate("/");}} className="Home">Home</button>
            <img src={img1} height="1050px" alt="" />
        </div>
    )
}

export default Amador;