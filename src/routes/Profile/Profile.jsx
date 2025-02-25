import { useState, useEffect } from 'react'
import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import * as actions from '@actions'

import { Link } from 'react-router-dom'

import './Profile.css'

const Profile = () => {
    
    const [user, setUser] = useWireState(store.user)
    
    const onLogoutClick = () => {
        setUser(null)
        window.location.replace('/signin')
    }
    
    useEffect(() => {
        const fn = async () => {
            try {
                const res = await actions.fetchProfile()
                console.log('profile', res)
            } catch (e) {
                console.error('@todo', e)
            }
        }
        fn()
    }, [])
    
    if (!user) return null
    
    return (
        
        <div className="Profile">
            
            <h1>
                {user.nickname ? `@${user.nickname}` : user.email}
            </h1>
            
            {user.nickname && (
                <h4>{user.email}</h4>
            )}
            
            {/* <div><pre><code>{JSON.stringify({ ...user, token: user.token.substring(0, 5) }, null, 4)}</code></pre></div> */}
            
            <div className="mt-20">
                <button className="btn btn-danger" onClick={onLogoutClick}>
                    LOGOUT
                </button>
            </div>
            
            <div className="mt-20">
                <Link to="/invites">
                    Invite a friend
                </Link>
            </div>
            
        </div>
        
    )
    
}

export default Profile
