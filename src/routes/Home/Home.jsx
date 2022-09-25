import { useState, useEffect } from 'react'

import './Home.css'

const Home = () => {
    
    return (
        
        <div className="Home">
            
            <h1 className="Home-header">
                <div className="Home-header-circle">
                    <div className="Home-header-circle-inner absolute-centered" />
                </div>
                <div className="Home-header-branding absolute-centered font-AlexBrush">
                    {process.env.APP_TITLE || 'Vite Base'}
                </div>
            </h1>
            
            <div className="w-full">
                <p className="mt-10 text-gray-500 text-base">
                    VITE + REACT + TAILWIND CSS BOILERPLATE
                </p>
            </div>
            
        </div>
        
    )
    
}

export default Home
