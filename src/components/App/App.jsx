import { useMemo } from 'react'
import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as hooks from '@hooks'
import { useDrawer } from '@constants'

import ProtectedRoute from '@components/ProtectedRoute'
import Navbar from '@components/Navbar'
import DrawerPrimary from '@components/DrawerPrimary'
import Home from '@routes/Home'
import Auth from '@routes/Auth'
import SignOut from '@routes/SignOut'
import Profile from '@routes/Profile'
import Projects from '@routes/Projects'
import * as dialogs from '@components/Dialogs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

const protectRoute = (path, Component) => {
    return (
        <Route
            path={path}
            element={
                <ProtectedRoute>
                    <Component />
                </ProtectedRoute>
            }
        />
    )
}

const Content = () => (
    
    <article>
        
        <Routes>
            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Auth />} />
            <Route exact path="/signin" element={<Auth />} />
            <Route exact path="/signout" element={<SignOut />} />
            
            {protectRoute('/profile', Profile)}
            {protectRoute('/projects', Projects)}
            
        </Routes>
        
    </article>
    
)

const App = () => {
    
    const theme = useWireValue(store.theme)
    
    hooks.useDebugEffect()
    hooks.useThemeEffect()
    
    return (
        
        <Router>
            
            <div
                className="App scrollbar-minimal"
                data-theme={theme === 'dark' ? 'business' : theme}>
                
                <div className="absolute top-0 hidden w-px h-screen border border-red-500 DEBUG-PAGE-LINE-V left-1/2" />
                <div className="hidden w-screen h-px border border-red-500 DEBUG-PAGE-LINE-H absolute-centered" />
                
                <Navbar />
                
                {useDrawer ? (
                    <DrawerPrimary>
                        <Content />
                    </DrawerPrimary>
                ) : (
                    <Content />
                )}
                
                {/* {Object.keys(dialogs).map(it => {
                    const Component = dialogs[it]
                    return <Component key={`dialog-${it}`} />
                })} */}
                
            </div>
            
        </Router>
        
    )
    
}

export default App
