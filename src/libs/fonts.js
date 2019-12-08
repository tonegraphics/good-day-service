export function fonts(desktop) {
  let sizes
  desktop
    ? (sizes = {
        headline: 40,
        firstLetter: 56,
        subHeadline: 32,
        body: 24,
      })
    : (sizes = {
        headline: 32,
        firstLetter: 40,
        subHeadline: 24,
        body: 16,
      })
  return sizes
}
