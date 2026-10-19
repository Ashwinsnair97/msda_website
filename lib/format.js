// Zero-padded ordinal for numbered lists: 0 → "01".
export function formatIndex(index) {
  return String(index + 1).padStart(2, "0");
}
