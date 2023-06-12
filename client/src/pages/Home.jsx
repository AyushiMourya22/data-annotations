import React from 'react'

export const Home = () => {
  return (
    <div className= "bg-gradient-to-r from-[#2980b9] to-[#2c3e50] h-screen flex justify-center items-center">
        <div className='flex w-full text-center'>
            <div className='w-1/2 font-bold text-[180%] px-[10%]'>Welcome to our Site</div>
            <div className='w-1/2 '>
                <div className='flex flex-col'>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}
