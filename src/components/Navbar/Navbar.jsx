import { useMemo } from 'react'
import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import { drawerEnabled, primaryMenuItems } from '@constants'

import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import AccountLink from './AccountLink'
import Dropdown from '@components/Dropdown'
import ThemeToggle from '@components/ThemeToggle'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
    
    const [drawerOpen, setDrawerOpen] = useWireState(store.drawerOpen)
    
    const onDrawerToggleClick = e => {
        e.preventDefault()
        setDrawerOpen(!drawerOpen)
    }
    
    const DrawerToggleIcon = useMemo(() => {
        return drawerOpen ? FaTimes : FaBars
    }, [drawerOpen])
    
    return (
        
        <nav className="Navbar">
            
            <div className="flex items-center content-center flex-grow h-full">
                <Link
                    className="branding"
                    to="/">
                    {/* eslint-disable-next-line no-restricted-globals */}
                    {document.title?.toUpperCase() ?? ''}
                </Link>
            </div>
            
            <div className="flex items-center content-center">
                
                {primaryMenuItems.map(({ label, to }) => (
                    <NavLink key={to} to={to}>{label}</NavLink>
                ))}
                
                {drawerEnabled ? <AccountLink /> : (
                    <Dropdown
                        className="dropdown-end"
                        labelClassName=""
                        label={<AccountLink onClick={e => e.preventDefault()} />}
                        items={[
                            ...primaryMenuItems.map(({ label, to }) => (
                                <Link key={to} to={to}>{label}</Link>
                            )),
                            <Link to="/signout">SIGN OUT</Link>,
                        ]} />
                )}
                
                {drawerEnabled && (
                    <NavLink to={'/'} onClick={onDrawerToggleClick}>
                        <DrawerToggleIcon className="text-2xl" />
                    </NavLink>
                )}
                
                {!drawerEnabled && <ThemeToggle />}
            
            </div>
        
        </nav>
        
    )
    
}

export default Navbar
