import type { Link } from "$lib/models/common";

export type CarSearchFormProps = {
  /** 
   * Titolo della sezione del modulo di ricerca, ad esempio "Search your next car". 
   */
  title: string;

  /** 
   * Testo dei tab per la selezione della tipologia di auto (es. "Used" o "New"). 
   */
  tabs: {
      /** 
       * Testo per il tab "Used". 
       */
      used: string;

      /** 
       * Testo per il tab "New". 
       */
      new: string;
  };

  /** 
   * Campi del modulo di ricerca, contenenti informazioni relative a marca, modello, chilometraggio massimo, e prezzo massimo. 
   */
  fields: {
      /** 
       * Campo per la selezione della marca. 
       */
      brand: {
          /** 
           * Placeholder visualizzato nel campo "brand". 
           */
          placeholder: string;

          /** 
           * Opzioni disponibili per il menu a tendina relativo al campo "brand". 
           */
          options: string[];
      };

      /** 
       * Campo per la selezione del modello. 
       */
      model: {
          /** 
           * Placeholder visualizzato nel campo "Model". 
           */
          placeholder: string;

          /** 
           * Opzioni disponibili per il menu a tendina relativo al campo "Model". 
           */
          options: string[];
      };

      /** 
       * Campo per la selezione del chilometraggio massimo. 
       */
      maxMileage: {
          /** 
           * Placeholder visualizzato nel campo "Max Mileage". 
           */
          placeholder: string;

          /** 
           * Valore selezionato nel campo "Max Mileage". 
           * Può essere un numero o `null` se non impostato. 
           */
          value: number | null;
      };

      /** 
       * Campo per la selezione del prezzo massimo. 
       */
      maxPrice: {
          /** 
           * Placeholder visualizzato nel campo "Max Price". 
           */
          placeholder: string;

          /** 
           * Valore selezionato nel campo "Max Price". 
           * Può essere un numero o `null` se non impostato. 
           */
          value: number | null;
      };
  };

  /** 
   * Array di link per le Call to Action (CTA), ad esempio pulsanti per avviare la ricerca. 
   */
  ctas: Link[];
};
