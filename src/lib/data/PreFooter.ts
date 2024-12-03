import type { AssetImage, Link, VehicleCodeCategory } from "../commonTypes";

export type VehicleCategory = {
  assetImage: AssetImage; // Percorso o URL del logo della categoria di veicoli
  link: Link; // URL della pagina relativa alla categoria di veicoli
  codeCategory: VehicleCodeCategory[]; // Codice della categoria di veicoli
};

export type VehicleBrand = {
  brandDescription: string; // Nome del brand
  assetImage: AssetImage; // Percorso o URL del logo del brand
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
  title: "Explore our vehicles",
  vehicleCategories: {
    title: "By Category",
    items: [
      {
        assetImage: {
          src: "PreFooter/category/3.png",
          alt: "City Car",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/city-car",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "City Car",
          },
        ],
      },
      {
        assetImage: {
          src: "PreFooter/category/1.png",
          alt: "Family",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/family",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "Family",
          },
        ],
      },
      {
        assetImage: {
          src: "PreFooter/category/2.png",
          alt: "Adventure",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/adventure",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "Adventure",
          },
        ],
      },
      {
        assetImage: {
          src: "PreFooter/category/3.png",
          alt: "City Car",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/city-car",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "City Car",
          },
        ],
      },
      {
        assetImage: {
          src: "PreFooter/category/1.png",
          alt: "Family",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/family",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "Family",
          },
        ],
      },
      {
        assetImage: {
          src: "PreFooter/category/2.png",
          alt: "Adventure",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/adventure",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "Adventure",
          },
        ],
      },
    ],
  },
  vehicleBrands: {
    title: "By Brands",
    items: [
      {
        brandDescription: "Abarth",
        assetImage: {
          src: "PreFooter/brands/abarth.png",
          alt: "Abarth",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "Alfa Romeo",
        assetImage: {
          src: "PreFooter/brands/alfa-romeo.png",
          alt: "Alfa Romeo",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-y",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "Citroen",
        assetImage: {
          src: "PreFooter/brands/citroen.png",
          alt: "Citroen",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "FIAT Professional",
        assetImage: {
          src: "PreFooter/brands/fiat-pro.png",
          alt: "Fiat Professional",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "FIAT",
        assetImage: {
          src: "PreFooter/brands/fiat.png",
          alt: "Brand X",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "Jeep",
        assetImage: {
          src: "PreFooter/brands/jeep.png",
          alt: "Jeep",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "Lancia",
        assetImage: {
          src: "PreFooter/brands/lancia.png",
          alt: "Lancia",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "Peugeot",
        assetImage: {
          src: "PreFooter/brands/peugeot.png",
          alt: "Peugeot",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
      {
        brandDescription: "Opel",
        assetImage: {
          src: "PreFooter/brands/opel.png",
          alt: "Opel",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_brands",
          action: {
            type: "view",
            path: "/brands/brand-x",
          },
        },
        businessArea: "After Sales",
      },
    ],
  },
  customerFavorites: {
    title: "Customer Favorites",
    items: [
      {
        brandDescription: "Luxury Sedan 2024",
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_customer_favorites",
          action: {
            type: "view",
            path: "/vehicles/luxury-sedan-2024",
          },
        },
      },
      {
        brandDescription: "Eco-friendly SUV",
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_customer_favorites",
          action: {
            type: "view",
            path: "/vehicles/eco-friendly-suv",
          },
        },
      },
    ],
  },
};
