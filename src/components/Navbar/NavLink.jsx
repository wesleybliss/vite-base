import cn from 'classnames'

import { Link } from 'react-router-dom'

const NavLink = ({
    className,
    children,
    ...props
}) => {
    
    return (
        
        <Link
            className={cn(
                'NavLink mr-3 my-2 px-1 py-1',
                'opacity-60 hover:opacity-100 text-sm font-bold',
                'transition-opacity duration-500 ease-in-out', {
                    [className]: className,
                },
            )}
            {...props}>
            {children}
        </Link>
        
    )
    
}

export default NavLink
