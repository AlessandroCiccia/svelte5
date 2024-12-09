import type { AssetImageRendition } from "$lib/models/common";

export type IconItem = {
  /** 
   * Percorso o URL dell'immagine o icona associata all'elemento. 
   * Può essere utilizzata per rappresentare visivamente la caratteristica. 
   */
  assetImage: AssetImageRendition;

  /** 
   * Titolo della caratteristica o del contenuto rappresentato dall'icona. 
   */
  title: string;

  /** 
   * Descrizione opzionale che fornisce ulteriori dettagli sulla caratteristica. 
   * Può essere omessa se non necessaria. 
   */
  description?: string;
};


export type IconListProps = {
  /** 
   * Array di oggetti `IconItem` che rappresentano la lista delle icone con relative informazioni. 
   * Ogni elemento contiene un'icona, un titolo e, opzionalmente, una descrizione. 
   */
  items: IconItem[];
};
