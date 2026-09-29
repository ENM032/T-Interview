---
id: "cs-int-012"
slug: "firewalls-functionality"
title: "What is a Firewall and what does it do?"
track: "cybersecurity"
level: "intern"
category: "05-network-security-basics"
difficulty: "Beginner"
tags: ["network-security", "firewalls", "packet-filtering", "ngfw", "osi-model"]
order: 12
summary_answer: "A firewall is a network security device or software that monitors, filters, and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a protective barrier between a trusted internal network and an untrusted external network (such as the Internet)."
key_takeaways:
  - "Default Deny Rule: A best-practice firewall policy where all traffic is blocked unless explicitly permitted by an allow rule."
  - "Packet-Filtering (Stateless): Checks source/destination IP, port, and protocol in individual packets (Layer 3 & 4)."
  - "Stateful Inspection: Tracks active connection states (SYN, ACK, ESTABLISHED) to ensure incoming packets are legitimate replies to outbound requests."
  - "Next-Gen Firewall (NGFW): Inspects application layer payloads (Layer 7), includes deep packet inspection (DPI), integrated IDS/IPS, and TLS decryption."
interview_tips:
  - "Highlight the evolution of firewalls: Stateless Packet Filters -> Stateful Inspection -> Next-Generation Firewalls (NGFW) & Web Application Firewalls (WAF)."
  - "Mention the difference between Network Firewalls (appliance-based protecting subnets) and Host-Based Firewalls (software running on individual endpoints, like Windows Defender Firewall or iptables)."
common_follow_ups:
  - "What is the difference between a Network Firewall and a Web Application Firewall (WAF)?"
  - "Why is a stateful firewall superior to a stateless packet filter?"
---

## Overview

A **Firewall** is the cornerstone of network perimeter security. It inspects network packets attempting to cross boundaries and decides whether to **ALLOW**, **DROP**, or **REJECT** the packet based on defined access control lists (ACLs).

```
[ Untrusted Internet ] ──( Inbound Packets )──> [ FIREWALL ] ──( Allowed Traffic )──> [ Trusted Internal LAN ]
                                                     │
                                               [ Dropped/Logged ]
```

---

## Types of Firewalls

### 1. Stateless Packet-Filtering Firewalls (Layer 3 & 4)
* **How It Works**: Evaluates each packet in total isolation. Checks the IP header and transport header: Source IP, Destination IP, Source Port, Destination Port, and Protocol (TCP/UDP/ICMP).
* **Limitations**: Has no memory of past packets. It cannot determine if an inbound packet is a response to a legitimate previous outbound request.

### 2. Stateful Inspection Firewalls (Layer 3 & 4)
* **How It Works**: Maintains a **State Table** recording active TCP connections and UDP flows.
* **Advantage**: Automatically allows inbound return traffic matching an established outbound connection without needing wide-open inbound ports.

### 3. Next-Generation Firewalls (NGFW) (Layer 7 - Application Level)
* **How It Works**: Performs **Deep Packet Inspection (DPI)** beyond port numbers. It can identify the actual application payload regardless of what port is used (e.g., detecting BitTorrent running over port 80/443).
* **Integrated Features**:
  - Integrated IPS/IDS engines.
  - SSL/TLS traffic decryption and inspection.
  - Threat intelligence feed integration and malware sandboxing.

### 4. Web Application Firewalls (WAF) (Layer 7 Specialized)
* **How It Works**: Deployed specifically in front of web applications and APIs. Inspects HTTP/HTTPS traffic to prevent application-layer attacks such as SQL Injection (SQLi), Cross-Site Scripting (XSS), and CSRF.

---

## Firewall Rules: The "Implicit Deny" Rule

In any enterprise firewall configuration, rules are evaluated from **top to bottom** until the first match occurs. The final rule at the very bottom is always:

```text
Rule 999:  SOURCE: Any  |  DEST: Any  |  PORT: Any  |  ACTION: DENY / DROP (Implicit Deny)
```

This ensures that any traffic not explicitly authorized is automatically blocked by default.
