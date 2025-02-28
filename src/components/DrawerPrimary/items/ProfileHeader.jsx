import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'

import { FaUserAlt } from 'react-icons/fa'

const ProfileHeader = () => {
    
    const navigate = useNavigate()
    
    const user = useWireValue(store.user)
    const avatar = useWireValue(store.avatar)
    const isAuthenticated = useWireValue(store.isAuthenticated)
    
    const onProfileClick = useCallback(() => {
        navigate(isAuthenticated ? '/profile' : '/signin')
    }, [isAuthenticated])
    
    return (
        
        <div className="ProfileHeader mb-8 px-3 cursor-pointer" onClick={onProfileClick}>
            
            <div className="flex items-center content-center">
                
                {(isAuthenticated && avatar)
                    ? <img className="avatar w-12" src={avatar} />
                    : <FaUserAlt />
                }
                
                <div className="ml-4 flex flex-col">
                    <span>{user?.nickname ? `@${user?.nickname}` : user?.email}</span>
                    {user?.nickname && (
                        <span className="text-xs">{user.email}</span>
                    )}
                </div>
            
            </div>
        
        </div>
        
    )
    
}

export default ProfileHeader
