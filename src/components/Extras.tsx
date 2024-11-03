import React from "react";
import {IExtras} from "@/app/interfaces";

interface IProps {
    allExtras: IExtras[];
    handleSelectExtra: (item: IExtras) => void;
}
export default ({ allExtras, handleSelectExtra }: IProps) => {
  return (
    <section className={"section"}>
      <h2>Extras</h2>
      <div className={"extras-box"}>
        {allExtras.map((opt, index) => {
          return (
            <div
              className={opt.selected
                  ? "extras-option selected"
                  : "extras-option"
              }
              key={opt.name}
              onClick={() => handleSelectExtra(opt)}
            >
              {opt.icon}
              <p>{opt.name}</p>
              <p>€{opt.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
