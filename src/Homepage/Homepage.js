import React from "react";
import "./Homepage.css";

import baseball from '../Images/blaineBaseball.JPG'

export default function Homepage() {
    return (
    <main className="main">
        <div className="info1">
        <h1 style={{ marginBottom: 0 }} className = "title">1-on-1 In-Person Physical Therapy</h1>
        <p style={{ marginTop: 0 }}>At Harteis Physical Therapy & Sports Performance, you’ll always work directly 1-on-1 your physical therapist — no being passed off to aides or techs. Our clinic is modern, fully equipped with high-quality training equipment and designed to give you the focused care you deserve. <br /> <br />
Your first session includes a comprehensive evaluation where we take the time to understand your pain levels, medical history, past injuries or surgeries, and the sports and activities that matter most to you. We’ll also look at your movement patterns and discuss what treatments you’ve already tried. From there, we’ll create a personalized recovery plan that gets you back to moving confidently and doing what you love. <br /> <br />
Follow-up visits are centered around targeted rehab exercises, mobility training, and strength work to support your overall health and performance. Depending on your needs, sessions may also include hands-on treatments such as soft tissue work, dry needling, cupping, taping, or massage. These techniques can help relieve tension, improve blood flow, and accelerate recovery from a wide range of musculoskeletal conditions.
</p>
        </div>
        <br />
        <hr />
        <div className="info2">
        <h1 style={{ marginBottom: 0 }} className = "title">General Wellness Training</h1>
        <p style={{ marginTop: 0 }}>At Harteis Physical Therapy and Sports Performance, every session is designed to help you feel better, move better, and live better. If your goals include weight loss, improving heart health, boosting mobility, or simply having more energy for daily life, we’ll create a plan that’s right for you. Our mission is to help you stay strong, healthy, and ready for any activity you love—so you can enjoy life at your best.</p>
        </div>
        <br />
        <hr />
        <div className = "info3">
        <h1 style={{ marginBottom: 0 }} className = "title">Sports Preformance Training</h1>
        <p style={{ marginTop: 0 }}>At Harteis Physical Therapy & Sports Performance, we help athletes of all levels — from competitive players to weekend warriors — unlock their full potential. Whether you want to increase speed, build strength, improve explosiveness, enhance mobility, or gain that extra edge in competition, we’ll create a plan to get you there. We offer personalized 1-on-1 sessions, small group training, and even full team programs. Ready to elevate your game? Let’s get started.</p>
        </div>
        <br />
    </main>
    );
}