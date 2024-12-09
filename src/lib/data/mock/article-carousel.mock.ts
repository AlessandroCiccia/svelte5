import type { ArticleCarouselProps } from "$lib/components/article-carousel/model";

export const articleCarouselMock: ArticleCarouselProps = {
  title: "Our services",
  categories: [
    {
      label: "Buying Guide",
      blank: false,
      tagAdobe: "adobe_buying_guide",
      action: { type: "view", path: "/categories/buying-guide" },
    },
    {
      label: "Buying Advice",
      blank: false,
      tagAdobe: "adobe_buying_advice",
      action: { type: "view", path: "/categories/buying-advice" },
    },
    {
      label: "Interview",
      blank: false,
      tagAdobe: "adobe_interview",
      action: { type: "view", path: "/categories/interview" },
    },
    {
      label: "Sell a Car",
      blank: false,
      tagAdobe: "adobe_sell_a_car",
      action: { type: "view", path: "/categories/sell-a-car" },
    },
    {
      label: "Clean Cars",
      blank: false,
      tagAdobe: "adobe_clean_cars",
      action: { type: "view", path: "/categories/clean-cars" },
    },
    {
      label: "Funding",
      blank: false,
      tagAdobe: "adobe_funding",
      action: { type: "view", path: "/categories/funding" },
    },
  ],
  ctas: [
    {
      label: "Explore all articles",
      blank: false,
      tagAdobe: "adobe_explore_all_articles",
      action: { type: "view", path: "/all-articles" },
    },
    {
      label: null,
      blank: false,
      tagAdobe: "adobe_next_page",
      action: { type: "view", path: "/next-page" },
    },
  ],
  articles: [
    {
      asset: {
        type: "image",
        src: "path/to/image1.jpg",
        alt: "New Jeep Savana 4xe Pure Tech",
        width: 100,
        height: 100,
        title: "article image or video",
      },
      category: "Buying Guide",
      title: "New Jeep Savana 4xe Pure Tech",
      description: "Discover our latest promotions and offers",
      cta: {
        label: "Read more",
        blank: false,
        tagAdobe: "adobe_read_more",
        action: { type: "view", path: "/promotions" },
      },
    },
  ],
};