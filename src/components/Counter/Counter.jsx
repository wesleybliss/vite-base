import { useWireState } from '@forminator/react-wire'
import * as store from '@store'

const Counter = ({
    className,
}) => {
    
    const [counter, setCounter] = useWireState(store.counter)
    
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
                onClick={() => setCounter(counter + 1)}>
                counter
            </button>
            
            <div>has been clicked {counter} times.</div>
            
        </div>
        
    )
    
}

export default Counter
