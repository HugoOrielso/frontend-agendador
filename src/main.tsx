import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CustomAxiosAdmin } from './axios/axios.interceptor.tsx'

CustomAxiosAdmin()
createRoot(document.getElementById('root')!).render(
    <App />
)
