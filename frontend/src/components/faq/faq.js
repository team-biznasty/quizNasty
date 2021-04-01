import React, {useState} from 'react';

import Query from './query'

function Faq() {

    const [faqs, setfaqs] = useState([
        {
            question: 'What is a nasty quiz?',
            answer: `a nasty test of knowledge!`,
            open: false
        },
        {
            question: 'Can i see my previous scores?',
            answer: `You can check your profile page to see previous nasty quizzes.`,
            open: false
        },
        {
            question: 'How do i get on the leaderboard?',
            answer: 'Keep playing!',
            open: false
        }
    ]);

    const toggleQuestion = (index) => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div className="faq-wrapper">
            <h1 className="faq-header">Frequently Asked Questions</h1>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <Query faq={faq} index={index} toggleQuestion={toggleQuestion} />
                ))}
            </div>
        </div>
    )
}

export default Faq;