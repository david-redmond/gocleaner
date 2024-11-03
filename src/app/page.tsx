"use client";
import React from "react";
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
import KitchenTwoToneIcon from "@mui/icons-material/KitchenTwoTone";

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
      icon: <KitchenTwoToneIcon className={"icon extras-icon"} />,
      price: 7,
      selected: false,
    },
  ];
  const [property, setProperty] = React.useState<IPropertyState>({
    bed: 1,
    bath: 1,
    type: "house",
  });
  const [eircode, setEircode] = React.useState<string>("");
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />

          {/* Quote Section */}
          <QuoteSummary
            property={property}
            frequency={frequency}
            allExtras={allExtras}
          />
        </div>
      </div>
    </>
  );
}
