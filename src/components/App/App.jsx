import React from 'react'

import './App.css'

const App = () => {
    
    return (
        
        <div className="App scrollbar-minimal">
            
            <div className="hidden w-px h-screen border border-red-500 absolute top-0 left-1/2" />
            
            <article>
                
                <h1 className="relative flex justify-center items-center content-center w-96 h-50">
                    <div className="relative w-40 h-40 bg-gray-300 rounded-full opacity-40">
                        <div className="absolute-centered w-[90%] h-[90%] bg-gray-200 rounded-full" />
                    </div>
                    <div className="absolute-centered w-full font-AlexBrush text-6xl text-gray-700">
                        Vite Base
                    </div>
                </h1>
                
                <div className="w-full">
                    <p className="mt-20 text-gray-500 text-base">
                        VITE + RECT + TAILWIND CSS BOILERPLATE
                    </p>
                </div>
                
            </article>
            
        </div>
        
    )
    
}

export default App
