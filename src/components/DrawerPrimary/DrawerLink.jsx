import { useCallback } from 'react'
import { useWire } from '@forminator/react-wire'
import * as store from '@store'

import { Link } from 'react-router-dom'

const DrawerLink = ({
    to,
    autoClose,
    children,
    onClick,
    ...props
}) => {
    
    const drawerOpen = useWire(store.drawerOpen)
    
    const onLinkClick = useCallback(e => {
        if (onClick) onClick(e)
        if (autoClose) drawerOpen.setValue(false)
    }, [autoClose])
    
    return (
        
        <Link to={to} onClick={onLinkClick} {...props}>
            {children}
        </Link>
        
    )
    
}

DrawerLink.defaultProps = {
    autoClose: true,
}

export default DrawerLink
