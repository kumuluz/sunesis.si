---
layout: post
title:  "Digitalizacija v zavarovalništvu s KumuluzAPI"
date:   2025-06-03
author: ezupancic
categories: [API]
tags: [API, KumuluzAPI, zavarovalnica, digitalizacija]
---

Zavarovalništvo je panoga, kjer je digitalizacija ključna za boljšo uporabniško izkušnjo in hitrejšo obdelavo podatkov. Stranke danes pričakujejo, da lahko zavarovanje sklenejo ali škodo prijavijo kar prek mobilne aplikacije, brez obiska poslovalnice. V ozadju pa to pomeni, da mora zavarovalnica povezati številne različne sisteme – od obstoječih (legacy) aplikacij do sodobnih digitalnih kanalov.

<!--more-->

Prav tukaj vstopi KumuluzAPI, ki omogoča varno, enotno in pregledno upravljanje vseh teh API-jev.

## Izziv v zavarovalništvu

Ena večjih slovenskih zavarovalnic je želela strankam omogočiti hitro spletno prijavo škodnega primera. V ozadju pa je to zahtevalo povezavo s:

- CRM sistemom (za preverjanje podatkov o stranki),
- centralno bazo zavarovalnih polic,
- sistemom za likvidacijo škod,
- plačilnimi storitvami, ter 
- zunanjo storitvijo za preverjanje podatkov iz registra vozil.

Vsak sistem je imel svoj API, različne formate podatkov in različne varnostne mehanizme. Brez vmesne platforme bi bilo usklajevanje zelo zamudno in težko vzdržno.

## Kako je pomagal Kumuluz API?
**1. Enotna točka dostopa**

KumuluzAPI je deloval kot “API Gateway”. Vsi klici iz mobilne aplikacije in spletnega portala so šli najprej skozi KumuluzAPI. Ta je poskrbel, da je bila komunikacija enotna in standardizirana, ne glede na to, kako so bili zaledni sistemi implementirani.

**2. Transformacija podatkov**

Ker so različni sistemi uporabljali različne formate (XML, JSON, SOAP), je KumuluzAPI opravil transformacijo podatkov v enoten format. Mobilna aplikacija je tako vedno prejela čist JSON odgovor, ne glede na to, ali je bil izvor SOAP ali REST.

**3. Varnost in dostopne pravice**

Za prijavo škode je bilo treba zagotoviti varnost osebnih podatkov. KumuluzAPI je vpeljal OAuth2 avtentikacijo in JWT žetone, s katerimi so bile zahteve strank varno overjene. Poleg tega je bilo mogoče določiti, kateri sistemi imajo pravico brati ali pisati določene podatke.

**4. Analitika in nadzor**

Platforma je omogočala vpogled v uporabo API-jev: koliko škodnih primerov je bilo prijavljenih, kdaj so bili sistemi najbolj obremenjeni in kje so se pojavljale napake. To je zavarovalnici pomagalo optimizirati delovanje sistema in planirati prihodnje kapacitete.

## Konkreten primer v praksi

Ko je stranka v aplikaciji prijavila prometno nesrečo, se je zgodilo naslednje:

- Aplikacija je prek KumuluzAPI poslala zahtevek z vsemi podatki (fotografije, opis dogodka, številka police).

- KumuluzAPI je preveril veljavnost JWT žetona in avtorizacijo uporabnika.


Zahtevek je bil razdeljen:

- podatki o polici so bili poslani v centralno bazo,

- fotografije v sistem za likvidacijo škod,

- preverjanje vozila v zunanji državni register,

- podatki o stranki v CRM.


Vsi odgovori so se združili v enoten JSON odgovor, ki je bil poslan nazaj aplikaciji.

Stranka je takoj prejela potrdilo, da je škoda prijavljena, skupaj s številko primera.

## Rezultati

Čas obdelave: prijava škodnega primera se je **skrajšala** iz več dni na nekaj minut.

Uporabniška izkušnja: stranke lahko vse opravijo na enem mestu, **brez fizičnih obiskov.**

Preglednost: zavarovalnica ima jasen vpogled v uporabo API-jev in lahko hitro **ukrepa** ob napakah.

Fleksibilnost: dodajanje **novih storitev** (npr. zunanjih partnerjev za oceno škode) je enostavno – prek KumuluzAPI se samo objavi nov endpoint.

## Sklep

Primer kaže, kako lahko KumuluzAPI v praksi deluje kot osrednji gradnik digitalne preobrazbe zavarovalništva. S tem orodjem je mogoče hitro povezati stare in nove sisteme, zagotoviti varnost ter izboljšati uporabniško izkušnjo.

Zavarovalnice, ki iščejo pot do bolj agilnega in sodobnega poslovanja, lahko s KumuluzAPI hitreje uvajajo inovacije, ne da bi morale popolnoma preurediti obstoječe sisteme. Za več informacij nas kontaktirajte na <info@kumuluz.com>.








