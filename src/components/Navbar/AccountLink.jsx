import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'

import NavLink from './NavLink'
import { FaUserAlt } from 'react-icons/fa'

const AccountLink = props => {
    
    const isAuthenticated = useWireValue(store.isAuthenticated)
    const avatar = useWireValue(store.avatar)
    
    return (
        
        <NavLink
            to={isAuthenticated ? '/profile' : '/signin'}
            {...props}>
            
            {(isAuthenticated && avatar)
                ? <img className="avatar w-8 h-8" src={avatar} />
                : <FaUserAlt />
            }
        
        </NavLink>
        
    )
    
}

export default AccountLink
