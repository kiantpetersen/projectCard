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
              <input type='text' name='cardholder' placeholder='e.g. Mark Spencer' />
            </div>
            <div className='pay-form-container'>
              <label htmlFor='cardNumber' className='pay-form-label'>CARD NUMBER</label>
              <input type='text' name='cardNumber' placeholder='e.g. Mark Spencer' />
            </div>
            <div className='pay-card-info'>
              <div className='pay-card-date'>
                <div className='pay-form-container'>
                  <label htmlFor='cardNumber' className='pay-form-label'>EXP. DATE (MM/YY)</label>
                  <div className='form-date-container'>
                    <input type='text' name='cardNumber' placeholder='e.g. Mark Spencer' />
                    <input className='pay-input' type='text' />
                  </div>
                </div>
              </div>

              <div className='pay-form-container'>
                <label htmlFor='cardNumber' className='pay-form-label'>CVV</label>
                <input type='text' name='cardNumber' placeholder='999' />
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
