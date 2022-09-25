import api from '@lib/api'
import * as store from '@store'

export const fetchProjects = async () => {
    
    const res = await api.get('/projects')
    
    if (!res.error)
        store.projects.setValue(res)
    
    return res
    
}
