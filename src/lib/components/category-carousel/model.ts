import type { AssetImageRendition, Link } from "$lib/models/common";

export type CategoryCard = {
  /** 
   * Nome della categoria di veicoli, ad esempio "City car" o "SUV". 
   */
  name: string;

  /** 
   * Percorso o URL dell'icona o immagine associata alla categoria, 
   * utilizzata per rappresentare visivamente la categoria. 
   */
  assetImage: AssetImageRendition;

  /** 
   * Numero totale di veicoli disponibili in questa categoria. 
   */
  vehicleCount: number;

  /** 
   * URL che reindirizza alla pagina dedicata alla categoria. 
   */
  link: Link;
};

export type CategoryCarouselProps = {
  /** 
   * Titolo principale della sezione, ad esempio "Discover Our Categories". 
   */
  title: string;

  /** 
   * Sottotitolo o testo descrittivo che accompagna il titolo, 
   * ad esempio "Check out our vehicles". 
   */
  subtitle: string;

  /** 
   * Oggetto contenente le categorie di veicoli divise per "usati" e "nuovi". 
   */
  categories: {
      /** 
       * Lista delle categorie di veicoli usati. 
       * Ogni elemento è un oggetto di tipo `CategoryCard`. 
       */
      used: CategoryCard[];

      /** 
       * Lista delle categorie di veicoli nuovi. 
       * Ogni elemento è un oggetto di tipo `CategoryCard`. 
       */
      new: CategoryCard[];
  };
};
