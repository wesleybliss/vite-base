import * as rwp from 'react-wire-persisted'

const { key, getPrefixedKeys } = rwp.utils

export const NS = `react-base`

//

key('theme')

key('persistedCounter')

//

export const themes = ['light', 'dark']

const prefixedKeys = getPrefixedKeys(NS)

export { prefixedKeys as keys }
