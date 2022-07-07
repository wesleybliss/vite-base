import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import { NS } from '@constants'
import { setNamespace } from 'react-wire-persisted'
import App from '@components/App'

setNamespace(NS)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
