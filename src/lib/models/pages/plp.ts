import type { Breadcrumb } from "$lib/components/breadcrumbs/model";

export type PLPHeader = {
  /** Lista dei breadcrumb (percorso di navigazione) che indica la posizione corrente dell'utente nel sito. */
  breadcrumbs: Breadcrumb[];

  /** Titolo principale della pagina (ad esempio, "Veicoli Usati", "Auto Nuove", ecc.). */
  title: string;
}

export type PLP ={
  /** Intestazione (header) della pagina, che contiene il titolo e i breadcrumb. */
  header: PLPHeader;
}

