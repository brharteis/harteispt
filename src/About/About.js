import React from "react";
import "./About.css";

import graduation from '../Images/blaineGraduation.jpg'

export default function About() {
    return (
    <main className="About">
        <div className = "aboutInfo">
        <h1 className = "aboutTitle">Dr. Blaine Harteis PT, DPT</h1>
        <hr />
        <br />
        <p className = "aboutText">Earning his Doctorate in Physical Therapy from Seton Hill University in 2024 and obtaining his license shortly after, Blaine began his career at an outpatient clinic in Indiana, Pennsylvania. There, he worked with a wide range of patients—from pediatrics to Division I athletes—helping each achieve their unique goals. Blaine is passionate about improving strength, mobility, and quality of life within the community. He has a special interest in orthopedic physical therapy, with a focus on personalized, evidence-based care.</p>
        </div>
        <img src={graduation} alt="graduation" className = "graduation"/>
        <br />
        <br />
        
    </main>
    );
}