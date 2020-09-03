---
title: 'JS: PayPal checkout'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

PayPal Developer setup:<br/>

Step 1: we need apply a PayPal business account; <br/>
Step 2: go to https://developer.paypal.com/ <br/>
Step 3: find "dashboard"! <br/>
[](http://)
Step 4: Create App <br/>
Step 5: find Live, and get Client ID <br/>


PayPal, React Code demo:

```js
import React, { useState, useRef, useEffect} from "react";

function Payment(){
    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 1.77,
        descrition: "fancy chair, like new",
        img: "../images/candle.jpg"
    };

    useEffect(()=>{
        //load PayPal script
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id= [ Client ID]";
        script.addEventListener("load", ()=>setLoaded(true));
        document.body.appendChild(script);

        if(loaded){
            setTimeout( ()=>{
                window.paypal.Buttons({
                    createOrder:(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    descrition: product.descrition,
                                    amount: {
                                        currency_code: "USD",
                                        value: product.price
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: async (data, actions)=>{
                        const order = await actions.order.capture();
                        setPaidFor(true);
                        console.log(order);
                    },
                }).render(paypalRef);
            });
        }


    });
    return(
        <div>
            {paidFor ? (
                <div>
                    <h1>You had bought it</h1>
                </div>
            ):(
                <div>
                    <h2 className= "payment-h2">
                        {product.descrition} for ${product.price}
                    </h2>
                    <div ref={v=>(paypalRef = v)}/>
                </div>
            )}

        </div>
    )

}

export default Payment;
```

[Reference](https://fireship.io/lessons/paypal-checkout-frontend/)