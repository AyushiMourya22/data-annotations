import React, { useContext, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../UserContext'
export const Tweet = (props) => {
    const location = useLocation()
    const propsData = location.state
    // console.log(propsData)

    const navigate = useNavigate()

    const { user } = useContext(Context)
    const [formData, setFormData] = useState({});

    const handleChange = (tweetId, v) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [tweetId]: v

        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);

        await axios.post(`/topics/${propsData.tweet_id}`, { formData })
        alert("Submission done")
        navigate(-1)

    }

    if (!user) {
        return <Navigate to={"/login"} />
    }
    return (
        <div className='relative'>
            <form action="" onSubmit={handleSubmit} className=' mb-8'>
                <div className='flex  border-4 border-sky-950  bg-sky-800 text-white sticky top-0 left-0 right-0 space-x-7 justify-between text-[140%] p-[1%] '>
                    <div className='flex space-x-4 w-[80%] '>
                        <div className='text-sky-300 font-bold'>{propsData.tweet_id}</div>
                        <div className=''>{propsData.tweet}</div>
                    </div>
                    <div className='text-[80%] flex '>
                        <span className='hover:scale-110 transition ease-in-out'>

                            <input className='ml-2 ' type="radio" value="shof" name={propsData.tweet_id} onChange={() => handleChange(propsData.tweet_id, 'shof')} /> SHOF
                        </span>
                        <span className='hover:scale-110 transition ease-in-out'>
                            <input className='ml-2' type="radio" value="chof" name={propsData.tweet_id} onChange={() => handleChange(propsData.tweet_id, 'chof')} /> CHOF

                        </span>
                        <span className='hover:scale-110 transition ease-in-out'>
                            <input className='ml-2' type="radio" value="none" name={propsData.tweet_id} onChange={() => handleChange(propsData.tweet_id, 'none')} /> Non Hate

                        </span>
                    </div>
                </div>
                <div>{propsData.comments?.map(item => {
                    return (
                        <div className='ml-[5%] border-4 mr-[2%] border-slate-500 bg-slate-300 my-[1%] flex flex-col space-x-7 p-[1%]'>
                            <div className='flex space-x-7 justify-between'>
                                <div className='flex w-[80%] space-x-4'>
                                    <div className='text-cyan-800 font-bold'>{item.tweet_id}</div>
                                    <div>{item.tweet}</div>
                                </div>
                                <div className='  flex'>
                                    <span className='hover:scale-110 transition ease-in-out'>
                                        <input className='ml-2 cursor-pointer' type="radio" value="shof" name={item.tweet_id} onChange={() => handleChange(item.tweet_id, 'shof')} /> SHOF

                                    </span>
                                    <span className='hover:scale-110 transition ease-in-out'>
                                        <input className='ml-2 cursor-pointer' type="radio" value="chof" name={item.tweet_id} onChange={() => handleChange(item.tweet_id, 'chof')} /> CHOF

                                    </span>
                                    <span className='hover:scale-110 transition ease-in-out'>
                                        <input className='ml-2 cursor-pointer' type="radio" value="non hate" name={item.tweet_id} onChange={() => handleChange(item.tweet_id, 'none')} /> Non Hate

                                    </span>
                                </div>
                            </div>
                            <div>{item.replies?.map(subitem => {
                                return (
                                    <div className='ml-[5%] border-4 border-blue-500 bg-blue-300 my-[1%] p-[1%] flex space-x-8 justify-between'>
                                        <div className='flex w-[80%] space-x-4'>
                                            <div className='text-cyan-800 font-bold'>{subitem.tweet_id}</div>
                                            <div>{subitem.tweet}</div>
                                        </div>
                                        <div className='flex text-[90%]'>
                                            <span className='hover:scale-110 transition ease-in-out'>

                                                <input className='ml-2 cursor-pointer' type="radio" value="shof" name={subitem.tweet_id} onChange={() => handleChange(subitem.tweet_id, 'shof')} /> SHOF
                                            </span>
                                            <span className='hover:scale-110 transition ease-in-out'>
                                                <input className='ml-2 cursor-pointer' type="radio" value="chof" name={subitem.tweet_id} onChange={() => handleChange(subitem.tweet_id, 'chof')} /> CHOF

                                            </span>
                                            <span className='hover:scale-110 transition ease-in-out'>
                                                <input className='ml-2 cursor-pointer' type="radio" value="non hate" name={subitem.tweet_id} onChange={() => handleChange(subitem.tweet_id, 'non')} /> Non Hate

                                            </span>
                                        </div>
                                    </div>
                                )
                            })}</div>
                        </div>
                    )
                })}</div>
                <div className='flex justify-center items-center '>
                    <button type="submit" className='hover:scale-110 hover:bg-blue-900 transition ease-in-out border-4 font-bold border-blue-900 text-[120%] hover:text-white bg-white text-blue-900 px-[4%] py-[1%] rounded-3xl'>Submit</button>

                </div>
            </form>
        </div>
    )
}
