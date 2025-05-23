// cloudinary-loader.js
export default function cloudinaryLoader({ src, width, quality }) {
  // si no pasas quality en <Image>, quedará 'auto'
  const q = quality || 'auto'
  // inyecta w_{width},q_{q} tras "/upload/"
  return src.replace(
    '/upload/',
    `/upload/w_${width},q_${q},c_limit/`
  )
}
