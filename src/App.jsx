import questions from './utils/questions'
import './App.css'

function App() {
  return (
    <>
      <main className='d-flex justify-content-center align-items-center bg'>
        <div 
          className='d-flex flex-column bg-dark text-white border-rounded w-50 card-question fs-4 justify-content-between shadow-lg pt-3 pb-3'
        >
          <div className='d-flex flex-column'>
            <h4 className='align-self-start ms-4'>Pregunta 1</h4>
            <hr className='m-2'/>
            <p className='align-self-start ms-4'>{questions[0].question}</p>
          </div>
          <div className='container'>
            {[0, 2].map((startIndex, rowIndex) => (
              <div className="row" key={rowIndex}>
                {[0, 1].map((colIndex) => (
                  <div className="col bg-secondary border-rounded m-1 p-1 shadow-lg" key={startIndex + colIndex}>
                    <div className='bg-dark border-rounded option'>
                      {questions[0].answers[startIndex + colIndex].text}
                    </div>
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
