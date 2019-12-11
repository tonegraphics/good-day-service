export const fonts = isDesktop =>
  isDesktop
    ? {
        headline: 40,
        firstLetter: 48,
        body: 24,
        headerText: 14,
        identity: 32,
        table: 20,
      }
    : {
        headline: 32,
        firstLetter: 40,
        body: 16,
        headerText: 10,
        identity: 16,
        table: 14,
      }
