import React from 'react'
import './CardsContainer.css'
import WordCard from '../WordCard/WordCard'


function CardsContainer({words, deleteWord}) {

    const cardList = words.map( word => 
        <WordCard 
        first={word.first} 
        last={word.last}
        email={word.mail}
        comment={word.comment}
        key={word.first} 
        deleteWord={deleteWord} 
        />
         
       
      )
  return (
   
      <section className='cards-container'>
            {cardList}
          </section>
   
  )
}

export default CardsContainer
