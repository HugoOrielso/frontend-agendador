import {Route, Routes, BrowserRouter} from 'react-router-dom'
import StartView from '@/components/StartView'
import Pescara from '@/components/Incontro/Pescara'
import SamBe from '@/components/Incontro/SamBe'
import Appuntamenti from '@/components/Appuntamenti'
import AdminInicio from '@/components/Private/AdminInicio'
import AdminLogin from '@/components/Private/AdminLogin'
import ProteccionAdmin from '@/components/Private/ProteccionAdmin'
import PublicProteccion from '@/components/PublicProteccion'

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
          </Route>
          
          <Route element={<ProteccionAdmin/>}>
            <Route path='/administrazione/inizio' element={<AdminInicio/>} />

          </Route>
        </Routes>

    
    </BrowserRouter>
  )
}

export default Routing