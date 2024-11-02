import calculateResult from "./calculateSubtotal"; // Adjust the import according to your file structure
import { IFrequency, IPropertyState } from "@/app/interfaces";

describe("calculateResult", () => {
  const basicOutput = {
    onceOff: 130,
    onceWeek: 110.5,
    twiceWeek: 117,
    onceMonth: 123.5,
  };
  it("should return correct result for one-time frequency", () => {
    const property: IPropertyState = { bed: 1, bath: 1, type: "house" };
    const frequency: IFrequency = "once-off";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...basicOutput,
      subtotal: basicOutput.onceOff,
    });
  });

  it("should return correct result for weekly frequency", () => {
    const property: IPropertyState = { bed: 1, bath: 1, type: "house" };
    const frequency: IFrequency = "onceWeek";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...basicOutput,
      subtotal: basicOutput.onceWeek,
    });
  });

  it("should return correct result for twice a week frequency", () => {
    const property: IPropertyState = { bed: 1, bath: 1, type: "house" };
    const frequency: IFrequency = "twiceWeek";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...basicOutput,
      subtotal: basicOutput.twiceWeek,
    });
  });

  it("should return correct result for monthly frequency", () => {
    const property: IPropertyState = { bed: 1, bath: 1, type: "house" };
    const frequency: IFrequency = "onceMonth";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...basicOutput,
      subtotal: basicOutput.onceMonth,
    });
  });

  const multiRoomOutput = {
    onceOff: 190,
    onceWeek: 161.5,
    twiceWeek: 171,
    onceMonth: 180.5,
  };
  it("should return correct result for one-time frequency", () => {
    const property: IPropertyState = { bed: 3, bath: 2, type: "house" };
    const frequency: IFrequency = "once-off";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...multiRoomOutput,
      subtotal: multiRoomOutput.onceOff,
    });
  });

  it("should return correct result for weekly frequency", () => {
    const property: IPropertyState = { bed: 3, bath: 2, type: "house" };
    const frequency: IFrequency = "onceWeek";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...multiRoomOutput,
      subtotal: multiRoomOutput.onceWeek,
    });
  });

  it("should return correct result for twice a week frequency", () => {
    const property: IPropertyState = { bed: 3, bath: 2, type: "house" };
    const frequency: IFrequency = "twiceWeek";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...multiRoomOutput,
      subtotal: multiRoomOutput.twiceWeek,
    });
  });

  it("should return correct result for monthly frequency", () => {
    const property: IPropertyState = { bed: 3, bath: 2, type: "house" };
    const frequency: IFrequency = "onceMonth";

    const result = calculateResult(property, frequency);

    expect(result).toEqual({
      ...multiRoomOutput,
      subtotal: multiRoomOutput.onceMonth,
    });
  });
});
