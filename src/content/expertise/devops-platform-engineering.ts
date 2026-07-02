import type { LanguageCode } from '../../lib/router'
import type { ExpertisePageContent } from '../../views/expertise/types'

const en: ExpertisePageContent = {
  seo: {
    title:
      'DevOps & Platform Engineering | Kubernetes, OpenShift, CI/CD, GitOps and Cloud Operations | Sunesis',
    description:
      'Sunesis builds enterprise DevOps and platform engineering foundations with Kubernetes, OpenShift, CI/CD, GitOps, Terraform, Ansible, Azure, Google Cloud, security, observability and production operations.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'DevOps & Platform Engineering',
    title: 'Build secure, automated and production-ready delivery platforms',
    body: [
      'Sunesis helps organizations build reliable DevOps and platform engineering foundations for secure, automated and production-grade software delivery — designing and improving CI/CD pipelines, GitOps workflows, infrastructure as code, Kubernetes and OpenShift platforms, cloud environments, security controls and observability.',
      'Our work supports enterprise digital platforms, API ecosystems, cloud-native applications, workflow automation platforms and AgenticAI solutions that must operate reliably in real production environments.',
    ],
    primaryCta: 'Talk to our DevOps experts',
    secondaryCta: 'Explore our expertise',
    trustLine:
      'Built for organizations that need reliable software delivery, secure platforms and production-grade operations.',
  },
  sections: [
    {
      type: 'split',
      title: 'From delivery automation to enterprise platform engineering',
      body: [
        'Modern software delivery needs much more than a build pipeline. It needs reliable environments, automated delivery, secure infrastructure, secrets management, policy enforcement, observability and auditability — working together as a coherent platform.',
        'Sunesis establishes these foundations across cloud, hybrid, on-premise and multi-cluster Kubernetes environments, so delivery is consistent and controlled wherever workloads run.',
        'We build platforms that development teams can use with confidence and operations teams can trust in production — combining automation, security and governance into a single delivery foundation.',
      ],
      quote:
        'Sunesis builds enterprise DevOps and platform engineering foundations that help teams deliver software faster, safer and with stronger production control.',
    },
    {
      type: 'capabilities',
      title: 'What we build and operate',
      intro:
        'We provide the technical foundations development teams need to deliver software quickly and reliably — without bypassing security, governance or operational control.',
      items: [
        {
          title: 'CI/CD pipeline engineering',
          text: 'Design and improvement of continuous integration and delivery pipelines that automate build, test and release while enforcing quality and security gates.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'GitLab CI/CD',
            'Azure DevOps pipelines',
            'GitHub Actions',
            'Build and test automation',
            'Security and quality gates',
          ],
        },
        {
          title: 'Infrastructure as Code',
          wide: true,
          text: 'Version-controlled, repeatable infrastructure provisioning and configuration that reduces drift and manual operations.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Terraform provisioning',
            'Ansible configuration automation',
            'Reusable modules',
            'Version-controlled changes',
            'Drift reduction',
          ],
        },
        {
          title: 'GitOps and continuous delivery',
          wide: true,
          text: 'Declarative, Git-driven deployment workflows that make releases consistent, reviewable and easy to roll back.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Argo CD',
            'Declarative deployment',
            'Helm and Kustomize',
            'Multi-cluster GitOps',
            'Rollback and drift detection',
          ],
        },
        {
          title: 'Kubernetes and OpenShift platforms',
          text: 'Architecture and operation of container platforms across data centers and clusters, with secure multi-tenant models.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Kubernetes and OpenShift platform architecture',
            'On-premise and multi-cluster',
            'Namespace and tenant models',
            'Networking and ingress',
            'Kubernetes security',
          ],
        },
        {
          title: 'Cloud platform engineering',
          text: 'Cloud-native platform foundations on major providers, with automated infrastructure and integrated cloud identity.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Microsoft Azure',
            'Google Cloud',
            'AKS',
            'GKE',
            'Cloud identity integration and infrastructure automation with Terraform',
          ],
        },
        {
          title: 'Security, identity and policy-as-code',
          wide: true,
          text: 'Security, identity and policy controls embedded directly into the delivery platform rather than added afterward.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Keycloak and Microsoft Entra ID',
            'HashiCorp Vault secrets management',
            'Open Policy Agent',
            'Kyverno admission control',
            'Cerbos authorization and Wultra where relevant',
          ],
        },
        {
          title: 'Observability and production operations',
          wide: true,
          text: 'End-to-end visibility into platforms and applications, with the operational practices needed to run them reliably.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'OpenTelemetry',
            'Instana APM',
            'Centralized logging',
            'Distributed tracing',
            'Alerting, SLO and production readiness',
          ],
        },
        {
          title: 'Platform engineering for development teams',
          text: 'Internal developer platforms that make the secure and supported delivery path the easiest one for teams to follow.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Developer platform design',
            'Golden paths',
            'Reusable CI/CD templates',
            'Self-service environments',
            'Guardrails instead of bottlenecks',
          ],
        },
        {
          title: 'DevOps for AgenticAI and AI platforms',
          text: 'Platform engineering and operations for AI services and AgenticAI deployments, with the security and visibility these workloads require.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Platform engineering for KumuluzAI deployments',
            'Secure deployment of AI assistants and agents',
            'Secrets for model providers',
            'Observability for AI services',
            'Cost and usage visibility',
          ],
        },
        {
          title: 'DevOps for API and workflow platforms',
          wide: true,
          text: 'Delivery foundations for API ecosystems and workflow automation, with automated configuration and controlled releases.',
          bulletsTitle: 'Key capabilities',
          bullets: [
            'Deployment foundations for API platforms',
            'CI/CD for APIs and integration services',
            'Gateway configuration automation',
            'Temporal and Camunda platform integration',
            'Release governance',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Platform scenarios we support',
      intro:
        'We help organizations build and operate the delivery platforms behind a wide range of cloud, on-premise and hybrid environments.',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Cloud-native delivery platforms',
          text: 'End-to-end delivery platforms for cloud-native applications, from pipelines to GitOps-driven Kubernetes operations.',
          meta: 'Relevant capabilities: CI/CD, GitOps, Kubernetes, OpenShift, Terraform, Ansible, observability, security',
        },
        {
          title: 'On-premise Kubernetes platforms',
          text: 'Container platforms in the data center, with the networking, storage and security needed for production workloads.',
          meta: 'Relevant capabilities: Kubernetes, OpenShift, networking, storage, platform security, GitOps, monitoring',
        },
        {
          title: 'Multi-cluster Kubernetes environments',
          text: 'Consistent governance and operations across many clusters and environments through multi-cluster GitOps.',
          meta: 'Relevant capabilities: Multi-cluster GitOps, environment governance, cluster lifecycle, observability, policy enforcement',
        },
        {
          title: 'Enterprise CI/CD modernization',
          text: 'Modernized pipelines that standardize build, test and release across teams with strong quality and security checks.',
          meta: 'Relevant capabilities: GitLab CI/CD, Azure DevOps, GitHub Actions, pipeline templates, quality gates, security checks',
        },
        {
          title: 'Secure platform foundations',
          text: 'Identity, secrets, policy and authorization controls built into the platform so security is consistent by default.',
          meta: 'Relevant capabilities: Keycloak, Microsoft Entra ID, HashiCorp Vault, Cerbos, Kyverno, Open Policy Agent, Wultra, RBAC',
        },
        {
          title: 'Observability and operations enablement',
          text: 'Metrics, logs, traces and dashboards that give teams the visibility needed to operate platforms with confidence.',
          meta: 'Relevant capabilities: OpenTelemetry, Instana, metrics, logs, tracing, dashboards, alerting, SLOs',
        },
        {
          title: 'AgenticAI platform operations',
          text: 'Secure, observable delivery and operations for AgenticAI workloads running on Kubernetes.',
          meta: 'Relevant capabilities: KumuluzAI, Kubernetes, secrets management, model provider configuration, audit logging, usage visibility',
        },
        {
          title: 'API and workflow platform delivery',
          text: 'Delivery foundations for API gateways and workflow engines, with GitOps-driven operations and observability.',
          meta: 'Relevant capabilities: Kumuluz API, API gateways, Temporal, Camunda, CI/CD, GitOps, observability',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Deep expertise in Microsoft Azure and Google Cloud',
      body: [
        'We design and operate cloud platforms on both major providers, and help organizations stay portable across clouds and on-premise environments.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Microsoft Azure',
          text: 'Azure platform architecture, AKS, Azure DevOps, Microsoft Entra ID, Terraform, CI/CD, cloud security and hybrid integration.',
        },
        {
          title: 'Google Cloud',
          text: 'GCP platform architecture, GKE, Terraform, CI/CD and GitOps, cloud networking and monitoring.',
        },
        {
          title: 'Hybrid and provider-neutral delivery',
          text: 'Workload portability, multi-cloud deployment, Kubernetes and OpenShift across environments, exit-strategy awareness and consistent identity, security and observability.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Security and governance built into delivery',
      body: [
        'Security and governance are part of the platform from the start, not controls added after delivery is already in place.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Identity and access management',
          text: 'Keycloak, Microsoft Entra ID and RBAC for consistent, role-based access across the platform.',
        },
        {
          title: 'Secrets management',
          text: 'HashiCorp Vault for centralized handling of credentials and API keys.',
        },
        {
          title: 'Policy-as-code',
          text: 'Open Policy Agent and Kyverno to enforce policies automatically across the platform.',
        },
        {
          title: 'Application authorization',
          text: 'Cerbos for fine-grained, policy-based application authorization.',
        },
        {
          title: 'Security integration',
          text: 'Wultra where relevant for stronger authentication and security requirements.',
        },
        {
          title: 'Pipeline security',
          text: 'Security checks, approvals, artifact controls and policy gates built into delivery pipelines.',
        },
        {
          title: 'Container and workload security',
          text: 'Image handling, workload isolation and namespace policies for secure container operations.',
        },
        {
          title: 'Auditability',
          text: 'Traceable records of infrastructure changes, deployments, approvals and access.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Production visibility and operational excellence',
      body: [
        'We give teams the visibility they need to operate platforms and applications reliably, from instrumentation through to incident support.',
        'Observability is built into the platform across infrastructure, applications, APIs, workflows and AgenticAI services.',
      ],
      items: [
        'OpenTelemetry instrumentation',
        'Instana APM and observability',
        'Metrics and monitoring',
        'Centralized system logging',
        'Enterprise audit logging',
        'Distributed tracing',
        'Correlation IDs',
        'Platform dashboards',
        'Deployment and release visibility',
        'Alerting and incident support',
        'Kubernetes and OpenShift observability',
        'API and workflow observability',
        'AgenticAI platform observability',
        'SLO and production readiness',
      ],
    },
    {
      type: 'cards',
      title: 'Make the right delivery path the easiest path',
      body: [
        'Platform engineering helps teams move fast within safe boundaries by making the secure, supported path the default choice.',
      ],
      columns: 3,
      items: [
        {
          title: 'Golden paths',
          text: 'Proven, supported delivery paths that teams can follow without reinventing infrastructure each time.',
        },
        {
          title: 'Reusable templates',
          text: 'Reusable CI/CD and infrastructure templates that standardize delivery across teams.',
        },
        {
          title: 'Self-service environments',
          text: 'On-demand environments that let teams provision what they need without manual handoffs.',
        },
        {
          title: 'Secure defaults',
          text: 'Secure-by-default configurations so the right choices require no extra effort.',
        },
        {
          title: 'Developer onboarding',
          text: 'Smooth onboarding so teams become productive on the platform quickly.',
        },
        {
          title: 'Governance guardrails',
          text: 'Guardrails that keep teams within policy and security boundaries without slowing them down.',
        },
      ],
    },
    {
      type: 'list',
      title: 'DevOps for complex and critical environments',
      body: [
        'We work where reliability, security and traceability matter — across regulated industries and demanding enterprise platforms.',
      ],
      items: [
        'Enterprise digital platforms',
        'Financial services and insurance environments',
        'Energy and utilities systems',
        'Public sector platforms',
        'Cloud-native business applications',
        'Blockchain and Web3 infrastructure',
        'API management and integration platforms',
        'Workflow automation platforms',
        'AI and AgenticAI platforms',
        'Multi-team software delivery organizations',
      ],
    },
    {
      type: 'kumuluz',
      title: 'Accelerated by Kumuluz and proven platform patterns',
      body: [
        'Sunesis has a long history of building cloud-native, microservice, API-based and AI-enabled platforms through the Kumuluz product family. This experience shapes our DevOps approach with reusable building blocks, automated deployment, cloud-native foundations and platform governance.',
        'It strengthens our ability to build and operate platforms for digital solutions, APIs, Business APIs, workflow automation and AgenticAI — on a foundation that is already proven in production.',
      ],
      items: [
        {
          title: 'KumuluzAI Platform',
          text: 'Platform foundation for deploying and operating agents, assistants and AI services securely and observably.',
        },
        {
          title: 'Kumuluz API',
          text: 'API management and gateway platform with delivery, configuration and operations patterns for API ecosystems.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Engineering foundation for building and delivering services, APIs and cloud-native integrations.',
        },
        {
          title: 'Kumuluz Business APIs',
          text: 'Reusable business capabilities delivered and operated as governed, production-ready services.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          text: 'Platform for distributed sensing and data collection, operated on cloud-native foundations.',
        },
      ],
      cta: 'Explore Kumuluz platforms',
      ctaHref: 'kumuluz/',
    },
    {
      type: 'steps',
      title: 'How we deliver DevOps and platform engineering',
      intro:
        'We help organizations move from their current delivery setup to a reliable, automated and secure platform through a structured, engineering-driven approach.',
      items: [
        {
          title: 'Assess current delivery and platform maturity',
          text: 'We review existing pipelines, infrastructure, environments, security and operations to understand the starting point.',
        },
        {
          title: 'Define the target platform model',
          text: 'We define the target architecture, delivery model and governance approach for the platform.',
        },
        {
          title: 'Automate infrastructure and environments',
          text: 'We automate provisioning and configuration with infrastructure as code for repeatable, version-controlled environments.',
        },
        {
          title: 'Implement CI/CD and GitOps workflows',
          text: 'We build pipelines and GitOps workflows that make delivery consistent, reviewable and easy to roll back.',
        },
        {
          title: 'Integrate security and policy controls',
          text: 'We embed identity, secrets, policy-as-code and authorization controls directly into the delivery platform.',
        },
        {
          title: 'Enable observability and operations',
          text: 'We implement metrics, logging, tracing, alerting and SLOs to operate the platform reliably.',
        },
        {
          title: 'Create developer platform patterns',
          text: 'We design golden paths, reusable templates and self-service environments so teams can deliver within safe boundaries.',
        },
        {
          title: 'Support teams and evolve the platform',
          text: 'We support teams in adopting the platform and continuously evolve it as needs grow.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Technology expertise',
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'CI/CD',
          text: 'GitLab CI/CD, Azure DevOps, GitHub Actions and pipeline templates.',
        },
        {
          title: 'Infrastructure as Code and automation',
          text: 'Terraform, Ansible and reusable modules.',
        },
        {
          title: 'GitOps and delivery',
          text: 'Argo CD, Helm, Kustomize and multi-cluster GitOps.',
        },
        {
          title: 'Container platforms',
          text: 'Kubernetes and OpenShift, on-premise and multi-cluster.',
        },
        {
          title: 'Cloud platforms',
          text: 'Microsoft Azure, Google Cloud, AKS, GKE and hybrid environments.',
        },
        {
          title: 'Security and identity',
          text: 'Keycloak, Microsoft Entra ID, HashiCorp Vault, Cerbos, Kyverno, Open Policy Agent and Wultra.',
        },
        {
          title: 'Observability',
          text: 'OpenTelemetry, Instana, metrics, logging, tracing and SLOs.',
        },
        {
          title: 'Platform engineering',
          text: 'Developer platforms, golden paths, reusable templates and self-service.',
        },
        {
          title: 'AI and API platform operations',
          text: 'KumuluzAI, Kumuluz API, API gateway operations and workflow platform operations.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'DevOps and platform engineering in practice',
      intro:
        'We already apply DevOps and platform engineering across demanding enterprise and innovation environments.',
      columns: 3,
      cta: 'Explore our references',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Reference',
          title: 'Flare',
          text: 'DevOps and platform engineering for a large blockchain infrastructure project.',
        },
        {
          label: 'Reference',
          title: 'Kumuluz platforms',
          text: 'Cloud-native platform experience through the Kumuluz product family.',
        },
        {
          label: 'Reference',
          title: 'AgenticAI Platform — Zavarovalniška skupina Sava',
          text: 'Platform engineering, Kubernetes-based delivery, security and governance for an enterprise AgenticAI platform.',
        },
        {
          label: 'Reference',
          title: 'Enterprise digital platforms',
          text: 'DevOps across banking, insurance, energy and enterprise environments.',
        },
        {
          label: 'Reference',
          title: 'Research and innovation platforms',
          text: 'Platform engineering from international research and innovation projects.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Why Sunesis for DevOps and platform engineering',
      items: [
        {
          title: 'We build production platforms, not only pipelines',
          text: 'We deliver complete platforms that run reliably in production, not just isolated automation.',
        },
        {
          title: 'Strong Kubernetes and OpenShift expertise',
          text: 'Deep experience architecting and operating container platforms across environments.',
        },
        {
          title: 'Deep Azure and Google Cloud knowledge',
          text: 'Hands-on expertise across both major cloud providers and hybrid deployments.',
        },
        {
          title: 'Security and governance awareness',
          text: 'Identity, secrets, policy-as-code and auditability built into the delivery foundation.',
        },
        {
          title: 'Enterprise observability experience',
          text: 'End-to-end visibility with OpenTelemetry, Instana, logging, tracing and SLOs.',
        },
        {
          title: 'Developer experience and platform thinking',
          text: 'Golden paths, reusable templates and self-service that help teams deliver within safe boundaries.',
        },
        {
          title: 'AgenticAI and API platform readiness',
          text: 'Delivery and operations expertise for AgenticAI, API ecosystems and workflow platforms.',
        },
        {
          title: 'Experience in demanding environments',
          text: 'Proven in regulated and complex industries where reliability and traceability matter.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Need a stronger foundation for software delivery?',
      body: [
        'Whether you are modernizing CI/CD, building a Kubernetes or OpenShift platform, automating infrastructure, introducing GitOps, strengthening security, improving observability or preparing an enterprise platform for APIs, workflows and AgenticAI, Sunesis can help you design and implement a reliable DevOps and platform engineering foundation.',
      ],
      primaryCta: 'Talk to our DevOps experts',
      secondaryCta: 'Explore our expertise',
    },
  ],
}

const sl: ExpertisePageContent = {
  seo: {
    title:
      'DevOps in platformni inženiring | Kubernetes, OpenShift, CI/CD, GitOps in oblačne operacije | Sunesis',
    description:
      'Sunesis gradi enterprise temelje za DevOps in platformni inženiring s Kubernetes, OpenShift, CI/CD, GitOps, Terraform, Ansible, Azure, Google Cloud, varnostjo, opazljivostjo sistemov in produkcijskimi operacijami.',
  },
  hero: {
    type: 'hero',
    eyebrow: 'DevOps in platformni inženiring',
    title:
      'Gradimo varne, avtomatizirane in produkcijsko pripravljene platforme za dostavo',
    body: [
      'Sunesis organizacijam pomaga graditi zanesljive temelje za DevOps in platformni inženiring za varno, avtomatizirano in produkcijsko zrelo dostavo programske opreme — z načrtovanjem in izboljševanjem cevovodov CI/CD, GitOps workflowov, infrastrukture kot kode, platform Kubernetes in OpenShift, oblačnih okolij, varnostnih kontrol in opazljivosti sistemov.',
      'Naše delo podpira enterprise digitalne platforme, API ekosisteme, cloud-native aplikacije, platforme za avtomatizacijo workflowov in rešitve AgenticAI, ki morajo zanesljivo delovati v resničnih produkcijskih okoljih.',
    ],
    primaryCta: 'Pogovorite se z našimi DevOps strokovnjaki',
    secondaryCta: 'Raziščite naše ekspertize',
    trustLine:
      'Zgrajeno za organizacije, ki potrebujejo zanesljivo dostavo programske opreme, varne platforme in produkcijsko zrele operacije.',
  },
  sections: [
    {
      type: 'split',
      title:
        'Od avtomatizacije dostave do platformnega inženiringa na enterprise ravni',
      body: [
        'Sodobna dostava programske opreme potrebuje veliko več kot le cevovod za gradnjo. Potrebuje zanesljiva okolja, avtomatizirano dostavo, varno infrastrukturo, upravljanje skrivnosti, uveljavljanje politik, opazljivost sistemov in revizijsko sled — vse to mora delovati skupaj kot povezana platforma.',
        'Sunesis te temelje vzpostavi v oblačnih, hibridnih, on-premise in multi-cluster okoljih Kubernetes, tako da je dostava dosledna in nadzorovana, kjer koli tečejo delovne obremenitve.',
        'Gradimo platforme, ki jih razvojne ekipe lahko z zaupanjem uporabljajo, operativne ekipe pa jim lahko zaupajo v produkciji — saj avtomatizacijo, varnost in upravljanje združujemo v enoten temelj za dostavo.',
      ],
      quote:
        'Sunesis gradi enterprise temelje za DevOps in platformni inženiring, ki ekipam pomagajo dostavljati programsko opremo hitreje, varneje in z močnejšim produkcijskim nadzorom.',
    },
    {
      type: 'capabilities',
      title: 'Kaj gradimo in upravljamo',
      intro:
        'Razvojnim ekipam zagotavljamo tehnične temelje, ki jih potrebujejo za hitro in zanesljivo dostavo programske opreme — brez obhoda varnosti, upravljanja ali operativnega nadzora.',
      items: [
        {
          title: 'Inženiring cevovodov CI/CD',
          text: 'Načrtovanje in izboljševanje cevovodov za neprekinjeno integracijo in dostavo, ki avtomatizirajo gradnjo, testiranje in izdaje ter uveljavljajo varnostne in kakovostne kontrole.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'GitLab CI/CD',
            'Azure DevOps pipelines',
            'GitHub Actions',
            'Avtomatizacija gradnje in testiranja',
            'Varnostne in kakovostne kontrole',
          ],
        },
        {
          title: 'Infrastructure as Code',
          wide: true,
          text: 'Verzionirano in ponovljivo zagotavljanje ter konfiguracija infrastrukture, ki zmanjšuje drift in ročne posege.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Zagotavljanje s Terraformom',
            'Avtomatizacija konfiguracije z Ansiblom',
            'Ponovno uporabni moduli',
            'Verzionirane spremembe',
            'Zmanjšanje drifta',
          ],
        },
        {
          title: 'GitOps in neprekinjena dostava',
          wide: true,
          text: 'Deklarativni, z Gitom vodeni workflowi za namestitve, ki naredijo izdaje dosledne, pregledljive in enostavne za povrnitev.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Argo CD',
            'Deklarativna namestitev',
            'Helm in Kustomize',
            'Multi-cluster GitOps',
            'Povrnitev in zaznavanje drifta',
          ],
        },
        {
          title: 'Platforme Kubernetes in OpenShift',
          text: 'Arhitektura in delovanje kontejnerskih platform v podatkovnih centrih in clustrih, z varnimi multi-tenant modeli.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Arhitektura platform Kubernetes in OpenShift',
            'On-premise in multi-cluster',
            'Modeli namespace in tenant',
            'Omrežje in ingress',
            'Varnost Kubernetes',
          ],
        },
        {
          title: 'Platformni inženiring v oblaku',
          text: 'Cloud-native platformni temelji pri vodilnih ponudnikih, z avtomatizirano infrastrukturo in integrirano oblačno identiteto.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Microsoft Azure',
            'Google Cloud',
            'AKS',
            'GKE',
            'Integracija oblačne identitete in avtomatizacija infrastrukture s Terraformom',
          ],
        },
        {
          title: 'Varnost, identiteta in policy-as-code',
          wide: true,
          text: 'Kontrole varnosti, identitete in politik, vgrajene neposredno v platformo za dostavo, ne dodane naknadno.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Keycloak in Microsoft Entra ID',
            'Upravljanje skrivnosti s HashiCorp Vault',
            'Open Policy Agent',
            'Nadzor sprejema s Kyverno',
            'Avtorizacija s Cerbos in Wultra, kjer je smiselno',
          ],
        },
        {
          title: 'Opazljivost sistemov in produkcijske operacije',
          wide: true,
          text: 'Celovit vpogled v platforme in aplikacije, z operativnimi praksami, potrebnimi za njihovo zanesljivo delovanje.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'OpenTelemetry',
            'Instana APM',
            'Centralizirano beleženje',
            'Distribuirano sledenje',
            'Alarmiranje, SLO in produkcijska pripravljenost',
          ],
        },
        {
          title: 'Platformni inženiring za razvojne ekipe',
          text: 'Interne razvijalske platforme, na katerih je varna in podprta pot do dostave za ekipe najlažja izbira.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Načrtovanje razvijalske platforme',
            'Golden paths',
            'Ponovno uporabne predloge CI/CD',
            'Self-service okolja',
            'Varovala namesto ozkih grl',
          ],
        },
        {
          title: 'DevOps za AgenticAI in AI platforme',
          text: 'Platformni inženiring in operacije za AI storitve in namestitve AgenticAI, z varnostjo in vpogledom, ki jih te obremenitve zahtevajo.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Platformni inženiring za namestitve KumuluzAI',
            'Varna namestitev AI asistentov in agentov',
            'Skrivnosti za ponudnike modelov',
            'Opazljivost AI storitev',
            'Vpogled v stroške in porabo',
          ],
        },
        {
          title: 'DevOps za API in workflow platforme',
          wide: true,
          text: 'Temelji za dostavo za API ekosisteme in avtomatizacijo workflowov, z avtomatizirano konfiguracijo in nadzorovanimi izdajami.',
          bulletsTitle: 'Ključne zmožnosti',
          bullets: [
            'Temelji za dostavo za API platforme',
            'CI/CD za API-je in integracijske storitve',
            'Avtomatizacija konfiguracije prehodov',
            'Integracija platform Temporal in Camunda',
            'Upravljanje izdaj',
          ],
        },
      ],
    },
    {
      type: 'cards',
      title: 'Platformni scenariji, ki jih podpiramo',
      intro:
        'Organizacijam pomagamo graditi in upravljati platforme za dostavo za širok nabor oblačnih, on-premise in hibridnih okolij.',
      columns: 3,
      variant: 'tag',
      items: [
        {
          title: 'Cloud-native platforme za dostavo',
          text: 'Celovite platforme za dostavo cloud-native aplikacij, od cevovodov do z GitOps vodenih operacij Kubernetes.',
          meta: 'Relevantne zmožnosti: CI/CD, GitOps, Kubernetes, OpenShift, Terraform, Ansible, opazljivost, varnost',
        },
        {
          title: 'On-premise platforme Kubernetes',
          text: 'Kontejnerske platforme v podatkovnem centru, z omrežjem, shrambo in varnostjo, potrebnimi za produkcijske obremenitve.',
          meta: 'Relevantne zmožnosti: Kubernetes, OpenShift, omrežje, shramba, varnost platforme, GitOps, nadzor',
        },
        {
          title: 'Multi-cluster okolja Kubernetes',
          text: 'Dosledno upravljanje in operacije v številnih clustrih in okoljih prek multi-cluster GitOps.',
          meta: 'Relevantne zmožnosti: Multi-cluster GitOps, upravljanje okolij, življenjski cikel clustrov, opazljivost, uveljavljanje politik',
        },
        {
          title: 'Enterprise modernizacija CI/CD',
          text: 'Posodobljeni cevovodi, ki med ekipami standardizirajo gradnjo, testiranje in izdaje z močnimi kakovostnimi in varnostnimi pregledi.',
          meta: 'Relevantne zmožnosti: GitLab CI/CD, Azure DevOps, GitHub Actions, predloge cevovodov, kakovostne kontrole, varnostni pregledi',
        },
        {
          title: 'Varni platformni temelji',
          text: 'Kontrole identitete, skrivnosti, politik in avtorizacije, vgrajene v platformo, tako da je varnost privzeto dosledna.',
          meta: 'Relevantne zmožnosti: Keycloak, Microsoft Entra ID, HashiCorp Vault, Cerbos, Kyverno, Open Policy Agent, Wultra, RBAC',
        },
        {
          title: 'Omogočanje opazljivosti in operacij',
          text: 'Metrike, dnevniki, sledi in nadzorne plošče, ki ekipam dajejo vpogled za samozavestno upravljanje platform.',
          meta: 'Relevantne zmožnosti: OpenTelemetry, Instana, metrike, dnevniki, sledenje, nadzorne plošče, alarmiranje, SLO',
        },
        {
          title: 'Operacije platform AgenticAI',
          text: 'Varna, opazljiva dostava in operacije za obremenitve AgenticAI, ki tečejo na Kubernetes.',
          meta: 'Relevantne zmožnosti: KumuluzAI, Kubernetes, upravljanje skrivnosti, konfiguracija ponudnikov modelov, revizijsko beleženje, vpogled v porabo',
        },
        {
          title: 'Dostava API in workflow platform',
          text: 'Temelji za dostavo za API prehode in workflow pogone, z GitOps vodenimi operacijami in opazljivostjo.',
          meta: 'Relevantne zmožnosti: Kumuluz API, API prehodi, Temporal, Camunda, CI/CD, GitOps, opazljivost',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Poglobljeno znanje Microsoft Azure in Google Cloud',
      body: [
        'Načrtujemo in upravljamo oblačne platforme pri obeh vodilnih ponudnikih ter organizacijam pomagamo ohranjati prenosljivost med oblaki in on-premise okolji.',
      ],
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'Microsoft Azure',
          text: 'Arhitektura platforme Azure, AKS, Azure DevOps, Microsoft Entra ID, Terraform, CI/CD, oblačna varnost in hibridna integracija.',
        },
        {
          title: 'Google Cloud',
          text: 'Arhitektura platforme GCP, GKE, Terraform, CI/CD in GitOps, oblačno omrežje in nadzor.',
        },
        {
          title: 'Hibridna in od ponudnika neodvisna dostava',
          text: 'Prenosljivost obremenitev, multi-cloud namestitve, Kubernetes in OpenShift med okolji, upoštevanje izhodne strategije ter dosledna identiteta, varnost in opazljivost.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Varnost in upravljanje, vgrajena v dostavo',
      body: [
        'Varnost in upravljanje sta del platforme že od začetka, ne kontrole, dodane šele potem, ko je dostava že vzpostavljena.',
      ],
      columns: 4,
      variant: 'check',
      items: [
        {
          title: 'Upravljanje identitet in dostopa',
          text: 'Keycloak, Microsoft Entra ID in RBAC za dosleden, na vlogah temelječ dostop po vsej platformi.',
        },
        {
          title: 'Upravljanje skrivnosti',
          text: 'HashiCorp Vault za centralizirano upravljanje poverilnic in API ključev.',
        },
        {
          title: 'Policy-as-code',
          text: 'Open Policy Agent in Kyverno za samodejno uveljavljanje politik po vsej platformi.',
        },
        {
          title: 'Avtorizacija aplikacij',
          text: 'Cerbos za podrobno, na politikah temelječo avtorizacijo aplikacij.',
        },
        {
          title: 'Varnostna integracija',
          text: 'Wultra, kjer je smiselno, za močnejšo avtentikacijo in zahtevnejše varnostne zahteve.',
        },
        {
          title: 'Varnost cevovodov',
          text: 'Varnostni pregledi, odobritve, kontrole artefaktov in politikovna varovala, vgrajeni v cevovode za dostavo.',
        },
        {
          title: 'Varnost kontejnerjev in obremenitev',
          text: 'Ravnanje s slikami, izolacija obremenitev in namespace politike za varne kontejnerske operacije.',
        },
        {
          title: 'Revizijska sledljivost',
          text: 'Sledljivi zapisi sprememb infrastrukture, namestitev, odobritev in dostopov.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Produkcijski vpogled in operativna odličnost',
      body: [
        'Ekipam dajemo vpogled, ki ga potrebujejo za zanesljivo upravljanje platform in aplikacij, od instrumentacije do podpore pri incidentih.',
        'Opazljivost sistemov je vgrajena v platformo, in sicer v infrastrukturo, aplikacije, API-je, workflowe in storitve AgenticAI.',
      ],
      items: [
        'Instrumentacija z OpenTelemetry',
        'Instana APM in opazljivost',
        'Metrike in nadzor',
        'Centralizirano sistemsko beleženje',
        'Enterprise revizijsko beleženje',
        'Distribuirano sledenje',
        'Korelacijski ID-ji',
        'Platformne nadzorne plošče',
        'Vpogled v namestitve in izdaje',
        'Alarmiranje in podpora pri incidentih',
        'Opazljivost Kubernetes in OpenShift',
        'Opazljivost API in workflow',
        'Opazljivost platform AgenticAI',
        'SLO in produkcijska pripravljenost',
      ],
    },
    {
      type: 'cards',
      title: 'Naj bo prava pot do dostave hkrati najlažja',
      body: [
        'Platformni inženiring ekipam pomaga delovati hitro znotraj varnih meja tako, da je varna in podprta pot privzeta izbira.',
      ],
      columns: 3,
      items: [
        {
          title: 'Golden paths',
          text: 'Preverjene, podprte poti do dostave, ki jim ekipe lahko sledijo, ne da bi vsakič znova izumljale infrastrukturo.',
        },
        {
          title: 'Ponovno uporabne predloge',
          text: 'Ponovno uporabne CI/CD in infrastrukturne predloge, ki standardizirajo dostavo med ekipami.',
        },
        {
          title: 'Self-service okolja',
          text: 'Okolja na zahtevo, ki ekipam omogočajo, da si zagotovijo, kar potrebujejo, brez ročnih predaj.',
        },
        {
          title: 'Varne privzete nastavitve',
          text: 'Privzeto varne konfiguracije, tako da prave izbire ne zahtevajo dodatnega truda.',
        },
        {
          title: 'Onboarding razvijalcev',
          text: 'Tekoč onboarding, da ekipe hitro postanejo produktivne na platformi.',
        },
        {
          title: 'Varovala upravljanja',
          text: 'Varovala, ki ekipe ohranjajo znotraj politik in varnostnih meja, ne da bi jih upočasnjevala.',
        },
      ],
    },
    {
      type: 'list',
      title: 'DevOps za kompleksna in kritična okolja',
      body: [
        'Delujemo tam, kjer štejejo zanesljivost, varnost in sledljivost — v reguliranih panogah in na zahtevnih enterprise platformah.',
      ],
      items: [
        'Enterprise digitalne platforme',
        'Okolja finančnih storitev in zavarovalništva',
        'Sistemi energetike in komunale',
        'Platforme javnega sektorja',
        'Cloud-native poslovne aplikacije',
        'Blockchain in Web3 infrastruktura',
        'Platforme za upravljanje in integracijo API-jev',
        'Platforme za avtomatizacijo workflowov',
        'AI in AgenticAI platforme',
        'Organizacije z večekipno dostavo programske opreme',
      ],
    },
    {
      type: 'kumuluz',
      title: 'Pospešeno s Kumuluz in preverjenimi platformnimi vzorci',
      body: [
        'Sunesis ima dolgo zgodovino gradnje cloud-native, mikrostoritvenih, na API-jih temelječih in z AI podprtih platform prek družine produktov Kumuluz. Te izkušnje oblikujejo naš pristop k DevOps s ponovno uporabnimi gradniki, avtomatizirano namestitvijo, cloud-native temelji in upravljanjem platform.',
        'Krepijo našo zmožnost gradnje in upravljanja platform za digitalne rešitve, API-je, Business API-je, avtomatizacijo workflowov in AgenticAI — na temelju, ki je v produkciji že preverjen.',
      ],
      items: [
        {
          title: 'KumuluzAI Platform',
          text: 'Platformni temelj za varno in opazljivo namestitev ter delovanje agentov, asistentov in AI storitev.',
        },
        {
          title: 'Kumuluz API',
          text: 'Platforma za upravljanje API-jev in API prehod z vzorci dostave, konfiguracije in operacij za API ekosisteme.',
        },
        {
          title: 'Kumuluz Digital Platform',
          text: 'Inženirski temelj za gradnjo in dostavo storitev, API-jev in cloud-native integracij.',
        },
        {
          title: 'Kumuluz Business API-ji',
          text: 'Ponovno uporabne poslovne zmožnosti, dostavljene in upravljane kot nadzorovane, produkcijsko pripravljene storitve.',
        },
        {
          title: 'Kumuluz Crowdsensing',
          text: 'Platforma za porazdeljeno zaznavanje in zbiranje podatkov, ki deluje na cloud-native temeljih.',
        },
      ],
      cta: 'Raziščite platforme Kumuluz',
      ctaHref: 'kumuluz/',
    },
    {
      type: 'steps',
      title: 'Kako izvajamo DevOps in platformni inženiring',
      intro:
        'Organizacijam pomagamo od trenutne ureditve dostave do zanesljive, avtomatizirane in varne platforme, in sicer s strukturiranim, inženirsko vodenim pristopom.',
      items: [
        {
          title: 'Ocena trenutne zrelosti dostave in platforme',
          text: 'Pregledamo obstoječe cevovode, infrastrukturo, okolja, varnost in operacije, da razumemo izhodišče.',
        },
        {
          title: 'Opredelitev ciljnega modela platforme',
          text: 'Določimo ciljno arhitekturo, model dostave in pristop k upravljanju platforme.',
        },
        {
          title: 'Avtomatizacija infrastrukture in okolij',
          text: 'Avtomatiziramo zagotavljanje in konfiguracijo z infrastrukturo kot kodo za ponovljiva, verzionirana okolja.',
        },
        {
          title: 'Implementacija CI/CD in GitOps workflowov',
          text: 'Zgradimo cevovode in GitOps workflowe, ki naredijo dostavo dosledno, pregledljivo in enostavno za povrnitev.',
        },
        {
          title: 'Integracija varnostnih in politikovnih kontrol',
          text: 'V platformo za dostavo neposredno vgradimo kontrole identitete, skrivnosti, policy-as-code in avtorizacije.',
        },
        {
          title: 'Omogočanje opazljivosti in operacij',
          text: 'Vzpostavimo metrike, beleženje, sledenje, alarmiranje in SLO za zanesljivo upravljanje platforme.',
        },
        {
          title: 'Oblikovanje razvijalskih platformnih vzorcev',
          text: 'Načrtujemo golden paths, ponovno uporabne predloge in self-service okolja, da ekipe dostavljajo znotraj varnih meja.',
        },
        {
          title: 'Podpora ekipam in razvoj platforme',
          text: 'Ekipe podpiramo pri prevzemu platforme in jo nenehno razvijamo, ko potrebe rastejo.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Tehnološko znanje',
      columns: 3,
      variant: 'compact',
      items: [
        {
          title: 'CI/CD',
          text: 'GitLab CI/CD, Azure DevOps, GitHub Actions in predloge cevovodov.',
        },
        {
          title: 'Infrastructure as Code in avtomatizacija',
          text: 'Terraform, Ansible in ponovno uporabni moduli.',
        },
        {
          title: 'GitOps in dostava',
          text: 'Argo CD, Helm, Kustomize in multi-cluster GitOps.',
        },
        {
          title: 'Kontejnerske platforme',
          text: 'Kubernetes in OpenShift, on-premise in multi-cluster.',
        },
        {
          title: 'Oblačne platforme',
          text: 'Microsoft Azure, Google Cloud, AKS, GKE in hibridna okolja.',
        },
        {
          title: 'Varnost in identiteta',
          text: 'Keycloak, Microsoft Entra ID, HashiCorp Vault, Cerbos, Kyverno, Open Policy Agent in Wultra.',
        },
        {
          title: 'Opazljivost',
          text: 'OpenTelemetry, Instana, metrike, beleženje, sledenje in SLO.',
        },
        {
          title: 'Platformni inženiring',
          text: 'Razvijalske platforme, golden paths, ponovno uporabne predloge in self-service.',
        },
        {
          title: 'Operacije AI in API platform',
          text: 'KumuluzAI, Kumuluz API, operacije API prehodov in operacije workflow platform.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'DevOps in platformni inženiring v praksi',
      intro:
        'DevOps in platformni inženiring že uporabljamo v zahtevnih enterprise in inovacijskih okoljih.',
      columns: 3,
      cta: 'Oglejte si reference',
      ctaHref: 'references/',
      variant: 'feature',
      items: [
        {
          label: 'Referenca',
          title: 'Flare',
          text: 'DevOps in platformni inženiring za velik projekt blockchain infrastrukture.',
        },
        {
          label: 'Referenca',
          title: 'Platforme Kumuluz',
          text: 'Cloud-native platformne izkušnje prek družine produktov Kumuluz.',
        },
        {
          label: 'Referenca',
          title: 'AgenticAI platforma — Zavarovalniška skupina Sava',
          text: 'Platformni inženiring, na Kubernetes temelječa dostava, varnost in upravljanje za enterprise platformo AgenticAI.',
        },
        {
          label: 'Referenca',
          title: 'Enterprise digitalne platforme',
          text: 'DevOps v bančništvu, zavarovalništvu, energetiki in enterprise okoljih.',
        },
        {
          label: 'Referenca',
          title: 'Razvojne in inovacijske platforme',
          text: 'Platformni inženiring iz mednarodnih razvojno-inovacijskih projektov.',
        },
      ],
    },
    {
      type: 'steps',
      title: 'Zakaj Sunesis za DevOps in platformni inženiring',
      items: [
        {
          title: 'Gradimo produkcijske platforme, ne le cevovode',
          text: 'Dostavljamo celovite platforme, ki zanesljivo tečejo v produkciji, ne le izolirano avtomatizacijo.',
        },
        {
          title: 'Močno znanje Kubernetes in OpenShift',
          text: 'Bogate izkušnje z arhitekturo in delovanjem kontejnerskih platform v različnih okoljih.',
        },
        {
          title: 'Poglobljeno znanje Azure in Google Cloud',
          text: 'Praktično znanje pri obeh vodilnih oblačnih ponudnikih in pri hibridnih namestitvah.',
        },
        {
          title: 'Zavedanje varnosti in upravljanja',
          text: 'Identiteta, skrivnosti, policy-as-code in revizijska sledljivost, vgrajeni v temelj za dostavo.',
        },
        {
          title: 'Izkušnje z enterprise opazljivostjo',
          text: 'Celovit vpogled z OpenTelemetry, Instana, beleženjem, sledenjem in SLO.',
        },
        {
          title: 'Razvijalska izkušnja in platformno razmišljanje',
          text: 'Golden paths, ponovno uporabne predloge in self-service, ki ekipam pomagajo dostavljati znotraj varnih meja.',
        },
        {
          title: 'Pripravljenost za AgenticAI in API platforme',
          text: 'Znanje dostave in operacij za AgenticAI, API ekosisteme in workflow platforme.',
        },
        {
          title: 'Izkušnje v zahtevnih okoljih',
          text: 'Preverjeno v reguliranih in kompleksnih panogah, kjer štejeta zanesljivost in sledljivost.',
        },
      ],
    },
    {
      type: 'finalCta',
      title: 'Potrebujete močnejši temelj za dostavo programske opreme?',
      body: [
        'Ne glede na to, ali posodabljate CI/CD, gradite platformo Kubernetes ali OpenShift, avtomatizirate infrastrukturo, uvajate GitOps, krepite varnost, izboljšujete opazljivost sistemov ali pripravljate enterprise platformo za API-je, workflowe in AgenticAI, vam Sunesis pomaga načrtovati in implementirati zanesljiv temelj za DevOps in platformni inženiring.',
      ],
      primaryCta: 'Pogovorite se z našimi DevOps strokovnjaki',
      secondaryCta: 'Raziščite naše ekspertize',
    },
  ],
}

export const devOpsPlatformEngineeringPage: Record<
  LanguageCode,
  ExpertisePageContent
> = {
  en,
  sl,
}
