import { IContentClass, ICourse } from "../types";

export default [
	{ uf: 'AC', nome: 'Acre' },
	{ uf: 'AL', nome: 'Alagoas' },
	{ uf: 'AP', nome: 'Amapá' },
	{ uf: 'AM', nome: 'Amazonas' },
	{ uf: 'BA', nome: 'Bahia' },
	{ uf: 'CE', nome: 'Ceará' },
	{ uf: 'DF', nome: 'Distrito Federal' },
	{ uf: 'ES', nome: 'Espirito Santo' },
	{ uf: 'GO', nome: 'Goiás' },
	{ uf: 'MA', nome: 'Maranhão' },
	{ uf: 'MS', nome: 'Mato Grosso do Sul' },
	{ uf: 'MT', nome: 'Mato Grosso' },
	{ uf: 'MG', nome: 'Minas Gerais' },
	{ uf: 'PA', nome: 'Pará' },
	{ uf: 'PB', nome: 'Paraíba' },
	{ uf: 'PR', nome: 'Paraná' },
	{ uf: 'PE', nome: 'Pernambuco' },
	{ uf: 'PI', nome: 'Piauí' },
	{ uf: 'RJ', nome: 'Rio de Janeiro' },
	{ uf: 'RN', nome: 'Rio Grande do Norte' },
	{ uf: 'RS', nome: 'Rio Grande do Sul' },
	{ uf: 'RO', nome: 'Rondônia' },
	{ uf: 'RR', nome: 'Roraima' },
	{ uf: 'SC', nome: 'Santa Catarina' },
	{ uf: 'SP', nome: 'São Paulo' },
	{ uf: 'SE', nome: 'Sergipe' },
	{ uf: 'TO', nome: 'Tocantins' }
];

export const coursesMock: ICourse[] = [
	{
		"id": "9999",
		"courseTitle": "Aprendendo Fotografia",
		"percentage": "70",
		"modules": [
			{
				"title": "Fundamentos da Fotografia",
				"id": "fundamentos-fotografia",
				"modules": [
					{
						"id": "1",
						"title": "Escolhendo sua câmera",
						"completed": true,
						"videoUrl": "https://www.youtube.com/embed/abcdef12345",
						"pdfPath": "https://example.com/pdf/fundamentos_camera.pdf",
						"description": "Esta lição aborda como escolher a câmera certa para suas necessidades."
					},
					{
						"id": "2",
						"title": "Composição e enquadramento",
						"completed": true,
						"videoUrl": "https://www.youtube.com/embed/ghijkl67890",
						"pdfPath": "https://example.com/pdf/composicao_enquadramento.pdf",
						"description": "Aprenda a criar composições impressionantes em suas fotografias."
					},
					{
						"id": "3",
						"title": "Configurações de câmera",
						"completed": false,
						"videoUrl": "https://www.youtube.com/embed/stuvwx12345",
						"pdfPath": "https://example.com/pdf/configuracoes_camera.pdf",
						"description": "Nesta lição, explore as configurações da câmera e como ajustá-las."
					}
				]
			},
			{
				"title": "Fotografia de Retrato",
				"id": "fotografia-retrato",
				"modules": [
					{
						"id": "1",
						"title": "Técnicas de iluminação",
						"completed": false,
						"videoUrl": "https://www.youtube.com/embed/yzabc12345",
						"pdfPath": "https://example.com/pdf/tecnicas_iluminacao.pdf",
						"description": "Aprenda a usar a luz para criar retratos impressionantes."
					},
					{
						"id": "2",
						"title": "Posicionamento do modelo",
						"completed": false,
						"videoUrl": "https://www.youtube.com/embed/wxyz67890",
						"pdfPath": "https://example.com/pdf/posicionamento_modelo.pdf",
						"description": "Saiba como posicionar seus modelos para fotos de retrato perfeitas."
					}
				]
			},
			{
				"title": "Edição de Fotos",
				"id": "edicao-fotos",
				"modules": [
					{
						"id": "1",
						"title": "Introdução ao Photoshop",
						"completed": false,
						"videoUrl": "https://www.youtube.com/embed/abcxyz12345",
						"pdfPath": "https://example.com/pdf/introducao_photoshop.pdf",
						"description": "Inicie sua jornada na edição de fotos com o Adobe Photoshop."
					},
					{
						"id": "2",
						"title": "Filtros e Efeitos",
						"completed": false,
						"videoUrl": "https://www.youtube.com/embed/defgh67890",
						"pdfPath": "https://example.com/pdf/filtros_efeitos.pdf",
						"description": "Aplique filtros e efeitos para aprimorar suas imagens."
					}
				]
			}
		],
		"questions": [
			{
				"title": "Como tirar uma foto?",
				"options": [
					{"option": "a", "text": "Com o celular"},
					{"option": "b", "text": "Com o computador"},
					{"option": "c", "text": "Com o celular"},
					{"option": "d", "text": "Com o computador"},
				],
				"correctAnswer": "a"
			}
		]
	},
	{
    "id": "7777",
    "courseTitle": "Introdução à Astronomia",
    "percentage": "60",
    "modules": [
        {
            "title": "O Sistema Solar",
            "id": "sistema-solar",
            "modules": [
                {
                    "id": "1",
                    "title": "O Sol e os Planetas",
                    "completed": true,
                    "videoUrl": "https://www.youtube.com/embed/abcdef12345",
                    "pdfPath": "https://example.com/pdf/sol_planetas.pdf",
                    "description": "Explore o Sol e os planetas do nosso sistema solar."
                },
                {
                    "id": "2",
                    "title": "Luas e Satélites",
                    "completed": true,
                    "videoUrl": "https://www.youtube.com/embed/ghijkl67890",
                    "pdfPath": "https://example.com/pdf/luas_satelites.pdf",
                    "description": "Conheça as luas e satélites que orbitam os planetas."
                },
                {
                    "id": "3",
                    "title": "Asteroides e Cometas",
                    "completed": false,
                    "videoUrl": "https://www.youtube.com/embed/stuvwx12345",
                    "pdfPath": "https://example.com/pdf/asteroides_cometas.pdf",
                    "description": "Saiba mais sobre asteroides, cometas e objetos celestes."
                }
            ]
        },
        {
            "title": "Estrelas e Galáxias",
            "id": "estrelas-galaxias",
            "modules": [
                {
                    "id": "1",
                    "title": "Nascimento e Morte das Estrelas",
                    "completed": false,
                    "videoUrl": "https://www.youtube.com/embed/yzabc12345",
                    "pdfPath": "https://example.com/pdf/nascimento_morte_estrelas.pdf",
                    "description": "Descubra como as estrelas nascem e morrem."
                },
                {
                    "id": "2",
                    "title": "Galáxias e suas Formas",
                    "completed": false,
                    "videoUrl": "https://www.youtube.com/embed/wxyz67890",
                    "pdfPath": "https://example.com/pdf/galaxias_formas.pdf",
                    "description": "Explore diferentes tipos de galáxias e suas formas."
                }
            ]
        },
        {
            "title": "Exploração Espacial",
            "id": "exploracao-espacial",
            "modules": [
                {
                    "id": "1",
                    "title": "Missões Espaciais",
                    "completed": false,
                    "videoUrl": "https://www.youtube.com/embed/abcxyz12345",
                    "pdfPath": "https://example.com/pdf/misssoes_espaciais.pdf",
                    "description": "Acompanhe as missões espaciais e a exploração do espaço."
                },
                {
                    "id": "2",
                    "title": "Futuro da Exploração Espacial",
                    "completed": false,
                    "videoUrl": "https://www.youtube.com/embed/defgh67890",
                    "pdfPath": "https://example.com/pdf/futuro_exploracao_espacial.pdf",
                    "description": "Vislumbre o futuro da exploração espacial e a colonização de outros mundos."
                }
            ]
        }
    ],
    "questions": [
        {
            "title": "Qual é o planeta mais próximo do Sol?",
            "options": [
                {"option": "a", "text": "Vênus"},
                {"option": "b", "text": "Marte"},
                {"option": "c", "text": "Mercúrio"},
                {"option": "d", "text": "Júpiter"}
            ],
            "correctAnswer": "c"
        },
				{
					"title": "Qual é o maior planeta do sistema solar?",
					"options": [
							{"option": "a", "text": "Vênus"},
							{"option": "b", "text": "Marte"},
							{"option": "c", "text": "Júpiter"},
							{"option": "d", "text": "Saturno"}
					],
					"correctAnswer": "c"
			},
			{
					"title": "Qual é a estrela mais próxima da Terra?",
					"options": [
							{"option": "a", "text": "Aldebaran"},
							{"option": "b", "text": "Rigel"},
							{"option": "c", "text": "Proxima Centauri"},
							{"option": "d", "text": "Betelgeuse"}
					],
					"correctAnswer": "c"
			},
			{
					"title": "Qual é a lua mais próxima da Terra?",
					"options": [
							{"option": "a", "text": "Europa"},
							{"option": "b", "text": "Titã"},
							{"option": "c", "text": "Lua"},
							{"option": "d", "text": "Io"}
					],
					"correctAnswer": "c"
			},
			{
					"title": "Quantos planetas anões foram oficialmente reconhecidos em nosso sistema solar?",
					"options": [
							{"option": "a", "text": "5"},
							{"option": "b", "text": "8"},
							{"option": "c", "text": "10"},
							{"option": "d", "text": "12"}
					],
					"correctAnswer": "a"
			},
			{
					"title": "O que é um ano-luz?",
					"options": [
							{"option": "a", "text": "Uma unidade de tempo"},
							{"option": "b", "text": "Uma unidade de distância"},
							{"option": "c", "text": "Uma unidade de temperatura"},
							{"option": "d", "text": "Uma unidade de velocidade"}
					],
					"correctAnswer": "b"
			}			
    ]
}


]

export const ClassesMock: IContentClass = {
		"title": "Título (clique no ícone para editar)",
		"urlVideo": "",
		"urlPdf": "",
		"content": "Digite um conteúdo de curso épico 🚀"}