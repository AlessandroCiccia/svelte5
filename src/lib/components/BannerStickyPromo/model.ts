export type BannerStickyPromoProps = {
  text: string; // Testo del pulsante Call to Action
  link: Link; // URL del pulsante Call to Action
  startPublishDate: string; // Data di inizio della promo
  endPublishDate: string; // Data di fine della promo
  enabled: boolean; // Flag che identifica se la promo è attiva
};

export interface Link {
	label?: string;
	blank: boolean;
	tagAdobe: string;
	action: ViewAction;
}

export interface MenuLink extends Link {
	subItems: MenuLink[];
}

export type ViewAction =
	| {
			type: 'view';
			path: string;
			// path: `/${'home' | 'search' | 'magazine'}${string}`;
	  }
	| {
			type: 'externalUrl';
			url: string;
	  };