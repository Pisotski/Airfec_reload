export default function currectSlideDeckGenerator(lib, idx) {
  if (idx < 4) {
    return lib.slice(0, 7);
  }
  return idx > lib.length - 4 ? lib.slice(lib.length - 7) : lib.slice(idx - 3, idx + 4);
}
