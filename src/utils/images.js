export function resizeImageUrl(url, widthPx) {
	// Busca la parte "/upload/" en la URL para insertar los parámetros después
	const uploadIndex = url.indexOf('/upload/')
	if (uploadIndex === -1) {
		// Si la URL no es de Cloudinary o no contiene "/upload/", retorna la URL original
		return url
	}

	// Separa la URL en dos partes: antes y después de "/upload/"
	const beforeUpload = url.substring(0, uploadIndex + 8) // incluye "/upload/"
	const afterUpload = url.substring(uploadIndex + 8)

	// Crea la nueva URL con el ancho y los parámetros automáticos
	const newUrl = `${beforeUpload}w_${widthPx},c_limit,f_auto,q_auto/${afterUpload}`

	return newUrl
}
