---
id: "cs-int-013"
slug: "ids-vs-ips"
title: "What is the difference between an IDS and an IPS?"
track: "cybersecurity"
level: "intern"
category: "05-network-security-basics"
difficulty: "Beginner"
tags: ["ids", "ips", "snort", "suricata", "network-security", "monitoring"]
order: 13
summary_answer: "An Intrusion Detection System (IDS) is a passive monitoring tool that analyzes traffic and alerts security teams to suspicious activity without interfering with traffic flow. An Intrusion Prevention System (IPS) is an active inline device that analyzes packets in real-time and automatically drops or blocks malicious traffic before it reaches its destination."
key_takeaways:
  - "IDS = Detection & Alerting (Passive / Out-of-band / SPAN or TAP port)."
  - "IPS = Prevention & Active Blocking (Inline / In-band / Sits directly in the traffic path)."
  - "Detection Approaches: Signature-Based (known attack patterns/rules) vs. Anomaly/Heuristic-Based (deviations from normal baselines)."
interview_tips:
  - "Use the classic analogy: An IDS is a security camera (records and rings an alarm for the guard), while an IPS is an active security guard (physically intercepts and tackles the intruder at the doorway)."
  - "Mention the risk of False Positives with an IPS: Dropping legitimate business traffic (e.g., dropping critical executive emails or payment transactions) can cause business disruptions."
common_follow_ups:
  - "What is the difference between Signature-based detection and Anomaly-based detection?"
  - "What are NIDS (Network-based) and HIDS (Host-based, e.g., Wazuh, OSSEC)?"
---

## Overview

Both **IDS (Intrusion Detection System)** and **IPS (Intrusion Prevention System)** inspect network traffic for malicious signatures, anomalous behaviors, policy violations, and exploit payloads. Their placement on the network and whether they take active blocking measures differentiate them.

```
+-----------------------------------------------------------------------------------+
|                        IDS vs. IPS Deployment Modes                               |
|                                                                                   |
|  [IDS (Passive/Out-of-band)]                                                      |
|   Network Switch ──────( SPAN/Mirror Port )──────> [ IDS Sensor ] ──> [ SIEM Alert]|
|         │                                                                         |
|  [IPS (Active/Inline)]                                                            |
|   Internet ────────> [ IPS Appliance (Inspect & Block) ] ────────> [ Internal LAN] |
+-----------------------------------------------------------------------------------+
```

---

## Detailed Comparison

### 1. Intrusion Detection System (IDS)
* **Placement**: **Passive / Out-of-band**. Connected via a network TAP or Switch Port Analyzer (SPAN / Port Mirroring).
* **Operation**: Receives a duplicate copy of network traffic.
* **Action**: Analyzes traffic against threat signatures. If an exploit or port scan is observed, it sends an alert/log entry to the SOC / SIEM platform.
* **Performance Impact**: Zero latency on live production traffic because packets pass freely while the IDS inspects a mirrored stream.
* **Risk**: High visibility, but **cannot stop an attack in progress**.

### 2. Intrusion Prevention System (IPS)
* **Placement**: **Active / Inline (In-band)**. Packets must physically pass through the IPS device to reach the rest of the network.
* **Operation**: Analyzes packets in real time before forwarding them.
* **Action**: When a malicious signature or abnormal exploit pattern is detected, the IPS drops the malicious packet, resets the TCP connection (`TCP RST`), and bans the offending IP address on upstream firewalls.
* **Performance Impact**: Introduces micro-latencies; if the IPS appliance crashes, network traffic can stall (unless configured for fail-open).
* **Risk**: **False Positives** can inadvertently block critical business operations.

---

## Detection Methodologies

1. **Signature-Based Detection**:
   - Matches traffic against a database of known exploit signatures (e.g., Snort/Suricata rules).
   - Fast and accurate for known exploits; ineffective against novel Zero-Day attacks.
2. **Anomaly / Heuristic-Based Detection**:
   - Establishes a baseline of normal network behavior (e.g., typical bandwidth, active ports, protocol distributions).
   - Flags significant deviations (e.g., a workstation suddenly generating 5,000 outbound DNS requests per minute).
   - Capable of detecting zero-days, but has a higher false-positive rate.

---

## Quick Reference Summary Table

| Feature | Intrusion Detection System (IDS) | Intrusion Prevention System (IPS) |
|---|---|---|
| **Network Position** | Out-of-Band (Passive / Mirror) | Inline (Active / In-path) |
| **Primary Action** | Log, alert, notify SOC | Drop packet, reset TCP, block IP |
| **Latency Impact** | None (Mirrored traffic) | Minor packet processing latency |
| **Response Time** | Reactive (Post-incident alert) | Proactive (Real-time prevention) |
| **False Positive Consequence** | Annoying alert for analysts | Disrupted legitimate user traffic |
| **Open Source Examples** | Zeek, Snort (in alert mode) | Suricata, Snort (in inline mode) |
