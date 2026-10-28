/**
 * Configuração central do site: contatos, endereço e imagens.
 * Tudo que for PENDENTE fica vazio. Enquanto estiver vazio, o botão
 * correspondente aparece desativado (nenhum link quebrado é publicado).
 */

// ─── Contatos (PENDENTES: preencher quando a Patricia informar) ─────────────
// Número com DDI + DDD, apenas dígitos. Ex.: '5527999999999'
export const WHATSAPP_NUMBER = '5527997870881'

export const WHATSAPP_BOOKING_MESSAGE =
  'Olá, Patricia! Conheci seu trabalho pelo site e gostaria de saber mais sobre os atendimentos e os horários disponíveis.'

export const WHATSAPP_COURSE_MESSAGE =
  'Olá, Patricia! Vi o curso Spa dos Pés Completo no seu site e gostaria de receber mais informações.'

// Link específico do curso (página de vendas, grupo etc.). Se vazio, o botão do
// curso usa o WhatsApp com a mensagem do curso; se o WhatsApp também estiver
// vazio, o botão fica desativado.
export const COURSE_URL = ''

// Opcional: se vazio, o link do Maps é gerado pela busca do endereço abaixo.
export const GOOGLE_MAPS_URL = ''

// Opcional: se vazio, o link não aparece no rodapé.
export const INSTAGRAM_URL = ''

// ─── Dados confirmados no briefing ──────────────────────────────────────────
export const PROFESSIONAL = {
  name: 'Patricia Silva',
  role: 'Terapeuta Podal',
}

export const ADDRESS = {
  lines: [
    'Avenida Expedito Garcia, 1453',
    'Edifício Virgílio Tozzi',
    'Cariacica — ES',
    'CEP 29146-201',
  ],
  // Usado apenas para montar a busca no Google Maps (sem coordenadas inventadas).
  searchQuery:
    'Avenida Expedito Garcia, 1453, Edifício Virgílio Tozzi, Cariacica - ES, 29146-201',
}

// ─── Navegação ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Curso', href: '#curso' },
  { label: 'Localização', href: '#localizacao' },
]

// ─── Imagens ────────────────────────────────────────────────────────────────
// Imagens ILUSTRATIVAS (Unsplash, uso livre). Não são fotos da Patricia nem do
// espaço real. Para trocar: substitua o arquivo em /public/images mantendo o
// nome, ou altere `src`/`width`/`height` abaixo.
export const IMAGES = {
  hero: {
    src: '/images/hero.webp',
    width: 1100,
    height: 1650,
    alt: 'Atendimento de cuidado nos pés, com toalhas macias ao fundo',
  },
  cuidado: {
    src: '/images/cuidado.webp',
    width: 1100,
    height: 1467,
    alt: 'Bacia de madeira, toalha enrolada e flor branca em um ambiente de cuidado',
  },
  ambiente: {
    src: '/images/ambiente.webp',
    width: 1600,
    height: 1067,
    alt: 'Sala de atendimento clara e acolhedora, com maca e iluminação suave',
  },
  spaPes: {
    src: '/images/spa-pes.webp',
    width: 1600,
    height: 1068,
    alt: 'Pés em uma bacia com água e flores, em uma experiência de spa dos pés',
  },
  detalhes: {
    src: '/images/detalhes.webp',
    width: 1100,
    height: 1650,
    alt: 'Toalha branca enrolada, velas acesas e difusor de aromas',
  },
}
