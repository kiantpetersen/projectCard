import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardForm from './Components/CardForm'
import Success from './Components/Success'

function App() {
  const [cardData, setCardData] = useState({
    cardholder: '',
    cardNumber: '',
    month: '',
    year: '',
    cvcNumber: ''

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
    // console.log(validateInputs())
    let flag = validateInputs()
    if (flag === true) {
      setSubmit(true)
    }
    // setSubmit(prev => !prev)
  }
  function validateInputs() {
    const num = cardData.cardNumber.replace(/ +/g, "")
    const month = cardData.month
    const year = cardData.year
    const cvc = cardData.cvcNumber
    const name = cardData.cardholder
    let res = true;

    if (num.length !== 16) {
      res = false
      return res
    } else if (month.length !== 2 || Number(month) < 1 || Number(month) > 12) {
      res = false
      return res
    }
    else if (year.length !== 2 || Number(year) < 23 || Number(year) > 30) {
      res = false
      return res
    }
    else if (cvc.length !== 3) {
      res = false
      return res
    }
    else if (!name.length) {
      res = false
      return res

    }
    return res
    // console.log('Num: ', num.length)


  }
  function resetData() {
    setCardData({
      cardholder: '',
      cardNumber: '',
      month: '',
      year: '',
      cvcNumber: ''
    })
    setSubmit(false)
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
            <p className='card-number'>{cardData.cardNumber ? cardData.cardNumber : '1111 2222 3333 4444'} </p>
            <div className='card-front-info'>
              <p className='card-name'>{cardData.cardholder ? cardData.cardholder : 'Mark Spectre'}</p>
              <p className=' card-date'>{cardData.month ? cardData.month : '00'}/{cardData.year ? cardData.year : '00'}</p>
            </div>
          </div>
          <div className='card-back'>
            <p className='cvc-number'>{cardData.cvcNumber ? cardData.cvcNumber : '000'}</p>
          </div>
        </div>
        <div className='col'>
          {!submit ? <CardForm handleSubmit={handleSubmit} handleChange={handleChange} cardData={cardData} /> : <Success handleSubmit={resetData} />}


        </div>
      </div>

    </div>
  )
}

export default App
