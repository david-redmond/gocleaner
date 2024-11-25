import React from "react";
import { IExtras, IFrequency, IPropertyState } from "@/app/interfaces";
import calculateSubtotal from "@/app/utils/calculateSubtotal";
import { useRouter } from 'next/navigation';
import analyticsEventTracking from "@/app/utils/analyticsEventTracking";
import {checkoutEndpoint} from "@/constants";

interface IProps {
  property: IPropertyState;
  frequency: IFrequency;
  allExtras: IExtras[];
  eircode: string;
  day: string;
  time: string;
}
function QuoteSummary({
  property,
  frequency,
  allExtras,
  eircode,
  day,
  time,
}: IProps) {
  const SubTotal = calculateSubtotal(property, frequency);
  const totalExtras = calculateTotalExtras(allExtras);
  const [total, setTotal] = React.useState(SubTotal.subtotal + totalExtras);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [user, setUser] = React.useState({
    firstname: "",
    surname: "",
    phone: "",
    email: "",
  });
  const router = useRouter();

  React.useEffect(() => {
    setTotal(SubTotal.subtotal + totalExtras);
    setIsDisabled(
      !user.email || !user.phone || !user.firstname || !user.surname,
    );
  },  [SubTotal.subtotal, totalExtras, user.email, user.phone, user.firstname, user.surname]);

  async function postData(url = '', data = {}) {
    try {
      const response = await fetch(url, {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse the JSON response
      router.push(`/confirmation?orderRef=${result.orderRef}`);
      return result; // Return the result
    } catch (error) {
      console.error('Error:', error); // Log any errors
    }
  };

  const GenerateOrderDetails = () => {
    const additionalOptions = allExtras
        .map((opt) => {
          if (opt.selected) {
            return {
              name: opt.name,
              price: opt.price,
            };
          }
        })
        .filter((opt) => !!opt);
    return {
      orderType: "services",
      fulfilmentType: "delivery",
      paymentMethod: "cash",
      customer: user,
      timeslot: {
        day,
        time,
        frequency,
      },
      basket: {
        items: [],
        services: [
          {
            serviceId: "cleaner",
            zipCode: eircode,
            additionalOptions,
            attributes: {
              bed: property.bed,
              bath: property.bath,
              propertyType: property.type,
            },
          },
        ],
        total: Number(total).toFixed(2),
      },
    };
  }
  const handleSubmitOrder = async () => {
    if (!user.email || !user.phone || !user.firstname || !user.surname) {
      return;
    }


    const orderPayload = GenerateOrderDetails();
    analyticsEventTracking({
      action: 'purchase',
      category: 'Ecommerce',
      label: 'Product Purchase',
      value: orderPayload.basket.total,
    });
    await postData(checkoutEndpoint, orderPayload);

  };

  return (
    <section className={"section"}>
      <h2 className={"h2-accent"}>Your Quote</h2>
      <div className={"quoteBox"}>
        {frequency === "once-off" ? (
          <p>Your cleaning is scheduled for Dec 20th, 11:00am</p>
        ) : (
          <p>
            Your cleaning is scheduled for every {frequency === 'twiceWeek' ? "second" : frequency === "onceMonth" ? "forth" : "" } {day} at {time}.
          </p>
        )}
        <p className={eircode ? "" : "noEircode"}>
          {eircode
            ? `Your Eircode is ${eircode}`
            : "Please add your Eircode above."}
        </p>
        <div className={"quoteItem"}>
          <p>
            Full {property.type} cleaning, including {property.bed} Bedrooms and{" "}
            {property.bath} Bathrooms.
          </p>
          <p>€{Number(SubTotal.subtotal).toFixed(2)}</p>
        </div>

        {allExtras.map((extra: IExtras) => {
          if (extra.selected) {
            return (
              <div className={"quoteItem"} key={extra.name}>
                <p>{extra.name}</p>
                <p>€{Number(extra.price).toFixed(2)}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className={"quoteItem total"}>
          <p>Total</p>
          <p>€{Number(total).toFixed(2)}</p>
        </div>
        <div className={"userInputGroup"}>
          <input
            type="text"
            placeholder={"First name"}
            value={user.firstname}
            onChange={(e) => {
              setUser({ ...user, firstname: e.target.value });
              analyticsEventTracking({
                action: 'input_change',
                category: 'User Interaction',
                label: `firstname`,
                value: e.target.value,
              });
            }}
          />
          <input
            type="text"
            placeholder={"Surname"}
            value={user.surname}
            onChange={(e) => {
              setUser({ ...user, surname: e.target.value });
              analyticsEventTracking({
                action: 'input_change',
                category: 'User Interaction',
                label: `surname`,
                value: e.target.value,
              });
            }}
          />
        </div>
        <div className={"userInputGroup"}>
          <input
            type="tel"
            placeholder={"Phone no."}
            value={user.phone}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
              analyticsEventTracking({
                action: 'input_change',
                category: 'User Interaction',
                label: `phone`,
                value: e.target.value,
              });
            }}
          />
          <input
            type="email"
            placeholder={"Email"}
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value })
              analyticsEventTracking({
                action: 'input_change',
                category: 'User Interaction',
                label: `email`,
                value: e.target.value,
              });
            }}
          />
        </div>
        <button
          onClick={handleSubmitOrder}
          className={"submitButton"}
          disabled={isDisabled}
        >
          Confirm & Pay on the Day
        </button>
      </div>
    </section>
  );
}

export default QuoteSummary;

const calculateTotalExtras = (allExtras: IExtras[]) => {
  let total: number = 0;
  allExtras.forEach((extra: IExtras) => {
    if (!!extra.selected) {
      total += extra.price;
    }
  });
  return total;
};
