import {NavLink} from 'react-router-dom'
import { CalendarCheck, CalendarDates } from './Icons'

const Aside = () => {
  const url = window.location.href.split("/")[3]
  

  return (
    <aside className='flex w-full md:h-full border-r md:min-h-screen md:relative md:max-w-[250px]'>
        <ul className='flex w-full flex-wrap md:flex-col items-center justify-start md:grow gap-2'>
            <li className='flex w-full items-start'>
               <NavLink to={"/"}  className={`${url === 'incontrope' || url === 'incontrosbt' ? 'bg-[#cddaffa6] custom-text-shadow-white' : null} flex w-full items-center gap-2 p-3`}> 
                <span className='text-green-400'> <CalendarCheck/>  </span> 
                <span >Creare appuntamenti</span>  
               </NavLink>
            </li>
            <li className='flex w-full items-start '>
               <NavLink to={"/lemieappuntamenti"} className={`${url === 'lemieappuntamenti' ? 'bg-[#cddaffa6] custom-text-shadow-white' : null}  flex w-full items-center gap-2 p-3`} > 
                <span className='text-yellow-400'><CalendarDates/></span> 
                <span>Le mie appuntamenti</span>
               </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Aside