---
layout: post
title:  "Vzpostavitev API integracijske infrastrukture v banki s pomočjo rešitve KumuluzAPI"
date:   2023-03-14
author: ezupancic
categories: [API]
tags: [API, KumuluzAPI, banka]
---

Digitalna preobrazba bank je danes nujna, saj omogoča prilagodljivost in odzivnost v hitro spreminjajočem se finančnem okolju. Ključni del tega procesa je integracija različnih aplikacij in sistemov znotraj banke ter povezovanje z zunanjimi partnerji. Ena izmed ključnih rešitev, ki omogoča učinkovito in varno integracijo, je **KumuluzAPI,** ki smo ga uspešno vpeljali pri naši stranki iz **bančnega sektorja.** V nadaljevanju bomo predstavili, kako je bila s to rešitvijo vzpostavljena API integracijska infrastruktura v okolju banke ter kakšne koristi prinaša.

<!--more-->


## Interna in eksterna integracijska infrastruktura

Pri vzpostavitvi API integracijske infrastrukture smo se osredotočili na dva ključna sklopa:
- **Interna integracijska infrastruktura:** Ta sklop je zasnovan za integracijo znotraj banke med internimi aplikacijami in sistemi. Ker gre za občutljive podatke in transakcije, je posebna pozornost namenjena varnosti. Interna infrastruktura omogoča hiter in varen pretok informacij med različnimi oddelki, sistemi in aplikacijami znotraj banke.
- **Eksterna integracijska infrastruktura:** Zunanja integracijska infrastruktura vključuje dva podsistema – za vhodne (ingress) in izhodne (egress) integracije. Ingress deluje kot enotna vhodna točka za vse zunanje klice v interne sisteme banke. Egress pa predstavlja izstopno točko za vse zahteve, ki potujejo iz banke v zunanje sisteme, kot so partnerske institucije, regulatorji ali druge zunanje aplikacije.


## Poudarek na varnosti in upravljanju

Ena izmed največjih prednosti rešitve KumuluzAPI je enostavno in učinkovito upravljanje varnostne konfiguracije, kar bistveno zmanjšuje tveganje človeških napak. V bančnem okolju, kjer so transakcije in podatki zelo občutljivi, je varnost ključnega pomena.

Z uporabo API prehodov (API gateways) je mogoče centralizirati nadzor nad vsemi integracijami. Prehodi omogočajo, da ves promet, ki prihaja v banko iz zunanjih sistemov, potuje skozi eno vhodno točko, kar omogoča lažje spremljanje, nadzor in varnostne prilagoditve. Na enak način API prehodi omogočajo, da ves promet, ki gre iz banke v zunanje sisteme, potuje skozi enotno izstopno točko, kar poenostavi upravljanje in zagotavlja skladnost z varnostnimi politikami.


## Statistika integracij in ključni rezultati
Rešitev KumuluzAPI je v okolju banke vzpostavila stabilno in skalabilno integracijsko infrastrukturo. Pomembni dosežki vključujejo:
- **22 integracijskih API-jev:** Vzpostavljeno je bilo 22 različnih integracijskih točk, ki omogočajo povezovanje med različnimi sistemi in aplikacijami znotraj in zunaj banke.
- **1.1 milijona klicev dnevno:** Sistem dnevno obdela več kot milijon API klicev, kar kaže na izjemno učinkovitost in zmogljivost rešitve.
- **35 aktivnih integracij:** Trenutno v sistemu deluje 35 aktivnih integracij, ki so ključne za nemoteno poslovanje banke.


S pomočjo rešitve KumuluzAPI je bila v banki vzpostavljena robustna API integracijska infrastruktura, ki omogoča tako interno kot zunanjo povezljivost. Glavne prednosti te rešitve so visoka stopnja varnosti, enostavno upravljanje integracij in zmožnost obdelave velikega števila API klicev na dan. V prihodnosti bo ta infrastruktura omogočala **še hitrejše prilagajanje banke novim poslovnim modelom, tehnološkim rešitvam in partnerstvom,** kar je ključno za uspeh v današnjem digitalnem svetu.











