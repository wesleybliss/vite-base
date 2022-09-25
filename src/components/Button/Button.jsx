import { useRef, useState, useEffect } from 'react'
import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import cn from 'classnames'

import './Button.css'

const Button = ({
    className,
}) => {
    
    return (
        
        <div className={cn('Button', { [className]: className })}>
            
            @todo
            
        </div>
        
    )
    
}

export default Button
