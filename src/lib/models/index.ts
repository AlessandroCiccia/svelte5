/**
 * Common Types
 */

// Interfaccia base per una rendition generica di un asset
export interface AssetRendition {
	type: 'image' | 'video' | '360'; // Tipo di asset
	src: string | ResponsiveSrc; // Percorso o URL dell'asset
	alt?: string; // Testo alternativo per l'accessibilità
	title?: string; // Titolo dell'asset (opzionale, visibile al passaggio del mouse)
	width?: number; // Larghezza dell'asset
	height?: number; // Altezza dell'asset
	loading?: 'eager' | 'lazy'; // Comportamento del caricamento
}

// Interfaccia per un video
export interface AssetVideoRendition extends AssetRendition {
	poster?: string; // Immagine di anteprima per il video
	autoplay?: boolean; // Avvio automatico del video
	controls?: boolean; // Mostrare i controlli del video
	loop?: boolean; // Ripetizione automatica del video
	muted?: boolean; // Se il video è silenziato
	playsInline?: boolean; // Riproduzione inline (utile per dispositivi mobili)
	preload?: 'auto' | 'metadata' | 'none'; // Comportamento del preload
}

// Interfaccia per un'immagine
export interface AssetImageRendition extends AssetRendition {
	srcSet?: string; // Percorsi delle immagini per il caricamento responsive
	sizes?: string; // Attributo sizes per immagini responsive
	crossOrigin?: 'anonymous' | 'use-credentials'; // Politica CORS
	referrerPolicy?: string; // Politica del referrer
}

// Tipo principale per supportare asset multipli (singoli o responsivi)
export type ResponsiveSrc = {
	desktop?: AssetRendition; // Rendition per desktop
	mobile?: AssetRendition; // Rendition per mobile
	tablet?: AssetRendition; // Rendition per tablet
};

// .
export interface Link {
	label?: string;
	blank: boolean;
	tagAdobe: string;
	asset?: AssetImageRendition | AssetVideoRendition;
	action?: ViewAction;
	hasDivider: boolean;
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
	  }
	| {
			type: 'functionalAction';
			function: () => void;
	  };

export type VehicleCodeCategory = {
	code: string; // Codice della categoria di veicoli
	description: string; // Descrizione della categoria di veicoli
};

/**
 *  ######################################################################################################################
 */

/**
 * C02 - Banner Sticky Promo
 */
export type BannerStickyPromoProps = {
	text: string; // Testo del pulsante Call to Action
	link: Link; // URL del pulsante Call to Action
	startPublishDate: string; // Data di inizio della promo
	endPublishDate: string; // Data di fine della promo
	enabled: boolean; // Flag che identifica se la promo è attiva
};

//Esempio di BannerStickyPromoProps
export const bannerStickyPromo: BannerStickyPromoProps = {
	text: 'Vai a Google',
	link: {
		label: null,
		blank: false,
		tagAdobe: 'cta_homepage_banner_sticky_promo',
		action: {
			type: 'externalUrl',
			url: 'https://google.com'
		}
	},
	startPublishDate: '2024-12-31',
	endPublishDate: '2024-12-31',
	enabled: true
};

/**
 *  ######################################################################################################################
 */

/**
 * C03 - PreFooter
 */
export type VehicleCategory = {
	assetImage: AssetImageRendition; // Percorso o URL del logo della categoria di veicoli
	link: Link; // URL della pagina relativa alla categoria di veicoli
	codeCategory: VehicleCodeCategory[]; // Codice della categoria di veicoli
};

export type VehicleBrand = {
	brandDescription: string; // Nome del brand
	assetImage: AssetImageRendition; // Percorso o URL del logo del brand
	link: Link; // URL della pagina relativa al brand
	businessArea: string; // Business Area di riferimento
};

export type CustomerFavorite = {
	brandDescription: string; // Nome della voce preferita dal cliente
	link: Link; // URL della pagina relativa alla voce preferita
};

export type PreFooterProps = {
	title: string; // Titolo principale della sezione pre-footer
	vehicleCategories: {
		title: string; // Titolo della sezione delle categorie di veicoli
		items: VehicleCategory[]; // Lista delle categorie di veicoli
	};
	vehicleBrands: {
		title: string; // Titolo della sezione dei brand di veicoli
		items: VehicleBrand[]; // Lista dei brand di veicoli
	};
	customerFavorites: {
		title: string; // Titolo della sezione dei preferiti del cliente
		items: CustomerFavorite[]; // Lista degli articoli preferiti dai clienti
	};
};
//Esempio di PreFooterProps
export const preFooter: PreFooterProps = {
	title: 'Explore More',
	vehicleCategories: {
		title: 'Browse by Category',
		items: [
			{
				assetImage: {
					type: 'image',
					src: 'path/to/suv-logo.png',
					alt: 'SUV',
					width: 100,
					height: 100,
					title: 'suv category icon'
				},
				link: {
					label: null,
					blank: false,
					tagAdobe: 'cta_homepage_pre_footer_vehicle_categories',
					action: {
						type: 'view',
						path: '/categories/suv'
					}
				},
				codeCategory: [
					{
						code: '1',
						description: 'After Sales'
					}
				]
			},
			{
				assetImage: {
					type: 'image',
					src: 'path/to/sedan-logo.png',
					alt: 'Sedan',
					width: 100,
					height: 100,
					title: 'sedan category icon'
				},
				link: {
					label: null,
					blank: false,
					tagAdobe: 'cta_homepage_pre_footer_vehicle_categories',
					action: {
						type: 'view',
						path: '/categories/sedan'
					}
				},
				codeCategory: [
					{
						code: '1',
						description: 'After Sales'
					}
				]
			}
		]
	},
	vehicleBrands: {
		title: 'Our Trusted Brands',
		items: [
			{
				brandDescription: 'Brand X',
				assetImage: {
					type: 'image',
					src: 'path/to/brand-x-logo.png',
					alt: 'Brand X',
					width: 100,
					height: 100,
					title: 'brand x icon'
				},
				link: {
					label: null,
					blank: false,
					tagAdobe: 'cta_homepage_pre_footer_vehicle_brands',
					action: {
						type: 'view',
						path: '/brands/brand-x'
					}
				},
				businessArea: 'After Sales'
			},
			{
				brandDescription: 'Brand Y',
				assetImage: {
					type: 'image',
					src: 'path/to/brand-y-logo.png',
					alt: 'Brand Y',
					width: 100,
					height: 100,
					title: 'brand y icon'
				},
				link: {
					label: null,
					blank: false,
					tagAdobe: 'cta_homepage_pre_footer_vehicle_brands',
					action: {
						type: 'view',
						path: '/brands/brand-y'
					}
				},
				businessArea: 'After Sales'
			}
		]
	},
	customerFavorites: {
		title: 'Customer Favorites',
		items: [
			{
				brandDescription: 'Luxury Sedan 2024',
				link: {
					label: null,
					blank: false,
					tagAdobe: 'cta_homepage_pre_footer_customer_favorites',
					action: {
						type: 'view',
						path: '/vehicles/luxury-sedan-2024'
					}
				}
			},
			{
				brandDescription: 'Eco-friendly SUV',
				link: {
					label: null,
					blank: false,
					tagAdobe: 'cta_homepage_pre_footer_customer_favorites',
					action: {
						type: 'view',
						path: '/vehicles/eco-friendly-suv'
					}
				}
			}
		]
	}
};

/**
 *  ######################################################################################################################
 */

/**
 * C04 - Footer
 */
type FooterSection = {
	title: string; // Titolo della sezione
	links: Link[]; // Array di link della sezione
};

export type LocaleLanguage = {
	assetImage: AssetImageRendition; // Percorso dell'icona della bandiera della lingua corrente
	label: string; // Etichetta della lingua corrente
};

export type SocialLink = {
	assetImage: AssetImageRendition; // Percorso dell'icona del social
	link: Link; // URL del profilo social
};

export type FooterProps = {
	logo: AssetImageRendition; // Percorso del logo dell'azienda
	sections: FooterSection[]; // Sezioni del footer
	socialLinks: SocialLink[]; // Link ai profili social
	copyright: string; // Testo del copyright
	currentLocale: LocaleLanguage[]; // Lingue disponibili con le relative icone
	legalLinks: Link[]; // Array di link legati alle voci legali
	legalNotes: string; // Richtext per leote legali legate al footer
};
//Esempio di FooterProps
export const footer: FooterProps = {
	logo: {
		type: 'image',
		src: 'path/to/logo.png',
		alt: 'Logo azienda',
		width: 100,
		height: 100,
		title: 'logo'
	},
	sections: [
		{
			title: 'Company',
			links: [
				{
					label: 'About Us',
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/about' }
				},
				{
					label: 'Careers',
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/careers' }
				},
				{
					label: 'Privacy Policy',
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/privacy-policy' }
				}
			]
		},
		{
			title: 'Support',
			links: [
				{
					label: 'Help Center',
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/help' }
				},
				{
					label: 'FAQ',
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/faq' }
				},
				{
					label: 'Contact Us',
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/contact' }
				}
			]
		}
	],
	socialLinks: [
		{
			assetImage: {
				type: 'image',
				src: 'path/to/facebook-icon.png',
				alt: 'Facebook',
				width: 100,
				height: 100,
				title: 'facebook icon'
			},
			link: {
				label: null,
				blank: true,
				tagAdobe: null,
				action: { type: 'externalUrl', url: 'https://www.facebook.com/azienda' }
			}
		},
		{
			assetImage: {
				type: 'image',
				src: 'path/to/instagram-icon.png',
				alt: 'Instagram',
				width: 100,
				height: 100,
				title: 'instagram icon'
			},
			link: {
				label: null,
				blank: true,
				tagAdobe: null,
				action: { type: 'externalUrl', url: 'https://www.instagram.com/azienda' }
			}
		}
	],
	copyright: '© 2024 Azienda. Tutti i diritti riservati.',
	legalLinks: [
		{
			label: 'Privacy',
			blank: false,
			tagAdobe: null,
			action: { type: 'view', path: '/privacy' }
		},
		{
			label: 'Cookies',
			blank: false,
			tagAdobe: null,
			action: { type: 'view', path: '/cookies' }
		}
	],
	legalNotes: 'Text for legal notes',
	currentLocale: [
		{
			assetImage: {
				type: 'image',
				src: 'path/to/flag-italy.png',
				alt: 'Italian flag',
				width: 100,
				height: 100,
				title: 'italy icon'
			},
			label: 'Italiano'
		},
		{
			assetImage: {
				type: 'image',
				src: 'path/to/flag-uk.png',
				alt: 'UK flag',
				width: 100,
				height: 100,
				title: 'uk icon'
			},
			label: 'English'
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C05 - Slider
 */
export type Slide = {
	title: string; // Nome del veicolo o titolo dell'offerta
	asset: AssetImageRendition | AssetVideoRendition; // Percorso o URL dell'immagine
	description: string; // Testo HTML da visualizzare nel carosello
	cta: Link; // URL del pulsante Call to Action
};

export type SliderProps = {
	title: string; // Titolo del carosello (es. "Veicoli in evidenza")
	duration: number; // Durata del carosello in secondi
	startDate: string; // Data di inizio della promo
	endDate: string; // Data di fine della promo
	autoPlay: boolean; // Flag che identifica se il carosello è in autoplay
	slides: Slide[]; // Array di veicoli da visualizzare nel carosello
};

export const sliderData: SliderProps = {
	title: 'Featured Vehicles',
	duration: 5,
	startDate: '2024-01-01',
	endDate: '2024-12-31',
	autoPlay: true,
	slides: [
		{
			title: 'New Jeep Savana 4xe Pure Tech',
			asset: {
				type: 'image',
				src: 'path/to/image1.jpg',
				alt: 'New Jeep Savana 4xe Pure Tech',
				width: 100,
				height: 100,
				title: 'slider image'
			},
			description: `
          <p>Down payment <strong>€17,903</strong> - 650€/35 months</p>
          <p>Final installment <strong>€46,178.67</strong></p>
          <p>TAN (fixed): <strong>7.25%</strong> - TAEG: <strong>8.21%</strong></p>
          <p>Offer valid until <strong>30/11</strong></p>
        `,
			cta: {
				label: 'DISCOVER THE OFFER',
				tagAdobe: null,
				blank: false,
				action: {
					type: 'view',
					path: '/offers/new-jeep-savana-4xe'
				}
			}
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C06 - Car Search Form
 */
export type CarSearchForm = {
	title: string; // Titolo della sezione (es. "Search your next car")
	tabs: {
		used: string; // Testo per il tab "Used"
		new: string; // Testo per il tab "New"
	};
	fields: {
		brand: {
			placeholder: string; // Placeholder per il campo "brand"
			options: string[]; // Opzioni disponibili per il menu a tendina
		};
		model: {
			placeholder: string; // Placeholder per il campo "Model"
			options: string[]; // Opzioni disponibili per il menu a tendina
		};
		maxMileage: {
			placeholder: string; // Placeholder per il campo "Max Mileage"
			value: number | null; // Valore selezionato (null se non impostato)
		};
		maxPrice: {
			placeholder: string; // Placeholder per il campo "Max Price"
			value: number | null; // Valore selezionato (null se non impostato)
		};
	};
	ctas: Link[]; // Array di link per le cta
};

export const carSearchForm: CarSearchForm = {
	title: 'Search your next car',
	tabs: {
		used: 'Used',
		new: 'New'
	},
	fields: {
		brand: {
			placeholder: 'Make',
			options: ['Toyota', 'BMW', 'Mercedes']
		},
		model: {
			placeholder: 'Model',
			options: ['Corolla', 'X5', 'C-Class']
		},
		maxMileage: {
			placeholder: 'Max Mileage',
			value: null
		},
		maxPrice: {
			placeholder: 'Max Price',
			value: null
		}
	},
	ctas: [
		{
			label: 'SHOW ALL 9241 RESULTS',
			blank: false,
			tagAdobe: null,
			action: { type: 'view', path: '/offers/new-jeep-savana-4xe' }
		},
		{
			label: 'ADVANCED SEARCH',
			blank: false,
			tagAdobe: null,
			action: { type: 'view', path: '/advanced-search' }
		},
		{
			label: 'RESET',
			blank: false,
			tagAdobe: null,
			action: { type: 'view', path: '/reset' }
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C07 - Icon List
 */
export type IconItem = {
	assetImage: AssetImageRendition; // Percorso o nome dell'icona associata
	title: string; // Titolo della caratteristica
	description?: string; // Descrizione opzionale, se disponibile
};

export type IconListProps = {
	items: IconItem[]; // Lista di oggetti IconItem
};

export const iconListData: IconListProps = {
	items: [
		{
			assetImage: {
				type: 'image',
				src: 'path/to/icon-efficiency.png',
				alt: 'Fuel Efficiency',
				width: 100,
				height: 100,
				title: 'efficiency icon'
			},
			title: 'Fuel Efficiency',
			description:
				'This vehicle offers excellent fuel efficiency, saving you money on fuel over time.'
		},
		{
			assetImage: {
				type: 'image',
				src: 'path/to/icon-safety.png',
				alt: 'Safety Features',
				width: 100,
				height: 100,
				title: 'safety icon'
			},
			title: 'Safety Features',
			description:
				'Equipped with advanced safety technologies to ensure maximum protection on the road.'
		},
		{
			assetImage: {
				type: 'image',
				src: 'path/to/icon-warranty.png',
				alt: 'Warranty',
				width: 100,
				height: 100,
				title: 'warranty icon'
			},
			title: 'Warranty',
			description: 'Comes with a comprehensive 5-year warranty for peace of mind.'
		},
		{
			assetImage: {
				type: 'image',
				src: 'path/to/icon-technology.png',
				alt: 'Technology',
				width: 100,
				height: 100,
				title: 'tecghnology icon'
			},
			title: 'Technology',
			description: 'Features cutting-edge technology for an enhanced driving experience.'
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C08 - Brand List
 */
export type BrandItem = {
	name: string; // Nome del brand
	assetImage: AssetImageRendition; // Percorso o URL del logo del brand
	link: Link; // URL della pagina relativa al brand
};

export type BrandListProps = {
	title: string; // Titolo della sezione (es. "Explore our range")
	brands: BrandItem[]; // Lista dei brand
};
//Esempio di BrandListProps
export const brandListData: BrandListProps = {
	title: 'Explore our range',
	brands: [
		{
			name: 'Abarth',
			assetImage: {
				type: 'image',
				src: 'path/to/abarth-logo.svg',
				alt: 'Abarth',
				width: 100,
				height: 100,
				title: 'abarth icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/abarth' }
			}
		},
		{
			name: 'Alfa Romeo',
			assetImage: {
				type: 'image',
				src: 'path/to/alfa-romeo-logo.svg',
				alt: 'Alfa Romeo',
				width: 100,
				height: 100,
				title: 'alfa romeo icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/alfa-romeo' }
			}
		},
		{
			name: 'Citroën',
			assetImage: {
				type: 'image',
				src: 'path/to/citroen-logo.svg',
				alt: 'Citroën',
				width: 100,
				height: 100,
				title: 'citroen icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/citroen' }
			}
		},
		{
			name: 'DS Automobiles',
			assetImage: {
				type: 'image',
				src: 'path/to/ds-logo.svg',
				alt: 'DS Automobiles',
				width: 100,
				height: 100,
				title: 'ds icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/ds-automobiles' }
			}
		},
		{
			name: 'Fiat',
			assetImage: {
				type: 'image',
				src: 'path/to/fiat-logo.svg',
				alt: 'Fiat',
				width: 100,
				height: 100,
				title: 'fiat icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/fiat' }
			}
		},
		{
			name: 'Jeep',
			assetImage: {
				type: 'image',
				src: 'path/to/jeep-logo.svg',
				alt: 'Jeep',
				width: 100,
				height: 100,
				title: 'jeep icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/jeep' }
			}
		},
		{
			name: 'Lancia',
			assetImage: {
				type: 'image',
				src: 'path/to/lancia-logo.svg',
				alt: 'Lancia',
				width: 100,
				height: 100,
				title: 'lancia icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/lancia' }
			}
		},
		{
			name: 'Leapmotor',
			assetImage: {
				type: 'image',
				src: 'path/to/leapmotor-logo.svg',
				alt: 'Leapmotor',
				width: 100,
				height: 100,
				title: 'leapmotor icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/leapmotor' }
			}
		},
		{
			name: 'Opel',
			assetImage: {
				type: 'image',
				src: 'path/to/opel-logo.svg',
				alt: 'Opel',
				width: 100,
				height: 100,
				title: 'opel icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/opel' }
			}
		},
		{
			name: 'Peugeot',
			assetImage: {
				type: 'image',
				src: 'path/to/peugeot-logo.svg',
				alt: 'Peugeot',
				width: 100,
				height: 100,
				title: 'peugeot icon'
			},
			link: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/brands/peugeot' }
			}
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C09 - Category Carousel
 */
export type CategoryCard = {
	name: string; // Nome della categoria (es. "City car")
	assetImage: AssetImageRendition; // Percorso o URL dell'icona associata alla categoria
	vehicleCount: number; // Numero di veicoli disponibili in questa categoria
	link: Link; // URL per la pagina della categoria
};

export type CategoryCarouselProps = {
	title: string; // Titolo principale della sezione
	subtitle: string; // Testo descrittivo generale (es. "Check out our vehicles")
	categories: {
		used: CategoryCard[]; // Lista delle categorie di veicoli usati
		new: CategoryCard[]; // Lista delle categorie di veicoli nuovi
	};
};
//Esempio di CategoryCarouselProps
export const categoryCarouselData: CategoryCarouselProps = {
	title: 'Browse Our Vehicles',
	subtitle: 'Explore a wide range of categories, from city cars to SUVs',
	categories: {
		used: [
			{
				name: 'City car',
				assetImage: {
					type: 'image',
					src: 'path/to/icon-city-car.png',
					alt: 'City car',
					width: 100,
					height: 100,
					title: 'city-car icon'
				},
				vehicleCount: 25,
				link: {
					label: null,
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/categories/city-car' }
				}
			},
			{
				name: 'SUV',
				assetImage: {
					type: 'image',
					src: 'path/to/icon-suv.png',
					alt: 'SUV',
					width: 100,
					height: 100,
					title: 'suv icon'
				},
				vehicleCount: 18,
				link: {
					label: null,
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/categories/suv' }
				}
			}
		],
		new: [
			{
				name: 'Electric',
				assetImage: {
					type: 'image',
					src: 'path/to/icon-electric.png',
					alt: 'Electric',
					width: 100,
					height: 100,
					title: 'electric icon'
				},
				vehicleCount: 12,
				link: {
					label: null,
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/categories/electric' }
				}
			},
			{
				name: 'Luxury',
				assetImage: {
					type: 'image',
					src: 'path/to/icon-luxury.png',
					alt: 'Luxury',
					width: 100,
					height: 100,
					title: 'luxury icon'
				},
				vehicleCount: 8,
				link: {
					label: null,
					blank: false,
					tagAdobe: null,
					action: { type: 'view', path: '/categories/luxury' }
				}
			}
		]
	}
};

/**
 *  ######################################################################################################################
 */

/**
 * C10 - Vehicle Carousel
 */
export interface VehicleCarousel {
	newVehicles: VehicleGroup;
	usedVehicles: VehicleGroup;
}

export interface VehicleGroup {
	nbVehicles: number;
	vehicles: Vehicle[];
}

export interface Vehicle {
	objectID: string;
	id: number;
	brand: LabelSlug;
	model: Model;
	finish: LabelSlug;
	hasPhotos: boolean;
	hasPromo: boolean;
	typeInteger: number;
	priceBracket: number;
	has360: boolean;
	available: boolean;
	co2: number;
	color: Color;
	country: string;
	dealerGroupNames: string[];
	dealerGroupNamesv2: LabelSlug;
	dealerName: string;
	disponibilityB2L: boolean;
	doorNb: number;
	excluWeb: boolean;
	financement_regularPaymentTTC: FinancementDetails<number>;
	financement_regularPaymentTTC_range: FinancementDetails<number>;
	finition: string;
	fuel: FuelOrGear;
	gear: FuelOrGear;
	greenZoneLevel: string;
	mileage: number;
	physicalPowerRange: string;
	price: number;
	promos_fr: string[];
	promosv2_fr: Promo[];
	seatNb: string;
	sellYear: number;
	silhouette: LabelSlug;
	type: string;
	priceCatalog: number | null;
	initialPrice: number;
	initialPriceFormatCurrency: string;
	priceDifference: number;
	priceDifferenceFormatCurrency: string;
	priceDifferencePercentage: number;
	dealerId: number;
	firstRegistrationYearMonth: string;
	slug: string;
	averageConsumption: number;
	vin: string;
	isOld: boolean;
	isBooked: boolean;
	dealerLat: number;
	dealerLng: number;
	priceWithFinancing: number | null;
	priceWithFinancingFormatCurrency: string | null;
	previousUse: string;
	mixedWltp: number | null;
	lowSpeed: number | null;
	mediumSpeed: number | null;
	highSpeed: number | null;
	extraHighSpeed: number | null;
	powerConsumption: number | null;
	autonomy: number | null;
	randomOrder: number;
	autonomyCity: number | null;
	co2WltpMt: number | null;
	shape: LabelSlug;
	kind: LabelSlug;
	contract: string;
	stamp: string;
	contractDuration: number;
	firstPhoto: string;
	photos: string[];
	typeImport: string;
	updated: string;
	created: string;
	hasFinancement: boolean;
	financement_primaryText: FinancementDetails<string>;
	financement_ctaDetailText: FinancementDetails<string | null>;
	financement_displayDetail: FinancementDetails<boolean>;
	financement_legalNotice: FinancementDetails<string>;
}

export interface LabelSlug {
	label: string;
	slug: string;
}

export interface Model extends LabelSlug {
	groupLabel: string;
	groupSlug: string;
	mergedLabel: string;
	mergedSlug: string;
	code: string | null;
}

export interface Color extends Model {
	code: string;
}

export interface FuelOrGear extends Model {
	code: string | null;
}

export interface Promo {
	label: string;
	slug: string;
}

export interface FinancementDetails<T> {
	fr: T;
}

//Esempio di vehicleCarousel aggionrato
export const vehicleCarousel: VehicleCarousel = {
	newVehicles: {
		nbVehicles: 1,
		vehicles: [
			{
				objectID: '910830',
				id: 910830,
				brand: {
					label: 'PEUGEOT',
					slug: 'peugeot'
				},
				model: {
					label: 'PEUGEOT 208',
					slug: 'peugeot-208',
					groupLabel: 'PEUGEOT 208',
					groupSlug: 'peugeot-208',
					mergedLabel: 'PEUGEOT 208',
					mergedSlug: 'peugeot-208',
					code: null
				},

				finish: {
					label: '208 PureTech 75 S&S BVM5 Active Pack',
					slug: '208-puretech-75-s-s-bvm5-active-pack'
				},
				hasPhotos: true,
				hasPromo: true,
				typeInteger: 1,
				priceBracket: 6,
				has360: true,
				available: true,
				co2: 119,
				color: {
					label: 'blanc',
					slug: 'blanc',
					groupLabel: 'Blanc',
					groupSlug: 'blanc',
					mergedLabel: 'Blanc',
					mergedSlug: 'blanc',
					code: 'white'
				},
				country: 'FR',
				dealerGroupNames: ['lyon'],
				dealerGroupNamesv2: {
					label: 'lyon',
					slug: 'lyon'
				},
				dealerName: 'SPOTICAR STELLANTIS &YOU LYON VENISSIEUX ETATS-UNIS',
				disponibilityB2L: true,
				doorNb: 5,
				excluWeb: false,
				financement_regularPaymentTTC: {
					fr: 248
				},
				financement_regularPaymentTTC_range: {
					fr: 248
				},
				finition: 'active',
				fuel: {
					label: 'Essence sans plomb',
					slug: 'essence-sans-plomb',
					groupLabel: 'Essence',
					groupSlug: 'essence',
					mergedLabel: 'Essence',
					mergedSlug: 'essence',
					code: 'ESS'
				},
				gear: {
					label: 'Boîte manuelle',
					slug: 'boite-manuelle',
					groupLabel: 'Manuelle',
					groupSlug: 'manuelle',
					mergedLabel: 'Manuelle',
					mergedSlug: 'manuelle',
					code: null
				},
				greenZoneLevel: '1',
				mileage: 26638,
				physicalPowerRange: '0-100',
				price: 13489,
				promos_fr: ['superpromo|black'],
				promosv2_fr: [{ label: 'SuperPromo', slug: 'superpromo|black' }],
				seatNb: '5',
				sellYear: 2022,
				silhouette: {
					slug: 'citadine',
					label: 'Citadine'
				},
				type: 'vo',
				priceCatalog: null,
				initialPrice: 15189,
				initialPriceFormatCurrency: '15 189',
				priceDifference: -1700,
				priceDifferenceFormatCurrency: '- 1 700',
				priceDifferencePercentage: -11,
				dealerId: 66727,
				firstRegistrationYearMonth: '05/2022',
				slug: 'peugeot-208-puretech-75-s-s-bvm5-active-pack-blanc',
				averageConsumption: 0,
				vin: 'VR3UPHMHDNT035055',
				isOld: true,
				isBooked: false,
				dealerLat: 45.721067,
				dealerLng: 4.8739827,
				priceWithFinancing: null,
				priceWithFinancingFormatCurrency: null,
				previousUse: 'EX LOUEUR',
				mixedWltp: null,
				lowSpeed: null,
				mediumSpeed: null,
				highSpeed: null,
				extraHighSpeed: null,
				powerConsumption: null,
				autonomy: null,
				randomOrder: 5,
				autonomyCity: null,
				co2WltpMt: null,
				shape: {
					label: 'Citadine',
					slug: 'citadine'
				},
				kind: {
					label: 'VP',
					slug: 'vp'
				},
				contract: 'Spoticar Premium',
				stamp: 'SPR',
				contractDuration: 12,
				firstPhoto:
					'https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fuvpictures-eu-central-1%2F1280%2FSP%2FFR%2FPEUGEOT-208-3192111_1.JPG',
				photos: [
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_1.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_2.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_3.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_4.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_5.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_6.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_7.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_8.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_9.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_10.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_11.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_12.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_13.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_14.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_15.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_16.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_17.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_18.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_19.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_20.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_21.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_22.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_23.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_24.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_25.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_26.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_27.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_28.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_29.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_30.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_31.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_32.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_33.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_34.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_35.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_36.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_37.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_38.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_39.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_40.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_41.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_42.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_43.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_44.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_45.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_46.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_47.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_48.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_49.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_50.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_51.JPG'
				],
				typeImport: 'buvo',
				updated: '2024-11-22',
				created: '2024-08-22',
				hasFinancement: true,
				financement_primaryText: {
					fr: ''
				},
				financement_ctaDetailText: {
					fr: null
				},
				financement_displayDetail: {
					fr: true
				},
				financement_legalNotice: {
					fr: ''
				}
			}
		]
	},
	usedVehicles: {
		nbVehicles: 1,
		vehicles: [
			{
				objectID: '910830',
				id: 910830,
				brand: {
					label: 'PEUGEOT',
					slug: 'peugeot'
				},
				model: {
					label: 'PEUGEOT 208',
					slug: 'peugeot-208',
					groupLabel: 'PEUGEOT 208',
					groupSlug: 'peugeot-208',
					mergedLabel: 'PEUGEOT 208',
					mergedSlug: 'peugeot-208',
					code: null
				},

				finish: {
					label: '208 PureTech 75 S&S BVM5 Active Pack',
					slug: '208-puretech-75-s-s-bvm5-active-pack'
				},
				hasPhotos: true,
				hasPromo: true,
				typeInteger: 1,
				priceBracket: 6,
				has360: true,
				available: true,
				co2: 119,
				color: {
					label: 'blanc',
					slug: 'blanc',
					groupLabel: 'Blanc',
					groupSlug: 'blanc',
					mergedLabel: 'Blanc',
					mergedSlug: 'blanc',
					code: 'white'
				},
				country: 'FR',
				dealerGroupNames: ['lyon'],
				dealerGroupNamesv2: {
					label: 'lyon',
					slug: 'lyon'
				},
				dealerName: 'SPOTICAR STELLANTIS &YOU LYON VENISSIEUX ETATS-UNIS',
				disponibilityB2L: true,
				doorNb: 5,
				excluWeb: false,
				financement_regularPaymentTTC: {
					fr: 248
				},
				financement_regularPaymentTTC_range: {
					fr: 248
				},
				finition: 'active',
				fuel: {
					label: 'Essence sans plomb',
					slug: 'essence-sans-plomb',
					groupLabel: 'Essence',
					groupSlug: 'essence',
					mergedLabel: 'Essence',
					mergedSlug: 'essence',
					code: 'ESS'
				},
				gear: {
					label: 'Boîte manuelle',
					slug: 'boite-manuelle',
					groupLabel: 'Manuelle',
					groupSlug: 'manuelle',
					mergedLabel: 'Manuelle',
					mergedSlug: 'manuelle',
					code: null
				},
				greenZoneLevel: '1',
				mileage: 26638,
				physicalPowerRange: '0-100',
				price: 13489,
				promos_fr: ['superpromo|black'],
				promosv2_fr: [{ label: 'SuperPromo', slug: 'superpromo|black' }],
				seatNb: '5',
				sellYear: 2022,
				silhouette: {
					slug: 'citadine',
					label: 'Citadine'
				},
				type: 'vo',
				priceCatalog: null,
				initialPrice: 15189,
				initialPriceFormatCurrency: '15 189',
				priceDifference: -1700,
				priceDifferenceFormatCurrency: '- 1 700',
				priceDifferencePercentage: -11,
				dealerId: 66727,
				firstRegistrationYearMonth: '05/2022',
				slug: 'peugeot-208-puretech-75-s-s-bvm5-active-pack-blanc',
				averageConsumption: 0,
				vin: 'VR3UPHMHDNT035055',
				isOld: true,
				isBooked: false,
				dealerLat: 45.721067,
				dealerLng: 4.8739827,
				priceWithFinancing: null,
				priceWithFinancingFormatCurrency: null,
				previousUse: 'EX LOUEUR',
				mixedWltp: null,
				lowSpeed: null,
				mediumSpeed: null,
				highSpeed: null,
				extraHighSpeed: null,
				powerConsumption: null,
				autonomy: null,
				randomOrder: 5,
				autonomyCity: null,
				co2WltpMt: null,
				shape: {
					label: 'Citadine',
					slug: 'citadine'
				},
				kind: {
					label: 'VP',
					slug: 'vp'
				},
				contract: 'Spoticar Premium',
				stamp: 'SPR',
				contractDuration: 12,
				firstPhoto:
					'https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fuvpictures-eu-central-1%2F1280%2FSP%2FFR%2FPEUGEOT-208-3192111_1.JPG',
				photos: [
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_1.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_2.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_3.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_4.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_5.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_6.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_7.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_8.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_9.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_10.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_11.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_12.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_13.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_14.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_15.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_16.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_17.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_18.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_19.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_20.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_21.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_22.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_23.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_24.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_25.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_26.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_27.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_28.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_29.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_30.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_31.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_32.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_33.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_34.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_35.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_36.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_37.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_38.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_39.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_40.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_41.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_42.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_43.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_44.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_45.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_46.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_47.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_48.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_49.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_50.JPG',
					'https://s3.eu-central-1.amazonaws.com/uvpictures-eu-central-1/1280/SP/FR/PEUGEOT-208-3192111_51.JPG'
				],
				typeImport: 'buvo',
				updated: '2024-11-22',
				created: '2024-08-22',
				hasFinancement: true,
				financement_primaryText: {
					fr: ''
				},
				financement_ctaDetailText: {
					fr: null
				},
				financement_displayDetail: {
					fr: true
				},
				financement_legalNotice: {
					fr: ''
				}
			}
		]
	}
};

/**
 *  ######################################################################################################################
 */

/**
 * C11 - Promotion Slider
 */
export type PromotionCard = {
	asset: AssetImageRendition | AssetVideoRendition; // Percorso dell'immagine del veicolo
	title: string; // Titolo della promozione
	description: string; // Descrizione della promozione
	cta: Link; // URL del pulsante Call to Action
	startPublishDate: string;
	endPublishDate: string;
};

export type PromotionsSliderProps = {
	title: string; // Titolo del carosello (es. "Our promotions")
	cards: PromotionCard[]; // Array di promozioni da visualizzare nel carosello
};
//Esempio di PromotionsSliderProps
export const promotionsSliderData: PromotionsSliderProps = {
	title: 'Our promotions',
	cards: [
		{
			asset: {
				type: 'image',
				src: 'path/to/image1.jpg',
				alt: 'New Jeep Savana 4xe Pure Tech',
				width: 100,
				height: 100,
				title: 'promotion image or video'
			},
			title: 'New Jeep Savana 4xe Pure Tech',
			description: 'Discover our latest promotions and offers',
			cta: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/promotions' }
			},
			startPublishDate: '10/10/2010',
			endPublishDate: '10/10/2010'
		},
		{
			asset: {
				type: 'image',
				src: 'path/to/image2.jpg',
				alt: 'New Jeep Savana 4xe Pure Tech',
				width: 100,
				height: 100,
				title: 'promotion image or video'
			},
			title: 'New Jeep Savana 4xe Pure Tech',
			description: 'Discover our latest promotions and offers',
			cta: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/promotions' }
			},
			startPublishDate: '10/10/2010',
			endPublishDate: '10/10/2010'
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C12 - Banner List
 */
export type BannerListCard = {
	asset: AssetImageRendition | AssetVideoRendition; // Percorso dell'immagine del banner
	title: string; // Titolo del banner
	description: string; // Descrizione del banner
	cta: Link; // URL del pulsante Call to Action
};

export type BannerListProps = {
	title: string; // Titolo del carosello (es. "Our services")
	cards: BannerListCard[]; // Array di banner da visualizzare nella lista
};
//Esempio di BannerListProps
export const bannerListData: BannerListProps = {
	title: 'Our services',
	cards: [
		{
			asset: {
				type: 'image',
				src: 'path/to/image1.jpg',
				alt: 'New Jeep Savana 4xe Pure Tech',
				width: 100,
				height: 100,
				title: 'banner image or video'
			},
			title: 'New Jeep Savana 4xe Pure Tech',
			description: 'Discover our latest promotions and offers',
			cta: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/promotions' }
			}
		},
		{
			asset: {
				type: 'image',
				src: 'path/to/image2.jpg',
				alt: 'New Jeep Savana 4xe Pure Tech',
				width: 100,
				height: 100,
				title: 'banner image or video'
			},
			title: 'New Jeep Savana 4xe Pure Tech',
			description: 'Discover our latest promotions and offers',
			cta: {
				label: null,
				blank: false,
				tagAdobe: null,
				action: { type: 'view', path: '/promotions' }
			}
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C13 - Article Carousel
 */
export type CarouselArticleCard = {
	asset: AssetImageRendition | AssetVideoRendition; // Percorso dell'immagine dell'articolo
	category: string; // Categoria dell'articolo
	title: string; // Titolo dell'articolo
	description: string; // Descrizione dell'articolo
	cta: Link; // URL del pulsante Call to Action
};

export type ArticleCarouselProps = {
	title: string; // Titolo del carosello (es. "Our services")
	articles: CarouselArticleCard[]; // Array di articoli da visualizzare nel carosello
	categories: Link[]; // Lista di link per le categorie dell'articolo
	ctas: Link[]; // Lista di CTA per il componente
};
//Esempio di ArticleCarouselProps
export const articleCarouselData: ArticleCarouselProps = {
	title: 'Our services',
	categories: [
		{
			label: 'Buying Guide',
			blank: false,
			tagAdobe: 'adobe_buying_guide',
			action: { type: 'view', path: '/categories/buying-guide' }
		},
		{
			label: 'Buying Advice',
			blank: false,
			tagAdobe: 'adobe_buying_advice',
			action: { type: 'view', path: '/categories/buying-advice' }
		},
		{
			label: 'Interview',
			blank: false,
			tagAdobe: 'adobe_interview',
			action: { type: 'view', path: '/categories/interview' }
		},
		{
			label: 'Sell a Car',
			blank: false,
			tagAdobe: 'adobe_sell_a_car',
			action: { type: 'view', path: '/categories/sell-a-car' }
		},
		{
			label: 'Clean Cars',
			blank: false,
			tagAdobe: 'adobe_clean_cars',
			action: { type: 'view', path: '/categories/clean-cars' }
		},
		{
			label: 'Funding',
			blank: false,
			tagAdobe: 'adobe_funding',
			action: { type: 'view', path: '/categories/funding' }
		}
	],
	ctas: [
		{
			label: 'Explore all articles',
			blank: false,
			tagAdobe: 'adobe_explore_all_articles',
			action: { type: 'view', path: '/all-articles' }
		},
		{
			label: null,
			blank: false,
			tagAdobe: 'adobe_next_page',
			action: { type: 'view', path: '/next-page' }
		}
	],
	articles: [
		{
			asset: {
				type: 'image',
				src: 'path/to/image1.jpg',
				alt: 'New Jeep Savana 4xe Pure Tech',
				width: 100,
				height: 100,
				title: 'article image or video'
			},
			category: 'Buying Guide',
			title: 'New Jeep Savana 4xe Pure Tech',
			description: 'Discover our latest promotions and offers',
			cta: {
				label: 'Read more',
				blank: false,
				tagAdobe: 'adobe_read_more',
				action: { type: 'view', path: '/promotions' }
			}
		}
	]
};

/**
 *  ######################################################################################################################
 */

/**
 * C999 - BOH
 */

export interface NavigationHeader {
	logo: AssetImageRendition; // Logo del menu
	navbarCtas: Array<navbarCta>; // Lista di CTA della parte superiore del header
	searchPlaceholder: string; // Placeholder per il campo di ricerca
	items: Array<NavigationItem>; // Elementi principali del menu
	callout: {
		title: string;
		description: string;
		cta: Link;
	}; // Callout nella parte posteriore del header
	bottomItems?: Array<Link>;
}

export type navbarCta = {
	type: 'close' | 'profile' | 'location' | 'back';
	cta: Link;
};

// Elementi principali della navigazione
export interface NavigationItem extends Link {
	subItems?: Array<NavigationItem>; // Contenuto per le modali, come array di link
	divider?: boolean;
	cta?: Link; // Call-to-action opzionale per i veicoli
}

function openModal(modalType: string) {
	return;
}

function closeModal() {
	return;
}

function backModal(modalType: string) {
	return;
}

export const navigation: NavigationHeader = {
	logo: {
		type: 'image',
		src: '/assets/logo.png',
		alt: 'Stellantis Logo',
		width: 100,
		height: 100,
		title: 'header logo'
	},
	navbarCtas: [
		{
			type: 'close',
			cta: {
				label: null,
				asset: {
					type: 'image',
					src: '/assets/close-icon.png',
					width: 100,
					height: 100,
					title: 'sedan category icon'
				},
				blank: false,
				tagAdobe: 'header-close-header',
				action: {
					type: 'functionalAction',
					function: () => closeModal()
				}
			}
		},
		{
			type: 'back',
			cta: {
				label: null,
				asset: {
					type: 'image',
					src: '/assets/arrow-left-icon.png',
					width: 100,
					height: 100,
					title: 'sedan category icon'
				},
				blank: false,
				tagAdobe: 'header-back-header',
				action: {
					type: 'functionalAction',
					function: () => backModal('category')
				}
			}
		},
		{
			type: 'profile',
			cta: {
				label: null,
				asset: {
					type: 'image',
					src: '/assets/profile-icon.png',
					width: 100,
					height: 100,
					title: 'sedan category icon'
				},
				blank: false,
				tagAdobe: 'header-profile-cta',
				action: {
					type: 'view',
					path: '/profile'
				}
			}
		},
		{
			type: 'location',
			cta: {
				label: null,
				asset: {
					type: 'image',
					src: '/assets/location-icon.png',
					width: 100,
					height: 100,
					title: 'sedan category icon'
				},
				blank: false,
				tagAdobe: 'header-location-cta',
				action: {
					type: 'view',
					path: '/location'
				}
			}
		}
	],
	searchPlaceholder: 'Search vehicles',
	items: [
		{
			label: 'New',
			blank: false,
			tagAdobe: 'asdasd',
			subItems: [
				{
					label: 'Brands',
					blank: false,
					tagAdobe: 'header-brands-list',
					subItems: [
						{
							label: 'Opel',
							blank: false,
							tagAdobe: 'header-brands-opel',
							asset: {
								type: 'image',
								src: '/assets/opel.png',
								width: 100,
								height: 100,
								title: 'sedan category icon',
								alt: 'opel image'
							},
							action: {
								type: 'view',
								path: '/brands/opel'
							}
						}
					]
				},
				{
					label: 'Category',
					blank: false,
					tagAdobe: 'header-category-list',
					subItems: [
						{
							label: 'SUV',
							blank: false,
							tagAdobe: 'header-category-suv',
							asset: {
								type: 'image',
								src: '/assets/suv.png',
								width: 100,
								height: 100,
								title: 'sedan category icon',
								alt: 'suv image'
							},
							action: {
								type: 'view',
								path: '/categories/suv'
							}
						}
					]
				}
			],
			divider: false,
			cta: {
				label: 'Show All Vehicles',
				blank: false,
				tagAdobe: 'header-show-all-vehicles-new',
				action: { type: 'view', path: '/vehicles' }
			}
		},
		{
			label: 'Used',
			blank: false,
			tagAdobe: 'asdasd',
			subItems: [
				{
					label: 'Brands',
					blank: false,
					tagAdobe: 'header-brands-list-used',
					subItems: [
						{
							label: 'Opel',
							blank: false,
							tagAdobe: 'header-brands-opel-used',
							asset: {
								type: 'image',
								src: '/assets/opel.png',
								width: 100,
								height: 100,
								title: 'sedan category icon',
								alt: 'opel image'
							},
							action: {
								type: 'view',
								path: '/brands/opel'
							}
						}
					]
				},
				{
					label: 'Category',
					blank: false,
					tagAdobe: 'header-category-list',
					subItems: [
						{
							label: 'SUV',
							blank: false,
							tagAdobe: 'header-category-suv-used',
							asset: {
								type: 'image',
								src: '/assets/suv.png',
								width: 100,
								height: 100,
								title: 'sedan category icon',
								alt: 'suv image'
							},
							action: {
								type: 'view',
								path: '/categories/suv'
							}
						}
					]
				}
			],
			divider: false,
			cta: {
				label: 'Show All Vehicles',
				blank: false,
				tagAdobe: 'header-show-all-vehicles-used',
				action: { type: 'view', path: '/vehicles' }
			}
		},
		{
			label: 'After-sales',
			blank: false,
			tagAdobe: 'header-after-sales',
			action: {
				type: 'view',
				path: '/after-sales'
			},
			divider: false
		},
		{
			label: 'Promotions',
			blank: false,
			tagAdobe: 'header-promotions',
			subItems: [
				{
					label: 'Our promotions',
					blank: false,
					tagAdobe: 'header-our-promotions',
					action: { type: 'view', path: '/promotions/our-promotions' }
				},
				{
					label: 'Flash Deals',
					blank: false,
					tagAdobe: 'header-flash-deals',
					action: { type: 'view', path: '/promotions/flash-deals' }
				}
			],
			divider: true
		},
		{
			label: 'Sell a car',
			blank: false,
			tagAdobe: 'header-sell-a-car',
			action: {
				type: 'view',
				path: '/sell-a-car'
			},
			divider: false
		},
		{
			label: 'Financing',
			blank: false,
			tagAdobe: 'header-financing',
			action: {
				type: 'view',
				path: '/financing'
			},
			divider: false
		},
		{
			label: 'About Us',
			blank: false,
			tagAdobe: 'header-about-us',
			subItems: [
				{
					label: 'Who we are',
					blank: false,
					tagAdobe: 'header-who-we-are',
					action: { type: 'view', path: '/about-us/who-we-are' }
				},
				{
					label: 'Careers',
					blank: false,
					tagAdobe: 'header-careers',
					action: { type: 'view', path: '/about-us/careers' }
				}
			],
			divider: false
		}
	],
	callout: {
		title: 'Find a dealership nwar you',
		description: 'Our expert will help you find the perfect car for your needs',
		cta: {
			label: null,
			asset: {
				type: 'image',
				src: '/assets/arrow-right',
				width: 100,
				height: 100,
				title: 'sedan category icon',
				alt: 'header find dealership near you'
			},
			blank: false,
			tagAdobe: 'header-callout',
			action: {
				type: 'view',
				path: '/dealers'
			}
		}
	},
	bottomItems: [
		{
			label: 'Sign Up',
			blank: false,
			tagAdobe: 'header-sign-up',
			action: {
				type: 'view',
				path: '/sign-up'
			}
		},
		{
			label: 'Login',
			blank: false,
			tagAdobe: 'header-login',
			action: {
				type: 'view',
				path: '/login'
			}
		}
	]
};


/**
 *  ######################################################################################################################
 */

/**
 * C - VehicleListing
 */


export interface VehicleListingFilterItem { 
	label: string;
	value: string;
	quantity?: number;
	isDisabled?: boolean;
	isSelected?: boolean;
}


export interface VehicleListingFilterSection { 
	title: string;
	items: VehicleListingFilterItem[];
	showAllCta?: Link; // CTA per il pulsante di visualizzazione di tutti i risultati
}

export interface VehicleListingFlag {
	label: string;
	id: string;
}

export interface Breadcrumb { 
	label: string;
	link: Link;
}

export interface PLPHeader {
	title: string;
	locations: VehicleListingFilterSection; // ! arriva da CMS
}

export interface PLP {
	breadcrumbs: Breadcrumb[];
	PLPHeader: PLPHeader;
	// ? sortingSection: VehicleListingFilterSection;
	flags: VehicleListingFlag[];
	loadMoreLabel: string; 
	disclaimer: string;
}


// PDP

export interface PDP {
	breadcrumbs: Breadcrumb[];
	PLPHeader: PLPHeader;
	// ? sortingSection: VehicleListingFilterSection;
	flags: VehicleListingFlag[];
	loadMoreLabel: string;



	detailSection: {
		title: string; // Titolo della sezione (es. "New Jeep Savana 4xe Pure Tech")
		subtitle: string; // Sottotitolo della sezione
		items: {
			title: string;
			description: string;
			iconName: string;
			type: string; // per il colore
		}[];
		img: AssetImageRendition; // ?
	};
	blockSection: {
		title: string; // Titolo della sezione (es. "Trade-in")
		subtitle: string; // Sottotitolo della sezione
		cta: Link[]; // Testo del pulsante "Estimate your vehicle"
	};
	contactSection: {
		title: string; // Titolo della sezione (es. "Shipping")
		subtitle: string; // Sottotitolo della sezione (es. "Contact")
		locationName: string; // Nome della sede (es. "STELLANTIS & YOU PARIS PANTIN")
		address: Link; // Indirizzo della sede (es. "Via Imperatore Federico 79, 90143 Palermo")
		locationStatus: string; // Stato della sede (es. "Open")
		locationHours: {
			openHour: string; // Orario di apertura della sede (es. "till 19h00")
			closeHour: string; // Orario di chiusura della sede (es. "till 19h00")
			id: string; // ID del giorno della settimana (es. "monday")
		}[],
		phoneSection: {
			questionsTitle: string; // Domanda per il contatto (es. "Any questions about this vehicle?")
			contactPhoneLabel: string; // Etichetta per il numero di telefono (es. "Phone number")
			ctas: Link[]; // Testo del pulsante "Call Me Back" o "Get a quote"
		}
	}

	disclaimer: string;
}
