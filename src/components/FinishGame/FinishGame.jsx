import React from 'react'

const FinishGame = ({ handleShowAnswers, points, countQuestions }) => {
    return (
        <main className='d-flex justify-content-center align-items-center bg'>
            <div
                className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-center shadow-lg pt-3 pb-3'
            >
                <h3 className='mb-4'>Juego Terminado</h3>
                <p className='mt-4'>Respondiste {points} de {countQuestions} preguntas correctas!</p>
                <div className='bg-secondary align-self-center w-50 border-rounded mt-1 p-1 shadow-lg'>
                    <button
                        className='bg-dark fs-4 btn text-white w-100 h-100 border-rounded option'
                        onClick={handleShowAnswers}
                    >Ver Respuestas</button>
                </div>
            </div>
        </main>
    )
}

export default FinishGame