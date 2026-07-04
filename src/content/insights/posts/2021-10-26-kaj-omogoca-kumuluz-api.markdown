---
layout: post
title:  "KumuluzAPI – celostna platforma za upravljanje z API-ji. Kaj vse zmore?"
date:   2021-10-26
author: ezupancic
categories: [API]
tags: [API, KumuluzAPI, funkcionalnosti]
---

Učinkovita rešitev za upravljanje API-jev naslavlja več kot le dober portal za razvijalce, upravljavce in visoko performančni API prehod. Vključuje tudi ustrezno infrastrukturo in naslavlja upravljanje API-jev v več nivojih, in sicer: Nivo upravljanja podatkov, aplikacijski nivo, integracijski nivo in interakcijski nivo. Več o tem si lahko preberete v članku o upravljanju API-jev v najzahtevnejših poslovnih okoljih [(tukaj)](https://blog.sunesis.si/api/2021/09/23/api-management-zahtevna-okolja).

<!--more-->


Ena takšnih učinkovitih rešitev za upravljanje API-jev je KumuluzAPI, ki je plod slovenskega znanja. Produkt v podjetju Sunesis razvijamo in nadgrajujemo že več kot 5 let in je v uporabi v številnih velikih podjetjih v regiji. Glavne potrebe za uspešno upravljanje digitalnih sredstev (API-jev) naslavlja preko svojih funkcionalnosti, ki so:

**Portal za razvijalce**
Strankam, partnerjem in zaposlenim omogoča dostop do API-jev in njihovo dokumentacijo. Razvijalski portal zmanjšuje nepotrebno komunikacijo in podporo zunanjim razvijalcem, saj so vsebine samopostrežne. Z enostavnim mehanizmom naročanja na API-je razvijalci pridobijo dostop do API-ja.

**Portal za upravljanje**
Portal za upravljanje je namenjen razvijalcem in upravljavcem API-jev znotraj organizacije. Portal omogoča uvoz in dokumentiranje API-jev (REST – OpenAPI 3, Swagger, RAML; SOAP – WSDL, gRPC, GraphQL), upravljanje naročnin, politik dostopa, nadzor dostopa, upravljane API Ključev, upravljanje API prehodov, upravljanje odjemalnih aplikacij itd.

**API prehod**
KumuluzAPI vsebuje visok zmogljiv API prehod, ki je na voljo v dveh verzijah. Prva verzija je namenjena klasičnim okoljem, druga verzija pa je posebej prilagojena za Kubernetes in podpira specifike usmerjanja v okolju Kubernetes in Istio. Rešitev omogoča postavitev več instanc API prehodov, ki so lahko namenjene za različna okolja. 

**Strežnik za avtentikacijo in avtorizacijo**
Preko strežnika za avtentikacijo in avtorizacijo lahko upravljate varnostne aspekte dostopa do posameznega API-ja.



## KumuluzAPI portal za upravljanje – kaj vse omogoča?



Glavna komponenta rešitve KumuluzAPI je portal za upravljanje API-jev, ki razvijalcem in upravljavcem API-jev omogoča: 
- Iskanje objavljenih API-jev.
- Pregled podatkovnih modelov in shem, ki jih uporabljajo API-ji in njihove medsebojne odvisnosti (vključno s tem, kateri API-ji uporabljajo določen model oz. shemo).
- Sistemska nadzorna plošča s podrobno statistiko klicev za različna časovna obdobja in pregled statusov API-jev, API prehodov in naročnin.
- Funkcionalnosti za uporabo lastnih API-jev, odjemalnih aplikacij in organizacij. 

**Pregled nad API-ji**
Pogled za odkrivanje objavljenih API-jev prikaže vse API-je, ki so dostopni z naročnino (ali brez, če so javni) in klice preko API prehoda. Pogled omogoča enostavno iskanje in filtriranje API-jev po skupinah in dostop do podrobnosti posameznega API-ja, kot je dokumentacija, API definicija (Swagger, OpenAPI), pregled vitalnosti, nadzor statistike klicev na API, itd. 

![Pregled nad API-ji]({{site.baseurl}}/assets/images/posts-kaj-omogoca-kumuluzAPI/API-pregled.png)

**Nadzor dostopa**
Eden najpomembnejših vidikov orodja za upravljanje API-jev je nadzor dostopa. S podrobnim vpogledom nad statistiko klicev KumuluzAPI omogoča spremljanje uporabe API-ja in tudi spremljanje trenda uporabe, ki nam omogoča, da prilagodimo infrastrukturo, na kateri se izvaja API v primeru rastočega trenda, itd. 

**Spremljanje statistike**
Poleg spremljanja nadzora uporabe KumuluzAPI omogoča tudi spremljanje statistike uspešnih klicev, neuspešnih klicev, in klicev, ki so kršili politike/omejitve dostopa (npr. število klicev, ki so kršili Rate Limiting policy). KumuluzAPI spremlja statistiko na nivoju API-ja in na nivoju posamezne operacije/končne točke API-ja. 


![Pregled nad uporabo API-ja]({{site.baseurl}}/assets/images/posts-kaj-omogoca-kumuluzAPI/statistika-uporaba-APIjev.png)


![Pregled statistike klicev]({{site.baseurl}}/assets/images/posts-kaj-omogoca-kumuluzAPI/statistika-klicev.png)


## KumuluzAPI Dev portal za razvijalce – Kaj vse omogoča?

Portal za upravljanje API-jev je primarno namenjen internim uporabnikom organizacije – tistim, ki API-je upravljajo. Portal za upravljanje API-jev organizaciji nudi vrsto prednosti, saj daje pregled nad trenutnim stanjem API-jev znotraj organizacije, vendar cilj rešitev za upravljanje API-jev niso le interni uporabniki in skrbniki API-jev. 

**Dokumentacija in možnost za naročanje**
API-je in njihove funkcionalnosti namreč želimo izpostaviti našim partnerjem, strankam in ostalim zunanjim razvijalcem. Za to skrbi komponenta KumuluzAPI Developer portal, preko katere API-je, njihovo dokumentacijo in možnost za naročanje dostavimo zunanjim uporabnikom. 


![KumuluzAPI - Developer portal]({{site.baseurl}}/assets/images/posts-kaj-omogoca-kumuluzAPI/kumuluzAPI-dev-portal.png)




Preko portala za razvijalce uporabniki dostopajo do podrobnosti API-ja, vključno z uporabniško dokumentacijo, tehnično dokumentacijo in specifikacijo API-ja. KumuluzAPI Developer portal podpira tudi dokumentacijo v formatu Docsify. Javne API-je lahko uporabniki uporabljajo brez naročnine, t.j. brez API ključa. 

**Upravljanje z naročninami**
Za zasebne API-je morajo uporabniki ustvariti naročnino, preko katere registrirajo odjemalno aplikacijo in prejmejo API ključ za dostop. Naročnino odobri upravljavec API-ja preko portala za upravljanje. 


![Pregled podrobnosti API-ja]({{site.baseurl}}/assets/images/posts-kaj-omogoca-kumuluzAPI/podrobnosti-APIja.png)


Za več informacij o KumuluzAPI se obrnite na <info@kumuluz.com> ali [KumuluzAPI](https://api.kumuluz.com/). 



