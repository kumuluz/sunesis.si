---
layout: post
title: 'Digitalisation in insurance with KumuluzAPI'
date: 2025-06-03
author: ezupancic
language: en
translationKey: insurance-digitalisation-kumuluzapi
categories: [Kumuluz, API & Integration, Research & Innovation]
# prettier-ignore
tags: [Kumuluz API, API management, Research projects, API, digitalisation, insurance]
---

Insurance is an industry where digitalisation is essential for a better customer experience and faster data processing. Today, customers expect to take out insurance or report a claim through a mobile app, without visiting a branch. Behind the scenes, this means insurers must connect many different systems, from legacy applications to modern digital channels.

<!--more-->

This is where KumuluzAPI comes in, providing secure, unified and transparent management of all these APIs.

## The insurance challenge

One of Slovenia's larger insurers wanted to let customers report claims quickly online. Behind the scenes, this required connections to:

- a CRM system to verify customer details,
- a central insurance policy database,
- a claims settlement system,
- payment services, and
- an external service for checking vehicle registry data.

Each system had its own API, different data formats and different security mechanisms. Without an intermediary platform, coordinating them would have been time-consuming and difficult to maintain.

## How did KumuluzAPI help?

**1. A single point of access**

KumuluzAPI acted as an API gateway. All calls from the mobile app and web portal first passed through KumuluzAPI. It ensured consistent, standardised communication, regardless of how the back-end systems were implemented.

**2. Data transformation**

Because the systems used different formats and protocols, including XML, JSON and SOAP, KumuluzAPI transformed data into a common format. The mobile app therefore always received a clean JSON response, whether the source used SOAP or REST.

**3. Security and access rights**

Reporting a claim required the protection of personal data. KumuluzAPI introduced OAuth2 authentication and JWT tokens to securely authenticate customer requests. It also made it possible to specify which systems had permission to read or write particular data.

**4. Analytics and monitoring**

The platform provided visibility into API usage: how many claims had been reported, when systems were under the heaviest load and where errors occurred. This helped the insurer optimise system operation and plan future capacity.

## A concrete example in practice

When a customer reported a traffic accident in the app, the following happened:

- The app sent a request through KumuluzAPI containing all the details: photographs, a description of the incident and the policy number.
- KumuluzAPI checked the validity of the JWT token and the user's authorisation.

The request was split:

- policy details were sent to the central database,
- photographs to the claims settlement system,
- the vehicle check to the external government registry,
- customer details to the CRM.

All responses were combined into a single JSON response and sent back to the app.

The customer immediately received confirmation that the claim had been reported, together with a case number.

## Results

Processing time: reporting a claim was **reduced** from several days to a few minutes.

Customer experience: customers can complete everything in one place, **without visiting a branch.**

Transparency: the insurer has a clear view of API usage and can **act quickly** when errors occur.

Flexibility: adding **new services**, such as external partners for damage assessment, is straightforward: a new endpoint is simply published through KumuluzAPI.

## Conclusion

This example shows how KumuluzAPI can serve as a central building block for digital transformation in insurance. It makes it possible to connect old and new systems quickly, ensure security and improve the customer experience.

Insurers seeking a more agile, modern way of operating can use KumuluzAPI to introduce innovations faster without completely overhauling their existing systems. For more information, contact us at <info@kumuluz.com>.
