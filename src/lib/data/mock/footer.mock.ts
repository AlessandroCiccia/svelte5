import type { FooterProps } from "$lib/components/footer/model";

export const footerMock: FooterProps = {
  logo: {
    type: "image",
    src: "path/to/logo.png",
    alt: "Logo azienda",
    width: 100,
    height: 100,
    title: "logo",
  },
  sections: [
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/about" },
        },
        {
          label: "Careers",
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/careers" },
        },
        {
          label: "Privacy Policy",
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/privacy-policy" },
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Help Center",
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/help" },
        },
        {
          label: "FAQ",
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/faq" },
        },
        {
          label: "Contact Us",
          blank: false,
          tagAdobe: null,
          action: { type: "view", path: "/contact" },
        },
      ],
    },
  ],
  socialLinks: [
    {
      assetImage: {
        type: "image",
        src: "path/to/facebook-icon.png",
        alt: "Facebook",
        width: 100,
        height: 100,
        title: "facebook icon",
      },
      link: {
        label: null,
        blank: true,
        tagAdobe: null,
        action: {
          type: "externalUrl",
          url: "https://www.facebook.com/azienda",
        },
      },
    },
    {
      assetImage: {
        type: "image",
        src: "path/to/instagram-icon.png",
        alt: "Instagram",
        width: 100,
        height: 100,
        title: "instagram icon",
      },
      link: {
        label: null,
        blank: true,
        tagAdobe: null,
        action: {
          type: "externalUrl",
          url: "https://www.instagram.com/azienda",
        },
      },
    },
  ],
  copyright: "© 2024 Azienda. Tutti i diritti riservati.",
  legalLinks: [
    {
      label: "Privacy",
      blank: false,
      tagAdobe: null,
      action: { type: "view", path: "/privacy" },
    },
    {
      label: "Cookies",
      blank: false,
      tagAdobe: null,
      action: { type: "view", path: "/cookies" },
    },
  ],
  legalNotes: "Text for legal notes",
  currentLocale: [
    {
      assetImage: {
        type: "image",
        src: "path/to/flag-italy.png",
        alt: "Italian flag",
        width: 100,
        height: 100,
        title: "italy icon",
      },
      label: "Italiano",
    },
    {
      assetImage: {
        type: "image",
        src: "path/to/flag-uk.png",
        alt: "UK flag",
        width: 100,
        height: 100,
        title: "uk icon",
      },
      label: "English",
    },
  ],
};