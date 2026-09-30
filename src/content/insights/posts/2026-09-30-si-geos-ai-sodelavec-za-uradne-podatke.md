---
layout: post
title: 'SI-GEOS: od vprašanja do zemljevida z vašim novim AI sodelavcem'
date: 2026-09-30
author: gregorgabrovsek
categories: [AgenticAI, Kumuluz, Research & Innovation]
tags: [AI, KumuluzAI, agenti, SI-GEOS, SURS, geoprostorski podatki]
---

Kaj če bi zahtevno prostorsko analizo začeli kar z vprašanjem? SI-GEOS povezuje uradne podatke, zemljevide in umetno inteligenco v novega digitalnega sodelavca.

<!--more-->

»Prikaži število prebivalcev na poplavno ogroženih in s hrupom obremenjenih območjih po regijah.«

Vprašanje je razumljivo vsakomur. Pot do odgovora pa zahteva iskanje podatkov, usklajevanje prostorskih slojev, izračun presekov in pripravo poročila — ter znanje geografskih informacijskih sistemov (GIS).

**S projektom SI-GEOS to pot obračamo: uporabnik pove, kaj želi izvedeti, agent pa prevzame tehnično delo do preverljivega osnutka analize.**

V podjetju Sunesis projekt razvijamo v strateškem konzorciju s Fakulteto za elektrotehniko, računalništvo in informatiko Univerze v Mariboru (UM FERI) za Statistični urad Republike Slovenije (SURS). Od septembra 2026 je rešitev v interni produkciji na SURS.

## Podatkov ne manjka. Manjka pot med njimi.

Kakovostni statistični in geoprostorski podatki že obstajajo, a so razpršeni med SURS, Eurostat, Direkcijo RS za vode, ARSO in prostorske registre.

Viri se razlikujejo po strukturi, časovnem obdobju in prostorski ravni. Prostorski sloj poplavne ogroženosti sam po sebi še ne pove, koliko ljudi živi na prizadetem območju. Ročno povezovanje podatkov je zato zamudno in odpira prostor za napake.

SI-GEOS naslavlja prav ta vmesni korak: **iz razdrobljenih virov sestavi smiselno podlago za analizo**, ne da bi moral uporabnik poznati strukturo vsake baze ali programirati.

## Vprašate v slovenščini. Dobite več kot besedilo.

SI-GEOS je večmodalni UI-agent, ki vprašanje v slovenščini ali angleščini prevede v zaporedje analitičnih opravil.

1. **Razumevanje namena.** Agent razčleni vprašanje in ob nejasnostih prosi za pojasnilo: »Mislite občine ali statistične regije?«
2. **Iskanje ustreznih virov.** Poišče podatke o prebivalstvu in relevantne prostorske sloje.
3. **Usklajevanje podatkov.** Vire vsebinsko, časovno in prostorsko harmonizira ter jih poveže v analitični model.
4. **Izračun.** Z namenskimi programskimi orodji izvede prostorske preseke in agregacije.
5. **Predstavitev.** Pripravi interaktivni zemljevid, grafikone, strukturirane tabele in razlago z viri.

**Večslojni interaktivni zemljevid** lahko poveže mrežo prebivalstva velikosti 1 × 1 km, poplavno ogroženost in obremenjenost s hrupom. Uporabnik vidi, kje se obravnavani pojavi prekrivajo.

Grafikoni olajšajo primerjavo med regijami, tabele omogočijo pregled vrednosti, besedilna razlaga pa postavi rezultate v kontekst.

![Vmesnik SI-GEOS z rezultati analize prebivalstva na poplavno ogroženih območjih in interaktivnim zemljevidom Ljubljane](/images/insights/si-geos-ai-sodelavec-za-uradne-podatke/si-geos-analiza-poplav.png)

## UI razume, orodja računajo, viri dokazujejo

Pri uradni statistiki sta pomembna izvor podatka in način izračuna.

Zato SI-GEOS temelji na arhitekturi **»Grounded-by-Design«**. Jezikovni model razume vprašanje in načrtuje analizo, številčnih vrednosti pa ne ustvarja sam. Z orodji sestavi in izvede poizvedbe po podatkovnih virih, izračune pa opravijo deterministična programska orodja.

Takšna delitev odgovornosti omogoča sledljivost rezultatov do virov. Analitik pa še vedno preveri, ali podatki, časovno obdobje in metoda ustrezajo vprašanju, ter presodi, kaj rezultat pomeni.

V ospredju tako ni ustvarjanje verjetnega besedila, temveč **izvedba preverljive analize nad konkretnimi podatki**.

## Kaj poganja digitalnega analitika

Agent je zgrajen na platformi **KumuluzAI**, podatkovni viri pa so priključeni prek protokola **MCP (Model Context Protocol)**. Vgrajena orodja in veščine omogočajo poizvedovanje, združevanje podatkov in pripravo vizualizacij.

Integrirani so že SiStat, STAGE, Eurostat, podatki DRSV in ARSO, OpenStreetMap ter Register prostorskih enot. V pripravi je tudi vključitev podatkov Copernicus.

Za smiselno uporabo virov je ključna **pripravljenost podatkov za UI (AI-readiness)**: razumljivi metapodatki, pomen spremenljivk ter jasne časovne in prostorske povezave.

Arhitektura pri tem podpira zahteve organizacij, ki želijo ohraniti nadzor nad okoljem in podatki:

- **Prilagodljiva namestitev.** Mikrostoritve v okolju Kubernetes omogočajo delovanje v lastni infrastrukturi, državnem računalniškem oblaku (DRO) ali oblaku EU.
- **Neodvisnost od ponudnika jezikovnega modela.** Sistem lahko izbira med modeli glede na zahtevnost vprašanja in strošek obdelave.
- **Zaščita podatkov po zasnovi.** Maskiranje morebitnih osebnih podatkov, preden dosežejo jezikovni model, podpira varstvo zasebnosti in izpolnjevanje zahtev GDPR.

## Novi sodelavec, ne zamenjava za strokovnjaka

SI-GEOS uteleša idejo **»AI. Vaš novi sodelavec.«** Prevzema zamudna tehnična opravila, človeku pa prepušča strokovno presojo in odločanje.

Namesto zaporedja »iskanje po bazah → izvoz → GIS → poročilo« analitik zastavi vprašanje in dobi osnutek s karto in viri. Nato ga pregleda in dopolni. Manj rutinskega dela pomeni več prostora za metodologijo, interpretacijo in podporo odločevalcem.

Raziskovalcem, novinarjem, podjetjem in odločevalcem tak pristop odpira možnost samostojnega raziskovanja podatkov brez programiranja. **Rešitev je trenutno v interni uporabi na SURS; javni dostop še ni odprt.**

## Slovenska rešitev z evropskim potencialom

Razdrobljenost podatkov ni samo slovenski izziv. Zato je pomembno, da arhitektura SI-GEOS temelji na evropskih standardih in okvirih, kot sta INSPIRE in GSGF Europe. To ustvarja podlago za prenos pristopa v druge države Evropskega statističnega sistema.

**Prihodnost dela s podatki ni v tem, da vsi postanemo strokovnjaki za vsako bazo. Je v tem, da lahko zastavimo dobro vprašanje — in dobimo odgovor, ki ga znamo preveriti.**

Želite podobnega digitalnega sodelavca povezati s podatki in procesi svoje organizacije? [Spoznajte platformo KumuluzAI →](https://kumuluz.com/en/products/kumuluz-ai/)
