import type { HeaderProps } from "$lib/components/header/model";

export const headerMock: HeaderProps = {
  logo: {
    type: "image",
    src: "/assets/logo.png",
    alt: "Stellantis Logo",
    width: 100,
    height: 100,
    title: "header logo",
  },
  navbarCtas: [
    {
      type: "close",
      cta: {
        label: null,
        asset: {
          type: "image",
          src: "/assets/close-icon.png",
          width: 100,
          height: 100,
          title: "sedan category icon",
        },
        blank: false,
        tagAdobe: "header-close-header",
        // action: {
        //   type: "functionalAction",
        //   function: () => closeModal(),
        // },
      },
    },
    {
      type: "back",
      cta: {
        label: null,
        asset: {
          type: "image",
          src: "/assets/arrow-left-icon.png",
          width: 100,
          height: 100,
          title: "sedan category icon",
        },
        blank: false,
        tagAdobe: "header-back-header",
        // action: {
        //   type: "functionalAction",
        //   function: () => backModal("category"),
        // },
      },
    },
    {
      type: "profile",
      cta: {
        label: null,
        asset: {
          type: "image",
          src: "/assets/profile-icon.png",
          width: 100,
          height: 100,
          title: "sedan category icon",
        },
        blank: false,
        tagAdobe: "header-profile-cta",
        action: {
          type: "view",
          path: "/profile",
        },
      },
    },
    {
      type: "location",
      cta: {
        label: null,
        asset: {
          type: "image",
          src: "/assets/location-icon.png",
          width: 100,
          height: 100,
          title: "sedan category icon",
        },
        blank: false,
        tagAdobe: "header-location-cta",
        action: {
          type: "view",
          path: "/location",
        },
      },
    },
  ],
  searchPlaceholder: "Search vehicles",
  items: [
    {
      label: "New",
      blank: false,
      tagAdobe: "asdasd",
      subItems: [
        {
          label: "Brands",
          blank: false,
          tagAdobe: "header-brands-list",
          subItems: [
            {
              label: "Opel",
              blank: false,
              tagAdobe: "header-brands-opel",
              asset: {
                type: "image",
                src: "/assets/opel.png",
                width: 100,
                height: 100,
                title: "sedan category icon",
                alt: "opel image",
              },
              action: {
                type: "view",
                path: "/brands/opel",
              },
            },
          ],
        },
        {
          label: "Category",
          blank: false,
          tagAdobe: "header-category-list",
          subItems: [
            {
              label: "SUV",
              blank: false,
              tagAdobe: "header-category-suv",
              asset: {
                type: "image",
                src: "/assets/suv.png",
                width: 100,
                height: 100,
                title: "sedan category icon",
                alt: "suv image",
              },
              action: {
                type: "view",
                path: "/categories/suv",
              },
            },
          ],
        },
      ],
      divider: false,
      cta: {
        label: "Show All Vehicles",
        blank: false,
        tagAdobe: "header-show-all-vehicles-new",
        action: { type: "view", path: "/vehicles" },
      },
    },
    {
      label: "Used",
      blank: false,
      tagAdobe: "asdasd",
      subItems: [
        {
          label: "Brands",
          blank: false,
          tagAdobe: "header-brands-list-used",
          subItems: [
            {
              label: "Opel",
              blank: false,
              tagAdobe: "header-brands-opel-used",
              asset: {
                type: "image",
                src: "/assets/opel.png",
                width: 100,
                height: 100,
                title: "sedan category icon",
                alt: "opel image",
              },
              action: {
                type: "view",
                path: "/brands/opel",
              },
            },
          ],
        },
        {
          label: "Category",
          blank: false,
          tagAdobe: "header-category-list",
          subItems: [
            {
              label: "SUV",
              blank: false,
              tagAdobe: "header-category-suv-used",
              asset: {
                type: "image",
                src: "/assets/suv.png",
                width: 100,
                height: 100,
                title: "sedan category icon",
                alt: "suv image",
              },
              action: {
                type: "view",
                path: "/categories/suv",
              },
            },
          ],
        },
      ],
      divider: false,
      cta: {
        label: "Show All Vehicles",
        blank: false,
        tagAdobe: "header-show-all-vehicles-used",
        action: { type: "view", path: "/vehicles" },
      },
    },
    {
      label: "After-sales",
      blank: false,
      tagAdobe: "header-after-sales",
      action: {
        type: "view",
        path: "/after-sales",
      },
      divider: false,
    },
    {
      label: "Promotions",
      blank: false,
      tagAdobe: "header-promotions",
      subItems: [
        {
          label: "Our promotions",
          blank: false,
          tagAdobe: "header-our-promotions",
          action: { type: "view", path: "/promotions/our-promotions" },
        },
        {
          label: "Flash Deals",
          blank: false,
          tagAdobe: "header-flash-deals",
          action: { type: "view", path: "/promotions/flash-deals" },
        },
      ],
      divider: true,
    },
    {
      label: "Sell a car",
      blank: false,
      tagAdobe: "header-sell-a-car",
      action: {
        type: "view",
        path: "/sell-a-car",
      },
      divider: false,
    },
    {
      label: "Financing",
      blank: false,
      tagAdobe: "header-financing",
      action: {
        type: "view",
        path: "/financing",
      },
      divider: false,
    },
    {
      label: "About Us",
      blank: false,
      tagAdobe: "header-about-us",
      subItems: [
        {
          label: "Who we are",
          blank: false,
          tagAdobe: "header-who-we-are",
          action: { type: "view", path: "/about-us/who-we-are" },
        },
        {
          label: "Careers",
          blank: false,
          tagAdobe: "header-careers",
          action: { type: "view", path: "/about-us/careers" },
        },
      ],
      divider: false,
    },
  ],
  callout: {
    title: "Find a dealership nwar you",
    description: "Our expert will help you find the perfect car for your needs",
    cta: {
      label: null,
      asset: {
        type: "image",
        src: "/assets/arrow-right",
        width: 100,
        height: 100,
        title: "sedan category icon",
        alt: "header find dealership near you",
      },
      blank: false,
      tagAdobe: "header-callout",
      action: {
        type: "view",
        path: "/dealers",
      },
    },
  },
  bottomItems: [
    {
      label: "Sign Up",
      blank: false,
      tagAdobe: "header-sign-up",
      action: {
        type: "view",
        path: "/sign-up",
      },
    },
    {
      label: "Login",
      blank: false,
      tagAdobe: "header-login",
      action: {
        type: "view",
        path: "/login",
      },
    },
  ],
};