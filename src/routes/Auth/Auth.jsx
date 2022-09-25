import { useState, useEffect, useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useWireState, useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as actions from '@actions'
import * as effects from '@effects'

import AuthForm from '@components/AuthForm'

import './Auth.css'

const Auth = () => {
    
    const location = useLocation()
    
    const [error, setError] = useState()
    
    const isAuthenticated = useWireValue(store.isAuthenticated)
    
    const onSubmit = async (email, password) => {
        
        const fn = isSignUp ? actions.signUp : actions.signIn
        const res = await fn(email, password)
        
        if (res.error) {
            console.error('Auth.onSubmit', res.error)
            return setError(res.error)
        }
        
    }
    
    const isSignUp = useMemo(() => location.pathname === '/signup', [location])
    
    const submitLabel = useMemo(() => isSignUp ? 'SIGN UP' : 'SIGN IN', [isSignUp])
    
    // Automatically redirect home once we're signed in
    effects.useConditionalRedirect(
        isAuthenticated,
        () => isAuthenticated,
    )
    
    return (
        
        <div className="Auth">
            
            <div className="w-1/2 max-w-sm flex flex-col justify-center items-center absolute-centered">
                
                <AuthForm
                    submitLabel={submitLabel}
                    onSubmit={onSubmit} />
                
                <div className="mt-10 text-sm">
                    {isSignUp ? (
                        <p>Already have an account? <Link to="/signin">Sign in</Link> instead.</p>
                    ) : (
                        <p>Don't have an account yet? <Link to="/signup">Create one</Link> now.</p>
                    )}
                </div>
                
                {/* <div><pre><code>{JSON.stringify(location, null, 4)}</code></pre></div> */}
                
                {error && (
                    <div className="mt-10">
                        {error}
                    </div>
                )}
                
            </div>
            
        </div>
        
    )
    
}

export default Auth
