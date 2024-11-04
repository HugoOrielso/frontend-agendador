import { UseAdminStore } from '@/store/adminStore'
import { CalendarCheck } from '../Icons'
import { AnimatePresence, motion } from 'framer-motion'

const DetailsEnabledDays = () => {
    const detailsDay = UseAdminStore(state => state.daySelected) 
    const stateDay = UseAdminStore(state => state.stateOfDay) 
    const dateSelected = UseAdminStore(state => state.daySelectByAdmin) 
    
    return (
        <div className='flex flex-col w-full items-center justify-center '>
        <AnimatePresence mode='wait'>
        <h2 className='font-semibold flex text-base sm:text-2xl sm:items-center m-0 gap-2'>Detagli giorno: <span className='font-bold custom-text-shadow-blue '>{dateSelected}</span>  <span className='text-green-400'><CalendarCheck/></span> </h2>
        {stateDay === 'enabled' &&
            <motion.div 
            key={dateSelected}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='flex flex-col items-center gap-3 justify-between w-full max-w-[800px] p-2 border sm:flex-row sm:gap-0'>
                <div className='flex flex-col items-center justify-center w-full sm:w-[70%]'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='p-2 text-left border border-[#ddd]'> Ora </th>
                                <th className='p-2 text-left border border-[#ddd]'> Utente </th>
                            </tr>
                        </thead>
                        <tbody>
                        {detailsDay?.disponibilidad.map(item => {
                            return(
                                <tr key={crypto.randomUUID()}>
                                    <td className='p-2 text-left border border-[#ddd]'> {item.hour} </td>
                                    {
                                        item.user === null ?
                                        <td className='p-2 text-left border border-[#ddd]'> Libre </td>
                                        :
                                        <td className='p-2 text-left border border-[#ddd]'> {item.user} </td>
                                    }
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    {stateDay === 'enabled' &&
                        <div className='flex flex-col items-center w-full justify-center h-full'>
                            {detailsDay?.location === 'samb' ? 
                            <h2 className='font-semibold'> Salone: <span className='custom-text-shadow-blue'>Sam Benedetto</span>  </h2> : 
                            <h2 className='font-semibold'> Salone: <span className='custom-text-shadow-blue'>Pescara</span></h2> 
                            }
                            <span className='block custom-text-shadow-blue'>Stato: {stateDay === 'enabled' ? 'Abilitato': "Disabilitato"} </span>
                            <button className='bg-gradient-to-r p-3 from-red-600 to-red-400 text-white rounded transition-all duration-300 hover:scale-105'>Desabilitare</button>
                        </div>
                    }
                </div>
            </motion.div>
        }
        </AnimatePresence>
      </div>
    )
}

export default DetailsEnabledDays