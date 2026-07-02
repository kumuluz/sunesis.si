import type { LanguageCode } from '../../lib/router'
import type { CompanyPageContent } from '../../views/company/types'

const en: CompanyPageContent = {
  seo: {
    title: 'Awards and Recognitions | Sunesis',
    description:
      'Sunesis and Kumuluz have received international and national recognition, including the Java Duke’s Choice Award, EuroCloud Award and Slovenian Start:up of the Year finalist recognition.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Awards and recognitions',
    title: 'Recognized innovation in cloud-native and enterprise technologies',
    body: [
      'Sunesis and the Kumuluz product family have been recognized for innovation in cloud-native technologies, Java microservices, cloud services and enterprise digital platforms.',
      'Our awards, certifications and ecosystem contributions reflect our commitment to engineering excellence, innovation and enterprise technology delivery.',
    ],
    primaryCta: 'Talk to our experts',
    secondaryCta: 'Explore Kumuluz',
  },
  sections: [
    {
      type: 'capabilities',
      title: 'Award-winning innovation',
      items: [
        {
          title: 'Java Duke’s Choice Award',
          text: 'KumuluzEE, the open-source microservice framework developed by Sunesis, received the prestigious Java Duke’s Choice Award. The award recognizes innovation based on Java technology and was announced by Oracle at the JavaOne conference in San Francisco.',
          bulletsTitle: 'Why it matters',
          bullets: [
            'KumuluzEE was recognized as an innovative framework for building microservice and cloud-native applications with Java technologies.',
            'It represents the early Kumuluz heritage: helping organizations move from monolithic systems toward modular, cloud-native architectures.',
          ],
        },
        {
          title: 'EuroCloud Award',
          text: 'Sunesis received the EuroCloud Award for the most innovative cloud service for the Kumuluz product family. The expert jury recognized the innovation and competitive advantages of the Kumuluz integration platform.',
          bulletsTitle: 'Why it matters',
          bullets: [
            'The award highlights the cloud innovation behind Kumuluz and its role in accelerating enterprise digital transformation.',
          ],
        },
        {
          title: 'Slovenian Start:up of the Year Finalist',
          text: 'Sunesis was selected as one of the finalists of the Slovenian Start:up of the Year competition.',
          bulletsTitle: 'Why it matters',
          bullets: [
            'This recognition reflects the early innovation potential, market relevance and technology ambition of Sunesis and its products.',
          ],
        },
      ],
    },
    {
      type: 'list',
      title: 'Certified expertise across enterprise technologies',
      intro:
        'Our team brings together recognized experts and certified professionals across Java, cloud computing, enterprise architecture, SOA, project management and innovation management.',
      variant: 'pills',
      items: [
        'Java Champion',
        'IBM Champion',
        'Oracle ACE Director',
        'Oracle Certified Professional: Java SE Developer',
        'Certified Solution Advisor for Cloud Computing',
        'Certified Associate, Java Programmer',
        'Certified SOA Solution Designer',
        'Certified European Project Manager',
        'Certified European Innovation Manager',
      ],
    },
    {
      type: 'cards',
      title: 'Open-source and ecosystem contribution',
      body: [
        'Beyond formal awards, Sunesis demonstrates innovation through open-source engineering and ecosystem contribution.',
        'Projects such as INATrace and CUPID show our ability to build complete open-source solutions that become part of broader international technology ecosystems. INATrace joined the Linux Foundation AgStack community, while CUPID is hosted in the LF Energy ecosystem. These projects reflect our commitment to open standards, interoperability, community-oriented engineering and reusable digital infrastructure.',
      ],
      variant: 'feature',
      columns: 3,
      items: [
        {
          title: 'INATrace',
          text: 'Open-source agricultural supply-chain traceability solution connected with the Linux Foundation AgStack ecosystem.',
        },
        {
          title: 'CUPID',
          text: 'Open-source energy interoperability toolkit hosted in the LF Energy ecosystem.',
        },
        {
          title: 'KumuluzEE',
          text: 'Award-winning open-source Java microservice framework and part of the Kumuluz cloud-native heritage.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'The Kumuluz heritage',
      body: [
        'The Kumuluz story started with cloud-native and microservice innovation.',
        'KumuluzEE became one of the early frameworks focused on simplifying Java microservice development and cloud-native application architectures.',
        'Today, the Kumuluz product family continues this direction with platforms and accelerators for AgenticAI, digital platforms, APIs, Business APIs and crowdsensing. The focus has evolved from cloud-native microservices toward reusable enterprise platform foundations for AI agents, API ecosystems, workflows, digital services and AI-enhanced data.',
      ],
      quote:
        'KumuluzEE was a foundation for the move from monoliths to microservices. KumuluzAI is a foundation for the move from isolated AI experiments to governed AgenticAI.',
    },
    {
      type: 'list',
      title: 'Why recognition matters',
      variant: 'columns',
      body: [
        'Awards and recognitions are not the goal. They are evidence of a consistent approach: building technology that is innovative, practical and useful in real enterprise environments.',
        'For Sunesis, recognition matters because it confirms the value of combining engineering depth, enterprise delivery, open-source contribution, platform thinking and research-driven innovation. This same approach guides how we work with clients today — from AgenticAI and API ecosystems to cloud-native architectures, DevOps foundations and digital platforms.',
      ],
      items: [
        'Engineering depth',
        'Enterprise delivery',
        'Open-source contribution',
        'Platform thinking',
        'Research-driven innovation',
      ],
    },
    {
      type: 'finalCta',
      title: 'Looking for an award-winning technology partner?',
      body: [
        'Sunesis combines recognized innovation, certified expertise, open-source contribution and practical enterprise delivery experience across AgenticAI, digital solutions, API ecosystems, cloud-native architectures and DevOps.',
      ],
      primaryCta: 'Talk to our experts',
      secondaryCta: 'Explore our expertise',
    },
  ],
}

const sl: CompanyPageContent = {
  seo: {
    title: 'Nagrade in priznanja | Sunesis',
    description:
      'Sunesis in Kumuluz sta prejela mednarodna in nacionalna priznanja, vključno z nagradama Java Duke’s Choice Award in EuroCloud Award ter uvrstitvijo med finaliste izbora Slovenski start:up leta.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'Nagrade in priznanja',
    title:
      'Prepoznana inovativnost na področju cloud-native in poslovnih tehnologij',
    body: [
      'Sunesis in družina izdelkov Kumuluz sta prejela priznanja za inovativnost na področju cloud-native tehnologij, mikrostoritev v Javi, storitev v oblaku in poslovnih digitalnih platform.',
      'Naše nagrade, certifikati in prispevki k ekosistemom odražajo predanost inženirski odličnosti, inovativnosti in uvajanju poslovnih tehnologij.',
    ],
    primaryCta: 'Pogovorite se z našimi strokovnjaki',
    secondaryCta: 'Raziščite Kumuluz',
  },
  sections: [
    {
      type: 'capabilities',
      title: 'Nagrajena inovativnost',
      items: [
        {
          title: 'Java Duke’s Choice Award',
          text: 'KumuluzEE, odprtokodno ogrodje za mikrostoritve, ki ga je razvil Sunesis, je prejelo prestižno nagrado Java Duke’s Choice Award. Nagrada priznava inovativnost, ki temelji na tehnologiji Java, in jo je podjetje Oracle razglasilo na konferenci JavaOne v San Franciscu.',
          bulletsTitle: 'Zakaj je to pomembno',
          bullets: [
            'KumuluzEE je bil prepoznan kot inovativno ogrodje za gradnjo mikrostoritvenih in cloud-native aplikacij v tehnologiji Java.',
            'Uteleša zgodnjo dediščino Kumuluza: organizacijam pomaga pri prehodu z monolitnih sistemov na modularne, cloud-native arhitekture.',
          ],
        },
        {
          title: 'EuroCloud Award',
          text: 'Sunesis je za družino izdelkov Kumuluz prejel nagrado EuroCloud Award za najbolj inovativno storitev v oblaku. Strokovna žirija je prepoznala inovativnost in konkurenčne prednosti integracijske platforme Kumuluz.',
          bulletsTitle: 'Zakaj je to pomembno',
          bullets: [
            'Nagrada izpostavlja inovativnost v oblaku, na kateri temelji Kumuluz, in njegovo vlogo pri pospeševanju digitalne preobrazbe podjetij.',
          ],
        },
        {
          title: 'Finalist izbora Slovenski start:up leta',
          text: 'Sunesis se je uvrstil med finaliste izbora Slovenski start:up leta.',
          bulletsTitle: 'Zakaj je to pomembno',
          bullets: [
            'Priznanje odraža zgodnji inovacijski potencial, tržno relevantnost in tehnološke ambicije Sunesisa in njegovih izdelkov.',
          ],
        },
      ],
    },
    {
      type: 'list',
      title: 'Certificirano znanje na področju poslovnih tehnologij',
      intro:
        'Naša ekipa združuje priznane strokovnjake in certificirane profesionalce na področjih Jave, računalništva v oblaku, poslovne arhitekture, SOA, vodenja projektov in upravljanja inovacij.',
      variant: 'pills',
      items: [
        'Java Champion',
        'IBM Champion',
        'Oracle ACE Director',
        'Oracle Certified Professional: Java SE Developer',
        'Certified Solution Advisor for Cloud Computing',
        'Certified Associate, Java Programmer',
        'Certified SOA Solution Designer',
        'Certified European Project Manager',
        'Certified European Innovation Manager',
      ],
    },
    {
      type: 'cards',
      title: 'Prispevek k odprti kodi in ekosistemom',
      body: [
        'Sunesis inovativnost dokazuje tudi onkraj formalnih nagrad — z odprtokodnim razvojem in prispevki k ekosistemom.',
        'Projekta INATrace in CUPID izkazujeta našo sposobnost gradnje celovitih odprtokodnih rešitev, ki postanejo del širših mednarodnih tehnoloških ekosistemov. INATrace se je pridružil skupnosti Linux Foundation AgStack, CUPID pa gostuje v ekosistemu LF Energy. Projekta odražata našo zavezanost odprtim standardom, interoperabilnosti, skupnostno usmerjenemu razvoju in ponovno uporabljivi digitalni infrastrukturi.',
      ],
      variant: 'feature',
      columns: 3,
      items: [
        {
          title: 'INATrace',
          text: 'Odprtokodna rešitev za sledljivost v kmetijskih dobavnih verigah, povezana z ekosistemom Linux Foundation AgStack.',
        },
        {
          title: 'CUPID',
          text: 'Odprtokodni nabor orodij za energetsko interoperabilnost, ki gostuje v ekosistemu LF Energy.',
        },
        {
          title: 'KumuluzEE',
          text: 'Nagrajeno odprtokodno ogrodje za mikrostoritve v Javi in del cloud-native dediščine Kumuluza.',
        },
      ],
    },
    {
      type: 'prose',
      title: 'Dediščina Kumuluza',
      body: [
        'Zgodba Kumuluza se je začela z inovacijami na področju cloud-native in mikrostoritev.',
        'KumuluzEE je postal eno prvih ogrodij, osredotočenih na poenostavitev razvoja mikrostoritev v Javi in cloud-native arhitektur aplikacij.',
        'Danes družina izdelkov Kumuluz to smer nadaljuje s platformami in pospeševalniki za AgenticAI, digitalne platforme, API-je, Business API-je in crowdsensing. Težišče se je premaknilo od cloud-native mikrostoritev k ponovno uporabljivim temeljem poslovnih platform za AI agente, API ekosisteme, delovne tokove, digitalne storitve in z AI obogatene podatke.',
      ],
      quote:
        'KumuluzEE je bil temelj za prehod od monolitov k mikrostoritvam. KumuluzAI je temelj za prehod od izoliranih AI eksperimentov k upravljanemu AgenticAI.',
    },
    {
      type: 'list',
      title: 'Zakaj so priznanja pomembna',
      variant: 'columns',
      body: [
        'Nagrade in priznanja niso cilj. So dokaz doslednega pristopa: razvoja tehnologije, ki je inovativna, praktična in uporabna v realnih poslovnih okoljih.',
        'Za Sunesis so priznanja pomembna, ker potrjujejo vrednost povezovanja inženirske poglobljenosti, uvajanja v podjetjih, prispevkov k odprti kodi, platformnega razmišljanja in raziskovalno usmerjenih inovacij. Ta pristop danes usmerja tudi naše sodelovanje s strankami — od AgenticAI in API ekosistemov do cloud-native arhitektur, temeljev DevOps in digitalnih platform.',
      ],
      items: [
        'Inženirska poglobljenost',
        'Uvajanje v podjetjih',
        'Prispevek k odprti kodi',
        'Platformno razmišljanje',
        'Raziskovalno usmerjene inovacije',
      ],
    },
    {
      type: 'finalCta',
      title: 'Iščete nagrajenega tehnološkega partnerja?',
      body: [
        'Sunesis združuje prepoznano inovativnost, certificirano znanje, prispevke k odprti kodi in praktične izkušnje z uvajanjem v podjetjih na področjih AgenticAI, digitalnih rešitev, API ekosistemov, cloud-native arhitektur in DevOps.',
      ],
      primaryCta: 'Pogovorite se z našimi strokovnjaki',
      secondaryCta: 'Raziščite naše ekspertize',
    },
  ],
}

export const awardsPage: Record<LanguageCode, CompanyPageContent> = { en, sl }
