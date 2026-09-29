---
id: "cs-int-001"
slug: "cia-triad"
title: "What is the CIA Triad?"
track: "cybersecurity"
level: "intern"
category: "01-fundamentals"
difficulty: "Beginner"
tags: ["core-concepts", "infosec", "governance", "security-models"]
order: 1
summary_answer: "The CIA Triad is the foundational model of information security, representing Confidentiality (protecting data from unauthorized access), Integrity (ensuring data accuracy and preventing unauthorized tampering), and Availability (guaranteeing systems and data are accessible to authorized users when needed)."
key_takeaways:
  - "Confidentiality: Protects against unauthorized disclosure (e.g., encryption, RBAC, MFA)."
  - "Integrity: Protects against unauthorized modification (e.g., hashing, digital signatures, version control)."
  - "Availability: Protects against downtime and disruption (e.g., redundancy, backups, DDoS mitigation)."
interview_tips:
  - "Explain that security decisions often balance trade-offs between these three pillars and user convenience."
  - "Mention the opposite model (DAD Triad: Disclosure, Alteration, Destruction) if you want to impress the interviewer."
common_follow_ups:
  - "Which pillar takes priority in a healthcare environment versus a high-frequency trading platform?"
  - "How do ransomware attacks target the CIA triad?"
---

## Overview

The **CIA Triad** serves as the core benchmark for designing, evaluating, and implementing information security controls in any organization. Every security policy, control, and architectural design maps directly to one or more of these three pillars.

```
       [Confidentiality]
          /         \
         /   Security\
        /     Balance \
[Integrity] ——————— [Availability]
```

---

## The Three Pillars

### 1. Confidentiality
* **Definition**: Ensuring that sensitive information is accessible solely to authorized individuals, entities, or automated processes.
* **Threats**: Shoulder surfing, data breaches, eavesdropping, credential theft, misconfigured permissions.
* **Security Controls**:
  - End-to-end and at-rest encryption (AES, TLS).
  - Role-Based Access Control (RBAC) and Least Privilege enforcement.
  - Multi-Factor Authentication (MFA) and data classification policies.

### 2. Integrity
* **Definition**: Maintaining the consistency, accuracy, and trustworthiness of data throughout its entire lifecycle. Data must not be altered, forged, or deleted by unauthorized parties.
* **Threats**: Man-in-the-Middle (MitM) alterations, SQL injection, unauthorized file modifications, bit rot.
* **Security Controls**:
  - Cryptographic hash functions (SHA-256) for checksum verification.
  - Digital signatures and non-repudiation controls.
  - Audit logging, file integrity monitoring (FIM), and database transaction constraints.

### 3. Availability
* **Definition**: Ensuring that systems, networks, applications, and data remain reliably accessible to authorized users when needed.
* **Threats**: Distributed Denial of Service (DDoS) attacks, hardware failures, power outages, ransomware encryption.
* **Security Controls**:
  - High availability clusters, load balancing, and failover mechanisms.
  - Regular automated backups with off-site replication and tested recovery plans.
  - Redundant power supplies (UPS/generators) and disaster recovery runbooks.

---

## Practical Interview Scenario

> **Interviewer**: *"If a ransomware attack encrypts a hospital's patient database, which pillars of the CIA triad are compromised?"*
>
> **Ideal Answer**:
> *"Primarily **Availability**, because medical staff can no longer access vital patient records to provide treatment. If the attackers also exfiltrate the records to threaten public release (double extortion), **Confidentiality** is breached. If the encryption process corrupts or alters files during recovery, **Integrity** is also compromised."*
