import React from 'react'

function Query({ faq, index, toggleQuestion }) {
    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleQuestion(index)}
        >
            <div className="faq-question">
                {faq.question}
                <div className="faq-icon">
                </div>
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>

        </div>
    )
}

export default Query;