import questions from './utils/questions'
import arrayRandomElements from './utils/arrayRandomElements'
import { useState, useEffect } from 'react'
import FinishGame from './components/FinishGame/FinishGame'
import ShowAnswers from './components/ShowAnswers/ShowAnswers'
import CardQuestions from './components/CardQuestions/CardQuestions'
import MainPage from './components/MainPage/MainPage'
import './App.css'

function App() {

  const [selectedQuestions] = useState(arrayRandomElements(questions, 5))
  const [initialGame, setInitialGame] = useState(false)

  const [currentQuestion, setCurrentQuestion] = useState(0) 
  const [points, setPoints] = useState(0) 
  const [isFinished, setIsFinished] = useState(false)
  const [time, setTime] = useState(10)
  const [timeFinished, setTimeFinished] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (!isFinished) {
      if (initialGame) {
        const timeInterval = setInterval(() => {
          if (time > 0) setTime((prevTime) => prevTime - 1);
          if (time === 0) setTimeFinished(true)
        }, 1000)
    
        return () => clearInterval(timeInterval)
      }
    }
  }, [time, initialGame])

  useEffect(() => {
    if (timeFinished) {
      setTimeout(() => {
        setTime(10)
        setTimeFinished(false)
        if (currentQuestion === selectedQuestions.length - 1) {
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
      
      if (currentQuestion === selectedQuestions.length - 1) {
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
        questions={selectedQuestions}
        currentQuestion={currentQuestion}
        handleNextAnswer={handleNextAnswer}
      />
    )
  } else if (isFinished) {
    return (
      <FinishGame 
        handleShowAnswers={handleShowAnswers}
        points={points}
        countQuestions={selectedQuestions.length}
      />
    )
  } else if (initialGame) {
    return (
      <CardQuestions 
        questions={selectedQuestions}
        currentQuestion={currentQuestion}
        time={time}
        handleClick={handleClick}
      />
    )
  }

  return (
    <MainPage
      setInitialGame={setInitialGame}
    />
  )
}

export default App
