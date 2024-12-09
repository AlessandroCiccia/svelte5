import type { SliderProps } from "$lib/components/slider/model";

export const sliderMock: SliderProps = {
  title: "Featured Vehicles",
  duration: 5,
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  autoPlay: true,
  slides: [
    {
      title: "New Jeep Savana 4xe Pure Tech",
      asset: {
        type: "image",
        src: "path/to/image1.jpg",
        alt: "New Jeep Savana 4xe Pure Tech",
        width: 100,
        height: 100,
        title: "slider image",
      },
      description: `
          <p>Down payment <strong>€17,903</strong> - 650€/35 months</p>
          <p>Final installment <strong>€46,178.67</strong></p>
          <p>TAN (fixed): <strong>7.25%</strong> - TAEG: <strong>8.21%</strong></p>
          <p>Offer valid until <strong>30/11</strong></p>
        `,
      cta: {
        label: "DISCOVER THE OFFER",
        tagAdobe: null,
        blank: false,
        action: {
          type: "view",
          path: "/offers/new-jeep-savana-4xe",
        },
      },
    },
  ],
};
