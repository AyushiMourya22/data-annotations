import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../UserContext'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"

export const Topics = () => {
  const { user } = useContext(Context)
  const [celebrity, setcelebrity] = useState([])
  const [farmer, setfarmer] = useState([])
  const [hinduphobia, sethinduphobia] = useState([])
  const [historical, sethistorical] = useState([])
  const [islamophobia, setislamophobia] = useState([])
  const [ozil, setozil] = useState([])
  const [russiaUkraine, setrussiaUkraine] = useState([])
  const [temple, settemple] = useState([])
  const [data, setdata] = useState([])

  const done = (id) => {
    return data.some(item => {
      return item.tweet_id === id
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/topics")
        // console.log(response.data)
        const { data, celebrityData, hinduphobiaData, farmerData, historicalData, templeData, ozilData, islamophobiaData, russiaUkraineData } = response.data
        setcelebrity(celebrityData)
        setdata(data)
        setfarmer(farmerData)
        sethinduphobia(hinduphobiaData)
        sethistorical(historicalData)
        setozil(ozilData)
        setrussiaUkraine(russiaUkraineData)
        setislamophobia(islamophobiaData)
        settemple(templeData)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()

  }, [])
  if (!user) {
    return <Navigate to={"/login"} />
  }

  return (
    <div className='bg-gradient-to-r from-[#2980b9] to-[#2c3e50]'>
      <div className='px-[10%]'>
        <div className='text-[200%] font-serif tracking-wider leading-7 py-[4%] text-white font-bold'>Topics Available to annotate</div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Farmer Protest</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{farmer.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Historical Hindu Muslim</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{historical.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Ozil</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{ozil.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Islamophobia </div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{islamophobia.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Russia Ukraine Conflict</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{russiaUkraine.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Temple Mosque Controversies</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{temple.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='m-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Celebrity Controversies</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{celebrity.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        <div className='mx-[3%]'>
          <div className='bg-white  rounded-3xl p-[2%]'>
            <div className='mx-[5%] '>
              <div className='text-[150%] font-bold tracking-wider font-serif'>Hinduphobia</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{hinduphobia.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
