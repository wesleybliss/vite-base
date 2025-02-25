import { useMemo } from 'react'
import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as actions from '@actions'
import cn from 'classnames'

import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({
    className,
}) => {
    
    const theme = useWireValue(store.theme)
    
    const themeName = useMemo(() => theme?.substring(0, 1)?.toUpperCase() + theme?.substring(1), [theme])
    const ThemeIcon = useMemo(() => theme === 'light' ? FaSun : FaMoon, [theme])
    
    return (
        
        <div
            className={cn('cursor-pointer', className)}
            onClick={actions.toggleTheme}>
            
            <div className="w-full flex justify-between items-center content-center">
                
                <span>{themeName} theme</span>
                
                <ThemeIcon className="text-xl" />
                
            </div>
            
        </div>
        
    )
    
}

export default ThemeToggle
