import { IFrequency, IPropertyState } from "@/app/interfaces";
import discounts from "./discounts";

interface IResult {
  onceOff: number;
  onceWeek: number;
  twiceWeek: number;
  onceMonth: number;
  subtotal: number;
  hours: number;
}
export default (property: IPropertyState, frequency: IFrequency): IResult => {
  const basicHours = 3;
  const basicNumber = 85;
  let onceOffPrice = basicNumber;
  let hours = basicHours;
  const extraRooms = property.bath + property.bed - 2;

  if (extraRooms > 0) {
    onceOffPrice = basicNumber + extraRooms * 5;
  }
  if (extraRooms > 4) {
    hours = basicHours + extraRooms * 0.25;
  }

  const priceObject = {
    onceOff: onceOffPrice,
    onceWeek: onceOffPrice * ((100 - discounts.onceWeek) / 100),
    twiceWeek: onceOffPrice * ((100 - discounts.twiceWeek) / 100),
    onceMonth: onceOffPrice * ((100 - discounts.onceMonth) / 100),
    hours
  };

  switch (frequency) {
    case "onceWeek": {
      return {
        ...priceObject,
        subtotal: priceObject.onceWeek,
      };
    }
    case "twiceWeek": {
      return {
        ...priceObject,
        subtotal: priceObject.twiceWeek,
      };
    }
    case "onceMonth": {
      return {
        ...priceObject,
        subtotal: priceObject.onceMonth,
      };
    }
    case "once-off":
    default: {
      return {
        ...priceObject,
        subtotal: onceOffPrice,
      };
    }
  }
};
