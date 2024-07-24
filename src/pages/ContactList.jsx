import React from 'react'
import WordForm from '../components/WordForm/WordForm'

import { useState } from 'react'
import CardsContainer from '../components/CardsContainer/CardsContainer'

function ContactList() {
  const [words, setWords] = useState ([
    {First:'', Last: '', mail: '', comment:'' }
  ])

  const addWord = (first, last, mail, comment) => {
    const newWords = [...words, {first, last, mail, comment}];
    setWords(newWords);
  }
  const deleteWord = (First) => {
    const newWords = words.filter(word => word.First !== First)
    setWords(newWords);
  }
  return (
    <div>
      <main>
      <WordForm addWord={addWord}/>
      <CardsContainer words={words} deleteWord={deleteWord}
      />
      </main>
     
     
    </div>
  )
}

export default ContactList

