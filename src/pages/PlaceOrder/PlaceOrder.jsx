import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivey Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email"  placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <input type='text' placeholder='Phone' />
        <button>PROCEED TO PAYMENT</button>
      </div>


    </form>
  )
}

export default PlaceOrder
