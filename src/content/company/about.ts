import type { LanguageCode } from '../../lib/router'
import type { CompanyPageContent } from '../../views/company/types'

const en: CompanyPageContent = {
  seo: {
    title:
      'About Sunesis | Enterprise Software Engineering, AgenticAI, APIs and Cloud-native Platforms',
    description:
      'Sunesis is a Slovenian software engineering and technology company specializing in AgenticAI, digital platforms, API ecosystems, cloud-native architectures, DevOps and Kumuluz platforms.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'About Sunesis',
    title:
      'Enterprise software engineering for AgenticAI, APIs and digital platforms',
    body: [
      'Sunesis is a Slovenian software engineering and technology company focused on enterprise AgenticAI, digital solutions, API ecosystems, cloud-native architectures, DevOps, workflow automation and Kumuluz platforms.',
      'Founded in 2014, we help organizations design, build, integrate and operate secure, scalable and business-critical software systems.',
      'We work with organizations that need more than development capacity — they need architecture, engineering depth, integration expertise, platform thinking and production delivery experience.',
    ],
    primaryCta: 'Talk to our experts',
    secondaryCta: 'Explore our expertise',
    trustLine:
      'Enterprise software engineering, AI, APIs, integrations, cloud-native platforms and DevOps for demanding environments.',
  },
  sections: [
    {
      type: 'split',
      title: 'Engineering complex digital systems for enterprise environments',
      body: [
        'Sunesis helps organizations turn complex technology challenges into reliable digital solutions.',
        'Our work spans AgenticAI platforms, enterprise AI assistants, digital platforms, API ecosystems, integrations, workflow automation, cloud-native architectures, DevOps foundations and research-driven innovation.',
        'We design and build systems that support customer channels, internal operations, partner ecosystems, business process automation, data-driven services and long-term modernization.',
        'Our role is not limited to implementation. We help clients define architectures, connect systems, introduce reusable platform foundations, improve delivery practices and operate software in production environments.',
      ],
    },
    {
      type: 'cards',
      id: 'what-we-do',
      title: 'What we do',
      intro:
        'Our work is focused on five expertise areas where deep technical knowledge, enterprise experience and reliable delivery matter most.',
      variant: 'accent',
      columns: 3,
      items: [
        {
          title: 'AgenticAI Solutions',
          text: 'We design and build enterprise-grade AI agents and assistants that automate processes, use enterprise knowledge, connect to APIs and tools, support human approvals and run on governed AI platforms.',
        },
        {
          title: 'Digital Solutions Development',
          text: 'We develop complete digital solutions — backend systems, web applications, native mobile apps, portals, APIs, integrations and workflow-enabled business applications.',
        },
        {
          title: 'Cloud-native & Edge Architectures',
          text: 'We help organizations design and modernize cloud-native, microservice, API-first, event-driven and edge-fog-cloud architectures.',
        },
        {
          title: 'API Ecosystems & Integrations',
          text: 'We design API ecosystems, API management foundations, Business APIs, partner integrations, event-driven architectures and AI-agent-ready API layers.',
        },
        {
          title: 'DevOps & Platform Engineering',
          text: 'We build DevOps and platform engineering foundations for secure, automated and production-grade software delivery across cloud, hybrid and enterprise environments.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'The company behind Kumuluz',
      body: [
        'Sunesis is the company behind the Kumuluz product family — platforms and accelerators for AgenticAI, API management, reusable Business APIs, cloud-native digital platforms and AI-enhanced crowdsensing.',
        'Kumuluz reflects our engineering philosophy: open, modular, cloud-native, reusable, integration-ready and designed for enterprise environments.',
        'From KumuluzEE, the award-winning open-source microservice framework, to today’s KumuluzAI platform, Kumuluz represents our commitment to building technology foundations that others can build on.',
        'Today, Kumuluz helps organizations move from isolated AI, API and digital initiatives toward reusable platform foundations for agents, services, workflows, data and smart automation.',
      ],
    },
    {
      type: 'cards',
      title: 'How we work',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Architecture-first',
          text: 'We start with the business and system context, then design architectures that can be implemented, secured, observed, operated and evolved.',
        },
        {
          title: 'Engineering depth',
          text: 'Our teams bring strong expertise across backend, frontend, mobile, integrations, cloud-native systems, DevOps, AI, APIs and platform engineering.',
        },
        {
          title: 'Enterprise reliability',
          text: 'We build systems for environments where security, scalability, integration, observability, auditability and maintainability are essential.',
        },
        {
          title: 'Integration mindset',
          text: 'Most enterprise systems need to connect with existing platforms, identity providers, APIs, workflows, data sources and operational processes. We design for that reality.',
        },
        {
          title: 'Platform thinking',
          text: 'We help organizations avoid isolated one-off solutions by creating reusable services, APIs, Business APIs, workflows and platform foundations.',
        },
        {
          title: 'Pragmatic delivery',
          text: 'We focus on working software, iterative progress, realistic modernization paths and production readiness.',
        },
        {
          title: 'Long-term partnership',
          text: 'We often work with clients across multiple projects and technology generations, helping them evolve their digital capabilities over time.',
        },
      ],
    },
    {
      type: 'cards',
      id: 'industries',
      title: 'Where we work',
      intro:
        'Sunesis works with organizations in industries where technology must be reliable, secure and deeply integrated with business processes.',
      variant: 'compact',
      columns: 4,
      items: [
        {
          title: 'Banking & Financial Services',
          text: 'Digital banking, KYC, secure customer journeys, compliance workflows, API ecosystems and enterprise integrations.',
        },
        {
          title: 'Insurance',
          text: 'AgenticAI, process automation, integration platforms, Business APIs, knowledge-driven systems and secure digital services.',
        },
        {
          title: 'Public Sector',
          text: 'Case-management systems, secure workflows, digital administration, document-heavy processes and enterprise information systems.',
        },
        {
          title: 'Energy & Utilities',
          text: 'Operational platforms, customer engagement solutions, integrations, DER interoperability and business-critical systems.',
        },
        {
          title: 'Manufacturing & Premium Brands',
          text: 'Digital portals, customer experiences, partner services, digital presence and enterprise workflows.',
        },
        {
          title: 'Blockchain & Web3 Infrastructure',
          text: 'DevOps, platform engineering, automation, Kubernetes-based operations and production-grade infrastructure support.',
        },
        {
          title: 'Open Source & Linux Foundation Ecosystems',
          text: 'Open-source engineering, foundation ecosystems, interoperability, agricultural traceability and energy infrastructure projects.',
        },
        {
          title: 'Technology & Research',
          text: 'Cloud-edge, AI, IoT, cybersecurity, data platforms and international research and innovation projects.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Open-source and innovation mindset',
      body: [
        'Sunesis combines enterprise delivery with open-source contribution and research-driven innovation.',
        'Our teams do not only use open-source technologies — we help build open-source solutions that can evolve through international communities.',
        'Projects such as INATrace and CUPID demonstrate our ability to develop complete, production-oriented solutions that become part of broader Linux Foundation ecosystems.',
        'In parallel, our participation in European research and innovation projects keeps us close to emerging technologies in AgenticAI, cloud-edge architectures, IoT, cybersecurity, data spaces, distributed systems and energy-aware digital infrastructure.',
      ],
    },
    {
      type: 'prose',
      title: 'Recognized expertise',
      body: [
        'Sunesis and the Kumuluz product family have received national and international recognition for innovation in cloud-native and enterprise technologies.',
        'KumuluzEE received the Java Duke’s Choice Award at JavaOne, and Sunesis has also been recognized with the EuroCloud Award and Slovenian Start:up of the Year finalist recognition.',
        'Our team also brings recognized expertise and certifications across Java, cloud computing, enterprise architecture, SOA, project management and innovation management.',
      ],
    },
    {
      type: 'cards',
      title: 'Why organizations choose Sunesis',
      variant: 'check',
      columns: 3,
      items: [
        {
          title: 'Senior engineering expertise',
          text: 'We bring experienced teams that understand enterprise software, integrations, APIs, cloud-native systems, DevOps, AI and production delivery.',
        },
        {
          title: 'Ability to connect business and technology',
          text: 'We understand how to translate business needs into architecture, software systems, APIs, workflows and operational platforms.',
        },
        {
          title: 'Integration strength',
          text: 'Many of our projects involve connecting existing systems, APIs, event streams, data sources, workflows, digital channels and users.',
        },
        {
          title: 'Proven references',
          text: 'We work with organizations in banking, insurance, public sector, energy, manufacturing, blockchain infrastructure, open-source ecosystems and research.',
        },
        {
          title: 'Own platforms and accelerators',
          text: 'Our Kumuluz product family helps accelerate delivery and demonstrates our platform-building capability.',
        },
        {
          title: 'Production mindset',
          text: 'We build software that must operate reliably — with security, observability, deployment, auditability and supportability considered from the beginning.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Sunesis at a glance',
      variant: 'feature',
      columns: 3,
      items: [
        {
          label: 'Founded in 2014',
          title: 'A specialized software engineering company',
          text: 'Sunesis was founded in 2014 and has grown into a specialized software engineering and technology company focused on enterprise digital solutions, AgenticAI, APIs, cloud-native architectures and DevOps.',
        },
        {
          label: '40+ specialists',
          title: 'Architects, engineers and AI experts',
          text: 'Our team brings together 40+ software engineers, architects, DevOps specialists, AI experts and integration specialists with experience in complex enterprise environments.',
        },
        {
          label: 'Creator of Kumuluz',
          title: 'Platforms and accelerators',
          text: 'Sunesis is the company behind the Kumuluz product family — platforms and accelerators for AgenticAI, API management, Business APIs, cloud-native digital platforms and crowdsensing.',
        },
        {
          label: 'Award-winning',
          title: 'Recognized innovation',
          text: 'KumuluzEE received the Java Duke’s Choice Award, and Sunesis has also been recognized with the EuroCloud Award and as a Slovenian Start:up of the Year finalist.',
        },
        {
          label: 'Enterprise & open source',
          title: 'Enterprise, open-source and R&I experience',
          text: 'We work with enterprise clients, open-source ecosystems, Linux Foundation projects and international research and innovation consortia.',
        },
      ],
    },
    {
      type: 'finalCta',
      title:
        'Looking for a technology partner for complex digital initiatives?',
      body: [
        'Whether you are exploring AgenticAI, building a digital platform, modernizing architecture, creating API ecosystems or strengthening DevOps, Sunesis can help you design, build and operate enterprise-grade software solutions.',
      ],
      primaryCta: 'Talk to our experts',
      secondaryCta: 'Explore our expertise',
    },
  ],
}

const sl: CompanyPageContent = {
  seo: {
    title:
      'O Sunesisu | Inženiring poslovne programske opreme, AgenticAI, API-ji in cloud-native platforme',
    description:
      'Sunesis je slovensko podjetje za inženiring programske opreme in tehnologije, specializirano za AgenticAI, digitalne platforme, API ekosisteme, cloud-native arhitekture, DevOps in platforme Kumuluz.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'O Sunesisu',
    title:
      'Inženiring poslovne programske opreme za AgenticAI, API-je in digitalne platforme',
    body: [
      'Sunesis je slovensko podjetje za inženiring programske opreme in tehnologije, osredotočeno na poslovni AgenticAI, digitalne rešitve, API ekosisteme, cloud-native arhitekture, DevOps, avtomatizacijo workflowov in platforme Kumuluz.',
      'Ustanovljeni leta 2014 organizacijam pomagamo načrtovati, razvijati, integrirati in upravljati varne, skalabilne ter poslovno kritične programske sisteme.',
      'Sodelujemo z organizacijami, ki potrebujejo več kot le razvojne kapacitete — potrebujejo arhitekturo, inženirsko globino, integracijsko znanje, platformno razmišljanje in izkušnje s produkcijsko dostavo.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine:
      'Inženiring poslovne programske opreme, AI, API-ji, integracije, cloud-native platforme in DevOps za zahtevna okolja.',
  },
  sections: [
    {
      type: 'split',
      title: 'Inženiring kompleksnih digitalnih sistemov za poslovna okolja',
      body: [
        'Sunesis organizacijam pomaga kompleksne tehnološke izzive spremeniti v zanesljive digitalne rešitve.',
        'Naše delo zajema AgenticAI platforme, poslovne AI asistente, digitalne platforme, API ekosisteme, integracije, avtomatizacijo workflowov, cloud-native arhitekture, DevOps temelje in raziskovalno usmerjene inovacije.',
        'Načrtujemo in gradimo sisteme, ki podpirajo kanale za stranke, notranje operacije, partnerske ekosisteme, avtomatizacijo poslovnih procesov, podatkovno vodene storitve in dolgoročno modernizacijo.',
        'Naša vloga ni omejena zgolj na implementacijo. Strankam pomagamo opredeliti arhitekture, povezati sisteme, uvesti ponovno uporabne platformne temelje, izboljšati prakse dostave in upravljati programsko opremo v produkcijskih okoljih.',
      ],
    },
    {
      type: 'cards',
      id: 'what-we-do',
      title: 'Kaj počnemo',
      intro:
        'Naše delo je osredotočeno na pet področij ekspertize, kjer globoko tehnično znanje, poslovne izkušnje in zanesljiva dostava štejejo največ.',
      variant: 'accent',
      columns: 3,
      items: [
        {
          title: 'AgenticAI rešitve',
          text: 'Načrtujemo in gradimo poslovne AI agente in asistente, ki avtomatizirajo procese, uporabljajo poslovno znanje, se povezujejo z API-ji in orodji, podpirajo človeške odobritve in tečejo na upravljanih AI platformah.',
        },
        {
          title: 'Razvoj digitalnih rešitev',
          text: 'Razvijamo celovite digitalne rešitve — backend sisteme, spletne aplikacije, native mobilne aplikacije, portale, API-je, integracije in poslovne aplikacije z workflowi.',
        },
        {
          title: 'Cloud-native in edge arhitekture',
          text: 'Organizacijam pomagamo načrtovati in modernizirati cloud-native, mikrostoritvene, API-first, dogodkovno vodene ter edge-fog-cloud arhitekture.',
        },
        {
          title: 'API ekosistemi in integracije',
          text: 'Načrtujemo API ekosisteme, temelje za upravljanje API-jev, Business API-je, partnerske integracije, dogodkovno vodene arhitekture in API plasti, pripravljene za AI agente.',
        },
        {
          title: 'DevOps in platformni inženiring',
          text: 'Gradimo temelje DevOps in platformnega inženiringa za varno, avtomatizirano in produkcijsko dostavo programske opreme v cloud, hibridnih in poslovnih okoljih.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Podjetje, ki stoji za platformami Kumuluz',
      body: [
        'Sunesis je podjetje, ki stoji za družino izdelkov Kumuluz — platformami in pospeševalniki za AgenticAI, upravljanje API-jev, ponovno uporabne Business API-je, cloud-native digitalne platforme in AI-podprt crowdsensing.',
        'Kumuluz odraža našo inženirsko filozofijo: odprto, modularno, cloud-native, ponovno uporabno, pripravljeno za integracije in zasnovano za poslovna okolja.',
        'Od KumuluzEE, nagrajenega odprtokodnega ogrodja za mikrostoritve, do današnje platforme KumuluzAI Kumuluz predstavlja našo zavezanost gradnji tehnoloških temeljev, na katerih lahko gradijo drugi.',
        'Danes Kumuluz organizacijam pomaga preiti od izoliranih AI, API in digitalnih pobud k ponovno uporabnim platformnim temeljem za agente, storitve, workflowe, podatke in pametno avtomatizacijo.',
      ],
    },
    {
      type: 'cards',
      title: 'Kako delamo',
      variant: 'numbered',
      columns: 3,
      items: [
        {
          title: 'Arhitektura na prvem mestu',
          text: 'Začnemo s poslovnim in sistemskim kontekstom, nato načrtujemo arhitekture, ki jih je mogoče implementirati, zavarovati, nadzorovati, upravljati in razvijati.',
        },
        {
          title: 'Inženirska globina',
          text: 'Naše ekipe prinašajo poglobljeno znanje na področjih backenda, frontenda, mobilnih rešitev, integracij, cloud-native sistemov, DevOps, AI, API-jev in platformnega inženiringa.',
        },
        {
          title: 'Poslovna zanesljivost',
          text: 'Gradimo sisteme za okolja, kjer so varnost, skalabilnost, integracija, opazljivost, sledljivost in vzdržljivost ključnega pomena.',
        },
        {
          title: 'Integracijsko razmišljanje',
          text: 'Večina poslovnih sistemov se mora povezati z obstoječimi platformami, ponudniki identitete, API-ji, workflowi, podatkovnimi viri in operativnimi procesi. Za to realnost tudi načrtujemo.',
        },
        {
          title: 'Platformno razmišljanje',
          text: 'Organizacijam pomagamo, da se izognejo izoliranim enkratnim rešitvam, z ustvarjanjem ponovno uporabnih storitev, API-jev, Business API-jev, workflowov in platformnih temeljev.',
        },
        {
          title: 'Pragmatična dostava',
          text: 'Osredotočamo se na delujočo programsko opremo, iterativni napredek, realistične poti modernizacije in pripravljenost za produkcijo.',
        },
        {
          title: 'Dolgoročno partnerstvo',
          text: 'S strankami pogosto sodelujemo skozi več projektov in tehnoloških generacij ter jim pomagamo skozi čas razvijati njihove digitalne zmogljivosti.',
        },
      ],
    },
    {
      type: 'cards',
      id: 'industries',
      title: 'Kje delujemo',
      intro:
        'Sunesis sodeluje z organizacijami v panogah, kjer mora biti tehnologija zanesljiva, varna in globoko integrirana s poslovnimi procesi.',
      variant: 'compact',
      columns: 4,
      items: [
        {
          title: 'Bančništvo in finančne storitve',
          text: 'Digitalno bančništvo, KYC, varne uporabniške poti, skladnostni workflowi, API ekosistemi in poslovne integracije.',
        },
        {
          title: 'Zavarovalništvo',
          text: 'AgenticAI, avtomatizacija procesov, integracijske platforme, Business API-ji, na znanju temelječi sistemi in varne digitalne storitve.',
        },
        {
          title: 'Javni sektor',
          text: 'Sistemi za upravljanje primerov, varni workflowi, digitalna administracija, dokumentno intenzivni procesi in poslovni informacijski sistemi.',
        },
        {
          title: 'Energetika in komunala',
          text: 'Operativne platforme, rešitve za vključevanje strank, integracije, interoperabilnost DER in poslovno kritični sistemi.',
        },
        {
          title: 'Proizvodnja in premium blagovne znamke',
          text: 'Digitalni portali, uporabniške izkušnje, partnerske storitve, digitalna prisotnost in poslovni workflowi.',
        },
        {
          title: 'Blockchain in Web3 infrastruktura',
          text: 'DevOps, platformni inženiring, avtomatizacija, operacije na osnovi Kubernetesa in podpora produkcijski infrastrukturi.',
        },
        {
          title: 'Odprta koda in ekosistemi Linux Foundation',
          text: 'Odprtokodni inženiring, ekosistemi fundacij, interoperabilnost, sledljivost v kmetijstvu in projekti energetske infrastrukture.',
        },
        {
          title: 'Tehnologija in raziskave',
          text: 'Cloud-edge, AI, IoT, kibernetska varnost, podatkovne platforme ter mednarodni raziskovalni in inovacijski projekti.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Miselnost odprte kode in inovacij',
      body: [
        'Sunesis združuje poslovno dostavo s prispevkom k odprti kodi in raziskovalno usmerjenimi inovacijami.',
        'Naše ekipe odprtokodnih tehnologij ne le uporabljajo — pomagamo graditi odprtokodne rešitve, ki se lahko razvijajo skozi mednarodne skupnosti.',
        'Projekti, kot sta INATrace in CUPID, dokazujejo našo sposobnost razvoja celovitih, produkcijsko usmerjenih rešitev, ki postanejo del širših ekosistemov Linux Foundation.',
        'Vzporedno nas sodelovanje v evropskih raziskovalnih in inovacijskih projektih ohranja blizu nastajajočim tehnologijam na področjih AgenticAI, cloud-edge arhitektur, IoT, kibernetske varnosti, podatkovnih prostorov, porazdeljenih sistemov in energetsko ozaveščene digitalne infrastrukture.',
      ],
    },
    {
      type: 'prose',
      title: 'Prepoznano strokovno znanje',
      body: [
        'Sunesis in družina izdelkov Kumuluz sta prejela nacionalna in mednarodna priznanja za inovacije na področju cloud-native in poslovnih tehnologij.',
        'KumuluzEE je na konferenci JavaOne prejel nagrado Java Duke’s Choice Award, Sunesis pa je bil prepoznan tudi z nagrado EuroCloud Award in kot finalist izbora Slovenski start:up leta.',
        'Naša ekipa prinaša tudi priznano strokovno znanje in certifikate na področjih Jave, računalništva v oblaku, poslovne arhitekture, SOA, projektnega vodenja in upravljanja inovacij.',
      ],
    },
    {
      type: 'cards',
      title: 'Zakaj organizacije izberejo Sunesis',
      variant: 'check',
      columns: 3,
      items: [
        {
          title: 'Senior inženirsko znanje',
          text: 'Prinašamo izkušene ekipe, ki razumejo poslovno programsko opremo, integracije, API-je, cloud-native sisteme, DevOps, AI in produkcijsko dostavo.',
        },
        {
          title: 'Sposobnost povezovanja posla in tehnologije',
          text: 'Razumemo, kako poslovne potrebe prevesti v arhitekturo, programske sisteme, API-je, workflowe in operativne platforme.',
        },
        {
          title: 'Moč integracij',
          text: 'Mnogi naši projekti vključujejo povezovanje obstoječih sistemov, API-jev, tokov dogodkov, podatkovnih virov, workflowov, digitalnih kanalov in uporabnikov.',
        },
        {
          title: 'Dokazane reference',
          text: 'Sodelujemo z organizacijami v bančništvu, zavarovalništvu, javnem sektorju, energetiki, proizvodnji, blockchain infrastrukturi, odprtokodnih ekosistemih in raziskavah.',
        },
        {
          title: 'Lastne platforme in pospeševalniki',
          text: 'Naša družina izdelkov Kumuluz pomaga pospešiti dostavo in izkazuje našo sposobnost gradnje platform.',
        },
        {
          title: 'Produkcijska miselnost',
          text: 'Gradimo programsko opremo, ki mora delovati zanesljivo — z varnostjo, opazljivostjo, namestitvijo, sledljivostjo in podporo, upoštevanimi od samega začetka.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Sunesis na kratko',
      variant: 'feature',
      columns: 3,
      items: [
        {
          label: 'Ustanovljeni 2014',
          title: 'Specializirano podjetje za inženiring programske opreme',
          text: 'Sunesis je bil ustanovljen leta 2014 in je zrasel v specializirano podjetje za inženiring programske opreme in tehnologije, osredotočeno na poslovne digitalne rešitve, AgenticAI, API-je, cloud-native arhitekture in DevOps.',
        },
        {
          label: '40+ strokovnjakov',
          title: 'Arhitekti, inženirji in AI strokovnjaki',
          text: 'Naša ekipa združuje več kot 40 programskih inženirjev, arhitektov, DevOps strokovnjakov, AI strokovnjakov in integracijskih strokovnjakov z izkušnjami v kompleksnih poslovnih okoljih.',
        },
        {
          label: 'Tvorec Kumuluza',
          title: 'Platforme in pospeševalniki',
          text: 'Sunesis je podjetje za družino izdelkov Kumuluz — platformami in pospeševalniki za AgenticAI, upravljanje API-jev, Business API-je, cloud-native digitalne platforme in crowdsensing.',
        },
        {
          label: 'Nagrajeni',
          title: 'Prepoznana inovativnost',
          text: 'KumuluzEE je prejel nagrado Java Duke’s Choice Award, Sunesis pa je bil prepoznan tudi z nagrado EuroCloud Award in kot finalist izbora Slovenski start:up leta.',
        },
        {
          label: 'Posel in odprta koda',
          title: 'Poslovne, odprtokodne in R&I izkušnje',
          text: 'Sodelujemo s poslovnimi strankami, odprtokodnimi ekosistemi, projekti Linux Foundation in mednarodnimi raziskovalnimi in inovacijskimi konzorciji.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Iščete tehnološkega partnerja za kompleksne digitalne pobude?',
      body: [
        'Ne glede na to, ali raziskujete AgenticAI, gradite digitalno platformo, modernizirate arhitekturo, ustvarjate API ekosisteme ali krepite DevOps, vam Sunesis lahko pomaga načrtovati, graditi in upravljati poslovne programske rešitve.',
      ],
      primaryCta: 'Pogovorite se z našimi strokovnjaki',
      secondaryCta: 'Raziščite naše ekspertize',
    },
  ],
}

export const aboutPage: Record<LanguageCode, CompanyPageContent> = { en, sl }
