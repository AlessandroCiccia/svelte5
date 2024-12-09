import type { Link } from "$lib/models/common";

export type BannerStickyPromoProps = {
  /** 
   * Oggetto `Link` che rappresenta la CTA. 
   */
  link: Link;

  /** 
   * Data di inizio della promozione. 
   */
  startPublishDate: string;

  /** 
   * Data di fine della promozione. 
   */
  endPublishDate: string;

  /** 
   * Indica se la promozione è attiva o meno. 
   */
  isEnabled: boolean;
};