---
id: "cs-int-005"
slug: "encryption-hashing-encoding"
title: "What is the difference between Encryption, Hashing, and Encoding?"
track: "cybersecurity"
level: "intern"
category: "02-cryptography-basics"
difficulty: "Beginner"
tags: ["cryptography", "encoding", "hashing", "encryption", "fundamentals"]
order: 5
summary_answer: "Encryption transforms plaintext into unreadable ciphertext using a secret key to ensure confidentiality (reversible with the key); Hashing produces a fixed-size unique digital fingerprint of data to ensure integrity (one-way and irreversible); Encoding transforms data into another format for interoperability or transmission (not a security mechanism, reversible without keys)."
key_takeaways:
  - "Encryption = Confidentiality (Two-way with a cryptographic key). Examples: AES, RSA."
  - "Hashing = Integrity & Verification (One-way mathematical digest, irreversible). Examples: SHA-256, bcrypt."
  - "Encoding = Data Usability/Compatibility (No security or secrets). Examples: Base64, URL encoding, ASCII."
interview_tips:
  - "Explicitly warn that 'Base64 is NOT encryption' — interviewers love testing if interns realize encoding provides zero confidentiality."
  - "Mention the use of 'salting' when talking about password hashing to resist rainbow table attacks."
common_follow_ups:
  - "Why shouldn't you use standard SHA-256 for storing user passwords in a database?"
  - "What is a hash collision, and why did MD5 and SHA-1 get deprecated?"
---

## Overview

Candidates frequently mix up **Encryption**, **Hashing**, and **Encoding**. Explaining the distinct purpose, reversibility, and key requirements of each will demonstrate solid foundational knowledge.

```
+-------------------------------------------------------------------------------+
|                      Comparison at a Glance                                   |
|                                                                               |
|  ENCODING    : Plaintext  ───(Algorithm)───> Encoded Data  (Reversible, No Key) |
|  ENCRYPTION  : Plaintext  ───(Algorithm + Key)───> Ciphertext (Two-way with Key)|
|  HASHING     : Plaintext  ───(One-Way Math)───> Fixed Digest (Irreversible)     |
+-------------------------------------------------------------------------------+
```

---

## Detailed Comparison

### 1. Encryption
* **Primary Purpose**: Confidentiality and privacy.
* **Mechanism**: Uses mathematical algorithms and secret cryptographic keys. Only those possessing the corresponding decryption key can read the original data.
* **Reversibility**: **Two-way**.
* **Common Examples**:
  - AES-256 (Symmetric) for hard drive and file encryption.
  - RSA & ECC (Asymmetric) for key exchanges and HTTPS certificates.

### 2. Hashing
* **Primary Purpose**: Data integrity, verification, and password storage.
* **Mechanism**: Converts input of any length into a deterministic, fixed-length string (digest). It is computationally infeasible to invert (find the original input from the hash) or find two different inputs that yield the same hash (collision resistance).
* **Reversibility**: **One-way (Irreversible)**.
* **Common Examples**:
  - SHA-256 / SHA-3 for file checksums and digital signatures.
  - Argon2id, bcrypt, PBKDF2 for salted password storage.

### 3. Encoding
* **Primary Purpose**: Data compatibility, safe transmission across networks, and format translation.
* **Mechanism**: Publicly known algorithms without any secret keys or passwords. Anyone who knows the format can instantly decode it.
* **Reversibility**: **Reversible without a key**.
* **Common Examples**:
  - Base64 (embedding binary images in JSON or email attachments).
  - URL / Percent-Encoding (e.g., `%20` for spaces in browser URLs).
  - ASCII, Unicode / UTF-8.

---

## Quick Reference Summary Table

| Attribute | Encryption | Hashing | Encoding |
|---|---|---|---|
| **Goal** | Confidentiality | Integrity & Non-repudiation | Data compatibility |
| **Requires Key?** | **Yes** (Secret/Private Key) | **No** (Optional HMAC uses key) | **No** |
| **Reversible?** | **Yes** (with key) | **No** (One-way) | **Yes** (Freely reversible) |
| **Output Size** | Proportional to input | **Fixed length** (e.g., 256 bits) | Proportional to input |
| **Example** | `AES-GCM`, `RSA-4096` | `SHA-256`, `Argon2` | `Base64`, `URL Encode` |
