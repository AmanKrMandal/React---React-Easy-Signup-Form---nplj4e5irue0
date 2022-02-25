import React,{useState} from 'react'
import '../styles/App.css';
import { signUpFormValidation } from '../utils/validation';


const App = () => {
  
  const intialValues= {name:"",email:"",password:""};
  const [formValues,setFormValues] = useState(intialValues);
  const [error,setError] = useState({});

const handleChange =(e)=>{
const {name,value} = e.target;
setFormValues({...formValues,[name]:value})
 }

 const handleSubmit=(e)=>{
   e.preventDefault();
  const info = signUpFormValidation(formValues);
  setError(info);
 }

  return (
<form onSubmit={handleSubmit}>
 <label> Name: </label>
 <input id="name" name="name" value={formValues.name}
 onChange={handleChange}
 />
 <div>{error?error.name:null}</div>

  <label> Email :</label>
  <input id="email" name="email" value={formValues.email} onChange={handleChange}/>
  <div>{error?error.email:null}</div>

  <label>Password :</label>
  <input id="password" name="password" value={formValues.password}
  onChange={handleChange}/>
  <div>{error?error.password:null}</div>

 <label> </label><input id="consent" type="checkbox" />
 
 <button type="submit">Signup</button>
</form>
  )
}


export default App;
