import './App.css'
import Die from './components/Die.jsx'


function App() {

  return (
    <main className="App">
      <h1 className='tenzie-title'>Tenzies</h1>
      <p className='tenzie-explanation'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Die />
      <button className='tenzie-btn'>Roll</button>
    </main>
  )
}

export default App
