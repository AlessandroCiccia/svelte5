export interface Link {
  label?: string | null;
  blank: boolean;
  tagAdobe: string;
  assetImage?: AssetImage;
  action: ViewAction;
}

export interface MenuLink extends Link {
  subItems: MenuLink[];
}

export type ViewAction =
  | {
      type: "view";
      path: string;
      // path: `/${'home' | 'search' | 'magazine'}${string}`;
    }
  | {
      type: "externalUrl";
      url: string;
    }
  | {
      type: "functionalAction";
      function: () => void;
    };

export type AssetImage = {
  src: string; // Percorso o URL dell'immagine
  alt?: string; // Descrizione per l'accessibilità dell'immagine
};

export type VehicleCodeCategory = {
  code: string; // Codice della categoria di veicoli
  description: string; // Descrizione della categoria di veicoli
};
