import { useMemo } from 'react'
import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import { primaryMenuItems } from '@constants'
import { ProfileHeader, ThemeToggle } from './items'

import Drawer from '@components/Drawer'
import DrawerLink from './DrawerLink'

const DrawerPrimary = ({
    children,
}) => {
    
    const [drawerOpen, setDrawerOpen] = useWireState(store.drawerOpen)
    
    const items = useMemo(() => [
        ...primaryMenuItems.map(({ label, to }) => (
            <DrawerLink key={to} to={to}>{label}</DrawerLink>
        )),
        <ThemeToggle />,
    ], [])
    
    return (
        
        <Drawer
            className="DrawerPrimary"
            open={drawerOpen}
            items={items}
            header={<ProfileHeader />}
            footer={(
                <ul className="menu">
                    <li>
                        <DrawerLink to="/signout">SIGN OUT</DrawerLink>
                    </li>
                </ul>
            )}
            toggleOpen={() => setDrawerOpen(!drawerOpen)}>
            
            {children}
        
        </Drawer>
        
    )
    
}

export default DrawerPrimary
