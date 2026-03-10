import { Course } from '../../types';

const antiBriberyAndCorruptionAbc: Course = {
  id: 'abc-policy-2024',
  title: 'Anti-Bribery and Corruption (ABC)',
  description: 'Strict adherence to global and local laws regarding bribes and facilitation payments.',
  category: 'Legal Compliance',
  duration: '80 mins',
  icon: '🚫',
  colorTheme: 'rose',
  modules: [
    {
      id: "abc-m1",
      title: "Module 1: Defining Corruption",
      summary: "Understanding corruption, its forms, risks, and impact through an interactive narrative.",
      order: 1,
      duration: "25 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Corruption: What It Really Looks Like",
            scenes: [
              {
                id: "m1_s1_start",
                title: "The Opening",
                panels: [
                  {
                    character: "Meera (Compliance Trainer)",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 1. Today, we unravel what corruption really looks like in the real world.",
                    side: "left",
                    visualDescription: "Training room with a large screen behind Meera."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Corruption always sounds like something big—politicians, scams… Is workplace corruption really that serious?",
                    side: "right",
                    visualDescription: "Aarav leans back, skeptical but curious."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Corruption in business can be subtle, small, and hidden in routine decisions. Yet it’s equally damaging.",
                    side: "left",
                    visualDescription: "Meera shifts to a slide titled 'Corruption = Abuse of Power for Personal Gain'."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Which of the following situations MOST clearly reflects corruption?",
                    options: [
                      { id: "opt1a", label: "A: A vendor offers an expensive gift to 'keep things smooth'.", nextScene: "correct_path_1" },
                      { id: "opt1b", label: "B: A colleague compliments your work and asks for advice.", nextScene: "wrong_path_1A" },
                      { id: "opt1c", label: "C: A manager approves leave for a personal emergency.", nextScene: "wrong_path_1B" }
                    ]
                  }
                ]
              },
              {
                id: "correct_path_1",
                title: "Correct Path 1",
                panels: [
                  {
                    character: "Meera",
                    text: "Correct. Gifts that influence business decisions—even subtly—are a form of corruption.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "A red warning icon flashes behind Meera."
                  },
                  {
                    character: "Meera",
                    text: "Even if nothing explicit is said, the intention behind the gift matters.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Integrity check passed. Return to the main discussion?",
                    options: [{ id: "m1_r1", label: "Continue Story", nextScene: "return_to_main_1" }]
                  }
                ]
              },
              {
                id: "wrong_path_1A",
                title: "Wrong Path 1A",
                panels: [
                  {
                    character: "Meera",
                    text: "Not quite. Professional compliments or advice are not corruption.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Meera",
                    text: "However, this misunderstanding is common—many employees confuse normal interaction with influence attempts.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Let's review the definition and try again.",
                    options: [{ id: "m1_w1a", label: "Rewind to Decision Point", nextScene: "m1_s1_start" }]
                  }
                ]
              },
              {
                id: "wrong_path_1B",
                title: "Wrong Path 1B",
                panels: [
                  {
                    character: "Meera",
                    text: "Not this one. Compassion or emergency leaves are part of normal management discretion.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Meera",
                    text: "But this shows why clarity matters—lack of understanding creates false assumptions.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Regulatory clarity is key. Let's try again.",
                    options: [{ id: "m1_w1b", label: "Rewind to Decision Point", nextScene: "m1_s1_start" }]
                  }
                ]
              },
              {
                id: "return_to_main_1",
                title: "Back to Story",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So corruption isn’t just ‘big scandals’. It can be day-to-day influence in small decisions?",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Even small unethical favors can compromise fairness and transparency.",
                    side: "left",
                    visualDescription: "Meera points at a diagram showing 'Small Favors' cascading into 'Big Scandals'."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "A vendor insists on using an unnamed “consultant”, who requests a ‘service fee’. What is this MOST likely?",
                    options: [
                      { id: "opt2a", label: "A: A normal business intermediary.", nextScene: "wrong_path_2A" },
                      { id: "opt2b", label: "B: A corruption red flag involving hidden payments.", nextScene: "correct_path_2" },
                      { id: "opt2c", label: "C: A harmless vendor preference.", nextScene: "wrong_path_2B" }
                    ]
                  }
                ]
              },
              {
                id: "correct_path_2",
                title: "Correct Path 2",
                panels: [
                  {
                    character: "Meera",
                    text: "Correct. Hidden intermediaries are classic bribery channels.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "Meera",
                    text: "Never approve payments without transparency and documentation.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Red flag identified. Proceed to final discussion?",
                    options: [{ id: "m1_r2", label: "Continue Story", nextScene: "return_to_main_2" }]
                  }
                ]
              },
              {
                id: "wrong_path_2A",
                title: "Wrong Path 2A",
                panels: [
                  {
                    character: "Meera",
                    text: "Not quite. Anonymous intermediaries are one of the highest-risk corruption indicators.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Hidden actors require investigation. Try again.",
                    options: [{ id: "m1_w2a", label: "Rewind", nextScene: "return_to_main_1" }]
                  }
                ]
              },
              {
                id: "wrong_path_2B",
                title: "Wrong Path 2B",
                panels: [
                  {
                    character: "Meera",
                    text: "Incorrect. Vendor preference is never a justification for hidden actors or payments.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Policy compliance is mandatory. Try again.",
                    options: [{ id: "m1_w2b", label: "Rewind", nextScene: "return_to_main_1" }]
                  }
                ]
              },
              {
                id: "return_to_main_2",
                title: "Back to Story",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I didn’t realize corruption could be so… disguised.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Most real corruption hides behind legitimate-sounding processes.",
                    side: "left",
                    visualDescription: "Meera shows a 'Mask of Legitimacy' graphic on the screen."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Which impact of corruption is the MOST harmful for a company over time?",
                    options: [
                      { id: "opt3a", label: "A: Short-term revenue drop", nextScene: "wrong_path_3A" },
                      { id: "opt3b", label: "B: Loss of trust and long-term reputational damage", nextScene: "correct_path_3" },
                      { id: "opt3c", label: "C: Temporary internal conflict", nextScene: "wrong_path_3B" }
                    ]
                  }
                ]
              },
              {
                id: "correct_path_3",
                title: "Correct Path 3",
                panels: [
                  {
                    character: "Meera",
                    text: "Absolutely. Reputation is the hardest to rebuild and affects every stakeholder.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Mission impact understood. Finalize module?",
                    options: [{ id: "m1_r3", label: "Finish Module", nextScene: "end_of_module" }]
                  }
                ]
              },
              {
                id: "wrong_path_3A",
                title: "Wrong Path 3A",
                panels: [
                  {
                    character: "Meera",
                    text: "Short-term revenue can recover—but trust once lost is almost irreversible.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Focus on long-term sustainability. Try again.",
                    options: [{ id: "m1_w3a", label: "Rewind", nextScene: "return_to_main_2" }]
                  }
                ]
              },
              {
                id: "wrong_path_3B",
                title: "Wrong Path 3B",
                panels: [
                  {
                    character: "Meera",
                    text: "Internal conflict can be resolved quickly. Reputation damage lasts years.",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Corporate reputation is our highest asset. Try again.",
                    options: [{ id: "m1_w3b", label: "Rewind", nextScene: "return_to_main_2" }]
                  }
                ]
              },
              {
                id: "end_of_module",
                title: "Module Summary",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Corruption is any misuse of entrusted power for personal gain. Recognizing it early protects our organization.",
                    side: "left"
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "This was eye-opening. Even small decisions can influence integrity.",
                    side: "right"
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. In the next module, we’ll explore policy rules and expectations.",
                    side: "left",
                    visualDescription: "The team stands together, prepared for the next level of training."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "abc-m2",
      title: "Module 2: Anti-Bribery & Corruption Policy",
      summary: "Understanding Why Integrity Matters — with branching scenarios.",
      order: 2,
      duration: "40 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Understanding Why Integrity Matters",
            scenes: [
              {
                id: "m2_s1",
                title: "Scene 1: A Question of Integrity",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 2. Today, we explore how Anti-Bribery & Corruption policies protect our organization.",
                    visualDescription: "Director's Note: Training room lit warmly. Meera stands near a digital board titled 'Integrity First'."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I used to think bribery only happens at high levels. Does it really affect regular operations?",
                    visualDescription: "Director's Note: Aarav leans forward from his seat, genuinely curious."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "More than you think. Bribery can appear subtly — through gifts, favours, 'shortcuts', or unethical influence.",
                    visualDescription: "Director's Note: Meera gestures toward icons showing 'Gifts', 'Influence', 'Shortcuts'."
                  }
                ]
              },
              {
                id: "m2_dec1",
                title: "DECISION 1: The Vendor's Offer",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "A week later… Aarav meets with a vendor eager to win a logistics contract.",
                    visualDescription: "Director's Note: Vendor office, afternoon light through blinds."
                  },
                  {
                    character: "Vendor Representative",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vendor",
                    text: "Aarav, if you help fast-track our contract… we can make your weekend special. Business-class tickets to Goa?",
                    visualDescription: "Director's Note: Vendor smiles with a knowing look."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Uh… that doesn’t sound right. But the project deadline *is* tight…",
                    visualDescription: "Director's Note: Aarav looks conflicted."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "What should Aarav do?",
                    options: [
                      { id: "branch1A", label: "Accept the trip — it helps the project and no one will know.", nextScene: "branch1A" },
                      { id: "branch1B", label: "Decline the offer professionally and report the interaction.", nextScene: "branch1B" }
                    ]
                  }
                ]
              },
              {
                id: "branch1A",
                title: "Branch A: The Shortcut",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Alright… let's keep this between us.",
                    visualDescription: "Director's Note: Aarav accepts the envelope hesitantly."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Two weeks later…",
                    visualDescription: "Director's Note: Office setting with tense atmosphere."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Aarav, internal audit found irregularities in the vendor selection process. And an anonymous tip mentioned… incentives?",
                    visualDescription: "Director's Note: Meera looks disappointed but calm."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I didn’t think it would escalate. I was just trying to speed up the project…",
                    visualDescription: "Director's Note: Aarav looks distressed."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "CONSEQUENCES: Aarav faces disciplinary action, vendor contract is cancelled, and project delays worsen.",
                    visualDescription: "Director's Note: Dark tone, red warning icon."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Analyze the lesson learned...",
                    options: [{ id: "m2_b1a_end", label: "Return to main storyline", nextScene: "postBranch1" }]
                  }
                ]
              },
              {
                id: "branch1B",
                title: "Branch B: The Ethical Stand",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I appreciate the gesture, but I must decline. Our decisions must stay transparent.",
                    visualDescription: "Director's Note: Aarav raises a hand politely."
                  },
                  {
                    character: "Vendor Representative",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vendor",
                    text: "Oh—of course. Consider it withdrawn.",
                    visualDescription: "Director's Note: Vendor clears throat awkwardly."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Later that day, Aarav documents the interaction and reports it confidentially.",
                    visualDescription: "Director's Note: Aarav typing on his laptop."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Thank you for escalating this. This protects both the company and *you*. Excellent judgement, Aarav.",
                    visualDescription: "Director's Note: Meera commends him during a brief meeting."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Proceed to analysis...",
                    options: [{ id: "m2_b1b_end", label: "Return to main storyline", nextScene: "postBranch1" }]
                  }
                ]
              },
              {
                id: "postBranch1",
                title: "Scene 3: Policy Breakdown",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Let’s review the principles that prevented (or could have prevented) a major compliance breach.",
                    visualDescription: "Director's Note: Training room returns."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Our Anti-Bribery Policy prohibits: cash bribes, gifts with intent, lavish trips, favours, and quid-pro-quo deals.",
                    visualDescription: "Director's Note: Slide titled: 'Prohibited Practices'."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So even if the intention is 'to help the project', the action is still illegal?",
                    visualDescription: "Director's Note: Riya leans forward."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Correct. Intent does not erase risk. Transparency is your best protection.",
                    visualDescription: "Director's Note: Meera’s expression is firm but encouraging."
                  }
                ]
              },
              {
                id: "m2_dec2",
                title: "DECISION 2: The Government Officer",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "A month later… Aarav’s team needs government approval for an import license.",
                    visualDescription: "Director's Note: Government office corridor."
                  },
                  {
                    character: "Officer",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gov",
                    text: "Paperwork looks fine. But processing will take… a few weeks. Unless you want to 'speed things up'.",
                    visualDescription: "Director's Note: Officer taps desk meaningfully."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Aarav must respond. What should he do?",
                    options: [
                      { id: "branch2A", label: "Offer a small unofficial payment to expedite the approval.", nextScene: "branch2A" },
                      { id: "branch2B", label: "Firmly decline and request official processing timelines.", nextScene: "branch2B" }
                    ]
                  }
                ]
              },
              {
                id: "branch2A",
                title: "Branch A: The Cost of 'Speed'",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Fine… how much are we talking about?",
                    visualDescription: "Director's Note: Aarav speaks hesitantly while looking around."
                  },
                  {
                    character: "Officer",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gov",
                    text: "Nothing major. Just a token.",
                    visualDescription: "Director's Note: Officer smirks confidently."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Two months later… during a compliance inspection, the unofficial transaction surfaces.",
                    visualDescription: "Director's Note: Audit room. Papers stacked."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Facilitation payments are illegal under multiple anti-corruption laws. This cannot be overlooked.",
                    visualDescription: "Director's Note: Mr. Kapoor looks deeply disappointed."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "CONSEQUENCE: Aarav faces severe disciplinary action and external investigation risks.",
                    visualDescription: "Director's Note: Dark red panel with a warning emblem."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Finalize understanding...",
                    options: [{ id: "m2_b2a_end", label: "Return to main storyline", nextScene: "postBranch2" }]
                  }
                ]
              },
              {
                id: "branch2B",
                title: "Branch B: Standing Firm",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "No unofficial payments, please. Can you share the standard processing timeline?",
                    visualDescription: "Director's Note: Aarav maintains a professional tone."
                  },
                  {
                    character: "Officer",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gov",
                    text: "…Very well. Processing is 12–14 working days.",
                    visualDescription: "Director's Note: Officer sighs but complies."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Aarav documents the conversation and informs Meera immediately.",
                    visualDescription: "Director's Note: Aarav typing a report."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Great work. Clear boundaries prevent legal exposure and strengthen our compliance framework.",
                    visualDescription: "Director's Note: Meera smiles approvingly."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Wrap up the module...",
                    options: [{ id: "m2_b2b_end", label: "Return to main storyline", nextScene: "postBranch2" }]
                  }
                ]
              },
              {
                id: "postBranch2",
                title: "Scene 4: Closing Lessons",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Every employee must detect, avoid, and escalate bribery risks.",
                    visualDescription: "Director's Note: Training room with summary slide."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Anti-corruption isn’t about fear — it’s about consistency, fairness, and protecting the company.",
                    visualDescription: "Director's Note: Wide shot of the group listening."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "End of Module 2. You’ve seen how choices shape outcomes. Integrity is the difference.",
                    visualDescription: "Director's Note: Fade-out panel with the course logo."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "abc-m3",
      title: "Module 3: Forms of Bribery & Corruption",
      summary: "Overview of the different types of bribery and corruption risks.",
      order: 3,
      duration: "12 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Forms of Bribery & Corruption - Training Video",
          videoUrl: "https://example.com/placeholder-video.mp4",
          instructions: "Placeholder training video explaining different forms of bribery and corruption. Replace this URL with your actual video after exporting your Google AI Studio project."
        },
        {
          type: "check",
          question: "Which of the following is considered an *indirect* form of bribery?",
          options: [
            "Providing a small corporate gift during a public festival.",
            "Offering a bribe through an agent, consultant, or intermediary.",
            "Approving a routine vendor payment after due process.",
            "Rejecting an unjustified request for expedited processing."
          ],
          correctIndex: 1,
          explanation: "Indirect bribery occurs when an illegal or unethical payment is made through third parties—agents, consultants, partners, or intermediaries—to influence a decision."
        }
      ]
    },
    {
      id: 'abc-m4',
      title: 'Module 4: Anti-Bribery & Corruption Policy',
      summary: 'Understanding Policy, Boundaries, Responsibilities — With Real-World Branching Scenarios',
      order: 4,
      duration: '45 mins',
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Understanding Policy, Boundaries & Responsibilities",
            scenes: [
              {
                id: "m4_s1",
                title: "The Policy Breakdown",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 4. Today, we break down how our Anti-Bribery & Corruption Policy actually works in daily business life.",
                    side: "left",
                    visualDescription: "Training room scene. Meera stands beside a slide titled 'Module 4: ABC Policy'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Policies always look simple on paper… but real situations get messy. How do we apply them correctly?",
                    side: "right",
                    visualDescription: "Aarav leans forward, curious."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly why this module exists. The policy removes ambiguity, sets non-negotiable boundaries, and ensures consistent behavior across the company.",
                    side: "left",
                    visualDescription: "Meera gestures to icons marked 'Clear Rules', 'Consistency', 'No Exceptions'."
                  }
                ]
              },
              {
                id: "m4_dec1",
                title: "Decision Point 1 — A Subtle Conflict of Interest",
                panels: [
                  {
                    character: "System",
                    side: "center",
                    text: "Scenario: Aarav discovers a vendor bidding for a contract is owned by his cousin. What should he do?",
                    visualDescription: "The screen displays: 'Vendor Bidding – Family Connection Discovered'.",
                    type: "choice",
                    options: [
                      { id: "branch_4a_disclose", label: "Option A — Disclose the relationship immediately.", nextScene: "scene_disclose" },
                      { id: "branch_4a_ignore", label: "Option B — Ignore it since he won’t personally gain anything.", nextScene: "scene_ignore" },
                      { id: "branch_4a_help", label: "Option C — Mention the bid to his cousin quietly but avoid influencing the process.", nextScene: "scene_help" }
                    ]
                  }
                ]
              },
              {
                id: "scene_disclose",
                title: "Correct Path – Disclosure",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Meera, I just realized a conflict. One of the vendors is owned by my cousin.",
                    side: "right",
                    visualDescription: "Aarav looks worried but honest."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Thank you for being transparent. This is the correct action. Conflicts don’t automatically disqualify vendors—but hiding them does.",
                    side: "left",
                    visualDescription: "Meera smiles approvingly."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Correct Action: Disclosure protects both the employee and the company.",
                    visualDescription: "Green checkmark icon.",
                    type: "choice",
                    options: [{ id: "m4_c1", label: "Continue to next phase", nextScene: "scene_policy_reset" }]
                  }
                ]
              },
              {
                id: "scene_ignore",
                title: "Wrong Path – Ignoring the Conflict",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Aarav decides not to disclose the connection.",
                    visualDescription: "Shadowed panel showing Aarav staying silent."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Aarav, why didn’t you disclose your relationship with this vendor? This jeopardizes neutrality.",
                    side: "left",
                    visualDescription: "Mr. Kapoor looks stern."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Consequence: Even if Aarav stayed neutral, nondisclosure undermines trust and violates the policy.",
                    visualDescription: "Red warning triangle.",
                    type: "choice",
                    options: [{ id: "m4_r1", label: "Analyze and proceed", nextScene: "scene_policy_reset" }]
                  }
                ]
              },
              {
                id: "scene_help",
                title: "Wrong Path – Subtle Interference",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Aarav quietly informs his cousin about the bid.",
                    visualDescription: "Aarav whispers into a phone, looking conflicted."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Aarav… even subtle help counts as improper influence. This violates the policy.",
                    side: "left",
                    visualDescription: "Meera appears disappointed."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Consequence: Helping a related vendor is a serious violation—even without taking money.",
                    visualDescription: "Red danger icon.",
                    type: "choice",
                    options: [{ id: "m4_r2", label: "Understand and reset", nextScene: "scene_policy_reset" }]
                  }
                ]
              },
              {
                id: "scene_policy_reset",
                title: "Policy Reminder",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Let’s continue. This is why disclosure is non-negotiable in our anti-corruption policy.",
                    side: "left",
                    visualDescription: "Meera refocuses the class."
                  }
                ]
              },
              {
                id: "m4_dec2",
                title: "Decision Point 2 — Gifts & Hospitality",
                panels: [
                  {
                    character: "System",
                    side: "center",
                    text: "Scenario: A vendor offers Riya an expensive smartwatch during negotiations.",
                    visualDescription: "Panel shows vendor handing Riya a gift box.",
                    type: "choice",
                    options: [
                      { id: "branch_gift_reject", label: "Option A — Politely decline and report the offer.", nextScene: "scene_gift_correct" },
                      { id: "branch_gift_accept", label: "Option B — Accept it since it's just a friendly gesture.", nextScene: "scene_gift_wrong1" },
                      { id: "branch_gift_hold", label: "Option C — Accept it temporarily to avoid offending the vendor, and decide later.", nextScene: "scene_gift_wrong2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_gift_correct",
                title: "Correct Path — Ethical Boundary",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Thank you, but I can’t accept this. Our policy doesn’t allow high-value gifts.",
                    side: "right",
                    visualDescription: "Riya returns the smartwatch politely."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Excellent choice. Transparency and boundaries maintain fairness.",
                    side: "left",
                    visualDescription: "Meera smiles approvingly."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Wrap up the lesson...",
                    options: [{ id: "m4_c3", label: "Complete Module", nextScene: "scene_policy_reset2" }]
                  }
                ]
              },
              {
                id: "scene_gift_wrong1",
                title: "Wrong Path — Accepting the Gift",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Riya accepts the smartwatch.",
                    visualDescription: "Vendor smiles; Riya looks uncertain."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This creates obligation and compromises negotiation fairness.",
                    side: "left",
                    visualDescription: "Meera points at a ‘Bias Risk’ slide."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Correct your course...",
                    options: [{ id: "m4_r3", label: "Acknowledge policy", nextScene: "scene_policy_reset2" }]
                  }
                ]
              },
              {
                id: "scene_gift_wrong2",
                title: "Wrong Path — Delaying Decision",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Riya keeps the gift for now.",
                    visualDescription: "Riya holds the box reluctantly."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Intentional delay or indecision is treated as acceptance. Policies don’t allow ‘temporary possession’.",
                    side: "left",
                    visualDescription: "Mr. Kapoor looks serious."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Return to guidelines...",
                    options: [{ id: "m4_r4", label: "Back to policy line", nextScene: "scene_policy_reset2" }]
                  }
                ]
              },
              {
                id: "scene_policy_reset2",
                title: "Policy Alignment",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Gifts and hospitality must never influence decisions or create perceived obligations. This completes Module 4.",
                    side: "left",
                    visualDescription: "Class listens attentively as Meera closes the module."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "abc-m5",
      title: "Module 5: Due Diligence & Third-Party Risks",
      summary: "Understanding how third-party corruption risks emerge and how due diligence protects the company.",
      order: 5,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Due Diligence & Third-Party Risks - Training Video",
          videoUrl: "https://example.com/placeholder-video-abc-module5.mp4",
          instructions: "Placeholder video explaining due diligence, third-party red flags, and compliance expectations. (Replace this link after exporting Google AI Studio code.)"
        },
        {
          type: "check",
          question: "Why is third-party due diligence necessary in anti-corruption compliance?",
          options: [
            "Because most corruption risks occur through intermediaries and external vendors.",
            "Because the company must verify if third parties are profitable.",
            "Because due diligence replaces internal controls entirely."
          ],
          correctIndex: 0,
          explanation: "Most bribery schemes globally occur through agents, distributors, consultants, and intermediaries. Due diligence identifies risks before engagement."
        },
        {
          type: "check",
          question: "Which of the following is a major red flag during third-party evaluation?",
          options: [
            "Vendor has a long operational history and strong references.",
            "Vendor refuses to disclose ownership details or beneficial owners.",
            "Vendor has transparent audit reports."
          ],
          correctIndex: 1,
          explanation: "Lack of ownership transparency increases corruption exposure and is a high-risk indicator."
        },
        {
          type: "check",
          question: "A consultant demands a 'success fee' for ‘ensuring smooth approvals' with government departments. What should you do?",
          options: [
            "Accept it since success fees are standard business practice.",
            "Reject the proposal and escalate immediately because this indicates potential bribery.",
            "Negotiate the fee to a lower percentage."
          ],
          correctIndex: 1,
          explanation: "Any fee linked to guaranteed approvals, influence, or outcomes with government bodies is an indicator of bribery and must be escalated."
        },
        {
          type: "check",
          question: "Which statement best reflects due diligence requirements under ABC policy?",
          options: [
            "It is a one-time activity at the time of onboarding a vendor.",
            "It is an ongoing process that must be repeated for high-risk partners.",
            "It is optional when working with familiar or recommended vendors."
          ],
          correctIndex: 1,
          explanation: "Due diligence must be ongoing—especially for high-risk categories—to ensure compliance throughout the partnership."
        }
      ]
    },
    {
      id: "abc-m6",
      title: "Module 6: Operational Corruption Risks",
      summary: "A branching storyline exploring real-world operational corruption risks and decision-making.",
      order: 6,
      duration: "45 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Operational Corruption Risks — Interactive Comic",
            scenes: [
              {
                id: "m6_s1",
                title: "Scene 1: The Vendor Selection Meeting",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Today we explore how corruption risks arise during day-to-day operations.",
                    visualDescription: "Training room. Meera stands beside a slide titled “Operational Risks: Where Bribery Starts”."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "I always assumed corruption only happens during big deals… not everyday tasks.",
                    visualDescription: "Aarav looks genuinely surprised."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Actually, corruption hides in normal tasks—approvals, procurement, contract negotiations, vendor selection.",
                    visualDescription: "Meera points at icons: 'Approvals', 'Procurement', 'Vendor Meetings'."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Let’s explore a real scenario. Aarav and Riya have been asked to evaluate three vendors for a critical supply project.",
                    visualDescription: "Scene transitions to a meeting room."
                  }
                ]
              },
              {
                id: "m6_s2",
                title: "Scene 2: The Red Flag",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Aarav… Vendor ApexCorp just offered to ‘fast-track’ our work if we mark them as the preferred vendor.",
                    visualDescription: "Riya shows Aarav a text message on her phone."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "They said they’ll give us ‘exclusive benefits’. This sounds… not okay.",
                    visualDescription: "Aarav frowns, looking concerned."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "What should Aarav do?",
                    visualDescription: "Freeze-frame effect. Decision required.",
                    type: "choice",
                    options: [
                      { id: "m6_opt1", label: "A) Ignore the message and continue evaluating vendors normally.", nextScene: "m6_branch_ignore" },
                      { id: "m6_opt2", label: "B) Report the message privately to Meera.", nextScene: "m6_branch_report" },
                      { id: "m6_opt3", label: "C) Tell ApexCorp to offer the same ‘benefits’ to the entire team so it seems fair.", nextScene: "m6_branch_bribe" }
                    ]
                  }
                ]
              },
              {
                id: "m6_branch_ignore",
                title: "Consequence of Inaction",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Aarav ignores the message. Weeks pass…",
                    visualDescription: "Calendar pages flipping."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "We are under investigation. ApexCorp is linked to bribery across multiple companies. Why didn’t we report this earlier?",
                    visualDescription: "Mr. Kapoor looks stern and disappointed."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Ignoring red flags is risky. Even if you don’t participate, failing to report can cause legal exposure.",
                    visualDescription: "Red warning icon flashes behind Meera."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Consequence: Inaction enables risk.",
                    type: "choice",
                    options: [{ id: "m6_c1", label: "Acknowledge and Continue", nextScene: "m6_s3" }]
                  }
                ]
              },
              {
                id: "m6_branch_report",
                title: "Best Practice: Integrity",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Meera, ApexCorp is offering improper benefits. I want to report it.",
                    visualDescription: "Aarav approaches Meera in a private meeting room."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "You did the right thing. Confidential reporting protects both you and the company.",
                    visualDescription: "Meera gives a reassuring smile."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Good call, Aarav. We’ll escalate this to the compliance team and blacklist ApexCorp.",
                    visualDescription: "Mr. Kapoor nods firmly."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Path verified: Highest Integrity Path.",
                    type: "choice",
                    options: [{ id: "m6_c2", label: "Proceed to Conclusion", nextScene: "m6_s3" }]
                  }
                ]
              },
              {
                id: "m6_branch_bribe",
                title: "Consequence of Normalized Corruption",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Aarav tries to ‘neutralize’ the bribe. ApexCorp sees it as acceptance.",
                    visualDescription: "ApexCorp agent grins smugly."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Aarav, even suggesting fairness doesn’t remove corruption. Accepting any benefit is misconduct.",
                    visualDescription: "Meera looks deeply troubled."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "This could lead to immediate disciplinary action—including termination.",
                    visualDescription: "Mr. Kapoor speaks with absolute finality."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Consequence: Normalization is misconduct.",
                    type: "choice",
                    options: [{ id: "m6_c3", label: "Retry Scenario", nextScene: "m6_s2" }]
                  }
                ]
              },
              {
                id: "m6_s3",
                title: "Scene 3: The Learning Moment",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Red flags must be addressed quickly. Early reporting prevents legal, financial, and reputational damage.",
                    visualDescription: "Meera stands beside a slide: “Report Early = Protect Everyone”"
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "So corruption is rarely loud or obvious. It hides in everyday decisions.",
                    visualDescription: "Riya looks thoughtful."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. You’ll see many grey areas in operations—but ethics provide clarity.",
                    visualDescription: "Meera shows a scale titled 'Ethics > Pressure'."
                  }
                ]
              }
            ]
          }
        },
        {
          type: "check",
          question: "Which of these is the strongest indicator of a corruption red flag?",
          options: [
            "A vendor offering faster delivery with a personal benefit.",
            "A vendor requesting normal documentation delays.",
            "A vendor refusing to negotiate prices."
          ],
          correctIndex: 0,
          explanation: "Personal benefits linked to decision influence are classic bribery risks. Official business speed should never be contingent on unauthorized personal perks."
        },
        {
          type: "check",
          question: "If a vendor pressures you to skip documentation to ‘save time’, what should you do?",
          options: [
            "Agree — time is critical.",
            "Escalate to your manager or compliance team.",
            "Do it only once to avoid delays."
          ],
          correctIndex: 1,
          explanation: "Skipping controls is a major operational corruption red flag. Bypassing mandatory checks creates hidden risks that expose the company to legal and financial failure."
        }
      ]
    },
    {
      id: "abc-m7",
      title: "Module 7: Third-Party Due Diligence & Risk Assessment",
      summary: "Understanding how due diligence controls help prevent corruption when dealing with vendors, agents, and intermediaries.",
      order: 7,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Third-Party Due Diligence & Risk Assessment",
          videoUrl: "https://placeholder.video/module7-abc",
          instructions: "This training session explains how third-party risks arise, why due diligence matters, and how employees should assess external partner integrity. (Replace this link after exporting Google AI Studio code.)"
        },
        {
          type: "check",
          question: "A vendor refuses to provide financial statements during onboarding. What is the correct action?",
          options: [
            "Proceed anyway — the vendor is well-known.",
            "Escalate the issue and pause onboarding until due diligence is complete.",
            "Ask the vendor to send documents later after the contract is signed."
          ],
          correctIndex: 1,
          explanation: "Lack of transparency is a high-risk red flag. Always pause onboarding and escalate."
        },
        {
          type: "check",
          question: "An agent boasts that they can ‘get approvals faster’ because they have inside connections. What does this indicate?",
          options: [
            "Normal business networking",
            "A potential corruption or bribery risk",
            "Good relationships that can benefit the business"
          ],
          correctIndex: 1,
          explanation: "Inside influence or unverified connections often indicate corruption risk."
        },
        {
          type: "check",
          question: "Which of the following is *NOT* part of proper third-party due diligence?",
          options: [
            "Reviewing beneficial ownership",
            "Checking past litigation and compliance history",
            "Accepting verbal assurances of integrity"
          ],
          correctIndex: 2,
          explanation: "Verbal assurances are meaningless without documented verification."
        }
      ]
    },
    {
      id: "abc-m8",
      title: "Module 8: Ethical Challenges & Real-World Scenarios",
      summary: "Interactive scenarios with branching choices to learn judgment in grey areas.",
      order: 8,
      duration: "45 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Ethical Challenges & Real-World Scenarios",
            scenes: [
              {
                id: "m8_intro",
                title: "Opening – Grey Areas",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to the most important module: handling real-world grey areas in anti-corruption.",
                    visualDescription: "Meera stands near a training screen."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Policies are clear, but real scenarios never seem that simple.",
                    visualDescription: "Aarav has a concerned expression."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Sometimes small things look harmless… until they’re not.",
                    visualDescription: "Riya folds her arms thoughtfully."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Exactly. Today, you’ll make decisions—and see consequences.",
                    visualDescription: "Meera taps on the screen to load Scenario 1."
                  }
                ]
              },
              {
                id: "m8_s1",
                title: "Scenario 1 – The Vendor 'Speed-Up' Fee",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "A vendor tells Aarav he can 'speed up the approval' if Aarav pays a small unofficial fee.",
                    visualDescription: "A split-screen showing Aarav + vendor message."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "It’s a tiny amount… but I’m under pressure to deliver.",
                    visualDescription: "Aarav looks conflicted."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "What should Aarav do?",
                    options: [
                      { id: "s1_wrong", label: "Pay the small fee privately to speed up work", nextScene: "Scenario1-Wrong" },
                      { id: "s1_right", label: "Refuse and report the vendor’s request immediately", nextScene: "Scenario1-Right" }
                    ]
                  }
                ]
              },
              {
                id: "Scenario1-Wrong",
                title: "Wrong Path – Paying the Unofficial Fee",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Aarav pays the vendor quietly. The work moves faster.",
                    visualDescription: "Aarav transfers money secretly."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Later, internal audit detects unusual vendor payments.",
                    visualDescription: "A compliance officer checks logs."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Aarav, you should have reported this. Even small payments are bribery.",
                    visualDescription: "Kapoor looks disappointed."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This could have exposed the company to legal penalties.",
                    visualDescription: "Meera explains calmly."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Lesson: Shortcuts create bigger problems.",
                    options: [{ id: "m8_r1", label: "Rewind and Try Again", nextScene: "m8_s1" }]
                  }
                ]
              },
              {
                id: "Scenario1-Right",
                title: "Right Path – Escalating the Request",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "I can't agree to this. I’ll escalate it to compliance.",
                    visualDescription: "Aarav drafts an email."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Good decision. Reporting protects the company AND you.",
                    visualDescription: "Meera nods approvingly."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "We’ll remove the vendor from the roster.",
                    visualDescription: "Kapoor makes notes."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Integrity path verified. Proceeding to Scenario 2.",
                    options: [{ id: "m8_c1", label: "Next Scenario", nextScene: "m8_s2" }]
                  }
                ]
              },
              {
                id: "m8_s2",
                title: "Scenario 2 – The Luxury Gift Offer",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "A foreign client just offered me an all-expenses-paid weekend trip to 'build our relationship'.",
                    visualDescription: "Riya shows the message on her phone."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "That… sounds risky.",
                    visualDescription: "Aarav frowns."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "What should Riya do?",
                    options: [
                      { id: "s2_wrong", label: "Accept the luxury trip since it's 'hospitality'", nextScene: "Scenario2-Wrong" },
                      { id: "s2_right", label: "Decline politely and report it for transparency", nextScene: "Scenario2-Right" }
                    ]
                  }
                ]
              },
              {
                id: "Scenario2-Wrong",
                title: "Wrong Path – Accepting the Trip",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Riya accepts the trip quietly.",
                    visualDescription: "Riya packs a suitcase."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Later, client insists she push a contract through without review.",
                    visualDescription: "Client emails her urgently."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "This is exactly how influence works. It compromises fairness.",
                    visualDescription: "Meera explains."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "This puts us at major legal risk, Riya.",
                    visualDescription: "Kapoor speaks sternly."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Consequence: Influence destroys independence.",
                    options: [{ id: "m8_r2", label: "Rewind and Choose Again", nextScene: "m8_s2" }]
                  }
                ]
              },
              {
                id: "Scenario2-Right",
                title: "Right Path – Declining & Reporting",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Thank you, but I must decline. Our policy doesn’t allow high-value hospitality.",
                    visualDescription: "Riya types a polite message."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Great call. Transparency prevents future conflicts.",
                    visualDescription: "Meera smiles."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Path complete. Moving to summary.",
                    options: [{ id: "m8_c2", label: "Finish Scenarios", nextScene: "m8_conclusion" }]
                  }
                ]
              },
              {
                id: "m8_conclusion",
                title: "Conclusion",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Wrong choices help you understand consequences. The right choices protect you and the organization.",
                    visualDescription: "Meera stands confidently."
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    text: "Integrity is not optional. It’s who we are in every moment—especially under pressure.",
                    visualDescription: "Kapoor stands beside Meera."
                  }
                ]
              }
            ]
          }
        },
        {
          type: "check",
          question: "A vendor asks for a small unofficial fee to speed up work. What is the correct action?",
          options: [
            "Pay it if the amount is small and speeds up results.",
            "Refuse and immediately report the request to compliance.",
            "Ignore it and hope the vendor drops the matter."
          ],
          correctIndex: 1,
          explanation: "Any unofficial fee is bribery, regardless of size. In professional settings, payments must follow official channels and be properly documented."
        },
        {
          type: "check",
          question: "A client offers a luxury trip. What must you consider FIRST?",
          options: [
            "Is the client important enough?",
            "Is the hospitality reasonable, transparent, and free of influence?",
            "Is it outside working hours?"
          ],
          correctIndex: 1,
          explanation: "High-value gifts/hospitality compromise independence and create an obligation that could influence future business decisions. Transparency and reasonableness are the primary filters."
        },
        {
          type: "check",
          question: "Which principle applies to all grey-area ethical scenarios?",
          options: [
            "Intent, influence, transparency, and fairness.",
            "Popularity of the decision among colleagues.",
            "Whether anyone will find out."
          ],
          correctIndex: 0,
          explanation: "Ethical judgment is based on the impact of your actions, the intent behind them, and whether the process remains transparent and fair to all stakeholders."
        }
      ]
    },
    {
      id: "abc-m9",
      title: "Module 9: Global Legal Frameworks & Enforcement",
      summary: "Placeholder learning video explaining global anti-bribery laws, enforcement mechanisms, and corporate obligations.",
      order: 9,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Understanding Global Anti-Bribery Laws",
          videoUrl: "https://example.com/placeholder-abc-module9.mp4",
          instructions: "This is a placeholder video explaining global anti-bribery laws, enforcement mechanisms, and corporate obligations. After exporting the code from Google AI Studio, replace this URL with the final training video."
        },
        {
          type: "check",
          question: "Which of the following is TRUE about global anti-bribery laws?",
          options: [
            "They only apply within each country and never across borders.",
            "Many global anti-bribery laws apply extraterritorially and can penalize companies for violations done in other countries.",
            "Anti-bribery laws only apply to government officials."
          ],
          correctIndex: 1,
          explanation: "Major laws such as the FCPA and UK Bribery Act apply extraterritorially, meaning companies can be penalized for misconduct done through subsidiaries or third parties abroad."
        },
        {
          type: "check",
          question: "A third-party agent pays a bribe on behalf of your company without telling you. Who is legally responsible?",
          options: [
            "Only the third-party agent is liable.",
            "No one, because you didn’t authorize it.",
            "The company can still be liable if proper due diligence and controls were not applied."
          ],
          correctIndex: 2,
          explanation: "Under most global frameworks, companies are responsible for acts of intermediaries unless they prove strong preventive controls and oversight."
        },
        {
          type: "check",
          question: "Which enforcement trend has increased globally in the last decade?",
          options: [
            "Reduced penalties for bribery",
            "More aggressive cross-border cooperation among regulators",
            "Governments ignoring bribery cases involving multinational companies"
          ],
          correctIndex: 1,
          explanation: "Regulators increasingly share intelligence, coordinate raids, and co-investigate multinational corruption cases."
        }
      ]
    }
  ],
  assessment: [
    {
      "id": "abcq1",
      "text": "A procurement manager in India approves a vendor after a due-diligence report misses a key red flag because the vendor intentionally hid ownership links to a politically exposed person (PEP). Under most global ABC frameworks, which party bears the initial liability?",
      "options": [
        "Only the vendor, because they concealed ownership",
        "The procurement manager and the company if diligence was inadequate",
        "No one, because the PEP connection was not disclosed",
        "The government authority overseeing procurement"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq2",
      "text": "A U.S. subsidiary of your company pays a consultant in Nigeria, who then makes an unofficial ‘expediting payment’ to a customs officer. The U.S. team claims they had “no knowledge.” Under the FCPA, what is the key factor in determining corporate liability?",
      "options": [
        "Whether the U.S. team provided explicit written approval",
        "Whether the company should reasonably have known based on red flags",
        "Whether the consultant acted outside company policy",
        "Whether the payment was under $1000"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq3",
      "text": "During due diligence, an overseas distributor refuses to provide financial statements and insists on cash-only dealings, citing ‘local customs.’ What is the strongest ABC-compliant response?",
      "options": [
        "Proceed but document their refusal",
        "Accept cash dealings only for small transactions",
        "Escalate and block engagement until transparency is ensured",
        "Request a notarized letter of honesty from the distributor"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq4",
      "text": "A government official pressures your company for a ‘personal donation’ to support a local festival in exchange for faster licensing approval. What is this MOST accurately classified as?",
      "options": [
        "Facilitation payment",
        "Extortion under duress",
        "Bribe masked as a cultural request",
        "Corporate social responsibility (CSR) contribution"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq5",
      "text": "A sales manager offers an expensive vacation package to a client’s executive. The manager claims the offer was unrelated to negotiations and only meant as goodwill. Which ABC principle determines whether this is bribery?",
      "options": [
        "Whether the gift exceeds the company's monetary threshold",
        "Whether intent or perceived influence on decisions exists",
        "Whether the gift was from personal funds",
        "Whether the executive already signed the contract"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq6",
      "text": "A foreign intermediary demands a 20% ‘commission fee’ but refuses to detail the end-use of funds. Which red-flag category does this fall under?",
      "options": [
        "Unusual payment structure",
        "Cultural nuance",
        "Operational confidentiality",
        "Commercial negotiation strategy"
      ],
      "correctAnswer": 0
    },
    {
      "id": "abcq7",
      "text": "Your warehouse shipment is held at a port. A customs officer hints that ‘things will move faster’ if a small unofficial fee is paid. The cargo contains urgent medical supplies. What is the ABC-compliant action?",
      "options": [
        "Authorize the payment due to humanitarian urgency",
        "Refuse and escalate internally even if delays occur",
        "Authorize only if payment is under the facilitation threshold",
        "Let the logistics vendor decide and not record the details"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq8",
      "text": "A long-term vendor begins offering unusually steep discounts and insists on signing a shorter, auto-renewing contract with vague service descriptions. What is the biggest corruption risk here?",
      "options": [
        "Underpricing to create dependency and then increase price",
        "Kickbacks or side-payments routed through contract ambiguity",
        "The vendor is struggling financially",
        "The vendor wants operational flexibility"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq9",
      "text": "Your company hosts a conference. A senior government regulator attends. Offering lunch is acceptable, but the events team wants to provide a luxury gift basket. Under global ABC standards, what determines permissibility?",
      "options": [
        "Gift value and proportionality",
        "Whether the regulator likes the company",
        "Whether competitors offer gifts",
        "Whether the gift is imported or local"
      ],
      "correctAnswer": 0
    },
    {
      "id": "abcq10",
      "text": "A regional manager manipulates vendor payments by splitting large invoices into smaller ones to avoid higher-level approvals. What type of corruption is most applicable?",
      "options": [
        "Books-and-records violation",
        "Lobbying misconduct",
        "Political contribution diversion",
        "Whistleblower interference"
      ],
      "correctAnswer": 0
    },
    {
      "id": "abcq11",
      "text": "A competitor in China hires a public official’s daughter in exchange for favorable zoning approvals. The official never explicitly asked for this. Which ABC concept applies?",
      "options": [
        "Indirect bribery",
        "Harmless nepotism",
        "Market norm advantage",
        "Employer of choice strategy"
      ],
      "correctAnswer": 0
    },
    {
      "id": "abcq12",
      "text": "An internal audit finds that a sales team frequently uses vague terms like ‘market development fees’ in invoices sent to third parties. What is the primary ABC risk?",
      "options": [
        "Tax inefficiency",
        "Mischaracterization of bribe payments",
        "Poor grammar and documentation",
        "Vendor dissatisfaction"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq13",
      "text": "A foreign tax inspector threatens to impose unjustified penalties unless your company hires his cousin as a consultant. What is the recommended ABC action?",
      "options": [
        "Hire the consultant temporarily",
        "Negotiate a lower consulting fee",
        "Report and escalate as coercive bribery/extortion",
        "Pay a one-time settlement to avoid legal complications"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq14",
      "text": "A distributor in Latin America insists on using an unverified ‘local fixer’ to speed up governmental clearances. You suspect bribery risk but cutting ties risks losing revenue. Which is ABC compliant?",
      "options": [
        "Allow the fixer under a written contract",
        "Perform enhanced due diligence and block the transaction if red flags remain",
        "Let the distributor handle government relations independently",
        "Proceed but increase sales targets"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq15",
      "text": "An employee claims a payment made to a foreign official was not a bribe because it was 'customary.' What ABC principle invalidates this excuse?",
      "options": [
        "Cultural relativism is acceptable only if both parties agree",
        "Local custom never overrides anti-corruption law",
        "Customary payments are lawful if small",
        "Intent does not matter when customs are old"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq16",
      "text": "A major customer pressures your sales team to provide kickbacks through inflated marketing reimbursements. Which ABC risk does this illustrate?",
      "options": [
        "Conflict of interest",
        "Channel stuffing",
        "Commercial bribery",
        "Under-reporting of revenue"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq17",
      "text": "A middle manager approves reimbursement for an employee who falsely claims a government officer demanded a cash payment. Which control failure allowed this?",
      "options": [
        "Weak segregation of duties",
        "Lack of a speak-up channel",
        "Excessive leadership delegation",
        "Inadequate travel policy"
      ],
      "correctAnswer": 0
    },
    {
      "id": "abcq18",
      "text": "A foreign regulator investigates your company for bribery but offers to 'drop the case' in exchange for charitable donations to an NGO linked to the regulator’s family. What is the correct interpretation?",
      "options": [
        "A legal settlement",
        "CSR-driven resolution",
        "Indirect bribery/extortion",
        "Restitution mechanism"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq19",
      "text": "A supplier invites your procurement team to an all-expenses-paid training retreat at a resort. The supplier is currently bidding for a large contract. Which factor most clearly makes this unacceptable?",
      "options": [
        "Training is expensive",
        "Procurement is a high-risk function",
        "Timing during active bidding",
        "Retreat is outside the country"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq20",
      "text": "An employee in a high-risk market claims facilitation payments are unavoidable because the local government publicly tolerates them. Which legal standard applies under most global ABC laws?",
      "options": [
        "If government tolerates it, it is exempt",
        "If the company documents it, it is acceptable",
        "Facilitation tolerance does not override extraterritorial laws",
        "It is exempt if under a minimum threshold"
      ],
      "correctAnswer": 2
    },
    {
      "id": "abcq21",
      "text": "CASE: A third-party distributor in Africa gives expensive watches to hospital administrators, resulting in your company winning exclusive supply rights. The distributor claims this is a 'business norm.' What is your company’s risk?",
      "options": [
        "None, because the distributor acted independently",
        "High liability under third-party vicarious responsibility",
        "Low risk since no money exchanged hands",
        "Only the distributor is penalized"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq22",
      "text": "CASE: Internal audit discovers that a regional head marked several improper payments as 'inventory shrinkage'. Which global ABC enforcement principle applies?",
      "options": [
        "Anti-money laundering override",
        "Books and records falsification liability",
        "Whistleblower retaliation risk",
        "Tax classification error"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq23",
      "text": "CASE: Your company donates to a charity suggested by a government official. Months later, that official approves your pending license. What determines whether this is bribery?",
      "options": [
        "Donation size",
        "Temporal proximity and benefit linkage",
        "Whether the charity is registered",
        "Whether donation was made via bank transfer"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq24",
      "text": "CASE: A foreign agent wins a contract for your company using undocumented ‘relationship payments.’ Which due-diligence failure is most evident?",
      "options": [
        "Not verifying educational credentials",
        "Not assessing beneficial ownership and integrity history",
        "Not analyzing tax structure",
        "Not providing enough onboarding"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq25",
      "text": "CASE: A government auditor visits your office unexpectedly and hints that reporting a small 'administrative fee' will 'smooth' his report. Your compliance team wants to avoid escalating. What ABC concept is violated?",
      "options": [
        "Cooperation obligation",
        "Prohibition of bribery in passive solicitation",
        "Internal reporting confidentiality",
        "Audit evidence preservation"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq26",
      "text": "CASE: A vendor funnels illegal incentives through inflated consulting fees billed to your company. What mechanism is being misused?",
      "options": [
        "Contract extensions",
        "Slush fund creation",
        "Credit terms manipulation",
        "Currency exchange differences"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq27",
      "text": "CASE: A business partner in the Middle East offers lavish hospitality during contract negotiations. The hospitality is openly declared and documented. What determines ABC violation risk?",
      "options": [
        "Cultural differences",
        "Intent to influence contractual outcome",
        "Whether the hospitality occurred abroad",
        "Whether other companies do the same"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq28",
      "text": "CASE: A junior employee reports suspected bribery but the manager discourages escalation to ‘protect the team.’ What ABC principle is violated?",
      "options": [
        "Gift approval threshold",
        "Non-retaliation and speak-up protection",
        "Contract renewal oversight",
        "Third-party screening"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq29",
      "text": "CASE: During an investigation, employees delete emails linked to suspicious payments. Even though no bribe is proven, what legal risk remains?",
      "options": [
        "Fraudulent tax reporting",
        "Obstruction of justice and books-and-records violations",
        "Misuse of data storage",
        "Unauthorized procurement"
      ],
      "correctAnswer": 1
    },
    {
      "id": "abcq30",
      "text": "CASE: Your company acquires a smaller competitor. Post-acquisition review reveals the competitor paid systematic bribes for years. What determines successor liability?",
      "options": [
        "Whether bribes were ongoing at acquisition",
        "Whether the acquired company is dissolved after purchase",
        "Whether the acquiring company performed pre-acquisition ABC due diligence",
        "Whether the employees involved were terminated"
      ],
      "correctAnswer": 2
    }
  ]
};

export default antiBriberyAndCorruptionAbc;