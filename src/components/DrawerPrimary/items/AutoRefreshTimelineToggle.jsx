import { useMemo } from 'react'
import { useWireState } from '@forminator/react-wire'
import * as store from '@store'
import cn from 'classnames'

import { FaToggleOn, FaToggleOff } from 'react-icons/fa'

const AutoRefreshTimelineToggle = ({
    className,
}) => {
    
    const [autoRefreshTimeline, setAutoRefreshTimeline] = useWireState(store.autoRefreshTimeline)
    
    const onToggleAutoRefreshTimelineClick = e => {
        e.preventDefault()
        setAutoRefreshTimeline(!autoRefreshTimeline)
    }
    
    const ToggleAutoRefreshTimelineIcon = useMemo(() => {
        return autoRefreshTimeline ? FaToggleOn : FaToggleOff
    }, [autoRefreshTimeline])
    
    return (
        
        <div
            className={cn('cursor-pointer', className)}
            onClick={onToggleAutoRefreshTimelineClick}>
            
            <div className="w-full flex justify-between items-center content-center">
                
                <span>Auto refresh timeline</span>
                
                <ToggleAutoRefreshTimelineIcon className="text-2xl" />
            
            </div>
        
        </div>
        
    )
    
}

export default AutoRefreshTimelineToggle
