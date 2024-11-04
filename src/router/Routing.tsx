import {Route, Routes, BrowserRouter} from 'react-router-dom'
import StartView from '@/components/StartView'
import Pescara from '@/components/Incontro/Pescara'
import SamBe from '@/components/Incontro/SamBe'
import Appuntamenti from '@/components/Appuntamenti'
import AdminInicio from '@/components/Private/AdminInicio'
import AdminLogin from '@/components/Private/AdminLogin'
import ProteccionAdmin from '@/components/Private/ProteccionAdmin'
import PublicProteccion from '@/components/PublicProteccion'
import ConfirmarCita from '@/components/Incontro/ConfirmarCita'
import { Toaster } from 'sonner'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicProteccion/>}>
          <Route path='/' element={<StartView/>} />
          <Route path='/incontrope' element={<Pescara />} />
          <Route path='/incontrosbt' element={<SamBe />} />
          <Route path='/lemieappuntamenti' element={<Appuntamenti />} />
          <Route path='/administrazione' element={<AdminLogin/>} />
          <Route path='/confirmare-apputamenti' element={<ConfirmarCita/>} />
        </Route>
        
        <Route element={<ProteccionAdmin/>}>
          <Route path='/administrazione/inizio' element={<AdminInicio/>} />
        </Route>
      </Routes>
      <Toaster richColors/>
    </BrowserRouter>
  )
}

export default Routing