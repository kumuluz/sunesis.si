---
layout: post
title: 'Sunesis v okviru projekta ODEON izboljšuje napovedovanje proizvodnje sončne energije v evropskih energetskih podatkovnih prostorih'
date: 2026-11-10
author: dimitarstefanov
language: sl
translationKey: duet-odeon-open-call
categories: [Research & Innovation, Company]
tags: [DUET, ODEON, HEDGE-IoT, AI, energetika, podatkovni prostori]
---

Sunesis v projektu [ODEON](https://www.odeonproject.eu/) sodeluje z rešitvijo DUET, s katero bomo povezali evropske energetske podatkovne prostore ter olajšali dostop do storitev napovedovanja proizvodnje sončne energije z umetno inteligenco in njihovo ponovno uporabo.

<!--more-->

DUET je kratica za **Interoperable DUal-dataspace Energy AI forecasTing**. Projekt naslavlja **interoperabilnost med podatkovnimi prostori in storitve umetne inteligence v energetiki** s povezovanjem ekosistemov ODEON in [HEDGE-IoT](https://hedgeiot.eu/). Naš cilj je prikazati, kako je mogoče storitev napovedovanja z umetno inteligenco odkriti, se dogovoriti o pogojih njene uporabe in jo uporabljati med tema energetskima podatkovnima prostoroma.

## Povezovanje evropskih energetskih podatkovnih prostorov

Energetski podatki so razpršeni med energetska podjetja, operaterje omrežij, energetske skupnosti in posamezne lastnike energetskih naprav. Podatkovni prostor tem organizacijam zagotavlja okvir za izmenjavo podatkov pod dogovorjenimi pogoji dostopa in uporabe. Ponudba storitve umetne inteligence v različnih podatkovnih prostorih prinaša dodaten izziv: uporabniki morajo storitev najti, se dogovoriti o njeni uporabi in njene rezultate dosledno razumeti.

V okviru projekta DUET bomo storitev napovedovanja proizvodnje sončne energije AURORA, ki jo Sunesis razvija v projektu HEDGE-IoT, namestili na platformo ODEON Cloud-Edge Data and Intelligence Service Platform. Napovedi bodo objavljene kot storitveni vir na tržnici ODEON Data Asset Marketplace. Odjemalec v podatkovnem prostoru HEDGE-IoT bo nato ta vir odkril, se dogovoril za dostop in prejemal napovedi na podlagi pogodbe o uporabi v podatkovnem prostoru.

S to demonstracijo bomo preverili, kako lahko storitev napovedovanja doseže uporabnike v drugem ekosistemu, ne da bi za vsakega odjemalca potrebovali ločen integracijski projekt. DUET bo uporabljal skupni podatkovni model ODEON in energetske standarde, kot sta SAREF in IEC CIM, da bodo aplikacije na obeh straneh izmenjane informacije razumele enako.

Spodnji diagram prikazuje načrtovano povezavo med podatkovnima prostoroma in aplikacije, ki bi lahko uporabljale njune storitve napovedovanja.

[![Koncept DUET: ODEON in HEDGE-IoT izmenjujeta storitve napovedovanja z umetno inteligenco na podlagi pogodbe o uporabi v podatkovnem prostoru za energetske skupnosti, agregatorje, operaterje omrežij in aktivne odjemalce.](/images/insights/duet-odeon-open-call/duet-dataspace-interoperability.png)](/images/insights/duet-odeon-open-call/duet-dataspace-interoperability.png)

_Interoperabilnost med podatkovnima prostoroma ODEON in HEDGE-IoT: storitve napovedovanja se odkrivajo in uporabljajo pod dogovorjenimi pogodbenimi pogoji, podatki pa ostajajo pod nadzorom lastnika. Za ogled v polni velikosti kliknite diagram._

## Napovedovanje proizvodnje sončne energije z umetno inteligenco

Zanesljive napovedi proizvodnje sončne energije operaterjem pomagajo načrtovati odziv na spremembe proizvodnje, še preden se te zgodijo. Pristop k napovedovanju, na katerem temeljita AURORA in DUET, izhaja iz [predhodnih raziskav](https://www.sciencedirect.com/science/article/pii/S0038092X25005869). Satelitske posnetke, numerične vremenske napovedi in pretekle meritve proizvodnje sončne energije združuje z modelom Temporal Fusion Transformer, modelom globokega učenja za napovedovanje časovnih vrst.

Storitev je zasnovana za napovedovanje proizvodnje sončne energije za dve uri vnaprej, v 15-minutnih intervalih. Transformatorski model, na katerem temelji storitev, je bil naučen na podatkih 233 fotonapetostnih elektrarn v Sloveniji. DUET bo ta pristop prilagodil in validiral v okolju ODEON, kjer bomo njegovo uspešnost ocenili glede na opredeljene primerjalne osnove.

Načrtovana namestitev združuje učenje v oblaku z izvajanjem napovedi na robu omrežja, blizu energetskih naprav, ki napovedi uporabljajo. Federativno učenje bo sodelujočim lokacijam omogočilo učenje lokalnih komponent modela in izmenjavo posodobitev modela, pri čemer bodo njihovi neobdelani podatki ostali pod nadzorom lastnika.

## Koristi za energetske skupnosti in operaterje

Lokalne energetske skupnosti in agregatorji so glavna ciljna skupina projekta. Ista storitev napovedovanja lahko podpira več skupin:

- **Energetske skupnosti in agregatorji:** predvidevanje proizvodnje sončne energije za načrtovanje delovanja baterij, usklajevanje prilagodljive porabe in večjo uporabo lokalno proizvedene električne energije.
- **Aktivni odjemalci, ki energijo tudi proizvajajo:** načrtovanje, kdaj proizvedeno sončno energijo porabiti, shraniti ali deliti.
- **Operaterji distribucijskih sistemov:** uporaba združenih napovedi za boljši vpogled v razpršeno proizvodnjo in načrtovanje odziva na morebitne omejitve omrežja.

DUET želi z zagotavljanjem napovedi prek tržnice podatkovnega prostora manjšim organizacijam omogočiti dostop do storitev umetne inteligence, za katere bi sicer potrebovale lastno znanje modeliranja in dodatno integracijsko delo.

Obiščite [ODEON](https://www.odeonproject.eu/) ali [stopite v stik z nami](/sl/#contact) za več informacij o našem delu na področju umetne inteligence in interoperabilnosti v energetiki.

_DUET je podprt prek odprtega razpisa ODEON. Projekt ODEON financira Evropska unija v okviru programa Obzorje Evropa, sporazum o dodelitvi sredstev št. 101136128._
