import cn from 'classnames'

import './Drawer.css'

const Drawer = ({
    className,
    children,
    open = false,
    items = [],
    header = null,
    footer = null,
    onItemRender = (item/* , index */) => item,
    toggleOpen = () => {},
}) => {
    
    return (
        
        <div className={cn('Drawer drawer drawer-end', className)}>
            
            <input
                className="drawer-toggle"
                type="checkbox"
                checked={open}
                onChange={toggleOpen} />
            
            <div className="drawer-content">
                {children}
            </div>
            
            <div className="drawer-side">
                
                <label
                    className="drawer-overlay"
                    onClick={toggleOpen} />
                
                <div className="flex flex-col p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    
                    {header}
                    
                    <ul className="menu flex-grow">
                        {items?.map((it, i) => (
                            <li key={`drawer-item-${i}`}>
                                {onItemRender(it, i)}
                            </li>
                        ))}
                    </ul>
                    
                    {footer}
                
                </div>
            
            </div>
        
        </div>
        
    )
    
}

export default Drawer
