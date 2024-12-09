import type { PromotionsSliderProps } from "$lib/components/promotion-slider/model";

export const promotionsSliderMock: PromotionsSliderProps = {
  title: "Our promotions",
  cards: [
    {
      asset: {
        type: "image",
        src: "path/to/image1.jpg",
        alt: "New Jeep Savana 4xe Pure Tech",
        width: 100,
        height: 100,
        title: "promotion image or video",
      },
      title: "New Jeep Savana 4xe Pure Tech",
      description: "Discover our latest promotions and offers",
      cta: {
        label: null,
        blank: false,
        tagAdobe: null,
        action: { type: "view", path: "/promotions" },
      },
      startPublishDate: "10/10/2010",
      endPublishDate: "10/10/2010",
    },
    {
      asset: {
        type: "image",
        src: "path/to/image2.jpg",
        alt: "New Jeep Savana 4xe Pure Tech",
        width: 100,
        height: 100,
        title: "promotion image or video",
      },
      title: "New Jeep Savana 4xe Pure Tech",
      description: "Discover our latest promotions and offers",
      cta: {
        label: null,
        blank: false,
        tagAdobe: null,
        action: { type: "view", path: "/promotions" },
      },
      startPublishDate: "10/10/2010",
      endPublishDate: "10/10/2010",
    },
  ],
};