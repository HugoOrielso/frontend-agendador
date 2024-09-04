import './App.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Routing from './router/Routing'

function App() {
  return (
    <>
      <div className='flex flex-col items-start justify-center'>
        <Routing/>
      </div>
    </>
  )
}

export default App
