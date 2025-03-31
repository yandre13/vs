import img1 from '../../public/img/HENKO (2023) MIRAFLORES.jpg'
import img2 from '../../public/img/PARDO 664 (2024) MIRAFLORES.jpg'
import img3 from '../../public/img/PARDO COAST (2024) MIRAFLORES.jpg'
import img4 from '../../public/img/MORALES 144 (2025)_SAN ISIDRO.jpg'

export const data = [
	{
		id: 1,
		title: 'Henko',
		description: 'Miraflores 2023',
		image: img1,
		alt: 'Diseño de interiores para proyecto residencial en Perú',
		
		styles: {
			xl: {mt: 1, ml: 3},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 2},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		size: {
			xl: 8,
			lg: 9,
			md: 9,
			sm: 6,
		},
	},
	{
		id: 2,
		title: 'Pardo 664',
		description: 'Miraflores 2024',
		image: img2,
		alt: 'Proyecto de arquitectura en Lima destacado por Visualiza.pe',
		styles: {
			xl: {mt: 4, ml: 5},
			lg: {mt: 2, ml: 10},
			md: {mt: 2, ml: 2},
			sm: {mt: 2, ml: 1},
		},
		aspectRatio: 'ar3x3',
		size: {
			xl: 8,
			lg: 9,
			md: 9,
			sm: 6,
		},
	},
	{
		id: 3,
		title: 'Pardo Coast',
		description: 'Miraflores 2024',
		image: img3,
		alt: 'Visualización 3D de un proyecto arquitectónico en Lima',
		styles: {
			xl: {mt: 2, ml: 7},
			lg: {mt: 2, ml: 1},
			md: {mt: 2, ml: 2},
			sm: {mt: 2, ml: 1},
		},
		aspectRatio: 'ar3x3',
		size: {
			xl: 8,
			lg: 9,
			md: 9,
			sm: 6,
		},
	},
	{
		id: 4,
		title: 'Morales 144',
		description: 'San Isidro 2025',
		image: img4,
		alt: 'Proyecto de arquitectura en Lima destacado por Visualiza.pe',
		styles: {
			xl: {mt: -5, ml: 3},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		size: {
			xl: 8,
			lg: 0,
			md: 0,
			sm: 0,
		},
	},
]
