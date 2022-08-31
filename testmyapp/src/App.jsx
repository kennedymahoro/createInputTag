import './App.css'
import InputTag from "./Components/InputTag.jsx"
import {useState} from "react"
function App() {
  const [name, setName] = useState('');
  const changeName = (e) => {
    setName(e.target.value) 
  }
  const log = () => {
    console.log(`Your name is ${name}`)
  }
  return (
    <div>
        <InputTag lable="name" name={name} setName={changeName} log={log}/>
    </div>
  )
}

export default App
