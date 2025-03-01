import * as rwp from 'react-wire-persisted'

const { key, getPrefixedKeys } = rwp.utils

export const NS = 'react-base'

//

key('theme')

key('user')

//

export const themes = ['light', 'dark']
export const drawerEnabled = false

export const primaryMenuItems = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'PROJECTS', to: '/projects' },
]

export const primaryMenuItemsBottom = [
    { label: 'SIGN OUT', to: '/signout' },
]

const prefixedKeys = getPrefixedKeys(NS)

export { prefixedKeys as keys }
