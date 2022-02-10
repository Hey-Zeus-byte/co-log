import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../files/CitySports-Hayward.jpg";

const CSportsHay = () => {
    const navigate = useNavigate();
    return(
        <div>
            <img src={img1} className="CSportsHay" alt="" height="450px" width="1650px" />
            <button onClick={() => {navigate("/");}} className="Home">Home</button>
        </div>
    )
}

export default CSportsHay;