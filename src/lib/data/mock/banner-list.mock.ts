import type { BannerListProps } from "$lib/components/banner-list/model";

export const bannerListMock: BannerListProps = {
  title: "Our services",
  cards: [
    {
      asset: {
        type: "image",
        src: "path/to/image1.jpg",
        alt: "New Jeep Savana 4xe Pure Tech",
        width: 100,
        height: 100,
        title: "banner image or video",
      },
      title: "New Jeep Savana 4xe Pure Tech",
      description: "Discover our latest promotions and offers",
      cta: {
        label: null,
        blank: false,
        tagAdobe: null,
        action: { type: "view", path: "/promotions" },
      },
    },
    {
      asset: {
        type: "image",
        src: "path/to/image2.jpg",
        alt: "New Jeep Savana 4xe Pure Tech",
        width: 100,
        height: 100,
        title: "banner image or video",
      },
      title: "New Jeep Savana 4xe Pure Tech",
      description: "Discover our latest promotions and offers",
      cta: {
        label: null,
        blank: false,
        tagAdobe: null,
        action: { type: "view", path: "/promotions" },
      },
    },
  ],
};