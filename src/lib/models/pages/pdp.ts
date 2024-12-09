import type { Breadcrumb } from "$lib/components/breadcrumbs/model";
import type { Link } from "../common";

export interface PDPHeader {
  /** Breadcrumbs che rappresentano il percorso di navigazione fino alla pagina del veicolo */
  breadcrumbs: Breadcrumb[];
}

export interface PDP {
  /** Intestazione con i breadcrumbs e il link per tornare indietro */
  header: PDPHeader;

  /** Sezione per il contatto con il veicolo, come la richiesta di informazioni */
  contactSection: {
    /** Titolo della sezione di contatto (es. "Shipping") */
    title: string;

    /** Descrizione della sezione (es. "Contact") */
    description: string;

    /** Sezione per il contatto telefonico */
    phoneSection: {
      /** Domanda per il contatto telefonico (es. "Any questions about this vehicle?") */
      title: string;

      /** Call-to-action per il contatto telefonico (es. "Call Me Back") */
      ctas: Link[];
    };
  };

  /** Sezione per i vantaggi esclusivi online (es. "Exclusive web offer") */
  excluWeb: {
    /** Titolo della sezione esclusiva */
    title: string;

    /** Descrizione della sezione */
    description: string;

    /** Elenco di voci con titoli e descrizioni */
    subItems: {
      /** Titolo della voce */
      title: string;

      /** Descrizione della voce */
      description: string;
    }[];
  };

  /** Sezione per il trade-in, dove gli utenti possono valutare il loro veicolo usato */
  traidInSection: {
    /** Titolo della sezione trade-in (es. "Trade-in") */
    title: string;

    /** Descrizione della sezione trade-in */
    description: string;

    /** Call-to-action per stimare il valore del veicolo */
    cta: Link[];
  };

  /** Sezione con veicoli correlati da visualizzare */
  relatedCars: {
    /** Titolo della sezione veicoli correlati */
    title: string;
  };
}
