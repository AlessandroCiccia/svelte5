import type { AssetImageRendition, AssetVideoRendition, Link } from "$lib/models/common";

export type Slide = {
  /** 
   * Nome del veicolo o titolo dell'offerta visualizzata nello slide. 
   */
  title: string;

  /** 
   * Percorso o URL dell'immagine o video associato allo slide. 
   * Può essere un oggetto di tipo `AssetImageRendition` o `AssetVideoRendition`. 
   */
  asset: AssetImageRendition | AssetVideoRendition;

  /** 
   * Testo HTML che descrive il contenuto dello slide e viene visualizzato nel carosello. 
   */
  description: string;

  /** 
   * URL del pulsante Call to Action (CTA) dello slide. 
   */
  cta: Link;
};

export type SliderProps = {
  /** 
   * Titolo del carosello, es. "Veicoli in evidenza" o "Offerte speciali". 
   */
  title: string;

  /** 
   * Durata del carosello in secondi. Definisce il tempo di visualizzazione di ogni slide. 
   */
  duration: number;

  /** 
   * Data di inizio della promozione o validità del carosello (in formato ISO 8601). 
   */
  startDate: string;

  /** 
   * Data di fine della promozione o validità del carosello (in formato ISO 8601). 
   */
  endDate: string;

  /** 
   * Flag che indica se il carosello deve avviarsi automaticamente. 
   * - `true`: autoplay attivo. 
   * - `false`: autoplay disattivato. 
   */
  autoPlay: boolean;

  /** 
   * Array di oggetti `Slide` che definiscono il contenuto del carosello. 
   */
  slides: Slide[];
};
