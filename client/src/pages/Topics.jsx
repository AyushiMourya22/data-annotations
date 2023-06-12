import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../UserContext'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"

export const Topics = () => {
  const { user } = useContext(Context)
  const [covid, setCovid] = useState([])
  const [politics, setPolitics] = useState([])
  const [banTwitter, setTwitter] = useState([])
  const [religious, setreligious] = useState([])
  const [wuhan, setWuhan] = useState([])
  const [israel, setisrael] = useState([])
  const [charlie, setcharlie] = useState([])
  const [casteism, setcasteism] = useState([])
  const [data, setdata] = useState([])
  const [otherdata, setotherdata] = useState([])

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
        const { data, otherData, covidData, banTwitterData, politicsData, religiousData, casteismData, israelData, wuhanData, charlieData } = response.data
        setCovid(covidData)
        setdata(data)
        setotherdata(otherData)
        setPolitics(politicsData)
        setTwitter(banTwitterData)
        setreligious(religiousData)
        setisrael(israelData)
        setcharlie(charlieData)
        setWuhan(wuhanData)
        setcasteism(casteismData)
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Indian Politics</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{politics.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Religious Controversies</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{religious.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Israel</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{israel.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Wuhan Virus</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{wuhan.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Charlie Hebdo</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{charlie.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Casteism</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{casteism.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Covid Crisis</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{covid.map(tweet => {
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
              <div className='text-[150%] font-bold tracking-wider font-serif'>Ban Twitter</div>
              <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{banTwitter.map(tweet => {
                return (
                  <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                )
              })}</div>
            </div>
          </div>
        </div>
        {
          otherdata.length > 0 &&
          <div className='mx-[3%] py-[2%]'>
            <div className='bg-white  rounded-3xl p-[2%]'>
              <div className='mx-[5%] '>
                <div className='text-[150%] font-bold tracking-wider font-serif'>Other</div>
                <div className='flex justify-center my-[2%] w-[99%] flex-wrap'>{otherdata.map(tweet => {
                  return (
                    <Link to={`/topics/${tweet.tweet_id}`} className={`mx-[1%] ${done(tweet.tweet_id) ? "bg-green-300" : "bg-sky-200"} font-mono rounded-2xl p-[2%] hover:animate-pulse hover:scale-110 transition ease-in-out border-2 border-sky-900  my-[1%]`} state={tweet}>{tweet.tweet_id}</Link>
                  )
                })}</div>
              </div>
            </div>
          </div>

        }
      </div>


    </div>
  )
}
