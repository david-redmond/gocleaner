import React from "react";
import {IExtras} from "@/app/interfaces";
import analyticsEventTracking from "@/app/utils/analyticsEventTracking";

interface IProps {
    allExtras: IExtras[];
    handleSelectExtra: (item: IExtras) => void;
}
export default ({ allExtras, handleSelectExtra }: IProps) => {
  return (
    <section className={"section"}>
      <h2 className={"h2-accent"}>Extras</h2>
      <div className={"extras-box"}>
        {allExtras.map((opt) => {
          return (
            <div
              className={opt.selected
                  ? "extras-option selected"
                  : "extras-option"
              }
              key={opt.name}
              onClick={() => {
                  analyticsEventTracking({
                      action: 'button_click',
                      category: 'User Interaction',
                      label: opt.selected ? `deselectOption` : "selectOption",
                      value: opt.name,
                  });
                  handleSelectExtra(opt);
              }}
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
