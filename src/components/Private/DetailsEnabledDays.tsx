import { UseAdminStore } from '@/store/adminStore'

const DetailsEnabledDays = () => {
    const detailsDay = UseAdminStore(state => state.daySelected) 
    const stateDay = UseAdminStore(state => state.stateOfDay) 
    return (
      <>
        {stateDay === 'enabled' &&
            <div className='flex flex-col items-center gap-3 justify-between w-full max-w-[500px] p-2 border sm:flex-row sm:gap-0'>

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
                                        item.id === null ?
                                        <td className='p-2 text-left border border-[#ddd]'> Libre </td>
                                        :
                                        <td className='p-2 text-left border border-[#ddd]'> {item.id} </td>
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

                            <span className='block'>Stato: {stateDay} </span>
                            <button className='bg-gradient-to-r p-3 from-red-600 to-red-400 text-white rounded transition-all duration-300 hover:scale-105'>Desabilitare</button>
                        </div>
                    }
                </div>
            </div>
        }
      </>
    )
}

export default DetailsEnabledDays