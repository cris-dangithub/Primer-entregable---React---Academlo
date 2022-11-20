import React from 'react'

const ButnQuote = ({objStyleBtn, handleClick}) => {
  return (
    <button className='card__btn centerItemsFlex' style={objStyleBtn} onClick={handleClick}>
      <i className="fa-solid fa-angle-right"></i>
    </button>
  )
}

export default ButnQuote