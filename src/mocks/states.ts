import { ICertificate, IContentClass, ICourse } from "../types";

export default [
	{ uf: "AC", nome: "Acre" },
	{ uf: "AL", nome: "Alagoas" },
	{ uf: "AP", nome: "Amapá" },
	{ uf: "AM", nome: "Amazonas" },
	{ uf: "BA", nome: "Bahia" },
	{ uf: "CE", nome: "Ceará" },
	{ uf: "DF", nome: "Distrito Federal" },
	{ uf: "ES", nome: "Espirito Santo" },
	{ uf: "GO", nome: "Goiás" },
	{ uf: "MA", nome: "Maranhão" },
	{ uf: "MS", nome: "Mato Grosso do Sul" },
	{ uf: "MT", nome: "Mato Grosso" },
	{ uf: "MG", nome: "Minas Gerais" },
	{ uf: "PA", nome: "Pará" },
	{ uf: "PB", nome: "Paraíba" },
	{ uf: "PR", nome: "Paraná" },
	{ uf: "PE", nome: "Pernambuco" },
	{ uf: "PI", nome: "Piauí" },
	{ uf: "RJ", nome: "Rio de Janeiro" },
	{ uf: "RN", nome: "Rio Grande do Norte" },
	{ uf: "RS", nome: "Rio Grande do Sul" },
	{ uf: "RO", nome: "Rondônia" },
	{ uf: "RR", nome: "Roraima" },
	{ uf: "SC", nome: "Santa Catarina" },
	{ uf: "SP", nome: "São Paulo" },
	{ uf: "SE", nome: "Sergipe" },
	{ uf: "TO", nome: "Tocantins" },
];

export const coursesMock: ICourse[] = [
	{
		id: "1010",
		courseTitle: "Aprendendo Fotografia e como a pintar sem uma mão",
		percentage: "70",
		modules: [
			{
				title: "Fundamentos da Fotografia",
				id: "fundamentos-fotografia",
				modules: [
					{
						id: "1",
						title: "Escolhendo sua câmera",
						completed: true,
						videoUrl: "https://www.youtube.com/embed/abcdef12345",
						pdfPath: "https://example.com/pdf/fundamentos_camera.pdf",
						description:
							"Esta lição aborda como escolher a câmera certa para suas necessidades.",
					},
					{
						id: "2",
						title: "Composição e enquadramento",
						completed: true,
						videoUrl: "https://www.youtube.com/embed/ghijkl67890",
						pdfPath: "https://example.com/pdf/composicao_enquadramento.pdf",
						description:
							"Aprenda a criar composições impressionantes em suas fotografias.",
					},
					{
						id: "3",
						title: "Configurações de câmera",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/stuvwx12345",
						pdfPath: "https://example.com/pdf/configuracoes_camera.pdf",
						description:
							"Nesta lição, explore as configurações da câmera e como ajustá-las.",
					},
				],
			},
			{
				title: "Fotografia de Retrato",
				id: "fotografia-retrato",
				modules: [
					{
						id: "1",
						title: "Técnicas de iluminação",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/yzabc12345",
						pdfPath: "https://example.com/pdf/tecnicas_iluminacao.pdf",
						description:
							"Aprenda a usar a luz para criar retratos impressionantes.",
					},
					{
						id: "2",
						title: "Posicionamento do modelo",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/wxyz67890",
						pdfPath: "https://example.com/pdf/posicionamento_modelo.pdf",
						description:
							"Saiba como posicionar seus modelos para fotos de retrato perfeitas.",
					},
				],
			},
			{
				title: "Edição de Fotos",
				id: "edicao-fotos",
				modules: [
					{
						id: "1",
						title: "Introdução ao Photoshop",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/abcxyz12345",
						pdfPath: "https://example.com/pdf/introducao_photoshop.pdf",
						description:
							"Inicie sua jornada na edição de fotos com o Adobe Photoshop.",
					},
					{
						id: "2",
						title: "Filtros e Efeitos",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/defgh67890",
						pdfPath: "https://example.com/pdf/filtros_efeitos.pdf",
						description:
							"Aplique filtros e efeitos para aprimorar suas imagens.",
					},
				],
			},
		],
		questions: [
			{
				title: "Como tirar uma foto?",
				options: [
					{ option: "a", text: "Com o celular" },
					{ option: "b", text: "Com o computador" },
					{ option: "c", text: "Com o celular" },
					{ option: "d", text: "Com o computador" },
				],
				correctAnswer: "a",
			},
		],
	},
	{
		id: "9999",
		courseTitle: "Aprendendo Fotografia",
		percentage: "70",
		modules: [
			{
				title: "Fundamentos da Fotografia",
				id: "fundamentos-fotografia",
				modules: [
					{
						id: "1",
						title: "Escolhendo sua câmera",
						completed: true,
						videoUrl: "https://www.youtube.com/embed/abcdef12345",
						pdfPath: "https://example.com/pdf/fundamentos_camera.pdf",
						description:
							"Esta lição aborda como escolher a câmera certa para suas necessidades.",
					},
					{
						id: "2",
						title: "Composição e enquadramento",
						completed: true,
						videoUrl: "https://www.youtube.com/embed/ghijkl67890",
						pdfPath: "https://example.com/pdf/composicao_enquadramento.pdf",
						description:
							"Aprenda a criar composições impressionantes em suas fotografias.",
					},
					{
						id: "3",
						title: "Configurações de câmera",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/stuvwx12345",
						pdfPath: "https://example.com/pdf/configuracoes_camera.pdf",
						description:
							"Nesta lição, explore as configurações da câmera e como ajustá-las.",
					},
				],
			},
			{
				title: "Fotografia de Retrato",
				id: "fotografia-retrato",
				modules: [
					{
						id: "1",
						title: "Técnicas de iluminação",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/yzabc12345",
						pdfPath: "https://example.com/pdf/tecnicas_iluminacao.pdf",
						description:
							"Aprenda a usar a luz para criar retratos impressionantes.",
					},
					{
						id: "2",
						title: "Posicionamento do modelo",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/wxyz67890",
						pdfPath: "https://example.com/pdf/posicionamento_modelo.pdf",
						description:
							"Saiba como posicionar seus modelos para fotos de retrato perfeitas.",
					},
				],
			},
			{
				title: "Edição de Fotos",
				id: "edicao-fotos",
				modules: [
					{
						id: "1",
						title: "Introdução ao Photoshop",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/abcxyz12345",
						pdfPath: "https://example.com/pdf/introducao_photoshop.pdf",
						description:
							"Inicie sua jornada na edição de fotos com o Adobe Photoshop.",
					},
					{
						id: "2",
						title: "Filtros e Efeitos",
						completed: false,
						videoUrl: "https://www.youtube.com/embed/defgh67890",
						pdfPath: "https://example.com/pdf/filtros_efeitos.pdf",
						description:
							"Aplique filtros e efeitos para aprimorar suas imagens.",
					},
				],
			},
		],
		questions: [
			{
				title: "Como tirar uma foto?",
				options: [
					{ option: "a", text: "Com o celular" },
					{ option: "b", text: "Com o computador" },
					{ option: "c", text: "Com o celular" },
					{ option: "d", text: "Com o computador" },
				],
				correctAnswer: "a",
			},
		],
	},
];

export const ClassesMock: IContentClass = {
	id: Math.random().toString(),
	title: "Título",
	urlVideo: "",
	urlPdf: "",
	completed: true,
	content: "Digite um conteúdo de curso épico 🚀",
};

export const CertificateMock: ICertificate[] = [{ title: "Um curso qualquer" }];
