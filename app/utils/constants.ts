export const DATA_BUDGETS = [
		{
				title: 'Orçamento 001',
				description: 'Desenvolvimento de aplicativo de loja online',
				status: 'Aprovado',
				monetaryValue: '22.300,00'
		},
		{
				title: 'Orçamento 002',
				description: 'Desenvolvimento de site institucional',
				status: 'Rascunho',
				monetaryValue: '15.500,00'
		},
		{
				title: 'Orçamento 003',
				description: 'Manutenção de sistema interno',
				status: 'Recusado',
				monetaryValue: '8.750,00'
		},
		{
				title: 'Orçamento 004',
				description: 'Criação de campanha de marketing digital',
				status: 'Enviado',
				monetaryValue: '12.000,00'
		},
		{
				title: 'Orçamento 005',
				description: 'Desenvolvimento de plataforma de e-learning',
				status: 'Rascunho',
				monetaryValue: '30.450,00'
		},
		{
				title: 'Orçamento 006',
				description: 'Consultoria em segurança da informação',
				status: 'Aprovado',
				monetaryValue: '18.200,00'
		},
		{
				title: 'Orçamento 007',
				description: 'Implementação de sistema de CRM',
				status: 'Recusado',
				monetaryValue: '25.600,00'
		},
		{
				title: 'Orçamento 008',
				description: 'Desenvolvimento de aplicativo móvel',
				status: 'Aprovado',
				monetaryValue: '27.300,00'
		}
];

export const DATA_BUDGET_SERVICES = [
	{
		title: 'Design de interfaces',
		description: 'Criação de wireframes e protótipos de alta fidelidade',
		money: '3.847,50',
		quantity: 1 
	}
]

export enum Status {
  APPROVED = 'Aprovado',
  DRAFT = 'Rascunho',
  REJECTED = 'Recusado',
  SENT = 'Enviado'
}

export enum Order {
  MOST_RECENT = 'most_recent',
  OLDEST = 'oldest',
  HIGHEST_VALUE = 'highest_value',
  LOWEST_VALUE = 'lowest_value'
}