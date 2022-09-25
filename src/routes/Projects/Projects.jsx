import { useState, useEffect } from 'react'
import { useWireValue } from '@forminator/react-wire'
import * as store from '@store'
import * as actions from '@actions'
import cn from 'classnames'

import Button from '@components/Button'
import SimpleTable from '@components/SimpleTable'

import './Projects.css'

const Projects = () => {
    
    const projects = useWireValue(store.projects)
    
    const onCreateProjectClick = () => {
        
    }
    
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
                        onClick={onCreateProjectClick}>
                        NEW
                    </Button>
                </div>
            </header>
            
            <SimpleTable
                className="table-auto w-full text-left"
                keys={[
                    { slug: 'id', label: 'ID', },
                    { slug: 'name', label: 'Name', },
                    { slug: 'created', label: 'Created', },
                    { slug: 'updated', label: 'Updated', },
                ]}
                items={projects ?? []} />
            
        </div>
        
    )
    
}

export default Projects
