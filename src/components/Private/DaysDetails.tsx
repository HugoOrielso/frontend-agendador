import { UseAdminStore } from "@/store/adminStore"
import DetailsEnabledDays from "./DetailsEnabledDays"
import GenerateNewDate from "./GenerateNewDate"
import { AnimatePresence, motion } from "framer-motion"

const DaysDetails = () => {
    const stateDay = UseAdminStore(state=> state.stateOfDay)
    
    return (
        <section className="flex w-full flex-col items-center my-12 px-2" >
            <AnimatePresence mode="wait">
            <motion.div
            key={stateDay}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full">
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
            </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default DaysDetails