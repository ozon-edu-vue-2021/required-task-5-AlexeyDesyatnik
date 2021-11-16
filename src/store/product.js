/**
 * Generate Product object from API data
 */

export const productFromApiData = (object) => ({
  id: object.id,
  name: object.dish,
  price: Math.round(Math.random() * 1000),
  imageSrc: './assets/data/images/6123150777.webp',
});
