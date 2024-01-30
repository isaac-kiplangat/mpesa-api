import React, { useState } from 'react'
import Axios from 'axios'

function App() {
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")

  const handlePay = (e)=>{
    e.preventDefault()
    Axios.post("http://127.0.0.1:5000/token",{
      amount,
      phone
    }).then((res)=>{
      console.log(res)
    }).catch((err) =>{
      console.log(err )
    })
    alert("payment successfull")
  }

  return (
    <div className=''>
      <h2 className='text-green-600 text-center text-2xl italic font-semibold'>Marksmatt</h2>
      <p className=' text-center font-semibold'>pay with <span className='text-xl text-green-600 italic font-semibold'>M <span className='text-red-500'>-</span> pesa</span></p>
    
    <form action="" className='flex my-8 w-1/3 mx-auto flex-col items-center space-y-5'>
     {/* ennter amount */}
      <input 
      type="number"
      value={phone}
      onChange={(e)=> setPhone(e.target.value)}
      className='border bg-green-50 border-green-500 w-full p-2 text-lg rounded-md placeholder:font-light focus:outline-none placeholder:italic' 
      placeholder='enter phone number (07...)' />

      {/* enter amount */}
      <input 
      type="number" 
      value={amount}
      onChange={(e)=> setAmount(e.target.value)}
      className='border bg-green-50 w-full border-green-500 p-2 text-lg rounded-md placeholder:font-light placeholder:italic focus:outline-none' 
      placeholder='enter amount' />

      <button onClick={handlePay} className='bg-green-600 w-1/2 mx-auto text-white text-lg  py-2 rounded-full'>Pay Now</button>

    </form>
    
    </div>
  )
}

export default App