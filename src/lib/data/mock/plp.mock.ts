import type { PLP } from "$lib/models/pages/plp";

export const PLPMock: PLP = {
  header: {
    breadcrumbs: [
      { label: "Home", path: "/home", parentId: "0", id: "1" },
      { label: "Veicoli", path: "/vehicles", parentId: "1", id: "2" },
      { label: "Auto Nuove", path: "/vehicles/new", parentId: "2", id: "3" }
    ],
    title: "Auto Nuove"
  }
};
