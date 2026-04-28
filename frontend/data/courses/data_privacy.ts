import { Course } from '../../types';

const dataPrivacy: Course = {
  id: 'data-privacy-2024',
  title: 'Data Privacy & Protection',
  description: 'Master the foundations of data privacy rights and protection frameworks under the DPDP Act 2023.',
  category: 'Compliance',
  duration: '60 mins',
  icon: '🔏',
  colorTheme: 'indigo',
  modules: [
    {
      id: 'dp-m1',
      title: 'Module 1: Foundations of Data Privacy & Protection',
      summary: 'Understanding the core concepts of privacy, security, and responsible data governance.',
      order: 1,
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Module 1 Placeholder Video – Foundations of Data Privacy & Protection',
          instructions: 'This is a placeholder video. Replace the URL after exporting the code from Google AI Studio. Duration: 6:35',
          videoUrl: 'https://example.com/placeholder-video-m1.mp4'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Foundations of Data Privacy & Protection',
            scenes: [
              {
                title: 'Core Principles',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Good morning everyone. Today we’ll cover the foundations of Data Privacy and Data Protection, and how they shape responsible data governance.",
                    side: "left",
                    visualDescription: "Training room with a screen displaying 'Module 1 – Data Privacy & Protection'. Meera stands at the front."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt",
                    text: "Meera, what exactly is data privacy?",
                    side: "right",
                    visualDescription: "Aarav raises his hand, seated among employees."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Data privacy refers to the rights individuals have over how their personal information is collected, processed, stored, shared, and used. In India, privacy is protected as a fundamental right under Article 21.",
                    side: "left",
                    visualDescription: "Meera points to a slide titled 'Privacy = Fundamental Right'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "And data protection is different from privacy?",
                    side: "right",
                    visualDescription: "Riya leans forward with curiosity."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Yes. Data protection refers to the safeguards used to prevent unauthorized access, misuse, loss, or breaches. This includes encryption, access controls, and awareness.",
                    side: "left",
                    visualDescription: "Icons of shields, locks, and encryption appear behind Meera."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor&top=shortHair&hairColor=grey&mouth=serious&clothing=suit",
                    text: "Many assume privacy and security mean the same thing.",
                    side: "left",
                    visualDescription: "Mr. Kapoor sits with a thoughtful expression."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "They’re related but not identical. Privacy defines what should be done with data—purpose, consent, transparency. Security defines how data is protected—firewalls, encryption, and system controls.",
                    side: "left",
                    visualDescription: "Split-screen illustration: “Privacy = Rights & Purpose” vs “Security = Protection Methods”."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt",
                    text: "Why is data protection so critical for businesses?",
                    side: "right",
                    visualDescription: "Aarav looks genuinely curious."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Organizations handle large volumes of customer and employee data daily. A single breach can cause operational disruption, financial loss, and long-term trust damage.",
                    side: "left",
                    visualDescription: "Meera gestures toward a slide showing a 'Data Breach Impact' chart."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Under the DPDP Act, 2023, companies must implement reasonable safeguards or face significant penalties.",
                    side: "left",
                    visualDescription: "Slide shows 'DPDP Act 2023 – Compliance Required'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "So the biggest impact is reputation?",
                    side: "right",
                    visualDescription: "Riya asks with a concerned tone."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Reputation loss is one of the most damaging outcomes. Breaches can trigger media coverage, regulatory action, and sharp drops in customer trust.",
                    side: "left",
                    visualDescription: "Screens display newspaper headlines about data breaches."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Certain cybersecurity incidents must also be reported to CERT-In, which increases accountability further.",
                    side: "left",
                    visualDescription: "Meera points to a visual checklist."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor&top=shortHair&hairColor=grey&mouth=serious&clothing=suit",
                    text: "What responsibilities do organizations carry legally and ethically?",
                    side: "left",
                    visualDescription: "Mr. Kapoor folds his hands, speaking calmly."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Legally, organizations must process data lawfully, minimize collection, and secure it. Ethically, they must treat data with fairness and dignity—even beyond minimum law.",
                    side: "left",
                    visualDescription: "Slide with two columns: 'Legal Duties' and 'Ethical Duties'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt",
                    text: "Who exactly is responsible for protecting data internally?",
                    side: "right",
                    visualDescription: "Aarav asks with interest."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Data protection is shared. Leadership sets governance, IT secures systems, HR protects employee data, Compliance ensures alignment, and employees follow policies and report risks.",
                    side: "left",
                    visualDescription: "Team icons appear around Meera, representing shared responsibility."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Even external vendors and service providers must follow data protection standards.",
                    side: "left",
                    visualDescription: "Vendor icons connected via dotted lines."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "Why is data considered an asset today?",
                    side: "right",
                    visualDescription: "Riya tilts her head slightly, thinking."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Because data fuels business decisions, analytics, and competitive advantage. But unlike physical assets, it can be copied or misused instantly.",
                    side: "left",
                    visualDescription: "Visual shows a vault labeled 'Data = Asset'."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "That’s why classification, access control, and monitoring are essential.",
                    side: "left",
                    visualDescription: "Meera points at a classification matrix."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor&top=shortHair&hairColor=grey&mouth=serious&clothing=suit",
                    text: "How do organizations implement privacy properly?",
                    side: "left",
                    visualDescription: "Mr. Kapoor gestures toward the presentation."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Through Privacy by Design—embedding privacy controls into systems from the start, and Privacy by Default—collecting only necessary data automatically.",
                    side: "left",
                    visualDescription: "Flowchart labeled 'Privacy by Design → Privacy by Default'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt",
                    text: "What does accountability mean in this context?",
                    side: "right",
                    visualDescription: "Aarav raises his hand again."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Accountability means the organization must prove it handles data responsibly—through policies, audits, training, processing records, and breach response mechanisms.",
                    side: "left",
                    visualDescription: "Checklist appears with 'Policies', 'Audits', 'Training', 'Records', 'Incident Response'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "And what role does leadership play?",
                    side: "right",
                    visualDescription: "Riya turns toward Mr. Kapoor."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Leadership sets the culture. When leaders prioritize privacy, fund security measures, and enforce policies, employees take it seriously.",
                    side: "left",
                    visualDescription: "Meera gestures toward Mr. Kapoor as he nods."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor&top=shortHair&hairColor=grey&mouth=serious&clothing=suit",
                    text: "That’s the standard we expect—professional, compliant, and accountable behavior.",
                    side: "left",
                    visualDescription: "Mr. Kapoor speaks with formal confidence."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Exactly. Privacy protects individuals, security protects systems, and governance keeps the organization trusted and compliant.",
                    side: "left",
                    visualDescription: "Meera smiles, closing the session."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Strong governance ensures business goals stay aligned with evolving data risks.",
                    side: "left",
                    visualDescription: "Screen shows 'Governance = Alignment + Compliance + Trust'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt",
                    text: "So accountability means proving—not just claiming—that data is protected?",
                    side: "right",
                    visualDescription: "Aarav reiterates confidently."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer",
                    text: "Exactly. That’s the foundation of responsible data privacy and protection.",
                    side: "left",
                    visualDescription: "Final panel with all characters smiling; title at bottom: 'Module 1 Complete – Foundations Built'."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: 'Which of the following best describes the difference between privacy and security?',
          options: [
            'Privacy defines how data should be used; security defines how data is protected.',
            'Privacy and security mean the exact same thing.',
            'Security is only a technical concern; privacy is optional.',
            'Privacy controls firewalls while security controls consent.'
          ],
          correctIndex: 0,
          explanation: 'Privacy defines the purpose and rights surrounding data usage, while security provides the technical and administrative safeguards to protect that data.'
        },
        {
          type: 'check',
          question: 'Under the DPDP Act 2023, which responsibility is mandatory?',
          options: [
            'Collect as much data as possible for business growth.',
            'Process data only for a lawful and defined purpose.',
            'Share user data with international partners for analytics.',
            'Store data forever to avoid deletion costs.'
          ],
          correctIndex: 1,
          explanation: 'The DPDP Act 2023 mandates that personal data must be processed only for a lawful purpose for which the Data Principal has given consent or for certain legitimate uses.'
        },
        {
          type: 'check',
          question: 'Which role is responsible for setting overall privacy governance?',
          options: [
            'Only interns',
            'Only HR',
            'Organizational leadership and compliance teams',
            'Nobody specifically'
          ],
          correctIndex: 2,
          explanation: 'While data protection is a shared responsibility, organizational leadership and compliance teams are responsible for setting the overall governance framework and policy standards.'
        }
      ]
    },
    {
      id: 'dp-m2',
      title: 'Module 2: Types & Classification of Workplace Data',
      summary: 'Identifying different data categories and understanding classification levels for proper handling.',
      order: 2,
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Module 2 Placeholder Video – Workplace Data Classification',
          instructions: 'This is a placeholder for the Module 2 Workforce Data Classification video. Replace this URL after exporting the code. (Reference: types/classification walkthrough)',
          videoUrl: 'https://example.com/placeholder-module2.mp4'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Types & Classification of Workplace Data',
            scenes: [
              {
                id: "m2_start",
                title: "Opening Scene",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 2. Today we classify workplace data—what it is, why it matters, and how misuse can impact compliance.",
                    side: "left",
                    visualDescription: "Training room with data icons floating behind Meera."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I get that data is important, but there are so many categories. It becomes confusing sometimes.",
                    side: "right",
                    visualDescription: "Aarav looks overwhelmed looking at floating icons labeled ‘Personal’, ‘Financial’, ‘HR’."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Which of these qualifies as *personal data* under workplace data classification?",
                    options: [
                      { id: "opt1a", label: "A: Employee name, phone number, and IP address", nextScene: "dp2_correct_1" },
                      { id: "opt1b", label: "B: Company pricing strategy document", nextScene: "dp2_wrong_1A" },
                      { id: "opt1c", label: "C: Vendor contract renewal dates", nextScene: "dp2_wrong_1B" }
                    ]
                  }
                ]
              },
              {
                id: "dp2_correct_1",
                title: "Correct Path 1",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Personal data is anything that identifies an individual—directly or indirectly.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "IP address, device IDs, and login data are also personal data under DPDP.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Classification logic verified. Continue?",
                    options: [{ id: "m2_c1", label: "Back to Story", nextScene: "dp2_return_1" }]
                  }
                ]
              },
              {
                id: "dp2_wrong_1A",
                title: "Wrong Path 1A",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not exactly. Company pricing strategy is confidential business data—not personal data.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This confusion is common—employees often mix corporate secrets with personal identifiers.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Review the definition and try again?",
                    options: [{ id: "m2_w1a", label: "Rewind to Decision", nextScene: "m2_start" }]
                  }
                ]
              },
              {
                id: "dp2_wrong_1B",
                title: "Wrong Path 1B",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not this one. Vendor contract details are business or vendor data, not personal data.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Refine your identification and try again?",
                    options: [{ id: "m2_w1b", label: "Rewind", nextScene: "m2_start" }]
                  }
                ]
              },
              {
                id: "dp2_return_1",
                title: "Back to Story",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So personal data includes even technical identifiers like device IDs?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Yes. Anything that can trace back to a person becomes personal data.",
                    side: "left",
                    visualDescription: "Meera highlights a tablet showing 'Traceable Data = Personal'."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Now, let’s talk about sensitive personal data—information that requires extra protection.",
                    side: "left"
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Like passwords and biometrics, right?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Health data, biometrics, financial data, authentication credentials—all fall under this category.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Which of these is MOST LIKELY classified as *sensitive personal data*?",
                    options: [
                      { id: "opt2a", label: "A: Attendance logs showing login/logout times", nextScene: "dp2_wrong_2A" },
                      { id: "opt2b", label: "B: Employee biometric fingerprint and salary bank account details", nextScene: "dp2_correct_2" },
                      { id: "opt2c", label: "C: Customer support email transcripts", nextScene: "dp2_wrong_2B" }
                    ]
                  }
                ]
              },
              {
                id: "dp2_correct_2",
                title: "Correct Path 2",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Absolutely correct. Biometrics and bank account details require the highest protection.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Security tier identified. Proceeding...",
                    options: [{ id: "m2_c2", label: "Continue Story", nextScene: "dp2_return_2" }]
                  }
                ]
              },
              {
                id: "dp2_wrong_2A",
                title: "Wrong Path 2A",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Attendance logs are personal data, but they aren’t considered sensitive.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Sensitive data has higher stakes. Try again.",
                    options: [{ id: "m2_w2a", label: "Rewind", nextScene: "dp2_return_1" }]
                  }
                ]
              },
              {
                id: "dp2_wrong_2B",
                title: "Wrong Path 2B",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Customer support transcripts contain personal data, but not necessarily *sensitive* personal data.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Focus on biometrics or financial credentials. Try again.",
                    options: [{ id: "m2_w2b", label: "Rewind", nextScene: "dp2_return_1" }]
                  }
                ]
              },
              {
                id: "dp2_return_2",
                title: "Back to Story",
                panels: [
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Sensitive data always carries regulatory and reputational risks. Mishandling it is extremely costly.",
                    side: "left"
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Understood. So not all personal data is sensitive—but all sensitive data is personal.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Next, we explore business confidential data—pricing, strategy, customer lists, proposals.",
                    side: "left"
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Leakage of this would hurt the company competitively, right?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Now add financial records—invoices, accounts, payments—these are governed by strict standards.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "A document contains customer pricing, discount rules, and revenue forecasts. How should it be classified?",
                    options: [
                      { id: "opt3a", label: "A: Internal – Safe to share widely within the organization", nextScene: "dp2_wrong_3A" },
                      { id: "opt3b", label: "B: Confidential – Strict access controls required", nextScene: "dp2_correct_3" },
                      { id: "opt3c", label: "C: Public – Can be shared outside freely", nextScene: "dp2_wrong_3B" }
                    ]
                  }
                ]
              },
              {
                id: "dp2_correct_3",
                title: "Correct Path 3",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Pricing and forecasts are highly confidential—they must be strictly protected.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Corporate strategy protected. Finalizing module...",
                    options: [{ id: "m2_c3", label: "Continue", nextScene: "dp2_return_3" }]
                  }
                ]
              },
              {
                id: "dp2_wrong_3A",
                title: "Wrong Path 3A",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Sharing pricing broadly can create serious confidentiality breaches.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Review access levels and try again.",
                    options: [{ id: "m2_w3a", label: "Rewind", nextScene: "dp2_return_2" }]
                  }
                ]
              },
              {
                id: "dp2_wrong_3B",
                title: "Wrong Path 3B",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not at all. This is the type of data companies guard most tightly from external parties.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Strategic data is never public. Try again.",
                    options: [{ id: "m2_w3b", label: "Rewind", nextScene: "dp2_return_2" }]
                  }
                ]
              },
              {
                id: "dp2_return_3",
                title: "Back to Story",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Data classification really affects daily decisions—who gets access, where to store it, everything.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Classification guides protection, access control, and handling rules.",
                    side: "left",
                    visualDescription: "Final panel with Meera, Aarav, and Riya standing before a secure server rack."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct classification reduces risk, ensures compliance, and protects people and the company.",
                    side: "left"
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "This module made it clearer—data categories influence everything we do.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Good. In the next module, we’ll learn about storage, access control, and governance.",
                    side: "left"
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: 'Which of the following best describes Sensitive Personal Data?',
          options: [
            'Basic profile details like name or email',
            'Information that can identify a person but is publicly available',
            'Financial, biometric, health, and authentication information',
            'Random workplace documents and notes'
          ],
          correctIndex: 2,
          explanation: 'Sensitive Personal Data includes information that requires enhanced protection, such as financial records, health data, and biometrics, as their misuse poses higher risks to individuals.'
        },
        {
          type: 'check',
          question: 'What classification requires the MOST restrictive access?',
          options: [
            'Internal',
            'Public',
            'Confidential',
            'Restricted'
          ],
          correctIndex: 3,
          explanation: 'The "Restricted" classification is reserved for the most highly sensitive data, where unauthorized access could cause severe damage to the organization or individuals.'
        },
        {
          type: 'check',
          question: 'Unstructured data includes:',
          options: [
            'Database tables and ERP fields',
            'Email threads, chat logs, images, documents',
            'Encrypted backups only',
            'Archived financial ledgers'
          ],
          correctIndex: 1,
          explanation: 'Unstructured data consists of information that doesn’t follow a predefined data model, such as text documents, emails, and multimedia files, making it harder to track and secure.'
        }
      ]
    },
    {
      id: 'dp-m3',
      title: 'Module 3: Data Storage, Access Control & Governance',
      summary: 'Placeholder video module covering secure storage, access controls, and governance responsibilities.',
      order: 3,
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Data Storage, Access Control & Governance (Placeholder)',
          instructions: 'This is a placeholder video for Module 3. You can replace this file after exporting the full project from Google AI Studio.',
          videoUrl: 'https://example.com/placeholder-video-dp-m3.mp4'
        },
        {
          type: 'check',
          question: "Which of the following BEST describes Role-Based Access Control (RBAC)?",
          options: [
            "A system where employees access only the data required for their job responsibilities.",
            "A system where everyone can access everything unless restricted manually.",
            "A system that grants access based on personal preference and convenience."
          ],
          correctIndex: 0,
          explanation: "RBAC ensures that users can access only what their job requires, minimizing data misuse risks."
        },
        {
          type: 'check',
          question: "What is the purpose of Multi-Factor Authentication (MFA) in data protection?",
          options: [
            "To make login slightly slower, adding inconvenience.",
            "To add an additional layer of identity verification, reducing unauthorized access risk.",
            "To remove the need for strong passwords."
          ],
          correctIndex: 1,
          explanation: "MFA strengthens authentication by requiring multiple factors, reducing chances of unauthorized access even if passwords are compromised."
        },
        {
          type: 'check',
          question: "Which statement BEST describes secure digital storage?",
          options: [
            "Storing data only on personal laptops with password protection.",
            "Using encrypted servers, compliant cloud platforms, and regular monitoring.",
            "Keeping all sensitive data in a shared Google Drive folder accessible to the entire team."
          ],
          correctIndex: 1,
          explanation: "Secure digital storage includes encryption, compliant infrastructure, and continuous monitoring."
        }
      ]
    },
    {
      id: 'dp-m4',
      title: 'Module 4: Data Storage, Access Control & Governance',
      summary: 'Placeholder video for Module 4. Final video will be inserted during deployment.',
      order: 4,
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Data Storage, Access Control & Governance',
          instructions: 'This is a placeholder video. The actual training video will be added after export.',
          videoUrl: 'https://example.com/placeholder-video-dp-m4.mp4'
        },
        {
          type: 'text',
          body: 'Please watch the entire video to unlock the logic check.'
        },
        {
          type: 'check',
          question: 'Which principle best describes Role-Based Access Control (RBAC)?',
          options: [
            'Employees have full access to all data unless restricted.',
            'Employees receive access strictly based on their job responsibilities.',
            'Employees can request access informally without documentation.'
          ],
          correctIndex: 1,
          explanation: 'RBAC ensures employees can access only the information required for their role, reducing risk.'
        },
        {
          type: 'check',
          question: 'Which of the following is NOT a requirement for secure physical data storage?',
          options: [
            'Locked cabinets for sensitive documents.',
            'Controlled access to record rooms.',
            'Allowing visitors to access physical documents if accompanied by staff.'
          ],
          correctIndex: 2,
          explanation: 'Visitors should never be allowed access to physical documents, even with supervision.'
        },
        {
          type: 'check',
          question: 'What should be done when an employee leaves the organization?',
          options: [
            'Immediately revoke access rights and retrieve all company devices.',
            'Keep access active for one week in case handover is needed.',
            'Retain all login permissions for future auditing.'
          ],
          correctIndex: 0,
          explanation: 'Access must be revoked immediately on exit to prevent unauthorized use.'
        }
      ]
    },
    {
      id: 'dp-m5',
      title: 'Module 5: Data Storage, Access Control & Governance',
      summary: 'Understanding secure storage, access permissions, governance roles, and real-world risks through an interactive branching storyline.',
      order: 5,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Guardians of Data: Storage, Access & Governance',
            scenes: [
              {
                id: "dp5_intro",
                title: "The Security Briefing",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 5. Today we'll understand how data must be stored, accessed, and governed safely.",
                    side: "left",
                    visualDescription: "Meera stands in a digital war-room environment showing servers, cloud icons, and locked storage units."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I know storage matters, but what makes it 'secure'? Encryption? Passwords?",
                    side: "right",
                    visualDescription: "Aarav sits forward, intrigued."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Security depends on multiple layers—secure servers, encryption, MFA, restricted access, monitoring, and proper governance.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Your team wants to store sensitive HR files on a shared drive accessible to all employees. What do you do?",
                    options: [
                      { id: "opt1a", label: "A: Approve it — Shared drives make collaboration faster.", nextScene: "dp5_wrong1A" },
                      { id: "opt1b", label: "B: Decline and request restricted, role-based access storage.", nextScene: "dp5_correct1" },
                      { id: "opt1c", label: "C: Approve but password-protect the folder and share the password on email.", nextScene: "dp5_wrong1B" }
                    ]
                  }
                ]
              },
              {
                id: "dp5_correct1",
                title: "Correct Decision: Restricted Access",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. HR files must only be stored in restricted-access locations with strict role-based permissions.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Shared access = high risk of unauthorized exposure.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Strategic standard applied. Continue?",
                    options: [{ id: "m2_c1", label: "Back to Story", nextScene: "dp5_return1" }]
                  }
                ]
              },
              {
                id: "dp5_wrong1A",
                title: "Wrong Decision: Open Access",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. ‘Faster collaboration’ cannot justify storing confidential data in open drives.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This creates major privacy and compliance risks. HR data requires strict RBAC platforms.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "This approach creates a major vulnerability. Try again?",
                    options: [{ id: "m2_w1", label: "Rewind to Decision", nextScene: "dp5_intro" }]
                  }
                ]
              },
              {
                id: "dp5_wrong1B",
                title: "Wrong Decision: Shared Passwords",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Password-protecting and sharing passwords over email defeats the entire purpose of access control.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Credentials must never be shared via insecure channels. Try again.",
                    options: [{ id: "m2_w2", label: "Rewind", nextScene: "dp5_intro" }]
                  }
                ]
              },
              {
                id: "dp5_return1",
                title: "Back to Story",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So storage isn't just about where data lives—it's about who can reach it?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Secure storage + secure access = true protection.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Role-Based Access Control ensures employees access ONLY the data required for their responsibilities.",
                    side: "left",
                    visualDescription: "A digital diagram appears showing 'Role → Access Level' mapping."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "What about admins? They have access to everything, right?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "No. Admins must follow Privileged Access Management — monitored, temporary, logged.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Your colleague shares their login credentials with you because 'it's urgent'. What do you do?",
                    options: [
                      { id: "opt2a", label: "A: Use them — It's urgent and helps the team.", nextScene: "dp5_wrong2A" },
                      { id: "opt2b", label: "B: Refuse and remind them that sharing credentials violates policy.", nextScene: "dp5_correct2" },
                      { id: "opt2c", label: "C: Use them once but change the password afterwards.", nextScene: "dp5_wrong2B" }
                    ]
                  }
                ]
              },
              {
                id: "dp5_correct2",
                title: "Correct Decision: Credential Protection",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Credential sharing is strictly prohibited — regardless of urgency.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Accountability preserved. Continue?",
                    options: [{ id: "m2_c2", label: "Continue Story", nextScene: "dp5_return2" }]
                  }
                ]
              },
              {
                id: "dp5_wrong2A",
                title: "Wrong Decision: Misuse of Credentials",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Using someone else’s credentials breaks traceability, monitoring, and compliance safeguards.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Audit trails must remain unique to each user. Try again.",
                    options: [{ id: "m2_w3", label: "Rewind", nextScene: "dp5_return1" }]
                  }
                ]
              },
              {
                id: "dp5_wrong2B",
                title: "Wrong Decision: 'One Time' Breach",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Wrong. Even temporary shared access can cause major audit and legal issues.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Convenience is not an excuse for policy violation. Try again.",
                    options: [{ id: "m2_w4", label: "Rewind", nextScene: "dp5_return1" }]
                  }
                ]
              },
              {
                id: "dp5_return2",
                title: "Back to Story",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So even ‘helping a colleague’ isn’t an excuse when it comes to data access?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Access rules exist to protect everyone — including you.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Data governance ensures accountability, accuracy, monitoring, retention, and secure disposal.",
                    side: "left"
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Owners ensure what happens with data. Stewards ensure how it’s handled.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "A team discovers old sensitive records still stored in an unmonitored archive server. What is the RIGHT action?",
                    options: [
                      { id: "opt3a", label: "A: Ignore — If nobody touched it for years, it's harmless.", nextScene: "dp5_wrong3A" },
                      { id: "opt3b", label: "B: Report to data governance team for classification + retention review.", nextScene: "dp5_correct3" },
                      { id: "opt3c", label: "C: Quietly delete it to avoid issues.", nextScene: "dp5_wrong3B" }
                    ]
                  }
                ]
              },
              {
                id: "dp5_correct3",
                title: "Correct Decision: Governance Protocol",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Perfect. Old archives require classification review, retention checks, and controlled disposal if needed.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Governance cycle verified. Finalizing module...",
                    options: [{ id: "m2_c3", label: "Finish", nextScene: "dp5_conclusion" }]
                  }
                ]
              },
              {
                id: "dp5_wrong3A",
                title: "Wrong Decision: Ignoring Shadow Data",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Ignoring ungoverned data is dangerous — it’s a major compliance and cyber risk.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Shadow data is a primary source of breaches. Try again.",
                    options: [{ id: "m2_w5", label: "Rewind", nextScene: "dp5_return2" }]
                  }
                ]
              },
              {
                id: "dp5_wrong3B",
                title: "Wrong Decision: Unapproved Deletion",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Unauthorized deletion violates retention policy and could violate legal requirements.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Destruction of records must follow an approved workflow. Try again.",
                    options: [{ id: "m2_w6", label: "Rewind", nextScene: "dp5_return2" }]
                  }
                ]
              },
              {
                id: "dp5_conclusion",
                title: "Module Summary",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Secure storage, proper access, and strong governance are the backbone of data protection.",
                    side: "left"
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "This module shows how small decisions shape big outcomes.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Everything you choose in the workplace has consequences — positive or negative.",
                    side: "left"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'dp-m6',
      title: 'Module 6: Data Processing Principles (Video Module)',
      summary: 'This module will be delivered through a dedicated video. Watch the placeholder video now—your assessment unlocks only after completion.',
      order: 6,
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Data Processing Principles – Placeholder Video',
          instructions: 'This is a temporary placeholder. The final training video will be added after export. Please watch fully to proceed.',
          videoUrl: 'https://www.example.com/placeholder-video.mp4'
        },
        {
          type: 'text',
          body: 'Great job completing the video! Now answer the logic check below to continue.'
        },
        {
          type: 'check',
          question: 'Which of the following is a core principle of lawful data processing?',
          options: [
            'Processing personal data without informing the data subject',
            'Collecting only the data necessary for the specific purpose',
            'Retaining all data indefinitely for future potential use'
          ],
          correctIndex: 1,
          explanation: 'Purpose limitation and data minimization are fundamental principles—organizations may only collect data needed for a clearly defined and lawful purpose.'
        }
      ]
    },
    {
      id: 'dp-m7',
      title: 'Module 7: Employee Responsibilities & Workplace Best Practices',
      summary: 'Interactive branching comic covering employee duties, confidentiality, secure communication, remote-work rules, social media risks, and everyday compliance decisions.',
      order: 7,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Employee Responsibilities & Workplace Best Practices',
            scenes: [
              {
                id: "dp7_intro",
                title: "The Responsibility Briefing",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 7. Today, we explore employee responsibilities and best practices—your role in keeping the workplace safe, compliant, and trustworthy.",
                    side: "left",
                    visualDescription: "Training room with bright screen titled 'Employee Responsibilities & Best Practices'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I know there are policies… but sometimes I’m not sure what counts as a serious violation and what doesn’t.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "That’s exactly why this module matters. Responsibility lapses usually begin with small habits.",
                    side: "left",
                    visualDescription: "Meera switches to a slide titled 'Small Mistakes → Big Risks'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So this isn’t just about rules… it’s about discipline?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Every employee must follow the Data Handling Code of Conduct—using data ONLY for legitimate business purposes.",
                    side: "left"
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Confidentiality is not negotiable. One careless act can damage trust permanently.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "You receive an email with a confidential salary sheet attached—but the sender looks unusual. What should you do?",
                    options: [
                      { id: "opt1a", label: "A: Download it quickly and forward it to your manager.", nextScene: "dp7_wrong1A" },
                      { id: "opt1b", label: "B: Verify the sender, report it if suspicious, and avoid opening the attachment.", nextScene: "dp7_correct1" },
                      { id: "opt1c", label: "C: Open it on your phone—mobile devices are safer.", nextScene: "dp7_wrong1B" }
                    ]
                  }
                ]
              },
              {
                id: "dp7_correct1",
                title: "Correct Action: Safe Communication",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Verification and caution are essential. Reporting early prevents major incidents.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Data verification standard applied. Continue?",
                    options: [{ id: "m7_c1", label: "Back to Story", nextScene: "dp7_return1" }]
                  }
                ]
              },
              {
                id: "dp7_wrong1A",
                title: "Wrong Choice: Propagating Risk",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Forwarding unknown attachments could propagate malware internally.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This is one of the most common causes of data breaches through human error.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "This behavior compromises the network. Try again.",
                    options: [{ id: "m7_w1", label: "Rewind to Decision", nextScene: "dp7_intro" }]
                  }
                ]
              },
              {
                id: "dp7_wrong1B",
                title: "Wrong Choice: Device Misconception",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Opening suspicious documents on personal devices increases exposure—mobile phones aren’t inherently safer.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Unauthorized devices are outside our security perimeter. Try again.",
                    options: [{ id: "m7_w2", label: "Rewind", nextScene: "dp7_intro" }]
                  }
                ]
              },
              {
                id: "dp7_return1",
                title: "Back to Story",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I didn’t realize email mistakes could create such big risks.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "They do. That’s why safe communication and a 'Clean Desk' policy are essential.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "You step away from your desk for a 5-minute break. What should you do?",
                    options: [
                      { id: "opt2a", label: "A: Leave the laptop open—you’ll be back soon.", nextScene: "dp7_wrong2A" },
                      { id: "opt2b", label: "B: Lock your screen and secure all sensitive papers.", nextScene: "dp7_correct2" },
                      { id: "opt2c", label: "C: Hide papers under your keyboard—it looks safe.", nextScene: "dp7_wrong2B" }
                    ]
                  }
                ]
              },
              {
                id: "dp7_correct2",
                title: "Correct: Clean Desk & Clear Screen",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. The Clean Desk & Clear Screen policy prevents accidental exposure of data to unauthorized eyes.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Security habit verified. Continue?",
                    options: [{ id: "m7_c2", label: "Continue Story", nextScene: "dp7_return2" }]
                  }
                ]
              },
              {
                id: "dp7_wrong2A",
                title: "Wrong Choice: Exposed Access",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This is a common but risky mistake. Unattended screens are a major confidentiality hazard.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Data visibility must be controlled at all times. Try again.",
                    options: [{ id: "m7_w3", label: "Rewind", nextScene: "dp7_return1" }]
                  }
                ]
              },
              {
                id: "dp7_wrong2B",
                title: "Wrong Choice: Ineffective Security",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Hiding papers is not protection. Anyone passing by could view or photograph them.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Physical security requires locked storage. Try again.",
                    options: [{ id: "m7_w4", label: "Rewind", nextScene: "dp7_return1" }]
                  }
                ]
              },
              {
                id: "dp7_return2",
                title: "Back to Story",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "I see how small habits strengthen overall security.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "For remote work, always use secure networks and avoid public Wi-Fi unless connected via VPN.",
                    side: "left"
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "What about sharing office moments on social media?",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "You want to post a photo from an office event on social media. What should you do?",
                    options: [
                      { id: "opt3a", label: "A: Post it immediately—it’s your phone, your account.", nextScene: "dp7_wrong3A" },
                      { id: "opt3b", label: "B: Check if the image contains confidential boards, people, or discussions before posting.", nextScene: "dp7_correct3" },
                      { id: "opt3c", label: "C: Tag everyone from the office to increase visibility.", nextScene: "dp7_wrong3B" }
                    ]
                  }
                ]
              },
              {
                id: "dp7_correct3",
                title: "Correct: Digital Discretion",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Discretion is essential—visuals can unintentionally reveal confidential discussions or proprietary systems.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Privacy standard maintained. Finalizing module...",
                    options: [{ id: "m7_c3", label: "Finish", nextScene: "dp7_conclusion" }]
                  }
                ]
              },
              {
                id: "dp7_wrong3A",
                title: "Wrong Choice: Unintended Disclosure",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Personal social media still poses organizational risk—confidential information can be exposed in backgrounds.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Digital footprint must be carefully managed. Try again.",
                    options: [{ id: "m7_w5", label: "Rewind", nextScene: "dp7_return2" }]
                  }
                ]
              },
              {
                id: "dp7_wrong3B",
                title: "Wrong Choice: Privacy Infringement",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Tagging increases reach and exposure—especially if some colleagues prefer not to be identified publicly.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Respect for collective privacy is mandatory. Try again.",
                    options: [{ id: "m7_w6", label: "Rewind", nextScene: "dp7_return2" }]
                  }
                ]
              },
              {
                id: "dp7_conclusion",
                title: "Module Summary",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Employee responsibility is about protecting trust, confidentiality, and ethical behavior every day.",
                    side: "left"
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "This module made me rethink so many everyday habits.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Good. Responsible behavior protects everyone.",
                    side: "left"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'dp-m8',
      title: 'Module 8: Data Breach Prevention & Incident Response',
      summary: 'Learning to identify, contain, and report data breaches effectively to minimize organizational risk.',
      order: 8,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Data Breach Prevention & Incident Response (Extended)',
            scenes: [
              {
                title: 'Understanding Breaches',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome back, everyone. Today we dive into Data Breach Prevention & Incident Response — one of the MOST high-risk areas in data privacy.",
                    side: "left",
                    visualDescription: "Training room with dashboard titled 'Module 8 – Breach Prevention & Response'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Meera, what exactly counts as a data breach? Only hacking?",
                    side: "right",
                    visualDescription: "Aarav raises his hand curiously."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not at all. A breach includes ANY unauthorized access, exposure, alteration, or destruction of personal or confidential data.",
                    side: "left",
                    visualDescription: "Icons around Meera: 'Access', 'Exposure', 'Modification', 'Destruction'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So if an employee accidentally emails a file to the wrong person… that’s also a breach?",
                    side: "right",
                    visualDescription: "Riya looks concerned."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Yes. Human error is one of the leading causes of breaches globally.",
                    side: "left",
                    visualDescription: "Meera shows a pie chart titled 'Causes of Breach', with 'Human Error' highlighted."
                  }
                ]
              },
              {
                title: 'Common Breach Scenarios',
                panels: [
                  {
                    character: "Meera",
                    text: "Let’s look at real-world scenarios organizations face daily.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Meera switches slides showing multiple breach examples."
                  },
                  {
                    character: "Meera",
                    text: "• Weak or reused passwords\n• Misconfigured cloud storage\n• Phishing and social engineering attacks\n• Lost laptops or USB devices\n• Internal misuse or negligence",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Five icons representing each risk."
                  },
                  {
                    character: "Aarav",
                    text: "Phishing is still that common?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    visualDescription: "Aarav tilts his head."
                  },
                  {
                    character: "Meera",
                    text: "Almost 90% of breaches globally start with phishing. One careless click can compromise an entire system.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "A large envelope with a suspicious link flashes red."
                  }
                ]
              },
              {
                title: 'Early Detection',
                panels: [
                  {
                    character: "Riya",
                    text: "How do we detect a breach early before it spreads?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    visualDescription: "Riya leans forward listening intently."
                  },
                  {
                    character: "Meera",
                    text: "Warning signs include unusual logins, sudden data transfers, system slowdowns, unauthorized setting changes, and unknown applications running.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Alerts flashing across a system dashboard."
                  },
                  {
                    character: "Meera",
                    text: "Detection tools help, but employees remain the first line of defense. If something feels off—report immediately.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Employee noticing a suspicious pop-up."
                  }
                ]
              },
              {
                title: 'Incident Response Framework',
                panels: [
                  {
                    character: "Mr. Kapoor",
                    text: "Remember: detecting is not enough. The RESPONSE framework must be followed strictly.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    visualDescription: "Mr. Kapoor stands with a no-nonsense tone."
                  },
                  {
                    character: "Meera",
                    text: "A proper Incident Response Framework includes:\n1. Identify\n2. Classify severity\n3. Contain\n4. Investigate\n5. Report\n6. Recover\n7. Review & Improve",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Flowchart appears with 7 steps."
                  },
                  {
                    character: "Aarav",
                    text: "Which step is most urgent?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    visualDescription: "Aarav looks concerned."
                  },
                  {
                    character: "Meera",
                    text: "Containment. Stopping the spread immediately prevents further damage.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "System being isolated from network."
                  }
                ]
              },
              {
                title: 'Containment & Escalation',
                panels: [
                  {
                    character: "Meera",
                    text: "Containment involves disabling compromised accounts, isolating devices, blocking network traffic, and revoking access.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Mr. Kapoor",
                    text: "And don’t forget — leadership must be notified immediately for high-risk cases.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor"
                  },
                  {
                    character: "Aarav",
                    text: "Who gets involved once it’s escalated?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    text: "A structured Incident Response Team: IT Security, Legal, HR, Compliance, Management.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              },
              {
                title: 'Legal Reporting & Communication',
                panels: [
                  {
                    character: "Riya",
                    text: "When do we report to external authorities?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Meera",
                    text: "CERT-In requires organizations to report certain cyber incidents within strict timelines—sometimes as little as 6 hours.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Meera",
                    text: "Incorrect or delayed reporting can result in penalties or compliance failures.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Mr. Kapoor",
                    text: "Communication with employees, customers, and media must ALWAYS go through legal and PR teams. No independent communication.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor"
                  }
                ]
              },
              {
                title: 'Investigation & Recovery',
                panels: [
                  {
                    character: "Aarav",
                    text: "What happens after containment?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    text: "A root-cause analysis begins: log reviews, employee interviews, system scans, and forensic analysis.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Meera",
                    text: "Then comes recovery: using backups, restoring systems, validating data integrity, and ensuring closures.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              },
              {
                title: 'Lessons Learned & Future Prevention',
                panels: [
                  {
                    character: "Riya",
                    text: "Do organizations review breaches afterwards?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Meera",
                    text: "They must. Post-incident reviews strengthen security and prevent recurrence.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Mr. Kapoor",
                    text: "Policies, training, and controls are updated based on lessons learned. No breach should go to waste.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor"
                  },
                  {
                    character: "All",
                    text: "Strong prevention, swift detection, and disciplined response protect the organization and everyone’s data.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'dp-m9',
      title: 'Module 9: Data Retention, Archiving & Secure Disposal',
      summary: 'Understanding how organizations manage data retention cycles, archival responsibilities, compliance requirements, and secure disposal practices.',
      order: 9,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Data Lifecycle: Retention, Archiving & Disposal',
            scenes: [
              {
                id: "dp9_s1",
                title: "The Importance of Retention",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 9! Today, we explore how long data should stay with us and what happens when it's no longer needed.",
                    side: "left",
                    visualDescription: "Training room, digital board shows: 'Data Retention | Archiving | Disposal'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Why can’t we just keep everything forever? Storage isn’t that expensive anymore.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Keeping unnecessary data increases risk. If it's breached or requested during audits, it creates major liabilities.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "What is the MAIN reason organizations set strict retention timelines?",
                    options: [
                      { id: "opt1a", label: "A: To reduce server maintenance costs.", nextScene: "wrong_r1" },
                      { id: "opt1b", label: "B: To comply with laws and reduce unnecessary exposure to risk.", nextScene: "correct_r1" },
                      { id: "opt1c", label: "C: To make employees delete old emails regularly.", nextScene: "wrong_r2" }
                    ]
                  }
                ]
              },
              {
                id: "correct_r1",
                title: "Branch: Correct R1",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Retention schedules help meet statutory requirements and avoid storing risky outdated data.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Regulatory logic verified. Continue?",
                    options: [{ id: "m9_c1", label: "Next Lesson", nextScene: "scene2" }]
                  }
                ]
              },
              {
                id: "wrong_r1",
                title: "Branch: Wrong R1",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not exactly. Cost savings matter, but legal compliance and risk reduction are the primary drivers.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Reviewing principles... Try the core reason.",
                    options: [{ id: "m9_w1", label: "Rewind", nextScene: "dp9_s1" }]
                  }
                ]
              },
              {
                id: "wrong_r2",
                title: "Branch: Wrong R2",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "No. Email housekeeping is a benefit, not the main goal. It’s about preventing systemic data risk.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Focus on organization-wide safety. Try again.",
                    options: [{ id: "m9_w2", label: "Rewind", nextScene: "dp9_s1" }]
                  }
                ]
              },
              {
                id: "scene2",
                title: "Legal Retention Needs",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Are retention timelines the same for all types of data?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "No. Financial records, HR files, contracts, customer data—each has different timelines under Indian law.",
                    side: "left"
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Retention schedules ensure we keep data only as long as legally necessary.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "A payroll record reaches the end of its mandated retention period. What is the RIGHT action?",
                    options: [
                      { id: "opt2a", label: "A: Delete it securely as per disposal policy.", nextScene: "correct_r3" },
                      { id: "opt2b", label: "B: Keep it indefinitely 'just in case'.", nextScene: "wrong_r3" },
                      { id: "opt2c", label: "C: Move it to a shared drive for convenience.", nextScene: "wrong_r4" }
                    ]
                  }
                ]
              },
              {
                id: "correct_r3",
                title: "Branch: Correct R3",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Data past retention should be destroyed securely to prevent unnecessary legal exposure.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Data lifecycle maintained. Continue?",
                    options: [{ id: "m9_c2", label: "Next Topic", nextScene: "scene3" }]
                  }
                ]
              },
              {
                id: "wrong_r3",
                title: "Branch: Wrong R3",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Keeping unnecessary data increases liability. If breached, we're legally accountable for having it at all.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Safety requires timely deletion. Try again.",
                    options: [{ id: "m9_w3", label: "Rewind", nextScene: "scene2" }]
                  }
                ]
              },
              {
                id: "wrong_r4",
                title: "Branch: Wrong R4",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Moving outdated data to shared storage violates both retention and security rules.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Shadow data is high risk. Try again.",
                    options: [{ id: "m9_w4", label: "Rewind", nextScene: "scene2" }]
                  }
                ]
              },
              {
                id: "scene3",
                title: "Archiving vs. Storage",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Is archiving the same as storing documents long-term?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not quite. Archives are controlled environments for long-term preservation with restricted access and audit trails.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Which of these BEST describes archival access standards?",
                    options: [
                      { id: "opt3a", label: "A: Access is restricted and monitored.", nextScene: "correct_r5" },
                      { id: "opt3b", label: "B: Anyone in the department can access it.", nextScene: "wrong_r5" },
                      { id: "opt3c", label: "C: Archives are public for transparency.", nextScene: "wrong_r6" }
                    ]
                  }
                ]
              },
              {
                id: "correct_r5",
                title: "Branch: Correct R5",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Archives must be highly restricted and logged to maintain data integrity.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Archival protocol verified. Continue?",
                    options: [{ id: "m9_c3", label: "Next Topic", nextScene: "scene4" }]
                  }
                ]
              },
              {
                id: "wrong_r5",
                title: "Branch: Wrong R5",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Incorrect. Archival access must be on a need-to-know basis only, not open to whole departments.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Review access control logic. Try again.",
                    options: [{ id: "m9_w5", label: "Rewind", nextScene: "scene3" }]
                  }
                ]
              },
              {
                id: "wrong_r6",
                title: "Branch: Wrong R6",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Absolutely not. Archives often contain sensitive regulated data and must be kept secure.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Security is non-negotiable. Try again.",
                    options: [{ id: "m9_w6", label: "Rewind", nextScene: "scene3" }]
                  }
                ]
              },
              {
                id: "scene4",
                title: "Secure Disposal",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "If deleting a file isn’t enough, what does secure disposal involve?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Digital deletion requires overwriting, cryptographic erasure, or certified physical destruction of disks.",
                    side: "left"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "For physical paper, we use cross-cut shredding, pulping, or supervised incineration.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "A departing employee copied sensitive data to a USB for 'reference'. What MUST you do?",
                    options: [
                      { id: "opt4a", label: "A: Report immediately—it’s a violation.", nextScene: "correct_r7" },
                      { id: "opt4b", label: "B: Ignore it since they already left.", nextScene: "wrong_r7" },
                      { id: "opt4c", label: "C: Ask them to return it at their convenience.", nextScene: "wrong_r8" }
                    ]
                  }
                ]
              },
              {
                id: "correct_r7",
                title: "Branch: Correct R7",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Unauthorized copying is a severe violation with huge legal implications.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Enforcement verified. Wrap up module?",
                    options: [{ id: "m9_c4", label: "Finish Module", nextScene: "scene5" }]
                  }
                ]
              },
              {
                id: "wrong_r7",
                title: "Branch: Wrong R7",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Absolutely not. Retention and disposal rules apply regardless of employment status.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Silence equals liability. Try again.",
                    options: [{ id: "m9_w7", label: "Rewind", nextScene: "scene4" }]
                  }
                ]
              },
              {
                id: "wrong_r8",
                title: "Branch: Wrong R8",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Convenience is not a security standard. Breaches happen instantly when data is unsecured.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Urgently correct this path. Try again.",
                    options: [{ id: "m9_w8", label: "Rewind", nextScene: "scene4" }]
                  }
                ]
              },
              {
                id: "scene5",
                title: "Module Summary",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Retention helps compliance. Archiving preserves essential data. Secure disposal protects from risk.",
                    side: "left"
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I didn’t realize improper deletion could be so risky. This lifecycle management makes sense now.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. By following these rules, we build a safer, more compliant organization. Well done!",
                    side: "left"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  assessment: [
    {
      "id": "dpq1",
      "text": "Under the DPDP Act, which of the following is the MOST accurate definition of 'Purpose Limitation'?",
      "options": [
        "The organization can repurpose personal data as long as it benefits the customer.",
        "Data must be processed only for the purpose explicitly communicated and consented to by the Data Principal.",
        "Once data is collected, secondary usage is automatically permitted unless restricted by the government."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq2",
      "text": "A health-tech company stores diagnostic reports indefinitely, claiming that old records 'might be useful someday.' Which principle is being violated?",
      "options": [
        "Data Minimization",
        "Purpose Limitation",
        "Storage Limitation"
      ],
      "correctAnswer": 2
    },
    {
      "id": "dpq3",
      "text": "Case Study: An HR executive exports employee salary files to a personal Google Drive to 'work from home.' No breach occurs. Which statement BEST describes this event?",
      "options": [
        "This is acceptable because no external party accessed the data.",
        "This is a severe policy violation because unauthorized storage increases breach and leakage risk.",
        "This is permitted if the employee deletes the file after finishing work."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq4",
      "text": "Which of the following combinations qualifies as 'Sensitive Personal Data' under privacy best practices?",
      "options": [
        "Email address + employee ID",
        "Biometric data + financial details",
        "IP address + device information"
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq5",
      "text": "A Data Principal requests deletion of their personal data, but the company must retain it to comply with tax laws. What should the company do?",
      "options": [
        "Delete the data immediately because the individual requested it.",
        "Retain the data only for the legally mandated duration and then delete it securely.",
        "Reject the request permanently because the law overrides deletion rights entirely."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq6",
      "text": "Case Study: A vendor claims to provide 'government-approved encryption,' but refuses to disclose the algorithm for security reasons. What is the BEST course of action?",
      "options": [
        "Proceed because encryption is mentioned.",
        "Reject or pause engagement until full security documentation is shared.",
        "Trust the vendor if other customers have not complained."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq7",
      "text": "Which scenario MOST accurately represents a breach of Role-Based Access Control (RBAC)?",
      "options": [
        "An HR manager viewing payroll details.",
        "A finance intern accessing the entire employee medical claims archive.",
        "A team lead accessing the performance data of her own team."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq8",
      "text": "Under incident response best practices, what is the FIRST step after detecting unusual login patterns?",
      "options": [
        "Contain the account or system immediately.",
        "Notify CERT-In before internal teams.",
        "Publish internal communication to all employees."
      ],
      "correctAnswer": 0
    },
    {
      "id": "dpq9",
      "text": "Case Study: A customer requests a copy of all their personal data. The data exists in both structured CRM entries and unstructured email threads. What is the correct response?",
      "options": [
        "Provide only structured data because unstructured data is not easily extractable.",
        "Provide all personal data irrespective of format within the statutory timeline.",
        "Refuse because unstructured data may contain internal discussions."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq10",
      "text": "Which of the following BEST represents 'Privacy by Design'?",
      "options": [
        "Adding encryption after deployment.",
        "Embedding privacy safeguards into system architecture from the start.",
        "Training employees annually on privacy compliance."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq11",
      "text": "Case Study: A marketing analyst accesses customer purchase history to predict buying trends. Which condition MUST be satisfied for this to be compliant?",
      "options": [
        "Data minimization must be ensured and the purpose must match the original collection purpose.",
        "The analyst only needs managerial approval.",
        "As long as the data is anonymized later, no approval is needed."
      ],
      "correctAnswer": 0
    },
    {
      "id": "dpq12",
      "text": "Unauthorized deletion of data before the retention period expires is primarily a violation of:",
      "options": [
        "Purpose limitation",
        "Retention & Archiving policies",
        "Transparency obligations"
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq13",
      "text": "A backup tape from 2018 contains outdated customer KYC data. The data is no longer required. What must be done?",
      "options": [
        "Retain the tape because backups are exempt from deletion.",
        "Securely destroy or cryptographically erase the backup in line with disposal policy.",
        "Move the tape to a secondary archive to avoid accidental deletion."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq14",
      "text": "Case Study: A former employee still has access to a shared folder containing confidential design documents. What does this represent?",
      "options": [
        "A harmless oversight because the employee no longer logs in.",
        "A critical RBAC violation and potential data leakage vector.",
        "A permissible grace period post-employment."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq15",
      "text": "Which of the following is the MOST appropriate definition of 'Data Fiduciary'?",
      "options": [
        "Any person whose data is being processed.",
        "The entity that determines the purpose and means of processing personal data.",
        "A third-party processor who stores data."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq16",
      "text": "Case Study: During an audit, it is discovered that HR maintains personal files in both the HRMS system and an unprotected Excel sheet. What is the PRIMARY risk?",
      "options": [
        "Duplication increases operational efficiency.",
        "Unprotected unstructured data increases breach likelihood and violates governance requirements.",
        "It is acceptable as long as HR has access to both systems."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq17",
      "text": "Which of the following MOST accurately describes 'Data Anonymization'?",
      "options": [
        "Data is masked but can be re-identified later.",
        "Data is irreversibly transformed to prevent re-identification.",
        "Data is stored without names but still contains identifiers."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq18",
      "text": "In which scenario is data processing MOST likely to be unlawful?",
      "options": [
        "The data is processed after obtaining valid consent for a stated purpose.",
        "The data is processed for a new purpose incompatible with the original consent.",
        "The data is processed for fraud detection."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq19",
      "text": "Case Study: A finance system detects multiple failed login attempts from a foreign IP. What is the MOST correct action?",
      "options": [
        "Ignore it if no successful login occurs.",
        "Trigger automated monitoring, isolate the account, and escalate to security teams.",
        "Email the user to check if they are traveling."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq20",
      "text": "Which of the following BEST describes 'Lawful Processing'?",
      "options": [
        "Processing based solely on internal business justification.",
        "Processing based on consent, legal obligation, or legitimate purpose aligned with the law.",
        "Processing done as long as there is no visible harm."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq21",
      "text": "Case Study: A vendor requests partial access to customer data to perform warranty repairs. What is needed BEFORE sharing?",
      "options": [
        "Vendor must sign a Data Processing Agreement defining controls and responsibilities.",
        "A verbal assurance from vendor leadership.",
        "Only managerial approval within the company."
      ],
      "correctAnswer": 0
    },
    {
      "id": "dpq22",
      "text": "Which activity MOST clearly requires 'Privacy Impact Assessment'?",
      "options": [
        "Launching a public newsletter with generic updates.",
        "Deploying facial recognition for attendance tracking.",
        "Changing the office cafeteria vendor."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq23",
      "text": "Case Study: An employee accidentally sends a confidential file to the wrong supplier, who claims they deleted it. What should happen NEXT?",
      "options": [
        "Case is closed because the supplier claims deletion.",
        "Trigger incident response, document impact, verify deletion, and report if required.",
        "No need to escalate unless the supplier misuses the data."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq24",
      "text": "Which of the following statements MOST accurately represents 'Data Minimization'?",
      "options": [
        "Collect only data that is necessary for the intended purpose.",
        "Collect as much data as possible in case it becomes useful later.",
        "Collect data and share it with third parties for analysis."
      ],
      "correctAnswer": 0
    },
    {
      "id": "dpq25",
      "text": "Case Study: A hospital wants to use old patient data to train an AI prediction model. Consent was originally taken only for treatment. What is legally required?",
      "options": [
        "No further action is needed because it supports healthcare research.",
        "Obtain fresh consent or anonymize data before using it.",
        "Use data without consent if the AI model is internal."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq26",
      "text": "Which is the MOST accurate statement regarding physical data disposal?",
      "options": [
        "Tearing papers into two pieces is sufficient if the waste is handled internally.",
        "Confidential records must be shredded, pulped, or incinerated under supervision.",
        "Physical disposal is unnecessary if digital copies exist."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq27",
      "text": "Case Study: A development team uses live customer data for testing because 'mock data takes too long.' What is the compliance impact?",
      "options": [
        "Permissible if developers keep the data confidential.",
        "A serious violation because testing must use anonymized or synthetic data.",
        "Allowed as long as the CTO approves."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq28",
      "text": "Which of the following BEST indicates a high-severity data breach?",
      "options": [
        "Disclosure of anonymized data.",
        "Unauthorized exposure of sensitive personal data such as biometrics.",
        "An employee viewing a report without permission but not downloading it."
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq29",
      "text": "Case Study: A customer withdraws consent for marketing communication, but the system continues sending emails for 30 days. Which principle is MOST violated?",
      "options": [
        "Right to Erasure",
        "Right to Withdraw Consent & Fair Processing",
        "Purpose Limitation"
      ],
      "correctAnswer": 1
    },
    {
      "id": "dpq30",
      "text": "Which of the following BEST describes 'Secure Lifecycle Management'?",
      "options": [
        "Managing data from creation to deletion with appropriate controls at every stage.",
        "Creating data only when legally required.",
        "Ensuring data is stored indefinitely for reference."
      ],
      "correctAnswer": 0
    }
  ]
};

export default dataPrivacy;