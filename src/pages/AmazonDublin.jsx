import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../files/AmazonDublin.jpg";

const AmazonDublin = () => {
    const navigate = useNavigate();
    return(
        <div>
            <img src={img1} className="Amazon-Dublin" alt="" />
            <button onClick={() => {navigate("/");}} className="Home">Home</button>
        </div>
    )
}

export default AmazonDublin;