
export interface IPropertyState {
    bed: number;
    bath: number;
    type: "house" | "apt" | "moving";
}

export type IFrequency = "once-off" | "onceWeek" | "twiceWeek" | "onceMonth";