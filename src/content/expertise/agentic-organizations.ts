import type { LanguageCode } from '../../lib/router'
import type { ExpertisePageContent } from '../../views/expertise/types'

const en: ExpertisePageContent = {
  seo: {
    title: 'AgenticAI Organizations & Digital Workers | Sunesis',
    description:
      'Sunesis builds digital workers and AgenticAI organizations that proactively run business processes, departments and operations with human oversight.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'AgenticAI Organizations & Digital Workers',
    title: 'Digital workers. Autonomous processes. AgenticAI organizations.',
    body: [
      'We design, build and integrate digital workers that proactively carry out work in your business systems. From a single business role to the operational work of an entire organization — within agreed permissions, risk limits and human oversight.',
      'Sunesis delivers the complete solution: process and role design, agent development, enterprise integration, deployment, monitoring and continuous improvement. Start with a focused process and expand where the results justify it.',
    ],
    primaryCta: 'Discuss your process automation',
    secondaryCta: 'Explore all our expertise',
    trustLine:
      'Agents do the work. People set the direction and retain accountability.',
  },
  sections: [
    {
      type: 'compare',
      title: 'A digital worker does more than answer a question',
      intro:
        'A digital worker is a software-based business role, implemented with AI agents, approved tools and workflows. It has a defined objective, permissions and measurable outcomes.',
      columns: [
        {
          title: 'An assistant supports a person',
          bullets: [
            'Responds when a user asks a question or requests a task',
            'Finds information, analyses documents and prepares outputs',
            'Leaves the user to coordinate follow-up work across systems',
          ],
        },
        {
          title: 'A digital worker takes on operational work',
          bullets: [
            'Responds to business events, schedules and requests',
            'Works proactively in the background using approved systems',
            'Tracks progress and carries the case through to a verified outcome',
            'Escalates exceptions with context and a clear decision request',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'From one business role to an AgenticAI organization',
      intro:
        'Choose the scope that fits your processes, readiness and risk profile. Organization-wide autonomy is an option where the nature of the business allows it, not a prerequisite.',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Digital workers',
          text: 'A defined role that monitors incoming work, gathers context, performs approved actions and follows up on deadlines. For example, handling routine service requests or preparing and validating documents.',
        },
        {
          title: 'Agent teams and departments',
          text: 'Specialized digital workers coordinate intake, validation, execution and follow-up across a complete process or department, handing over work with shared context.',
        },
        {
          title: 'AgenticAI organizations',
          text: 'Connected teams run processes across business functions and, where appropriate, company-wide operations. People set objectives, supervise performance and resolve matters requiring their judgment.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'How work moves from an event to an outcome',
      intro:
        'For example, a service request can start a process without someone opening a chat. This is an illustrative workflow, not a claim about a specific customer deployment.',
      numbered: true,
      items: [
        {
          title: 'Receive and assign',
          text: 'A request, system event or scheduled check triggers work. The solution identifies the case, assigns the responsible role and checks its permissions.',
        },
        {
          title: 'Gather context and plan',
          text: 'Workers retrieve approved knowledge and business data, validate prerequisites and coordinate the required steps.',
        },
        {
          title: 'Execute in business systems',
          text: 'Agents use governed Business APIs and MCP tools. Durable workflows manage state, retries, timeouts and required approvals.',
        },
        {
          title: 'Verify, complete or escalate',
          text: 'The solution checks the business result and records completion. Exceptions go to a person with the context, actions already taken and the decision needed.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Autonomy with clear boundaries and meaningful oversight',
      intro:
        'A running system is not necessarily doing the right work. We combine technical monitoring with oversight of business decisions, process compliance and result quality.',
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Defined permissions',
          text: 'Specify what each role may read, change or execute. Sensitive actions and changes to business rules require the agreed approvals.',
        },
        {
          title: 'Business-level supervision',
          text: 'Detect missed steps, outdated information, inconsistent decisions and unusual outcomes, alongside technical failures and resource limits.',
        },
        {
          title: 'Actionable exceptions',
          text: 'Give people a summary, supporting evidence and a clear decision request — not raw logs or an alert for every minor uncertainty.',
        },
        {
          title: 'Traceable execution',
          text: 'Connect agent actions, tool calls, process transitions and approvals in an audit trail that supports investigation and accountability.',
        },
        {
          title: 'Reliable recovery',
          text: 'Limit loops and resource consumption, handle unavailable services and safely pause or resume work from confirmed process state.',
        },
        {
          title: 'Controlled improvement',
          text: 'Validate proposed changes on historical cases before rollout. Apply improvements within authorized boundaries; retain human approval for changes to permissions or important rules.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Measure completed work, not just model responses',
      intro:
        'We agree on a baseline and evaluate the whole process. Efficiency gains are measured goals, not guaranteed percentages.',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Autonomous completion',
          text: 'The share of cases completed end to end without human intervention, together with the frequency and reasons for escalation.',
        },
        {
          title: 'Time and cost per case',
          text: 'Elapsed time, handover delays and total operating cost per completed case, rather than token consumption alone.',
        },
        {
          title: 'Quality and rework',
          text: 'Correctness of outcomes, compliance with business rules and how often work must be corrected or repeated.',
        },
      ],
      body: [
        'Execution data and human corrections reveal bottlenecks, recurring exceptions and opportunities to improve agent coordination and process design. We validate improvements against the agreed business metrics before expanding autonomy.',
      ],
    },
    {
      type: 'steps',
      title: 'A practical path from one process to connected operations',
      numbered: true,
      items: [
        {
          title: 'Select a process and establish a baseline',
          text: 'Identify business value, owners, data availability, integration needs and risks. Agree on success criteria and where people must remain involved.',
        },
        {
          title: 'Design roles and autonomy boundaries',
          text: 'Map digital workers, tools, permissions, handovers, exception handling and business-level supervision.',
        },
        {
          title: 'Build and evaluate a focused pilot',
          text: 'Integrate with the relevant systems and test representative cases, failure scenarios and human approvals before production rollout.',
        },
        {
          title: 'Operate, improve and expand',
          text: 'Monitor results, validate improvements and add roles or processes when quality, reliability and business outcomes support expansion.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Built by Sunesis. Powered by KumuluzAI.',
      body: [
        'Sunesis is your engineering and delivery partner. KumuluzAI provides the reusable platform foundation for agent orchestration, knowledge access, tools, governance and evaluation.',
        'We connect digital workers to existing business systems through controlled interfaces, separating AI reasoning from deterministic execution. Cloud-native engineering, microservices, API integration and DevOps make this operational model reliable — and remain independent Sunesis services.',
      ],
      items: [
        {
          title: 'KumuluzAI',
          text: 'A governed foundation for agents, model routing, knowledge, evaluation and oversight.',
        },
        {
          title: 'Business APIs and MCP',
          text: 'Controlled access to business capabilities with identity, authorization and auditable actions.',
        },
        {
          title: 'Cloud-native operations',
          text: 'Workflow orchestration, observability and reliable deployment in cloud or on-premise environments.',
        },
      ],
      cta: 'Explore KumuluzAI',
      ctaHref: 'https://kumuluz.com/en/products/kumuluz-ai/',
    },
    {
      type: 'cards',
      title: 'From engineering practice, not just a concept',
      columns: 2,
      variant: 'feature',
      items: [
        {
          label: 'Project in progress',
          title: 'Building an autonomous AgenticAI organization',
          text: 'Sunesis is participating in a project to establish an organization where agent teams proactively carry out day-to-day operations. The customer and industry are not disclosed under NDA. This is ongoing work, not a completed production reference.',
        },
        {
          label: 'Public engineering perspective',
          title: 'What changes when agents work in the background',
          text: 'Our article explains business-level supervision, exception handling, permission boundaries, reliable execution and process improvement. It also distinguishes projects with different levels of autonomy.',
        },
      ],
      cta: 'Read the article on autonomous AgenticAI organizations',
      ctaHref: 'insights/autonomous-agenticai-organisation/',
    },
    {
      type: 'cards',
      title: 'Looking for an AI solution rather than a new operating model?',
      intro:
        'Our AgenticAI Solutions offering covers assistants, AI agents, RAG, multi-agent applications and enterprise platform integration.',
      columns: 2,
      variant: 'compact',
      items: [
        {
          title: 'AgenticAI solutions',
          text: 'Build a specific AI application or platform connected to your knowledge, tools and business systems.',
        },
        {
          title: 'AgenticAI organizations',
          text: 'Design and implement digital roles that take on ongoing operational work across processes and business functions.',
        },
      ],
      cta: 'Explore AgenticAI Solutions',
      ctaHref: 'expertise/agentic-ai/',
    },
    {
      type: 'finalCta',
      title: 'Which process could your first digital worker take on?',
      body: [
        'Together, we can identify a suitable process, define the boundaries of autonomy and plan a measurable first implementation — with a path to connected teams and organization-wide operations.',
      ],
      primaryCta: 'Discuss your process automation',
    },
  ],
}

const sl: ExpertisePageContent = {
  seo: {
    title: 'AgenticAI organizacije in digitalni delavci | Sunesis',
    description:
      'Sunesis razvija digitalne delavce in vzpostavlja AgenticAI organizacije za proaktivno izvajanje procesov, dela oddelkov in poslovanja pod človeškim nadzorom.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'AgenticAI organizacije in digitalni delavci',
    title: 'Digitalni delavci. Avtonomni procesi. AgenticAI organizacije.',
    body: [
      'Načrtujemo, razvijamo in povezujemo digitalne delavce, ki proaktivno izvajajo delo v vaših poslovnih sistemih. Od posamezne poslovne vloge do operativnega dela celotne organizacije — znotraj dogovorjenih pooblastil, meja tveganja in pod človeškim nadzorom.',
      'Sunesis poskrbi za celotno rešitev: zasnovo procesov in vlog, razvoj agentov, integracije, uvedbo, spremljanje in nenehno izboljševanje. Začnemo z izbranim procesom in obseg širimo tam, kjer to upravičujejo rezultati.',
    ],
    primaryCta: 'Pogovorimo se o avtomatizaciji vaših procesov',
    secondaryCta: 'Raziščite vse naše ekspertize',
    trustLine:
      'Agenti izvajajo delo. Ljudje določajo smer in ohranijo odgovornost.',
  },
  sections: [
    {
      type: 'compare',
      title: 'Digitalni delavec naredi več kot odgovori na vprašanje',
      intro:
        'Digitalni delavec je programsko izvedena poslovna vloga, ki združuje AI agente, dovoljena orodja in delovne tokove. Ima določen cilj, pooblastila in merljive rezultate.',
      columns: [
        {
          title: 'Asistent pomaga človeku',
          bullets: [
            'Odzove se na vprašanje ali zahtevo uporabnika',
            'Poišče informacije, analizira dokumente in pripravi rezultate',
            'Usklajevanje nadaljnjega dela med sistemi prepusti uporabniku',
          ],
        },
        {
          title: 'Digitalni delavec prevzame operativno delo',
          bullets: [
            'Odziva se na poslovne dogodke, urnike in zahteve',
            'Proaktivno deluje v ozadju prek odobrenih sistemov',
            'Spremlja napredek in primer pripelje do preverjenega rezultata',
            'Izjeme preda človeku s kontekstom in jasno opredeljeno odločitvijo',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Od ene poslovne vloge do AgenticAI organizacije',
      intro:
        'Izberemo obseg, ki ustreza vašim procesom, pripravljenosti in tveganjem. Avtonomija na ravni celotne organizacije je možnost, kjer narava poslovanja to dopušča, ne pogoj za začetek.',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Digitalni delavci',
          text: 'Določena vloga, ki spremlja nove naloge, pridobiva kontekst, izvaja dovoljena dejanja in skrbi za roke. Na primer obravnava rutinskih zahtevkov ali priprava in preverjanje dokumentacije.',
        },
        {
          title: 'Agentne ekipe in oddelki',
          text: 'Specializirani digitalni delavci usklajujejo sprejem, preverjanje, izvedbo in nadaljnje aktivnosti celotnega procesa ali oddelka ter si predajajo delo s skupnim kontekstom.',
        },
        {
          title: 'AgenticAI organizacije',
          text: 'Povezane ekipe izvajajo procese med poslovnimi funkcijami in, kjer je to primerno, operativno poslovanje celotnega podjetja. Ljudje določajo cilje, nadzirajo rezultate in rešujejo zadeve, ki zahtevajo njihovo presojo.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Kako delo potuje od dogodka do rezultata',
      intro:
        'Servisni zahtevek lahko na primer sproži proces, ne da bi nekdo odprl klepet. Gre za ponazoritev poteka dela, ne za opis uvedbe pri določenem naročniku.',
      numbered: true,
      items: [
        {
          title: 'Sprejem in dodelitev',
          text: 'Zahteva, sistemski dogodek ali načrtovano preverjanje sproži delo. Rešitev prepozna primer, določi odgovorno vlogo in preveri njena pooblastila.',
        },
        {
          title: 'Pridobivanje konteksta in načrtovanje',
          text: 'Delavci pridobijo odobreno znanje in poslovne podatke, preverijo predpogoje ter uskladijo potrebne korake.',
        },
        {
          title: 'Izvedba v poslovnih sistemih',
          text: 'Agenti uporabljajo nadzorovane Business API-je in MCP orodja. Zanesljivi delovni tokovi upravljajo stanje, ponovne poskuse, časovne omejitve in zahtevane odobritve.',
        },
        {
          title: 'Preverjanje, zaključek ali predaja',
          text: 'Rešitev preveri poslovni rezultat in zabeleži zaključek. Izjeme preda človeku s kontekstom, že izvedenimi dejanji in jasno navedbo potrebne odločitve.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Avtonomija z jasnimi mejami in vsebinskim nadzorom',
      intro:
        'Sistem, ki deluje, ne opravlja nujno pravilnega dela. Tehnično spremljanje povezujemo z nadzorom poslovnih odločitev, skladnosti s procesi in kakovosti rezultatov.',
      columns: 3,
      variant: 'check',
      items: [
        {
          title: 'Določena pooblastila',
          text: 'Opredelimo, kaj sme posamezna vloga brati, spreminjati ali izvajati. Občutljiva dejanja in spremembe poslovnih pravil zahtevajo dogovorjene odobritve.',
        },
        {
          title: 'Vsebinski nadzor',
          text: 'Poleg tehničnih napak in omejitev virov zaznavamo izpuščene korake, zastarele informacije, neskladne odločitve in neobičajne rezultate.',
        },
        {
          title: 'Pregledna obravnava izjem',
          text: 'Ljudje dobijo povzetek, podporne podatke in jasno opredeljeno odločitev — ne surovih dnevnikov ali opozorila ob vsaki manjši negotovosti.',
        },
        {
          title: 'Sledljiva izvedba',
          text: 'Dejanja agentov, klice orodij, procesne prehode in odobritve povežemo v revizijsko sled za preiskovanje dogodkov in ugotavljanje odgovornosti.',
        },
        {
          title: 'Zanesljivo nadaljevanje dela',
          text: 'Omejimo zanke in porabo virov, obvladamo nedosegljivost storitev ter omogočimo varno ustavljanje ali nadaljevanje od potrjenega stanja procesa.',
        },
        {
          title: 'Nadzorovane izboljšave',
          text: 'Predlagane spremembe pred uvedbo preverimo na preteklih primerih. Izboljšave uveljavljamo znotraj dovoljenih meja; spremembe pooblastil ali pomembnih pravil odobrijo ljudje.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Merimo opravljeno delo, ne le odgovorov modelov',
      intro:
        'Dogovorimo se o izhodiščnem stanju in vrednotimo celoten proces. Povečanje učinkovitosti je merljiv cilj, ne obljuba vnaprej določenih prihrankov.',
      columns: 3,
      variant: 'accent',
      items: [
        {
          title: 'Samostojno zaključeni primeri',
          text: 'Delež primerov, zaključenih od začetka do konca brez človeškega posredovanja, skupaj s pogostostjo in razlogi za predajo človeku.',
        },
        {
          title: 'Čas in strošek na primer',
          text: 'Čas izvedbe, zastoji pri predajah in celoten operativni strošek na zaključen primer, ne le poraba žetonov.',
        },
        {
          title: 'Kakovost in ponovna obdelava',
          text: 'Pravilnost rezultatov, skladnost s poslovnimi pravili in pogostost popravljanja ali ponavljanja dela.',
        },
      ],
      body: [
        'Podatki o izvajanju in človeški popravki razkrivajo ozka grla, ponavljajoče se izjeme ter možnosti za boljše sodelovanje agentov in zasnovo procesov. Pred širjenjem avtonomije izboljšave preverimo glede na dogovorjene poslovne kazalnike.',
      ],
    },
    {
      type: 'steps',
      title: 'Praktična pot od enega procesa do povezanega poslovanja',
      numbered: true,
      items: [
        {
          title: 'Izbor procesa in izhodiščnih kazalnikov',
          text: 'Opredelimo poslovno vrednost, odgovorne osebe, razpoložljivost podatkov, potrebne integracije in tveganja. Dogovorimo merila uspeha in obvezno vključevanje ljudi.',
        },
        {
          title: 'Zasnova vlog in meja avtonomije',
          text: 'Določimo digitalne delavce, orodja, pooblastila, predaje dela, obravnavo izjem in vsebinski nadzor.',
        },
        {
          title: 'Razvoj in vrednotenje osredotočenega pilota',
          text: 'Povežemo potrebne sisteme ter pred produkcijsko uvedbo preverimo reprezentativne primere, scenarije napak in človeške odobritve.',
        },
        {
          title: 'Obratovanje, izboljševanje in širitev',
          text: 'Spremljamo rezultate, preverjamo izboljšave in dodajamo vloge ali procese, ko širitev upravičujejo kakovost, zanesljivost in poslovni učinki.',
        },
      ],
    },
    {
      type: 'kumuluz',
      title: 'Razvija Sunesis. Poganja KumuluzAI.',
      body: [
        'Sunesis je vaš razvojni in izvedbeni partner. KumuluzAI zagotavlja ponovno uporabno platformno osnovo za orkestracijo agentov, dostop do znanja, orodja, upravljanje in evalvacije.',
        'Digitalne delavce prek nadzorovanih vmesnikov povežemo z obstoječimi poslovnimi sistemi ter ločimo AI sklepanje od determinističnega izvajanja. Cloud-native razvoj, mikrostoritve, API integracije in DevOps omogočajo zanesljivost takšnega operativnega modela — hkrati pa ostajajo samostojne storitve Sunesisa.',
      ],
      items: [
        {
          title: 'KumuluzAI',
          text: 'Nadzorovana osnova za agente, usmerjanje modelov, znanje, evalvacije in spremljanje delovanja.',
        },
        {
          title: 'Business API-ji in MCP',
          text: 'Nadzorovan dostop do poslovnih zmožnosti z identiteto, avtorizacijo in sledljivimi dejanji.',
        },
        {
          title: 'Cloud-native obratovanje',
          text: 'Orkestracija delovnih tokov, opazljivost in zanesljiva uvedba v oblačna ali lokalna okolja.',
        },
      ],
      cta: 'Raziščite KumuluzAI',
      ctaHref: 'https://kumuluz.com/sl/products/kumuluz-ai/',
    },
    {
      type: 'cards',
      title: 'Iz razvojne prakse, ne le koncepta',
      columns: 2,
      variant: 'feature',
      items: [
        {
          label: 'Projekt v izvajanju',
          title: 'Vzpostavitev avtonomne AgenticAI organizacije',
          text: 'Sunesis sodeluje pri projektu vzpostavitve organizacije, v kateri agentne ekipe proaktivno izvajajo vsakodnevno poslovanje. Naročnika in panoge zaradi NDA ne razkrivamo. Gre za projekt v izvajanju, ne za zaključeno produkcijsko referenco.',
        },
        {
          label: 'Javno objavljen strokovni pogled',
          title: 'Kaj se spremeni, ko agenti delujejo v ozadju',
          text: 'V članku pojasnjujemo vsebinski nadzor, obravnavo izjem, meje pooblastil, zanesljivo izvajanje in izboljševanje procesov. Razlikujemo tudi med projekti z različnimi stopnjami avtonomije.',
        },
      ],
      cta: 'Preberite članek o avtonomni AgenticAI organizaciji',
      ctaHref: 'insights/avtonomna-agenticai-organizacija/',
    },
    {
      type: 'cards',
      title: 'Potrebujete AI rešitev, ne novega operativnega modela?',
      intro:
        'Ponudba AgenticAI rešitev zajema asistente, AI agente, RAG, večagentne aplikacije in integracijo s poslovnimi platformami.',
      columns: 2,
      variant: 'compact',
      items: [
        {
          title: 'AgenticAI rešitve',
          text: 'Razvoj določene AI aplikacije ali platforme, povezane z vašim znanjem, orodji in poslovnimi sistemi.',
        },
        {
          title: 'AgenticAI organizacije',
          text: 'Zasnova in uvedba digitalnih vlog, ki prevzamejo tekoče operativno delo med procesi in poslovnimi funkcijami.',
        },
      ],
      cta: 'Raziščite AgenticAI rešitve',
      ctaHref: 'expertise/agentic-ai/',
    },
    {
      type: 'finalCta',
      title: 'Kateri proces bi lahko prevzel vaš prvi digitalni delavec?',
      body: [
        'Skupaj opredelimo primeren proces, meje avtonomije in merljivo prvo uvedbo — z možnostjo razvoja v povezane ekipe in operativno delovanje celotne organizacije.',
      ],
      primaryCta: 'Pogovorimo se o avtomatizaciji vaših procesov',
    },
  ],
}

export const agenticOrganizationsPage: Record<
  LanguageCode,
  ExpertisePageContent
> = {
  en,
  sl,
}
