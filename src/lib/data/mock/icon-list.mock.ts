import type { IconListProps } from "$lib/components/icon-list/model";

export const iconListMock: IconListProps = {
  items: [
    {
      assetImage: {
        type: "image",
        src: "path/to/icon-efficiency.png",
        alt: "Fuel Efficiency",
        width: 100,
        height: 100,
        title: "efficiency icon",
      },
      title: "Fuel Efficiency",
      description:
        "This vehicle offers excellent fuel efficiency, saving you money on fuel over time.",
    },
    {
      assetImage: {
        type: "image",
        src: "path/to/icon-safety.png",
        alt: "Safety Features",
        width: 100,
        height: 100,
        title: "safety icon",
      },
      title: "Safety Features",
      description:
        "Equipped with advanced safety technologies to ensure maximum protection on the road.",
    },
    {
      assetImage: {
        type: "image",
        src: "path/to/icon-warranty.png",
        alt: "Warranty",
        width: 100,
        height: 100,
        title: "warranty icon",
      },
      title: "Warranty",
      description:
        "Comes with a comprehensive 5-year warranty for peace of mind.",
    },
    {
      assetImage: {
        type: "image",
        src: "path/to/icon-technology.png",
        alt: "Technology",
        width: 100,
        height: 100,
        title: "tecghnology icon",
      },
      title: "Technology",
      description:
        "Features cutting-edge technology for an enhanced driving experience.",
    },
  ],
};