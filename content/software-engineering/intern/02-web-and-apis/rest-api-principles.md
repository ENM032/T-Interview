---
id: "swe-int-003"
slug: "rest-api-principles"
title: "What is a RESTful API and what are its key constraints and HTTP methods?"
track: "software-engineering"
level: "intern"
category: "02-web-and-apis"
categoryLabel: "Web & APIs"
difficulty: "Beginner"
tags: ["apis", "rest", "http", "backend", "web-development"]
order: 3
summary_answer: "A RESTful API (Representational State Transfer) is an architectural style for designing networked web services that leverage standard HTTP protocols, stateless communication, standard CRUD methods (GET, POST, PUT, PATCH, DELETE), and resource-oriented URI endpoints."
key_takeaways:
  - "Statelessness: Every request from a client must contain all information needed to understand and process the request; no server-side session memory is retained."
  - "Resource-oriented URIs: Use plural nouns for endpoints (`/api/v1/users`), never verbs (`/api/v1/getUser`)."
  - "HTTP Status Code Ranges: 2xx (Success), 3xx (Redirection), 4xx (Client Error), 5xx (Server Error)."
  - "Idempotency: GET, PUT, DELETE, and HEAD are idempotent (repeating them has no additional state impact); POST is NOT idempotent."
interview_tips:
  - "Clearly explain the difference between PUT (full replacement of an entity) and PATCH (partial update of specific fields)."
  - "Mention standard HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error."
common_follow_ups:
  - "What is the difference between REST, GraphQL, and gRPC?"
  - "What is HATEOAS (Hypermedia As The Engine Of Application State) in REST Level 3?"
---

## Overview

**REST (Representational State Transfer)** is the predominant architectural style for modern web APIs. Understanding how to structure HTTP verbs, status codes, and URI endpoints is a core expectation for engineering interviews.

```
+-------------------------------------------------------------------------------+
|                            RESTful HTTP Methods                               |
|                                                                               |
|  METHOD   |  URI PATTERN      |  ACTION              | IDEMPOTENT | SAFE      |
|  ---------|-------------------|----------------------|------------|-----------|
|  GET      |  /users           |  Retrieve all users  | YES        | YES       |
|  GET      |  /users/123       |  Retrieve user 123   | YES        | YES       |
|  POST     |  /users           |  Create a new user   | NO         | NO        |
|  PUT      |  /users/123       |  Full replace user   | YES        | NO        |
|  PATCH    |  /users/123       |  Partial update user | NO (typ.)  | NO        |
|  DELETE   |  /users/123       |  Delete user 123     | YES        | NO        |
+-------------------------------------------------------------------------------+
```

---

## Core Guiding Principles of REST

1. **Client-Server Separation**: The user interface concerns are separated from data storage concerns, improving portability and scalability across platforms.
2. **Stateless**: Each request contains all context needed. The server never stores client session state between requests.
3. **Cacheability**: Responses must explicitly define themselves as cacheable or non-cacheable to prevent clients from retrieving stale data or overloading servers.
4. **Uniform Interface**: Standardized URIs, standard HTTP methods, and JSON/XML response bodies.
5. **Layered System**: The client cannot tell whether it is connected directly to the end server or an intermediate proxy, load balancer, or CDN.
