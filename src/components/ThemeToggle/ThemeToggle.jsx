import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as actions from '@actions'
import cn from 'classnames'

import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({
    className,
}) => {
    
    const theme = useWireValue(store.theme)
    
    const ThemeIcon = theme === 'light' ? FaSun : FaMoon
    
    return (
        
        <div className={className}>
            
            <ThemeIcon
                className={cn(
                    'ThemeToggle',
                    'mr-3 my-5 px-1 py-1',
                    'text-xl opacity-60 hover:opacity-100 cursor-pointer',
                    'transition-opacity duration-500 ease-in-out', {
                        [className]: className,
                    },
                )}
                onClick={actions.toggleTheme} />
        
        </div>
        
    )
    
}

ThemeToggle.defaultProps = {
    className: '',
}

export default ThemeToggle
