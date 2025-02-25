import cn from 'classnames'

const Button = ({
    className,
    children,
    ...props
}) => {
    
    return (
        
        <button
            className={cn('btn', { [className]: className })}
            {...props}>
            
            {children}
            
        </button>
        
    )
    
}

export default Button
