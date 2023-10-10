import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardForm from './Components/CardForm'
import Success from './Components/Success'

function App() {
  const [cardData, setCardData] = useState({
    cardholder: 'Mark Spencer',
    cardNumber: '1111 2222 8888 9999',
    month: '00',
    year: '00',
    cvcNumber: '000'

  })
  const [submit, setSubmit] = useState(false)
  function handleChange(e) {
    const { name, value } = e.target
    setCardData((prev) => {
      return {
        ...prev, [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Event: ', e.target)
    setSubmit(prev => !prev)
  }


  return (
    <div className='pay-card-section'>
      <div className='grid pay-card-grid'>
        <div className='col card-col'>

          <div className='pay-bg'></div>
          <div className='card-front'>
            <div className='circles-container'>

              <div className='circle-closed'></div>
              <div className='circle-open'></div>
            </div>
            <p className='card-number'>{cardData.cardNumber} </p>
            <div className='card-front-info'>
              <p className='card-name'>{cardData.cardholder}</p>
              <p className=' card-date'>{cardData.month}/{cardData.year}</p>
            </div>
          </div>
          <div className='card-back'>
            <p className='cvc-number'>{cardData.cvcNumber}</p>
          </div>
        </div>
        <div className='col'>
          {submit ? <CardForm handleSubmit={handleSubmit} handleChange={handleChange} cardData={cardData} /> : <Success handleSubmit={handleSubmit} />}


        </div>
      </div>

    </div>
  )
}

export default App
