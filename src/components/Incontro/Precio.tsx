import { UseCalendarStore } from "@/store/calendarStore";
import { useState, ChangeEvent } from "react";

const Precio: React.FC = () => {
    const setAbono = UseCalendarStore((state) => state.setAbono);
    const [showMinPrice, setMinPrice] = useState<boolean>(false);

    function changePrice(event: ChangeEvent<HTMLSelectElement>) {
        if(event.target.value === "true"){
            setMinPrice(true);
            setAbono(showMinPrice)
        }else{
            setMinPrice(false);
            setAbono(showMinPrice)
        }
    }

    return (
        <div className="w-full p-2 h-full items-center justify-center gap-2 flex flex-col mx-2 shadow-md">
            <select name="priceOption" id="priceOption" className="w-full " onChange={changePrice}>
                <option value="">Pagare totale</option>
                <option value="true">Pagare 50€</option>
            </select>

        </div>
    );
};

export default Precio;
