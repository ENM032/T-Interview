# T-Interview

**T-Interview** is an open-source, mobile-first technical interview preparation and study platform designed for candidates across career tiers—from **interns** and **juniors** to **intermediate** and **senior** professionals.

---

## 📖 Content Overview

T-Interview hosts curated, interview-focused questions and explanations formatted in open **Markdown + YAML Frontmatter**. The curriculum is organized across multiple technical disciplines:

* **🛡️ Cybersecurity**:
  * **Fundamentals**: CIA Triad, Threat vs. Vulnerability vs. Risk, Principle of Least Privilege, Defense in Depth.
  * **Cryptography Basics**: Encryption vs. Hashing vs. Encoding, Symmetric vs. Asymmetric Cryptography.
  * **Identity & Access Management (IAM)**: Authentication vs. Authorization, Multi-Factor Authentication (MFA).
  * **Threats & Malware**: Phishing Recognition, Malware Taxonomy (Viruses, Worms, Trojans, Ransomware), Social Engineering Vectors.
  * **Network Security**: Complete OSI 7-Layer Model & Security Mapping, Firewalls, IDS vs. IPS, Ports & Protocols, SOC & SIEM Operations.
* **💻 Software Engineering**:
  * **Computer Science Fundamentals**: Big-O Computational Complexity, 4 Pillars of OOP (Encapsulation, Abstraction, Inheritance, Polymorphism).
  * **Web & APIs**: RESTful API Principles, HTTP Verbs, Idempotency, Status Codes.
  * **Version Control**: Git Architecture, Feature Branching Workflows, Pull Requests.
* **📊 Project Management**:
  * **Frameworks & Methodologies**: Agile vs. Waterfall, The 5 Scrum Ceremonies & 3 Scrum Roles.
  * **Project Controls**: The Triple Constraint (Iron Triangle), Scope Creep Mitigation.

---

## 📁 File & Folder Structure

```text
t-interview/
├── content/                                 # Open Markdown learning repository
│   ├── cybersecurity/
│   │   └── intern/
│   │       ├── 01-fundamentals/            # Core concepts & security models
│   │       ├── 02-cryptography-basics/      # Ciphers, hashing, and PKI
│   │       ├── 03-identity-access-management/ # AuthN, AuthZ, MFA
│   │       ├── 04-threats-and-malware/     # Attack vectors & taxonomy
│   │       └── 05-network-security-basics/ # OSI model, firewalls, IDS/IPS, ports
│   ├── software-engineering/
│   │   └── intern/
│   │       ├── 01-cs-fundamentals/        # Data structures, OOP, Big-O
│   │       ├── 02-web-and-apis/            # REST APIs and HTTP
│   │       └── 03-version-control-git/     # Git collaboration workflows
│   └── project-management/
│       └── intern/
│           ├── 01-frameworks/              # Agile, Scrum, Waterfall
│           └── 02-project-controls/        # Scope, budget, and schedule controls
├── css/
│   ├── variables.css                       # CSS custom properties & design tokens
│   ├── base.css                            # Baseline resets and typography
│   ├── components.css                      # 3D flashcards, reader layout, controls
│   └── responsive.css                      # Breakpoints for Mobile, Tablet, Desktop, TV
├── js/
│   ├── core/
│   │   ├── state.js                        # Multi-track application state
│   │   └── storage.js                      # LocalStorage bookmarks & mastery tracking
│   ├── data/
│   │   └── questions-manifest.js           # Multi-track catalog & category metadata
│   ├── ui/
│   │   ├── flashcard-view.js               # Interactive 3D flip card component
│   │   └── reading-view.js                 # Split-pane deep-dive reading component
│   ├── utils/
│   │   └── markdown-parser.js              # Lightweight zero-dependency markdown parser
│   └── app.js                              # Main application coordinator
├── index.html                              # Web app entry point
└── README.md                               # Project documentation
```

---

## 🚀 How to Install & Use

T-Interview is built with pure, performant vanilla HTML5, CSS3, and ES6 JavaScript modules. It requires no compilers, bundlers, or external package managers to run.

### Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ENM032/T-Interview.git
   cd T-Interview
   ```

2. **Start a Local HTTP Server**:
   * Using **Python 3**:
     ```bash
     python -m http.server 8080
     ```
   * Using **Node.js (`npx`)**:
     ```bash
     npx serve .
     ```
   * Or open the project in **VS Code** with the **Live Server** extension.

3. **Open in Browser**:
   Navigate to `http://localhost:8080` to use the application.

---

## ⚡ Key Application Features

* **Dual Study Modes**:
  * **⚡ Flashcards Mode**: 3D flip cards with fast question/summary drills (`Space` to flip, `←`/`→` to navigate).
  * **📖 Deep Dive Mode**: Full markdown reader with code syntax, diagrams, tables, and interview advice.
* **Track & Seniority Filtering**: Instant switching between **Cybersecurity**, **Software Engineering**, and **Project Management** across **Intern**, **Junior**, **Intermediate**, and **Senior** tiers.
* **Device Responsiveness**: Tailored layouts for **Mobile** (<640px), **Tablet** (640–1024px), **Desktop** (>1024px), and **TV/Presentation** (>1800px or fullscreen).
* **Offline Progress Tracking**: Track "Mastered" questions (`✓`) and bookmarks (`★`) persisted directly in browser `localStorage`.
* **Dark / Light Themes**: Toggleable theme preference.

---

## ✍️ Contributing Learning Content

1. Create a new `.md` file inside the appropriate `content/<track>/<level>/<category>/` directory.
2. Structure the frontmatter:
   ```yaml
   ---
   id: "cs-int-017"
   slug: "topic-slug"
   title: "Your Question Title?"
   track: "cybersecurity"
   level: "intern"
   category: "01-fundamentals"
   difficulty: "Beginner"
   tags: ["tag1", "tag2"]
   order: 17
   summaryAnswer: "Concise 1-2 sentence answer."
   keyTakeaways:
     - "Key takeaway point 1"
     - "Key takeaway point 2"
   interviewTips:
     - "Practical advice for the interview."
   ---

   ## Overview
   Detailed explanation goes here...
   ```
3. Register the entry in `js/data/questions-manifest.js`.

---

Disclosure: This README was generated with the assistance of AI
