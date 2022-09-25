import { useMemo } from 'react'
import cn from 'classnames'

const SimpleTable = ({
    className,
    keys,
    items,
}) => {
    
    const id = useMemo(() => {
        return Math.round(Date.now() * Math.random())
    }, [])
    
    return (
        
        <table className={cn('SimpleTable', { [className]: className })}>
            
            <thead>
                <tr>
                    {keys.map(({ slug, label }) => (
                        <th key={`${id}-${slug}`}>{label}</th>
                    ))}
                </tr>
            </thead>
            
            <tbody>
                {items.map(it => (
                    <tr key={`${id}-${it.id}`}>
                        {keys.map(({ slug }) => (
                            <td key={`${id}-${it.id}-${slug}`}>
                                {it[slug]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            
        </table>
        
    )
    
}

export default SimpleTable
