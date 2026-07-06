type ReferenceLogo = { stem: string; folder: string; url: string; name: string }

// `name` is the label shown in the hover overlay on the logo walls.
// Edit these freely if any firm/partner name is wrong — this is the single source of truth.
const referenceLogos: ReferenceLogo[] = [
  {
    stem: '1_ibm',
    folder: '',
    url: '/images/references/1_ibm.png',
    name: 'IBM',
  },
  {
    stem: '2_nlb',
    folder: '',
    url: '/images/references/2_nlb.png',
    name: 'NLB',
  },
  {
    stem: '3_akrapovic',
    folder: '',
    url: '/images/references/3_akrapovic.png',
    name: 'Akrapovič',
  },
  {
    stem: '4_petrol',
    folder: '',
    url: '/images/references/4_petrol.png',
    name: 'Petrol',
  },
  {
    stem: '5_sava',
    folder: '',
    url: '/images/references/5_sava.png',
    name: 'Sava',
  },
  {
    stem: '6_otp',
    folder: '',
    url: '/images/references/6_otp.png',
    name: 'OTP',
  },
  {
    stem: '7_flare',
    folder: '',
    url: '/images/references/7_flare.png',
    name: 'Flare',
  },
  {
    stem: '8_generali',
    folder: '',
    url: '/images/references/8_generali.png',
    name: 'Generali',
  },
  {
    stem: '9_oracle',
    folder: '',
    url: '/images/references/9_oracle.png',
    name: 'Oracle',
  },
  {
    stem: '9_snaga',
    folder: '',
    url: '/images/references/9_snaga.png',
    name: 'Snaga',
  },
  {
    stem: 'cybergrid',
    folder: '',
    url: '/images/references/cybergrid.png',
    name: 'CyberGrid',
  },
  {
    stem: 'ebcont',
    folder: '',
    url: '/images/references/ebcont.png',
    name: 'ebcont',
  },
  {
    stem: 'energetika_ljubljana',
    folder: '',
    url: '/images/references/energetika_ljubljana.png',
    name: 'Energetika Ljubljana',
  },
  {
    stem: 'adriatic-slovenica',
    folder: 'extras',
    url: '/images/references/extras/adriatic-slovenica.png',
    name: 'Adriatic Slovenica',
  },
  {
    stem: 'chile',
    folder: 'extras',
    url: '/images/references/extras/chile.png',
    name: 'Government of Chile',
  },
  {
    stem: 'citytech',
    folder: 'extras',
    url: '/images/references/extras/citytech.png',
    name: 'CityTech',
  },
  {
    stem: 'ebrad',
    folder: 'extras',
    url: '/images/references/extras/ebrad.png',
    name: 'EBRD',
  },
  {
    stem: 'everis',
    folder: 'extras',
    url: '/images/references/extras/everis.png',
    name: 'Everis',
  },
  {
    stem: 'globepayroll',
    folder: 'extras',
    url: '/images/references/extras/globepayroll.png',
    name: 'GlobePayroll',
  },
  {
    stem: 'hardlab',
    folder: 'extras',
    url: '/images/references/extras/hardlab.png',
    name: 'Hardlab',
  },
  {
    stem: 'informatika',
    folder: 'extras',
    url: '/images/references/extras/informatika.png',
    name: 'Informatika',
  },
  {
    stem: 'irc',
    folder: 'extras',
    url: '/images/references/extras/irc.png',
    name: 'IRC',
  },
  {
    stem: 'kneip',
    folder: 'extras',
    url: '/images/references/extras/kneip.png',
    name: 'KNEIP',
  },
  {
    stem: 'mmturist',
    folder: 'extras',
    url: '/images/references/extras/mmturist.png',
    name: 'M&M Turist',
  },
  {
    stem: 'osocial',
    folder: 'extras',
    url: '/images/references/extras/osocial.png',
    name: 'Österreichische Sozialversicherung',
  },
  {
    stem: 'pbs',
    folder: 'extras',
    url: '/images/references/extras/pbs.png',
    name: 'PBS',
  },
  {
    stem: 'plinovodi',
    folder: 'extras',
    url: '/images/references/extras/plinovodi.png',
    name: 'Plinovodi',
  },
  {
    stem: 'prva',
    folder: 'extras',
    url: '/images/references/extras/prva.png',
    name: 'Prva osebna zavarovalnica',
  },
  {
    stem: 'solvera_lynx',
    folder: 'extras',
    url: '/images/references/extras/solvera_lynx.png',
    name: 'Solvera Lynx',
  },
  {
    stem: 'src',
    folder: 'extras',
    url: '/images/references/extras/src.png',
    name: 'SRC',
  },
  {
    stem: 'tovarna_podjemov',
    folder: 'extras',
    url: '/images/references/extras/tovarna_podjemov.png',
    name: 'Tovarna podjemov',
  },
  {
    stem: 'vsrs',
    folder: 'extras',
    url: '/images/references/extras/vsrs.png',
    name: 'Vrhovno sodišče republike Slovenije',
  },
  {
    stem: 'zzzs',
    folder: 'extras',
    url: '/images/references/extras/zzzs.png',
    name: 'ZZZS',
  },
  {
    stem: 'gen-i',
    folder: '',
    url: '/images/references/gen-i.png',
    name: 'GEN-I',
  },
  { stem: 'giz', folder: '', url: '/images/references/giz.png', name: 'GIZ' },
  {
    stem: 'riko',
    folder: '',
    url: '/images/references/riko.png',
    name: 'Riko',
  },
  {
    stem: 'aegis',
    folder: 'horizon',
    url: '/images/references/horizon/aegis.png',
    name: 'AEGIS',
  },
  {
    stem: 'atos',
    folder: 'horizon',
    url: '/images/references/horizon/atos.png',
    name: 'Atos',
  },
  {
    stem: 'caixa',
    folder: 'horizon',
    url: '/images/references/horizon/caixa.png',
    name: 'CaixaBank',
  },
  {
    stem: 'cap-watt',
    folder: 'horizon',
    url: '/images/references/horizon/cap-watt.png',
    name: 'Capwatt',
  },
  {
    stem: 'cndr',
    folder: 'horizon',
    url: '/images/references/horizon/cndr.png',
    name: 'CNDR',
  },
  {
    stem: 'ease',
    folder: 'horizon',
    url: '/images/references/horizon/ease.png',
    name: 'EASE',
  },
  {
    stem: 'eaton',
    folder: 'horizon',
    url: '/images/references/horizon/eaton.png',
    name: 'Eaton',
  },
  {
    stem: 'edp',
    folder: 'horizon',
    url: '/images/references/horizon/edp.png',
    name: 'EDP',
  },
  {
    stem: 'enel',
    folder: 'horizon',
    url: '/images/references/horizon/enel.png',
    name: 'Enel',
  },
  {
    stem: 'eng',
    folder: 'horizon',
    url: '/images/references/horizon/eng.png',
    name: 'eng',
  },
  {
    stem: 'hess',
    folder: 'horizon',
    url: '/images/references/horizon/hess.png',
    name: 'HESS',
  },
  {
    stem: 'inesctec',
    folder: 'horizon',
    url: '/images/references/horizon/inesctec.png',
    name: 'INESCTEC',
  },
  {
    stem: 'inlecom',
    folder: 'horizon',
    url: '/images/references/horizon/inlecom.png',
    name: 'INLECOM',
  },
  {
    stem: 'instrasoft',
    folder: 'horizon',
    url: '/images/references/horizon/instrasoft.png',
    name: 'Intrasoft',
  },
  {
    stem: 'julich',
    folder: 'horizon',
    url: '/images/references/horizon/julich.png',
    name: 'Forschungszentrum Jülich',
  },
  {
    stem: 'konnecta',
    folder: 'horizon',
    url: '/images/references/horizon/konnecta.png',
    name: 'Konnecta',
  },
  {
    stem: 'piraneus',
    folder: 'horizon',
    url: '/images/references/horizon/piraneus.png',
    name: 'University of Piraeus',
  },
  {
    stem: 'redhat',
    folder: 'horizon',
    url: '/images/references/horizon/redhat.png',
    name: 'Red Hat',
  },
  {
    stem: 'rwth',
    folder: 'horizon',
    url: '/images/references/horizon/rwth.png',
    name: 'RWTH Aachen University',
  },
  {
    stem: 'serveo',
    folder: 'horizon',
    url: '/images/references/horizon/serveo.png',
    name: 'Serveo',
  },
  {
    stem: 'sphynx',
    folder: 'horizon',
    url: '/images/references/horizon/sphynx.png',
    name: 'Sphynx',
  },
  {
    stem: 'tehnoloski-gozd',
    folder: 'horizon',
    url: '/images/references/horizon/tehnoloski-gozd.png',
    name: 'Tehnološki gozd',
  },
  {
    stem: 'tuc',
    folder: 'horizon',
    url: '/images/references/horizon/tuc.png',
    name: 'Technical University of Crete',
  },
  {
    stem: 'um',
    folder: 'horizon',
    url: '/images/references/horizon/um.png',
    name: 'Univerza v Mariboru',
  },
  {
    stem: 'vde',
    folder: 'horizon',
    url: '/images/references/horizon/vde.png',
    name: 'VDE',
  },
  {
    stem: 'waboost',
    folder: 'horizon',
    url: '/images/references/horizon/waboost.png',
    name: 'waboost',
  },
  {
    stem: 'seville',
    folder: 'horizon',
    url: '/images/references/horizon/university-of-sevilla.png',
    name: 'University of Seville',
  },
  {
    stem: 'dfki',
    folder: 'horizon',
    url: '/images/references/horizon/dfki.png',
    name: 'DFKI',
  },
  {
    stem: 'eurodyn',
    folder: 'horizon',
    url: '/images/references/horizon/european-dynamics.png',
    name: 'European Dynamics',
  },
  {
    stem: 'tus',
    folder: 'horizon',
    url: '/images/references/horizon/tus.png',
    name: 'Technological University of the Shannon',
  },
  {
    stem: 'ntua',
    folder: 'horizon',
    url: '/images/references/horizon/ntua-logo.png',
    name: 'National Technical University of Athens',
  },
  {
    stem: 'cnr',
    folder: 'horizon',
    url: '/images/references/horizon/cnr.png',
    name: 'CNR',
  },
  {
    stem: 'eclipse',
    folder: 'horizon',
    url: '/images/references/horizon/eclipse-foundation-white-orange.png',
    name: 'Eclipse Foundation',
  },
  {
    stem: 'siemens',
    folder: 'horizon',
    url: '/images/references/horizon/siemens.png',
    name: 'Siemens',
  },
  {
    stem: 'fundingbox',
    folder: 'horizon',
    url: '/images/references/horizon/fundingbox.png',
    name: 'FundingBox',
  },
  {
    stem: 'f6s',
    folder: 'horizon',
    url: '/images/references/horizon/f6s.png',
    name: 'F6S',
  },
  {
    stem: 'daikin',
    folder: 'horizon',
    url: '/images/references/horizon/daikin.png',
    name: 'Daikin Europe',
  },
  {
    stem: 'zhaw',
    folder: 'horizon',
    url: '/images/references/horizon/zhaw.png',
    name: 'ZHAW',
  },
  {
    stem: 'inria',
    folder: 'horizon',
    url: '/images/references/horizon/inria.png',
    name: 'Inria',
  },
  {
    stem: 'jamk',
    folder: 'horizon',
    url: '/images/references/horizon/jamk.png',
    name: 'JAMK University of Applied Sciences',
  },
  {
    stem: 'joanneum',
    folder: 'horizon',
    url: '/images/references/horizon/joanneum-research.png',
    name: 'Joanneum Research',
  },
  {
    stem: 'kemea',
    folder: 'horizon',
    url: '/images/references/horizon/kemea.png',
    name: 'KEMEA',
  },
  {
    stem: 'ministry_justice',
    folder: '',
    url: '/images/references/ministry_justice.png',
    name: 'Ministerstvo za pravosodje republike Slovenije',
  },
  {
    stem: 'ministry_public_admin',
    folder: '',
    url: '/images/references/ministry_public_admin.png',
    name: 'Ministrstvo za javno upravo republike Slovenije',
  },
]

export const topLevelReferenceLogos = referenceLogos.filter(
  (l) => l.folder === '',
)

export const referenceUrlByStem: Record<string, string> = Object.fromEntries(
  referenceLogos.map((l) => [l.stem, l.url]),
)

export const referenceNameByStem: Record<string, string> = Object.fromEntries(
  referenceLogos.map((l) => [l.stem, l.name]),
)

export const referenceStemsByFolder: Record<string, string[]> =
  referenceLogos.reduce(
    (acc, l) => {
      ;(acc[l.folder] ??= []).push(l.stem)
      return acc
    },
    {} as Record<string, string[]>,
  )
