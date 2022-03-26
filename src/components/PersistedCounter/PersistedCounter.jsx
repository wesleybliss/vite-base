import { useWireState } from '@forminator/react-wire'
import * as store from '@store'

const PersistedCounter = ({
    className,
}) => {
    
    const [persistedCounter, setPersistedCounter] = useWireState(store.persistedCounter)
    
    return (
        
        <div className={`text-gray-700 dark:text-gray-300 ${className}`}>
            
            <div>This</div>
            
            <button
                className="
                    mx-2 text-base px-4 py-2 border
                    border-gray-300 dark:border-gray-800
                    hover:bg-gray-200 dark:hover:bg-gray-900
                    text-gray-700 dark:text-gray-300
                    rounded-md
                "
                onClick={() => setPersistedCounter(persistedCounter + 1)}>
                persisted counter
            </button>
            
            <div>has been clicked {persistedCounter} times <i>(refresh the page)</i>.</div>
            
        </div>
        
    )
    
}

export default PersistedCounter
