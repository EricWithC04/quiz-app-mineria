import questions from './utils/questions'
import './App.css'

function App() {
  return (
    <>
      <main className='app'>
        Hola
        <ul className='questions'>
          {questions.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
