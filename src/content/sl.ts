export const slContent = {
  seo: {
    title:
      'Sunesis | AgenticAI, digitalne platforme, API ekosistemi in cloud-native razvoj',
    description:
      'Sunesis načrtuje in razvija enterprise AgenticAI rešitve, digitalne agentne ekipe, API ekosisteme, cloud-native digitalne platforme, Business API-je, workflowe, integracije in DevOps temelje.',
  },
  nav: {
    closeMenu: 'Zapri meni',
    back: 'Nazaj',
    blog: 'Vsebine',
    contact: 'Kontakt',
    menu: 'Meni',
    items: [
      {
        label: 'Ekspertize',
        hasDropdown: true,
        groups: [
          {
            title: 'Storitve',
            links: [
              {
                label: 'AgenticAI rešitve',
                description:
                  'Enterprise AI agenti in asistenti, povezani z znanjem, API-ji, orodji in workflowi.',
              },
              {
                label: 'Razvoj digitalnih rešitev',
                description:
                  'Celovite digitalne rešitve od backenda do spleta in mobilnih aplikacij.',
              },
              {
                label: 'Cloud-native in edge arhitekture',
                description:
                  'Sodobne cloud, Kubernetes in edge arhitekture, zgrajene za rast.',
              },
              {
                label: 'API ekosistemi in integracije',
                description:
                  'Business API-ji in integracije, ki povezujejo sisteme, podatke in partnerje.',
              },
              {
                label: 'DevOps in platformni inženiring',
                description:
                  'Varna, avtomatizirana dostava in platformni temelji za zanesljivo delovanje.',
              },
            ],
          },
        ],
      },
      {
        label: 'Reference',
        hasDropdown: true,
        groups: [
          {
            title: 'Reference',
            links: [
              {
                label: 'Izbrani projekti',
                description:
                  'Izpostavljeni enterprise, AI, DevOps, integracijski in odprtokodni projekti.',
              },
              {
                label: 'Odprta koda',
                description:
                  'Odprtokodni projekti in ekosistemi Linux Foundation, kot sta AgStack in LF Energy.',
              },
              {
                label: 'Stranke in panoge',
                description:
                  'Panoge in okolja, kjer dostavljamo poslovno kritično programsko opremo.',
              },
              {
                label: 'Raziskave in inovacije',
                description:
                  'Mednarodni R&I projekti na področju AI, cloud-edge, IoT, kibernetske varnosti in podatkov.',
              },
            ],
          },
        ],
      },
      {
        label: 'Podjetje',
        hasDropdown: true,
        groups: [
          {
            title: 'Podjetje',
            links: [
              {
                label: 'O Sunesisu',
                description:
                  'Kdo smo, kaj počnemo in podjetje, ki stoji za družino izdelkov Kumuluz.',
              },
              {
                label: 'Nagrade',
                description:
                  'Nagrajena inovativnost, certificirano znanje in priznanja odprte kode.',
              },
              {
                label: 'Kariera',
                description:
                  'Z nami gradite poslovni AI, digitalne platforme, API-je in cloud-native sisteme.',
              },
            ],
          },
        ],
      },
      {
        label: 'Kumuluz',
        hasDropdown: false,
        groups: [],
      },
    ],
    featuredLabel: 'Izpostavljeno',
    featuredTitle:
      'Enterprise AgenticAI, digitalne platforme in cloud-native razvoj',
  },
  footer: {
    tagline:
      'Enterprise AgenticAI, digitalne platforme, API-ji in cloud-native inženiring.',
    columns: [
      {
        title: 'Storitve',
        links: [
          'AgenticAI rešitve',
          'Razvoj digitalnih rešitev',
          'Cloud-native in edge arhitekture',
          'API ekosistemi in integracije',
          'DevOps in platformni inženiring',
        ],
      },
      {
        title: 'Kumuluz',
        links: [
          'KumuluzAI Platform',
          'Kumuluz API',
          'Kumuluz Business API-ji',
          'Kumuluz Digital Platform',
          'Kumuluz Crowdsensing',
        ],
      },
      {
        title: 'Podjetje',
        links: ['O Sunesisu', 'Reference', 'Nagrade', 'Kariera'],
      },
      {
        title: 'Gradiva',
        links: ['Vsebine', 'Odprta koda', 'Kontakt'],
      },
    ],
    social: {
      linkedin: 'LinkedIn',
      twitter: 'X',
      github: 'GitHub',
      youtube: 'YouTube',
    },
    copyright: '© {year} Sunesis. Vse pravice pridržane.',
  },
} as const
