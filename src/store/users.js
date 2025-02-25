import { createWire, createSelector } from '@forminator/react-wire'
import { createPersistedWire } from 'react-wire-persisted'
import { keys } from '@constants'
import md5 from 'md5'

export const user = createPersistedWire(keys.user, null)

export const isAuthenticated = createSelector({
    get: ({ get }) => get(user)?.token?.length > 0
})

export const avatar = createSelector({
    get: ({ get }) => {
        if (!get(user)?.email?.length) return null
        try {
            const hash = md5(get(user).email.toLowerCase())
            return `https://www.gravatar.com/avatar/${hash}`
        } catch (e) {
            console.warn('store/avatar', e)
            return null
        }
    }
})
