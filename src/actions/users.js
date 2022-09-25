import api from '@lib/api'
import * as store from '@store'

/**
 * Signs up a new user
 * If the user already exists and is logged in, a new token will be returned
 * 
 * @param {String} email Email address
 * @param {String} password Password
 * @returns {Object} user User profile + token
 */
export const signUp = async (email, password) => {
    
    const res = await api.post('/signup', { email, password })
    
    if (!res.error)
        store.user.setValue(res)
    
    return res
    
}

export const signIn = async (email, password) => {
    
    const res = await api.post('/signin', { email, password })
    
    if (!res.error)
        store.user.setValue(res)
    
    return res
    
}

/**
 * Fetches a user's profile
 * If `userId` is null (default), the full profile of
 * the currently logged in user will be returned
 * 
 * @param {Integer} [userId] Optional user's ID to fetch
 */
export const fetchProfile = async (userId = null) => {
    
    const res = await api.get(userId ? `/users/${userId}` : '/users')
    
    store.user.setValue({
        ...store.user.getValue(),
        ...res.data,
    })
    
    return res
    
}
