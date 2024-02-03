export function formatDocument(formatDocument: string) {
	return formatDocument
		.replace(/\D/g, "")
		.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function cnpjFormatter(cnpj: string | undefined) {
	if(cnpj) {
		return cnpj.replace(/\D/g, "").replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
	}
}
