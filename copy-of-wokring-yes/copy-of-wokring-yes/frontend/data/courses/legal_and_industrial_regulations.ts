import { Course } from '../../types';

const legalAndIndustrialRegulations: Course = {
  id: 'legal-regs-2024',
  title: 'Legal and Industrial Regulations',
  description: 'Understanding the complex landscape of industrial laws, labor rights, and compliance standards.',
  category: 'Legal Compliance',
  duration: '180 mins',
  icon: '⚖️',
  colorTheme: 'indigo',
  modules: [
    {
      id: 'lr-m1',
      title: 'Module 1: Understanding Legal & Industry Regulation',
      summary: 'Meera guides Aarav and Riya through the foundations of legal and industry regulation using a story-based learning journey.',
      order: 1,
      duration: '40 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Regulation in the Real World',
            scenes: [
              {
                id: 'm1_s1',
                title: 'Scene 1: A Confusing Morning Email',
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Aarav, did you see the new mail? Something about regulatory compliance deadlines?",
                    visualDescription: "Director’s Note: Riya stands near her desk, staring at her laptop with a puzzled expression."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Yeah... I didn’t understand half of it. Why do we have so many regulations anyway?",
                    visualDescription: "Director’s Note: Aarav scratches his head, clearly confused."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Looks like today is the perfect time to understand why regulations exist — and how they shape business.",
                    visualDescription: "Director’s Note: Meera walks in holding a tablet, smiling."
                  }
                ]
              },
              {
                id: 'm1_s2',
                title: 'Scene 2: What Is Legal Regulation?',
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Legal regulations are government-made laws all businesses MUST follow — taxation, employment, contracts, data protection, consumer rights, environment and more.",
                    visualDescription: "Director’s Note: The screen behind Meera displays icons of taxes, data protection, and contracts."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So these laws basically decide what companies can and cannot do?",
                    visualDescription: "Director’s Note: Riya looks thoughtful, hand on chin."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. They are the basic boundaries for business decisions.",
                    visualDescription: "Director’s Note: Meera highlights boundaries on a digital diagram."
                  }
                ]
              },
              {
                id: 'm1_s3',
                title: 'Scene 3: What Is Industry Regulation?',
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "And what about industry regulations? Are they different?",
                    visualDescription: "Director’s Note: Aarav raises his hand skeptically."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Yes. Industry regulations are rules SPECIFIC to sectors — banking, aviation, healthcare, telecom, energy, pharma and more.",
                    visualDescription: "Director’s Note: The screen shows icons of airplanes, hospitals, and banks."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So companies in these sectors have extra rules on top of normal laws?",
                    visualDescription: "Director’s Note: Riya looks slightly overwhelmed."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. They focus on safety, quality, ethics, and risk management.",
                    visualDescription: "Director’s Note: Meera nods with confidence."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Decision Point: A bank is required to maintain minimum capital reserves. What type of regulation is this?",
                    type: "choice",
                    options: [
                      { id: "opt1_legal", label: "A. Legal Regulation (General)", nextScene: "m1_s4_wrong" },
                      { id: "opt1_industry", label: "B. Industry Regulation (Sector-specific)", nextScene: "m1_s4_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m1_s4_correct",
                title: "Scene 4A: Correct Action",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Capital requirements apply only to financial institutions—making this an industry regulation.",
                    visualDescription: "Director’s Note: Meera gives an approving nod."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Sector-specific knowledge verified. Proceeding...",
                    type: "choice",
                    options: [{ id: "c_m1_s4a", label: "Continue", nextScene: "m1_s5" }]
                  }
                ]
              },
              {
                id: "m1_s4_wrong",
                title: "Scene 4B: Educational Correction",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not quite. Legal regulations apply broadly, but this rule is only for banks—so it's industry-specific.",
                    visualDescription: "Director’s Note: Meera gently corrects the team."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Ahh… got it. Banks have their own stricter rules.",
                    visualDescription: "Director’s Note: Riya looks relieved to understand."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Regulatory distinction clarified. Rerouting...",
                    type: "choice",
                    options: [{ id: "c_m1_s4b", label: "Proceed to Why Rules Exist", nextScene: "m1_s5" }]
                  }
                ]
              },
              {
                id: "m1_s5",
                title: "Scene 5: Why Regulations Exist",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Regulations exist to protect consumers, employees, investors, the environment — and to ensure fair competition.",
                    visualDescription: "Director’s Note: Icons of safety helmets, scales of justice, and green leaves appear."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "So it’s not just to make our lives difficult?",
                    visualDescription: "Director’s Note: Aarav laughs lightly."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Far from it. They create trust, stability, and long-term business confidence.",
                    visualDescription: "Director’s Note: Meera smiles reassuringly."
                  }
                ]
              },
              {
                id: "m1_s6",
                title: "Scene 6: How Regulations Affect Daily Work",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Hiring, pricing, marketing, data handling, product design — almost everything has regulatory influence.",
                    visualDescription: "Director’s Note: Meera shows a workflow diagram."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "No wonder we have so many approval steps…",
                    visualDescription: "Director’s Note: Riya sighs dramatically."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Those processes exist to protect the company — and you.",
                    visualDescription: "Director’s Note: Meera smiles knowingly."
                  }
                ]
              },
              {
                id: "m1_s7",
                title: "Scene 7: Regulation = Risk + Responsibility",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Non-compliance means fines, legal action, reputational damage, and even closure.",
                    visualDescription: "Director’s Note: A red alert icon appears behind Meera."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "So compliance isn’t optional. It’s essential.",
                    visualDescription: "Director’s Note: Aarav nods firmly."
                  }
                ]
              },
              {
                id: "m1_s8",
                title: "Scene 8: Everyone Has a Role",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Compliance isn’t just Legal’s job. Management sets the tone, and employees follow processes ethically.",
                    visualDescription: "Director’s Note: A flowchart shows 'Management → Teams → Employees'."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So we’re all part of compliance… even if we never meet regulators.",
                    visualDescription: "Director’s Note: Riya looks empowered."
                  }
                ]
              },
              {
                id: "m1_s9",
                title: "Scene 9: Regulations in a Global Business World",
                panels: [
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Global companies must meet local rules in each country — and maintain consistent ethical standards.",
                    visualDescription: "Director’s Note: A world map appears behind Meera."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "That must be complicated…",
                    visualDescription: "Director’s Note: Aarav’s eyes widen."
                  },
                  {
                    character: "Meera (Narrator)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "It is — but it’s necessary for international growth.",
                    visualDescription: "Director’s Note: Meera closes the module with a confident smile."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which statement BEST describes industry regulation?",
          options: [
            "Rules created by government that apply universally to most companies.",
            "Sector-specific rules designed to manage risks unique to certain industries.",
            "Optional guidelines companies follow only when convenient."
          ],
          correctIndex: 1,
          explanation: "Industry regulations are specialized rules that apply only to certain sectors such as banking, aviation, healthcare, pharma, etc."
        }
      ]
    },
    {
      id: 'lr-m2',
      title: 'Module 2: Types of Regulators & Enforcement',
      summary: 'This module contains detailed information on the different types of regulators and how enforcement mechanisms ensure organizational compliance.',
      order: 2,
      duration: '30 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Types of Regulators & Enforcement',
          instructions: 'Watch this session to understand the regulatory structure, enforcement mechanisms, and industry-specific mandates that shape corporate compliance.',
          videoUrl: 'https://example.com/placeholder-video-module2.mp4'
        },
        {
          type: 'check',
          question: 'Before proceeding, confirm the following: Have you COMPLETED watching the full Module 2 video?',
          options: [
            'Yes, I watched the video completely.',
            'No, I skipped or partially watched it.'
          ],
          correctIndex: 0,
          explanation: 'You must watch the full video to understand the regulatory structure, enforcement mechanisms, and industry-specific mandates.'
        },
        {
          type: 'check',
          question: 'Which of the following BEST describes the role of industry regulators?',
          options: [
            'They create rules that apply to all sectors equally.',
            'They enforce sector-specific standards and ensure compliance within their industry domain.',
            'They only intervene during criminal activities.'
          ],
          correctIndex: 1,
          explanation: 'Industry regulators enforce rules tailored to the unique risks and needs of sectors such as banking, aviation, telecom, energy, and healthcare.'
        }
      ]
    },
    {
      id: 'lr-m3',
      title: 'Module 3: Types of Laws & Regulations Affecting Businesses',
      summary: 'An interactive comic exploring the major categories of business regulations.',
      order: 3,
      duration: '45 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Regulations in the Real World',
            scenes: [
              {
                id: 'm3_s1',
                title: 'Scene 1 — A Sudden Compliance Issue',
                panels: [
                  {
                    character: "Meera (Trainer)",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Team, we have an urgent situation. A client flagged a compliance gap in our latest project.",
                    visualDescription: "Director’s Note: Meera stands near a digital dashboard with flashing compliance alerts."
                  },
                  {
                    character: "Aarav (Employee)",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Compliance gap? Which regulation did we violate?",
                    visualDescription: "Director’s Note: Aarav looks confused, leaning toward the display."
                  },
                  {
                    character: "Riya (Employee)",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "There are so many laws—corporate laws, employment laws, tax rules… it’s overwhelming.",
                    visualDescription: "Director’s Note: Riya scrolls rapidly through documents on her tablet."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly why we need this module. Let’s break down the major categories of laws that affect businesses.",
                    visualDescription: "Director’s Note: Meera switches the screen to a simple categorized chart."
                  }
                ]
              },
              {
                id: 'm3_s2',
                title: 'Scene 2 — Corporate & Company Laws',
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Corporate laws determine how companies are formed, governed, and held accountable.",
                    visualDescription: "Director’s Note: A hologram shows a company lifecycle: Incorporation → Board → Governance."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "So these laws define our directors’ responsibilities?",
                    visualDescription: "Director’s Note: Aarav studies the hologram carefully."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. They protect shareholders, guide decision-making, and enforce transparent reporting.",
                    visualDescription: "Director’s Note: Icons appear representing Board Meetings, Registers, Annual Filings."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Decision Point: If a company fails to maintain proper board meeting minutes, which area of law is being violated?",
                    type: "choice",
                    options: [
                      { id: "opt2_emp", label: "Employment Regulations", nextScene: "m3_s2_wrong" },
                      { id: "opt2_corp", label: "Corporate & Company Law", nextScene: "m3_s2_correct" },
                      { id: "opt2_env", label: "Environmental Regulations", nextScene: "m3_s2_wrong" }
                    ]
                  }
                ]
              },
              {
                id: "m3_s2_correct",
                title: "Scene 2A: Correct Understanding",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Corporate laws require accurate documentation—it's proof that decisions were lawful.",
                    visualDescription: "Director’s Note: She gestures to properly archived files."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Validation successful. Proceeding to labor laws.",
                    type: "choice",
                    options: [{ id: "c_m3_s2a", label: "Continue", nextScene: "m3_s3" }]
                  }
                ]
              },
              {
                id: "m3_s2_wrong",
                title: "Scene 2B: Corporate Law Correction",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not quite. This directly falls under Corporate Law—poor documentation can invalidate decisions.",
                    visualDescription: "Director’s Note: A red cross appears over incorrect filing cabinets."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Rerouting to the correct classification path.",
                    type: "choice",
                    options: [{ id: "c_m3_s2b", label: "Proceed", nextScene: "m3_s3" }]
                  }
                ]
              },
              {
                id: 'm3_s3',
                title: 'Scene 3 — Employment & Labour Regulations',
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "These laws feel more familiar—hiring, wages, safety, equality…",
                    visualDescription: "Director’s Note: Riya scrolls through labour law guidelines."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Yes. Labour regulations shape how we manage people ethically and legally.",
                    visualDescription: "Director’s Note: Icons show: Minimum Wages, Working Hours, Non-Discrimination."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "And violations can lead to penalties or even lawsuits.",
                    visualDescription: "Director’s Note: A notification pops up: 'Penalty Risk: High'."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Scenario Check: Your team denies overtime pay despite requiring late-night work. Which regulation is violated?",
                    type: "choice",
                    options: [
                      { id: "opt3_comp", label: "Competition Law", nextScene: "m3_s3_wrong" },
                      { id: "opt3_emp", label: "Employment & Labour Law", nextScene: "m3_s3_correct" },
                      { id: "opt3_tax", label: "Tax Regulation", nextScene: "m3_s3_wrong" }
                    ]
                  }
                ]
              },
              {
                id: "m3_s3_correct",
                title: "Scene 3A: Correct Identification",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Labour laws protect employees from exploitation.",
                    visualDescription: "Director’s Note: She displays statutory compliance charts."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Knowledge of employee rights verified. Proceeding...",
                    type: "choice",
                    options: [{ id: "c_m3_s3a", label: "Continue", nextScene: "m3_s4" }]
                  }
                ]
              },
              {
                id: "m3_s3_wrong",
                title: "Scene 3B: Labour Law Correction",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Not exactly. This is a labour law breach—non-payment of overtime violates statutory rights.",
                    visualDescription: "Director’s Note: An animated warning icon flashes."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Correcting statutory understanding. Moving forward.",
                    type: "choice",
                    options: [{ id: "c_m3_s3b", label: "Proceed", nextScene: "m3_s4" }]
                  }
                ]
              },
              {
                id: 'm3_s4',
                title: 'Scene 4 — Consumer Protection',
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Consumer laws ensure products/services are safe, fair, and honestly marketed.",
                    visualDescription: "Director’s Note: A product ad turns from misleading to accurate in an animation."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "So inaccurate advertising could be illegal?",
                    visualDescription: "Director’s Note: Aarav looks surprised at a rejected ad mockup."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Yes. Misleading customers can bring heavy fines and lawsuits.",
                    visualDescription: "Director’s Note: A gavel slams down on a consumer complaint case file."
                  }
                ]
              },
              {
                id: 'm3_s5',
                title: 'Scene 5 — Competition & Antitrust',
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "These laws prevent companies from cheating the market?",
                    visualDescription: "Director’s Note: Riya looks at a chart showing price manipulation."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Practices like price-fixing, collusion, or abusing dominance are prohibited.",
                    visualDescription: "Director’s Note: An animation shows two companies secretly fixing prices."
                  }
                ]
              },
              {
                id: 'm3_s6',
                title: 'Scene 6 — Data Protection & Privacy',
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "With digital transformation, data privacy is now critical.",
                    visualDescription: "Director’s Note: A shield icon protects user data floating as holograms."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "So customer data must be stored securely and used responsibly?",
                    visualDescription: "Director’s Note: Aarav taps on a secure database interface."
                  }
                ]
              },
              {
                id: 'm3_s7',
                title: 'Scene 7 — Environmental Regulations',
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Environmental laws minimize pollution, waste, and ecological harm.",
                    visualDescription: "Director’s Note: Industries are shown next to environmental quality indicators."
                  }
                ]
              },
              {
                id: 'm3_s8',
                title: 'Scene 8 — Multi-Regulation Overlap',
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Most business activities fall under *multiple* regulations at once.",
                    visualDescription: "Director’s Note: An example product launch shows overlays: Consumer Law, Data Privacy, Advertising Rules."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So we must think cross-functionally before making decisions.",
                    visualDescription: "Director’s Note: Riya nods with new understanding."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "A new product launch requires customer data collection, promotional campaigns, and retail partnerships. Which laws apply simultaneously?",
          options: [
            "Only Consumer Protection Laws",
            "Corporate Law + Labour Law",
            "Consumer Protection + Data Privacy + Competition Regulation"
          ],
          correctIndex: 2,
          explanation: "Multiple laws apply together: advertising rules (consumer law), data collection rules (data privacy), and fair-market practices (competition)."
        }
      ]
    },
    {
      id: 'lr-m4',
      title: 'Module 4: Industry-Specific Regulations & Regulatory Bodies',
      summary: 'Understanding why certain industries face heavier regulation and how regulatory bodies enforce compliance.',
      order: 4,
      duration: '40 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Industry-Specific Regulations & Regulatory Bodies',
          instructions: 'This training session covers industry-specific risks, regulatory bodies, licensing, inspections, and enforcement mechanisms.',
          videoUrl: 'https://example.com/placeholder-video-module4.mp4'
        },
        {
          type: 'check',
          question: "Which industries are typically the most heavily regulated due to risk and public impact?",
          options: [
            "Retail and entertainment",
            "Banking, aviation, healthcare, and pharmaceuticals",
            "Clothing and textile manufacturing"
          ],
          correctIndex: 1,
          explanation: "Industries like banking, aviation, and healthcare face high regulation because failures in these sectors pose significant safety or financial risks to the public."
        },
        {
          type: 'check',
          question: "What is one key responsibility of regulatory bodies?",
          options: [
            "Providing free consulting services to companies",
            "Creating and enforcing industry regulations, conducting inspections, and issuing penalties",
            "Helping companies market their products internationally"
          ],
          correctIndex: 1,
          explanation: "Regulatory bodies act as monitors and enforcers to ensure all companies within a specific sector follow safety and ethical standards."
        },
        {
          type: 'check',
          question: "Why must companies maintain ongoing compliance instead of one-time approvals?",
          options: [
            "Because regulators generate revenue from reports",
            "Because risks and operations evolve continuously and must be monitored",
            "Because employees often forget the rules"
          ],
          correctIndex: 1,
          explanation: "Regulatory compliance is dynamic; as technology and markets change, companies must continuously adapt their processes to stay safe and legal."
        },
        {
          type: 'check',
          question: "What is the correct approach when regulators conduct an unannounced inspection?",
          options: [
            "Hide any documents that may be incomplete",
            "Cooperate transparently and provide requested information",
            "Delay the inspection until management arrives"
          ],
          correctIndex: 1,
          explanation: "Transparency and cooperation are essential during inspections. Obstruction or concealment can lead to severe penalties and legal action."
        }
      ]
    },
    {
      id: 'lr-m5',
      title: 'Module 5: Compliance Responsibilities & Corporate Accountability',
      summary: 'Understanding ownership, accountability, regulatory roles, documentation requirements, and escalation responsibilities.',
      order: 5,
      duration: '45 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Compliance Begins With Ownership',
            scenes: [
              {
                id: 'm5_s1',
                title: 'Why Accountability Matters',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 5. Today we explore Compliance Responsibilities & Corporate Accountability. Compliance isn’t just following rules—it's knowing who is responsible and ensuring ownership at every level.",
                    side: "left",
                    visualDescription: "Director’s Note: Training room screen reads ‘Compliance = Responsibility + Ownership’."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So compliance isn’t automatically handled by Legal or HR?",
                    side: "right",
                    visualDescription: "Director’s Note: Riya leans forward with curiosity."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Compliance is shared across leadership, managers, teams, and employees. No one group can do it alone.",
                    side: "left",
                    visualDescription: "Director’s Note: A pyramid shows Board → Compliance Team → Managers → Employees."
                  }
                ]
              },
              {
                id: 'm5_s2',
                title: 'Leadership Responsibility',
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "If something goes wrong, can leadership say they weren’t aware?",
                    side: "right",
                    visualDescription: "Director’s Note: Aarav raises his hand, concerned."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "No. Ultimate responsibility always lies with the Board and Senior Management—even if tasks are delegated.",
                    side: "left",
                    visualDescription: "Director’s Note: Slide shows ‘Accountability Cannot Be Delegated’."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "CHOICE: A compliance report deadline is approaching, and leadership has not reviewed the final draft. What should the Compliance Officer do?",
                    type: "choice",
                    options: [
                      { id: "M5_OPT1", label: "A. Submit the report anyway to avoid late filing.", nextScene: "scene2_wrong" },
                      { id: "M5_OPT2", label: "B. Escalate to leadership requesting urgent review before submission.", nextScene: "scene2_correct" }
                    ]
                  }
                ]
              },
              {
                id: "scene2_wrong",
                title: "Wrong Choice: Submitting Without Review",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Submitting without review violates governance requirements. Leadership must sign off on compliance matters.",
                    side: "left",
                    visualDescription: "Director’s Note: Red alert flashes behind Meera."
                  },
                  {
                    character: "System",
                    text: "Consequence: Regulator questions missing approvals → Company fined → Leadership credibility damaged.",
                    side: "center",
                    visualDescription: "Director’s Note: Dark toned panel showing regulator documents."
                  },
                  {
                    character: "System",
                    text: "Return to correct protocol.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "M5_C1", label: "Rewind and Escalate", nextScene: "scene2_correct" }]
                  }
                ]
              },
              {
                id: "scene2_correct",
                title: "Correct Choice: Escalate Appropriately",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Escalating ensures leadership fulfills their accountability obligations. Compliance thrives on transparency.",
                    side: "left",
                    visualDescription: "Director’s Note: Green checkmark appears."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Integrity path established. Proceeding...",
                    type: "choice",
                    options: [{ id: "M5_C2", label: "Continue", nextScene: "m5_s3" }]
                  }
                ]
              },
              {
                id: "m5_s3",
                title: "Legal & Compliance Functions",
                panels: [
                  {
                    character: "Riya",
                    text: "So compliance and legal teams don’t own everything?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    visualDescription: "Director’s Note: Riya takes notes."
                  },
                  {
                    character: "Meera",
                    text: "They interpret laws, guide teams, and monitor risks—but business functions must follow the rules in daily work.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Flowchart shows ‘Guide → Support → Monitor’."
                  }
                ]
              },
              {
                id: "m5_s4",
                title: "Employee & Manager Responsibility",
                panels: [
                  {
                    character: "Aarav",
                    text: "If I notice something non-compliant but feel unsure… is it still my responsibility?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    visualDescription: "Director’s Note: Aarav looks uneasy."
                  },
                  {
                    character: "Meera",
                    text: "Yes. Employees must act responsibly, raise concerns, and follow procedures. Managers must ensure their teams comply daily.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "CHOICE: You discover outdated compliance documentation. What should you do?",
                    side: "center",
                    type: "choice",
                    options: [
                      { id: "M5_OPT3", label: "A. Ignore it; someone else will update it.", nextScene: "scene4_wrong" },
                      { id: "M5_OPT4", label: "B. Inform your manager or compliance team immediately.", nextScene: "scene4_correct" }
                    ]
                  }
                ]
              },
              {
                id: "scene4_wrong",
                title: "Wrong Choice: Ignoring the Issue",
                panels: [
                  {
                    character: "Meera",
                    text: "Ignoring compliance gaps is dangerous. Many failures occur because responsibilities were unclear or ignored.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "Consequence: Outdated documentation → Failed audit → Regulatory penalty.",
                    side: "center",
                    visualDescription: "Director’s Note: Red compliance chart dips."
                  },
                  {
                    character: "System",
                    text: "Recover accountability standards.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "M5_C3", label: "Rewind and Report", nextScene: "scene4_correct" }]
                  }
                ]
              },
              {
                id: "scene4_correct",
                title: "Correct Choice: Taking Responsibility",
                panels: [
                  {
                    character: "Meera",
                    text: "Correct. Employees must raise issues early. Accountability is everyone’s job.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Corporate ownership verified. Finalizing module...",
                    type: "choice",
                    options: [{ id: "M5_C4", label: "Continue", nextScene: "m5_s5" }]
                  }
                ]
              },
              {
                id: "m5_s5",
                title: "Documentation Matters",
                panels: [
                  {
                    character: "Riya",
                    text: "Why do regulators care so much about documentation?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Meera",
                    text: "Because regulators check whether we can *prove* compliance. Policies, checklists, approvals—these are legal evidence.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              },
              {
                id: "m5_s6",
                title: "Escalation & Issue Management",
                panels: [
                  {
                    character: "Meera",
                    text: "No compliance system is perfect. What matters is *how quickly* issues are reported and resolved.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Aarav",
                    text: "And employees should never fear raising concerns?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    text: "Exactly. Clear escalation protects the company and strengthens governance.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              },
              {
                id: "m5_s7",
                title: "Closing: Accountability is Culture",
                panels: [
                  {
                    character: "Meera",
                    text: "When accountability is part of culture, compliance becomes natural—not forced.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Riya",
                    text: "This makes compliance feel less like checking boxes and more like good practice.",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Meera",
                    text: "Exactly. Accountability protects employees, customers, leadership, and the organization as a whole.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Meera closes the module with a confident smile."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'lr-m6',
      title: 'Module 6: Managing Regulatory Risk in Business Operations',
      summary: 'An interactive overview of regulatory risk, operational vulnerabilities, and employee responsibilities.',
      order: 6,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Managing Regulatory Risk',
          instructions: 'This session covers regulatory risk, sources of non-compliance, the role of processes and controls, and employee responsibilities.',
          videoUrl: 'https://example.com/placeholder-module6.mp4'
        },
        {
          type: 'text',
          body: "You have now watched the Module 6 video on Regulatory Risk in Business Operations. Let's test your understanding before moving forward."
        },
        {
          type: 'check',
          question: "Which of the following best describes 'Regulatory Risk'?",
          options: [
            "The risk that an employee unintentionally violates internal office etiquette.",
            "The possibility that a company faces penalties or losses due to non-compliance with laws or regulations.",
            "The risk that competitors release a similar product in the market.",
            "The uncertainty created solely by IT system failures."
          ],
          correctIndex: 1,
          explanation: "Regulatory risk refers to the possibility of penalties, restrictions, or losses when a business fails to comply with applicable laws or regulations. It arises in everyday operations, not just in compliance departments."
        },
        {
          type: 'check',
          question: "Which business scenario is MOST likely to increase regulatory risk inside an organization?",
          options: [
            "A team hosting a monthly team lunch outside the office.",
            "Rapid expansion into new markets with unfamiliar compliance requirements.",
            "Employees taking approved leave during peak season.",
            "A company purchasing new laptops for all staff."
          ],
          correctIndex: 1,
          explanation: "Rapid expansion often exposes a company to new or unfamiliar laws. Regulatory risk increases when operations evolve faster than compliance structures."
        },
        {
          type: 'check',
          question: "Why must regulatory risk be integrated into everyday workflows instead of handled separately?",
          options: [
            "Because it helps reduce the number of employees needed in compliance.",
            "Because embedding compliance into processes helps catch issues early and avoid violations.",
            "Because regulations change too often to track separately.",
            "Because workflows become easier to automate."
          ],
          correctIndex: 1,
          explanation: "Embedding checks into daily processes ensures employees notice risks earlier, reducing after-the-fact corrections."
        }
      ]
    },
    {
      id: 'lr-m7',
      title: 'Module 7: Digital Transformation, ESG & Future Regulatory Trends',
      summary: 'Exploring how technology, AI, and ESG standards are redefining the future of industrial regulations.',
      order: 7,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'The Road Ahead: Digital & Sustainable Compliance',
            scenes: [
              {
                id: 'm7_s1',
                title: 'Scene 1: The High-Tech Compliance Briefing',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to our final module. Today we look forward: Digital Evolution and Future Regulatory Trends.",
                    side: "left",
                    visualDescription: "Director’s Note: Meera stands in a high-tech conference room with holograms of global data and green energy icons."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I’ve heard that AI is already changing how laws are made. Is that true?",
                    side: "right",
                    visualDescription: "Director’s Note: Aarav leans forward, intrigued by the holographic AI model on the table."
                  },
                  {
                    character: "Meera",
                    text: "Yes. From algorithm transparency to ESG reporting, the boundaries of industrial law are shifting rapidly.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              },
              {
                id: 'm7_s2',
                title: 'Scene 2: ESG & Sustainability',
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "ESG seems like a buzzword. Does it actually have legal teeth?",
                    side: "right",
                    visualDescription: "Director’s Note: Riya taps her pen, looking at a slide titled 'Environmental, Social, and Governance'."
                  },
                  {
                    character: "Meera",
                    text: "It does. Companies are now legally required to report on their environmental footprint, diversity metrics, and ethical supply chains.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "DECISION: A company uses 'green-washing' in its marketing but its industrial waste disposal is poorly documented. Which risk is highest?",
                    type: "choice",
                    options: [
                      { id: "M7_OPT1", label: "A. Marketing Risk (Reputation only)", nextScene: "m7_wrong_green" },
                      { id: "M7_OPT2", label: "B. Regulatory & ESG Risk (Legal penalties and audit failure)", nextScene: "m7_correct_green" }
                    ]
                  }
                ]
              },
              {
                id: "m7_wrong_green",
                title: "Wrong Choice: Marketing Focus",
                panels: [
                  {
                    character: "Meera",
                    text: "Actually, undocumented waste disposal is a direct violation of environmental laws, not just a marketing issue.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Meera points to a red warning sign over the waste disposal diagram."
                  },
                  {
                    character: "System",
                    text: "Rerouting to the regulatory reality path...",
                    side: "center",
                    type: "choice",
                    options: [{ id: "M7_C1", label: "Continue", nextScene: "m7_s3" }]
                  }
                ]
              },
              {
                id: "m7_correct_green",
                title: "Correct Choice: Compliance Integrity",
                panels: [
                  {
                    character: "Meera",
                    text: "Correct. Modern regulations require proof of sustainable practices. Claims without evidence are high-risk violations.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: A green checkmark glows above a stack of compliance logs."
                  },
                  {
                    character: "System",
                    text: "ESG understanding verified. Moving to Digital Frontier...",
                    side: "center",
                    type: "choice",
                    options: [{ id: "M7_C2", label: "Proceed", nextScene: "m7_s3" }]
                  }
                ]
              },
              {
                id: 'm7_s3',
                title: 'Scene 3: AI & The Digital Frontier',
                panels: [
                  {
                    character: "Aarav",
                    text: "What about AI? If an algorithm makes a mistake, who is legally responsible?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    text: "The organization. Future trends include 'Algorithmic Accountability'—companies must explain how their AI makes decisions.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Meera shows a transparent flowchart labeled 'AI Logic Trace'."
                  },
                  {
                    character: "Riya",
                    text: "So compliance is moving from just 'people' to 'people and machines'.",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  }
                ]
              },
              {
                id: 'm7_s4',
                title: 'Scene 4: Global Compliance Connectivity',
                panels: [
                  {
                    character: "Meera",
                    text: "In the future, digital laws like the DPDP Act will connect across borders. Compliance will be real-time and automated.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Aarav",
                    text: "It sounds like we always need to keep learning.",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    text: "Precisely. The future of regulation is constant evolution. This concludes our training modules.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Meera closes her tablet, smiling as the team prepares for their assessment."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which trend describes the requirement for organizations to explain and justify automated decisions made by AI?",
          options: [
            "Predictive Marketing",
            "Algorithmic Accountability",
            "Digital Sovereignty"
          ],
          correctIndex: 1,
          explanation: "Algorithmic Accountability is an emerging regulatory trend that requires companies to be transparent about how their automated systems make decisions affecting people."
        }
      ]
    },
    {
      id: 'lr-m8',
      title: 'Module 8: Challenges, Grey Areas, and Ethical Issues in Regulation',
      summary: 'Understanding real-world ambiguity, interpretation gaps, and ethical responsibilities beyond compliance.',
      order: 8,
      duration: '35 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Grey Areas & Ethical Conflicts',
          instructions: 'Watch this session to understand complexity, interpretation challenges, and ethical tensions in regulatory compliance.',
          videoUrl: 'https://example.com/placeholder-video-module8.mp4'
        },
        {
          type: 'check',
          question: "Your team must launch a new product in 48 hours. A regulation related to labeling has recently been updated, but the wording is ambiguous. Your manager says, 'Competitors are shipping without these changes, so let's go ahead'. What should you do?",
          options: [
            "Proceed immediately since competitors are already ignoring the requirement.",
            "Escalate the ambiguity to Compliance/Legal and request an urgent interpretation before launch.",
            "Delay the launch indefinitely until absolute clarity is available."
          ],
          correctIndex: 1,
          explanation: "Ambiguity must be clarified—not bypassed. Relying on inconsistent enforcement exposes the company to risk. Ethical judgment requires aligning with the spirit of regulation."
        },
        {
          type: 'check',
          question: "A manufacturing process is legally allowed to emit a certain level of waste, but the new data shows that even ‘legal levels’ may cause long-term harm to nearby communities. What should the company do?",
          options: [
            "Continue as usual since the company is technically compliant.",
            "Reduce emissions voluntarily and report the new findings to leadership for long-term safety planning.",
            "Wait until the regulator formally updates the requirement before making any changes."
          ],
          correctIndex: 1,
          explanation: "Ethical decision-making requires exceeding legal minimums when a risk to stakeholders exists. Minimum compliance is not the ultimate ethical benchmark."
        },
        {
          type: 'check',
          question: "A local vendor expects an 'informal gift' before signing a supply agreement. This is a common local practice but violates your company’s global anti-corruption policy. What do you do?",
          options: [
            "Allow the gift since it is culturally accepted and speeds up operations.",
            "Politely decline and escalate the situation to your compliance team for guidance.",
            "Ask a colleague to make the gift indirectly to avoid personal involvement."
          ],
          correctIndex: 1,
          explanation: "Local customs cannot override global ethics or company policy. Transparency and adherence to global standards protect both the company and employees from corruption risks."
        },
        {
          type: 'check',
          question: "A senior leader hints that the team should 'ignore minor documentation gaps' to meet an audit deadline. These gaps are not illegal but may mislead auditors. What is the right action?",
          options: [
            "Follow instructions quietly because the gaps are minor and will likely go unnoticed.",
            "Raise the concern respectfully and request time to correct the documentation.",
            "Proceed now and fix the gaps after the audit is complete."
          ],
          correctIndex: 1,
          explanation: "Ethical transparency prevents long-term risk. Intentionally misleading auditors is an ethical violation. Minor omissions can escalate into severe failures if left unaddressed."
        }
      ]
    },
    {
      id: 'lr-m9',
      title: 'Module 9: Building a Strong Compliance Culture & Future Outlook',
      summary: 'Understanding how compliance becomes part of organizational culture, leadership behavior, technology, and future regulatory readiness.',
      order: 9,
      duration: '40 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Shaping the Future of Compliance',
            scenes: [
              {
                id: 'm9_s1',
                title: 'Scene 1: What Compliance Culture Really Means',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 9. Today, we explore something deeper than rules—compliance culture.",
                    side: "left",
                    visualDescription: "Director’s Note: A conference hall with 'Compliance Culture' on the projector."
                  },
                  {
                    character: "Meera",
                    text: "Compliance isn’t just following laws. It’s how people think, act, and make choices—especially when no one is watching.",
                    side: "left",
                    visualDescription: "Director’s Note: Employees walking, making decisions ethically."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "So, it’s about mindset rather than checklists?",
                    side: "right",
                    visualDescription: "Director’s Note: Aarav leans forward, thoughtful."
                  },
                  {
                    character: "Meera",
                    text: "Exactly. A strong compliance culture turns regulation into a natural part of daily conduct.",
                    side: "left",
                    visualDescription: "Director’s Note: Light bulb icon appears."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Branching Moment 1: Aarav notices a teammate skipping a mandatory compliance step to finish work faster. What should he do?",
                    type: "choice",
                    options: [
                      { id: "M9_B1_A", label: "A. Ignore it—it’s not his role.", nextScene: "scene_wrong_1" },
                      { id: "M9_B1_B", label: "B. Encourage the teammate to follow correct process.", nextScene: "scene_correct_1" },
                      { id: "M9_B1_C", label: "C. Report directly without discussing.", nextScene: "scene_partial_1" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrong_1",
                title: "Consequence: Wrong Choice",
                panels: [
                  {
                    character: "Meera",
                    text: "Ignoring compliance gaps allows small mistakes to become major risks. In a compliance culture, everyone is responsible.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: A timeline showing a small issue escalating into a large penalty."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Rerouting to the cultural integrity path...",
                    type: "choice",
                    options: [{ id: "m9_c1", label: "Continue", nextScene: "m9_s2" }]
                  }
                ]
              },
              {
                id: "scene_partial_1",
                title: "Consequences: Partially Correct",
                panels: [
                  {
                    character: "Meera",
                    text: "Reporting is important, but first encourage awareness. Compliance is strengthened through coaching too.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Meera smiling, friendly tone."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Proceeding to Leadership's role...",
                    type: "choice",
                    options: [{ id: "m9_c2", label: "Continue", nextScene: "m9_s2" }]
                  }
                ]
              },
              {
                id: "scene_correct_1",
                title: "Correct Action!",
                panels: [
                  {
                    character: "Meera",
                    text: "Perfect. Compliance grows when employees help each other do the right thing.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Positive tone and green check symbol."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Moving to Leadership's role...",
                    type: "choice",
                    options: [{ id: "m9_c3", label: "Continue", nextScene: "m9_s2" }]
                  }
                ]
              },
              {
                id: "m9_s2",
                title: 'Scene 2: Leadership’s Role',
                panels: [
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Leaders shape culture through actions, not speeches. Employees watch how we behave under pressure.",
                    side: "left",
                    visualDescription: "Director’s Note: Mr. Kapoor stands before managers."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So if a leader ignores rules, the team feels they can too?",
                    side: "right",
                    visualDescription: "Director’s Note: Riya asks with concern."
                  },
                  {
                    character: "Meera",
                    text: "Yes. Consistency matters. Leadership behavior reinforces expectations.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Leadership and employees in sync."
                  }
                ]
              },
              {
                id: "m9_s3",
                title: 'Scene 3: Embedding Compliance into Daily Work',
                panels: [
                  {
                    character: "Meera",
                    text: "Compliance must be embedded—not treated as a separate task.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Workflow diagram where compliance is integrated."
                  },
                  {
                    character: "Aarav",
                    text: "Like integrating compliance into decision-making?",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    visualDescription: "Director’s Note: Aarav raises a hand."
                  },
                  {
                    character: "Meera",
                    text: "Exactly. From planning to performance reviews—it must be everywhere.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Compliance icons integrated into every process."
                  }
                ]
              },
              {
                id: "m9_s4",
                title: 'Scene 4: Training & Continuous Learning',
                panels: [
                  {
                    character: "Meera",
                    text: "Regulations evolve—so must our awareness. Continuous learning is essential.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Screens showing regulatory updates."
                  },
                  {
                    character: "Riya",
                    text: "Training helps us stay confident and alert to risks.",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    visualDescription: "Director’s Note: Riya taking notes."
                  }
                ]
              },
              {
                id: "m9_s5",
                title: 'Scene 5: Speaking Up & Transparency',
                panels: [
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "We encourage employees to raise concerns early—without fear.",
                    side: "left",
                    visualDescription: "Director’s Note: Safe space illustrated."
                  },
                  {
                    character: "Meera",
                    text: "A transparent culture solves problems before they grow.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: A magnifying glass highlighting early detection."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Branching Moment 2: Riya notices inconsistencies in a compliance report. What should she do?",
                    type: "choice",
                    options: [
                      { id: "M9_B2_A", label: "A. Correct it quietly.", nextScene: "scene_wrong_2" },
                      { id: "M9_B2_B", label: "B. Report transparently with evidence.", nextScene: "scene_correct_2" },
                      { id: "M9_B2_C", label: "C. Ask colleague privately before action.", nextScene: "scene_partial_2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrong_2",
                title: "Wrong Choice Consequence",
                panels: [
                  {
                    character: "Meera",
                    text: "Correcting errors quietly hides root problems. Transparency is the foundation of compliance.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Shadowy figure hiding data."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Proceeding to Technology & Future Trends...",
                    type: "choice",
                    options: [{ id: "m9_c4", label: "Continue", nextScene: "scene_future" }]
                  }
                ]
              },
              {
                id: "scene_partial_2",
                title: "Partial Choice",
                panels: [
                  {
                    character: "Meera",
                    text: "Clarifying first is good—but serious inconsistencies must still be formally reported.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Balanced scale icon."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Proceeding to Technology & Future Trends...",
                    type: "choice",
                    options: [{ id: "m9_c5", label: "Continue", nextScene: "scene_future" }]
                  }
                ]
              },
              {
                id: "scene_correct_2",
                title: "Correct Choice!",
                panels: [
                  {
                    character: "Meera",
                    text: "Reporting with evidence strengthens trust and protects the organization.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Green checkmark."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Proceeding to Technology & Future Trends...",
                    type: "choice",
                    options: [{ id: "m9_c6", label: "Continue", nextScene: "scene_future" }]
                  }
                ]
              },
              {
                id: "scene_future",
                title: "Scene 6: Technology & Future Trends",
                panels: [
                  {
                    character: "Meera",
                    text: "Technology enables compliance—monitoring, documentation, alerts, and risk prediction.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: AI monitoring dashboard."
                  },
                  {
                    character: "Mr. Kapoor",
                    text: "Future regulations will evolve with technology, sustainability, and globalization. We must stay adaptive.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    visualDescription: "Director’s Note: Future outlook graphics."
                  },
                  {
                    character: "Meera",
                    text: "Organizations with strong compliance cultures earn trust and grow sustainably.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: Market reputation rising graph."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So compliance isn’t just protection—it’s a strength.",
                    side: "right",
                    visualDescription: "Director’s Note: Riya smiling confidently."
                  },
                  {
                    character: "Meera",
                    text: "Exactly. This concludes Module 9—excellent work.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Director’s Note: All characters together, confident."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which action best represents a strong compliance culture?",
          options: [
            "Following rules only when monitored",
            "Encouraging colleagues to follow compliance steps consistently",
            "Handling compliance tasks only during audits"
          ],
          correctIndex: 1,
          explanation: "In a true compliance culture, integrity is self-managed and peer-supported. It doesn't rely solely on oversight or deadlines."
        },
        {
          type: 'check',
          question: "What is leadership’s biggest role in compliance?",
          options: [
            "Creating fear so employees don’t break rules",
            "Demonstrating integrity consistently through actions",
            "Delegating all compliance responsibilities to HR"
          ],
          correctIndex: 1,
          explanation: "Leadership 'sets the tone at the top'. Behavior under pressure defines the actual rules employees follow."
        },
        {
          type: 'check',
          question: "Why is transparency important in compliance?",
          options: [
            "It increases fear among employees",
            "It prevents early detection of minor errors",
            "It helps identify risks before they escalate into major violations"
          ],
          correctIndex: 2,
          explanation: "Transparency allows for early intervention and correction, preventing systemic failures before they become irreversible risks."
        }
      ]
    }
  ],
  assessment: [
    {
      "id": "liq1",
      "text": "A manufacturing unit reports an operational workflow change that speeds up production but bypasses a mandatory statutory safety check under the Factories Act. The manager claims the change is temporary and harmless. Which is the MOST compliant response?",
      "options": [
        "Allow it temporarily with written permission and monitor impact.",
        "Reverse the workflow immediately and restore the mandatory statutory check.",
        "Continue the new workflow but notify the compliance team within 24 hours.",
        "Document the change and review after one month for risk analysis."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq2",
      "text": "A compliance audit reveals that 3 months of wage records under the Payment of Wages Act are missing due to a system migration error. What is the MOST appropriate action?",
      "options": [
        "Reconstruct records from available payroll proofs and self-report the incident to relevant authorities.",
        "Ignore the missing data since salaries were paid correctly.",
        "Create estimated records based on past averages to fill the gap.",
        "Wait for the next audit cycle to rectify the error informally."
      ],
      "correctAnswer": 0
    },
    {
      "id": "liq3",
      "text": "During a compliance inspection, a supervisor pressures an employee to falsely state that safety training was completed on time, even though the session was delayed. Which regulatory principle is being violated?",
      "options": [
        "Technical non-compliance under reporting requirements only.",
        "Breach of integrity and falsification, which undermines compliance culture.",
        "Misinterpretation of training deadlines under industry norms.",
        "Acceptable correction since training was eventually completed."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq4",
      "text": "CASE STUDY: A contract worker reports that the principal employer has not provided statutorily required safety equipment for hazardous work. The contractor claims it is the worker’s responsibility to procure basics. Whose legal responsibility is this under Indian labour regulations?",
      "options": [
        "The contractor only, since the worker is not directly employed by the principal employer.",
        "Both principal employer and contractor share responsibility for safety compliance.",
        "Only the worker, since they accepted the job.",
        "Responsibility rotates based on the work shift."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq5",
      "text": "Which situation MOST accurately represents a 'systemic compliance failure'?",
      "options": [
        "One employee forgets to sign a statutory register.",
        "Multiple teams unknowingly bypass a legal requirement due to unclear SOPs.",
        "A manager intentionally violates rules to benefit a vendor.",
        "A temporary power outage delays compliance reporting by a day."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq6",
      "text": "CASE STUDY: A mandatory environmental reporting certificate is delayed due to a vendor’s slow response. The organization is still legally responsible for timely submission. What should compliance do FIRST?",
      "options": [
        "Escalate to top management and notify regulatory authorities immediately.",
        "Replace the vendor and restart the process from scratch.",
        "Request expedited processing while documenting all follow-ups as evidence of diligence.",
        "Submit the report late without explanation and rectify later."
      ],
      "correctAnswer": 2
    },
    {
      "id": "liq7",
      "text": "A team claims that a regulation 'probably does not apply' because the business unit is small. Which is the MOST accurate compliance approach?",
      "options": [
        "Assume exemption unless explicitly stated otherwise.",
        "Apply regulation unless an exemption is formally verified through legal review.",
        "Let the business leader decide based on operational requirements.",
        "Apply the rule only during peak workloads."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq8",
      "text": "A statutory inspector identifies a record-keeping error but verbally indicates that no immediate action is needed. What is the correct approach?",
      "options": [
        "Ignore the issue because the inspector showed leniency.",
        "Document the error internally and conduct a root-cause analysis to fix the gap.",
        "Treat the verbal comment as official clearance and close the case.",
        "Wait until the next inspection to verify recurrence."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq9",
      "text": "CASE STUDY: A worker files a complaint alleging underpayment. Payroll records show inconsistencies, but the supervisor argues the worker is 'causing trouble.' What is the MOST compliant response?",
      "options": [
        "Investigate impartially and audit the payroll data regardless of supervisor opinion.",
        "Warn the worker about filing baseless complaints.",
        "Support the supervisor’s statement to preserve team harmony.",
        "Resolve informally without written documentation."
      ],
      "correctAnswer": 0
    },
    {
      "id": "liq10",
      "text": "During a safety drill, some employees refuse to participate claiming workload pressure. What is the compliance requirement?",
      "options": [
        "Allow participation to be optional depending on work deadlines.",
        "Make participation mandatory because safety drills are a statutory requirement.",
        "Conduct drills only for new employees.",
        "Hold drills at midnight to avoid work disruption."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq11",
      "text": "A new regulation mandates a monthly compliance certificate signed by a senior officer. The officer delegates the signing to a junior employee to 'save time.' What is the risk?",
      "options": [
        "None, if the certificate is prepared correctly.",
        "High regulatory risk due to unauthorized delegation and legal invalidity.",
        "Minor risk that can be fixed during the next audit.",
        "Risk applies only if the regulator complains."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq12",
      "text": "CASE STUDY: A business unit is consistently compliant but suddenly misses a critical filing. Data shows increasing workload and reduced staffing. What does this indicate?",
      "options": [
        "Intentional violation.",
        "Structural capacity gap that threatens sustained compliance.",
        "Minor lapse due to human error.",
        "Acceptable deviation due to operational priorities."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq13",
      "text": "A vendor responsible for statutory compliance for contract labour refuses to share audit proofs. What is the correct compliance response?",
      "options": [
        "Continue trusting the vendor; proofs will come eventually.",
        "Suspend work allocation until documentation is provided.",
        "Allow the vendor 6 months to submit documents without penalty.",
        "Rely on verbal confirmation from the vendor."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq14",
      "text": "A worker alleges unsafe conditions. A preliminary check shows no visible issues but reveals outdated risk assessment documents. What is the risk category?",
      "options": [
        "No risk—no visible hazards.",
        "Documentation risk that could escalate into operational non-compliance.",
        "Employee misunderstanding due to lack of training.",
        "Risk applies only after an incident occurs."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq15",
      "text": "Which scenario best reflects strong compliance culture?",
      "options": [
        "Employees comply only during audits.",
        "Employees report minor compliance issues without fear.",
        "Leaders selectively enforce rules depending on performance.",
        "Compliance is managed only by HR and legal teams."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq16",
      "text": "CASE STUDY: A new operational tool automates compliance but occasionally fails to sync data. What is the correct response?",
      "options": [
        "Ignore errors if majority data syncs correctly.",
        "Implement manual oversight until automation is fully reliable.",
        "Disable the tool and revert to manual processes permanently.",
        "Shift responsibility to the IT department."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq17",
      "text": "A subcontractor claims full worker safety compliance but refuses on-site verification due to 'confidential processes.' What is the regulatory expectation?",
      "options": [
        "Conduct on-site verification or discontinue engagement.",
        "Accept subcontractor's statement if supported by email.",
        "Allow temporary exemption for confidentiality.",
        "Defer verification indefinitely."
      ],
      "correctAnswer": 0
    },
    {
      "id": "liq18",
      "text": "If an organization complies with all legal requirements but employees still fear reporting issues, what is missing?",
      "options": [
        "Formal compliance only—cultural compliance is missing.",
        "Regulatory training modules.",
        "Additional monitoring tools.",
        "More frequent inspections."
      ],
      "correctAnswer": 0
    },
    {
      "id": "liq19",
      "text": "CASE STUDY: A supervisor fixes a statutory register retrospectively without marking corrections. What compliance breach occurs?",
      "options": [
        "Minor clerical oversight.",
        "Falsification of records, which is a serious regulatory violation.",
        "Acceptable practice if data is accurate.",
        "Issue only if the regulator notices."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq20",
      "text": "A senior leader publicly discourages raising compliance concerns because it 'creates negativity.' What is the impact?",
      "options": [
        "Improves morale.",
        "Destroys transparency and weakens compliance culture.",
        "Reduces workload on compliance team.",
        "Has no regulatory effect if rules are followed."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq21",
      "text": "A legal requirement seems unclear. What is the MOST compliant approach?",
      "options": [
        "Adopt the strictest interpretation until clarity is obtained.",
        "Wait for another company to interpret it first.",
        "Apply minimal requirements to avoid operational disruption.",
        "Ignore the requirement until penalties arise."
      ],
      "correctAnswer": 0
    },
    {
      "id": "liq22",
      "text": "CASE STUDY: During safety inspection, the plant appears compliant but employee interviews reveal training was only done via email. What is the issue?",
      "options": [
        "Email is a valid training method.",
        "Training delivery did not ensure understanding or demonstration, violating safety norms.",
        "Employees should train themselves if unclear.",
        "Interviews are not considered audit evidence."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq23",
      "text": "A compliance dashboard shows repeated 'amber' alerts from the same unit for 6 months. What does this suggest?",
      "options": [
        "Acceptable since it's not red.",
        "Chronic underperformance indicating structural compliance weakness.",
        "Minor issues that don’t require review.",
        "Dashboard malfunction."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq24",
      "text": "A new employee raises a compliance concern anonymously. The manager wants to know their identity. What should compliance do?",
      "options": [
        "Disclose identity to maintain transparency.",
        "Protect anonymity to support trust and whistleblower safety.",
        "Ask the team who they think raised the concern.",
        "Close the issue without investigation."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq25",
      "text": "CASE STUDY: A plant meets all safety rules but has several 'near miss' incidents unreported. What risk does this represent?",
      "options": [
        "No risk since no injuries occurred.",
        "High hidden risk indicating weak safety culture and potential future accidents.",
        "Normal operational risk.",
        "Risk only if the labour inspector visits."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq26",
      "text": "An employee claims they skipped a statutory step due to outdated SOPs. What must compliance do?",
      "options": [
        "Penalize the employee immediately.",
        "Update SOPs, train staff, and fix process gaps before corrective action.",
        "Ignore the gap because SOPs were outdated.",
        "Allow deviations until SOPs are revised."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq27",
      "text": "A regulator requests additional data not specified in the official checklist. What is the compliant approach?",
      "options": [
        "Refuse since it is not in the checklist.",
        "Provide requested information unless it violates confidentiality or law.",
        "Ask for a written order and delay indefinitely.",
        "Provide only partial information."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq28",
      "text": "CASE STUDY: A site has perfect compliance on paper but employees reveal undocumented practices that bypass regulation for convenience. What is this an example of?",
      "options": [
        "Optimized workflow.",
        "Shadow processes indicating hidden non-compliance.",
        "Acceptable flexibility.",
        "Minor deviation without impact."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq29",
      "text": "A business leader demands that mandatory compliance filings be deprioritized due to an urgent client deadline. What should compliance do?",
      "options": [
        "Agree because client needs are higher.",
        "Escalate and ensure filings are completed on time regardless of pressure.",
        "Delay filings and backdate later.",
        "Let the business decide."
      ],
      "correctAnswer": 1
    },
    {
      "id": "liq30",
      "text": "What BEST predicts long-term compliance success?",
      "options": [
        "Fear of penalties.",
        "Embedding compliance into culture, leadership behavior, and daily decision-making.",
        "Increasing audits every month.",
        "Punishing non-compliance immediately."
      ],
      "correctAnswer": 1
    }
  ]
};

export default legalAndIndustrialRegulations;