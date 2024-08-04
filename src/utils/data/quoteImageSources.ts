const sources = [
  {
    media: "(max-width: 767.98px)",
    srcSet: (isFavorites: boolean) =>
      !isFavorites
        ? {
            _1x: "/quote/quote-1-mob@1x.jpg",
            _2x: "/quote/quote-1-mob@2x.jpg",
          }
        : {
            _1x: "/quote/quote-2-mob@1x.jpg",
            _2x: "/quote/quote-2-mob@2x.jpg",
          },
  },

  {
    media: "(max-width: 1439.98px)",
    srcSet: (isFavorites: boolean) =>
      !isFavorites
        ? {
            _1x: "/quote/quote-1-tab@1x.jpg",
            _2x: "/quote/quote-1-tab@2x.jpg",
          }
        : {
            _1x: "/quote/quote-2-tab@1x.jpg",
            _2x: "/quote/quote-2-tab@2x.jpg",
          },
  },

  {
    media: "(min-width: 1440px)",
    srcSet: (isFavorites: boolean) =>
      !isFavorites
        ? {
            _1x: "/quote/quote-1-desk@1x.jpg",
            _2x: "/quote/quote-1-desk@2x.jpg",
          }
        : {
            _1x: "/quote/quote-2-desk@1x.jpg",
            _2x: "/quote/quote-2-desk@2x.jpg",
          },
  },
];

export default sources;
