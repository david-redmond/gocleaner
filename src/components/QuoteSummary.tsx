import React from "react";
import { IExtras, IFrequency, IPropertyState } from "@/app/interfaces";
import calculateSubtotal from "@/app/utils/calculateSubtotal";

interface IProps {
  property: IPropertyState;
  frequency: IFrequency;
  allExtras: IExtras[];
  eircode: string;
}
function QuoteSummary({ property, frequency, allExtras, eircode }: IProps) {
  const SubTotal = calculateSubtotal(property, frequency);
  const totalExtras = calculateTotalExtras(allExtras);
  const [total, setTotal] = React.useState(SubTotal.subtotal + totalExtras);
  const [user, setUser] = React.useState({
    firstname: "",
    surname: "",
    phone: "",
    email: "",
  });
  React.useEffect(() => {
    setTotal(SubTotal.subtotal + totalExtras);
  });

  const handleSubmitOrder = () => {
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
    const orderPayload = {
      orderType: "services",
      fulfilmentType: "delivery",
      paymentMethod: "cash",
      customer: user,
      timeslot: {
        day: "mon",
        time: "9.00",
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
    console.log("Order **********");
    console.log(orderPayload);
    console.log("Order END **********");
  };

  return (
    <section className={"section"}>
      <h2>Your Quote</h2>
      <div className={"quoteBox"}>
        <p>Your cleaning is scheduled for Dec 20th, 11:00am</p>
        <div className={"quoteItem"}>
          <p>
            Full {property.type} cleaning, including {property.bed} Bedrooms and{" "}
            {property.bath} Bathrooms.
          </p>
          <p>€{Number(SubTotal.subtotal).toFixed(2)}</p>
        </div>

        {allExtras.map((extra: IExtras, index: number) => {
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
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
          <input
            type="text"
            placeholder={"Surname"}
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </div>
        <div className={"userInputGroup"}>
          <input
            type="tel"
            placeholder={"Phone no."}
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder={"Email"}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button onClick={handleSubmitOrder} className={"submitButton"}>
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
