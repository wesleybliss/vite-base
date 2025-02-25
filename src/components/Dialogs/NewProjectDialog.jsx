import { useState, useEffect } from 'react'
import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import dayjs from 'dayjs'

import Modal from '@components/Modal'
import TextInput from '@components/TextInput'

const NewProjectDialog = ({
    onAction,
}) => {
    
    const [defaultName, setDefaultName] = useState(`Project ${dayjs().format()}`)
    const [inputNewName, setInputNewName] = useState(defaultName)
    
    const [open, setOpen] = useWireState(store.newProjectDialogOpen)
    
    useEffect(() => setDefaultName(`Project ${dayjs().format()}`), [open])
    
    return (
        
        <Modal
            className="text-left"
            open={open}
            action1Label="CANCEL"
            action1Action={() => setOpen(false)}
            action2Label="CREATE"
            action2Action={() => onAction(inputNewName)}>
            
            <h3>New Project</h3>
            
            <label className="block mt-5" htmlFor="name">Project Name</label>
            
            <TextInput
                className=""
                name="name"
                value={inputNewName}
                placeholder={`Project ${dayjs().format()}`}
                autoComplete="off"
                onChange={e => setInputNewName(e.target.value)} />
            
        </Modal>
        
    )
    
}

export default NewProjectDialog
