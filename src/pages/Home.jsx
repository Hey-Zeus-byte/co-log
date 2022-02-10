import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../General.css";


const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1 className='Title'>GSCF Change Order Logs</h1>
            <h2 className='Title'>Please select a job:</h2>
                <ul>
                    <li className='List'><button onClick={() => {navigate("/template");}} className='button'>Template</button></li>
                    <li className='List'><button onClick={() => {navigate("/amazon-dublin");}} className='button'>Amazon - Dublin</button></li>
                    <li className='List'><button onClick={() => {navigate("/amador");}} className='button'>Amador</button></li>
                    <li className='List'><button onClick={() => {navigate("/burlingame");}} className='button'>Burlingame</button></li>
                    <li className='List'><button onClick={() => {navigate("/citysports-hayward");}} className='button'>City Sport's Hayward</button></li>
                    <li className='List'><button onClick={() => {navigate("/eastpodium");}} className='button'>East Podium</button></li>
                    <li className='List'><button onClick={() => {navigate("/foothill");}} className='button'>Foothill HS</button></li>
                </ul>
            </div>
    )
}

export default Home;