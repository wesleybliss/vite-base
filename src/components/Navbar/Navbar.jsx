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
        
        <nav className="Navbar w-full max-w-screen-2xl mx-auto flex items-center content-center pl-4 z-10">
            
            <div className="flex items-center content-center flex-grow h-full">
                <Link
                    className="branding mr-3 my-2 px-1 py-1 opacity-60 hover:opacity-100 font-bold
                        transition-opacity duration-500 ease-in-out"
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
