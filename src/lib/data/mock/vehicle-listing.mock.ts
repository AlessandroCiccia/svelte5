import type { VehicleListingProps } from "$lib/components/vehicle-listing/model";

export const vehicleListingMock: VehicleListingProps = {
  sortingSection: {
    title: "Ordina per",
    items: [
      {
        label: "Prezzo",
        value: "price"
      },
      {
        label: "Anno",
        value: "year"
      },
      {
        label: "Chilometraggio",
        value: "mileage"
      }
    ],
    showAllCta: {
      label: "Mostra tutte le opzioni di ordinamento",
      action: { type: "view", path: "/vehicles/sorting" },
      blank: false,
      tagAdobe: "show_all_sorting_options"
    }
  },
  flags: [
    {
      label: "Nuovo",
      id: "new-vehicle"
    },
    {
      label: "In Offerta",
      id: "on-sale"
    },
    {
      label: "Ecologico",
      id: "eco-friendly"
    }
  ]
};