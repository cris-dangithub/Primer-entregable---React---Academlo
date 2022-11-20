import React from 'react'

const TextQuote = ({quote, author}) => {
  return (
    <>
      <p className='card__quote'>
        <i className="quote__icon fa-solid fa-quote-left"></i>{quote}
      </p>
      <h1 className='card__author'>{author}</h1>
    </>
  )
}

export default TextQuote