---
layout: post
title:  "KumuluzAPI MCP strežnik"
date:   2026-02-06
author: rokra
categories: [API]
tags: [KumuluzAPI, MCP, umetna inteligenca]
---

Model Context Protocol (MCP) je v zadnjem času postal de facto standard za varno povezovanje velikih jezikovnih modelov (LLM) z zunanjimi aplikacijami in podatki. S tem protokolom modele “opremimo” z dodatnimi sposobnostmi in jim tako omogočimo dostop do specifičnih informacij, ki jih v osnovi nimajo.

Z veseljem naznanjamo, da smo v koraku z globalnimi tehnološkimi trendi kot eni prvih v Sloveniji razvili lasten **MCP strežnik**, ki je integriran neposredno v našo KumuluzAPI platformo.

<!--more-->

## Zakaj uporabiti KumuluzAPI MCP strežnik?

KumuluzAPI MCP strežnik agentom umetne inteligence omogoča varen in nadzorovan dostop do virov organizacije. S pomočjo namenskih orodij lahko izbrani LLM sedaj asistira tudi pri naslednjih nalogah:

- **Pregled organizacijske strukture:** Hiter vpogled v vire in sredstva brez ročnega brskanja.

- **Diagnostika aplikacij:** Analiza stanja in zdravja mikrostoritev.

- **Analiza končnih točk:** Podroben pregled API endpointov in prehodov.

- **Identifikacija napak:** Pomoč pri odkrivanju težav in pregled specifičnih metrik delovanja.


## Kako začeti?

Postopek zagona smo poenostavili, da lahko začnete takoj. Strežnik lahko v nekaj preprostih korakih povežete s priljubljenimi orodji, kot so GitHub Copilot, Cursor ali Claude Code.

1. **Konfiguracija:** Za povezavo izbranega LLM orodja z našim MCP strežnikom sledite navodilom v dokumentaciji.

2. **Avtentikacija:** Sistem temelji na varnem OAuth2 standardu. Ob prvem zagonu boste strežnik avtenticirali z enakim uporabniškim imenom in geslom, kot ga uporabljate za dostop do spletne aplikacije KumuluzAPI. Varno, hitro in enostavno.

3. **Uporaba:** Po uspešni prijavi bo imel izbrani LLM takojšen dostop do konteksta vaše organizacije in bo lahko učinkovito svetoval pri upravljanju API ekosistema.


## Primer uporabe v praksi

Za lažjo predstavo je spodaj prikazana integracija z orodjem Claude Code. Po hitri konfiguraciji so MCP viri Claudeu takoj na voljo:

![Uspešna povezava Claude Code z MCP strežnikom]({{site.baseurl}}/assets/images/posts-kumuluz-api-mcp/claude-initial.png)

Z agentom komuniciramo v naravnem jeziku. Na zahtevo po analizi metrik takoj prejmemo strukturiran vpogled v delovanje:

![Claude Code pravilno pridobi metrike preko MCP virov]({{site.baseurl}}/assets/images/posts-kumuluz-api-mcp/claude-cmd.png)

Rezultati so verodostojni in povsem usklajeni z dejanskim stanjem v vmesniku KumuluzAPI:

![Ujemanje pridobljenih podatkov z vmesnikom KumuluzAPI]({{site.baseurl}}/assets/images/posts-kumuluz-api-mcp/endpoint-data.png)


## Zaključek

MCP omogoča nadgradnjo vaših najljubših pametnih pomočnikov z realnimi, živimi podatki. S tem procesom odgovore jezikovnega modela prizemljimo z dejstvi, kar drastično izboljša natančnost informacij, pospeši razvoj in olajša diagnosticiranje napak.

**KumuluzAPI MCP strežnik** je tako idealna rešitev za razvojne ekipe, ki želijo stopiti v novo dobo razvoja in s pomočjo umetne inteligence optimizirati pregled nad svojim API ekosistemom.

Ker je rešitev trenutno v razvojni fazi, so vaše povratne informacije ključne za nadaljnje izboljšave. Veseli bomo vaših komentarjev, predlogov ali vprašanj na [**info@kumuluz.com**](mailto:info@kumuluz.com).
