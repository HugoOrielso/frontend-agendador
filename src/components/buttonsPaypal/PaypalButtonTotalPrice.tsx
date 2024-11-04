import { customAxios } from "@/axios/axios.interceptor";
import { UseCalendarStore } from "@/store/calendarStore";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "sonner";

const PaypalButtonTotalPrice = () => {
    const precio = UseCalendarStore((state) => state.priceData);
    const name = UseCalendarStore(state=> state.nameUser)
    const email = UseCalendarStore(state=> state.emailUser)
    const dayConfirm = UseCalendarStore(state=> state.dayConfirm)
    const price = UseCalendarStore(state=> state.priceData)
    const paquete = UseCalendarStore(state=> state.paquete)
    async function guardar() {
        const request = await customAxios.post("calendar/date", { name: name, email: email, hour: dayConfirm?.hour, date: dayConfirm?.date, location: dayConfirm?.location, price: price, paquete: paquete }, {headers: {"Content-Type": "application/json"}})
        if (request.status === 200) {
            return true
        }
        return false
        
    }
    return (
        <div className="z-0 relative px-2 w-full items-center justify-center">
            <PayPalButtons
                style={{
                    shape: "rect",
                    layout: "vertical",
                    color: "gold",
                    label: "paypal",
                }}
                createOrder={async () => {
                    try {
                        const response = await customAxios.post(
                            "paypal/orders",
                            {
                                cart: [
                                    {
                                        id: "1",
                                        quantity: precio,
                                    },
                                ],
                            },
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }
                        );

                        const orderData = response.data;

                        if (orderData.id) {
                            return orderData.id;
                        } else {
                            const errorDetail = orderData?.details?.[0];
                            const errorMessage = errorDetail
                                ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                                : JSON.stringify(orderData);
                            throw new Error(errorMessage);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }}
                onApprove={async (data, actions) => {
                    try {
                        const response = await customAxios.post(
                            `paypal/orders/${data.orderID}/capture`,
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }
                        );
                        const orderData = response.data;
                        console.log("order: ", orderData);

                        const errorDetail = orderData?.details?.[0];

                        if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                            return actions.restart();
                        } else if (errorDetail) {
                            throw new Error(
                                `${errorDetail.description} (${orderData.debug_id})`
                            );
                        } else {
                            const sa = await guardar()
                            if(sa){
                                toast.success("todo bien")
                            }else{
                                toast.error("Ocurrió un error contactanos, la cita no se guardo pero el pago se procesó")
                            }
                            setTimeout(()=>{
                                location.href = "/"
                            },2000)
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
            />
        </div>
    );
};

export default PaypalButtonTotalPrice;
