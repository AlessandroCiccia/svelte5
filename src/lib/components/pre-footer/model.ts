import type { AssetImageRendition, Link } from "$lib/models/common";

export type VehicleCodeCategory = {
  /**
   * Codice della categoria di veicoli.
   */
  code: string;

  /**
   * Descrizione della categoria di veicoli.
   */
  description: string;
};

export type VehicleCategory = {
  /** 
   * Percorso o URL del logo della categoria di veicoli. 
   */
  assetImage: AssetImageRendition;

  /** 
   * URL della pagina relativa alla categoria di veicoli. 
   */
  link: Link;

  /** 
   * Codici associati alla categoria di veicoli. 
   */
  codeCategory: VehicleCodeCategory[];
};

export type VehicleBrand = {
  /** 
   * Nome del brand. 
   */
  brandDescription: string;

  /** 
   * Percorso o URL del logo del brand. 
   */
  assetImage: AssetImageRendition;

  /** 
   * URL della pagina relativa al brand. 
   */
  link: Link;

  /** 
   * Business Area di riferimento del brand. 
   */
  businessArea: string;
};

export type CustomerFavorite = {
  /** 
   * Nome della voce preferita dal cliente. 
   */
  brandDescription: string;

  /** 
   * URL della pagina relativa alla voce preferita. 
   */
  link: Link;
};

export type PreFooterProps = {
  /** 
   * Titolo principale della sezione pre-footer. 
   */
  title: string;

  /** 
   * Sezione dedicata alle categorie di veicoli. 
   */
  vehicleCategories: {
      /** 
       * Titolo della sezione delle categorie di veicoli. 
       */
      title: string;

      /** 
       * Lista delle categorie di veicoli. Ogni elemento è un `VehicleCategory`. 
       */
      items: VehicleCategory[];
  };

  /** 
   * Sezione dedicata ai brand di veicoli. 
   */
  vehicleBrands: {
      /** 
       * Titolo della sezione dei brand di veicoli. 
       */
      title: string;

      /** 
       * Lista dei brand di veicoli. Ogni elemento è un `VehicleBrand`. 
       */
      items: VehicleBrand[];
  };

  /** 
   * Sezione dedicata agli articoli preferiti dai clienti. 
   */
  customerFavorites: {
      /** 
       * Titolo della sezione dei preferiti del cliente. 
       */
      title: string;

      /** 
       * Lista degli articoli preferiti dai clienti. Ogni elemento è un `CustomerFavorite`. 
       */
      items: CustomerFavorite[];
  };
};
