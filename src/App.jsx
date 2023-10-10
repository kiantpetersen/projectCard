import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pay-card-section'>
      <div className='grid pay-card-grid'>
        <div className='col'>

          <div className='pay-bg'></div>
        </div>
        <div className='col'>
          <form className='pay-form'>
            <div className='pay-form-container'>
              <label htmlFor='cardholder' className='pay-form-label'>CARDHOLDER NAME</label>
              <input className='card-input' type='text' name='cardholder' placeholder='e.g. Mark Spencer' />
            </div>
            <div className='pay-form-container'>
              <label htmlFor='cardNumber' className='pay-form-label'>CARD NUMBER</label>
              <input className='card-input' type='text' name='cardNumber' placeholder='1111 2222 8888 9999' />
            </div>
            <div className='card-info-container'>
              <div className='pay-form-container' >
                <label className='pay-form-label'>EXP. DATE (MM/YY)</label>
                <div className='date-inputs'>
                  <input placeholder='MM' className='card-input date-input' />
                  <input placeholder='YY' className='card-input date-input' />
                </div>
              </div>
              <div className='pay-form-container' >
                <label className='pay-form-label'>CVC</label>
                <input className='card-input cvc-input' />
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
