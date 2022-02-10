import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../files/AmazonDublin.jpg";
import "../General.css";
const AmazonDublin = () => {
    const navigate = useNavigate();
    return(
        <div>            
            <button onClick={() => {navigate("/");}} className="Home">Home</button>
            <img src={img1} height="1650px" alt="" />
        </div>
    )
}

export default AmazonDublin;