
import { useState } from 'react'
import './App.css'
import Admission from './Components/Admission/Admission'
import Courses from './Components/Courses/Courses'
import Header from './Components/header/Header'

function App() {
const [cart,setCart]=useState([]);
const handleBtn=(course,id)=>{
 const newCart=[...cart,course];
 const exitCart= cart.map(db=>db.id)
 if(exitCart.includes(id)){
     window.alert("You can select course one time");
 }
 else{
 setCart(newCart);
 }
}

  return (
    <>
      
  <Header></Header>
  <div className='md:flex m-20 mr-5'>
  <Courses handleBtn={handleBtn} ></Courses>
  <Admission cart={cart} ></Admission>
  </div>
     
    </>
  )
}

export default App
