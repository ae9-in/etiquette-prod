import { Course } from '../../types';

const informationSecurityAwareness: Course = {
  id: 'info-sec-2024',
  title: 'Information Security awareness',
  description: 'Protecting the digital perimeter: phishing, social engineering, and data protection.',
  category: 'Cyber Security',
  duration: '120 mins',
  icon: '🔒',
  colorTheme: 'violet',
  modules: [
    {
      id: 'is-m1',
      title: 'Module 1: Foundations of Data Privacy & Data Protection',
      summary: 'Understanding the core concepts of privacy, security, and responsible data governance.',
      order: 1,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Foundations of Data Privacy & Protection',
            scenes: [
              {
                title: 'Data Privacy Basics',
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
                    side: "right",
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
                    side: "right",
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
                    side: "right",
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
                    side: "right",
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
        }
      ]
    },
    {
      id: 'is-m2',
      title: 'Module 2: Anatomy of a Cyber Attack',
      summary: 'A detailed look at how attackers target organizations and where vulnerabilities hide.',
      order: 2,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'The Anatomy of a Cyber Attack',
          videoUrl: '/assets/placeholders/cyber-attack-anatomy.mp4',
          instructions: 'Watch this session to understand the stages of a cyber attack: Reconnaissance, Entry, Escalation, and Exfiltration.'
        },
        {
          type: 'check',
          question: "What is the most common entry point for a malware attack in a corporate environment?",
          options: [
            "Encrypted company databases",
            "Phishing emails and malicious links",
            "Hardware malfunctions in the server room"
          ],
          correctIndex: 1,
          explanation: "Phishing remains the #1 entry vector for attackers, relying on human psychology rather than just technical exploits."
        }
      ]
    },
    {
      id: 'is-m3',
      title: 'Module 3: "Small Mistakes, Big Risks"',
      summary: 'Identifying Information Security Risks and Threats through everyday awareness.',
      order: 3,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Small Mistakes, Big Risks',
            scenes: [
              {
                title: 'Identifying Risks',
                panels: [
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "Welcome back, everyone. Today’s topic is Information Security Risks and Threats. Riya, when you hear the word ‘security risk’, what do you imagine?",
                    side: "left",
                    visualDescription: "Training room; Sonal stands near a screen titled 'Information Security Risks'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "Honestly? Hackers breaking into systems or some big cyber attack.",
                    side: "right",
                    visualDescription: "Riya sits with a notebook, speaking casually."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "That’s a common assumption—but most risks don’t start that dramatically. Many security incidents begin with simple everyday mistakes.",
                    side: "left",
                    visualDescription: "Karan gestures toward a slide showing small mistakes leading to warnings."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "Mistakes? Like what?",
                    side: "right",
                    visualDescription: "Riya leans forward, curious."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "A risk exists whenever information isn’t properly protected—sharing information incorrectly, storing it insecurely, or giving access to someone who shouldn’t have it.",
                    side: "left",
                    visualDescription: "Karan points at icons: unlocked file, wrong sharing arrow, open door."
                  },
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "And risks don’t always cause immediate damage, but if ignored, they can turn into serious incidents.",
                    side: "left",
                    visualDescription: "Sonal speaks calmly, reinforcing the seriousness."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "So risks are like warning signs before something bad happens?",
                    side: "right",
                    visualDescription: "Riya raises her hand slightly while thinking aloud."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "Exactly. Think of risks as open doors—if they’re not closed, someone or something will eventually walk in.",
                    side: "left",
                    visualDescription: "Visual metaphor: an open door glowing red."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "What are some common risks at work?",
                    side: "right",
                    visualDescription: "Riya asks with a slightly concerned look."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "Some major risks include data loss, unauthorized access from weak passwords, improper data sharing, and lack of awareness.",
                    side: "left",
                    visualDescription: "Karan lists risks on a screen with simple icons."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "I didn’t realize lack of awareness itself is a risk.",
                    side: "right",
                    visualDescription: "Riya looks thoughtful."
                  },
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "It is. When people don’t recognise warning signs, they unintentionally put the organization at risk.",
                    side: "left",
                    visualDescription: "Sonal speaks gently but firmly."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "Are these risks mostly caused by outsiders?",
                    side: "right",
                    visualDescription: "Riya tilts her head, curious."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "Not always. Many threats actually come from inside the organization.",
                    side: "left",
                    visualDescription: "Karan shows a slide titled 'Internal Threats'."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "Inside? You mean employees?",
                    side: "right",
                    visualDescription: "Riya looks surprised, eyes widening."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "Yes—often unintentionally. Like sending confidential data to the wrong person or using personal cloud storage.",
                    side: "left",
                    visualDescription: "Visual pop-up: a mistaken email being sent."
                  },
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "Internal threats are dangerous because employees already have trusted access.",
                    side: "left",
                    visualDescription: "Sonal stands beside a company org chart with highlighted access zones."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "And external threats?",
                    side: "right",
                    visualDescription: "Riya gestures toward the screen."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "External threats come from cyber criminals, fraudsters, fake vendors. They use phishing emails, malware, fake websites, and social engineering.",
                    side: "left",
                    visualDescription: "Karan shows a phishing email on screen."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "So employees are usually the easiest target?",
                    side: "right",
                    visualDescription: "Riya looks slightly troubled."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "Exactly. Attackers target people, not just systems. One click on a suspicious link can expose login details.",
                    side: "left",
                    visualDescription: "Close-up of a mouse hovering over a phishing link."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "What happens if a risk turns into a real security failure?",
                    side: "right",
                    visualDescription: "Riya folds her hands worriedly."
                  },
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "The impact can be serious—financial losses, legal penalties, and loss of customer trust.",
                    side: "left",
                    visualDescription: "Sonal points to a slide with warning icons."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "There can also be system downtime, data loss, and investigations. Employees may face stress and accountability issues.",
                    side: "left",
                    visualDescription: "Karan displays a timeline of incident consequences."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "So even small actions can affect the entire business.",
                    side: "right",
                    visualDescription: "Riya speaks seriously now, fully aware."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "That’s right. But the good news is—employees can also reduce risks.",
                    side: "left",
                    visualDescription: "Karan smiles encouragingly."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "How?",
                    side: "right",
                    visualDescription: "Riya gestures openly, ready to learn."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "By being aware, cautious, and verifying before acting. Never assume—always check. And report mistakes or suspicious activity immediately.",
                    side: "left",
                    visualDescription: "Karan shows a checklist titled 'Reduce Risks'."
                  },
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "Early reporting can stop small issues from becoming major incidents.",
                    side: "left",
                    visualDescription: "Sonal stands with a supportive expression."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer",
                    text: "I get it now. Risks and threats aren’t always dramatic—they’re often quiet and simple.",
                    side: "right",
                    visualDescription: "Riya nods with new confidence."
                  },
                  {
                    character: "Karan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt",
                    text: "Exactly. And when employees stay alert, they become the strongest line of defence.",
                    side: "left",
                    visualDescription: "Karan gives a final confident nod."
                  },
                  {
                    character: "Sonal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal&top=longHair&clothing=blazer",
                    text: "That’s the key message—recognise risks early, act responsibly, and protect everyone.",
                    side: "left",
                    visualDescription: "Final panel; Sonal closes the session. Caption: 'Information security risks grow when awareness is low — and shrink when employees stay alert.'"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'is-m4',
      title: 'Module 4: Deep Dive into Phishing & Social Engineering',
      summary: 'Mastering the art of identifying manipulation tactics used by cyber criminals.',
      order: 4,
      duration: '25 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Mastering Phishing Awareness',
          videoUrl: '/assets/placeholders/phishing-mastery.mp4',
          instructions: 'This video covers advanced social engineering tactics: Spearfishing, Vishing, and Smishing.'
        },
        {
          type: 'check',
          question: "Which social engineering tactic uses psychological pressure to make a victim act fast without thinking?",
          options: [
            "Technical jargon used by IT",
            "Creating a false sense of urgency",
            "Providing too much detail in an email"
          ],
          correctIndex: 1,
          explanation: "Urgency is a key psychological trigger used by attackers to bypass logical thinking and force immediate clicks."
        }
      ]
    },
    {
      id: 'is-m5',
      title: 'Module 5: "Handle With Care"',
      summary: 'Guidelines for safe information handling, storage, and disposal.',
      order: 5,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Safe Information Handling & Storage',
            scenes: [
              {
                title: 'Handle With Care',
                panels: [
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "Welcome back, everyone. Today we’re talking about Safe Information Handling and Storage. Nikhil, how often do you work with documents or files in a day?",
                    side: "left",
                    visualDescription: "Office floor; Pooja stands near a screen titled 'Safe Information Handling'."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "All the time—emails, spreadsheets, reports, printouts. It’s just part of daily work.",
                    side: "right",
                    visualDescription: "Nikhil sits at his workstation surrounded by open tabs and paper files."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Exactly. And because it’s routine, people often forget how important proper handling and storage really are.",
                    side: "left",
                    visualDescription: "Arjun gestures toward icons of files, papers, and a lock symbol."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "But our systems carry on security, right? Isn’t that enough?",
                    side: "right",
                    visualDescription: "Nikhil leans back, casually questioning."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Secure systems help—but they can’t protect information if it’s handled carelessly. Security doesn’t stop at technology—it continues with human behaviour.",
                    side: "left",
                    visualDescription: "Arjun speaks firmly, pointing to a slide showing a human hand mishandling documents."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "Even small actions—like leaving papers on a desk or saving files in the wrong place—can create risks.",
                    side: "left",
                    visualDescription: "Pooja shows examples of cluttered desks and misplaced files."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "Like leaving printed documents at the printer?",
                    side: "right",
                    visualDescription: "Nikhil glances toward the office printer in the background."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Exactly. Printed documents with sensitive information should never be left unattended—on desks, printers, or in meeting rooms.",
                    side: "left",
                    visualDescription: "Arjun highlights a forgotten paper on the printer tray."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "What about digital files?",
                    side: "right",
                    visualDescription: "Nikhil turns back to his laptop screen."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Digital information should only be opened, edited, and saved on approved company systems and applications.",
                    side: "left",
                    visualDescription: "Arjun points to a company-approved software dashboard."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "Personal email, personal cloud storage, or personal devices should not be used for official information unless clearly approved.",
                    side: "left",
                    visualDescription: "Pooja displays a 'Not Approved' symbol over personal apps."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "Sometimes it feels easier to quickly send a file from my personal email.",
                    side: "right",
                    visualDescription: "Nikhil shrugs, speaking honestly."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "That convenience comes with risk. Personal platforms increase the chance of data exposure, loss, or misuse.",
                    side: "left",
                    visualDescription: "Arjun shows a slide with warning icons for data leakage."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "So where should files be stored properly?",
                    side: "right",
                    visualDescription: "Nikhil leans forward attentively."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Only in approved company locations—servers, document management systems, or approved cloud platforms. Files must be kept organized with correct access permissions.",
                    side: "left",
                    visualDescription: "Arjun points to a secure folder structure on the screen."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "And permissions should be removed once the information is no longer required by someone.",
                    side: "left",
                    visualDescription: "Pooja taps on an 'Access Removed' checkbox."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "What about physical files?",
                    side: "right",
                    visualDescription: "Nikhil looks at a stack of folders on his desk."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "They must be stored in secure places—locked cabinets or restricted-access areas. And sensitive documents should not be taken outside the office unless necessary.",
                    side: "left",
                    visualDescription: "Arjun shows a locked cabinet icon."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "And disposal?",
                    side: "right",
                    visualDescription: "Nikhil raises an eyebrow."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Old or unused sensitive documents must be disposed of securely—never thrown into regular waste bins.",
                    side: "left",
                    visualDescription: "Arjun shows a shredder next to a warning sign."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "What could go wrong if information isn’t handled properly?",
                    side: "right",
                    visualDescription: "Nikhil asks seriously, reflecting concern."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Unauthorized access, data loss, leaks, legal issues, and damage to the company’s reputation.",
                    side: "left",
                    visualDescription: "Arjun lists consequences with red alert symbols."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "Employees involved may face stress and investigations—even if the mistake was unintentional.",
                    side: "left",
                    visualDescription: "Pooja speaks calmly, offering support."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "So handling information carefully also protects me.",
                    side: "right",
                    visualDescription: "Nikhil nods, realizing the personal impact."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Absolutely. Employees play a key role in safe handling and storage.",
                    side: "left",
                    visualDescription: "Arjun affirms with a supportive tone."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "So my responsibilities are…?",
                    side: "right",
                    visualDescription: "Nikhil leans forward, ready to summarise."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Handle and store information securely, follow company policies, access and share information only for business needs, and report any loss or mistake immediately.",
                    side: "left",
                    visualDescription: "Arjun presents a four-point checklist."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "And from the organization’s side, we provide secure tools, policies, training, and reporting channels.",
                    side: "left",
                    visualDescription: "Pooja emphasizes the company’s support responsibilities."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&clothing=shirt",
                    text: "Got it. Information security doesn’t end after creating data—it continues until it’s stored or disposed of properly.",
                    side: "right",
                    visualDescription: "Nikhil speaks confidently with a resolved expression."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=suit",
                    text: "Exactly. Every stage matters.",
                    side: "left",
                    visualDescription: "Arjun nods in agreement."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "That’s the message of this module—handle information with care, every time.",
                    side: "left",
                    visualDescription: "Pooja closes the session with a professional smile."
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&top=longHair&clothing=blazer",
                    text: "Information stays secure only when we handle and store it responsibly.",
                    side: "left",
                    visualDescription: "Final panel; caption appears with lock and document icons: 'Handle Information with Care.'"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'is-m6',
      title: 'Module 6: Remote Work & Mobile Security',
      summary: 'Safeguarding data outside the office environment.',
      order: 6,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Securing the Remote Perimeter',
          videoUrl: '/assets/placeholders/remote-security.mp4',
          instructions: 'Learn how to secure home Wi-Fi, use VPNs correctly, and prevent visual hacking in public spaces.'
        },
        {
          type: 'check',
          question: "When working from a public café, what is the safest way to connect to internal company systems?",
          options: [
            "Use the café’s free high-speed Wi-Fi",
            "Use your personal phone hotspot only",
            "Use a company-approved VPN over a secure connection"
          ],
          correctIndex: 2,
          explanation: "A VPN creates an encrypted tunnel for your data, protecting it from interception even on less-than-ideal networks."
        }
      ]
    },
    {
      id: 'is-m7',
      title: 'Module 7: "See It? Report It."',
      summary: 'Guidelines for incident identification and reporting.',
      order: 7,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Incident Identification & Reporting',
            scenes: [
              {
                title: 'See It? Report It.',
                panels: [
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "Welcome everyone. Today’s module is about Information Security Incident Identification and Reporting. Kunal, if you made a small security mistake, what would you do?",
                    side: "left",
                    visualDescription: "Office workstation; Rashmi stands beside a screen labeled 'Incident Identification & Reporting'."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "Honestly? I’d panic first… and then maybe hope it doesn’t turn into a big issue.",
                    side: "right",
                    visualDescription: "Kunal sits at his desk, looking worried as email pop-ups appear behind him."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "That reaction is very common—and that’s exactly why reporting matters. Most incidents start small, but grow when ignored.",
                    side: "left",
                    visualDescription: "Dev steps closer, speaking calmly with a reassuring expression."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "So what exactly counts as an information security incident?",
                    side: "right",
                    visualDescription: "Kunal leans forward slightly, genuinely curious."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Any event that threatens the confidentiality, integrity, or availability of company information—whether confirmed or suspected.",
                    side: "left",
                    visualDescription: "Dev points to a slide showing the CIA triad: Confidentiality, Integrity, Availability."
                  },
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "And employees aren’t expected to judge severity. Your job is simply to report what you notice.",
                    side: "left",
                    visualDescription: "Rashmi gestures reassuringly toward Kunal."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "What warning signs should I watch for?",
                    side: "right",
                    visualDescription: "Kunal raises his hand slightly, seeking clarity."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Look for things like unexpected emails asking for passwords or urgent action.",
                    side: "left",
                    visualDescription: "A visual bubble shows a suspicious phishing email alert."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Or unusual system behaviour—missing files, slow systems, login errors.",
                    side: "left",
                    visualDescription: "A computer screen shows an error pop-up and missing file icons."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Even realising information was sent to the wrong person counts as an incident.",
                    side: "left",
                    visualDescription: "An email misdelivery notification appears visually behind Dev."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Also: missing documents or devices, or access alerts from unknown locations.",
                    side: "left",
                    visualDescription: "Icons of a missing folder and a login alert from another country appear."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "What if I accidentally sent a confidential file to the wrong email address?",
                    side: "right",
                    visualDescription: "Kunal looks anxious as he imagines sending an email to the wrong recipient."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "That is an incident—even if you realise it quickly. It must be reported immediately.",
                    side: "left",
                    visualDescription: "Dev speaks with calm clarity, reassuring but firm."
                  },
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "Reporting isn’t about blame—it’s about protecting everyone.",
                    side: "left",
                    visualDescription: "Rashmi smiles softly to ease Kunal’s concern."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "What about clicking a suspicious link and entering login details?",
                    side: "right",
                    visualDescription: "Kunal nervously recalls a past incident."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "That’s another incident. The sooner it’s reported, the faster we can secure your account.",
                    side: "left",
                    visualDescription: "Dev shows a screen with a 'Reset Password Immediately' alert."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "Why is reporting even small mistakes so important?",
                    side: "right",
                    visualDescription: "Kunal leans forward, more serious now."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Because early reporting helps us contain issues, block further access, and recover information.",
                    side: "left",
                    visualDescription: "Dev gestures to a timeline showing early vs late reporting."
                  },
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "It also protects you. Reporting shows responsibility and transparency—even when the mistake was accidental.",
                    side: "left",
                    visualDescription: "Rashmi places a supportive hand gesture toward Kunal."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "So how do I report an incident?",
                    side: "right",
                    visualDescription: "Kunal looks ready to take action."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Immediately—through the IT Helpdesk, Information Security team, or the designated reporting system.",
                    side: "left",
                    visualDescription: "Icons show a phone, ticketing system, and email support channels."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "Do I need to fix anything myself?",
                    side: "right",
                    visualDescription: "Kunal asks cautiously."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "No. Don’t investigate or try to fix it yourself. Just report what happened, when it happened, and what was involved.",
                    side: "left",
                    visualDescription: "Dev gestures to a simple 'Incident Report Checklist' on screen."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "And I won’t be punished for honest mistakes?",
                    side: "right",
                    visualDescription: "Kunal looks nervous but hopeful."
                  },
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "No. We maintain a non-punitive reporting environment. Silence is more risky than honesty.",
                    side: "left",
                    visualDescription: "Rashmi speaks warmly, emphasizing trust."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "That makes it much easier to speak up.",
                    side: "right",
                    visualDescription: "Kunal appears relieved, shoulders relaxing."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "That’s the goal. Timely reporting helps us respond faster, stay compliant, and protect the organization.",
                    side: "left",
                    visualDescription: "Dev explains confidently with a supportive tone."
                  },
                  {
                    character: "Kunal",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&top=shortHair&clothing=shirt",
                    text: "So if I see something unusual—or even suspect something—I report it.",
                    side: "right",
                    visualDescription: "Kunal speaks with renewed confidence."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev&top=shortHair&hairColor=black&clothing=suit",
                    text: "Exactly. See it. Suspect it. Report it.",
                    side: "left",
                    visualDescription: "Dev points to a bold safety poster showing the same message."
                  },
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "That’s the core message of this module—early reporting keeps small issues from becoming major incidents.",
                    side: "left",
                    visualDescription: "Rashmi closes the session with a confident and calm expression."
                  },
                  {
                    character: "Rashmi",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi&top=longHair&clothing=blazer",
                    text: "Reporting early is not a mistake—staying silent is the risk.",
                    side: "left",
                    visualDescription: "Final panel; caption at the bottom with lock and alert icons."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'is-m8',
      title: 'Module 8: Physical Security & Insider Threats',
      summary: 'Securing the physical office space and recognizing internal risks.',
      order: 8,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Beyond the Firewall: Physical Security',
          videoUrl: '/assets/placeholders/physical-security.mp4',
          instructions: 'Understand Tailgating, clean desk policies, and the risks posed by unknown hardware devices.'
        },
        {
          type: 'check',
          question: "You find an unknown USB drive in the office lobby. What is the safest course of action?",
          options: [
            "Plug it in to see who it belongs to",
            "Hand it over to the IT Security team immediately",
            "Leave it where it is and tell no one"
          ],
          correctIndex: 1,
          explanation: "Unknown USBs can be 'Rubber Duckies' designed to inject malware as soon as they are plugged in. IT must handle them using sandboxed systems."
        }
      ]
    },
    {
      id: 'is-m9',
      title: 'Module 9: "Security Is a Team Sport"',
      summary: 'Defining roles, responsibilities, and the importance of compliance across the organization.',
      order: 9,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Security Is a Team Sport',
            scenes: [
              {
                title: 'Roles & Responsibilities',
                panels: [
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "Welcome everyone. Today’s session is about Roles, Responsibilities, and Compliance in Information Security. Aisha, who do you think is responsible for information security?",
                    side: "left",
                    visualDescription: "Conference room; Leena stands near a screen titled 'Information Security – Roles & Responsibilities'."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "Honestly? The IT team. They handle systems, security tools, and incidents… right?",
                    side: "right",
                    visualDescription: "Aisha sits at the table, speaking thoughtfully."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "We do play a big role—but information security doesn’t work in isolation. It only works when everyone knows their responsibility.",
                    side: "left",
                    visualDescription: "Sanjay stands beside Leena, pointing to a shared responsibility diagram."
                  },
                  {
                    character: "Rohit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&top=shortHair&hairColor=grey&clothing=blazer",
                    text: "Exactly. If roles aren’t clear, people assume someone else will handle it—and that’s when gaps appear.",
                    side: "right",
                    visualDescription: "Rohit leans slightly forward, adding a manager’s perspective."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "That’s why this module exists—to remove confusion and set clear expectations.",
                    side: "left",
                    visualDescription: "Leena gestures confidently to emphasize clarity."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "So what’s expected from me as an employee?",
                    side: "right",
                    visualDescription: "Aisha looks curious and engaged."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "You’re responsible for protecting any company information you access or handle. That means following policies, using systems only for business purposes, and staying alert to risks.",
                    side: "left",
                    visualDescription: "Sanjay highlights bullet points on a screen labeled 'Employee Responsibilities'."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "And if something feels wrong?",
                    side: "right",
                    visualDescription: "Aisha raises her hand slightly."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "You report it immediately—mistake, concern, or incident. Reporting is part of your responsibility, not an admission of fault.",
                    side: "left",
                    visualDescription: "Leena reassures Aisha with a gentle expression."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "What about managers? What is their role?",
                    side: "right",
                    visualDescription: "Aisha turns toward Rohit."
                  },
                  {
                    character: "Rohit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&top=shortHair&hairColor=grey&clothing=blazer",
                    text: "Managers reinforce security at the team level. We ensure everyone understands and follows security policies—and that they feel supported.",
                    side: "right",
                    visualDescription: "Rohit speaks from the manager’s seat, emphasizing leadership."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "Managers also ensure access is given correctly—and removed or changed when roles change.",
                    side: "left",
                    visualDescription: "Sanjay points to icons representing access control."
                  },
                  {
                    character: "Rohit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&top=shortHair&hairColor=grey&clothing=blazer",
                    text: "And we lead by example. If managers ignore policies, teams will too.",
                    side: "right",
                    visualDescription: "Rohit speaks firmly, reinforcing accountability."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "So then what exactly does the Information Security team handle?",
                    side: "right",
                    visualDescription: "Aisha looks toward Sanjay with interest."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "We design and maintain security controls, create policies, monitor systems, and respond to incidents.",
                    side: "left",
                    visualDescription: "Sanjay stands by a slide showing system logs and shield icons."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "They also provide training and guidance—so employees know how to work securely, not just that they should.",
                    side: "left",
                    visualDescription: "Leena gestures to a training video playing on screen."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "Why is compliance stressed so much? Sometimes policies feel restrictive.",
                    side: "right",
                    visualDescription: "Aisha asks with genuine curiosity."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "Compliance isn’t optional—it protects the organization from breaches, legal penalties, and reputational damage.",
                    side: "left",
                    visualDescription: "Sanjay points to a panel showing risk impacts."
                  },
                  {
                    character: "Rohit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&top=shortHair&hairColor=grey&clothing=blazer",
                    text: "And even unintentional non-compliance can create risk.",
                    side: "right",
                    visualDescription: "Rohit speaks with steady seriousness."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "Policies exist to protect people, processes, and the business—not to make work harder.",
                    side: "left",
                    visualDescription: "Leena explains with calm clarity."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "So security really depends on everyone doing their part.",
                    side: "right",
                    visualDescription: "Aisha looks thoughtful and reflective."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "Exactly. Employees follow policies and report issues. Managers reinforce and support. IT monitors, guides, and responds.",
                    side: "left",
                    visualDescription: "All roles are shown on a visual flowchart behind him."
                  },
                  {
                    character: "Rohit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&top=shortHair&hairColor=grey&clothing=blazer",
                    text: "When roles work together, security becomes part of everyday work.",
                    side: "right",
                    visualDescription: "Rohit smiles, describing teamwork."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "And if someone makes a mistake?",
                    side: "right",
                    visualDescription: "Aisha asks gently, seeking reassurance."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "We maintain a supportive, non-punitive environment. Speaking up early is always the right choice.",
                    side: "left",
                    visualDescription: "Leena offers a warm, reassuring smile."
                  },
                  {
                    character: "Sanjay",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&hairColor=black&clothing=suit",
                    text: "Silence creates risk. Communication reduces it.",
                    side: "left",
                    visualDescription: "Sanjay’s tone is firm but encouraging."
                  },
                  {
                    character: "Aisha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha&top=longHair&hairColor=black&clothing=shirt",
                    text: "Got it. Information security isn’t someone else's job—it’s shared responsibility.",
                    side: "right",
                    visualDescription: "Aisha sits upright with confidence."
                  },
                  {
                    character: "Rohit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&top=shortHair&hairColor=grey&clothing=blazer",
                    text: "And compliance isn’t a burden—it’s protection.",
                    side: "right",
                    visualDescription: "Rohit nods confidently."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "That’s the key message—clear roles, responsible behaviour, and collective effort.",
                    side: "left",
                    visualDescription: "Leena closes the session with a friendly, motivational tone."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena&top=longHair&clothing=blazer",
                    text: "Information Security works best when everyone knows their role—and follows it.",
                    side: "left",
                    visualDescription: "Final comic panel; caption at bottom with teamwork icons."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'is-m10',
      title: 'Module 10: Compliance & Final Certification',
      summary: 'A wrap-up of information security standards and final preparations for the exam.',
      order: 10,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Course Wrap-up & Compliance Standards',
          videoUrl: '/assets/placeholders/is-m10-wrapup.mp4',
          instructions: 'Review our organizational security standards and the consequences of non-compliance before starting the final assessment.'
        },
        {
          type: 'check',
          question: "Information Security is the responsibility of which department?",
          options: [
            "The IT department only",
            "The Legal and HR departments jointly",
            "Every single employee and partner in the organization"
          ],
          correctIndex: 2,
          explanation: "Security is a collective effort. Systems can be secured by IT, but people and processes depend on everyone's vigilance."
        }
      ]
    }
  ],
  assessment: [
    {
      id: 'isq1',
      text: 'You receive an urgent email from "The CEO" asking for your password. You should:',
      options: ['Reply immediately', 'Report it to the IT Security team', 'Share it via Slack instead'],
      correctAnswer: 1
    }
  ]
};

export default informationSecurityAwareness;