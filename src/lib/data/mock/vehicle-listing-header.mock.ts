import type { VehicleListingHeaderProps } from "$lib/components/vehicle-listing-header/model";

export const vehicleListingHeaderMock: VehicleListingHeaderProps = {
  breadcrumbs: [
    {
      label: "Home",
      path: "/home",
      parentId: "0",
      id: "1"
    },
    {
      label: "Veicoli",
      path: "/vehicles",
      parentId: "1",
      id: "2"
    },
    {
      label: "Auto Nuove",
      path: "/vehicles/new",
      parentId: "2",
      id: "3"
    }
  ],
  title: "Auto Nuove",
  locations: {
    title: "Località",
    items: [
      {
        label: "Milano",
        value: "milan",
        quantity: 5,
        isSelected: true
      },
      {
        label: "Roma",
        value: "rome",
        quantity: 3
      },
      {
        label: "Torino",
        value: "turin",
        quantity: 2,
        isDisabled: true
      }
    ],
    showAllCta: {
      label: "Mostra tutte le località",
      action: { type: "view", path: "/vehicles/location" },
      blank: false,
      tagAdobe: "show_all_locations"
    }
  }
};
