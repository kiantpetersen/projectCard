import React from 'react';

function CardForm({ cardData, handleChange, handleSubmit }) {

    return (
        <form onSubmit={handleSubmit} className='pay-form'>
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

            <button type='submit' className=' btn pay-btn'>Confirm</button>
        </form>
    );
}

export default CardForm;