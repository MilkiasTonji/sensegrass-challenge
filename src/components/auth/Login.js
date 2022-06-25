import React, { useEffect, useState } from 'react'

import sensegrassLogo from '../../assets/sensegrass.png'
import sensegrassImage from '../../assets/grass.jpg'
import { message, Spin } from 'antd'

import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault()
   
    if (!userEmail || !userPassword){
      setBtnDisabled(true)
      setErrorMessage("Fill all the required fields")
      return;
    }

    console.log("validEmail: ", validateEmail(userEmail))

    if(!validateEmail(userEmail)){
      setBtnDisabled(true)
      setErrorMessage("please enter the valid email")
      return;
    }


    const body = {
      email: userEmail,
      password: userPassword
    }

    setTimeout(() => {
      console.log("body: ", body)
      navigate("/dashboard")
    }, 2000);
    

  }



  const validateEmail = (email) => {
    var emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    if(emailRegex.test(email)){
      return true
    }else{
      return false
    }

  }

  return (
    <div className='flex items-center justify-center h-screen p-2'>
      <div className='flex flex-col flex-1 h-[600px] mx-3 items-center justify-center shadow-xl'>
        <div className='flex items-center justify-start w-2/3 space-y-3 py-3'>
          <img
            src={sensegrassLogo}
            alt="sensegrass logo"
            className='w-16 h-16'
          />
          <p className='uppercase text-green-300'>Sensegrass</p>
        </div>
        <form
          onSubmit={(e) => handleLogin(e)} 
          className='flex flex-col py-5 px-3 space-y-3 w-2/3'
          autoComplete='off'
          >

          {
            errorMessage && <p className='text-red-400'> {errorMessage} </p>
          }

          <label>Email</label>
          <input
            className='h-10 rounded-md px-3 flex items-center outline outline-1'
            placeholder='Email'
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className='h-10 rounded-md px-3 flex items-center outline outline-1'
            placeholder='Password'
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <div className='flex items-center justify-between p-3'>
            <p
              className='text-blue-600'
            >
              Forget Passwor?</p>
            <button
              // disabled={btnDisabled}
              type='submit'
              className='uppercase py-3 bg-green-600 py-2 px-4 rounded-xl text-gray-200 items-center justify-start'
            >
              {
                loading &&  
                <div className="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full" role="status">
              </div>
              }
               Sign in
            </button>
          </div>
        </form>

        <form className='flex flex-col py-5 px-3 space-y-3 w-2/3 my-5'>
          <p className='uppercase text-lg text-blue-300'>Let's get started</p>
          <input
            className='h-10 rounded-md px-3 flex items-center outline outline-1'
            placeholder='Enter your Email'
            type="email"
            required
          />

          <div className='flex items-center justify-end p-3'>
            <button
              type='submit'
              className='uppercase py-3 bg-green-100 py-2 px-4 rounded-xl text-gray-700 outline outline-1'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div className='flex flex-col flex-1 h-[600px] mx-3 items-center justify-center shadow-xl'>
       <img src={sensegrassImage} alt="sensegrass background" className='object-fill w-full h-full' />
      </div>
    </div>
  )
}

export default Login