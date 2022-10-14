import './App.css'
import Die from './components/Die.jsx'


function App() {


function randomDieValue() {
  return Math.ceil(Math.random() * 6)
}

function allNewDice() {
  const newArray = []
  for(let i = 0; i < 10 ; i++) {
    const newDie = {
      value: randomDieValue(),
      id: i + 1
    }
    newArray.push(newDie)
  }
  return newArray
}

console.log(allNewDice())

  return (
    <main className="App">
      <h1 className='tenzie-title'>Tenzies</h1>
      <p className='tenzie-explanation'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
      </div>
      <button className='tenzie-btn'>Roll</button>
    </main>
  )
}

export default App
