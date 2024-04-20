import React from 'react'

const CardQuestions = ({ questions, currentQuestion, time, handleClick }) => {
    return (
        <main className='d-flex justify-content-center align-items-center bg'>
            <div
                className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-between shadow-lg pt-3 pb-3'
            >
                <div className='d-flex flex-column'>
                    <h4 className='align-self-start ms-4'>Pregunta {currentQuestion + 1}</h4>
                    <hr className='m-2' />
                    <p className='align-self-start ms-4'>{questions[currentQuestion].question}</p>
                    <p className='align-self-start ms-4 text-warning'>Tiempo Restante: {time}</p>
                </div>
                <div className='container'>
                    {[0, 2].map((startIndex, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {[0, 1].map((colIndex) => (
                                <div className="col bg-secondary border-rounded m-1 p-1 shadow-lg" key={startIndex + colIndex}>
                                    <button className='bg-dark fs-4 btn text-white w-100 h-100 border-rounded option' onClick={(e) => handleClick(questions[currentQuestion].answers[startIndex + colIndex].correct, e)}>
                                        {questions[currentQuestion].answers[startIndex + colIndex].text}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default CardQuestions