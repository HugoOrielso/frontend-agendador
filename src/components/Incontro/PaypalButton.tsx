import { customAxios } from '@/axios/axios.interceptor'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PaypalButton = () => {

    
    return (
        <PayPalButtons 
            style={{
                shape: "rect",
                layout: "vertical",
                color: "gold",
                label: "paypal",
                
            }} 
            createOrder={async () => {

                try {
                    const response = await customAxios.post("paypal/orders",
                        {   
                            cart: [
                                {
                                    id: "1",
                                    quantity: "20",
                                },
                            ]
                        }, 
                        {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const orderData = response.data
                    
                    
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
                    const orderData =  response.data
                    console.log("order: " , orderData);
                    
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you message

                    const errorDetail = orderData?.details?.[0];

                    if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                        // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                        // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                        return actions.restart();
                    } else if (errorDetail) {
                        // (2) Other non-recoverable errors -> Show a failure message
                        throw new Error(
                            `${errorDetail.description} (${orderData.debug_id})`
                        );
                    } else {
                        // (3) Successful transaction -> Show confirmation or thank you message
                        // Or go to another URL:  actions.redirect('thank_you.html');
                        const transaction = orderData.purchase_units[0].payments.captures[0];
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
  )
}

export default PaypalButton