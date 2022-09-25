import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useConditionalRedirect = (observable, conditionFn, target = '/') => {
    
    const navigate = useNavigate()
    
    useEffect(() => {
        
        if (conditionFn())
            navigate(target)
        
    }, [observable])
    
}
