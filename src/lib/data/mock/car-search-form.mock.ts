import type { CarSearchFormProps } from "$lib/components/car-search-form/model";

export const carSearchFormMock: CarSearchFormProps = {
  title: "Search your next car",
  tabs: {
    used: "Used",
    new: "New",
  },
  fields: {
    brand: {
      placeholder: "Make",
      options: ["Toyota", "BMW", "Mercedes"],
    },
    model: {
      placeholder: "Model",
      options: ["Corolla", "X5", "C-Class"],
    },
    maxMileage: {
      placeholder: "Max Mileage",
      value: null,
    },
    maxPrice: {
      placeholder: "Max Price",
      value: null,
    },
  },
  ctas: [
    {
      label: "SHOW ALL 9241 RESULTS",
      blank: false,
      tagAdobe: null,
      action: { type: "view", path: "/offers/new-jeep-savana-4xe" },
    },
    {
      label: "ADVANCED SEARCH",
      blank: false,
      tagAdobe: null,
      action: { type: "view", path: "/advanced-search" },
    },
    {
      label: "RESET",
      blank: false,
      tagAdobe: null,
      action: { type: "view", path: "/reset" },
    },
  ],
};
