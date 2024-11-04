import { UseAdminStore } from "@/store/adminStore"
import {Drawer} from 'vaul'
import { Tools } from "../Icons"

const HeaderAdmin = () => {
  const logout = UseAdminStore(state => state.logoutAdmin)
  return (
  <aside className='fixed top-0 left-0 flex w-full bg-transparent  z-[99999999]'>
  <Drawer.Root >
      <Drawer.Trigger asChild>
        <button className='b-zinc-200 p-4 border border-zinc-600 rounded m-2'> <Tools/> </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium text-2xl mb-4">
                Opzioni
              </Drawer.Title>
              <ul className='flex w-full flex-wrap lg:flex-col lg:items-center justify-start lg:grow gap-2'>
                <button onPointerDown={logout}> Logout </button>
              </ul>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    </aside>
  )
}

export default HeaderAdmin