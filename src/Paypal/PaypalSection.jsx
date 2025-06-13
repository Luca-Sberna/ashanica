// PaypalSection.jsx
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalSection = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "sb", // oppure il tuo sandbox Client ID
        currency: "EUR",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) =>
          actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "5.00",
                },
              },
            ],
          })
        }
        onApprove={(data, actions) =>
          actions.order.capture().then((details) => {
            alert(`Pagamento completato da ${details.payer.name.given_name}`);
          })
        }
        onError={(err) => {
          console.error("PayPal error:", err);
          alert("Errore PayPal: " + err.message);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalSection;
