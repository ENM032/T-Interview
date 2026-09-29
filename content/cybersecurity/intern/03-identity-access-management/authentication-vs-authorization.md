---
id: "cs-int-007"
slug: "authentication-vs-authorization"
title: "What is the difference between Authentication and Authorization?"
track: "cybersecurity"
level: "intern"
category: "03-identity-access-management"
difficulty: "Beginner"
tags: ["iam", "access-control", "authn-authz", "fundamentals"]
order: 7
summary_answer: "Authentication (AuthN) verifies WHO you are (verifying identity via credentials), whereas Authorization (AuthZ) determines WHAT you are allowed to do (granting permissions and access rights to specific resources)."
key_takeaways:
  - "Authentication (AuthN) = Identity verification ('Are you Alice?')."
  - "Authorization (AuthZ) = Permission check ('Does Alice have permission to delete this database record?')."
  - "Authentication always precedes Authorization: You cannot grant permissions to an unverified identity."
interview_tips:
  - "Use the Airport Analogy: Showing your passport at security is Authentication; your boarding pass assigning you to seat 14B in economy (and not first class) is Authorization."
  - "Differentiate standard protocols: OpenID Connect (OIDC) is for Authentication; OAuth 2.0 is for Authorization."
common_follow_ups:
  - "What is an ID Token vs. an Access Token in modern web applications?"
  - "What are RBAC (Role-Based) and ABAC (Attribute-Based) access controls?"
---

## Overview

**Authentication (AuthN)** and **Authorization (AuthZ)** are two distinct phases of Identity and Access Management (IAM). Confusing the two is a major red flag in technical interviews.

```
       [ Unauthenticated Request ]
                   │
                   ▼
       ┌──────────────────────┐
       │ Authentication (AuthN)│  ──> "Who are you?"
       │ (Password, MFA, Biometrics)
       └──────────┬───────────┘
                  │  (Identity Confirmed)
                  ▼
       ┌──────────────────────┐
       │ Authorization (AuthZ) │  ──> "What can you access?"
       │ (Roles, Scopes, ACLs) │
       └──────────┬───────────┘
                  │  (Access Granted/Denied)
                  ▼
         [ Protected Resource ]
```

---

## Detailed Comparison

### 1. Authentication (AuthN)
* **Question Answered**: *"Who is the user or service?"*
* **Mechanism**: The entity presents credentials (proof of identity), and the system validates them against stored identity records.
* **Methods**:
  - Passwords and PINs.
  - One-Time Passcodes (TOTP via Authenticator apps).
  - Biometrics (TouchID, FaceID).
  - Digital client certificates and hardware security keys (FIDO2 / YubiKey).
* **Key Protocols**: OpenID Connect (OIDC), SAML, Kerberos.

### 2. Authorization (AuthZ)
* **Question Answered**: *"Is this authenticated user permitted to view, create, edit, or delete this specific resource?"*
* **Mechanism**: The system checks permissions, security policies, group memberships, or claims assigned to the identity.
* **Methods**:
  - Role-Based Access Control (RBAC) (e.g., `Admin`, `Editor`, `Viewer`).
  - Attribute-Based Access Control (ABAC) (e.g., allow access if user is in `Engineering` AND `time < 6 PM` AND `IP is corporate VPN`).
  - Access Control Lists (ACLs).
* **Key Protocols / Standards**: OAuth 2.0 (access tokens/scopes), XACML.

---

## Quick Reference Summary Table

| Characteristic | Authentication (AuthN) | Authorization (AuthZ) |
|---|---|---|
| **Core Focus** | Identity | Permissions & Privileges |
| **Order of Execution** | Step 1 (Occurs first) | Step 2 (Occurs after authentication) |
| **Input Data** | Username + Password, MFA token, Passkey | Role, Token Scopes, Policy Rules |
| **Failure Result** | 401 Unauthorized (Unauthenticated) | 403 Forbidden |
| **Web Standard** | OpenID Connect (OIDC) | OAuth 2.0 |
