import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>GSCF Change Order Logs</h1>
                <ul>
                    <button onClick={() => {navigate("/amazon-dublin");}} className="AmazonDublin">Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amador");}} className="AmazonDublin">Amador</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className="AmazonDublin">Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className="AmazonDublin">Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className="AmazonDublin">Amazon - Dublin</button>
                    <button onClick={() => {navigate("/amazon-dublin");}} className="AmazonDublin">Amazon - Dublin</button>
                </ul>
            </div>
    )
}

export default Home;