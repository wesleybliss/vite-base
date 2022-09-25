import api from '@lib/api'
import * as store from '@store'

export const createProject = async name => {
    
    const res = await api.post('/projects', { name })
    
    if (!res.error)
        store.projects.setValue([
            ...(store.projects.getValue() ?? []),
            res,
        ])
    
    return res
    
}

export const fetchProjects = async () => {
    
    const res = await api.get('/projects')
    
    if (!res.error)
        store.projects.setValue(res)
    
    return res
    
}

export const deleteProject = async id => {
    
    const res = await api.delete(`/projects/${id}`)
    
    if (!res.error)
        store.projects.setValue(
            store.projects.getValue()
                .filter(it => it.id !== id)
        )
    
    return res
    
}
