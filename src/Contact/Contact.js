import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
    <main className="Contact">
        <div className="text">
        <p>Contact Dr. Harteis to schedule your next visit.</p>
        <a className="email" href="mailto:harteispt@gmail.com">Email: harteispt@gmail.com</a>
         <br />
        <p className="number">Phone Number: (814) 525-9768</p>
        </div>
    </main>
    );
}