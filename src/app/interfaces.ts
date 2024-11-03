
export interface IPropertyState {
    bed: number;
    bath: number;
    type: "house" | "apt" | "moving";
}

export type IFrequency = "once-off" | "onceWeek" | "twiceWeek" | "onceMonth";

export interface ISelectedExtra {
    name: string;
    price: number;
}

export interface IExtras extends ISelectedExtra {
    selected: boolean;
    icon: any;
}