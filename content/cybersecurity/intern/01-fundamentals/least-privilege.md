---
id: "cs-int-003"
slug: "least-privilege"
title: "What is the Principle of Least Privilege (PoLP)?"
track: "cybersecurity"
level: "intern"
category: "01-fundamentals"
difficulty: "Beginner"
tags: ["access-control", "identity", "zero-trust", "best-practices"]
order: 3
summary_answer: "The Principle of Least Privilege (PoLP) is a security concept dictating that users, applications, and system processes should only be granted the minimum necessary permissions, access rights, and resources required to perform their specific job functions, and nothing more."
key_takeaways:
  - "Reduces the attack surface: Prevents a compromised account from accessing unrelated systems."
  - "Limits blast radius: An attacker gaining access to an intern account cannot immediately wipe production databases."
  - "Applies across users, service accounts, background jobs, and cloud IAM roles."
interview_tips:
  - "Highlight that PoLP is not just for humans; it applies heavily to service accounts, APIs, and microservices."
  - "Connect PoLP with Just-In-Time (JIT) access and Privileged Access Management (PAM)."
common_follow_ups:
  - "How do you implement PoLP in an AWS/Cloud environment?"
  - "What is privilege creep, and how do organizations prevent it?"
---

## Overview

The **Principle of Least Privilege (PoLP)** is a fundamental security architecture standard. By restricting access to only what is strictly required for a legitimate task, organizations minimize accidental misconfigurations, insider threats, and the lateral movement of external attackers.

```
       [Full Administrative Rights]  <-- High Risk Danger Zone
                    |
          [Departmental Scope]
                    |
      [Role-Specific Access (PoLP)] <-- Ideal Security Posture
                    |
            [Read-Only/JIT]
```

---

## Core Benefits of Least Privilege

1. **Minimizing the Blast Radius**: If a workstation is infected with ransomware or an employee clicks a malicious attachment, the malware inherits the user's rights. Under PoLP, the malware cannot write to critical system directories or sensitive databases.
2. **Mitigating Insider Threats**: Disgruntled or negligent employees cannot access, view, or leak confidential files outside their department.
3. **Regulatory Compliance**: Frameworks such as PCI-DSS, HIPAA, GDPR, and SOC 2 mandate strict granular access controls.
4. **Enhanced Auditability**: Fewer users with elevated rights means cleaner audit trails and easier incident investigation.

---

## Practical Implementation Examples

* **Endpoint Security**: Ensuring corporate laptops do not run with default local administrator privileges.
* **Database Access**: A web application's reporting service should only have `SELECT` permissions on specific tables, never `DROP`, `ALTER`, or `DELETE`.
* **Cloud Infrastructure (IAM)**: Granting an S3 bucket read-only role instead of `AdministratorAccess` to a simple backup lambda function.
* **Just-in-Time (JIT) Elevation**: Using PAM solutions (e.g., CyberArk, Teleport, Azure PIM) where admins request temporary 1-hour elevated privileges with justification and approval.

---

## Key Pitfall to Mention: Privilege Creep

> **Privilege Creep** (or Permission Bloat) occurs when employees change roles within a company over time and accumulate new permissions without their previous permissions being revoked. Regular **access reviews** and automated provisioning/deprovisioning workflows solve this issue.
