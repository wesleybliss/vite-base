import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as hooks from '@hooks'
import { drawerEnabled } from '@constants'

import ProtectedRoute from '@components/ProtectedRoute'
import Navbar from '@components/Navbar'
import DrawerPrimary from '@components/DrawerPrimary'
import Home from '@routes/Home'
import Auth from '@routes/Auth'
import SignOut from '@routes/SignOut'
import About from '@routes/About'
import Profile from '@routes/Profile'
import Projects from '@routes/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const protectRoute = (path, Component) => (
    <Route
        path={path}
        element={
            <ProtectedRoute>
                <Component />
            </ProtectedRoute>
        } />
)

const Content = () => (
    
    <article className="flex flex-col items-center mt-12 p-6 mx-auto text-center">
        
        <Routes>
            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
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
    
    hooks.useDebug()
    hooks.useTheme()
    
    return (
        
        <Router>
            
            <div
                className="App relative flex flex-col w-full min-h-screen overflow-y-auto scrollbar-minimal"
                data-theme={theme === 'dark' ? 'business' : theme}>
                
                <div className="absolute top-0 hidden w-px h-screen border border-red-500 DEBUG-PAGE-LINE-V left-1/2" />
                <div className="hidden w-screen h-px border border-red-500 DEBUG-PAGE-LINE-H absolute-centered" />
                
                <Navbar />
                
                {drawerEnabled ? (
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
