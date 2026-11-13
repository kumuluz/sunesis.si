---
layout: post
title: 'SI-GEOS: From question to map with your new AI colleague'
date: 2026-09-30
author: gregorgabrovsek
language: en
translationKey: si-geos-ai-colleague
categories: [AgenticAI, Kumuluz, Research & Innovation]
tags: [AI, KumuluzAI, agents, SI-GEOS, SURS, geospatial data]
---

What if a complex spatial analysis could start with a simple question? SI-GEOS brings official data, maps and artificial intelligence together in a new digital colleague.

<!--more-->

"Show the number of people living in areas at risk of flooding and exposed to noise, by region."

Anyone can understand the question. Getting to the answer, however, requires finding data, aligning spatial layers, calculating intersections and preparing a report, as well as knowledge of geographic information systems (GIS).

**With SI-GEOS, we are reversing this process: users say what they want to find out, and the agent takes care of the technical work to produce a verifiable draft analysis.**

At Sunesis, we are developing the project in a strategic consortium with the University of Maribor's Faculty of Electrical Engineering and Computer Science (UM FERI) for the Statistical Office of the Republic of Slovenia (SURS). The solution has been in internal production at SURS since September 2026.

## There is no shortage of data. What is missing is a way to connect it.

High-quality statistical and geospatial data already exists, but it is scattered across SURS, Eurostat, the Slovenian Water Agency (DRSV), the Slovenian Environment Agency (ARSO) and spatial registers.

Sources differ in structure, time period and spatial level. A flood-risk layer alone does not tell us how many people live in the affected area. Connecting data manually is therefore time-consuming and leaves room for errors.

SI-GEOS addresses precisely this intermediate step: **it assembles fragmented sources into a meaningful foundation for analysis**, without requiring users to know the structure of every database or to write code.

## Ask in Slovenian. Get more than text.

SI-GEOS is a multimodal AI agent that translates a question in Slovenian or English into a sequence of analytical tasks.

1. **Understanding intent.** The agent breaks down the question and asks for clarification where needed: "Do you mean municipalities or statistical regions?"
2. **Finding the right sources.** It locates population data and the relevant spatial layers.
3. **Aligning data.** It harmonises the sources by meaning, time and geography, and brings them together in an analytical model.
4. **Calculation.** It uses dedicated software tools to perform spatial intersections and aggregations.
5. **Presentation.** It prepares an interactive map, charts, structured tables and an explanation with sources.

A **multilayer interactive map** can combine a 1 × 1 km population grid, flood risk and noise exposure. Users can see where the phenomena being analysed overlap.

Charts make comparisons between regions easier, tables provide an overview of values, and a written explanation puts the results in context.

![The SI-GEOS interface showing an analysis of the population in flood-risk areas and an interactive map of Ljubljana.](/images/insights/si-geos-ai-sodelavec-za-uradne-podatke/si-geos-analiza-poplav.png)

## AI understands, tools calculate, sources provide evidence

In official statistics, the origin of data and the calculation method matter.

That is why SI-GEOS uses a **Grounded-by-Design** architecture. The language model understands the question and plans the analysis, but does not generate numerical values itself. It uses tools to construct and execute queries against data sources, while deterministic software tools perform the calculations.

This division of responsibilities makes results traceable to their sources. The analyst still checks whether the data, time period and method fit the question, and assesses what the result means.

The focus is therefore not on generating plausible text, but on **performing a verifiable analysis of actual data**.

## What powers the digital analyst

The agent is built on the **KumuluzAI** platform, with data sources connected through **MCP (Model Context Protocol)**. Built-in tools and skills support querying, combining data and preparing visualisations.

SiStat, STAGE, Eurostat, DRSV and ARSO data, OpenStreetMap and the Register of Spatial Units are already integrated. Integration of Copernicus data is also being prepared.

**AI-readiness of data** is essential for meaningful use of these sources: understandable metadata, the meaning of variables, and clear temporal and spatial relationships.

The architecture also supports the requirements of organisations that want to retain control over their environment and data:

- **Flexible deployment.** Microservices on Kubernetes allow the solution to run on an organisation's own infrastructure, in Slovenia's State Cloud (DRO) or in an EU cloud.
- **Independence from language model providers.** The system can select models according to the complexity of the question and processing cost.
- **Data protection by design.** Masking any personal data before it reaches the language model supports privacy protection and compliance with GDPR requirements.

## A new colleague, not a replacement for an expert

SI-GEOS embodies the idea of **"AI. Your new colleague."** It takes on time-consuming technical tasks while leaving expert judgement and decision-making to people.

Instead of following the sequence "database search → export → GIS → report", analysts ask a question and receive a draft with a map and sources. They then review and refine it. Less routine work means more time for methodology, interpretation and supporting decision-makers.

For researchers, journalists, businesses and decision-makers, this approach opens up the possibility of exploring data independently without programming. **The solution is currently in internal use at SURS; public access is not yet available.**

## A Slovenian solution with European potential

Data fragmentation is not unique to Slovenia. It is therefore important that the SI-GEOS architecture is based on European standards and frameworks such as INSPIRE and GSGF Europe. This lays the groundwork for transferring the approach to other countries in the European Statistical System.

**The future of working with data is not about everyone becoming an expert in every database. It is about being able to ask a good question and get an answer we know how to verify.**

Would you like to connect a similar digital colleague to your organisation's data and processes? [Explore the KumuluzAI platform →](https://kumuluz.com/en/products/kumuluz-ai/)
