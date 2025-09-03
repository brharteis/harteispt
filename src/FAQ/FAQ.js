import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react"; // nice arrow icons
import './FAQ.css'


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Question row */}
      <div className='questionandarrow' onClick={() => setIsOpen(!isOpen)}>
        <span className="faq-question">{question}</span>
        <span className="arrow">
        {isOpen ? <ChevronDown size={40}/> : <ChevronRight size={40}/>}
        </span>
      </div>

      {/* Answer (conditionally shown) */}
      {isOpen && (
        <div className="faq-answer">
          {Array.isArray(answer) ? (
            <ul>
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{answer}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "Why choose cash based physical therapy?",
      answer: ["Personalized treatment plans – No “cookie cutter” programs driven by insurance checkboxes — everything is tailored to your needs and goals.",
        "No insurance restrictions – Get the treatment techniques that will help you most (like dry needling, cupping, or advanced strength training), not just what insurance decides to cover.",
        "Transparent, upfront pricing – No surprise bills months later; you’ll know exactly what you’re paying for.",
        "Access to performance + wellness care – Insurance typically only covers “medically necessary” rehab. Cash-based care lets you also work on injury prevention, athletic performance, mobility, and long-term health."
      ]
    },
    {
      question: "Do you accept insurance?",
      answer: "I currently accepting Blue Cross Blue Shield Insurance."
    },
    {
      question: "Do you provide at home services?",
      answer: "Yes, by appointment only."
    },
    {
       question: "Do you require a script?",
       answer: "Until Blaine becomes eligible to obtain his Direct Access License in August 2026, a referral is required for physical therapy services. However, no referral is needed for general wellness or sports-specific training."
    }
  ];

  return (
    <main className="body">
      <h1 className="title">Frequently Asked Questions</h1>
      <hr />
      <br />
      <br />
      <div className="questionBody">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      </div>
    </main>
  );
}
