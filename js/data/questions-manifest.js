/**
 * T-Interview Multi-Track Questions Manifest
 * Structured across professions and experience levels
 */

export const TRACKS = [
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "project-management", label: "Project Management" }
];

export const LEVELS = [
  { id: "intern", label: "Intern" },
  { id: "junior", label: "Junior" },
  { id: "intermediate", label: "Intermediate" },
  { id: "senior", label: "Senior" }
];

export const ALL_QUESTIONS = [
  // ==========================================
  // CYBERSECURITY - INTERN
  // ==========================================
  {
    id: "cs-int-001",
    slug: "cia-triad",
    title: "What is the CIA Triad?",
    track: "cybersecurity",
    level: "intern",
    category: "01-fundamentals",
    categoryLabel: "Fundamentals",
    difficulty: "Beginner",
    tags: ["core-concepts", "infosec", "governance", "security-models"],
    order: 1,
    summaryAnswer: "The CIA Triad is the foundational model of information security, representing Confidentiality (protecting data from unauthorized access), Integrity (ensuring data accuracy and preventing unauthorized tampering), and Availability (guaranteeing systems and data are accessible to authorized users when needed).",
    keyTakeaways: [
      "Confidentiality: Protects against unauthorized disclosure (e.g., encryption, RBAC, MFA).",
      "Integrity: Protects against unauthorized modification (e.g., hashing, digital signatures, version control).",
      "Availability: Protects against downtime and disruption (e.g., redundancy, backups, DDoS mitigation)."
    ],
    interviewTips: [
      "Explain that security decisions often balance trade-offs between these three pillars and user convenience.",
      "Mention the opposite model (DAD Triad: Disclosure, Alteration, Destruction) if you want to impress the interviewer."
    ],
    markdownPath: "content/cybersecurity/intern/01-fundamentals/cia-triad.md"
  },
  {
    id: "cs-int-002",
    slug: "threat-vulnerability-risk",
    title: "What is the difference between a Threat, Vulnerability, and Risk?",
    track: "cybersecurity",
    level: "intern",
    category: "01-fundamentals",
    categoryLabel: "Fundamentals",
    difficulty: "Beginner",
    tags: ["risk-management", "fundamentals", "infosec-theory"],
    order: 2,
    summaryAnswer: "A vulnerability is a weakness in a system; a threat is an external entity or event capable of exploiting that weakness; and risk is the mathematical or practical probability and operational impact of a threat successfully exploiting a vulnerability.",
    keyTakeaways: [
      "Vulnerability = The flaw or weakness (e.g., an unpatched software bug, open door).",
      "Threat = The danger or actor capable of exploiting it (e.g., hacker, malware, natural disaster).",
      "Risk = The potential loss or damage when a threat meets a vulnerability (Risk = Threat × Vulnerability × Impact)."
    ],
    interviewTips: [
      "Use a tangible everyday analogy first, then tie it to a technical cybersecurity example.",
      "Highlight that you cannot eliminate all threats, so security teams focus on reducing vulnerabilities and mitigating risk impact."
    ],
    markdownPath: "content/cybersecurity/intern/01-fundamentals/threat-vulnerability-risk.md"
  },
  {
    id: "cs-int-003",
    slug: "least-privilege",
    title: "What is the Principle of Least Privilege (PoLP)?",
    track: "cybersecurity",
    level: "intern",
    category: "01-fundamentals",
    categoryLabel: "Fundamentals",
    difficulty: "Beginner",
    tags: ["access-control", "identity", "zero-trust", "best-practices"],
    order: 3,
    summaryAnswer: "The Principle of Least Privilege (PoLP) is a security concept dictating that users, applications, and system processes should only be granted the minimum necessary permissions, access rights, and resources required to perform their specific job functions, and nothing more.",
    keyTakeaways: [
      "Reduces the attack surface: Prevents a compromised account from accessing unrelated systems.",
      "Limits blast radius: An attacker gaining access to an intern account cannot immediately wipe production databases.",
      "Applies across users, service accounts, background jobs, and cloud IAM roles."
    ],
    interviewTips: [
      "Highlight that PoLP is not just for humans; it applies heavily to service accounts, APIs, and microservices.",
      "Connect PoLP with Just-In-Time (JIT) access and Privileged Access Management (PAM)."
    ],
    markdownPath: "content/cybersecurity/intern/01-fundamentals/least-privilege.md"
  },
  {
    id: "cs-int-004",
    slug: "defense-in-depth",
    title: "What is Defense in Depth (Layered Security)?",
    track: "cybersecurity",
    level: "intern",
    category: "01-fundamentals",
    categoryLabel: "Fundamentals",
    difficulty: "Beginner",
    tags: ["architecture", "layered-security", "strategy", "fundamentals"],
    order: 4,
    summaryAnswer: "Defense in Depth is a cybersecurity strategy that employs multiple redundant layers of defense and defensive mechanisms throughout an IT infrastructure, so that if one security control fails, subsequent layers continue to protect the critical assets.",
    keyTakeaways: [
      "No single security measure is 100% foolproof.",
      "Combines physical, technical, administrative, and perimeter controls.",
      "Forces an attacker to overcome diverse, independent barriers, dramatically increasing attack cost and detection likelihood."
    ],
    interviewTips: [
      "Use the medieval castle analogy (moat, outer wall, portcullis, inner keep), then map to network layers.",
      "Emphasize that prevention will eventually fail, making detection and containment crucial."
    ],
    markdownPath: "content/cybersecurity/intern/01-fundamentals/defense-in-depth.md"
  },
  {
    id: "cs-int-005",
    slug: "encryption-hashing-encoding",
    title: "What is the difference between Encryption, Hashing, and Encoding?",
    track: "cybersecurity",
    level: "intern",
    category: "02-cryptography-basics",
    categoryLabel: "Cryptography",
    difficulty: "Beginner",
    tags: ["cryptography", "encoding", "hashing", "encryption", "fundamentals"],
    order: 5,
    summaryAnswer: "Encryption transforms plaintext into unreadable ciphertext using a secret key to ensure confidentiality (reversible with the key); Hashing produces a fixed-size unique digital fingerprint of data to ensure integrity (one-way and irreversible); Encoding transforms data into another format for interoperability or transmission (not a security mechanism, reversible without keys).",
    keyTakeaways: [
      "Encryption = Confidentiality (Two-way with a cryptographic key). Examples: AES, RSA.",
      "Hashing = Integrity & Verification (One-way mathematical digest, irreversible). Examples: SHA-256, bcrypt.",
      "Encoding = Data Usability/Compatibility (No security or secrets). Examples: Base64, URL encoding, ASCII."
    ],
    interviewTips: [
      "Explicitly warn that 'Base64 is NOT encryption'.",
      "Mention the use of 'salting' when talking about password hashing to resist rainbow table attacks."
    ],
    markdownPath: "content/cybersecurity/intern/02-cryptography-basics/encryption-hashing-encoding.md"
  },
  {
    id: "cs-int-006",
    slug: "symmetric-vs-asymmetric-encryption",
    title: "What is the difference between Symmetric and Asymmetric Encryption?",
    track: "cybersecurity",
    level: "intern",
    category: "02-cryptography-basics",
    categoryLabel: "Cryptography",
    difficulty: "Beginner",
    tags: ["cryptography", "ssl-tls", "keys", "pki", "algorithms"],
    order: 6,
    summaryAnswer: "Symmetric encryption uses a single shared secret key for both encryption and decryption, making it fast and efficient for bulk data. Asymmetric encryption uses a mathematically linked key pair (a public key for encryption and a private key for decryption), solving the key distribution problem at the cost of being computationally slower.",
    keyTakeaways: [
      "Symmetric: 1 key for both operations. Very fast. Challenge: securely sharing key.",
      "Asymmetric: 2 keys (Public + Private). Slower. Public key freely shared.",
      "Hybrid Cryptography: Modern protocols (like TLS/HTTPS) combine both."
    ],
    interviewTips: [
      "Mention how HTTPS / TLS uses a hybrid approach.",
      "Explain that the private key must NEVER leave the host or be shared."
    ],
    markdownPath: "content/cybersecurity/intern/02-cryptography-basics/symmetric-vs-asymmetric-encryption.md"
  },
  {
    id: "cs-int-007",
    slug: "authentication-vs-authorization",
    title: "What is the difference between Authentication and Authorization?",
    track: "cybersecurity",
    level: "intern",
    category: "03-identity-access-management",
    categoryLabel: "Identity & Access",
    difficulty: "Beginner",
    tags: ["iam", "access-control", "authn-authz", "fundamentals"],
    order: 7,
    summaryAnswer: "Authentication (AuthN) verifies WHO you are (verifying identity via credentials), whereas Authorization (AuthZ) determines WHAT you are allowed to do (granting permissions and access rights to specific resources).",
    keyTakeaways: [
      "Authentication (AuthN) = Identity verification ('Are you Alice?').",
      "Authorization (AuthZ) = Permission check ('Can Alice delete this record?').",
      "Authentication always precedes Authorization."
    ],
    interviewTips: [
      "Use the Airport Analogy: Passport = Authentication; Boarding pass seat assignment = Authorization.",
      "Differentiate standards: OIDC is for AuthN; OAuth 2.0 is for AuthZ."
    ],
    markdownPath: "content/cybersecurity/intern/03-identity-access-management/authentication-vs-authorization.md"
  },
  {
    id: "cs-int-008",
    slug: "mfa-benefits",
    title: "What is Multi-Factor Authentication (MFA) and why is it useful?",
    track: "cybersecurity",
    level: "intern",
    category: "03-identity-access-management",
    categoryLabel: "Identity & Access",
    difficulty: "Beginner",
    tags: ["iam", "mfa", "2fa", "authentication", "zero-trust"],
    order: 8,
    summaryAnswer: "Multi-Factor Authentication (MFA) is a security mechanism requiring users to provide two or more distinct authentication factors from different categories before gaining access. It dramatically reduces account takeovers by ensuring a stolen password alone is insufficient to breach an account.",
    keyTakeaways: [
      "The 3 Factors: Something you know (Knowledge), Something you have (Possession), Something you are (Inherence).",
      "Two passwords is NOT MFA (that is two things you know).",
      "MFA blocks up to 99% of automated credential stuffing attacks."
    ],
    interviewTips: [
      "Categorize the 3 factors accurately.",
      "Mention SMS OTP vs. Authenticator App TOTP vs. FIDO2 Passkeys."
    ],
    markdownPath: "content/cybersecurity/intern/03-identity-access-management/mfa-benefits.md"
  },
  {
    id: "cs-int-009",
    slug: "phishing-recognition",
    title: "What is Phishing and how would you recognize it?",
    track: "cybersecurity",
    level: "intern",
    category: "04-threats-and-malware",
    categoryLabel: "Threats & Malware",
    difficulty: "Beginner",
    tags: ["threats", "phishing", "social-engineering", "email-security"],
    order: 9,
    summaryAnswer: "Phishing is a social engineering attack where an attacker impersonates a trusted entity via email, SMS, or messaging apps to trick victims into revealing sensitive credentials, transferring money, or executing malware.",
    keyTakeaways: [
      "Phishing relies on psychological manipulation (urgency, fear, curiosity).",
      "Red flags: mismatched sender domain, fake urgency, generic greetings, suspicious links.",
      "Email standards: SPF, DKIM, and DMARC prevent domain spoofing."
    ],
    interviewTips: [
      "Break phishing into variations: Spear Phishing, Whaling, Smishing, Vishing.",
      "Mention practical verification: Inspect headers, hover over links, verify out-of-band."
    ],
    markdownPath: "content/cybersecurity/intern/04-threats-and-malware/phishing-recognition.md"
  },
  {
    id: "cs-int-010",
    slug: "malware-types",
    title: "What is Malware? Explain Viruses, Worms, Trojans, and Ransomware.",
    track: "cybersecurity",
    level: "intern",
    category: "04-threats-and-malware",
    categoryLabel: "Threats & Malware",
    difficulty: "Beginner",
    tags: ["malware", "threats", "viruses", "worms", "ransomware", "trojans"],
    order: 10,
    summaryAnswer: "Malware is an umbrella term for any software intentionally designed to cause damage, steal data, or gain unauthorized access. A Virus requires human action and attaches to a host file; a Worm self-propagates across networks autonomously; a Trojan disguises itself as legitimate software; and Ransomware encrypts user files demanding ransom.",
    keyTakeaways: [
      "Virus = Requires host file + human interaction to spread.",
      "Worm = Standalone program; self-replicates across networks without human interaction.",
      "Trojan = Deceptively disguised as benign software with hidden payload.",
      "Ransomware = Encrypts system assets for extortion."
    ],
    interviewTips: [
      "Highlight propagation difference: Virus requires human execution; Worm is autonomous.",
      "Mention Spyware, Rootkits, and Keyloggers."
    ],
    markdownPath: "content/cybersecurity/intern/04-threats-and-malware/malware-types.md"
  },
  {
    id: "cs-int-011",
    slug: "social-engineering-vectors",
    title: "What is Social Engineering? Explain Tailgating, Baiting, Pretexting, and Shoulder Surfing.",
    track: "cybersecurity",
    level: "intern",
    category: "04-threats-and-malware",
    categoryLabel: "Threats & Malware",
    difficulty: "Beginner",
    tags: ["social-engineering", "human-security", "physical-security", "threats"],
    order: 11,
    summaryAnswer: "Social engineering is the psychological manipulation of human beings into performing actions or divulging confidential information. Common attack vectors include Tailgating (unauthorized physical entry), Baiting (leaving infected media), Pretexting (invented backstory), and Shoulder Surfing (spying on screens/keypads).",
    keyTakeaways: [
      "Humans are frequently described as the weakest link in the security chain.",
      "Tailgating = Physical security bypass by following an employee through a badge door.",
      "Baiting = Dropping malware-infected USB drives.",
      "Pretexting = Establishing trust through an elaborate fake identity."
    ],
    interviewTips: [
      "Emphasize that technology cannot stop an attacker if an employee holds the door or plugs in a rogue USB.",
      "Mention clean desk policies, badge enforcement, and privacy screens."
    ],
    markdownPath: "content/cybersecurity/intern/04-threats-and-malware/social-engineering-vectors.md"
  },
  {
    id: "cs-int-012",
    slug: "firewalls-functionality",
    title: "What is a Firewall and what does it do?",
    track: "cybersecurity",
    level: "intern",
    category: "05-network-security-basics",
    categoryLabel: "Network Security",
    difficulty: "Beginner",
    tags: ["network-security", "firewalls", "packet-filtering", "ngfw", "osi-model"],
    order: 12,
    summaryAnswer: "A firewall is a network security device or software that monitors, filters, and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a protective barrier between a trusted internal network and an untrusted external network.",
    keyTakeaways: [
      "Default Deny Rule: All traffic blocked unless explicitly permitted.",
      "Packet-Filtering (Stateless): Checks IP, port, and protocol (Layer 3 & 4).",
      "Stateful Inspection: Tracks active connection states (SYN, ACK, ESTABLISHED).",
      "Next-Gen Firewall (NGFW): Application layer (Layer 7) deep packet inspection."
    ],
    interviewTips: [
      "Highlight evolution: Stateless -> Stateful -> NGFW & WAF.",
      "Mention Network Firewalls vs. Host-Based Firewalls."
    ],
    markdownPath: "content/cybersecurity/intern/05-network-security-basics/firewalls-functionality.md"
  },
  {
    id: "cs-int-013",
    slug: "ids-vs-ips",
    title: "What is the difference between an IDS and an IPS?",
    track: "cybersecurity",
    level: "intern",
    category: "05-network-security-basics",
    categoryLabel: "Network Security",
    difficulty: "Beginner",
    tags: ["ids", "ips", "snort", "suricata", "network-security", "monitoring"],
    order: 13,
    summaryAnswer: "An Intrusion Detection System (IDS) is a passive monitoring tool that analyzes traffic and alerts security teams to suspicious activity without interfering with traffic flow. An Intrusion Prevention System (IPS) is an active inline device that analyzes packets in real-time and automatically drops or blocks malicious traffic before it reaches its destination.",
    keyTakeaways: [
      "IDS = Detection & Alerting (Passive / Out-of-band / SPAN or TAP port).",
      "IPS = Prevention & Active Blocking (Inline / In-band / Sits in traffic path).",
      "Detection Approaches: Signature-Based vs. Anomaly/Heuristic-Based."
    ],
    interviewTips: [
      "Use analogy: IDS is a security camera (rings alarm); IPS is an active guard (tackles intruder).",
      "Mention False Positives risk with IPS: dropping legitimate business traffic."
    ],
    markdownPath: "content/cybersecurity/intern/05-network-security-basics/ids-vs-ips.md"
  },
  {
    id: "cs-int-014",
    slug: "ports-and-protocols-basics",
    title: "What are Common Security Network Ports & Protocols you should know?",
    track: "cybersecurity",
    level: "intern",
    category: "05-network-security-basics",
    categoryLabel: "Network Security",
    difficulty: "Beginner",
    tags: ["networking", "ports", "protocols", "tcp-ip", "fundamentals"],
    order: 14,
    summaryAnswer: "Standard network ports are numerical identifiers (0-65535) used by transport protocols (TCP/UDP) to route traffic to specific application services. Security professionals must memorize key standard ports, identify insecure plaintext protocols (e.g., HTTP, Telnet, FTP), and advocate for their encrypted counterparts (HTTPS, SSH, SFTP).",
    keyTakeaways: [
      "TCP = Connection-oriented, guaranteed delivery (SYN, SYN-ACK, ACK).",
      "UDP = Connectionless, faster with no guaranteed delivery.",
      "Insecure vs. Secure pairs: HTTP (80) vs. HTTPS (443), Telnet (23) vs. SSH (22), FTP (21) vs. SFTP (22)."
    ],
    interviewTips: [
      "Expect rapid-fire port questions during entry-level screens.",
      "Explain WHY certain ports should never be exposed publicly (RDP 3389, SMB 445)."
    ],
    markdownPath: "content/cybersecurity/intern/05-network-security-basics/ports-and-protocols-basics.md"
  },
  {
    id: "cs-int-015",
    slug: "soc-and-siem-fundamentals",
    title: "What is a SOC and what is the role of a SIEM tool?",
    track: "cybersecurity",
    level: "intern",
    category: "05-network-security-basics",
    categoryLabel: "Network Security",
    difficulty: "Beginner",
    tags: ["soc", "siem", "incident-response", "log-analysis", "monitoring"],
    order: 15,
    summaryAnswer: "A Security Operations Center (SOC) is a centralized team of security professionals that continuously monitors, detects, analyzes, and responds to cybersecurity incidents. A Security Information and Event Management (SIEM) tool is the primary software platform that aggregates, normalizes, correlates, and alerts on log data from across the enterprise.",
    keyTakeaways: [
      "SOC = The People, Processes, and Technology conducting 24/7 monitoring.",
      "SIEM = The Central Log Collector & Correlation Engine.",
      "Core SIEM functions: Log Ingestion, Normalization, Correlation Rules, Alert Generation."
    ],
    interviewTips: [
      "Describe the Tiered SOC hierarchy: Tier 1 (Triage), Tier 2 (Incident Response), Tier 3 (Threat Hunting).",
      "Explain how SIEM correlation works: connecting separate log events."
    ],
    markdownPath: "content/cybersecurity/intern/05-network-security-basics/soc-and-siem-fundamentals.md"
  },
  {
    id: "cs-int-016",
    slug: "osi-model-7-layers",
    title: "Explain the OSI Model (7 Layers) and how security applies to each layer.",
    track: "cybersecurity",
    level: "intern",
    category: "05-network-security-basics",
    categoryLabel: "Network Security",
    difficulty: "Beginner",
    tags: ["networking", "osi-model", "tcp-ip", "protocols", "network-security"],
    order: 16,
    summaryAnswer: "The OSI model is a 7-layer conceptual framework describing how data moves across a network: Physical (1), Data Link (2), Network (3), Transport (4), Session (5), Presentation (6), and Application (7). Security controls and attacks exist at every single layer.",
    keyTakeaways: [
      "Mnemonic: 'Please Do Not Throw Sausage Pizza Away' (Layers 1-7).",
      "Layer 7 (Application): HTTP/HTTPS, DNS — Threats: SQLi, XSS — Defenses: WAF.",
      "Layer 4 (Transport): TCP/UDP, Ports — Threats: SYN flood, Port scans — Defenses: Stateful firewalls.",
      "Layer 3 (Network): IP, Routers — Threats: IP spoofing — Defenses: Packet filters, IPSec.",
      "Layer 2 (Data Link): MAC addresses, Switches — Threats: ARP poisoning — Defenses: Port security, DAI."
    ],
    interviewTips: [
      "Pair each layer with its standard PDU: Bits -> Frames -> Packets -> Segments -> Data.",
      "Interviewers love asking: 'At which layer does a switch vs. router vs. WAF operate?'"
    ],
    markdownPath: "content/cybersecurity/intern/05-network-security-basics/osi-model-7-layers.md"
  },

  // ==========================================
  // SOFTWARE ENGINEERING - INTERN
  // ==========================================
  {
    id: "swe-int-001",
    slug: "big-o-notation",
    title: "What is Big-O Notation and why does it matter in software development?",
    track: "software-engineering",
    level: "intern",
    category: "01-cs-fundamentals",
    categoryLabel: "CS Fundamentals",
    difficulty: "Beginner",
    tags: ["algorithms", "data-structures", "time-complexity", "performance"],
    order: 1,
    summaryAnswer: "Big-O notation is a mathematical notation used in computer science to describe the upper bound (worst-case scenario) of an algorithm's runtime or memory space consumption as the input size (N) scales towards infinity.",
    keyTakeaways: [
      "Measures growth rate rather than exact clock time (machine-independent).",
      "Common Complexities: O(1) < O(log N) < O(N) < O(N log N) < O(N²) < O(2ⁿ).",
      "Always consider both Time Complexity and Space Complexity."
    ],
    interviewTips: [
      "Never drop constants without explaining why (constants become negligible at scale).",
      "Give tangible algorithm examples: O(1) hash map lookup, O(log N) binary search, O(N log N) merge sort."
    ],
    markdownPath: "content/software-engineering/intern/01-cs-fundamentals/big-o-notation.md"
  },
  {
    id: "swe-int-002",
    slug: "oop-principles",
    title: "What are the Four Core Principles of Object-Oriented Programming (OOP)?",
    track: "software-engineering",
    level: "intern",
    category: "01-cs-fundamentals",
    categoryLabel: "CS Fundamentals",
    difficulty: "Beginner",
    tags: ["oop", "encapsulation", "inheritance", "polymorphism", "abstraction"],
    order: 2,
    summaryAnswer: "The four pillars of Object-Oriented Programming are Encapsulation (bundling data and methods while restricting direct access), Abstraction (hiding complex internal details), Inheritance (reusing and extending existing class behavior), and Polymorphism (treating different classes through a uniform interface).",
    keyTakeaways: [
      "Mnemonic: 'APIE' (Abstraction, Polymorphism, Inheritance, Encapsulation).",
      "Encapsulation: Uses private fields and accessors to protect state.",
      "Abstraction: Defines clear interface contracts without exposing mechanics.",
      "Inheritance: Promotes code reuse; Polymorphism: Method overriding/overloading."
    ],
    interviewTips: [
      "Distinguish between Abstraction ('what' it does) and Encapsulation ('how' state is hidden).",
      "Mention 'Composition over Inheritance' to show design maturity."
    ],
    markdownPath: "content/software-engineering/intern/01-cs-fundamentals/oop-principles.md"
  },
  {
    id: "swe-int-003",
    slug: "rest-api-principles",
    title: "What is a RESTful API and what are its key constraints and HTTP methods?",
    track: "software-engineering",
    level: "intern",
    category: "02-web-and-apis",
    categoryLabel: "Web & APIs",
    difficulty: "Beginner",
    tags: ["apis", "rest", "http", "backend", "web-development"],
    order: 3,
    summaryAnswer: "A RESTful API is an architectural style for designing networked web services that leverage standard HTTP protocols, stateless communication, standard CRUD methods (GET, POST, PUT, PATCH, DELETE), and resource-oriented URI endpoints.",
    keyTakeaways: [
      "Statelessness: Every request contains all required context; no server session state.",
      "Resource URIs: Plural nouns (/users), not verbs (/getUser).",
      "Status Codes: 2xx (Success), 3xx (Redirect), 4xx (Client Error), 5xx (Server Error).",
      "Idempotency: GET, PUT, DELETE are idempotent; POST is not."
    ],
    interviewTips: [
      "Explain the difference between PUT (full entity replacement) and PATCH (partial update).",
      "Mention standard HTTP status codes: 200, 201, 204, 400, 401, 403, 404, 500."
    ],
    markdownPath: "content/software-engineering/intern/02-web-and-apis/rest-api-principles.md"
  },
  {
    id: "swe-int-004",
    slug: "git-branching-workflow",
    title: "What is Git and how does a collaborative branching workflow work?",
    track: "software-engineering",
    level: "intern",
    category: "03-version-control-git",
    categoryLabel: "Git & Version Control",
    difficulty: "Beginner",
    tags: ["git", "version-control", "collaboration", "ci-cd", "pull-requests"],
    order: 4,
    summaryAnswer: "Git is a distributed version control system tracking file changes across teams. In a Feature Branch workflow, developers create isolated topic branches from 'main', commit atomic changes, open Pull Requests for peer review, and merge back into 'main' upon CI approval.",
    keyTakeaways: [
      "Distributed: Every developer holds a full copy of the repository history.",
      "3 States: Working Directory -> Staging Area -> Local Repo -> Remote Repo.",
      "git merge (preserves branch history) vs. git rebase (linear history)."
    ],
    interviewTips: [
      "Explain how to resolve merge conflicts step by step.",
      "Mention conventional commit formatting (feat:, fix:, refactor:)."
    ],
    markdownPath: "content/software-engineering/intern/03-version-control-git/git-branching-workflow.md"
  },

  // ==========================================
  // PROJECT MANAGEMENT - INTERN
  // ==========================================
  {
    id: "pm-int-001",
    slug: "agile-vs-waterfall",
    title: "What is the difference between Agile and Waterfall project methodologies?",
    track: "project-management",
    level: "intern",
    category: "01-frameworks",
    categoryLabel: "Frameworks & Methodologies",
    difficulty: "Beginner",
    tags: ["agile", "waterfall", "sdlc", "scrum", "project-management"],
    order: 1,
    summaryAnswer: "Waterfall is a linear, sequential project management methodology where each phase must be completed before the next begins. Agile is an iterative, flexible approach that delivers working product increments in short sprint cycles, embracing evolving customer feedback.",
    keyTakeaways: [
      "Waterfall = Plan-driven, sequential, best for predictable projects with fixed scope.",
      "Agile = Value-driven, adaptive, continuous stakeholder feedback.",
      "Agile Manifesto: Individuals & interactions over processes; Working software over documentation."
    ],
    interviewTips: [
      "Avoid saying 'Agile is always better'. Mature PMs evaluate project constraints and regulatory requirements before selecting the model."
    ],
    markdownPath: "content/project-management/intern/01-frameworks/agile-vs-waterfall.md"
  },
  {
    id: "pm-int-002",
    slug: "scrum-ceremonies",
    title: "What are the 5 Core Scrum Events (Ceremonies) and 3 Scrum Roles?",
    track: "project-management",
    level: "intern",
    category: "01-frameworks",
    categoryLabel: "Frameworks & Methodologies",
    difficulty: "Beginner",
    tags: ["scrum", "agile", "ceremonies", "sprints", "roles"],
    order: 2,
    summaryAnswer: "Scrum defines 3 key roles (Product Owner, Scrum Master, Developers) and 5 formal events for inspection and adaptation: The Sprint (container), Sprint Planning, Daily Scrum (Standup), Sprint Review (Demo), and Sprint Retrospective.",
    keyTakeaways: [
      "3 Roles: Product Owner (What & priority), Scrum Master (Process & unblocking), Developers (How).",
      "Sprint Planning: Sets Sprint Goal; Daily Scrum: 15-min blocker sync.",
      "Sprint Review: Product demo with stakeholders; Sprint Retrospective: Team internal process improvement."
    ],
    interviewTips: [
      "Differentiate Sprint Review (product/stakeholders) from Sprint Retrospective (team process).",
      "Emphasize that the Scrum Master is a Servant Leader."
    ],
    markdownPath: "content/project-management/intern/01-frameworks/scrum-ceremonies.md"
  },
  {
    id: "pm-int-003",
    slug: "triple-constraint-scope-creep",
    title: "What is the Project Management Triple Constraint and what is Scope Creep?",
    track: "project-management",
    level: "intern",
    category: "02-project-controls",
    categoryLabel: "Project Controls",
    difficulty: "Beginner",
    tags: ["triple-constraint", "scope-creep", "iron-triangle", "risk-control"],
    order: 3,
    summaryAnswer: "The Triple Constraint (Iron Triangle) states that project success is bounded by Scope, Time, and Cost, with Quality at the center—modifying one constraint inevitably impacts the others. Scope Creep is the unauthorized expansion of deliverables without adjustments to time or budget.",
    keyTakeaways: [
      "The Triangle: Scope (deliverables), Time (schedule), Cost (budget).",
      "Scope Creep causes: Ambiguous requirements, direct stakeholder requests bypassing change control.",
      "Mitigation: Formal Change Requests and transparent trade-off conversations."
    ],
    interviewTips: [
      "Explain how you handle out-of-scope requests constructively by presenting trade-offs instead of flatly saying no."
    ],
    markdownPath: "content/project-management/intern/02-project-controls/triple-constraint-scope-creep.md"
  }
];

export function getCategoriesForTrack(trackId, levelId = "intern") {
  const matchingQuestions = ALL_QUESTIONS.filter(
    q => q.track === trackId && q.level === levelId
  );

  const categoryMap = new Map();
  categoryMap.set("all", { id: "all", label: "All Questions" });

  matchingQuestions.forEach(q => {
    if (!categoryMap.has(q.category)) {
      categoryMap.set(q.category, {
        id: q.category,
        label: q.categoryLabel
      });
    }
  });

  return Array.from(categoryMap.values());
}
