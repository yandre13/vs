import carousels from './carousels'
import miniaturas from './miniaturas'

const data = [
	{
		id: 1,
		title: 'Mendiburú',
		place: 'San Isidro, Lima.',
		date: 'Abril 2021',
		image: miniaturas.image1,
		carousel: carousels.carousel1,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 2,
		title: 'Tamayo',
		place: 'Barranco, Lima.',
		date: 'Abril 2021',
		image: miniaturas.image2,
		carousel: carousels.carousel2,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 3,
		title: 'MSB',
		place: 'San Borja, Lima.',
		date: 'Junio 2021',
		image: miniaturas.image3,
		carousel: carousels.carousel3,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 4,
		title: 'Pasaje Laureles',
		place: 'San Isidro, Lima.',
		date: 'Julio 2021',
		image: miniaturas.image4,
		carousel: carousels.carousel4,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -2, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 5,
		title: 'POD',
		place: 'Miraflores, Lima.',
		date: 'Noviembre 2020',
		image: miniaturas.image5,
		carousel: carousels.carousel5,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 6,
		title: 'Holiday Inn',
		place: 'Callao.',
		date: 'Junio 2018',
		image: miniaturas.image6,
		carousel: carousels.carousel6,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 7,
		title: 'Tandem Parc',
		place: 'Breña, Lima.',
		date: 'Julio 2020',
		image: miniaturas.image7,
		carousel: carousels.carousel7,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 8,
		title: 'Libertad',
		place: 'Miraflores, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image8,
		carousel: carousels.carousel8,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 9,
		title: 'Lagunas de Bujama',
		place: 'Bujama, Mala.',
		date: 'Noviembre 2019',
		image: miniaturas.image9,
		carousel: carousels.carousel9,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 10,
		title: 'R6000',
		place: 'Miraflores, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image10,
		carousel: carousels.carousel10,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 11,
		title: 'Las Magnolias',
		place: 'Lince, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image11,
		carousel: carousels.carousel11,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 12,
		title: 'MMXX',
		place: 'Barranco, Lima.',
		date: 'Junio 2021',
		image: miniaturas.image12,
		carousel: carousels.carousel12,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -2, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 13,
		title: 'Grimaldo del Solar',
		place: 'Miraflores, Lima.',
		date: 'Agosto 2020',
		image: miniaturas.image13,
		carousel: carousels.carousel13,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 14,
		title: 'Ugarte y Moscoso',
		place: 'San Isidro, Lima.',
		date: 'Febrero 2021',
		image: miniaturas.image14,
		carousel: carousels.carousel14,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -5, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 15,
		title: 'Casa Chincha',
		place: 'Chincha.',
		date: 'Diciembre 2020',
		image: miniaturas.image15,
		carousel: carousels.carousel15,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 16,
		title: 'Oficina Birtranks',
		place: '',
		date: 'Diciembre 2020',
		image: miniaturas.image16,
		carousel: carousels.carousel16,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -2, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 17,
		title: 'Salaverry 3636',
		place: 'San Isidro, Lima.',
		date: 'Julio 2021',
		image: miniaturas.image17,
		carousel: carousels.carousel17,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -5, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 18,
		title: 'Machaypuito',
		place: 'San Isidro, Lima.',
		date: 'Mayo 2021',
		image: miniaturas.image18,
		carousel: carousels.carousel18,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 19,
		title: 'Ugarte y Moscoso',
		place: 'San Isidro, Lima.',
		date: 'Febrero 2021',
		image: miniaturas.image19,
		carousel: carousels.carousel19,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 20,
		title: 'Los Condores',
		place: 'Cieneguilla, Lima.',
		date: 'Noviembre 2020',
		image: miniaturas.image20,
		carousel: carousels.carousel20,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: -5, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 21,
		title: 'Interiorismo',
		place: '',
		date: '2019 - 2021',
		image: miniaturas.image21,
		carousel: carousels.carousel21,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 22,
		title: 'Casa Pucusana',
		place: 'Pucusana.',
		date: 'Febrero 2021',
		image: miniaturas.image22,
		carousel: carousels.carousel22,
		styles: {
			xl: {mt: -2, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -2, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 23,
		title: 'Mariano Cornejo',
		place: 'Pueblo Libre, Lima.',
		date: 'Marzo 2021',
		image: miniaturas.image23,
		carousel: carousels.carousel23,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: -8, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 24,
		title: 'Qualis',
		place: 'Pueblo Libre, Lima.',
		date: 'Septiembre 2020',
		image: miniaturas.image24,
		carousel: carousels.carousel24,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 25,
		title: 'Ugarte y Moscoso',
		place: 'San Isidro, Lima.',
		date: 'Febrero 2021',
		image: miniaturas.image25,
		carousel: carousels.carousel25,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 26,
		title: 'Humanidades',
		place: 'San Miguel, Lima.',
		date: 'Mayo 2018',
		image: miniaturas.image26,
		carousel: carousels.carousel26,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: -11, ml: 1},
			md: {mt: -2, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 27,
		title: 'La Aldea',
		place: 'Oxapampa.',
		date: 'Febrero 2021',
		image: miniaturas.image27,
		carousel: carousels.carousel27,
		styles: {
			xl: {mt: -8, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 28,
		title: 'OFICINAS INTERSEGURO',
		place: 'San Isidro, Lima.',
		date: 'Julio 2018',
		image: miniaturas.image28,
		carousel: carousels.carousel28,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: -2, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 29,
		title: 'Académicos',
		place: '',
		date: '2013 - 2021',
		image: miniaturas.image29,
		carousel: carousels.carousel29,
		styles: {
			xl: {mt: 1, ml: 1},
			lg: {mt: -11, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 30,
		title: 'Casa Hamptons',
		place: 'Long Island, New York.',
		date: 'Julio 2021',
		image: miniaturas.image30,
		carousel: carousels.carousel30,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 31,
		title: 'Bello Horizonte',
		place: 'San Borja, Lima.',
		date: 'Junio 2021',
		image: miniaturas.image31,
		carousel: carousels.carousel31,
		styles: {
			xl: {mt: -8, ml: 1},
			lg: {mt: -5, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 32,
		title: 'Tamayo',
		place: 'Barranco, Lima.',
		date: 'Abril 2021',
		image: miniaturas.image32,
		carousel: carousels.carousel32,
		styles: {
			xl: {mt: -8, ml: 1},
			lg: {mt: -11, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 33,
		title: 'Camacho',
		place: 'La Molina, Lima.',
		date: 'Junio 2020',
		image: miniaturas.image33,
		carousel: carousels.carousel33,
		styles: {
			xl: {mt: 1, ml: 1, mb: -1},
			lg: {mt: 1, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 34,
		title: 'Colmena',
		place: 'Miraflores, Lima.',
		date: 'Febrero 2020',
		image: miniaturas.image34,
		carousel: carousels.carousel34,
		styles: {
			xl: {mt: -5, ml: 1},
			lg: {mt: -2, ml: 1},
			md: {mt: -8, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 35,
		title: 'Café Esan',
		place: 'San Isidro, Lima.',
		date: 'Junio 2018',
		image: miniaturas.image35,
		carousel: carousels.carousel35,
		styles: {
			xl: {mt: -8, ml: 1},
			lg: {mt: -11, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 36,
		title: 'Villasol',
		place: 'Cuzco.',
		date: 'Marzo 2021',
		image: miniaturas.image36,
		carousel: carousels.carousel36,
		styles: {
			xl: {mt: -11, ml: 1},
			lg: {mt: 1, ml: 1},
			md: {mt: -8, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 37,
		title: 'Rodin 21',
		place: '',
		date: 'Abril 2021',
		image: miniaturas.image37,
		carousel: carousels.carousel37,
		styles: {
			xl: {mt: -4, ml: 8, mb: -2},
			lg: {mt: -5, ml: 1},
			md: {mt: 1, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
	{
		id: 38,
		title: 'Elespurú',
		place: 'San Isidro, Lima.',
		date: 'Diciembre 2020',
		image: miniaturas.image38,
		carousel: carousels.carousel38,
		styles: {
			xl: {mt: -7, ml: 1, mb: 1},
			lg: {mt: -14, ml: 1},
			md: {mt: -5, ml: 1},
			sm: {mt: 1, ml: 1},
		},
		aspectRatio: 'ar4x6',
		height: 9,
	},
	{
		id: 39,
		title: 'Numu',
		place: 'Santiago de Chile.',
		date: 'Octubre 2020',
		image: miniaturas.image39,
		carousel: carousels.carousel39,
		styles: {
			xl: {mt: -7, ml: 1},
			lg: {mt: -4, ml: -6, mb: 1},
			md: {mt: 1, ml: 1, mb: 1},
			sm: {mt: 1, ml: 1, mb: 1},
		},
		aspectRatio: 'ar3x3',
		height: 6,
	},
]

export {data}