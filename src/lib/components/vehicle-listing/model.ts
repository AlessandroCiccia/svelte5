import type { VehicleListingFilterSection } from "../vehicle-listing-header/model";

export type VehicleListingFlag = {
  /** Etichetta del flag che può essere visualizzata accanto ai veicoli (es. "Nuovo", "In Offerta"). */
  label: string;

  /** ID univoco per il flag, utile per il tracciamento e per evitare conflitti. */
  id: string;
}

export type VehicleListingProps = {
  /** Sezione opzionale per ordinamento dei veicoli (ad esempio, "Ordina per Prezzo", "Ordina per Anno", ecc.). */
  sortingSection?: VehicleListingFilterSection;

  /** Lista opzionale di flag che indicano caratteristiche speciali dei veicoli (ad esempio, "Nuovo", "In Offerta", ecc.). */
  flags?: VehicleListingFlag[];
}
