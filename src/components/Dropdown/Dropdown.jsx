import { useMemo } from 'react'
import cn from 'classnames'

import './Dropdown.css'

const Dropdown = ({
    className,
    labelClassName,
    label,
    items,
}) => {
    
    const id = useMemo(() => {
        return Math.round(Date.now() * Math.random())
    }, [])
    
    return (
        
        <div className={cn('Dropdown dropdown', { [className]: className })}>
            
            {typeof label === 'string' ? (
                <label
                    className={cn('label', { [labelClassName]: labelClassName })}>
                    tabIndex={0}
                    {label}
                </label>
            ) : label}
            
            <ul className="items dropdown-content menu"  tabIndex={0}>
                {items.map((it, i) => (
                    <li key={`dropdown-${id}-${i}`}>
                        <a>{it}</a>
                    </li>
                ))}
            </ul>
        
        </div>
        
    )
    
}

export default Dropdown
