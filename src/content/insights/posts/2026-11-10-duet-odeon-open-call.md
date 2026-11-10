---
layout: post
title: "Sunesis advances solar forecasting across European energy dataspaces within ODEON"
date: 2026-11-10
author: dimitarstefanov
categories: [Research & Innovation, Company]
tags: [DUET, ODEON, HEDGE-IoT, AI, Energy, Data spaces]
---

Sunesis is participating in the [ODEON](https://www.odeonproject.eu/) project with DUET, a solution through which we will connect European energy dataspaces to make AI solar forecasting services easier to access and reuse.

<!--more-->

DUET stands for **Interoperable DUal-dataspace Energy AI forecasTing**. The project addresses **Cross-Dataspace Interoperability & Energy AI Services**, by bringing together the ODEON and [HEDGE-IoT](https://hedgeiot.eu/) ecosystems. Our aim is to demonstrate how an AI forecasting service can be discovered, contracted and used across these two energy dataspaces.

## Connecting European energy dataspaces

Energy data is distributed across utilities, grid operators, energy communities and individual asset owners. A dataspace provides a framework for these organisations to share data under agreed access and usage conditions. Making an AI service available across different dataspaces adds another challenge: users need to find the service, agree on its use and interpret its outputs consistently.

DUET will deploy the AURORA solar forecasting service, being developed by Sunesis within HEDGE-IoT, on the ODEON Cloud-Edge Data and Intelligence Service Platform. Forecasts will be published as a service asset on the ODEON Data Asset Marketplace. A consumer in the HEDGE-IoT dataspace will then discover the asset, negotiate access and receive forecasts under a dataspace contract.

This demonstration will test how a forecasting service can reach users in another ecosystem without requiring a separate integration project for each customer. DUET will use ODEON's shared data model and energy standards such as SAREF and IEC CIM so that applications on both sides interpret the exchanged information consistently.

The diagram below outlines the planned connection between the two dataspaces and the applications that could use their forecasting services.

[![DUET concept showing ODEON and HEDGE-IoT exchanging AI forecasting services through a dataspace contract, with applications for energy communities, aggregators, grid operators and prosumers.](/images/insights/duet-odeon-open-call/duet-dataspace-interoperability.png)](/images/insights/duet-odeon-open-call/duet-dataspace-interoperability.png)

_Cross-dataspace interoperability between ODEON and HEDGE-IoT: forecasting services are discovered and accessed under agreed contracts, while data remains under its owner's control. Select the diagram to view it at full size._

## Forecasting solar generation with AI

Reliable solar forecasts help operators plan for changes in generation before they occur. The forecasting approach underpinning both AURORA and DUET builds on [prior research](https://www.sciencedirect.com/science/article/pii/S0038092X25005869). It combines satellite images, numerical weather predictions and historical solar generation measurements using a Temporal Fusion Transformer, a deep learning model for time series forecasting.

The service is designed to forecast solar generation two hours ahead, at 15-minute intervals. The transformer model behind the service has been trained on data from 233 photovoltaic sites in Slovenia. DUET will adapt and validate this approach in the ODEON environment, where its performance will be assessed against defined baselines.

The planned deployment combines cloud-based training with inference at the edge, close to the energy assets using the forecasts. Federated learning will allow participating sites to train local model components and exchange model updates while keeping their raw site data under the owner's control.

## Benefits for energy communities and operators

Local energy communities and aggregators are the project's primary target users. The same forecasting service can support several groups:

- **Energy communities and aggregators:** anticipate solar generation to schedule batteries, coordinate flexible loads and use more locally produced electricity.
- **Prosumers:** plan when to consume, store or share the solar energy they produce.
- **Distribution system operators:** use aggregated forecasts to improve visibility of distributed generation and plan for potential network constraints.

By making forecasts available through a dataspace marketplace, DUET aims to give smaller organisations access to AI services that would otherwise require their own modelling expertise and integration work.

Explore [ODEON](https://www.odeonproject.eu/) or [contact us](/en/#contact) to learn more about our work on AI and interoperability in the energy sector.

_DUET is supported through the ODEON Open Call. ODEON is funded by the European Union under Horizon Europe Grant Agreement No. 101136128._
