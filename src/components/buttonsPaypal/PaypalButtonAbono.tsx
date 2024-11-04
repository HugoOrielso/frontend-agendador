import { customAxios } from '@/axios/axios.interceptor';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalButtonAbono = () => {
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
                                        quantity: "50",
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
                            const transaction =
                                orderData.purchase_units[0].payments.captures[0];
                            alert(
                                `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                            );
                            console.log(
                                "Capture result",
                                orderData,
                                JSON.stringify(orderData, null, 2)
                            );
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
            />
        </div>
  )
}

export default PaypalButtonAbono