import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default App
