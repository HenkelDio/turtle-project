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

const cepMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];

const phoneMask = [
	"+",
	/[0-9]/,
	/\d/,
	" ",
	/\d/,
	/\d/,
	" ",
	/\d/,
	" ",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
];

const cpfMask = [
	/[0-9]/,
	/\d/,
	/\d/,
	".",
	/\d/,
	/\d/,
	/\d/,
	".",
	/\d/,
	/\d/,
	/\d/,
	"-",
	/\d/,
	/\d/,
];

export { cnpjMask, cepMask, phoneMask, cpfMask };
