import React, { useState } from 'react';
import '../../Css/Register.css';

const Register = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ dob, setDob ] = useState('');
    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');
    
    const handleSubmit = async (e) => {
      try {

      
        e.preventDefault();
        console.log(email,password);
       const userdata = {firstName, lastName, emailId: email, dob, city, country, password};

await fetch('https://login-guvi-backend.onrender.com//register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  });
  alert('user registered successfully');
} catch (error) {
console.log(error);
}
    }



  return (
    <div className='auth-form-container'>
    <form className='register-form' onSubmit={handleSubmit}>
    <label htmlFor="firstName">FirstName</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)}  type="text" id="firstName" name="firstName" placeholder="Enter your FirstName..." required />
        <label htmlFor="lastName">LastName</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" name="lastName" placeholder="Enter your LastName..."  />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email..." required />
        <label htmlFor="dob">Date Of Birth</label>
        <input value={dob} onChange={(e) => setDob(e.target.value)} id="dob" name="dob" placeholder="Enter your Date Of Birth..." />
        <label htmlFor="city">City</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" name="city" placeholder="Enter your City..." />
        <label htmlFor="country">Country</label>
        <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" id="country" name="country" placeholder="Enter your Country..." />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="***********" required />
        <button type='submit'>sign up</button>
    </form>
    <button className='link-btn' onClick = {() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
</div>
  )
}

export default Register