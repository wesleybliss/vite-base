import { createWire, createSelector } from '@forminator/react-wire'
import { createPersistedWire } from 'react-wire-persisted'
import { keys } from '@constants'

export const theme = createPersistedWire(keys.theme, 'business')
export const drawerOpen = createWire(false)

export const authInputEmail = createWire('')
export const authInputPassword = createWire('')

//

export * from './user'
