---
layout: post
title: 'KumuluzAPI MCP server'
date: 2026-02-06
author: rokra
language: en
translationKey: kumuluz-api-mcp
# prettier-ignore
categories: [AgenticAI, Kumuluz, API & Integration, Cloud-native & DevOps, Open Source, Research & Innovation]
# prettier-ignore
tags: [KumuluzAI, Kumuluz API, AI agents, MCP, Cloud-native, Research projects, artificial intelligence]
---

Model Context Protocol (MCP) has recently become the de facto standard for securely connecting large language models (LLMs) to external applications and data. This protocol equips models with additional capabilities, giving them access to specific information they do not inherently possess.

We are pleased to announce that, keeping pace with global technology trends, we are among the first in Slovenia to develop our own **MCP server**, integrated directly into our KumuluzAPI platform.

<!--more-->

## Why use the KumuluzAPI MCP server?

The KumuluzAPI MCP server gives AI agents secure, controlled access to an organisation's resources. With dedicated tools, your chosen LLM can now also assist with:

- **An overview of the organisational structure:** quickly exploring resources and assets without browsing manually.
- **Application diagnostics:** analysing the status and health of microservices.
- **Endpoint analysis:** examining API endpoints and gateways in detail.
- **Error identification:** helping identify issues and inspect specific operational metrics.

## How to get started

We have simplified setup so you can get started straight away. In a few simple steps, you can connect the server to popular tools such as GitHub Copilot, Cursor or Claude Code.

1. **Configuration:** follow the documentation to connect your chosen LLM tool to our MCP server.
2. **Authentication:** the system is based on the secure OAuth2 standard. On first use, you authenticate with the server using the same username and password you use to access the KumuluzAPI web application. Secure, fast and straightforward.
3. **Usage:** after a successful sign-in, your chosen LLM immediately has access to your organisation's context and can provide effective guidance on managing the API ecosystem.

## A practical example

The integration with Claude Code below illustrates how this works. After a quick configuration, the MCP resources are immediately available to Claude:

![Claude Code successfully connected to the MCP server.](/assets/images/posts-kumuluz-api-mcp/claude-initial.png)

We communicate with the agent in natural language. A request to analyse metrics immediately produces a structured view of operations:

![Claude Code correctly retrieves metrics through MCP resources.](/assets/images/posts-kumuluz-api-mcp/claude-cmd.png)

The results are reliable and fully consistent with the actual state shown in the KumuluzAPI interface:

![Retrieved data matches the KumuluzAPI interface.](/assets/images/posts-kumuluz-api-mcp/endpoint-data.png)

## Conclusion

MCP enhances your favourite intelligent assistants with real, live data. This grounds the language model's responses in facts, dramatically improving the accuracy of information, accelerating development and making it easier to diagnose errors.

The **KumuluzAPI MCP server** is therefore an ideal solution for development teams looking to enter a new era of development and use AI to improve visibility into their API ecosystem.

As the solution is currently in development, your feedback is essential to further improvements. We welcome your comments, suggestions and questions at [**info@kumuluz.com**](mailto:info@kumuluz.com).
