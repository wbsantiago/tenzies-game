import './App.css'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)  
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function randomDieValue() {
    return Math.ceil(Math.random() * 6)
  }

  function generateNewDie() {
    return {
      value: randomDieValue(),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newArray = []
    for(let i = 0; i < 10 ; i++) {
      const newDie = {
        value: randomDieValue(),
        isHeld: false,
        id: nanoid()
      }
      newArray.push(newDie)
    }
    return newArray
  }

  function rollUnheldDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(unheldDice => {
        return unheldDice.isHeld ?
          unheldDice :
          generateNewDie()
      }))
    } else {
      setDice(allNewDice())
      setTenzies(false)
    }
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return  die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
    }))
}

  const diceElements = dice.map(die => <Die key={die.id} {...die} held={die.isHeld} holdDice={() => holdDice(die.id)} />)

  return (
    <main className="App">
      { tenzies && <Confetti />}
      <h1 className='tenzie-title'>Tenzies</h1>
      <p className='tenzie-explanation'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
        {diceElements}
      </div>
      <button 
        className='tenzie-btn' 
        onClick={rollUnheldDice}
      >
        { tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App