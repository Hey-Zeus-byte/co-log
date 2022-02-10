import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../files/Burlingame.jpg";

const Burlingame = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={() => {navigate("/");}} className="Home">Home</button>
            <img src={img1} alt="" height="530px" width="1650px" />
        </div>
    )
}

export default Burlingame;