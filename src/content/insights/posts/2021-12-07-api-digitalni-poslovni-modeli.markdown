---
layout: post
title:  "Novi digitalni poslovni modeli, ki jih omogočajo API-ji"
date:   2021-12-07
author: ezupancic
categories: [API]
tags: [API, KumuluzAPI, digitalni poslovni modeli]
---


API-ji so koristni tako za podjetja, ki jih izpostavijo, kot tudi za razvijalce, ki jih uporabijo. Razvijalci z uporabo API-jev uporabijo že obstoječe programske komponente, namesto da se poslužijo razvoja novih in tako prihranijo čas in denarni vložek. Podjetja, ki pa izpostavijo/ponujajo svoje API-je, pa lahko promovirajo svoje rešitve in zaslužijo s prodajo le-teh. Več o osnovah API ekonomije si lahko preberete [tukaj](https://blog.sunesis.si/api/2021/04/06/kumuluzapi-api-economy).

Kakšne digitalne modele pa omogočajo API-ji?


<!--more-->

## Razsežnost digitalnih poslovnih modelov s praktičnim primerom

Kot primer lahko vzamemo topografsko rešitev podjetja TomTom, ki razvija kvalitetne zemljevide in programsko opremo za načrtovanje poti ter navigacijo. Če bi želel vsak znotraj svoje aplikacije razviti svoje zemljevide in rešitev za navigiranje, bi porabili na tisoče razvojnih ur. 

Zato se razvijalci raje poslužijo že obstoječih rešitev. Na primer, TomTom omogoča 2.500 brezplačnih klicev na dan oz. 75.000 na mesec do njihovega API-ja za navigacijo. Nad tem pragom pa začnejo za transakcije zaračunavati, in sicer med 0,42 - 0,50 USD za vsakih 1.000 klicev. V zameno rešitev omogoča številne funkcionalnosti, kot so: vektorski zemljevidi, markerji, lokacijsko iskanje, prometne informacije, iskanje poti… Dotičen primer predstavlja **»freemium«** API poslovni model, ki ga bomo podrobneje naslovili skupaj s preostalimi poslovnimi modeli v nadaljevanju tega članka.

Številni viri poročajo, da je trenutno na trgu več kot 22.000 javnih API-jev. Ta številka pa na letnem nivoju narašča med 20 in 30%. To je podatek, ki si ga velja zapomniti, nam pa sporoča, kako pomemben je segment API-jev ta trenutek ter to, da se bo v prihodnosti le še dodatno okrepil. Ampak ker podjetja ne morejo živeti zgolj od trendov, ki se krepijo z lepimi statistikami, si poglejmo še dejanske učinke, zakaj naj podjetja razvijajo in delijo svoje API-je. 

## Konkretne poslovne koristi, ki temeljijo na API poslovnih modelih

API-ji omogočajo tudi manjšim aplikacijam koriščenje tehnologij in programske opreme, za katere bi sicer potrebovali preveč potrebnih virov za razvoj – kot na primer: funkcionalnosti strojnega učenja, strojni vid, procesiranje velikih podatkovnih blokov itd.  Ob preprostem pogledu na API ekonomijo, je povsem razvidno, kakšne so prednosti za razvijalce. Po drugi strani pa se podjetja sprašujejo, kakšna je njihova dodana vrednost v API ekosistemu, ter zakaj naj razvijajo in izpostavijo svoje API-je?


**1. Povečanje prodaje**

Prvi in najbolj direktni razlog je ustvarjanje novih prihodkov in povečanje prodaje podjetja. Na voljo so različni modeli monetizacije kot na primer: Freemium, Pay-as-you-Go, Tiered, Transaction Fee ipd.

**2. Marketing in okrepitev blagovne znamke**

API vašega podjetja je lahko uporabljen, za pridobivanje novih obiskovalcev v vašo aplikacijo in izboljšanje ugleda podjetja. Vzemimo primer podjetja Spotify. Razvijalci lahko vdelajo (»embed«) Spotify na spletno mesto in to omogoča, da obiskovalci poslušajo glasbene formate direktno na spletnem mestu. S tem pa Spotify pridobiva tudi nove uporabnike. Naslednji lep primer je slovenska aplikacija za upravljanje osebnih financ Toshl. Lahko se kaj hitro zgodi, da se stranka odloči  zamenjati bančnega ponudnika, če določena banka ne omogočala (API) integracije direktno z rešitvijo Toshl ali kakšno drugo sorodno rešitvijo, ki jo uporablja stranka za vodenje osebnih financ.

**3. Zmanjšana kompleksnost produktov**

V kolikor ste ponudnik kompleksne SaaS rešitve s številnimi funkcionalnostmi in uporabniki ne želijo polne funkcionalnosti, ki jo ponujate, lahko uporabniku po zaslugi API-jev omogočite le funkcionalnosti, ki si jih želi. 

**4. Izmenjava informacij s poslovnimi partnerji**

V preteklosti je bilo to področje precej konfuzno, namreč pogosto so si administrativni oddelki med podjetji izmenjevali kar Excel preglednice. Kot primer pa so API-ji omogočili izmenjavo informacij med kupci na spletnih trgovinah in logističnimi podjetji. UPS-ovi API-ji omogočajo, da kupci sledijo pošiljki že direktno iz Alibaba spletne trgovine.


## Digitalni poslovni modeli, ki temeljijo na API ekonomiji

Iz poslovnega vidika imamo v API ekosistemu 3 deležnike:
- **API ponudnik** (angl. API Provider); predstavlja podjetje, ki razvija in javno ponudi API.
- **API stranka** (angl. API Consumer); predstavlja razvijalca oz. ekipo, ki implementira dotični API
- **Končni uporabnik** (angl. End User); je oseba, ki uporablja končno aplikacijo, katera bazira na dotičnem API. 

Na podlagi teh treh deležnikov je moč oblikovati naslednje API poslovne modele:

![API poslovni modeli]({{site.baseurl}}/assets/images/posts-api-digitalni-poslovni-modeli/api-poslovni-modeli.png)



### Naročniški model (angl. Subscription)
Ta poslovni model obsega direktno zaračunavanje samega API-ja, tipično na mesečnem ali pa letnem nivoju. Prednosti za podjetja so, da je mogoče jasno spremljati metrike, meriti nove prihodke in številko strank. 
Izziv, ki ga ima ta model pa je, da verjetno razvijalci ne bodo pripravljeni na samem začetku plačati za API. Zato se priporoča brezplačni demo oz. brezplačno verzijo z omejenimi funkcionalnosti (angl. Freemium), da lahko razvijalci dobijo boljši občutek in spoznajo same funkcionalnosti. Primer Freemium modela je tudi Google Maps, ki je do v naprej določenega števila klicev brezplačen, od tam naprej pa se prične zaračunavanje. 
 
### Pay-As-You-Go
Je model, ki od razvijalca zahteva, da plačuje za funkcionalnosti po uporabi (npr. 0,01 USD za 1 API klic). Je zelo priljubljena opcija, predvsem za manjše in srednje velike razvijalske ekipe, ki še nimajo veliko končnih uporabnikov na svoji aplikaciji. Zelo podoben model je tudi »Point-based«, ki se razlikuje po tem, da je enota uporabe in cena že v naprej določena. 
Po navadi gre za večje število API klicev, ki so vključeni v neki ceni. Primer »Pay-As-You-Go« in »Point based« so produkti in storitve, ki jih je mogoče najti na   [Microsoft Azure](https://azure.microsoft.com/en-us/pricing/purchase-options/pay-as-you-go/).
 
### Provizija pri transakciji
Tega modela se podjetja poslužujejo predvsem za plačilne in komunikacijske prehode. To pomeni, da stranka (in posledično razvijalec) plača provizijo pri vsaki izvedeni transakciji, ali pa pri vsaki izvedeni komunikacijski aktivnosti. Cene so v naprej določene. Na primer: 0,5% provizije od vsake izvedene plačilne transakcije. V kolikor pa si za primer vzamemo slovenski SMS prehod (https://www.smsapi.si) pa lahko vidimo, da imajo v naprej določeno ceno za vsak poslani SMS. 

Potrebno se je zavedati, da API-ji predstavljajo precej več, kot nov trend. API-ji postajajo nov »status quo«. Analitično podjetje Gartner je opravilo raziskavo in identificiralo najpomembnejša API področja, ter njihove učinke. Kot lahko vidite na spodnji sliki, vsa omenjena področja na sliki tvorijo pomemben člen v poslovanju. To je pomemben podatek za vsa podjetja, ki se API-jev še niso lotila, ali pa o tem le razmišljajo. API ekonomija že nekaj let ni več zgolj le trend, temveč temelj za gradnjo vseh naprednih digitalnih rešitev, kar pa je še dodatno potrdila situacija COVID-19.

![Gartner API področja]({{site.baseurl}}/assets/images/posts-api-digitalni-poslovni-modeli/gartner-api-podrocja.png)


V Sunesisu razvijamo orodje [KumuluzAPI](https://api.kumuluz.com/), ki omogoča celostno upravljanje z API-ji, vključno z implementacijo različnih poslovnih modelov pri trženju  API-jev. Če vas zanima več informacij, kako lahko vaše podjetje izkoristi API ekonomijo za hitrejšo rast (skupaj z vami vam pomagamo identificirati potencialne digitalne rešitve, poslovne modele in sredstva), ali če vas zanima kaj več konkretnih informacij o KumuluzAPI nas kontaktirajte na <info@kumuluz.com>.





