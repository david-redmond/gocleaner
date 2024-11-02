import React from "react";
import SentimentNeutralTwoToneIcon from "@mui/icons-material/SentimentNeutralTwoTone";
import { IFrequency, IPropertyState } from "@/app/interfaces";
import calculateSubtotal from "@/app/utils/calculateSubtotal";
import discounts from "@/app/utils/discounts";

interface IProps {
  property: IPropertyState;
  frequency: IFrequency;
  setFrequency: (arg: IFrequency) => void;
}
export default ({ property, frequency, setFrequency }: IProps) => {
  const SubTotal = calculateSubtotal(property, frequency);
  return (
    <section className={"section"}>
      <h2>Discounts</h2>
      <div className={"radioGroup"}>
        <div
          className={
            frequency === "once-off" ? "radioLabel selected" : "radioLabel"
          }
          onClick={() => setFrequency("once-off")}
        >
          <SentimentNeutralTwoToneIcon className={"icon yellow"} />
          <div className={"radioFrequency"}>One time cleaning</div>
          <div className={"radioPrice"}>
            €{Number(SubTotal.onceOff).toFixed(2)}
          </div>
        </div>
        <div
          className={
            frequency === "onceWeek" ? "radioLabel selected" : "radioLabel"
          }
          onClick={() => setFrequency("onceWeek")}
        >
          <div className={"radioDiscount radioDiscountHighlight"}>-{discounts.onceWeek}%</div>
          <div className={"radioFrequency"}>Once a week</div>
          <div className={"radioPrice"}>
            €{Number(SubTotal.onceWeek).toFixed(2)}
          </div>
        </div>
        <div
          className={
            frequency === "twiceWeek" ? "radioLabel selected" : "radioLabel"
          }
          onClick={() => setFrequency("twiceWeek")}
        >
          <div className={"radioDiscount"}>-{discounts.twiceWeek}%</div>
          <div className={"radioFrequency"}>Every second week</div>
          <div className={"radioPrice"}>
            €{Number(SubTotal.twiceWeek).toFixed(2)}
          </div>
        </div>
        <div
          className={
            frequency === "onceMonth" ? "radioLabel selected" : "radioLabel"
          }
          onClick={() => setFrequency("onceMonth")}
        >
          <div className={"radioDiscount"}>-{discounts.onceMonth}%</div>
          <div className={"radioFrequency"}>Once a month</div>
          <div className={"radioPrice"}>
            €{Number(SubTotal.onceMonth).toFixed(2)}
          </div>
        </div>
      </div>
    </section>
  );
};
