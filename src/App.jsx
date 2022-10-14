import './App.css'
import Die from './components/Die'
import React from 'react'
import { nanoid } from 'nanoid'

function App() {
const [dice, setDice] = React.useState(allNewDice())

function randomDieValue() {
  return Math.ceil(Math.random() * 6)
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

function ollUnheldDice() {
  setDice(allNewDice())
}

const diceElements = dice.map(die => <Die key={die.id} {...die} />)

  return (
    <main className="App">
      <h1 className='tenzie-title'>Tenzies</h1>
      <p className='tenzie-explanation'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
        {diceElements}
      </div>
      <button className='tenzie-btn' onClick={ollUnheldDice}>Roll</button>
    </main>
  )
}

export default App