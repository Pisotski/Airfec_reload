const currectSlideDeckGenerator = (collection, currentIndex) => {
  if (currentIndex < 4) {
    return collection.slice(0, 7);
  }
  return currentIndex > collection.length - 4 ? collection.slice(collection.length - 7) : collection.slice(currentIndex - 3, currentIndex + 4);
};

export default { currectSlideDeckGenerator };
