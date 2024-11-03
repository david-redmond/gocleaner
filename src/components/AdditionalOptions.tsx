import React from "react";

interface IProps {
  needsVacuum: boolean;
  needsProducts: boolean;
  setAdditionalOption: (arg: string) => void;
}
function AdditionalOptions({
  needsVacuum,
  needsProducts,
  setAdditionalOption,
}: IProps) {
  return (
    <section className={"section"}>
      <label className={"checkboxLabel"}>
        <input
          type="checkbox"
          name="vacuumCleaner"
          value={`${needsVacuum}`}
          onClick={() => setAdditionalOption("needsVacuum")}
        />{" "}
        I will need the Cleaner to bring their own vacuum cleaner (€10)
      </label>
      <label className={"checkboxLabel"}>
        <input
          type="checkbox"
          name="cleaningProducts"
          value={`${needsProducts}`}
          onClick={() => setAdditionalOption("needsProducts")}
        />{" "}
        I will need the Cleaner to bring their own cleaning products (€5)
      </label>
    </section>
  );
}

export default AdditionalOptions;
