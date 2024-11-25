"use client";
import React from "react";
import HeadSection from '@/components/Head';
import HomeSection from "@/components/HomeSection";
import HeroSection from "@/components/HeroSection";
import DiscountsSection from "@/components/DiscountsSection";
import Extras from "@/components/Extras";
import { IExtras, IFrequency, IPropertyState } from "@/app/interfaces";
import QuoteSummary from "@/components/QuoteSummary";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import DiningOutlinedIcon from "@mui/icons-material/DiningOutlined";
import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
import BlindsOutlinedIcon from "@mui/icons-material/BlindsOutlined";
import Timeslot from "@/components/Timeslot";
import Footer from "@/components/Footer";

export default function Home() {
  const extrasArray: IExtras[] = [
    {
      name: "Clean Inside Windows",
      icon: <WindowOutlinedIcon className={"icon extras-icon"} />,
      price: 15,
      selected: false,
    },
    {
      name: "Clean all the doors",
      icon: <MeetingRoomOutlinedIcon className={"icon extras-icon"} />,
      price: 15,
      selected: false,
    },
    {
      name: "Clean inside the Double Oven",
      icon: <DiningOutlinedIcon className={"icon extras-icon"} />,
      price: 45,
      selected: false,
    },
    {
      name: "Clean inside the Oven",
      icon: <DiningOutlinedIcon className={"icon extras-icon"} />,
      price: 35,
      selected: false,
    },

    {
      name: "Clean inside the microwave",
      icon: <MicrowaveOutlinedIcon className={"icon extras-icon"} />,
      price: 35,
      selected: false,
    },
    {
      name: "Clean inside the kitchen cupboards",
      icon: <DoorBackOutlinedIcon className={"icon extras-icon"} />,
      price: 20,
      selected: false,
    },
    {
      name: "Clean inside the fridge",
      icon: <KitchenOutlinedIcon className={"icon extras-icon"} />,
      price: 20,
      selected: false,
    },
    {
      name: "Clean inside the wardrobes",
      icon: <DoorSlidingOutlinedIcon className={"icon extras-icon"} />,
      price: 20,
      selected: false,
    },
    {
      name: "Clean Venetian Blinds (each)",
      icon: <BlindsOutlinedIcon className={"icon extras-icon"} />,
      price: 7,
      selected: false,
    },
  ];
  const [property, setProperty] = React.useState<IPropertyState>({
    bed: 3,
    bath: 2,
    type: "house",
  });
  const [eircode, setEircode] = React.useState<string>("");
  const [time, setTime] = React.useState<string>("8:00");
  const [day, setDay] = React.useState<string>("Monday");
  const [frequency, setFrequency] = React.useState<IFrequency>("onceWeek");
  const [allExtras, setExtras] = React.useState<IExtras[]>(extrasArray);

  const handleSelectExtra = (option: IExtras) => {
    const newArray = allExtras.map((opt) => {
      if (opt.name === option.name) {
        opt.selected = !opt.selected;
      }
      return opt;
    });
    setExtras(newArray);
  };

  return (
    <>
      <HeadSection floatNav/>
      <HeroSection />
      <div className={"container"}>
        <div className={"form"}>
          {/* Your Home Section */}
          <HomeSection
            property={property}
            eircode={eircode}
            setProperty={setProperty}
            setEircode={setEircode}
            setFrequency={setFrequency}
          />

          {/* Discounts Section */}
          {property.type !== "moving" && (
            <DiscountsSection
              property={property}
              frequency={frequency}
              setFrequency={setFrequency}
            />
          )}

          {/* Your Schedule Section */}
          <Timeslot
            time={time}
            setTime={setTime}
            frequency={frequency}
            day={day}
            setDay={setDay}
          />

          {/* Extras Section */}
          <Extras allExtras={allExtras} handleSelectExtra={handleSelectExtra} />

          {/* Additional Options Section*/}
          {/* <AddtionalOptions />*/}

          {/* Quote Section */}
          <QuoteSummary
            property={property}
            frequency={frequency}
            allExtras={allExtras}
            eircode={eircode}
            day={day}
            time={time}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
