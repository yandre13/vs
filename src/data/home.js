import img1 from '../../public/img/home_1.jpg'
import img2 from '../../public/img/home_2.jpg'
import img3 from '../../public/img/home_3.jpg'
import img4 from '../../public/img/home_4.jpg'

export const data = [
	{
		id: 1,
		title: 'Las Magnolias',
		description: 'Lince 2021',
		image: img1,
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
		title: 'Libertad',
		description: 'Miraflores 2020',
		image: img2,
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
		title: 'Pasaje Laureles',
		description: 'San Isidro 2021',
		image: img3,
		styles: {
			xl: {mt: 2, ml: 8},
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
		title: 'POD',
		description: 'Miraflores 2020',
		image: img4,
		styles: {
			xl: {mt: -5, ml: 4},
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
