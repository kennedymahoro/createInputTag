import {useState} from "react"


const InputTag = () => {
  const [name, setName] = useState();
  const log = () => {
    alert(`Hello ${name}`)
  } 
  return (
    <form>
      <label>Enter a name:      
        <input type='text' value={name} onChange{...(e)=>{setName(e.target.value)}}/>
      </label>
      <button onClick={log}>Submit</button>
    </form>
  )
}
export default InputTag;
