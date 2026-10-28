/**
 * Formas orgânicas (border-radius) usadas nas fotografias.
 * A primeira é o estado estático (e o de movimento reduzido); o GSAP faz a
 * forma "respirar" entre as demais, devagar.
 */
export const BLOBS = {
  hero: [
    '56% 44% 42% 58% / 48% 56% 44% 52%',
    '44% 56% 58% 42% / 56% 44% 56% 44%',
    '52% 48% 36% 64% / 44% 52% 48% 56%',
  ],
  heroFrame: [
    '44% 56% 58% 42% / 56% 44% 56% 44%',
    '56% 44% 42% 58% / 48% 56% 44% 52%',
    '40% 60% 46% 54% / 52% 40% 60% 48%',
  ],
  experience: [
    '38% 62% 54% 46% / 52% 42% 58% 48%',
    '58% 42% 40% 60% / 44% 56% 44% 56%',
    '46% 54% 60% 40% / 56% 48% 52% 44%',
  ],
  course: [
    '60% 40% 46% 54% / 44% 58% 42% 56%',
    '42% 58% 56% 44% / 56% 44% 56% 44%',
    '54% 46% 38% 62% / 48% 52% 48% 52%',
  ],
}

/** Atributos prontos para espalhar no elemento: estado inicial + formas do GSAP. */
export const blobProps = (shapes) => ({
  style: { borderRadius: shapes[0] },
  'data-blob': shapes.join('|'),
})
