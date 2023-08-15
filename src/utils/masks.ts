const cnpjMask = [
	/[0-9]/,
	/\d/,
	".",
	/\d/,
	/\d/,
	/\d/,
	".",
	/\d/,
	/\d/,
	/\d/,
	"/",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
];

const cepMask = [
	/[0-9]/,
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
	/\d/,
]

export { cnpjMask, cepMask };