import React from "react";
import { IFrequency, IPropertyState } from "@/app/interfaces";
import RoomSelector from "./RoomSelector";
import analyticsEventTracking from "@/app/utils/analyticsEventTracking";

interface IProps {
  property: IPropertyState;
  eircode: string;
  setProperty: (arg: IPropertyState) => void;
  setEircode: (eircode: string) => void;
  setFrequency: (arg: IFrequency) => void;
}
export default ({
  property,
  eircode,
  setProperty,
  setEircode,
  setFrequency,
}: IProps) => {
  return (
    <section className={"section"}>
      <h2 className={"h2-accent"}>Your Home</h2>
      <div className={"grid"}>
        <RoomSelector
          title={"Bedrooms"}
          value={property.bed}
          setRooms={(newValue: number) =>
            setProperty({ ...property, bed: newValue })
          }
          autofocus
        />
        <RoomSelector
          title={"Bathrooms"}
          value={property.bath}
          setRooms={(newValue: number) =>
            setProperty({ ...property, bath: newValue })
          }
        />
        <input
          type="text"
          value={eircode}
          className={"inputGroup"}
          placeholder={"Enter your eircode"}
          autoFocus
          onChange={(e: any) => {
            const { value } = e.target;
            setEircode(value);
            analyticsEventTracking({
              action: "input_change",
              category: "User Interaction",
              label: "eircode",
              value: value,
            });
          }}
        />
      </div>
      <div className={"propertyText"}>
        Please choose the type of your property
      </div>
      <div className={"grid"}>
        <div
          className={
            property.type === "house"
              ? "inputGroup inputGroup-selected"
              : "inputGroup"
          }
          onClick={() => {
            setProperty({ ...property, type: "house" });
            analyticsEventTracking({
              action: "button_click",
              category: "User Interaction",
              label: "selectProperty",
              value: "house",
            });
          }}
        >
          House
        </div>
        <div
          className={
            property.type === "apt"
              ? "inputGroup inputGroup-selected"
              : "inputGroup"
          }
          onClick={() => {
            setProperty({ ...property, type: "apt" });
            analyticsEventTracking({
              action: "button_click",
              category: "User Interaction",
              label: "selectProperty",
              value: "apt",
            });
          }}
        >
          Apartment
        </div>
        <div
          className={
            property.type === "moving"
              ? "inputGroup inputGroup-selected"
              : "inputGroup"
          }
          onClick={() => {
            setProperty({ ...property, type: "moving" });
            setFrequency("once-off");
            analyticsEventTracking({
              action: "button_click",
              category: "User Interaction",
              label: "selectProperty",
              value: "moving",
            });
          }}
        >
          Moving Out
        </div>
      </div>
    </section>
  );
};
