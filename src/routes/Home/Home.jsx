import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import Counter from '@components/Counter'
import PersistedCounter from '@components/PersistedCounter'

import './Home.css'

const Home = () => {
    
    const [dateTime, setDateTime] = useState('')
    
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(dayjs().format('dddd, MMMM DD, hh:mm:ss A'))
        }, 1000)
        return () => clearInterval(timer)
    })
    
    return (
        
        <div className="Home">
            
            <h1 className="Home-header">
                <div className="Home-header-circle">
                    <div className="Home-header-circle-inner absolute-centered" />
                </div>
                <div className="Home-header-branding absolute-centered font-AlexBrush">
                    Vite Base
                </div>
            </h1>
            
            <div className="mt-10 text-sm text-gray-400">{dateTime}</div>
            
            <div className="w-full">
                <p className="mt-10 text-gray-500 text-base">
                    VITE + REACT + TAILWIND CSS BOILERPLATE
                </p>
            </div>
            
            <Counter className="mt-20 flex justify-center items-center content-center" />
            
            <PersistedCounter className="mt-10 flex justify-center items-center content-center" />
            
        </div>
        
    )
    
}

export default Home
