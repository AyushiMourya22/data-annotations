import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { Context } from '../UserContext'

export const Login = () => {
    const { user, setUser } = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setredirect] = useState(false)
    const handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const user = await axios.post("/login", { email, password })
            console.log(user)
            if (user) {
                alert("Login successful")
                setredirect(true)
                setUser(user)
            }
        } catch (e) {
            console.log(e)
            alert("Login failed")


        }
    }
    if (redirect) {
        return <Navigate to={"/topics"} />
    }

    return (
        <div className="bg-gradient-to-r from-[#2980b9] to-[#2c3e50] w-full h-screen flex justify-center items-center">
            <div className="flex bg-white flex-col justify-center w-[25%] px-[4%] py-[2%] rounded-xl ">
                <div className="">
                    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                    <h2 className="mb-[4%] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-[5%] sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register Now</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}
