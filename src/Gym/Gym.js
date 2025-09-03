import React from "react";
import "./Gym.css";

import gym1 from '../Images/highstreet1.png'
import gym2 from '../Images/highstreet2.png'
import gym3 from '../Images/highstreet3.png'
import gym4 from '../Images/highstreet4.jpg'
import gym5 from '../Images/highstreet5.jpg'


export default function Gym() {
    return (
    <main className="Gym">
        <p className="title">Highstreet Bodyshop</p>
        <hr />
        <br />
        <p className="gymBody">About highstreet</p>
        <br />
        <img src={gym1} alt="Gym Photo" className = "gym1"/>
        <br />
        <br />
        <img src={gym2} alt="Gym Photo" className = "gym2"/>
        <br />
        <br />
        <img src={gym3} alt="Gym Photo" className = "gym3"/>
        <br />
        <br />
        <img src={gym4} alt="Gym Photo" className = "gym4"/>
        <br />
        <br />
        <img src={gym5} alt="Gym Photo" className = "gym5"/>
        <br />
        <br />
    </main>
    );
}