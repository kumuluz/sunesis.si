import type { LanguageCode } from '../../lib/router'

const enLanding = {
  hero: {
    eyebrow: 'Award-winning software solutions',
    title:
      'Enterprise AgenticAI, digital platforms and cloud-native engineering',
    body: 'Sunesis helps organizations design, build, integrate and operate secure, scalable and business-critical software platforms, from AgenticAI solutions and digital agent teams to API ecosystems, digital platforms, cloud-native architectures, workflow automation and DevOps foundations. We help enterprises move beyond isolated AI assistants by building governed AI agents that safely use knowledge, APIs, tools and workflows to automate complete business processes.',
    primaryCta: 'Talk to our experts',
    secondaryCta: 'Explore our expertise',
    trustLine: 'Trusted by',
  },
  intro: {
    eyebrow: 'Trusted engineering partner',
    title:
      'Senior delivery teams for complex digital initiatives and production platforms',
    cards: [
      'Build enterprise AI assistants, agents and automation workflows',
      'Modernize digital products with cloud-native platform foundations',
      'Connect systems, data and business processes through APIs',
      'Operate secure, scalable software with DevOps and platform engineering',
    ],
  },
  landingPageSections: {
    positioning: {
      title:
        'We build the technology foundations for intelligent, digital and cloud-native enterprises',
      body: [
        'Modern organizations need platforms that can evolve, integrate, scale and operate reliably in demanding business environments, and that prepare for a new generation of systems where AI assistants, AI agents, digital agent teams, APIs, workflows and business applications work together.',
        'Sunesis combines AgenticAI capabilities, full-stack software engineering, cloud-native architecture, DevOps, platform engineering, integration expertise and Kumuluz platforms to help enterprises move from ideas and experiments to production-ready digital solutions.',
        'For selected operational areas, we help organizations redesign work around AgenticAI principles, creating agentic operating models where AI agents handle routine, knowledge-intensive and coordination-heavy work, while people focus on oversight, approvals, exceptions and accountability.',
        'We support the full journey from strategy, architecture and development to integration, automation, deployment, governance, operation and long-term evolution.',
      ],
    },
    expertise: {
      title: 'Our expertise',
      intro:
        'We focus on the areas where deep technical expertise, enterprise experience and reliable delivery matter most.',
      items: [
        {
          title: 'AgenticAI Solutions',
          text: 'Enterprise-grade AI agents and assistants connected with knowledge, APIs, tools, workflows and business systems, from individual assistants to digital agent teams.',
          capabilities: [
            'Digital agent teams and agentic operating models',
            'End-to-end workflow automation with AI agents',
            'AI-native departments and operational functions',
            'RAG, governance, human approvals and audit trails',
          ],
          cta: 'Explore AgenticAI Solutions',
        },
        {
          title: 'Digital Solutions Development',
          text: 'Complete digital solutions from backend systems and integrations to web, mobile and user-facing applications.',
          capabilities: [
            'Backend, frontend and mobile development',
            'Customer portals and digital platforms',
            'AI-agent-ready services and tool-safe APIs',
          ],
          cta: 'Explore Digital Solutions',
        },
        {
          title: 'Cloud-native & Edge Architectures',
          text: 'Modern architectures connecting cloud, on-premise, Kubernetes, APIs, events, identity, security and observability.',
          capabilities: [
            'Microservices, Kubernetes and OpenShift',
            'Hybrid and multi-cloud architecture',
            'Edge, fog and cloud continuum',
          ],
          cta: 'Explore Cloud-native & Edge',
        },
        {
          title: 'API Ecosystems & Integrations',
          text: 'API ecosystems that connect applications, partners, business systems, workflows and AI agents.',
          capabilities: [
            'Enterprise API architecture and governance',
            'Partner APIs and developer portals',
            'Agent-ready APIs and MCP-oriented patterns',
          ],
          cta: 'Explore API Ecosystems',
        },
        {
          title: 'DevOps & Platform Engineering',
          text: 'Secure, automated and production-ready foundations for software delivery and platform operations.',
          capabilities: [
            'CI/CD, GitOps and infrastructure as code',
            'Kubernetes, OpenShift and multi-cluster operations',
            'Observability, policy and platform reliability',
          ],
          cta: 'Explore DevOps & Platform Engineering',
        },
      ],
    },
    agenticOperations: {
      title: 'From AI assistants to agentic operations',
      intro:
        'Many organizations start with AI assistants. Sunesis helps them go further, building digital agent teams that retrieve knowledge, call APIs, trigger workflows, request approvals and monitor process progress.',
      cards: [
        {
          title: 'AI assistants',
          text: 'Help users find information, understand procedures and complete simple tasks.',
        },
        {
          title: 'AI agents',
          text: 'Use tools, APIs, knowledge and workflows to support multi-step business processes.',
        },
        {
          title: 'Agentic operating models',
          text: 'Digital agent teams automate complete workflows while people focus on oversight, exceptions and accountability.',
        },
      ],
    },
    kumuluz: {
      title: 'Kumuluz platforms and accelerators',
      intro:
        'Kumuluz is the Sunesis family of platforms, products and accelerators for enterprise AgenticAI, API management, reusable Business APIs, cloud-native digital platforms and AI-enhanced crowdsensing.',
      summary:
        'Built on years of enterprise engineering experience, Kumuluz provides reusable foundations for modern digital systems, reducing complexity and accelerating secure, scalable and governed innovation. Together, Kumuluz products help organizations build platform foundations where AI agents, APIs, Business APIs, workflows, digital services and data work together under governance.',
      items: [
        {
          title: 'KumuluzAI Platform',
          label: 'Governed AgenticAI platform',
          text: 'A foundation for secure AI agents, assistants and applications with orchestration, tool integration, model routing, guardrails and auditability.',
        },
        {
          title: 'Kumuluz API',
          label: 'API management',
          text: 'API catalogs, developer portals, API gateway management and governed API exposure for applications, partners and AI agents.',
        },
        {
          title: 'Kumuluz Business APIs',
          label: 'Reusable business capabilities',
          text: 'Reusable, governed and workflow-ready capabilities for domains such as customers, products, orders, payments and onboarding.',
        },
        {
          title: 'Kumuluz Digital Platform',
          label: 'Cloud-native digital platform',
          text: 'A cloud-native engineering foundation for services, APIs, connectors, MCP-enabled tools and workflow orchestrations.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          label: 'AI-enhanced crowdsensing',
          text: 'Distributed data collection and AI-ready data services for smart communities, IoT environments and data-driven decisions.',
        },
      ],
    },
    selectedWork: {
      title: 'Selected Work',
      intro:
        'We work on complex digital platforms, AgenticAI solutions, integrations, open-source systems, DevOps foundations and business-critical software.',
      projects: [
        {
          title: 'NLB Klik',
          label: 'Digital banking platform',
          text: 'Frontend and backend development for modern digital banking experiences and complex banking journeys.',
          expertise:
            'Frontend development, backend development, enterprise integrations, digital banking',
        },
        {
          title: 'AgenticAI Platform - Zavarovalniska skupina Sava',
          label: 'Insurance process automation',
          text: 'Enterprise AgenticAI platform enabling intelligent process automation, governed knowledge access and integration with business systems.',
          expertise:
            'AgenticAI, insurance processes, enterprise integrations, governance, KumuluzAI',
        },
        {
          title: 'Flare',
          label: 'DevOps for blockchain infrastructure',
          text: 'DevOps and platform engineering for automation, cloud-native operations and reliable delivery in blockchain infrastructure.',
          expertise:
            'DevOps engineering, platform engineering, Kubernetes operations, automation',
        },
        {
          title: 'INATrace',
          label: 'Open-source supply-chain traceability',
          text: 'Main development partner for open-source digital traceability for transparent agricultural supply chains.',
          expertise:
            'Open-source engineering, supply-chain traceability, backend, web, mobile',
        },
        {
          title: 'CUPID',
          label: 'Open-source energy interoperability toolkit',
          text: 'Contributing development partner for distributed energy resource interoperability in the LF Energy ecosystem.',
          expertise:
            'Energy interoperability, NATS messaging, Java, edge and cloud deployment',
        },
        {
          title: 'RikoAI',
          label: 'Enterprise knowledge and process support',
          text: 'AgenticAI solution for intelligent assistance, knowledge-driven automation and business process optimization.',
          expertise:
            'AI assistants, enterprise knowledge, process support, KumuluzAI',
        },
      ],
    },
    proof: {
      title: 'Open source, research and references that prove delivery',
      text: 'Sunesis combines enterprise delivery with open-source contribution and international research work across AI, cloud-edge architectures, IoT, cybersecurity, data platforms and digital infrastructure.',
      cards: [
        {
          title: 'Open-source digital infrastructure',
          text: 'Projects such as INATrace and CUPID show production-oriented engineering for broader ecosystems.',
        },
        {
          title: 'Research & Innovation Projects',
          text: 'GreenDat.AI, Interstore, NEPHELE, dAIEDGE, Resilmesh, HEDGE-IoT and related projects keep our work close to emerging technology.',
        },
        {
          title: 'Demanding industries',
          text: 'Banking, insurance, public sector, energy, manufacturing, premium brands, blockchain and open-source ecosystems.',
        },
        {
          title: 'Long-term technical ownership',
          text: 'Architecture, integration, platform reliability, security, governance and maintainability across the full lifecycle.',
        },
      ],
    },
    why: {
      title: 'Why Sunesis?',
      intro:
        'We are a senior technology partner for organizations that need more than implementation capacity.',
      items: [
        {
          title: 'Enterprise-grade engineering',
          text: 'Systems for demanding environments where security, scalability, reliability and maintainability are essential.',
        },
        {
          title: 'AI, software engineering and DevOps in one team',
          text: 'Expertise across AgenticAI, development, integrations, cloud-native architecture, Kubernetes, OpenShift and DevOps.',
        },
        {
          title: 'Own platforms and accelerators',
          text: 'Kumuluz helps organizations adopt AgenticAI, APIs, Business APIs and cloud-native foundations faster and with more control.',
        },
        {
          title: 'Production mindset',
          text: 'Security, observability, deployment, auditability and supportability are considered from the beginning.',
        },
        {
          title: 'Agentic operations and workflow automation expertise',
          text: 'We combine AI flexibility with deterministic workflow execution using digital agent teams, APIs, Business APIs, human approvals and engines such as Temporal or Camunda, moving beyond isolated assistants toward agentic operating models.',
        },
      ],
    },
    finalCta: {
      title: 'Get in touch',
      text: 'Whether you are exploring AgenticAI, building digital agent teams, redesigning workflows around agentic operating models, modernizing enterprise software, strengthening your API ecosystem or improving your DevOps foundations, we would love to hear from you.',
      contact: {
        address: [
          'SUNESIS d.o.o.',
          'Ulica gledališča BTC 2',
          'Ljubljana',
          'Slovenia',
        ],
        email: 'info@sunesis.si',
      },
      form: {
        firstNameLabel: 'First name',
        lastNameLabel: 'Last name',
        emailLabel: 'Email',
        phoneLabel: 'Phone number',
        messageLabel: 'Message',
        submitLabel: 'Send message',
        emailRequiredError: 'Please enter your email address.',
        emailInvalidError: 'Please enter a valid email address.',
        phoneInvalidError: 'Please enter a valid phone number.',
        messageRequiredError: 'Please enter a message.',
        sendingLabel: 'Sending…',
        successMessage: 'Thanks for reaching out — we will get back to you soon.',
        errorMessage:
          'Something went wrong sending your message. Please try again or email us directly.',
      },
    },
  },
} as const

const slLanding = {
  hero: {
    eyebrow: 'Nagrajene programske rešitve',
    title: 'Enterprise AgenticAI, digitalne platforme in cloud-native razvoj',
    body: 'Sunesis organizacijam pomaga načrtovati, razvijati, integrirati in upravljati varne, skalabilne ter poslovno kritične programske platforme, od AgenticAI rešitev in digitalnih agentnih ekip do API ekosistemov, digitalnih platform, cloud-native arhitektur, avtomatizacije workflowov in DevOps temeljev. Podjetjem pomagamo preseči izolirane AI asistente z gradnjo upravljanih AI agentov, ki varno uporabljajo znanje, API-je, orodja in workflowe za avtomatizacijo celovitih poslovnih procesov.',
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine: 'Zaupajo nam',
  },
  intro: {
    eyebrow: 'Zanesljiv razvojni partner',
    title:
      'Senior razvojne ekipe za kompleksne digitalne pobude in produkcijske platforme',
    cards: [
      'Gradite enterprise AI asistente, AI agente in avtomatizirane workflowe',
      'Posodobite digitalne produkte s cloud-native platformnimi temelji',
      'Povežite sisteme, podatke in poslovne procese prek API-jev',
      'Upravljajte varno in skalabilno programsko opremo z DevOps in platformnim inženiringom',
    ],
  },
  landingPageSections: {
    positioning: {
      title:
        'Gradimo tehnološke temelje za inteligentna, digitalna in cloud-native podjetja',
      body: [
        'Sodobne organizacije potrebujejo platforme, ki se lahko razvijajo, povezujejo, skalirajo in zanesljivo delujejo v zahtevnih poslovnih okoljih ter se pripravljajo na novo generacijo sistemov, kjer AI asistenti, AI agenti, digitalne agentne ekipe, API-ji, workflowi in poslovne aplikacije delujejo skupaj.',
        'Sunesis združuje AgenticAI zmožnosti, full-stack razvoj, cloud-native arhitekturo, DevOps, platformni inženiring, integracijsko znanje in platforme Kumuluz za prehod od idej in eksperimentov do produkcijsko pripravljenih digitalnih rešitev.',
        'Na izbranih operativnih področjih organizacijam pomagamo preoblikovati delo okoli AgenticAI principov in vzpostaviti agentne operativne modele, kjer AI agenti prevzamejo rutinsko, znanjsko intenzivno in koordinacijsko delo, ljudje pa se osredotočajo na nadzor, odobritve, izjeme in odgovornost.',
        'Podpiramo celotno pot od strategije, arhitekture in razvoja do integracije, avtomatizacije, uvedbe, upravljanja, delovanja in dolgoročnega razvoja.',
      ],
    },
    expertise: {
      title: 'Naša področja ekspertize',
      intro:
        'Osredotočamo se na področja, kjer so najpomembnejši globoko tehnično znanje, enterprise izkušnje in zanesljiva izvedba.',
      items: [
        {
          title: 'AgenticAI rešitve',
          text: 'Enterprise AI agenti in asistenti, povezani z znanjem, API-ji, orodji, workflowi in poslovnimi sistemi, od posameznih asistentov do digitalnih agentnih ekip.',
          capabilities: [
            'Digitalne agentne ekipe in agentni operativni modeli',
            'Celovita avtomatizacija workflowov z AI agenti',
            'AI-native oddelki in operativne funkcije',
            'RAG, governance, human-in-the-loop odobritve in revizijske sledi',
          ],
          cta: 'Raziščite AgenticAI rešitve',
        },
        {
          title: 'Razvoj digitalnih rešitev',
          text: 'Celovite digitalne rešitve od zalednih sistemov in integracij do spletnih, mobilnih in uporabniških aplikacij.',
          capabilities: [
            'Backend, frontend in mobilni razvoj',
            'Uporabniški portali in digitalne platforme',
            'Storitve za AI agente in varni API-ji za orodja',
          ],
          cta: 'Raziščite digitalne rešitve',
        },
        {
          title: 'Cloud-native in edge arhitekture',
          text: 'Sodobne arhitekture, ki povezujejo oblak, lokalna okolja, Kubernetes, API-je, dogodke, identiteto, varnost in opazljivost sistemov.',
          capabilities: [
            'Mikrostoritve, Kubernetes in OpenShift',
            'Hibridne in multi-cloud arhitekture',
            'Edge, fog in cloud kontinuum',
          ],
          cta: 'Raziščite cloud-native in edge',
        },
        {
          title: 'API ekosistemi in integracije',
          text: 'API ekosistemi, ki povezujejo aplikacije, partnerje, poslovne sisteme, workflowe in AI agente.',
          capabilities: [
            'Enterprise API arhitektura in governance',
            'Partnerski API-ji in developerski portali',
            'API-ji za AI agente in MCP vzorci',
          ],
          cta: 'Raziščite API ekosisteme',
        },
        {
          title: 'DevOps in platformni inženiring',
          text: 'Varni, avtomatizirani in produkcijsko pripravljeni temelji za razvoj, dostavo ter obratovanje platform.',
          capabilities: [
            'CI/CD, GitOps in infrastruktura kot koda',
            'Kubernetes, OpenShift in multi-cluster okolja',
            'Opazljivost sistemov, politike in zanesljivost platform',
          ],
          cta: 'Raziščite DevOps in platformni inženiring',
        },
      ],
    },
    agenticOperations: {
      title: 'Od AI asistentov do agentnih operacij',
      intro:
        'Mnoge organizacije začnejo z AI asistenti. Sunesis jim pomaga narediti korak naprej z gradnjo digitalnih agentnih ekip, ki pridobivajo znanje, kličejo API-je, prožijo workflowe, zahtevajo odobritve in spremljajo potek procesov.',
      cards: [
        {
          title: 'AI asistenti',
          text: 'Uporabnikom pomagajo najti informacije, razumeti postopke in opraviti preproste naloge.',
        },
        {
          title: 'AI agenti',
          text: 'Uporabljajo orodja, API-je, znanje in workflowe za podporo večkoračnim poslovnim procesom.',
        },
        {
          title: 'Agentni operativni modeli',
          text: 'Digitalne agentne ekipe avtomatizirajo celovite workflowe, ljudje pa se osredotočajo na nadzor, izjeme in odgovornost.',
        },
      ],
    },
    kumuluz: {
      title: 'Kumuluz platforme in pospeševalniki',
      intro:
        'Kumuluz je družina Sunesis platform, produktov in pospeševalnikov za enterprise AgenticAI, API management, ponovno uporabne Business API-je, cloud-native digitalne platforme in AI-podprt crowdsensing.',
      summary:
        'Kumuluz temelji na letih enterprise inženirskih izkušenj ter ponuja ponovno uporabne temelje za sodobne digitalne sisteme, z manj kompleksnosti in hitrejšo uvedbo varnih, skalabilnih ter upravljanih inovacij. Produkti Kumuluz skupaj organizacijam pomagajo zgraditi platformne temelje, kjer AI agenti, API-ji, Business API-ji, workflowi, digitalne storitve in podatki delujejo skupaj pod governance nadzorom.',
      items: [
        {
          title: 'KumuluzAI Platform',
          label: 'Upravljana AgenticAI platforma',
          text: 'Gradite AI agente in asistente, ki dostopajo do enterprise znanja, uporabljajo odobrena orodja, usmerjajo zahtevke modelom, sledijo politikam, podpirajo človeške odobritve in omogočajo revizijske sledi.',
        },
        {
          title: 'Kumuluz API',
          label: 'API management',
          text: 'Izpostavljajte, upravljajte, zavarujte in spremljajte API-je med internimi ekipami, partnerji, digitalnimi ekosistemi in AgenticAI okolji, z developerskimi portali, upravljanjem gatewayev in MCP vzorci.',
        },
        {
          title: 'Kumuluz Business API-ji',
          label: 'Ponovno uporabne poslovne zmožnosti',
          text: 'Ponavljajočo se poslovno funkcionalnost spremenite v ponovno uporabne, upravljane in AgenticAI-ready zmožnosti za digitalne produkte, agente, MCP orodja in deterministične workflowe.',
        },
        {
          title: 'Kumuluz Digital Platform',
          label: 'Cloud-native digitalna platforma',
          text: 'Cloud-native, API-first in AI-agent-ready inženirski temelj za storitve, API-je, konektorje, MCP orodja in orkestracijo workflowov.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          label: 'AI-podprt crowdsensing',
          text: 'Zbirajte, obdelujte in uporabljajte porazdeljene podatke iz ljudi, naprav, senzorjev in okolij, z AI-podprto analitiko in AI-ready podatkovnimi storitvami.',
        },
      ],
    },
    selectedWork: {
      title: 'Izbrani projekti',
      intro:
        'Delamo na kompleksnih digitalnih platformah, AgenticAI rešitvah, integracijah, odprtokodnih sistemih, DevOps temeljih in poslovno kritični programski opremi.',
      projects: [
        {
          title: 'NLB Klik',
          label: 'Digitalna bančna platforma',
          text: 'Frontend in backend razvoj za sodobne digitalne bančne izkušnje in kompleksne uporabniške poti v bančništvu.',
          expertise:
            'Frontend razvoj, backend razvoj, enterprise integracije, digitalno bančništvo',
        },
        {
          title: 'AgenticAI Platform - Zavarovalniška skupina Sava',
          label: 'Avtomatizacija zavarovalniških procesov',
          text: 'Enterprise AgenticAI platforma za inteligentno avtomatizacijo procesov, upravljan dostop do znanja in integracijo s poslovnimi sistemi.',
          expertise:
            'AgenticAI, zavarovalniški procesi, enterprise integracije, governance, KumuluzAI',
        },
        {
          title: 'Flare',
          label: 'DevOps za blockchain infrastrukturo',
          text: 'DevOps in platformni inženiring za avtomatizacijo, cloud-native obratovanje in zanesljivo dostavo v blockchain infrastrukturi.',
          expertise:
            'DevOps inženiring, platformni inženiring, Kubernetes operacije, avtomatizacija',
        },
        {
          title: 'INATrace',
          label: 'Odprtokodna sledljivost dobavnih verig',
          text: 'Glavni razvojni partner pri odprtokodni digitalni sledljivosti za transparentne kmetijske dobavne verige.',
          expertise:
            'Odprtokodni razvoj, sledljivost dobavnih verig, backend, web, mobile',
        },
        {
          title: 'CUPID',
          label: 'Odprtokodno orodje za energetsko interoperabilnost',
          text: 'Razvojni partner pri interoperabilnosti porazdeljenih energetskih virov v ekosistemu LF Energy.',
          expertise:
            'Energetska interoperabilnost, NATS messaging, Java, edge in cloud uvedba',
        },
        {
          title: 'RikoAI',
          label: 'Enterprise znanje in procesna podpora',
          text: 'AgenticAI rešitev za inteligentno asistenco, avtomatizacijo na podlagi znanja in optimizacijo poslovnih procesov.',
          expertise:
            'AI asistenti, enterprise znanje, procesna podpora, KumuluzAI',
        },
      ],
    },
    proof: {
      title: 'Odprta koda, raziskave in reference kot dokaz izvedbe',
      text: 'Sunesis združuje enterprise izvedbo, odprtokodni prispevek in mednarodno raziskovalno delo na področjih AI, cloud-edge arhitektur, IoT, kibernetske varnosti, podatkovnih platform in digitalne infrastrukture.',
      cards: [
        {
          title: 'Odprtokodna digitalna infrastruktura',
          text: 'Projekta INATrace in CUPID kažeta produkcijsko usmerjen razvoj za širše ekosisteme.',
        },
        {
          title: 'Raziskave in inovacije',
          text: 'GreenDat.AI, Interstore, NEPHELE, dAIEDGE, Resilmesh, HEDGE-IoT in sorodni projekti nas ohranjajo blizu nastajajočim tehnologijam.',
        },
        {
          title: 'Zahtevne industrije',
          text: 'Bančništvo, zavarovalništvo, javni sektor, energetika, proizvodnja, premium znamke, blockchain in odprtokodni ekosistemi.',
        },
        {
          title: 'Dolgoročno tehnično lastništvo',
          text: 'Arhitektura, integracije, zanesljivost platform, varnost, governance in vzdrževanje skozi celoten življenjski cikel.',
        },
      ],
    },
    why: {
      title: 'Zakaj Sunesis?',
      intro:
        'Smo senior tehnološki partner za organizacije, ki potrebujejo več kot samo izvedbeno kapaciteto.',
      items: [
        {
          title: 'Enterprise-grade inženiring',
          text: 'Sistemi za zahtevna okolja, kjer so varnost, skalabilnost, zanesljivost in vzdrževanje ključni.',
        },
        {
          title: 'AI, razvoj programske opreme in DevOps v eni ekipi',
          text: 'Znanje na področjih AgenticAI, razvoja, integracij, cloud-native arhitekture, Kubernetes, OpenShift in DevOps.',
        },
        {
          title: 'Lastne platforme in pospeševalniki',
          text: 'Kumuluz organizacijam pomaga hitreje in bolj nadzorovano uvajati AgenticAI, API-je, Business API-je in cloud-native temelje.',
        },
        {
          title: 'Produkcijski način razmišljanja',
          text: 'Varnost, opazljivost, uvedba, revizijske sledi in podpora so upoštevani od začetka.',
        },
        {
          title:
            'Strokovnost za agentne operacije in avtomatizacijo workflowov',
          text: 'Združujemo prilagodljivost AI z determinističnim izvajanjem workflowov z digitalnimi agentnimi ekipami, API-ji, Business API-ji, človeškimi odobritvami in orodji, kot sta Temporal ali Camunda, ter tako presegamo izolirane asistente v smeri agentnih operativnih modelov.',
        },
      ],
    },
    finalCta: {
      title: 'Stopite v stik',
      text: 'Če raziskujete AgenticAI, gradite digitalne agentne ekipe, preoblikujete workflowe okoli agentnih operativnih modelov, posodabljate enterprise programsko opremo, krepite API ekosistem ali izboljšujete DevOps temelje, se veselimo vašega sporočila.',
      contact: {
        address: [
          'SUNESIS d.o.o.',
          'Ulica gledališča BTC 2',
          'Ljubljana',
          'Slovenija',
        ],
        email: 'info@sunesis.si',
      },
      form: {
        firstNameLabel: 'Ime',
        lastNameLabel: 'Priimek',
        emailLabel: 'E-pošta',
        phoneLabel: 'Telefonska številka',
        messageLabel: 'Sporočilo',
        submitLabel: 'Pošlji sporočilo',
        emailRequiredError: 'Vnesite svoj e-poštni naslov.',
        emailInvalidError: 'Vnesite veljaven e-poštni naslov.',
        phoneInvalidError: 'Vnesite veljavno telefonsko številko.',
        messageRequiredError: 'Vnesite sporočilo.',
        sendingLabel: 'Pošiljanje…',
        successMessage: 'Hvala za sporočilo — kmalu se vam oglasimo.',
        errorMessage:
          'Pri pošiljanju sporočila je prišlo do napake. Poskusite znova ali nam pišite neposredno.',
      },
    },
  },
} as const

export const landingContent = {
  en: enLanding,
  sl: slLanding,
}

export type LandingContent = (typeof landingContent)[LanguageCode]
