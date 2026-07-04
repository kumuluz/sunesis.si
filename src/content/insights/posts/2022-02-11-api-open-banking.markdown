---
layout: post
title:  "Bančništvo 4.0: Kako obvladovati priložnosti in izzive?"
date:   2022-02-11
author: ezupancic
categories: [API]
tags: [API, KumuluzAPI, bančništvo]
---

Odprto bančništvo prinaša številne priložnosti za vpeljavo novih poslovnih modelov. Uporabnikom in komitentom prinaša višjo inovativnost in konkurenčnost finančnih ponudnikov. Finančnim institucijam pa posledično številne izzive. Poglejmo si, kako učinkovito obvladovati izzive na področju Bančništva 4.0 in katera orodja nam pri tem lahko koristijo.

<!--more-->


Evropska komisija je z namenom spodbuditve inovativnosti na področju bančništva izdala direktivo »Payment Services Directive II (PSD2)«, ki je stopila v veljavo v začetku 2018 in narekuje, da morajo banke odpreti dostop do finančnih podatkov svojih komitentov prek aplikacijskih programskih vmesnikov API in na tak način spodbudila iniciativo odprtega bančništva. 
PSD2 je naslednik prve direktive, potreba po novi različici direktive je nastala zaradi hitrega napredka digitalizacije bančništva in plačevanja. Dodatno PSD2 naslavlja pomembnejše področje udeležencev, ki jih prva direktiva ni, in sicer tretji ponudniki storitev – TPP (Third Party Providers). S tem bo bančništvo še bolj aktivno vstopilo v svet **API ekonomije**.

## Odprti API kot jedro odprtega bančništva

Jedro odprtega bančništva predstavljajo odprti API-ji, saj omogočajo nabor standardiziranih protokolov, orodij in metod za komunikacijo med različnimi aplikacijami oziroma programskimi komponentami. API-ji se že široko uporabljajo v številnih industrijah s ciljem integriranja komunikacije med številnimi aplikacijami in programskimi sistemi, da lahko lažje funkcionirajo kot povezan ekosistem. 

Namen odprtega bančništva je spodbujanje bank, finančnih institucij in novodobnih »fintech« podjetij, da delujejo kot povezan ekosistem in izvajajo medsebojno interakcijo preko API komunikacije, namesto starodobnih metod, kot je na primer »screen-scraping« (kopiranje informacij iz zaslona ali uporabniškega vmesnika). 

## Največ koristi bodo imela mlada fintech podjetja in uporabniki

Končni cilj je omogočiti uporabnikom in komitentom nadzor ter transparentno distribucijo svojih podatkov preko različnih deležnikov v finančnem ekosistemu. S tem se omogoči novim **fintech** podjetjem, da uporabnikom ponudijo boljšo storitev. 

Podatki, ki jih finančne institucije hranijo o komitentih, namreč pripadajo komitentom in ne finančnim institucijam. V kolikor želi uporabnik uporabiti te podatke, da dobi na voljo boljšo in konkurenčnejšo storitev, ima pravico, da to stori – to je eden izmed pomembnejših ciljev odprtega bančništva. 

Vzporedno pa iniciativa odprtega bančništva omogoča tudi nižjo mejo vstopa (angl. »entry barrior«) novih fintech ponudnikov, oziroma tretjim ponudnikom storitev - TPP (angl. »Third Party Providers«). Le-to pa direktno vpliva na povečanje konkurenčnosti in inovativnosti v bančnem in finančnem segmentu. 

## Z odprtim bančništvom do novih posojil 

Eden izmed pogostih problemov je, da številni komitenti v Evropski Uniji niso upravičeni do posojila pri svoji primarni banki. Odprto bančništvo omogoča, da komitent banke deli svoje transakcijske podatke s tretjim ponudnikom (TPP) preko API komunikacije in izdela kreditno poročilo. To pa lahko TPP uporabi za izdajo posojila.

Prav tako imajo številni komitenti slabo obrestno mero na varčevalnih računih (kljub visokim vezanim zneskom). Odprto bančništvo bo omogočilo številnim fintech podjetjem (in konkurenčnim bankam, ki razvijajo nove poslovne modele) do boljših finančnih inštrumentov za varčevanje, ki bodo komitentom omogočale višjo obrestno mero. 

Kljub priložnostnim, ki jih prinaša odprto bančništvo, je moč opaziti številne izzive, s katerimi se bodo srečevale finančne institucije kot tudi tretji ponudniki TPP.

## Implementacija in izpostavitev API ni dovolj za uspešno podporo PSD2 sheme

Banke in druge finančne inštitucije kot organizacije, ki te API-je dostavljajo, morajo zagotoviti tudi ostale vidike API-jev, kot so predvsem:
-	specifikacija, 
-	dokumentiranje, 
-	verzioniranje, 
-	nadzor dostopa, 
-	upravljanje API ključev, 
-	upravljanje varnostnih politik, 
-	nadzor integracij. 
Da uspešno naslovimo naštete vidike, potrebujemo sistem, preko katerega te vidike upravljamo – **platformo za celostno upravljanje API-jev.** 

## KumuluzAPI – platforma za celostno upravljanje API-jev za bančništvo 4.0

KumuluzAPI je platforma, ki poleg omenjenih vidikov, nudi tudi razvojni portal **(Developer Portal)**, preko katerega ponudniki API-jev na varen način dostavijo dokumentacijo, specifikacijo in ostale pomembne informacije API-jev za razvijalce odjemalnih aplikacij. 

KumuluzAPI neposredno naslavlja odprto bančništvo in povezane izzive, saj so prve stranke rešitve KumuluzAPI ravno banke. KumuluzAPI je samostojna »API management« rešitev, ki je povezana z rešitvami digitalne banke. 


![API managemnt za bančništvop]({{site.baseurl}}/assets/images/posts-api-open-banking/api-open-banking.png)


KumuluzAPI naslavlja tudi vse varnostne vidike pri izpostavitvi API-jev – tako za enkripcijo podatkov, avtentikacijo, avtorizacijo uporabnikov, fizično ločeno namestitev razvojnega (developer) portala, itd. Hkrati pa podpira tudi visoko razpoložljivost, ki zagotavlja neprekinjeno delovanje in neprekinjen dostop do API-jev.

V nadaljevanju poglejmo varnostne zahteve PSD2 sheme, ter naslavljanje le teh s KumuluzAPI. 

### Avtorizacija in tok komunikacije med uporabnikom, banko in TPP


![API avtorizacija]({{site.baseurl}}/assets/images/posts-api-open-banking/API-avtorizacija.png)


1.	Uporabnik (PSU) se odloči, da bo uporabljal aplikacijo tretjega ponudnika TPP in prične povezovanje s TPP.
2.	TPP pri ustrezni banki začne s pridobivanjem soglasja pri ustrezni banki, za pregled stanja računa za tega uporabnika.
3.	TPP preusmeri uporabnika do njegove primarne banke, da ustvari soglasje s TPP.
4.	Uporabnik avtorizira soglasje direktno skozi njihovo banko in je nato preusmerjen nazaj do TPP.
5.	Avtorizacijski tok se zaključi in sedaj ima TPP dostop do stanja na računu, podatkov, potrdil o sredstev in izvrševanja plačil.
6.	Uporabnik lahko vidi bančne podatke skozi TPP in izvršuje plačila.


![Tok komunikacije med uporabnikom, banko in TPP]({{site.baseurl}}/assets/images/posts-api-open-banking/komunikacija-TPP.png)

Izpostaviti je potrebno koraka 2 in 3, ko želi uporabnik uporabiti podatke, oziroma TPP aplikaciji omogočiti dostop do svojih podatkov pri banki. Uporabnik bo preusmerjen na avtentikacijski/avtorizacijski strežnik (IAM rešitev) banke, kjer se bo prijavil in TPP aplikaciji dal »consent« za dostop do svojih podatkov v banki.

Ko se vpiše in odda »consent«, bo preusmerjen nazaj na TPP aplikacijo. S tem korakom TPP pridobi poverilnico – tipično je to žeton, s katerim potem lahko dostopa preko API Gateway-ja do API-jev (in se tudi avtenticira) in pridobi podatke uporabnika.

## Vstop v Bančništvo 4.0 brez večjih infrastrukturnih posegov

Iz tehnološke perspektive odprto bančništvo zahteva od finančnih institucij kot so banke, da ustvarijo nov dostopni kanal do bančnih podatkov posameznih komitentov. Kako banke zagotovijo integracijo in arhitekturo je na strani njih samih. To predstavlja nalogo, ki je po zahtevnosti primerljiva z razvojem spletne banke oz. mobilne aplikacije. Kljub zaledni bančni platformi (angl. »backend core banking platform«) je potrebno razviti povsem nov čelni del sistema oz. »frontend« vmesnik – razen če že vse čelne aplikacije uporabljajo za komunikacijo interni skupen standardiziran vmesnik API. 

Implementacija odprtega bančništva je lahko izjemno zahtevna zaradi ponovnega načrtovanja celotne infrastrukture in komunikacije med zalednimi sistemi ter čelnimi aplikacijami, hkrati pa prinese še dodatno programsko opremo, ki jo je potrebno podpirati. 

Kompleksnost implementacije odprtega bančništva se da drastično zmanjšati z vpeljavo interne standardizirane API komunikacije med zalednimi sistemi in čelnimi aplikacijami, kot je prikazano na spodnji shemi.


![KumuluzAPI za bančiništvo]({{site.baseurl}}/assets/images/posts-api-open-banking/KumuluzAPI-banking.png)


V Sunesisu razvijamo orodje [KumuluzAPI](https://api.kumuluz.com/), ki omogoča celostno upravljanje z API-ji za bančni sektor. Za več informacij nas kontaktirajte na <info@kumuluz.com>.







