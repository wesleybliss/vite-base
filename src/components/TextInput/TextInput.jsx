import cn from 'classnames'

import './TextInput.css'

const TextInput = ({
    className,
    type,
    ...props
}) => {
    
    return (
        
        <input
            className={cn('TextInput input w-full rounded', { [className]: className })}
            type={type || 'text'}
            {...props} />
        
    )
    
}

export default TextInput
