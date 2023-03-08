import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { v4 as uuidv4 } from "uuid";

let blocks = [
  {
    id: uuidv4(),
    name: "O Python do vovô não sobe mais",
    image: "img_card_1.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "Todo mundo null",
    image: "img_card_2.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "Hoje dou exception",
    image: "img_card_3.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "Manda Node",
    image: "img_card_4.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "Só no back-end",
    image: "img_card_5.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "Esse anel não é de Ruby",
    image: "img_card_6.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "No C# do outros é refresco",
    image: "img_card_1.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
  {
    id: uuidv4(),
    name: "Vem de react para mim",
    image: "img_card_2.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    place: "São Paulo"
  },
]

const cities = [
  { name: "São Paulo", abs: "SP"},
  { name: "Rio de Janeiro", abs: "RJ"},
  { name: "Salvador", abs: "BA"},
  { name: "Recife", abs: "PE"},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header cities={cities} />
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default App
