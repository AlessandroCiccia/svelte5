import type { Link } from "$lib/models/common";
import type { Breadcrumb } from "../breadcrumbs/model";

export type VehicleListingFilterItem = {
  /** Etichetta che descrive l'elemento del filtro (ad esempio, "Marca", "Anno", "Prezzo"). */
  label: string;

  /** Il valore associato all'elemento del filtro, ad esempio un codice, un nome o un range. */
  value: string;

  /** Quantità disponibile per l'elemento, ad esempio numero di veicoli per una specifica marca. */
  quantity?: number;

  /** Flag opzionale che indica se l'elemento del filtro è disabilitato (non selezionabile). */
  isDisabled?: boolean;

  /** Flag opzionale che indica se l'elemento è selezionato nel filtro. */
  isSelected?: boolean;
}

export type VehicleListingFilterSection = {
  /** Titolo della sezione del filtro (es. "Marca", "Anno", ecc.). */
  title: string;

  /** Lista di oggetti `VehicleListingFilterItem` che rappresentano i vari filtri della sezione. */
  items: VehicleListingFilterItem[];

  /** CTA (Call to Action) opzionale per il pulsante di visualizzazione di tutti i risultati, come "Mostra tutti i marchi". */
  showAllCta?: Link;
}
export type VehicleListingHeaderProps = {
  /** Lista dei breadcrumb (percorso di navigazione) che indica la posizione corrente dell'utente nel sito. */
  breadcrumbs: Breadcrumb[];

  /** Titolo principale della pagina (ad esempio, "Veicoli Usati", "Auto Nuove", ecc.). */
  title: string;

  locations?: VehicleListingFilterSection;
}
