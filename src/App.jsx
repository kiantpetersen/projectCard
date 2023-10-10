import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cardData, setCardData] = useState({
    cardholder: 'Mark Spencer',
    cardNumber: '1111 2222 8888 9999',
    month: '00',
    year: '00',
    cvcNumber: '000'

  })
  function handleChange(e) {
    const { name, value } = e.target
    setCardData((prev) => {
      return {
        ...prev, [name]: value
      }
    })
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
          <form className='pay-form'>
            <div className='pay-form-container'>
              <label htmlFor='cardholder' className='pay-form-label'>CARDHOLDER NAME</label>
              <input onChange={handleChange} value={cardData.name} className='card-input' type='text' name='cardholder' placeholder='e.g. Mark Spencer' />
            </div>
            <div className='pay-form-container'>
              <label htmlFor='cardNumber' className='pay-form-label'>CARD NUMBER</label>
              <input onChange={handleChange} value={cardData.cardNumber} className='card-input' type='text' name='cardNumber' placeholder='1111 2222 8888 9999' />
            </div>
            <div className='card-info-container'>
              <div className='pay-form-container' >
                <label className='pay-form-label'>EXP. DATE (MM/YY)</label>
                <div className='date-inputs'>
                  <input onChange={handleChange} name='month' value={cardData.month} placeholder='MM' className='card-input date-input' />
                  <input onChange={handleChange} name='year' value={cardData.year} placeholder='YY' className='card-input date-input' />
                </div>
              </div>
              <div className='pay-form-container' >
                <label className='pay-form-label'>CVC</label>
                <input onChange={handleChange} value={cardData.cvcNumber} name='cvcNumber' className='card-input cvc-input' />
              </div>
            </div>

            <button className=' btn pay-btn'>Confirm</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
