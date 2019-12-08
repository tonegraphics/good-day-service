export const fonts = desktop =>
  desktop
    ? {
        headline: 40,
        firstLetter: 56,
        subHeadline: 32,
        body: 24,
        headerText: 14,
      }
    : {
        headline: 32,
        firstLetter: 40,
        subHeadline: 24,
        body: 16,
        headerText: 10,
      }
