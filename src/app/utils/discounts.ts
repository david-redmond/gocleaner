import {IFrequency} from "@/app/interfaces";

type IDiscounts = {
    [key in IFrequency]: number; // Use keyof to extract the keys from IFrequency
}

const discounts: IDiscounts = {
    "once-off": 0,
    onceWeek: 15,
    twiceWeek: 10,
    onceMonth: 5
}

export default discounts;