import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import cn from 'classnames'

import TextInput from '@components/TextInput'

import './AuthForm.css'

const AuthForm = ({
    className,
    submitLabel,
    onSubmit,
}) => {
    
    const [authInputEmail, setAuthInputEmail] = useWireState(store.authInputEmail)
    const [authInputPassword, setAuthInputPassword] = useWireState(store.authInputPassword)
    
    const handleSubmit = e => {
        e.preventDefault()
        onSubmit(authInputEmail, authInputPassword)
    }
    
    return (
        
        <div className={cn('AuthForm', { [className]: className })}>
            
            <form
                className="w-full flex flex-col justify-center items-center"
                action=""
                onSubmit={handleSubmit}>
                
                <TextInput
                    className=""
                    value={authInputEmail}
                    placeholder="you@gmail.com"
                    autoComplete="email"
                    onChange={e => setAuthInputEmail(e.target.value)} />
                
                <TextInput
                    className="mt-2"
                    type="password"
                    value={authInputPassword}
                    placeholder="password"
                    autoComplete="password"
                    onChange={e => setAuthInputPassword(e.target.value)} />
                
                <button className="btn w-full mt-4 rounded" type="submit">
                    {submitLabel}
                </button>
                
            </form>
            
        </div>
        
    )
    
}

export default AuthForm
