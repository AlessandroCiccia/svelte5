import type { CategoryCarouselProps } from "$lib/components/category-carousel/model";

export const categoryCarouselMock: CategoryCarouselProps = {
  title: "Browse Our Vehicles",
  subtitle: "Explore a wide range of categories, from city cars to SUVs",
  categories: {
    used: [
      {
        name: "City car",
        assetImage: {
          type: "image",
          src: "path/to/icon-city-car.png",
          alt: "City car",
          width: 100,
          height: 100,
          title: "city-car icon",
        },
        vehicleCount: 25,
        link: {
          label: null,
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/categories/city-car" },
        },
      },
      {
        name: "SUV",
        assetImage: {
          type: "image",
          src: "path/to/icon-suv.png",
          alt: "SUV",
          width: 100,
          height: 100,
          title: "suv icon",
        },
        vehicleCount: 18,
        link: {
          label: null,
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/categories/suv" },
        },
      },
    ],
    new: [
      {
        name: "Electric",
        assetImage: {
          type: "image",
          src: "path/to/icon-electric.png",
          alt: "Electric",
          width: 100,
          height: 100,
          title: "electric icon",
        },
        vehicleCount: 12,
        link: {
          label: null,
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/categories/electric" },
        },
      },
      {
        name: "Luxury",
        assetImage: {
          type: "image",
          src: "path/to/icon-luxury.png",
          alt: "Luxury",
          width: 100,
          height: 100,
          title: "luxury icon",
        },
        vehicleCount: 8,
        link: {
          label: null,
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/categories/luxury" },
        },
      },
    ],
  },
};