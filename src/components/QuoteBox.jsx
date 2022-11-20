import React from 'react'
import ButnQuote from './ButnQuote'
import TextQuote from './TextQuote'

const QuoteBox = ({ quoteRandom, handleClick, colorRandom, classNameCard }) => {

  const objStyle = {
    color: colorRandom
  }

  const objStyleBtn = {
    backgroundColor: colorRandom
  }

  return (
    <article className={classNameCard} style={objStyle}>
      <TextQuote 
        quote={quoteRandom.quote}
        author={quoteRandom.author}
      />
      
      <ButnQuote
        objStyleBtn={objStyleBtn}
        handleClick={handleClick}
      />


    </article>
  )
}

export default QuoteBox