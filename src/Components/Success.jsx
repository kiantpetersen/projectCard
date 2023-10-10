import React from 'react';

function Success({ handleSubmit }) {
    return (
        <div className='success-container'>

            <div className='success-icon'>
                <ion-icon name="checkmark"></ion-icon>
            </div>
            <h2 className='success-heading'>THANK YOU! </h2>
            <p className='success-text'>We've added your card details</p>
            <button onClick={handleSubmit} className='btn pay-btn'>Continue</button>
        </div>
    );
}

export default Success;