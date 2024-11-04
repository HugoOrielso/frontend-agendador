import { CalendarCheck, CalendarDates, Tools } from './Icons'
import {Drawer} from 'vaul'


const Aside = () => {
  const url = window.location.href.split("/")[3]
  

  return (
  <aside className=' top-0 left-0 flex w-full bg-transparent z-[99999999] '>
  <div className='z-[9999]'>
  <Drawer.Root >
      <Drawer.Trigger asChild>
        <button className='b-zinc-200 p-3 m-1 border border-zinc-600 rounded '> <Tools/> </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content  className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title  className="font-medium text-2xl mb-4">
                Opzioni
              </Drawer.Title>
              <p id="drawer-description" className="sr-only">Seleziona un'opzione dal menu.</p>
              <ul className='flex w-full flex-wrap lg:flex-col lg:items-center justify-start lg:grow gap-2'>
                <li className='flex w-full items-center justify-center'>
                   <a href={"/"}  className={`${url === 'incontrope' ? 'bg-[#cddaffa6] custom-text-shadow-white' : null}  flex w-full items-center gap-2 p-3 hover:border-zinc-600 border rounded-lg text-lg`} > 
                    <span className='text-green-400'> <CalendarCheck/>  </span> 
                    <span >Creare appuntamenti</span>  
                   </a>
                </li>
                <li className='flex w-full items-start '>
                   <a href={"/lemieappuntamenti"}  className={`${url === 'lemieappuntamenti' ? 'bg-[#cddaffa6] custom-text-shadow-white' : null}  flex w-full items-center gap-2 p-3 hover:border-zinc-600 border rounded-lg text-lg`} > 
                    <span className='text-yellow-400'><CalendarDates/></span> 
                    <span>Le mie appuntamenti</span>
                   </a>
                </li>
              </ul>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    </div>
    </aside>
  )
}

export default Aside