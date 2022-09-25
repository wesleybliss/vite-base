import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWire } from '@forminator/react-wire'
import * as store from '@store'

const SignOut = () => {
    
    const navigate = useNavigate()
    
    const user = useWire(store.user)
    
    useEffect(() => {
        
        user.setValue(null)
        
        navigate('/')
        
    }, [])
    
    return null
    
}

export default SignOut
