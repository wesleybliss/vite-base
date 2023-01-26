import { useEffect } from 'react'
import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import { themes } from '@constants'

export const useTheme = () => {
    
    const theme = useWireValue(store.theme)
    
    const applyTheme = () => {
        themes.forEach(it => {
            if (document.documentElement.classList.contains(it))
                document.documentElement.classList.remove(it)
        })
        document.documentElement.classList.add(theme)
    }
    
    useEffect(applyTheme, [theme])
    
}
