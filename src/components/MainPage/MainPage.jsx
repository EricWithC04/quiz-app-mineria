import React from 'react'

const MainPage = ({ setInitialGame }) => {
    return (
        <main className='d-flex justify-content-center align-items-center bg'>
            <div className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-center shadow-lg pt-3 pb-3'>
                <h1 className='mb-3 fs-1'>Quiz Mineria</h1>
                <p className='mt-4'>Responde 5 preguntas aleatorias</p>
                <div className='bg-secondary align-self-center w-50 border-rounded mt-1 p-1 shadow-lg'>
                    <button 
                        className='bg-dark fs-4 btn text-white w-100 h-100 border-rounded option' 
                        onClick={() => setInitialGame(true)}
                    >Empezar</button>
                </div>
            </div>
        </main>
    )
}

export default MainPage