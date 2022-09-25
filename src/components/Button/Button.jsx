import cn from 'classnames'

const Button = ({
    className,
    children,
}) => {
    
    return (
        
        <button className={cn('btn', { [className]: className })}>
            {children}
        </button>
        
    )
    
}

export default Button
