---
layout: post
title: 'Avtonomna AgenticAI organizacija - od agentnih sistemov k avtonomnim agentom in digitalnim delavcem'
date: 2026-11-13
author: matjaz
language: sl
translationKey: autonomous-agenticai-organisation
categories: [AgenticAI, Kumuluz]
tags: [AI, KumuluzAI, agenti, večagentni sistemi, MCP, digitalni delavci]
---

Večina organizacij je prve izkušnje z generativno umetno inteligenco pridobila prek pogovornih pomočnikov za povzemanje dokumentov in iskanje po internem znanju. Kmalu zatem so sledili povezani agentni sistemi, pri katerih jezikovni model na podlagi uporabnikove zahteve pokliče ustrezna orodja ali podatkovne vire in izvede več zaporednih korakov. Naslednja faza pa prinaša bistveno drugačen način dela: prehod k avtonomnim agentom in digitalnim delavcem, ki procesov ne sprožajo šele takrat, ko jim nekdo postavi vprašanje v klepetu, temveč delujejo proaktivno in neprekinjeno v ozadju.

<!--more-->

Pri klasičnih AI-pomočnikih namreč človek še vedno ostaja vezni člen med aplikacijami. Tudi če asistent v nekaj sekundah pripravi analizo ali osnutek odgovora, mora zaposleni izsledke še vedno prenesti v zaledni sistem, preveriti robne pogoje, poslati obvestilo sodelavcem in spremljati nadaljnje roke. Avtonomni agenti in digitalni delavci zapolnijo prav to vrzel: v okviru vnaprej določenih pravil sami spremljajo dogodke v poslovnem okolju, usklajujejo korake med sistemi in zaključujejo ponavljajoče se delovne tokove.

## Kaj v praksi pomeni popolnoma avtonomna AgenticAI organizacija

V podjetju [Sunesis](https://sunesis.si/sl/) se s tem prehodom trenutno ukvarjamo zelo neposredno. Sodelujemo namreč pri projektu vzpostavitve popolnoma avtonomne organizacije na osnovi tehnologije AgenticAI. Zaradi pogodbe o nerazkrivanju podatkov (NDA) podrobnosti o naročniku in panogi ne moremo deliti, lahko pa opišemo zasnovo takšnega okolja: ekipe AI-agentov samostojno in proaktivno izvajajo celotno vsakodnevno poslovanje organizacije. Ljudje pri tem ne opravljajo več rutinskih operativnih nalog, temveč spremljajo delovanje celote in posegajo le v tiste primere, ki jih agenti ne znajo ali ne zmorejo rešiti sami, oziroma tja, kjer je sistem namenoma zastavljen tako, da zahteva človeško odobritev.

Ko avtonomni agenti prevzamejo tekoče poslovanje, se težišče inženirskega dela hitro premakne od kakovosti posameznih pozivov (_promptov_) k zelo konkretnim izzivom spremljanja, nadzora in upravljanja:

- **Zaznavanje tihih napak ter plast za vsebinski in tehnični nadzor:** Kadar procesa ne spremlja uporabnik v klepetalnem oknu, se napake pogosto ne pokažejo kot očiten tehnični izpad. Agent lahko napačno razume robni primer, prezre pomembno okoliščino, uporabi zastarel podatek ali se ujame v ponavljajočo se izmenjavo sporočil z drugim agentom, medtem ko strežniki in zaledne storitve navzven delujejo brez napak. Pri takšnih okoljih zato klasičen tehnični nadzor nad razpoložljivostjo infrastrukture in odzivnimi časi ne zadošča več. Zgraditi je treba namensko plast za sprotno spremljanje in nadzor tako **vsebinskega** kot **tehničnega** delovanja agentov – plast, ki v realnem času preverja ne le zastoje, napake klicev in porabo virov, temveč tudi skladnost odločitev s poslovnimi pravili ter kakovost in zanesljivost vsebinskih izidov.
- **Upravljanje eskalacij brez preobremenitve ljudi:** Če agent ob vsaki manjši negotovosti zahteva človeško posredovanje, sistem izgubi smisel avtonomije in ustvarja ozka grla. Če pa meje za samostojno ukrepanje postavimo preohlapno, naraste poslovno tveganje. Velik del našega dela pri takem projektu je oblikovanje preglednega mehanizma za predajo izjem: ko primer pristane pri človeku, ta ne sme brskati po surovih dnevnikih, temveč mora takoj videti povzetek okoliščin, katere podatke je agent preveril, kaj je že poskusil in katera konkretna odločitev se od njega pričakuje.
- **Razmejitev pooblastil in preprečevanje verižnih napak:** Kadar več proaktivnih agentov hkrati dostopa do zalednih sistemov, lahko ena napačna predpostavka sproži niz neželenih sprememb v povezanih procesih. Za vsako digitalno vlogo je treba natančno opredeliti, kaj sme brati, katere zapise sme spreminjati samostojno in kateri koraki – na primer finančne transakcije, pogodbene spremembe ali občutljiva komunikacija – obvezno počakajo na človeško potrditev.
- **Predvidljivost v pogojih nedeterminizma:** Jezikovni modeli so po naravi verjetnostni, vsakodnevno poslovanje pa zahteva zanesljivost in ponovljivost. Pri neprekinjenem delovanju v ozadju je treba omejiti porabo virov na posamezen primer, preprečiti neskončne zanke, obvladati začasno nedosegljivost zunanjih storitev in zagotoviti, da se proces po morebitni prekinitvi varno nadaljuje od zadnje potrjene točke.

## Merjenje učinkovitosti celotnih procesov in sprotno samodejno izboljševanje

Nadzor nad posameznimi napakami in odstopanji pa je šele prvi del upravljanja avtonomne organizacije. Za dolgoročno zanesljivost je nujno tudi **spremljanje učinkovitosti izvajanja agentov in poslovnih procesov kot celote**. V praksi to pomeni, da ne merimo zgolj uspešnosti posameznih klicev modelov, temveč končne procesne kazalnike: kolikšen delež primerov agenti zaključijo samostojno od začetka do konca, kje nastajajo zastoji pri predajah med specializiranimi agenti, kako pogosto se primeri vračajo v ponovno obdelavo ter kakšna sta čas in strošek na dejansko zaključen poslovni primer. Šele ta celostni pogled pokaže, ali agentni sistem zgolj pospešuje posamezne naloge ali resnično izboljšuje pretočnost celotnega poslovanja.

Drugi ključni vidik, ki ga gradimo v takih okoljih, je **samodejno izboljševanje delovanja in sprotna optimizacija procesov**, pri čemer se umetna inteligenca ves čas uči iz dejanskega poteka dela. Vsaka človeška potrditev, popravek ali razrešitev izjeme namreč ne reši le konkretnega primera, temveč predstavlja dragocen povratni signal za celoten sistem. Na podlagi preteklih izidov in vzorcev izvajanja lahko sistem sam prepoznava, kateri koraki v procesu so odveč, kje so odločitvena pravila preveč toga, kateri pristop ali model pri določeni vrsti nalog prinaša najboljše rezultate ter kako izboljšati kontekst in usmerjanje dela za prihodnje primere. Takšno učenje seveda ne pomeni nenadzorovanega spreminjanja produkcije: vsako predlagano izboljšavo delovnega toka ali vedenja agenta je treba najprej preveriti na preteklih primerih in jo uveljaviti pod jasnim nadzorom.

## Tehnični pogled: ločitev med sklepanjem in izvajanjem

Opisane zahteve na ravni arhitekture rešujemo tako, da strogo ločimo med verjetnostnim sklepanjem jezikovnih modelov in determinističnim izvajanjem poslovne logike. Dolgotrajni procesi, ki morajo zanesljivo ohranjati stanje ali čakati na človeško odobritev, tečejo v namenskih orkestracijskih pogonih, ki zagotavljajo ponovljive poskuse, časovne omejitve in kompenzacijske korake ob napakah. Agenti nimajo neposrednega dostopa do zalednih sistemov, storitev in podatkovnih baz; z notranjimi in zunanjimi sistemi komunicirajo izključno prek nadzorovanih poslovnih vmesnikov (_Business APIs_) in strežnikov protokola MCP (_Model Context Protocol_), pri čemer se vsak klic izvaja prek propagacije identitete _OAuth2/OIDC_ in strogo omejenih enkratnih pravic (Mandate Sentinel). Celotno izvajanje – od začetnega sklepanja modela in klicev orodij do procesnih prehodov ter metrik za vsebinsko vrednotenje učinkovitosti – povežemo z enotnim sledenjem prek standarda _OpenTelemetry_. Za kakovost delovanja AI sklopa poskrbimo z evalvacijami in celostnim upravljanjem delovanja AI skozi življenjski cikel. Da teh varnostnih, nadzornih, integracijskih in evalvacijskih mehanizmov ni treba razvijati za vsak projekt posebej, takšne rešitve gradimo na naši platformi [KumuluzAI](https://kumuluz.com/en/), ki deluje neposredno v oblačnem ali lokalnem okolju organizacije.

## Kako se različne stopnje avtonomije kažejo v naših projektih

Prehod k popolnoma avtonomnim digitalnim delavcem je v praksi postopen, zato v podjetju Sunesis vzporedno razvijamo sisteme različnih stopenj avtonomije, prilagojene zrelosti in tveganjem posamezne panoge:

- Za podjetje **RIKO** smo razvili večagentni sistem **RikoAI**, v katerem usklajena ekipa specializiranih agentov analizira obsežno mednarodno razpisno in pogodbeno dokumentacijo ter opozarja na tveganja; rešitev je leta 2026 na CIO konferenci prejela nagrado za umetno inteligenco (UI leta 2026).
- Za **zavarovalniško skupino** postavljamo platformo AgenticAI za upravljano avtomatizacijo procesov ter varno povezovanje organizacijskega znanja s poslovnimi sistemi.
- Za **bančno skupino** razvijamo AI asistenta za digitalno bančno platformo, kjer sta v ospredju stroga varnost in nadzorovana integracija z bančnimi storitvami.
- Za **Statistični urad RS (SURS)** pa smo v sodelovanju z UM FERI zasnovali večmodalnega agenta **SI-GEOS**, ki prek protokola MCP povezuje statistične in geoprostorske vire v samodejne analize in se je uvrstil med finaliste za nagrado GoDigital 2026.

Izkušnje iz teh okolij potrjujejo, da vpeljava avtonomnih agentov in digitalnih delavcev ni več vprašanje izbire najboljšega jezikovnega modela. Ključna postajata kakovostna zasnova zalednih povezav ter zanesljiva plast za spremljanje, merjenje učinkovitosti in nenehno izboljševanje delovanja v produkciji. Šele ko organizacija jasno vidi, kaj agenti počnejo, zakaj so se tako odločili, kakšne rezultate dosegajo kot celota in kje se morajo ustaviti pred človeško presojo, jim lahko varno prepusti tudi vsakodnevno operativno poslovanje.

## Od zasnove do uvedbe

V ponudbi [AgenticAI organizacije in digitalni delavci](/sl/expertise/agentic-organizations/) predstavljamo, kako skupaj izberemo prvi proces, določimo digitalne vloge in meje avtonomije ter uvedbo širimo na podlagi merljivih rezultatov — od posameznega digitalnega delavca do povezanega operativnega poslovanja organizacije.
