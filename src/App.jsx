import questions from './utils/questions'
import { useState, useEffect } from 'react'
import FinishGame from './components/FinishGame/FinishGame'
import ShowAnswers from './components/ShowAnswers/ShowAnswers'
import CardQuestions from './components/CardQuestions/CardQuestions'
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

  const handleNextAnswer = () => {
    setCurrentQuestion(prev => prev + 1)
  }

  const handleShowAnswers = () => {
    setShowAnswer(true)
    setCurrentQuestion(0)
  }

  if (showAnswer) {
    return (
      <ShowAnswers
        questions={questions}
        currentQuestion={currentQuestion}
        handleNextAnswer={handleNextAnswer}
      />
    )
  } else if (isFinished) {
    return (
      <FinishGame 
        handleShowAnswers={handleShowAnswers}
        points={points}
        countQuestions={questions.length}
      />
    )
  }

  return (
    <CardQuestions 
      questions={questions}
      currentQuestion={currentQuestion}
      time={time}
      handleClick={handleClick}
    />
  )
}

export default App
