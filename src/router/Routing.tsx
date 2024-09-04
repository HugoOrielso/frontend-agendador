import {Route, Routes, BrowserRouter} from 'react-router-dom'
import StartView from '@/components/StartView'
import Pescara from '@/components/Incontro/Pescara'
import SamBe from '@/components/Incontro/SamBe'
import Appuntamenti from '@/components/Appuntamenti'

const Routing = () => {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path='/' element={<StartView/>} />
          <Route path='/incontrope' element={<Pescara />} />
          <Route path='/incontrosbt' element={<SamBe />} />
          <Route path='/lemieappuntamenti' element={<Appuntamenti />} />
        </Routes>
    
    
    </BrowserRouter>
  )
}

export default Routing