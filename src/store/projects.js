import { createWire, createSelector } from '@forminator/react-wire'
import { createPersistedWire } from 'react-wire-persisted'
import { keys } from '@constants'

export const projects = createWire([])

export const hasProjects = createSelector({
    get: ({ get }) => get(projects)?.length > 0
})
