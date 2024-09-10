import { UseAdminStore } from "@/store/adminStore";
import { Outlet, Navigate } from "react-router-dom";



const PublicProteccion = () => {
    const adminAuth = UseAdminStore(state=> state.admin)
    

    if(adminAuth){
        return <Navigate to={"/administrazione/inizio"} replace/>
    }
    return (
      <Outlet/>
    )
}

export default PublicProteccion