function currectSlideDeckGenerator(lib, idx) {
  if (idx < 4) {
    return lib.slice(0, 7);
  }
  return idx > lib.length - 4 ? lib.slice(lib.length - 7) : lib.slice(idx - 3, idx + 4);
}

function findImageById(lib, id) {
  for (let i = 0; i < lib.length; i += 1) {
    if (lib[i].id === id) {
      return i;
    }
  }
  return 'couldn\'t find the image';
}

export default { currectSlideDeckGenerator, findImageById };
