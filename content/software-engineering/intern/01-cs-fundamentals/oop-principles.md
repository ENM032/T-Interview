---
id: "swe-int-002"
slug: "oop-principles"
title: "What are the Four Core Principles of Object-Oriented Programming (OOP)?"
track: "software-engineering"
level: "intern"
category: "01-cs-fundamentals"
categoryLabel: "CS Fundamentals"
difficulty: "Beginner"
tags: ["oop", "encapsulation", "inheritance", "polymorphism", "abstraction"]
order: 2
summary_answer: "The four pillars of Object-Oriented Programming are Encapsulation (bundling data and methods while restricting direct access), Abstraction (hiding complex internal implementation details), Inheritance (allowing new classes to reuse and extend behavior from existing classes), and Polymorphism (allowing different classes to be treated through a uniform interface)."
key_takeaways:
  - "Mnemonic: 'APIE' (Abstraction, Polymorphism, Inheritance, Encapsulation)."
  - "Encapsulation: Uses private fields and public getters/setters to protect internal object state."
  - "Abstraction: Defines clear contracts (interfaces/abstract classes) without revealing concrete mechanics."
  - "Inheritance: Promotes code reuse (`class Dog extends Animal`)."
  - "Polymorphism: Overriding (`speak()` method behaves differently for Cat and Dog) and Overloading."
interview_tips:
  - "Distinguish between Abstraction ('what' an object does) and Encapsulation ('how' an object conceals its internal state)."
  - "Mention modern software best practices like 'Composition over Inheritance' to demonstrate maturity."
common_follow_ups:
  - "What are SOLID design principles, and how do they build on OOP?"
  - "Why is deep inheritance hierarchies considered an anti-pattern in modern architecture?"
---

## Overview

**Object-Oriented Programming (OOP)** organizes software design around data, or objects, rather than functions and logic. Master the four core pillars:

```
                  ┌────────────────────────────────────────┐
                  │    The Four Pillars of OOP (APIE)      │
                  ├───────────────────┬────────────────────┤
                  │ 1. Encapsulation  │ 2. Abstraction     │
                  │    (Data Hiding)  │    (Interface Only)│
                  ├───────────────────┼────────────────────┤
                  │ 3. Inheritance    │ 4. Polymorphism    │
                  │    (Code Reuse)   │    (Many Forms)    │
                  └───────────────────┴────────────────────┘
```

---

## Detailed Breakdown

### 1. Encapsulation
* **Concept**: Bundling properties and methods that operate on that data within a single unit (class), while restricting unauthorized direct modification of state.
* **Mechanism**: Using access modifiers (`private`, `protected`, `public`) and exposing controlled accessor methods.

### 2. Abstraction
* **Concept**: Hiding internal background details and complexity from the caller, exposing only the essential operations needed to interact with the object.
* **Real-World Analogy**: You press the accelerator pedal in a car without needing to understand fuel injection timing or catalytic converter chemistry.

### 3. Inheritance
* **Concept**: A mechanism where a child class acquires properties and behaviors from a parent class, eliminating boilerplate code duplication.
* **Syntax**: `class AdminUser extends User`.

### 4. Polymorphism
* **Concept**: Meaning *"many forms"*, it allows objects of different types to respond to the same method invocation in their own specialized manner.
* **Types**:
  - **Runtime Polymorphism (Method Overriding)**: A subclass provides a specific implementation of a method defined in its superclass.
  - **Compile-time Polymorphism (Method Overloading)**: Multiple methods with the same name but different argument signatures.
