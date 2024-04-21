import React from 'react'

const ShowAnswers = ({ questions, currentQuestion, handleNextAnswer }) => {
    return (
        <main className='d-flex justify-content-center align-items-center bg'>
            <div
                className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-between shadow-lg pt-3 pb-3'
            >
                <div className='d-flex flex-column'>
                    <h4 className='align-self-start ms-4'>Pregunta {currentQuestion + 1}</h4>
                    <hr className='m-2' />
                    <p className='align-self-start ms-4 fs-5'>{questions[currentQuestion].question}</p>
                    {
                        (currentQuestion + 1) < questions.length ?
                            <button className='btn btn-secondary align-self-start ms-4' onClick={handleNextAnswer}>Continuar</button> :
                            <button className='btn btn-secondary align-self-start ms-4' onClick={() => location.reload()}>Volver a Jugar</button>
                    }
                </div>
                <div className='container'>
                    {[0, 2].map((startIndex, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            {[0, 1].map((colIndex) => (
                                <div className="col bg-secondary border-rounded m-1 p-1 shadow-lg" key={startIndex + colIndex}>
                                    <button className={`${questions[currentQuestion].answers[startIndex + colIndex].correct ? "bg-success" : "bg-danger"} fs-5 btn text-white w-100 h-100 border-rounded option`}>
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

export default ShowAnswers