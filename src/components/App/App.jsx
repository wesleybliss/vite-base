import * as effects from '@effects'

import Navbar from '@components/Navbar'
import Home from '@routes/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

const App = () => {
    
    effects.useDebugEffect()
    effects.useThemeEffect()
    
    return (
        
        <Router>
            
            <div className="App scrollbar-minimal">
                
                <div className="DEBUG-PAGE-LINE-V hidden w-px h-screen border border-red-500 absolute top-0 left-1/2" />
                <div className="DEBUG-PAGE-LINE-H hidden w-screen h-px border border-red-500 absolute-centered" />
                
                <Navbar />
                
                <article>
                    
                    <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        
                    </Routes>
                    
                    
                </article>
                
            </div>
            
        </Router>
        
    )
    
}

export default App
