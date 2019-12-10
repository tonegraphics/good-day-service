export const fonts = isDesktop =>
  isDesktop
    ? {
        headline: 32,
        firstLetter: 40,
        body: 20,
        headerText: 14,
        identity: 32,
        table: 20,
      }
    : {
        headline: 24,
        firstLetter: 32,
        body: 16,
        headerText: 10,
        identity: 16,
        table: 14,
      }
