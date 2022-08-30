import {useState} from "react"


const InputTag = () => {
  const [name, setName] = useState();
  const handleSubmit = (event) => {
    event.preventDefualt()
    alert(`The name you Entered was: ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a name:      
        <input type='text' value={name} onChange{...(e)=>{setName(e.target.value)}}/>
      </label>
      <input type='submit' />
    </form>
  )
}
export default InputTag;
