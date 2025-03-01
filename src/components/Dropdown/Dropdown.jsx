import { useMemo } from 'react'
import cn from 'classnames'

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
                    className={cn('label btn m-1', { [labelClassName]: labelClassName })}>
                    tabIndex={0}
                    {label}
                </label>
            ) : label}
            
            <ul className="dropdown-content menu w-52 mt-4 p-2 bg-base-100 rounded-box shadow"  tabIndex={0}>
                {items.map((it, i) => (
                    <li key={`dropdown-${id}-${i}`}>
                        {it}
                    </li>
                ))}
            </ul>
        
        </div>
        
    )
    
}

export default Dropdown
