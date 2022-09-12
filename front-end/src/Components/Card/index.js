import React from 'react'

const Card = () => {
  return (
      <div className='card'>
          <img src='/i-13-pro.jpg' alt='mobile' />
          <div className='card-info'>
          <span className='fav-icon-round-border'><i class="fa fa-heart" aria-hidden="true"></i></span>
              <h1>One Plus 9r</h1>
              <p>by OnePlus</p>
              <h2>$ 33000</h2>
              <span>⭐⭐⭐⭐</span>
              <button className='btn-primary'>Add to cart</button>
          </div>
    </div>
  )
}

export default Card