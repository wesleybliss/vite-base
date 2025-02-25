import { useState, useEffect, useMemo } from 'react'
import { useWire, useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as actions from '@actions'
import { formatDate } from '@lib/utils'
import cn from 'classnames'

import Button from '@components/Button'
import SimpleTable from '@components/SimpleTable'
import { NewProjectDialog, DeleteProjectDialog } from '@components/Dialogs'
import { FaTrash } from 'react-icons/fa'

import './Projects.css'

const Projects = () => {
    
    const [markedDeleteProject, setMarkedDeleteProject] = useState(null)
    
    const projects = useWireValue(store.projects)
    const newProjectDialogOpen = useWire(store.newProjectDialogOpen)
    const deleteProjectDialogOpen = useWire(store.deleteProjectDialogOpen)
    
    const createProject = async name => {
        
        const res = await actions.createProject(name)
        
        if (res.error)
            console.error('createProject', res.error)
        
        newProjectDialogOpen.setValue(false)
        
    }
    
    const deleteProject = async () => {
        
        if (!markedDeleteProject) return
        
        const res = await actions.deleteProject(markedDeleteProject.id)
        
        if (res.error)
            console.error('deleteProject', res.error)
        
        deleteProjectDialogOpen.setValue(false)
        
    }
    
    const projectsWithActions = useMemo(() => {
        if (!projects) return []
        return projects?.map(it => ({
            ...it,
            actions: (
                <div className="text-right">
                    <Button
                        className="btn-square btn-ghost"
                        onClick={() => {
                            setMarkedDeleteProject(it)
                            deleteProjectDialogOpen.setValue(true)
                        }}>
                        <FaTrash className="text-red-700" />
                    </Button>
                </div>
            )
        }))
    })
    
    useEffect(() => {
        actions.fetchProjects()
    }, [])
    
    return (
        
        <div className="Projects">
            
            <header className="w-full mb-5 py-2 flex justify-between">
                <h4>Projects</h4>
                <div>
                    <Button
                        className=""
                        onClick={() => newProjectDialogOpen.setValue(true)}>
                        NEW
                    </Button>
                </div>
            </header>
            
            <SimpleTable
                className="table-auto w-full text-left"
                keys={[
                    { slug: 'id', label: 'ID', },
                    { slug: 'name', label: 'Name', },
                    { slug: 'created_at', label: 'Created', },
                    { slug: 'updated_at', label: 'Updated', },
                    { slug: 'actions', label: '', },
                ]}
                items={projectsWithActions}
                transforms={{
                    'created_at': it => formatDate(it, { unix: true }),
                    'updated_at': it => formatDate(it, { unix: true }),
                }} />
            
            <NewProjectDialog onAction={createProject} />
            <DeleteProjectDialog project={markedDeleteProject} onAction={deleteProject} />
            
        </div>
        
    )
    
}

export default Projects
