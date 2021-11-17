/**
 * Generate Product object from API data
 */

const productImages = [
  '6123150777.webp',
  '6126040354.webp',
  '6134992334.webp',
  '6136172483.webp',
  '6142673815.webp',
  '6142683276.webp',
  '6126039472.webp',
  '6128597660.webp',
  '6136170572.webp',
  '6140906765.webp',
  '6142681673.webp',
  '6148226736.webp',
];

const getRandomProductImage = () => {
  const idx = Math.round(Math.random() * productImages.length);
  return productImages[idx];
};

export const productFromApiData = (object) => ({
  id: object.id,
  name: object.dish,
  price: Math.round(Math.random() * 1000),
  imageSrc: getRandomProductImage(),
});
