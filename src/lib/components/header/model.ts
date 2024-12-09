import type { AssetImageRendition, Link } from "$lib/models/common";

export interface HeaderProps {
  /** Logo del menu, che rappresenta l'immagine o il percorso dell'elemento visibile nell'header (ad esempio il logo aziendale). */
  logo: AssetImageRendition;

  /** Lista di pulsanti o link Call to Action (CTA) visibili nella parte superiore dell'header. */
  navbarCtas: Array<navbarCta>;

  /** Testo segnaposto (placeholder) per il campo di ricerca nell'header. */
  searchPlaceholder: string;

  /** Elementi principali del menu di navigazione nell'header, rappresentati come oggetti **NavigationItem**. */
  items: Array<NavigationItem>;

  /** Callout (messaggio o sezione) visualizzato nella parte posteriore dell'header, che include un titolo, una descrizione e un link CTA. */
  callout: {
    title: string;
    description: string;
    cta: Link;
  };

  /** (Opzionale) Link per la sezione inferiore del menu, come un elenco di voci aggiuntive o di navigazione. */
  bottomItems?: Array<Link>;
}

export type navbarCta = {
  /** Tipo di CTA. Può essere uno dei seguenti valori: */
  type: "close" | "profile" | "location" | "back";

  /** Il link associato alla CTA, che rappresenta l'azione che viene eseguita quando l'utente interagisce con la CTA. */
  cta: Link;
}

export interface NavigationItem extends Link {
  /** (Opzionale) Lista di sottovoci per la navigazione, che rappresentano un array di **NavigationItem** per modali o menu a discesa. */
  subItems?: Array<NavigationItem>;

  /** (Opzionale) Un flag che indica se l'elemento di navigazione deve essere separato da una linea. */
  divider?: boolean;

  /** (Opzionale) Un link Call-to-action (CTA) associato a questo elemento di navigazione, come ad esempio un collegamento a una pagina di veicoli. */
  cta?: Link;
}
