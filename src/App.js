import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [name,setname]=useState("")
  const [age,setage]=useState("")
  const [gender,setgender]=useState("");
  const [course,setcourse]=useState("");
  const [tnc,settnc]=useState(false);
  const [print,setprint]=useState(false)
  function getFormdata(e){
    if(name=="" || age=="" || gender=="" || course=="" || !tnc){
      setprint(false)
      alert("empty field")
    }
    e.preventDefault()
  }
  return (
    <div className="App">
      <h1>Simple Form !!!</h1>
      <form onSubmit={getFormdata}>
      <label>Name : </label><input type="text" className="box" placeholder='Enter name' onChange={(e)=>setname(e.target.value)}></input><br /><br />
      <label>Age : </label><input type="text" className="box" placeholder='Enter Age' onChange={(e)=>setage(e.target.value)}/><br /><br />
      <label>Gender : </label>
      <input type='radio' name="gender" value="male" onChange={(e)=>setgender(e.target.value)}/>male
      <input type='radio' name="gender" value="female" onChange={(e)=>setgender(e.target.value)}/>female<br/><br/>
      <label>Course : </label><select className="box" onChange={(e)=>setcourse(e.target.value)}>
        <option>select course</option>
        <option>MCA</option>
        <option>BCA</option>
        <option>B.TECH</option>
        <option>BBA</option>
      </select><br/><br/>
      <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}/><span>accept term & condition</span><br/><br/>
      <button type="submit" className="box" onClick={()=>setprint(true)}>submit</button>
      </form>
      {
        print?<h1>{name} {age} {gender} {course} {tnc}</h1> : null
      }
    </div>
  );
}

export default App;
