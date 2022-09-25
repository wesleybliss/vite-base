import { useState } from 'react'
import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import dayjs from 'dayjs'

import Modal from '@components/Modal'
import TextInput from '@components/TextInput'

const DeleteProjectDialog = ({
    project,
    onAction,
}) => {
    
    const [open, setOpen] = useWireState(store.deleteProjectDialogOpen)
    
    return (
        
        <Modal
            className="text-left"
            open={open}
            action1Label="CANCEL"
            action1Action={() => setOpen(false)}
            action2Label="DELETE"
            action2Action={() => onAction()}>
            
            <h3>Delete Project</h3>
            
            <p className="">
                Are you sure you want to delete the project {project?.name}?
            </p>
            
        </Modal>
        
    )
    
}

export default DeleteProjectDialog
