import type { AssetImageRendition, Link } from "$lib/models/common";

export type FooterSection = {
  /** 
   * Titolo della sezione del footer. 
   */
  title: string;

  /** 
   * Array di link presenti nella sezione. Ogni elemento è un oggetto di tipo `Link`. 
   */
  links: Link[];
};

export type LocaleLanguage = {
  /** 
   * Percorso o URL dell'icona della bandiera rappresentante la lingua corrente. 
   */
  assetImage: AssetImageRendition;

  /** 
   * Etichetta descrittiva della lingua corrente (es. "Italiano", "English"). 
   */
  label: string;
};

export type SocialLink = {
  /** 
   * Percorso o URL dell'icona rappresentante il social media. 
   */
  assetImage: AssetImageRendition;

  /** 
   * URL del profilo social relativo. 
   */
  link: Link;
};

export type FooterProps = {
  /** 
   * Percorso o URL del logo dell'azienda visualizzato nel footer. 
   */
  logo: AssetImageRendition;

  /** 
   * Sezioni del footer. Ogni elemento è un oggetto di tipo `FooterSection`. 
   */
  sections: FooterSection[];

  /** 
   * Link ai profili social associati. Ogni elemento è un oggetto di tipo `SocialLink`. 
   */
  socialLinks: SocialLink[];

  /** 
   * Testo del copyright visualizzato nel footer. 
   */
  copyright: string;

  /** 
   * Lingue disponibili per la selezione nel footer. Ogni lingua è un oggetto di tipo `LocaleLanguage`. 
   */
  currentLocale: LocaleLanguage[];

  /** 
   * Array di link relativi alle voci legali (es. privacy policy, termini e condizioni). 
   */
  legalLinks: Link[];

  /** 
   * Contenuto ricco (rich text) per le note legali visualizzate nel footer. 
   */
  legalNotes: string;
};

