---
id: "cs-int-016"
slug: "osi-model-7-layers"
title: "Explain the OSI Model (7 Layers) and how security applies to each layer."
track: "cybersecurity"
level: "intern"
category: "05-network-security-basics"
categoryLabel: "Network Security"
difficulty: "Beginner"
tags: ["networking", "osi-model", "tcp-ip", "protocols", "network-security"]
order: 16
summary_answer: "The OSI (Open Systems Interconnection) model is a 7-layer conceptual framework describing how data moves across a network from an application to physical signals: Physical (1), Data Link (2), Network (3), Transport (4), Session (5), Presentation (6), and Application (7). Security controls and attacks exist at every single layer."
key_takeaways:
  - "Mnemonic: 'Please Do Not Throw Sausage Pizza Away' (Layers 1 through 7) or 'All People Seem To Need Data Processing' (Layers 7 through 1)."
  - "Layer 7 (Application): HTTP/HTTPS, DNS, SSH, SMTP — Attacks: SQLi, XSS, Phishing — Controls: WAF, Input validation."
  - "Layer 4 (Transport): TCP/UDP, Ports — Attacks: SYN flood, Port scans — Controls: Stateful firewalls, TLS."
  - "Layer 3 (Network): IP, Routing, ICMP — Attacks: IP spoofing, Ping of Death — Controls: Routers, Packet filtering, IPSec."
  - "Layer 2 (Data Link): MAC addresses, Ethernet switches — Attacks: ARP poisoning, MAC flooding — Controls: Port security, 802.1X, DAI."
interview_tips:
  - "Always pair each layer with its standard Protocol Data Unit (PDU): Bits (L1) -> Frames (L2) -> Packets (L3) -> Segments (L4) -> Data (L5-L7)."
  - "Interviewers love asking: 'At which layer does a standard router operate vs. a switch vs. a WAF?' (Router = L3, Switch = L2, WAF = L7)."
common_follow_ups:
  - "What is the difference between the OSI 7-Layer model and the TCP/IP 4-Layer model?"
  - "Explain how Encapsulation and Decapsulation work as data travels down and up the stack."
---

## Overview

The **OSI (Open Systems Interconnection) Model** standardizes network communications into seven distinct abstraction layers. Understanding the OSI model is essential for troubleshooting connectivity issues, isolating security attacks, and configuring appropriate defensive controls.

```
       [ 7 ] APPLICATION   <── HTTP, DNS, SSH, FTP, SMTP    (Data)
       [ 6 ] PRESENTATION  <── TLS/SSL, JPEG, ASCII, JSON   (Data)
       [ 5 ] SESSION       <── RPC, NetBIOS, Sockets        (Data)
       [ 4 ] TRANSPORT     <── TCP, UDP (Port Addressing)   (Segments)
       [ 3 ] NETWORK       <── IP, ICMP, Routers, BGP       (Packets)
       [ 2 ] DATA LINK     <── Ethernet, MAC, Switches      (Frames)
       [ 1 ] PHYSICAL      <── Cables, Fiber, Radio (Wi-Fi) (Bits)
```

---

## The 7 Layers: Function, PDUs, and Security Controls

### Layer 7: Application Layer
* **Function**: Directly interfaces with user applications (browsers, email clients).
* **Protocols**: HTTP/HTTPS, DNS, SSH, FTP, SMTP, SNMP.
* **Security Threats**: SQL Injection, Cross-Site Scripting (XSS), CSRF, HTTP floods, DNS poisoning.
* **Defensive Controls**: Web Application Firewalls (WAF), Secure Coding, Input Sanitization, API Gateways.

### Layer 6: Presentation Layer
* **Function**: Translates, formats, compresses, and encrypts/decrypts data into standard representations.
* **Protocols / Formats**: TLS/SSL, ASCII, Unicode, JPEG, JSON, XML.
* **Security Role**: Cryptographic negotiation (TLS handshake), certificate validation, data serialization security.

### Layer 5: Session Layer
* **Function**: Establishes, manages, maintains, and terminates communication sessions between local and remote applications.
* **Protocols**: NetBIOS, RPC, PPTP, SOCKS.
* **Security Role**: Session hijacking prevention, token expiration, mutual session termination.

### Layer 4: Transport Layer
* **Function**: End-to-end data transfer management, flow control, error checking, and port multiplexing.
* **PDU**: **Segment** (TCP) or **Datagram** (UDP).
* **Protocols**: TCP (connection-oriented, reliable) and UDP (connectionless, fast).
* **Security Threats**: TCP SYN Flood (DDoS), Port Scanning, Session Hijacking.
* **Defensive Controls**: Stateful Inspection Firewalls, SYN cookies, Rate limiting.

### Layer 3: Network Layer
* **Function**: Logical addressing (IPv4, IPv6) and path determination (routing packets across different networks).
* **PDU**: **Packet**.
* **Devices / Protocols**: Routers, Layer 3 Switches, IP, ICMP, IPSec, BGP, OSPF.
* **Security Threats**: IP Spoofing, ICMP Ping Floods, Man-in-the-Middle (MitM) route hijacking.
* **Defensive Controls**: Access Control Lists (ACLs), Router hardening, IPSec VPNs, DDoS scrubbing centers.

### Layer 2: Data Link Layer
* **Function**: Physical node-to-node data transfer across the local network segment using hardware MAC addresses.
* **PDU**: **Frame**.
* **Devices / Protocols**: Network Interface Cards (NIC), Layer 2 Switches, Ethernet, ARP, VLANs (802.1Q).
* **Security Threats**: ARP Cache Poisoning, MAC Address Flooding, VLAN Hopping, Rogue DHCP.
* **Defensive Controls**: Dynamic ARP Inspection (DAI), Port Security (MAC limit), 802.1X Network Access Control, DHCP Snooping.

### Layer 1: Physical Layer
* **Function**: Transmits unstructured raw bitstreams over physical mediums (copper wires, fiber optics, radio waves).
* **PDU**: **Bit**.
* **Hardware**: RJ45 cables, fiber transceivers, Wi-Fi antennas, repeaters, hubs.
* **Security Threats**: Cable tapping, wire snips, physical tampering, Wi-Fi jamming, power disruption.
* **Defensive Controls**: Locked server racks, physical access badges, shielded cabling (STP), Faraday cages, redundant power (UPS).

---

## The Encapsulation Process

When sending data across a network, each layer wraps the payload from the layer above with its own header:

$$\text{Data} \xrightarrow{\text{L4}} [\text{TCP Header} | \text{Data}] \xrightarrow{\text{L3}} [\text{IP Header} | \text{TCP} | \text{Data}] \xrightarrow{\text{L2}} [\text{Ethernet Header} | \text{IP} | \text{TCP} | \text{Data} | \text{FCS Trailer}]$$
