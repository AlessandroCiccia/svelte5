import type { PreFooterProps } from "$lib/components/pre-footer/model";

export const preFooterMock: PreFooterProps = {
  title: "Explore More",
  vehicleCategories: {
    title: "Browse by Category",
    items: [
      {
        assetImage: {
          type: "image",
          src: "path/to/suv-logo.png",
          alt: "SUV",
          width: 100,
          height: 100,
          title: "suv category icon",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/suv",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "After Sales",
          },
        ],
      },
      {
        assetImage: {
          type: "image",
          src: "path/to/sedan-logo.png",
          alt: "Sedan",
          width: 100,
          height: 100,
          title: "sedan category icon",
        },
        link: {
          label: null,
          blank: false,
          tagAdobe: "cta_homepage_pre_footer_vehicle_categories",
          action: {
            type: "view",
            path: "/categories/sedan",
          },
        },
        codeCategory: [
          {
            code: "1",
            description: "After Sales",
          },
        ],
      },
    ],
  },
  vehicleBrands: {
    title: "Our Trusted Brands",
    items: [
      {
        brandDescription: "Brand X",
        assetImage: {
          type: "image",
          src: "path/to/brand-x-logo.png",
          alt: "Brand X",
          width: 100,
          height: 100,
          title: "brand x icon",
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
        brandDescription: "Brand Y",
        assetImage: {
          type: "image",
          src: "path/to/brand-y-logo.png",
          alt: "Brand Y",
          width: 100,
          height: 100,
          title: "brand y icon",
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