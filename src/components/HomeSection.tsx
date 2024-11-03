import React from "react";
import { IFrequency, IPropertyState } from "@/app/interfaces";
import RoomSelector from "./RoomSelector";

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
      <h2>Your Home</h2>
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
          placeholder={"Please provide your eircode"}
          autoFocus
          onChange={(e: any) => {
            const { value } = e.target;
            setEircode(value);
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
          onClick={() => setProperty({ ...property, type: "house" })}
        >
          House
        </div>
        <div
          className={
            property.type === "apt"
              ? "inputGroup inputGroup-selected"
              : "inputGroup"
          }
          onClick={() => setProperty({ ...property, type: "apt" })}
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
          }}
        >
          Moving Out
        </div>
      </div>
    </section>
  );
};
