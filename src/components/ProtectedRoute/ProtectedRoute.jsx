import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({
    children,
}) => {
    
    const user = useWireValue(store.user)
    
    if (!user?.email?.length) {
        // console.warn('Not authenticated')
        return <Navigate to="/" />
    }
    
    return children
    
}

export default ProtectedRoute
