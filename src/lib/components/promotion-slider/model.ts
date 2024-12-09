import type { AssetImageRendition, AssetVideoRendition, Link } from "$lib/models/common";

export type PromotionCard = {
  /** Percorso o URL dell'immagine o video relativo al veicolo in promozione. */
  asset: AssetImageRendition | AssetVideoRendition;

  /** Titolo della promozione (es. "Sconto esclusivo sul nuovo modello"). */
  title: string;

  /** Descrizione dettagliata della promozione (es. "Fino al 20% di sconto su tutti i modelli 2023"). */
  description: string;

  /** URL del pulsante Call to Action, che porta a una pagina dedicata alla promozione. */
  cta: Link;

  /** Data di inizio della pubblicazione della promozione (formato: "YYYY-MM-DD"). */
  startPublishDate: string;

  /** Data di fine della pubblicazione della promozione (formato: "YYYY-MM-DD"). */
  endPublishDate: string;
};

export type PromotionsSliderProps = {
  /** Titolo del carosello di promozioni (es. "Our promotions" o "Promozioni in corso"). */
  title: string;

  /** Array di carte di promozioni da visualizzare nel carosello. */
  cards: PromotionCard[];
};
