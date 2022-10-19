import './App.css'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import Confetti from 'react-confetti'
import Toggle from './components/Toggle.jsx'

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)


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

function toggleDarkMode() {
  setDarkMode(prevMode => !prevMode)
}

  const diceElements = dice.map(die => <Die key={die.id} {...die} held={die.isHeld} holdDice={() => holdDice(die.id)} darkMode={darkMode} />)

  return (
    <div>
      <Toggle 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className={ darkMode ? "dark" : ""}>
        { tenzies && <Confetti />}
        <h1 className={ darkMode ? "dark" : ""}>Tenzies</h1>
        <p className={ darkMode ? "dark" : ""}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
    </div>
  )
}

export default App