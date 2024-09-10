import { Outlet, Navigate } from "react-router-dom";
import { UseAdminStore } from "@/store/adminStore";

const ProteccionAdmin = () => {
    const admin = UseAdminStore(state=> state.admin)
    const sesion = UseAdminStore(state=> state.sesion)

    if(admin && admin.rol === 'administrador' && sesion){
        return (
          <Outlet/>
        )
    }else{
        return (
            <Navigate to={"/"} replace/>
        )
    }
}

export default ProteccionAdmin