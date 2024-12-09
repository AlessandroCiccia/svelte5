import type { BannerStickyPromoProps } from "$lib/components/banner-sticky-promo/model";

export const bannerStickyPromoMock: BannerStickyPromoProps = {
  link: {
    label: "Vai a Google",
    blank: false,
    tagAdobe: "cta_homepage_banner_sticky_promo",
    action: {
      type: "externalUrl",
      url: "https://google.com",
    },
  },
  startPublishDate: "2024-12-31",
  endPublishDate: "2024-12-31",
  isEnabled: true,
};