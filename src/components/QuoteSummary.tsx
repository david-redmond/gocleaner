import React from 'react';
import {IFrequency, IPropertyState} from "@/app/interfaces";
import calculateSubtotal from "@/app/utils/calculateSubtotal";

interface IProps {
    property: IPropertyState;
    frequency: IFrequency
}
function QuoteSummary({property, frequency}: IProps) {
    const SubTotal = calculateSubtotal(property, frequency)
    return (
        <section className={"section"}>
            <h2>Your Quote</h2>
            <div>
                <p>Your cleaning is scheduled for Dec 20th, 11:00am</p>
                <div className={"quoteItem"}>
                    <p>Full {property.type} cleaning, including {property.bed} Bedrooms and {property.bath} Bathrooms.</p>
                    <p>€{Number(SubTotal.subtotal).toFixed(2)}</p>
                </div>

                <div className={"quoteItem"}>
                    <p>Total</p>
                    <p>€{Number(SubTotal.subtotal).toFixed(2)}</p>
                </div>
                <button type="submit" className={"submitButton"}>
                    Pay on the Day
                </button>
            </div>
        </section>
    );
}

export default QuoteSummary;