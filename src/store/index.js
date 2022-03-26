import { createWire, createSelector } from '@forminator/react-wire'
import { createPersistedWire } from 'react-wire-persisted'
import { keys } from '@constants'

export const counter = createWire(0)

export const persistedCounter = createPersistedWire(keys.persistedCounter, 0)

export const theme = createPersistedWire(keys.theme, 'light')
