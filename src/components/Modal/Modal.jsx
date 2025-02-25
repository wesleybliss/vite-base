import cn from 'classnames'

import './Modal.css'

const Modal = ({
    className,
    open,
    children,
    action1Label,
    action1Action,
    action2Label,
    action2Action,
}) => {
    
    if (!open) return null
    
    return (
        
        <div
            className={cn('modal', className)}
            style={{
                visibility: open ? 'visible' : 'hidden',
                opacity: open ? '1' : 0,
                pointerEvents: open ? 'auto' : 'none',
            }}>
            
            <div className="modal-box">
                
                {children}
                
                <div className="modal-action">
                    {action1Label && (
                        <label className="btn" onClick={action1Action}>
                            {action1Label}
                        </label>
                    )}
                    {action2Label && (
                        <label className="btn" onClick={action2Action}>
                            {action2Label}
                        </label>
                    )}
                </div>
                
            </div>
            
        </div>
        
    )
    
}

export default Modal
