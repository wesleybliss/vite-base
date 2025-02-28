import { createWire, createSelector } from '@forminator/react-wire'

export const projects = createWire([])

export const hasProjects = createSelector({
    get: ({ get }) => get(projects)?.length > 0,
})
