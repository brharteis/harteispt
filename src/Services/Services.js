import React from "react";
import "./Services.css";

export default function Services() {
    return (
   <main className="Services">
        <h1 className = "servicesTitle">Physical Therapy Services</h1>
        <hr />
        <br />
        <div className = "list">
        <div className="s1">
        <h2 className = "subtitle">Injury Rehabilitation</h2>
        <li>Post-surgical rehab (knee, shoulder, hip, spine, etc.)</li>
        <li>Sports injury recovery (sprains, strains, tendonitis, fractures)</li>
        <li>Return-to-sport programs</li>
        <li>Chronic pain management</li>
        </div>
        <br />
        <hr />
        <div className="s2">
        <h2 className = "subtitle">Orthopedic Care</h2>
        <li>Joint pain treatment (shoulder, knee, hip, ankle, wrist)</li>
        <li>Arthritis management</li>
        <li>Back and neck pain relief</li>
        <li>Pre- and post-operative therapy</li>
        </div>
        <br />
        <hr />
        <div className="s3">
        <h2 className = "subtitle">Sports-Specific Rehabilitation</h2>
        <li>ACL reconstruction rehab</li>
        <li>Rotator cuff repair rehab</li>
        <li>Concussion management & return-to-play</li>
        <li>Throwing & overhead athlete rehab</li>
        </div>
        <br />
        <hr />
        <div className="s4">
        <h2 className = "subtitle">Specialized Treatments</h2>
        <li>Dry needling</li>
        <li>Cupping</li>
        <li>Manual therapy & joint mobilization</li>
        <li>Soft tissue mobilization & myofascial release</li>
        <li>Bloodflow restriction training</li>
        <li>Balance & proprioception training</li>
        <li>Vertigo and vestibular rehab</li>
        <li>Temporomandibular Joint Dysfunction</li>
        </div>
        <br />
        <hr />
        <div className="s5">
        <h2 className = "subtitle">Performance & Movement Restoration</h2>
        <li>Strength & conditioning integration into rehab</li>
        <li>Speed, agility, and power restoration post-injury</li>
        <li>Sport-specific movement retraining</li>
        <li>Functional mobility programs</li>
        </div>
        <br />
        <hr />
        <div className="s6">
        <h2 className = "subtitle">Preventative & Maintenance Care</h2>
        <li>Injury prevention screenings</li>
        <li>Biomechanical and movement assessments</li>
        <li>Pre-season athletic readiness programs</li>
        <li>Workplace injury prevention</li>
        </div>
        <br />
        <hr />
        <br />
        </div>
    </main>
    );
}