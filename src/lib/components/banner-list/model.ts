import type { AssetImageRendition, AssetVideoRendition, Link } from "$lib/models/common";

export type BannerListCard = {
  /** Percorso o URL dell'immagine o video relativo al banner. */
  asset: AssetImageRendition | AssetVideoRendition;

  /** Titolo del banner, ad esempio "Offerta speciali" o "Nuovi veicoli in arrivo". */
  title: string;

  /** Descrizione dettagliata del banner, che spiega l'offerta o il contenuto rappresentato nel banner. */
  description: string;

  /** URL del pulsante Call to Action, che permette all'utente di accedere a più dettagli o di intraprendere un'azione. */
  cta: Link;
};

export type BannerListProps = {
  /** Titolo del carosello di banner, ad esempio "I nostri servizi" o "Nuove offerte". */
  title: string;

  /** Array di oggetti **BannerListCard**, che rappresentano ciascun banner da visualizzare nella lista. */
  cards: BannerListCard[];
};
