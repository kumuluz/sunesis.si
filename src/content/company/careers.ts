import type { LanguageCode } from '../../lib/router'
import type { CompanyPageContent } from '../../views/company/types'

const en: CompanyPageContent = {
  seo: {
    title:
      'Careers at Sunesis | AgenticAI, Software Engineering, APIs and DevOps Jobs',
    description:
      'Join Sunesis and work on AgenticAI, enterprise digital platforms, API ecosystems, cloud-native architectures, DevOps, Kubernetes, backend, frontend and mobile applications.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Careers at Sunesis',
    title:
      'Build enterprise AI, digital platforms, APIs and cloud-native systems',
    body: [
      'Join a team of engineers, architects, AI experts and DevOps specialists building enterprise AgenticAI solutions, digital platforms, API ecosystems, cloud-native architectures and business-critical software systems.',
      'At Sunesis, you work on meaningful technology — from AI agents and digital banking platforms to Kubernetes environments, API ecosystems, open-source projects, research initiatives and Kumuluz platforms.',
    ],
    primaryCta: 'Send us your application',
    secondaryCta: 'Explore open roles',
    trustLine:
      'Work on enterprise systems, AgenticAI, Kumuluz platforms, open-source projects and international innovation initiatives.',
  },
  sections: [
    {
      type: 'split',
      title: 'Build technology that matters',
      body: [
        'Sunesis works on projects where technology has real impact: enterprise digital platforms, AI-powered process automation, secure integrations, public-sector systems, API ecosystems, cloud-native architectures, DevOps foundations, open-source infrastructure and international research and innovation projects.',
        'We are looking for people who enjoy solving complex problems, learning new technologies and building systems that must work reliably in real environments.',
        'You will work with experienced engineers on projects where architecture, quality, security, maintainability and production readiness matter.',
      ],
    },
    {
      type: 'cards',
      title: 'What you can work on',
      variant: 'accent',
      columns: 4,
      items: [
        {
          title: 'AgenticAI solutions',
          text: 'Build AI agents, AI assistants, multi-agent workflows, RAG systems, enterprise AI integrations and governed AI platforms for real business processes.',
        },
        {
          title: 'Enterprise digital platforms',
          text: 'Develop backend systems, web applications, mobile apps, portals, APIs and integrations for banking, insurance, public sector, energy and enterprise clients.',
        },
        {
          title: 'API ecosystems and integrations',
          text: 'Work on API management, API gateways, Business APIs, partner integrations, event-driven systems and AI-agent-ready APIs.',
        },
        {
          title: 'Cloud-native and edge architectures',
          text: 'Work on microservices, Kubernetes, OpenShift, APIs, event-driven systems, cloud platforms and edge-fog-cloud concepts.',
        },
        {
          title: 'DevOps and platform engineering',
          text: 'Build CI/CD pipelines, GitOps workflows, infrastructure automation, Kubernetes platforms, observability and secure delivery foundations.',
        },
        {
          title: 'Kumuluz platforms',
          text: 'Contribute to KumuluzAI, Kumuluz Digital Platform, Kumuluz API, Kumuluz Business APIs and Kumuluz Crowdsensing.',
        },
        {
          title: 'Open-source projects',
          text: 'Contribute to open-source digital infrastructure and projects connected with international ecosystems such as AgStack and LF Energy.',
        },
        {
          title: 'Research and innovation projects',
          text: 'Participate in international R&I projects exploring AI, cloud-edge systems, IoT, cybersecurity, data platforms and next-generation digital infrastructure.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'roles',
      title: 'Open roles',
      intro:
        'We are continuously looking for talented people across AI, backend, frontend, mobile, DevOps, architecture, product and project leadership. Even if there is no exact open role for your profile, we would still like to hear from you.',
      items: [
        {
          title: 'AI Developer / AI Engineer',
          text: 'We are looking for AI developers who want to build real AgenticAI solutions — not just demos or chatbots. You will work on AI agents, multi-agent workflows, RAG pipelines, enterprise knowledge integration, AI tool use, process automation and production-grade AI platforms.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Python',
            'AgenticAI development',
            'LangChain, LangGraph, Langfuse',
            'RAG and enterprise knowledge retrieval',
            'Vector databases',
            'MCP and tool integration',
            'Prompt engineering and evaluation',
            'AI safety and guardrails',
            'API integration and cloud-native deployment',
          ],
        },
        {
          title: 'Data Scientist / AI Specialist',
          text: 'We are looking for data scientists and AI specialists who want to apply AI to real business processes, decision support, knowledge automation and enterprise data environments.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Python',
            'Machine learning and applied AI',
            'LLMs and generative AI',
            'RAG systems',
            'Data analysis and feature engineering',
            'Evaluation of AI models and prompts',
            'Semantic search and vector embeddings',
            'Data pipelines',
            'Knowledge extraction from documents',
            'Experimentation and model validation',
          ],
        },
        {
          title: 'Java Backend Developer',
          text: 'We are looking for Java backend developers to build enterprise services, APIs, integrations and cloud-native digital platforms.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Java',
            'Spring Boot, Quarkus, Jakarta EE',
            'REST APIs',
            'Microservices',
            'SQL and NoSQL databases',
            'Kafka or event-driven systems',
            'Cloud-native development',
            'Kubernetes environments',
            'Security and authentication concepts',
          ],
        },
        {
          title: '.NET Backend Developer',
          text: 'We are looking for .NET backend developers to build secure, scalable and maintainable enterprise backend systems.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'C# and .NET',
            'ASP.NET Core',
            'REST APIs',
            'Microservices',
            'SQL databases',
            'Enterprise integrations',
            'Cloud-native development and Azure',
            'Authentication and authorization',
            'CI/CD workflows',
          ],
        },
        {
          title: 'Python Developer',
          text: 'We are looking for Python developers to build backend services, data pipelines, AI integrations, automation tools and cloud-native applications.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Python',
            'FastAPI or similar frameworks',
            'Backend services and API development',
            'Data processing',
            'AI/LLM integrations',
            'Automation',
            'Containers and Kubernetes',
            'Testing and CI/CD',
          ],
        },
        {
          title: 'Frontend Developer — Angular / React',
          text: 'We are looking for frontend developers to build modern web applications, customer portals, internal tools and digital platforms.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Angular and/or React',
            'TypeScript',
            'API-driven frontend development',
            'Responsive UI development',
            'Enterprise web applications',
            'State management',
            'Testing and build tooling',
            'UX awareness and performance optimization',
          ],
        },
        {
          title: 'Mobile Developer — iOS / Android',
          text: 'We are looking for mobile developers to build native mobile applications connected to secure enterprise backend systems.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Native iOS and Android development',
            'Swift, Kotlin or Java',
            'Mobile application architecture',
            'API integration',
            'Push notifications',
            'Secure mobile communication',
            'Mobile identity flows',
            'Performance optimization',
          ],
        },
        {
          title: 'API / Integration Engineer',
          text: 'We are looking for engineers who want to design and build APIs, integrations, Business APIs and event-driven systems. You will work on enterprise integrations, API management, backend systems, Kafka, NATS, partner APIs, workflow integrations and AI-agent-ready API layers.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'REST APIs and OpenAPI',
            'API-first development',
            'Enterprise integration patterns',
            'Kafka, NATS, gRPC',
            'API gateways',
            'OAuth2/OIDC and Keycloak',
            'Event-driven architecture',
            'Business APIs and workflow integration',
            'Cloud-native services',
          ],
        },
        {
          title: 'DevOps Engineer / Platform Engineer',
          text: 'We are looking for DevOps and platform engineers to build secure, automated and production-grade delivery foundations. You will work on CI/CD, Kubernetes, OpenShift, GitOps, cloud infrastructure, observability, security and platform automation.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Kubernetes and OpenShift',
            'GitLab CI/CD, Azure DevOps, GitHub Actions',
            'Terraform and Ansible',
            'Argo CD',
            'Microsoft Azure and Google Cloud',
            'HashiCorp Vault and Keycloak',
            'Kyverno and Open Policy Agent',
            'Instana and OpenTelemetry',
            'Monitoring, logging and tracing',
            'Linux and networking fundamentals',
          ],
        },
        {
          title: 'Software Architect / Solution Architect',
          text: 'We are looking for architects who can design enterprise software systems, cloud-native architectures, API ecosystems, integrations and digital platforms.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Enterprise and cloud-native architecture',
            'Microservices',
            'API-first architecture',
            'Event-driven systems',
            'Integration and security architecture',
            'Kubernetes and OpenShift',
            'DevOps awareness',
            'Enterprise identity and access management',
            'Architecture documentation',
            'Stakeholder communication',
          ],
        },
        {
          title: 'Product / Project Lead',
          text: 'We are looking for product and project leads who can connect business goals, users, technology teams and delivery execution. You will work with clients, engineers and stakeholders to guide digital initiatives from idea to delivery.',
          bulletsTitle: 'Useful experience',
          bullets: [
            'Product ownership or project leadership',
            'Agile delivery',
            'Stakeholder management',
            'Enterprise software projects',
            'Requirements analysis',
            'Technical understanding',
            'Delivery planning',
            'Communication with business and engineering teams',
            'Risk and scope management',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'What we value',
      variant: 'check',
      columns: 3,
      items: [
        {
          title: 'Engineering quality',
          text: 'We care about clean, reliable, secure and maintainable solutions.',
        },
        {
          title: 'Curiosity and learning',
          text: 'We work with modern technologies and expect continuous learning.',
        },
        {
          title: 'Ownership',
          text: 'We value people who take responsibility and care about outcomes.',
        },
        {
          title: 'Collaboration',
          text: 'Our projects require teamwork between engineers, architects, product leads, clients and partners.',
        },
        {
          title: 'Pragmatism',
          text: 'We like modern technology, but we use it to solve real problems — not for hype.',
        },
        {
          title: 'Production mindset',
          text: 'We build systems that must work reliably in real environments, not only in demos.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Why work with us',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Work on advanced technologies',
          text: 'AgenticAI, cloud-native platforms, Kubernetes, APIs, DevOps, integrations, open-source projects and research initiatives.',
        },
        {
          title: 'Enterprise-level challenges',
          text: 'You will work on systems that support real business processes and demanding environments.',
        },
        {
          title: 'Experienced team',
          text: 'You will join a team of 40+ engineers, architects, DevOps specialists, AI experts and integration specialists.',
        },
        {
          title: 'Opportunity to grow',
          text: 'You can deepen your expertise, move across domains and work on different types of projects.',
        },
        {
          title: 'Kumuluz platforms',
          text: 'You can contribute to our own platforms and accelerators, including KumuluzAI and other Kumuluz products.',
        },
        {
          title: 'Open-source and innovation exposure',
          text: 'You can work on open-source initiatives and international research projects alongside enterprise delivery.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Interested in joining Sunesis?',
      body: [
        'If you see yourself in one of these roles — or if you believe your expertise could strengthen our team — we would like to hear from you.',
        'Send us your CV, LinkedIn profile or a short introduction and tell us what kind of work you are interested in.',
      ],
      primaryCta: 'Send us your application',
    },
  ],
}

const sl: CompanyPageContent = {
  seo: {
    title:
      'Kariera v Sunesisu | AgenticAI, inženiring programske opreme, API-ji in DevOps',
    description:
      'Pridružite se Sunesisu in soustvarjajte AgenticAI, poslovne digitalne platforme, API ekosisteme, cloud-native arhitekture, DevOps, Kubernetes, backend, frontend in mobilne aplikacije.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Kariera v Sunesisu',
    title:
      'Gradite poslovni AI, digitalne platforme, API-je in cloud-native sisteme',
    body: [
      'Pridružite se ekipi inženirjev, arhitektov, AI strokovnjakov in DevOps specialistov, ki razvijajo poslovne AgenticAI rešitve, digitalne platforme, API ekosisteme, cloud-native arhitekture in poslovno kritične programske sisteme.',
      'V Sunesisu delate s tehnologijo, ki ima pomen — od AI agentov in platform za digitalno bančništvo do okolij Kubernetes, API ekosistemov, odprtokodnih projektov, raziskovalnih pobud in platform Kumuluz.',
    ],
    primaryCta: 'Pošljite prijavo',
    secondaryCta: 'Oglejte si prosta mesta',
    trustLine:
      'Delajte na poslovnih sistemih, AgenticAI, platformah Kumuluz, odprtokodnih projektih in mednarodnih inovacijskih pobudah.',
  },
  sections: [
    {
      type: 'split',
      title: 'Ustvarjajte tehnologijo, ki ima pomen',
      body: [
        'Sunesis dela na projektih, kjer ima tehnologija resničen vpliv: poslovne digitalne platforme, avtomatizacija procesov z AI, varne integracije, sistemi javnega sektorja, API ekosistemi, cloud-native arhitekture, DevOps temelji, odprtokodna infrastruktura ter mednarodni raziskovalni in inovacijski projekti.',
        'Iščemo ljudi, ki jih veseli reševanje kompleksnih problemov, učenje novih tehnologij in gradnja sistemov, ki morajo zanesljivo delovati v resničnih okoljih.',
        'Sodelovali boste z izkušenimi inženirji na projektih, kjer štejejo arhitektura, kakovost, varnost, vzdržljivost in pripravljenost za produkcijo.',
      ],
    },
    {
      type: 'cards',
      title: 'Na čem boste lahko delali',
      variant: 'accent',
      columns: 4,
      items: [
        {
          title: 'AgenticAI rešitve',
          text: 'Gradite AI agente, AI asistente, večagentne workflowe, RAG sisteme, poslovne AI integracije in upravljane AI platforme za resnične poslovne procese.',
        },
        {
          title: 'Poslovne digitalne platforme',
          text: 'Razvijajte backend sisteme, spletne aplikacije, mobilne aplikacije, portale, API-je in integracije za stranke v bančništvu, zavarovalništvu, javnem sektorju, energetiki in podjetjih.',
        },
        {
          title: 'API ekosistemi in integracije',
          text: 'Delajte z upravljanjem API-jev, API prehodi, Business API-ji, partnerskimi integracijami, dogodkovno vodenimi sistemi in API-ji, pripravljenimi za AI agente.',
        },
        {
          title: 'Cloud-native in edge arhitekture',
          text: 'Delajte na mikrostoritvah, Kubernetesu, OpenShiftu, API-jih, dogodkovno vodenih sistemih, oblačnih platformah in konceptih edge-fog-cloud.',
        },
        {
          title: 'DevOps in platformni inženiring',
          text: 'Gradite CI/CD cevovode, GitOps workflowe, avtomatizacijo infrastrukture, platforme Kubernetes, opazljivost sistemov in varne temelje dostave.',
        },
        {
          title: 'Platforme Kumuluz',
          text: 'Prispevajte k rešitvam KumuluzAI, Kumuluz Digital Platform, Kumuluz API, Kumuluz Business API-jem in Kumuluz Crowdsensing.',
        },
        {
          title: 'Odprtokodni projekti',
          text: 'Prispevajte k odprtokodni digitalni infrastrukturi in projektom, povezanim z mednarodnimi ekosistemi, kot sta AgStack in LF Energy.',
        },
        {
          title: 'Raziskovalni in inovacijski projekti',
          text: 'Sodelujte v mednarodnih R&I projektih, ki raziskujejo AI, cloud-edge sisteme, IoT, kibernetsko varnost, podatkovne platforme in digitalno infrastrukturo naslednje generacije.',
        },
      ],
    },
    {
      type: 'capabilities',
      id: 'roles',
      title: 'Prosta delovna mesta',
      intro:
        'Nenehno iščemo nadarjene ljudi na področjih AI, backenda, frontenda, mobilnih rešitev, DevOps, arhitekture, produktnega in projektnega vodenja. Tudi če za vaš profil trenutno ni objavljenega prostega mesta, se nam vseeno oglasite.',
      items: [
        {
          title: 'AI razvijalec / AI inženir',
          text: 'Iščemo AI razvijalce, ki želijo graditi prave AgenticAI rešitve — ne le demo predstavitev ali klepetalnih botov. Delali boste z AI agenti, večagentnimi workflowi, RAG cevovodi, integracijo poslovnega znanja, uporabo AI orodij, avtomatizacijo procesov in produkcijskimi AI platformami.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Python',
            'Razvoj AgenticAI',
            'LangChain, LangGraph, Langfuse',
            'RAG in pridobivanje poslovnega znanja',
            'Vektorske baze podatkov',
            'MCP in integracija orodij',
            'Prompt engineering in evalvacija',
            'Varnost AI in varovala',
            'Integracija API-jev in cloud-native namestitve',
          ],
        },
        {
          title: 'Data Scientist / AI specialist',
          text: 'Iščemo podatkovne znanstvenike in AI specialiste, ki želijo AI uporabiti v resničnih poslovnih procesih, pri podpori odločanju, avtomatizaciji znanja in v poslovnih podatkovnih okoljih.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Python',
            'Strojno učenje in uporabni AI',
            'LLM-ji in generativni AI',
            'RAG sistemi',
            'Analiza podatkov in inženiring značilk',
            'Evalvacija AI modelov in promptov',
            'Semantično iskanje in vektorske vložitve',
            'Podatkovni cevovodi',
            'Pridobivanje znanja iz dokumentov',
            'Eksperimentiranje in validacija modelov',
          ],
        },
        {
          title: 'Java backend razvijalec',
          text: 'Iščemo Java backend razvijalce za gradnjo poslovnih storitev, API-jev, integracij in cloud-native digitalnih platform.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Java',
            'Spring Boot, Quarkus, Jakarta EE',
            'REST API-ji',
            'Mikrostoritve',
            'SQL in NoSQL baze podatkov',
            'Kafka ali dogodkovno vodeni sistemi',
            'Cloud-native razvoj',
            'Okolja Kubernetes',
            'Koncepti varnosti in avtentikacije',
          ],
        },
        {
          title: '.NET backend razvijalec',
          text: 'Iščemo .NET backend razvijalce za gradnjo varnih, skalabilnih in vzdržljivih poslovnih backend sistemov.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'C# in .NET',
            'ASP.NET Core',
            'REST API-ji',
            'Mikrostoritve',
            'SQL baze podatkov',
            'Poslovne integracije',
            'Cloud-native razvoj in Azure',
            'Avtentikacija in avtorizacija',
            'CI/CD workflowi',
          ],
        },
        {
          title: 'Python razvijalec',
          text: 'Iščemo Python razvijalce za gradnjo backend storitev, podatkovnih cevovodov, AI integracij, orodij za avtomatizacijo in cloud-native aplikacij.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Python',
            'FastAPI ali podobna ogrodja',
            'Backend storitve in razvoj API-jev',
            'Obdelava podatkov',
            'AI/LLM integracije',
            'Avtomatizacija',
            'Kontejnerji in Kubernetes',
            'Testiranje in CI/CD',
          ],
        },
        {
          title: 'Frontend razvijalec — Angular / React',
          text: 'Iščemo frontend razvijalce za gradnjo sodobnih spletnih aplikacij, portalov za stranke, notranjih orodij in digitalnih platform.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Angular in/ali React',
            'TypeScript',
            'Razvoj frontenda, voden z API-ji',
            'Razvoj odzivnih uporabniških vmesnikov',
            'Poslovne spletne aplikacije',
            'Upravljanje stanja',
            'Testiranje in orodja za gradnjo',
            'Občutek za UX in optimizacija zmogljivosti',
          ],
        },
        {
          title: 'Mobilni razvijalec — iOS / Android',
          text: 'Iščemo mobilne razvijalce za gradnjo native mobilnih aplikacij, povezanih z varnimi poslovnimi backend sistemi.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Native razvoj za iOS in Android',
            'Swift, Kotlin ali Java',
            'Arhitektura mobilnih aplikacij',
            'Integracija API-jev',
            'Potisna obvestila',
            'Varna mobilna komunikacija',
            'Mobilni tokovi identitete',
            'Optimizacija zmogljivosti',
          ],
        },
        {
          title: 'API / integracijski inženir',
          text: 'Iščemo inženirje, ki želijo načrtovati in graditi API-je, integracije, Business API-je in dogodkovno vodene sisteme. Delali boste s poslovnimi integracijami, upravljanjem API-jev, backend sistemi, Kafko, NATS, partnerskimi API-ji, integracijami workflowov in API plastmi, pripravljenimi za AI agente.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'REST API-ji in OpenAPI',
            'Razvoj po načelu API-first',
            'Vzorci poslovne integracije',
            'Kafka, NATS, gRPC',
            'API prehodi',
            'OAuth2/OIDC in Keycloak',
            'Dogodkovno vodena arhitektura',
            'Business API-ji in integracija workflowov',
            'Cloud-native storitve',
          ],
        },
        {
          title: 'DevOps inženir / platformni inženir',
          text: 'Iščemo DevOps in platformne inženirje za gradnjo varnih, avtomatiziranih in produkcijsko zrelih temeljev dostave. Delali boste s CI/CD, Kubernetesom, OpenShiftom, GitOps, oblačno infrastrukturo, opazljivostjo sistemov, varnostjo in avtomatizacijo platform.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Kubernetes in OpenShift',
            'GitLab CI/CD, Azure DevOps, GitHub Actions',
            'Terraform in Ansible',
            'Argo CD',
            'Microsoft Azure in Google Cloud',
            'HashiCorp Vault in Keycloak',
            'Kyverno in Open Policy Agent',
            'Instana in OpenTelemetry',
            'Spremljanje, beleženje in sledenje',
            'Osnove Linuxa in mreženja',
          ],
        },
        {
          title: 'Programski arhitekt / arhitekt rešitev',
          text: 'Iščemo arhitekte, ki znajo načrtovati poslovne programske sisteme, cloud-native arhitekture, API ekosisteme, integracije in digitalne platforme.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Poslovna in cloud-native arhitektura',
            'Mikrostoritve',
            'Arhitektura po načelu API-first',
            'Dogodkovno vodeni sistemi',
            'Integracijska in varnostna arhitektura',
            'Kubernetes in OpenShift',
            'Poznavanje DevOps',
            'Poslovno upravljanje identitet in dostopa',
            'Dokumentiranje arhitekture',
            'Komunikacija z deležniki',
          ],
        },
        {
          title: 'Produktni / projektni vodja',
          text: 'Iščemo produktne in projektne vodje, ki znajo povezati poslovne cilje, uporabnike, tehnološke ekipe in izvedbo. Sodelovali boste s strankami, inženirji in deležniki ter vodili digitalne pobude od ideje do realizacije.',
          bulletsTitle: 'Koristne izkušnje',
          bullets: [
            'Produktno lastništvo ali projektno vodenje',
            'Agilna dostava',
            'Upravljanje deležnikov',
            'Poslovni programski projekti',
            'Analiza zahtev',
            'Tehnično razumevanje',
            'Načrtovanje dostave',
            'Komunikacija s poslovnimi in inženirskimi ekipami',
            'Upravljanje tveganj in obsega',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Kaj cenimo',
      variant: 'check',
      columns: 3,
      items: [
        {
          title: 'Inženirska kakovost',
          text: 'Zavzemamo se za čiste, zanesljive, varne in vzdržljive rešitve.',
        },
        {
          title: 'Radovednost in učenje',
          text: 'Delamo s sodobnimi tehnologijami in spodbujamo nenehno učenje.',
        },
        {
          title: 'Prevzemanje odgovornosti',
          text: 'Cenimo ljudi, ki prevzemajo odgovornost in jim je mar za rezultate.',
        },
        {
          title: 'Sodelovanje',
          text: 'Naši projekti zahtevajo timsko delo med inženirji, arhitekti, produktnimi vodji, strankami in partnerji.',
        },
        {
          title: 'Pragmatizem',
          text: 'Sodobno tehnologijo imamo radi, a jo uporabljamo za reševanje resničnih problemov — ne zaradi všečnosti.',
        },
        {
          title: 'Produkcijska miselnost',
          text: 'Gradimo sisteme, ki morajo zanesljivo delovati v resničnih okoljih, ne le v demo predstavitvah.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj delati z nami',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Delo na naprednih tehnologijah',
          text: 'AgenticAI, cloud-native platforme, Kubernetes, API-ji, DevOps, integracije, odprtokodni projekti in raziskovalne pobude.',
        },
        {
          title: 'Izzivi na poslovni ravni',
          text: 'Delali boste na sistemih, ki podpirajo resnične poslovne procese in zahtevna okolja.',
        },
        {
          title: 'Izkušena ekipa',
          text: 'Pridružili se boste ekipi več kot 40 inženirjev, arhitektov, DevOps specialistov, AI strokovnjakov in integracijskih specialistov.',
        },
        {
          title: 'Priložnost za rast',
          text: 'Poglobite lahko svoje znanje, prehajate med področji in delate na različnih vrstah projektov.',
        },
        {
          title: 'Platforme Kumuluz',
          text: 'Prispevate lahko k našim lastnim platformam in pospeševalnikom, vključno s KumuluzAI in drugimi produkti Kumuluz.',
        },
        {
          title: 'Stik z odprto kodo in inovacijami',
          text: 'Poleg poslovne dostave lahko sodelujete pri odprtokodnih pobudah in mednarodnih raziskovalnih projektih.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Bi se radi pridružili Sunesisu?',
      body: [
        'Če se prepoznate v eni od teh vlog — ali menite, da bi vaše znanje lahko okrepilo našo ekipo — se nam oglasite.',
        'Pošljite nam svoj življenjepis, profil LinkedIn ali kratko predstavitev in nam zaupajte, kakšno delo vas zanima.',
      ],
      primaryCta: 'Pošljite prijavo',
    },
  ],
}

export const careersPage: Record<LanguageCode, CompanyPageContent> = { en, sl }
