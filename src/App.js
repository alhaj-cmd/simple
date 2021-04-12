import React,{useState,useEffect} from 'react';
import './App.css';
import person from './PlayerList/list' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMale } from '@fortawesome/free-solid-svg-icons'
//import Cricket from './Friends/index'

function App() {
  const [user, setUser] = useState([])
  
      useEffect(() => {setUser(person)},[] )
    
      const [newuser, setNewUser] = useState([])


      const handleAddUser = (user) =>{
        setNewUser(user);
      console.log('user add',user)
     const newCart = [cart, user];
     console.log(newCart);
     // setNewUser(newCart);


     }
     let cart = newuser;
     for (let i = 0; i < cart.length; i++) {
       const element = cart[i];
       newuser=element;
     }
     console.log(newuser);
    //handleAddUser = handleAddUser
   
  return (
    <div className='container'>
      <div className='main'>
         {person.map(user=>
          <div className='team'
      
          key={Math.random()}>
          <img src={user.image}/>
          <p>Id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Profession: {user.Profession}</p>
          <p>price: {user.price}</p>
          <button  onClick={() => handleAddUser(user)}><FontAwesomeIcon icon={faMale}/> Add Me</button>
          
          </div>)}
      </div>

      <div className='Data-count'>
        
      
         <h2>Team List Count</h2>
         <h5>order Summary: {newuser.props}</h5>
         <h5>Reciver:</h5>
      </div>
    </div>
  );
 };
export default App;
