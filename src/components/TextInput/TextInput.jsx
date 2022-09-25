import cn from 'classnames'

import './TextInput.css'

const TextInput = ({
    className,
    type,
    ...props
}) => {
    
    return (
        
        <input
            className={cn('TextInput', { [className]: className })}
            type={type || 'text'}
            {...props} />
        
    )
    
}

export default TextInput
