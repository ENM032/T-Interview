---
id: "cs-int-014"
slug: "ports-and-protocols-basics"
title: "What are Common Security Network Ports & Protocols you should know?"
track: "cybersecurity"
level: "intern"
category: "05-network-security-basics"
difficulty: "Beginner"
tags: ["networking", "ports", "protocols", "tcp-ip", "fundamentals"]
order: 14
summary_answer: "Standard network ports are numerical identifiers (0-65535) used by transport protocols (TCP/UDP) to route traffic to specific application services. Security professionals must memorize key standard ports, identify insecure plaintext protocols (e.g., HTTP, Telnet, FTP), and advocate for their encrypted counterparts (HTTPS, SSH, SFTP)."
key_takeaways:
  - "TCP = Connection-oriented, guaranteed delivery (3-way handshake: SYN, SYN-ACK, ACK)."
  - "UDP = Connectionless, faster with no guaranteed delivery (DNS, DHCP, streaming)."
  - "Insecure vs. Secure pairs: HTTP (80) vs. HTTPS (443), Telnet (23) vs. SSH (22), FTP (21) vs. SFTP (22), DNS (53) vs. DoH/DoT."
interview_tips:
  - "Expect rapid-fire port questions during entry-level technical phone screens (e.g., 'What port does SSH use? What port does DNS use?')."
  - "Explain WHY certain ports should never be exposed to the public internet (such as RDP 3389, SMB 445, or Telnet 23)."
common_follow_ups:
  - "Explain the TCP 3-Way Handshake step by step."
  - "What is the difference between TCP port scanning and a SYN stealth scan (half-open scan)?"
---

## Overview

Understanding **TCP/IP networking**, protocol mechanics, and common port assignments is essential for analyzing packet captures, configuring firewall rules, and investigating network alerts.

```
       [ Client ] ────────( SYN )────────> [ Server (Port 443) ]
       [ Client ] <─────( SYN-ACK )─────── [ Server ]
       [ Client ] ────────( ACK )────────> [ Server ]
                     [ Connection Established ]
```

---

## Must-Know Port & Protocol Reference List

### 1. Web & Application Protocols
* **Port 80 (HTTP)**: Unencrypted plaintext web traffic. Vulnerable to eavesdropping and credential sniffing.
* **Port 443 (HTTPS)**: Secure web traffic encrypted via TLS.
* **Port 53 (DNS)**: Domain Name System (UDP/TCP). Resolves human-readable domain names (`example.com`) to IP addresses.
* **Port 67/68 (DHCP)**: Dynamic Host Configuration Protocol (UDP). Automatically assigns IP addresses to client devices.

### 2. Remote Access & Management
* **Port 22 (SSH / SFTP)**: Secure Shell & Secure File Transfer. Encrypted remote command-line access and file operations.
* **Port 23 (Telnet)**: Legacy plaintext remote terminal. **Critical security vulnerability if exposed.**
* **Port 3389 (RDP)**: Microsoft Remote Desktop Protocol. High-value target for brute-force attacks and ransomware initial access; should never face the public internet without a VPN/Zero-Trust gateway.

### 3. File Transfer & Sharing
* **Port 20/21 (FTP)**: File Transfer Protocol (Plaintext credentials).
* **Port 445 (SMB)**: Server Message Block. Used for Windows file sharing and IPC. Infamously exploited by the EternalBlue exploit (WannaCry).

### 4. Email & Directory Services
* **Port 25 (SMTP)**: Simple Mail Transfer Protocol for email routing.
* **Port 110 (POP3)** / **Port 995 (POP3S)**: Email retrieval.
* **Port 143 (IMAP)** / **Port 993 (IMAPS)**: Modern synchronized email access.
* **Port 389 (LDAP)** / **Port 636 (LDAPS)**: Lightweight Directory Access Protocol (Active Directory user lookups).
* **Port 88 (Kerberos)**: Windows Active Directory authentication protocol.

---

## Insecure vs. Modern Secure Equivalents

| Insecure Protocol (Cleartext) | Port | Secure Replacement (Encrypted) | Secure Port |
|---|---|---|---|
| **Telnet** | 23 | **SSH (Secure Shell)** | 22 |
| **HTTP** | 80 | **HTTPS (TLS)** | 443 |
| **FTP** | 20/21 | **SFTP / FTPS** | 22 / 990 |
| **LDAP** | 389 | **LDAPS** | 636 |
| **POP3** | 110 | **POP3S** | 995 |
| **IMAP** | 143 | **IMAPS** | 993 |
