import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../General.css";


const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1 className='Title'>GSCF Change Order Logs</h1>
                <ul>
                    <button onClick={() => {navigate("/amazon-dublin");}} className='List'>Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amador");}} className='List'>Amador</button>
                    <button onClick={() => {navigate("/burlingame");}} className='List'>Burlingame</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className='List'>Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className='List'>Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className='List'>Amazon - Dublin</button>
                </ul>
            </div>
    )
}

export default Home;