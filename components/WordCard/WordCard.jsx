import React from 'react'
import './WordCard.css'

function WordCard({first, last, mail, comment, deleteWord}) {
  
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteWord(first);
  }
  return (
    <div className='word-card'>
        <div className='card-front'>First:  {first}</div>
        <div className='card-back'>Last:  {last}</div>
        <div className='email-card'>Email {mail}</div>
        <div className='comment-card'>Comments {comment}</div>
        <span className='delete-card' onClick={handleDelete}>x</span>
    </div>
   
  )
}

export default WordCard
