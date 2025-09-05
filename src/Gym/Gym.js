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
        <p className="gymTitle">High Street Body shop</p>
        <hr />
        <br />
        <p className="gymBody">Most physical therapy facilities are limited in their capabilities because they don’t have the space or the proper equipment to take your recovery and performance to the next level. At High Street Body Shop, that’s not the case. Our 18,000-square-foot facility is equipped with the best machines in the industry, including Prime Fitness, Hammer Strength, and Life Fitness, giving you access to professional tools for strength training, functional movement, and conditioning.</p>
        <p className="gymBody">This state-of-the-art environment allows us to bridge the gap between rehabilitation and high-performance training. Whether you’re recovering from an injury, building strength, or striving for peak athletic performance, our space and equipment ensure you have everything you need to succeed.</p>
        <br />
        <img src={gym1} alt="Gym Photo" className = "gym1"/>
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