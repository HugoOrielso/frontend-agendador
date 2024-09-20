import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CustomAxiosAdmin } from './axios/axios.interceptor.tsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

CustomAxiosAdmin()
createRoot(document.getElementById('root')!).render(
    <PayPalScriptProvider options={{
        clientId: "AUKNYvCuTiIgD9MbXhLFSgP8TGzX7OUf3obpVNdYV-puvZaHSn_8zFrLpdbps6X5_iNLFp7ioxuNoJ10",
        currency: "EUR",
        components: "buttons"
    }}>
        <App />
    </PayPalScriptProvider>
)
