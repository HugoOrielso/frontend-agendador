import { UseAdminStore } from "@/store/adminStore"
import DetailsEnabledDays from "./DetailsEnabledDays"
import GenerateNewDate from "./GenerateNewDate"

const DaysDetails = () => {
    const stateDay = UseAdminStore(state=> state.stateOfDay)

    return (
        <section className="flex w-full flex-col items-center my-12 px-2" >
            {
                stateDay === 'enabled' &&
                <DetailsEnabledDays/>
            }

            {
                stateDay === 'disabled' &&

                <>
                    días deshabilitados
                </>
            }

            {
                stateDay === null &&
                <>
                    <GenerateNewDate/>
                </>
            }
        </section>
    )
}

export default DaysDetails