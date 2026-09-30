---
layout: post
title: 'SI-GEOS: od vprašanja do zemljevida z vašim novim AI sodelavcem'
date: 2026-09-30
author: gregorgabrovsek
categories: [AgenticAI, Kumuluz, Research & Innovation]
tags: [AI, KumuluzAI, agenti, SI-GEOS, SURS, geoprostorski podatki]
---

Kaj če bi za zahtevno prostorsko analizo namesto več dni dela potrebovali le vprašanje? SI-GEOS povezuje uradne podatke, zemljevide in umetno inteligenco v novega digitalnega sodelavca.

<!--more-->

»Prikaži število prebivalcev na poplavno ogroženih in s hrupom obremenjenih območjih po regijah.«

Vprašanje je razumljivo vsakomur. Pot do odgovora pa je bila doslej vse prej kot preprosta: poiskati podatke o prebivalstvu, pridobiti prostorske sloje, uskladiti območja in časovna obdobja, izračunati preseke ter pripraviti karto in poročilo. Za to potrebujete podatkovno znanje, izkušnje z geografskimi informacijskimi sistemi (GIS) in precej časa.

**S projektom SI-GEOS to pot obračamo: uporabnik pove, kaj želi izvedeti, agent pa prevzame tehnično delo do preverljivega osnutka analize.**

V podjetju Sunesis projekt razvijamo v strateškem konzorciju s Fakulteto za elektrotehniko, računalništvo in informatiko Univerze v Mariboru (UM FERI) za Statistični urad Republike Slovenije (SURS). Od septembra 2026 je rešitev v interni produkciji na SURS.

## Podatkov ne manjka. Manjka pot med njimi.

Kakovostni statistični in geoprostorski podatki že obstajajo. SURS in Eurostat ponujata statistike, Direkcija RS za vode podatke o poplavni ogroženosti, ARSO podatke o hrupu, prostorski registri pa meje in povezave med območji.

Težava je, da ti viri niso ena sama, usklajena zbirka. Razlikujejo se po strukturi, časovnem obdobju in prostorski ravni. Podatek za občino ni neposredno primerljiv s podatkom za statistično regijo, prostorski sloj poplavne ogroženosti pa sam po sebi še ne pove, koliko ljudi živi na prizadetem območju.

Uporabnik mora zato danes pogosto postati povezovalec sistemov, še preden lahko postane analitik. Ročno združevanje podatkov je zamudno in odpira prostor za napake.

SI-GEOS naslavlja prav ta vmesni korak: **iz razdrobljenih virov sestavi smiselno podlago za analizo**, ne da bi moral uporabnik poznati strukturo vsake baze ali programirati.

## Vprašate v slovenščini. Dobite več kot besedilo.

SI-GEOS ni le klepetalnik nad podatkovno zbirko. Je večmodalni UI-agent, ki vprašanje v slovenščini ali angleščini prevede v zaporedje analitičnih opravil.

Pri vprašanju o prebivalstvu, poplavah in hrupu je pot do odgovora sestavljena iz več korakov:

1. **Razumevanje namena.** Agent razčleni vprašanje in ob nejasnostih prosi za pojasnilo: »Mislite občine ali statistične regije?«
2. **Iskanje ustreznih virov.** Poišče podatke o prebivalstvu in relevantne prostorske sloje.
3. **Usklajevanje podatkov.** Vire vsebinsko, časovno in prostorsko harmonizira ter jih poveže v analitični model.
4. **Izračun.** Z namenskimi programskimi orodji izvede prostorske preseke in agregacije.
5. **Predstavitev.** Pripravi interaktivni zemljevid, grafikone, strukturirane tabele in razlago z viri.

Ključna razlika je v zadnjem koraku: odgovor ni zgolj odstavek s številko. **Večslojni interaktivni zemljevid** lahko poveže mrežo prebivalstva velikosti 1 × 1 km, poplavno ogroženost in obremenjenost s hrupom. Uporabnik tako ne vidi le, koliko prebivalcev zajema analiza, temveč tudi, kje se obravnavani pojavi prekrivajo.

Grafikoni olajšajo primerjavo med regijami, tabele omogočijo pregled vrednosti, besedilna razlaga pa postavi rezultate v kontekst. Različni prikazi niso okras: vsak pomaga odgovoriti na drug del istega vprašanja.

## UI razume, orodja računajo, viri dokazujejo

Pri uradni statistiki prepričljiv odgovor ni dovolj. Pomembno je, od kod podatek prihaja in kako je bil izračunan.

Zato SI-GEOS temelji na arhitekturi **»Grounded-by-Design«**. Jezikovni model razume vprašanje in načrtuje analizo, številčnih vrednosti pa ne ustvarja sam. Z orodji sestavi in izvede poizvedbe po podatkovnih virih, izračune pa opravijo deterministična programska orodja.

> UI razume, orodja računajo, viri dokazujejo.

Takšna delitev odgovornosti omogoča sledljivost rezultatov do uporabljenih virov. Ne pomeni pa, da strokovna presoja ni več potrebna. Analitik mora še vedno preveriti, ali izbrani podatki, časovno obdobje in metoda ustrezajo vprašanju, ter presoditi, kaj rezultat dejansko pomeni.

Prav tu se SI-GEOS razlikuje od splošnega klepetalnika: v ospredju ni ustvarjanje verjetnega besedila, temveč **izvedba preverljive analize nad konkretnimi podatki**. V primerjavi s klasičnimi podatkovnimi portali pa uporabniku ni treba začeti pri tabelah in filtrih — začne lahko pri problemu.

## Od treh dni do treh ur

SI-GEOS je že del internega dela na SURS. Po podatkih projekta ga od uvedbe septembra 2026 uporablja **20 zaposlenih**, ki so z njim izvedli **več kot 300 analiz**.

Pri posameznih primerih uporabe se časovna razlika pokaže zelo konkretno:

| Analiza                                          | Prej  | S SI-GEOS |
| ------------------------------------------------ | ----- | --------- |
| Izpostavljenost prebivalstva poplavam po regijah | 3 dni | 3 ure     |
| Obremenjenost s hrupom po občinah                | 4 ure | 10 minut  |

To sta primera iz projektne uporabe, ne zagotovilo enakega pospeška pri vsaki poizvedbi. Dobro pa ponazorita, kje nastaja največja vrednost: pri iskanju virov, njihovem povezovanju, pripravi prostorskih presekov in začetnih vizualizacij.

Namesto zaporedja »iskanje po bazah → izvoz → GIS → poročilo« analitik zastavi vprašanje in dobi osnutek s karto in viri. Nato ga pregleda, dopolni in uporabi pri nadaljnjem delu.

**Prihranek ni le hitreje pripravljeno poročilo. Je več časa za metodologijo, interpretacijo in podporo odločevalcem.**

## Kaj poganja digitalnega analitika

Agent je zgrajen na platformi **KumuluzAI**, podatkovni viri pa so priključeni prek protokola **MCP (Model Context Protocol)**. Vgrajena orodja in veščine mu omogočajo razčlenjevanje nalog, klicanje programskih vmesnikov, združevanje podatkov in pripravo vizualizacij.

Integrirani so že SURS PX-Web (SiStat), STAGE z mrežo 1 × 1 km, Eurostat s prostorskimi ravnmi NUTS 0–3 in LAU, podatki DRSV o poplavni ogroženosti in vodotokih, podatki ARSO o hrupu, OpenStreetMap ter Register prostorskih enot. V pripravi je tudi vključitev podatkov Copernicus.

Da lahko agent te vire smiselno uporablja, ni dovolj le tehnična povezava. Potrebna je **pripravljenost podatkov za UI (AI-readiness)**: razumljivi metapodatki, opredeljen pomen spremenljivk ter jasne časovne in prostorske povezave.

Arhitektura pri tem podpira zahteve organizacij, ki želijo ohraniti nadzor nad okoljem in podatki:

- **Prilagodljiva namestitev.** Mikrostoritve v okolju Kubernetes omogočajo delovanje v lastni infrastrukturi, državnem računalniškem oblaku (DRO) ali oblaku EU.
- **Neodvisnost od ponudnika jezikovnega modela.** Sistem lahko izbira med modeli glede na zahtevnost vprašanja in strošek obdelave.
- **Zaščita podatkov po zasnovi.** Maskiranje morebitnih osebnih podatkov, preden dosežejo jezikovni model, podpira varstvo zasebnosti in izpolnjevanje zahtev GDPR.
- **Iskanje s podprtim generiranjem (RAG).** Agent pri delu uporablja relevantne vire, povratne informacije uporabnikov pa pomagajo pri njegovem nadaljnjem izboljševanju.

Tehnologija je pomembna predvsem zaradi rezultata: agent lahko statistične tabele in prostorske sloje povezuje sproti, glede na konkretno vprašanje, namesto da bi bil omejen na vnaprej pripravljene prikaze.

## Novi sodelavec, ne zamenjava za strokovnjaka

SI-GEOS uteleša idejo **»AI. Vaš novi sodelavec.«** Prevzema zamudna tehnična opravila, človeku pa prepušča strokovno presojo in odločanje.

Za zaposlene na SURS to pomeni manj ponavljajočega se poizvedovanja, agregiranja in pripravljanja začetnih kart. Ob tem pridobivajo praktične izkušnje z vodenjem UI-agentov, uporabo jezikovnih modelov in pripravo podatkov za strojno obdelavo.

Za širšo javnost je potencial prav tako velik. Raziskovalci, novinarji, podjetja in odločevalci bi lahko zahtevne prostorske analize pripravljali prek vprašanj v naravnem jeziku, brez programiranja ali vsakokratnega posredovanja GIS-analitika. **Trenutna interna uporaba na SURS je pomemben korak v tej smeri, ne pa napoved že odprtega javnega dostopa.**

## Slovenska rešitev z evropskim potencialom

Razdrobljenost podatkov ni samo slovenski izziv. Zato je pomembno, da arhitektura SI-GEOS temelji na evropskih standardih in okvirih, kot sta INSPIRE in GSGF Europe. To ustvarja podlago za prenos pristopa v druge države Evropskega statističnega sistema.

Vrednost projekta ni v še enem vmesniku za iskanje tabel. Je v povezovanju statistike in prostora, uporabi slovenščine ter preverljivem prehodu od vprašanja do karte, izračuna in razlage.

V Sunesisu skupaj z UM FERI in SURS dokazujemo, da je generativna umetna inteligenca najbolj uporabna takrat, ko ne ostane pri pogovoru. Ko zna uporabiti prava orodja, povezati prave vire in strokovnjaku pripraviti podlago za boljše odločitve.

**Prihodnost dela s podatki ni v tem, da vsi postanemo strokovnjaki za vsako bazo. Je v tem, da lahko zastavimo dobro vprašanje — in dobimo odgovor, ki ga znamo preveriti.**

Želite podobnega digitalnega sodelavca povezati s podatki in procesi svoje organizacije? [Spoznajte platformo KumuluzAI →](https://kumuluz.com/en/products/kumuluz-ai/)
