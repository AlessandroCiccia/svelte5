import type { AssetImageRendition, Link } from "$lib/models/common";

export type BrandItem = {
  /** 
   * Nome del brand da visualizzare (es. "Toyota", "BMW"). 
   */
  name: string;

  /** 
   * Percorso o URL del logo del brand. 
   * Utilizzato per rappresentare visivamente il marchio. 
   */
  assetImage: AssetImageRendition;

  /** 
   * URL della pagina associata al brand, ad esempio una pagina dedicata ai suoi prodotti. 
   */
  link: Link;
};

export type BrandListProps = {
  /** 
   * Titolo della sezione che raggruppa i brand, ad esempio "Explore our range". 
   */
  title: string;

  /** 
   * Array di oggetti `BrandItem` che rappresentano i brand da visualizzare nella lista. 
   * Ogni elemento contiene un nome, un logo, e un link associato. 
   */
  brands: BrandItem[];
};
