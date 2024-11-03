import React from 'react';
import {IExtras, IFrequency, IPropertyState} from "@/app/interfaces";
import calculateSubtotal from "@/app/utils/calculateSubtotal";

interface IProps {
    property: IPropertyState;
    frequency: IFrequency
    allExtras: IExtras[];
    confirmPurchase: () => void;
}
function QuoteSummary({property, frequency, allExtras, confirmPurchase}: IProps) {
    const SubTotal = calculateSubtotal(property, frequency);
    const totalExtras = calculateTotalExtras(allExtras);
    const [total, setTotal] = React.useState(SubTotal.subtotal + totalExtras);

    React.useEffect(() => {
        setTotal(SubTotal.subtotal + totalExtras);
    }, );

    return (
        <section className={"section"}>
            <h2>Your Quote</h2>
            <div className={"quoteBox"}>
                <p>Your cleaning is scheduled for Dec 20th, 11:00am</p>
                <div className={"quoteItem"}>
                    <p>Full {property.type} cleaning, including {property.bed} Bedrooms and {property.bath} Bathrooms.</p>
                    <p>€{Number(SubTotal.subtotal).toFixed(2)}</p>
                </div>

                {allExtras.map((extra: IExtras, index: number) => {
                    if (extra.selected) {
                        return (
                            <div className={"quoteItem"} key={extra.name}>
                                <p>{extra.name}</p>
                                <p>€{Number(extra.price).toFixed(2)}</p>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })}
                <div className={"quoteItem total"}>
                    <p>Total</p>
                    <p>€{Number(total).toFixed(2)}</p>
                </div>
                <button onClick={confirmPurchase} className={"submitButton"}>
                    Confirm, Pay on the Day
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
}