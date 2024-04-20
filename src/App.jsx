import questions from './utils/questions'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0) 
  const [points, setPoints] = useState(0) 
  const [isFinished, setIsFinished] = useState(false)
  const [time, setTime] = useState(10)
  const [timeFinished, setTimeFinished] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (!isFinished) {
      const timeInterval = setInterval(() => {
        if (time > 0) setTime((prevTime) => prevTime - 1);
        if (time === 0) setTimeFinished(true)
      }, 1000)
  
      return () => clearInterval(timeInterval)

    }
  }, [time])

  useEffect(() => {
    if (timeFinished) {
      setTimeout(() => {
        setTime(10)
        setTimeFinished(false)
        if (currentQuestion === questions.length - 1) {
          setIsFinished(true)
        } else {
          setCurrentQuestion(currentQuestion + 1)
        }
      }, 800)
    }
  }, [timeFinished])

  const handleClick = (correct, e) => {
    e.target.classList.remove("bg-dark")
    e.target.classList.add(correct ? "bg-success" : "bg-danger")
    
    if (correct) {
      setPoints(points + 1)
    }
    
    setTimeout(() => {
      e.target.classList.remove("bg-success", "bg-danger")
      e.target.classList.add("bg-dark")
      
      if (currentQuestion === questions.length - 1) {
        setIsFinished(true)
      } else {
        setCurrentQuestion(currentQuestion + 1)
      }
      setTime(10)
    }, 1000)
  }

  const handleNextAnswer = (e) => {
    setCurrentQuestion(prev => prev + 1)
  }

  if (showAnswer) {
    return (
      <main className='d-flex justify-content-center align-items-center bg'>
        <div 
          className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-between shadow-lg pt-3 pb-3'
        >
          <div className='d-flex flex-column'>
            <h4 className='align-self-start ms-4'>Pregunta {currentQuestion + 1}</h4>
            <hr className='m-2'/>
            <p className='align-self-start ms-4'>{questions[currentQuestion].question}</p>
            {
              (currentQuestion + 1) < questions.length ?
              <button className='btn btn-secondary align-self-start ms-4' onClick={(e) => handleNextAnswer(e)}>Continuar</button> :
              <button className='btn btn-secondary align-self-start ms-4' onClick={() => location.reload()}>Volver a Jugar</button>
            }
          </div>
          <div className='container'>
            {[0, 2].map((startIndex, rowIndex) => (
              <div className="row" key={rowIndex}>
                {[0, 1].map((colIndex) => (
                  <div className="col bg-secondary border-rounded m-1 p-1 shadow-lg" key={startIndex + colIndex}>
                    <button className={`${questions[currentQuestion].answers[startIndex + colIndex].correct ? "bg-success" : "bg-danger"} fs-4 btn text-white w-100 h-100 border-rounded option`}>
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
  } else if (isFinished) {
    return (
      <main className='d-flex justify-content-center align-items-center bg'>
        <div
          className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-center shadow-lg pt-3 pb-3'
        >
          <h3 className='mb-4'>Juego Terminado</h3>
          <p className='mt-4'>Respondiste {points} de {questions.length} preguntas correctas!</p>
          <div className='bg-secondary align-self-center w-50 border-rounded mt-1 p-1 shadow-lg'>
            <button 
              className='bg-dark fs-4 btn text-white w-100 h-100 border-rounded option'
              onClick={() => {
                setShowAnswer(true)
                setCurrentQuestion(0)
              }}
            >Ver Respuestas</button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      <main className='d-flex justify-content-center align-items-center bg'>
        <div 
          className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-between shadow-lg pt-3 pb-3'
        >
          <div className='d-flex flex-column'>
            <h4 className='align-self-start ms-4'>Pregunta {currentQuestion + 1}</h4>
            <hr className='m-2'/>
            <p className='align-self-start ms-4'>{questions[currentQuestion].question}</p>
            <p className='align-self-start ms-4'>Tiempo Restante: {time}</p>
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
    </>
  )
}

export default App
