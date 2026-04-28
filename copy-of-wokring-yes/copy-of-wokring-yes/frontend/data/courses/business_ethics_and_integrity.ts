import { Course } from '../../types';

const businessEthicsAndIntegrity: Course = {
  id: 'business-ethics-2024',
  title: 'Business Ethics & Integrity',
  description: 'A deep dive into corporate values, transparency, and conflict of interest management.',
  category: 'Corporate Ethics',
  duration: '100 mins',
  icon: '💎',
  colorTheme: 'amber',
  modules: [
    {
      id: 'be-m1',
      title: 'Module 1: Values in Action',
      summary: 'Understanding foundational business values and how they translate into daily behavior.',
      order: 1,
      duration: '10 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Module 1: Values in Action',
          videoUrl: 'https://placeholder.com/business-ethics-module-1',
          instructions: 'This is a placeholder video for Module 1: Values in Action. Replace this link after exporting code from Google AI Studio to integrate your final production video.'
        },
        {
          type: 'text',
          body: "Values guide ethical decision-making. They help employees choose the right action even when rules don’t explicitly state what to do."
        },
        {
          type: 'check',
          question: "Which of the following BEST describes a core business value?",
          options: [
            "Doing whatever is necessary to meet targets—even if rules must be bent.",
            "Making decisions based on honesty, fairness, and accountability.",
            "Prioritizing personal gain over team or company outcomes."
          ],
          correctIndex: 1,
          explanation: "Correct. Core values guide ethical conduct rooted in fairness, honesty, and accountability—not shortcuts or personal gain."
        },
        {
          type: 'comic',
          comicData: {
            title: 'Values in Everyday Work',
            scenes: [
              {
                title: 'Small Choices, Big Impact',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Values appear in everyday decisions—not just big ethical moments.",
                    side: 'left',
                    visualDescription: "Meera stands in the training hallway, greeting Aarav."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "Sometimes I'm not sure whether I'm doing the 'ethical' thing or the 'easy' thing.",
                    side: 'right',
                    visualDescription: "Aarav looks at his workstation with a slightly conflicted expression."
                  },
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "That's exactly when values matter most. They guide your judgment when shortcuts look tempting.",
                    side: 'left',
                    visualDescription: "Meera gives an encouraging nod."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which situation BEST demonstrates acting according to organizational values?",
          options: [
            "Noticing a mistake in a report and correcting it even if no one else would have known.",
            "Ignoring a mistake because it does not directly affect you.",
            "Sending the report as is and hoping the client doesn’t notice."
          ],
          correctIndex: 0,
          explanation: "Correct. Ethical values require integrity—fixing mistakes, being transparent, and prioritizing truth over convenience."
        }
      ]
    },
    {
      id: 'be-m2',
      title: 'Module 2: Professional Boundaries & Conflict of Interest',
      summary: 'Maintaining professional distance and objective decision-making in the workplace.',
      order: 2,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Understanding Professional Boundaries',
          videoUrl: 'https://placeholder.com/video-professional-boundaries.mp4',
          instructions: 'Video placeholder for Professional Boundaries. Replace with final version after export.'
        },
        {
          type: 'text',
          body: "Professional boundaries are essential for objective evaluation and fair treatment of all team members. A conflict of interest arises when your private interests interfere—or even appear to interfere—with the interests of the company."
        },
        {
          type: 'check',
          question: "Which of the following best describes *professional boundaries*?",
          options: [
            "Creating healthy distance to ensure objective and unbiased decision-making.",
            "Avoiding interaction with colleagues completely to prevent conflicts.",
            "Accepting small personal favors as long as they don’t influence major decisions."
          ],
          correctIndex: 0,
          explanation: "Correct — professional boundaries ensure fairness, impartiality, and consistency in workplace interactions."
        },
        {
          type: 'check',
          question: "You are part of a committee selecting a new software vendor. You realize your brother is a senior sales manager at one of the bidding firms. What is the most ethical action?",
          options: [
            "Continue with the evaluation but don't tell anyone, since you can remain objective.",
            "Immediately disclose the relationship to your manager and recuse yourself from the decision.",
            "Tell your brother the internal budget so his firm can win fairly."
          ],
          correctIndex: 1,
          explanation: "Correct. Transparency is key. Even if you are objective, the *perception* of a conflict is enough to damage trust and the integrity of the process."
        },
        {
          type: 'check',
          question: "What is the FIRST step when you feel a boundary is being overstepped?",
          options: [
            "Escalate directly to HR without any discussion.",
            "Politely communicate your discomfort or the conflict to the concerned person.",
            "Ignore the situation unless it becomes serious."
          ],
          correctIndex: 1,
          explanation: "Correct — it’s best to raise the concern early and communicate clearly before the issue escalates."
        }
      ]
    },
    {
      id: 'be-m3',
      title: 'Module 3: Ethical vs Unethical Behavior',
      summary: 'Learning to identify small compromises that lead to larger ethical failures through an interactive simulation.',
      order: 3,
      duration: '25 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Ethical vs Unethical Decision Making',
          videoUrl: 'https://placeholder.com/business-ethics-module-3',
          instructions: 'This video explores the "Slippery Slope" of unethical behavior and how to stay grounded in ethics. Replace with final version after export.'
        },
        {
          type: 'text',
          body: "Ethical behavior is rarely about choosing between 'good' and 'evil'. It's often about choosing the 'right' way over the 'easy' way, especially when facing pressure. Unethical acts often start with minor deviations that are justified as 'practical'."
        },
        {
          type: 'check',
          question: "What is the 'Slippery Slope' in business ethics?",
          options: [
            "When a company's profits decline due to poor market ethics.",
            "When small, seemingly minor compromises lead to major ethical violations over time.",
            "When an employee is promoted too quickly without ethical training."
          ],
          correctIndex: 1,
          explanation: "Correct. The slippery slope refers to how small unethical acts—like massaging data or ignoring minor red flags—can normalize dishonesty, eventually leading to serious misconduct."
        },
        {
          type: 'comic',
          comicData: {
            title: 'The Gray Area of Reporting',
            scenes: [{
              title: 'The Tense Discussion',
              panels: [
                {
                  character: 'Meera (Narrator)',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                  text: "I walked past the analytics desk when I noticed Aarav and Neha speaking in low, tense voices.",
                  side: 'left',
                  visualDescription: "Meera pauses in the hallway, looking toward a desk where two employees are huddled."
                },
                {
                  character: 'Neha (Sales Executive)',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&top=longHair&hairColor=black&mouth=smile&clothing=shirt',
                  text: "Aarav, we’re slightly under the target. Can we adjust the numbers a bit before sending it to the client?",
                  side: 'right',
                  visualDescription: "Neha gestures urgently at a graph on Aarav's screen."
                },
                {
                  character: 'Aarav (Business Analyst)',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt',
                  text: "These are the actual figures. Changing them would make the report inaccurate.",
                  side: 'left',
                  visualDescription: "Aarav keeps his hands on the keyboard, looking firm."
                },
                {
                  character: 'Meera (Narrator)',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                  text: "Integrity means being consistent in your principles even when no one is looking.",
                  side: 'left',
                  visualDescription: "Meera looks on as Aarav makes an ethical choice."
                }
              ]
            }]
          }
        }
      ]
    },
    {
      id: 'be-m4',
      title: 'Module 4: Ethical Conduct in Daily Work',
      summary: 'Understanding practical ethics through visual learning.',
      order: 4,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Ethical Behavior in Daily Operations',
          videoUrl: 'https://example.com/placeholder-ethical-behavior-video.mp4',
          instructions: 'This is a placeholder video for Module 4. Replace this URL with the final internal training video after exporting the project.'
        },
        {
          type: 'text',
          body: "You must watch the complete video before attempting the logic check. The final video will cover real-world examples of how daily decisions influence organizational ethics."
        },
        {
          type: 'check',
          question: "Which of the following best reflects ethical conduct in daily work?",
          options: [
            "Choosing transparency even when the truth may cause temporary discomfort.",
            "Adjusting reports or communication to avoid short-term escalation.",
            "Following ethical rules only when management is directly monitoring."
          ],
          correctIndex: 0,
          explanation: "Correct. Transparency and honesty are the foundation of ethical decision-making. Ethical behavior must remain consistent whether or not oversight is present."
        }
      ]
    },
    {
      id: 'be-m5',
      title: 'Module 5: Ethical Leadership & Culture',
      summary: 'Understanding the impact of leadership on organizational ethics and culture.',
      order: 5,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Ethical Leadership & Culture',
          videoUrl: '/videos/placeholder-ethics-leadership.mp4',
          instructions: 'This is a temporary placeholder video for the Ethical Leadership & Culture module. Replace this file after exporting the studio project. IMPORTANT: Replace the source file after export with the final training video.'
        },
        {
          type: 'text',
          body: "Please watch the entire video. Once it is fully completed, you may proceed to the logic check below. The final video will detail how leadership 'sets the tone' for the entire organization."
        },
        {
          type: 'check',
          question: "What is ONE essential element of ethical leadership?",
          options: [
            "Enforcing policies only when convenient.",
            "Leading by example and demonstrating consistent ethical behavior.",
            "Prioritizing short-term wins over long-term trust."
          ],
          correctIndex: 1,
          explanation: "Correct. Ethical leadership requires consistency in actions, decisions, and tone-setting, even when inconvenient."
        }
      ]
    },
    {
      id: 'be-m6',
      title: 'Module 6: Ethical Decision-Making Under Pressure',
      summary: 'Interactive branching scenario: How to make ethical decisions even when under extreme pressure.',
      order: 6,
      duration: '40 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Pressure Points – A Branching Ethics Simulation',
            scenes: [
              {
                id: 'scene1_start',
                title: 'Scene 1: The Critical Deadline',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "The operations floor was buzzing, but something about the hushed voices at Riya’s desk felt different.",
                    side: 'left',
                    visualDescription: "Busy office floor, Riya and Kunal leaning over a document."
                  },
                  {
                    character: 'Kunal (Team Lead)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal',
                    text: "Riya, the deadline is today. If this report shows yesterday’s date instead of today, we avoid scrutiny. Just change the timestamp.",
                    side: 'right',
                    visualDescription: "Kunal pointing at the screen anxiously."
                  },
                  {
                    character: 'Riya (Ops Executive)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "But that’s incorrect. It’s not the date we finalized the document.",
                    side: 'left',
                    visualDescription: "Riya looks conflicted."
                  },
                  {
                    character: 'Kunal (Team Lead)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal',
                    text: "Listen—we’re all under pressure. This small change avoids trouble for the whole team.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "The pressure is mounting. Riya must choose between compliance and convenience.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_backdate', label: 'Backdate the document to avoid scrutiny.', nextScene: 'scene2_wrong' },
                      { id: 'opt_refuse', label: 'Refuse to alter the date and suggest transparency.', nextScene: 'scene2_right' }
                    ]
                  }
                ]
              },
              {
                id: 'scene2_wrong',
                title: 'Scene 2A: The Shortcut',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Okay… I’ll change it. But I’m not sure this is right.",
                    side: 'left'
                  },
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Riya made the change—but the uneasy feeling didn’t go away.",
                    side: 'left'
                  },
                  {
                    character: 'Sandeep (Senior Manager)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sandeep',
                    text: "Why does this document show yesterday’s date? Audit just pinged me.",
                    side: 'right',
                    visualDescription: "Sandeep holds up the printed document with a raised eyebrow."
                  },
                  {
                    character: 'Kunal',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal',
                    text: "…Uh—must be a system glitch?",
                    side: 'right'
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "I… I changed it. I thought it was necessary to meet the deadline.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Backdating is falsification. Even under pressure, this creates severe risk.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'merge_wrong', label: 'Proceed to Reflection', nextScene: 'scene_final' }]
                  }
                ]
              },
              {
                id: 'scene2_right',
                title: 'Scene 2B: Standing Firm',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "I can’t change the date. It misrepresents the truth. We should send it with today’s date and explain.",
                    side: 'left'
                  },
                  {
                    character: 'Kunal',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal',
                    text: "But upper management will escalate!",
                    side: 'right'
                  },
                  {
                    character: 'Meera (HR Executive)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Riya is right. Ethical decisions matter most under pressure.",
                    side: 'left',
                    visualDescription: "Meera steps toward the team with confidence."
                  },
                  {
                    character: 'Sandeep (Senior Manager)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sandeep',
                    text: "Good call. We’ll send it with an explanation. Better honest than risky.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Transparency protects the organization from long-term compliance risk.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'merge_right', label: 'Proceed to Reflection', nextScene: 'scene_final' }]
                  }
                ]
              },
              {
                id: 'scene_final',
                title: 'Final Scene: Reflection',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Ethical pressure moments define the workplace culture. Quick fixes may seem convenient—but they come at a cost.",
                    side: 'left'
                  },
                  {
                    character: 'Meera (HR Executive)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Final thought: Pressure does not excuse unethical decisions. Pausing, questioning, and choosing transparency is the real sign of integrity.",
                    side: 'left'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'be-m7',
      title: 'Module 7: Gifts, Influence & Fair Decision-Making',
      summary: 'Understanding improper influence, vendor gifts, and ethical selection practices.',
      order: 7,
      duration: '40 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'The Offer on the Table – Interactive Scenario',
            scenes: [
              {
                id: 'm7_s1_start',
                title: 'A Questionable Offer',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    side: 'left',
                    text: "It was late afternoon when I overheard Rahul talking to a vendor representative. His tone immediately signaled concern."
                  },
                  {
                    character: 'Amit (Vendor Rep)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    side: 'right',
                    text: "Rahul, your team is a priority for us. We’re hosting an exclusive resort weekend for partners. Fully sponsored. I’d love for you to join."
                  },
                  {
                    character: 'Rahul (Procurement Exec)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    side: 'left',
                    text: "During the vendor evaluation period…? I’m not sure that would be appropriate."
                  },
                  {
                    character: 'Amit (Vendor Rep)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    side: 'right',
                    text: "It's just hospitality. No conditions. These things help build good relationships."
                  },
                  {
                    character: 'System',
                    text: "Rahul must decide whether to engage with the vendor's hospitality offer.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'branch_accept_opt', label: 'Accept the hospitality — Relationship building', nextScene: 'branch_accept' },
                      { id: 'branch_decline_opt', label: 'Politely decline — Avoid influence risk', nextScene: 'branch_decline' }
                    ]
                  }
                ]
              },
              {
                id: 'branch_accept',
                title: 'Branch: Accepting the Offer',
                panels: [
                  {
                    character: 'Rahul',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    text: "Okay… I’ll join. But only casually. Nothing official."
                  },
                  {
                    character: 'Meera (Narrator)',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "He chose the easy path. But easy rarely means ethical."
                  },
                  {
                    character: 'Sonal (Team Manager)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    side: 'right',
                    text: "Rahul… we just received a complaint. The vendor mentioned you 'accepted our hospitality.' This puts the entire evaluation under scrutiny."
                  },
                  {
                    character: 'Meera (HR Executive)',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Intent doesn’t override perception. Even if there’s no wrongdoing, it appears biased. This harms our credibility."
                  },
                  {
                    character: 'System',
                    text: "Accepting personal hospitality during evaluations is a breach of integrity.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm7_r1', label: 'Rewind to Ethical Path', nextScene: 'branch_decline' }]
                  }
                ]
              },
              {
                id: 'branch_decline',
                title: 'Branch: Declining the Hospitality',
                panels: [
                  {
                    character: 'Rahul',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    side: 'left',
                    text: "Thank you, Amit, but I can’t accept personal hospitality during an active vendor evaluation."
                  },
                  {
                    character: 'Amit (Vendor Rep)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    side: 'right',
                    text: "Oh… I didn’t realize it would be an issue."
                  },
                  {
                    character: 'Meera (Narrator)',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Rahul’s clarity protected both his integrity and the organization."
                  },
                  {
                    character: 'Sonal (Team Manager)',
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    text: "Rahul, good call. Hospitality during evaluation appears as an attempt to influence decisions."
                  },
                  {
                    character: 'System',
                    text: "Refusing the offer was the first step. But should the incident be officially reported?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'branch_noReport_opt', label: 'Do not report — No harm was done', nextScene: 'branch_noReport' },
                      { id: 'branch_report_opt', label: 'Report the incident — Ensure transparency', nextScene: 'branch_report' }
                    ]
                  }
                ]
              },
              {
                id: 'branch_noReport',
                title: 'Branch: The Risk of Silence',
                panels: [
                  {
                    character: 'Rahul',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    text: "There’s no need to report this. I said no. That should be enough."
                  },
                  {
                    character: 'Sonal',
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    text: "Rahul, the vendor just told another employee you refused an 'expensive gift'. Why wasn't this disclosed?"
                  },
                  {
                    character: 'Meera (HR Executive)',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Undisclosed incidents create suspicion. Transparency is your best defense against rumors."
                  },
                  {
                    character: 'System',
                    text: "Silence regarding attempted influence can backfire. Always disclose.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm7_r2', label: 'Choose Transparency', nextScene: 'branch_report' }]
                  }
                ]
              },
              {
                id: 'branch_report',
                title: 'Branch: Reporting the Attempt',
                panels: [
                  {
                    character: 'Rahul',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    text: "I should document this and report it to the ethics and procurement review team."
                  },
                  {
                    character: 'Sonal',
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    text: "Good. Reporting protects us legally and ensures procurement stays fair."
                  },
                  {
                    character: 'Meera (HR Executive)',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Ethical handling isn’t about rejecting kindness — it’s about protecting fairness and trust."
                  },
                  {
                    character: 'Meera (Narrator)',
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Integrity is built through consistent decisions, even when the offer seems harmless."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which action ensures impartiality during vendor evaluation?",
          options: [
            "Accepting hospitality if no conditions are mentioned",
            "Declining gifts or benefits that may influence or appear to influence decision-making"
          ],
          correctIndex: 1,
          explanation: "Correct. Even the appearance of bias compromises fairness. Declining and reporting ensures credibility and protects the evaluation process."
        }
      ]
    },
    {
      id: 'be-m8',
      title: 'Module 8: Speaking Up & Reporting Ethical Concerns',
      summary: 'Making ethical reporting decisions through branching, consequences, and reflection.',
      order: 8,
      duration: '40 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'The Voice of Accountability – Branching Scenario',
            scenes: [
              {
                id: 'm8_s1_intro',
                title: 'Scene 1: The Suspicious Pattern',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "I noticed Priya and Rohan whispering over a spreadsheet with tense faces. Something was clearly wrong.",
                    side: 'left'
                  },
                  {
                    character: 'Priya (Finance Executive)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Rohan… the same personal expenses are marked as ‘business’ again. Fourth time this quarter.",
                    side: 'right'
                  },
                  {
                    character: 'Rohan (Analyst)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
                    text: "I know… but what if the leadership already knows? Reporting it might backfire.",
                    side: 'right'
                  },
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Or what if they DON’T know? What if this becomes a major compliance violation later?",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Priya faces an ethical dilemma. Should she report the pattern or stay silent?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_report', label: '📌 Document the pattern and report it through proper channels.', nextScene: 'm8_s2a_report' },
                      { id: 'opt_silent', label: '🤐 Stay silent and hope the pattern is harmless.', nextScene: 'm8_s2b_silent' }
                    ]
                  }
                ]
              },
              {
                id: 'm8_s2a_report',
                title: 'Branch A: Priya Chooses to Report',
                panels: [
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "I’m going to report this. I don’t want to ignore something that could be serious.",
                    side: 'right'
                  },
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "She submits the concern with proper documentation. Ankit reviews it immediately.",
                    side: 'left'
                  },
                  {
                    character: 'Ankit (Manager)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit',
                    text: "Good call reporting it early. This helps us catch issues before they escalate.",
                    side: 'right'
                  },
                  {
                    character: 'Ankit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit',
                    text: "We need one more step, Priya. Should we escalate immediately or verify the documentation first?",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Quality check required. How should they proceed with the escalation?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_verify', label: '🔍 Verify the transactions before escalation.', nextScene: 'm8_s3a_verified' },
                      { id: 'opt_rush', label: '🚨 Escalate immediately without verification.', nextScene: 'm8_s3a_rushed' }
                    ]
                  }
                ]
              },
              {
                id: 'm8_s3a_verified',
                title: 'Outcome A1: Verification First',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Priya and Ankit verify the entries. The documentation clearly shows repeated misuse.",
                    side: 'left'
                  },
                  {
                    character: 'Ankit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit',
                    text: "Now escalation will be solid. Great job ensuring accuracy.",
                    side: 'right'
                  },
                  {
                    character: 'Meera (HR Executive)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Accurate reporting is the gold standard of integrity. You've secured the process.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Integrity path fully validated. Platinum status achieved.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm8_done', label: 'Finish Simulation', nextScene: 'm8_reflection_end' }]
                  }
                ]
              },
              {
                id: 'm8_s3a_rushed',
                title: 'Outcome A2: Immediate Escalation Without Facts',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "The escalation reaches compliance… but one transaction was incorrectly interpreted.",
                    side: 'left'
                  },
                  {
                    character: 'Compliance Officer',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Officer',
                    text: "This could’ve been avoided with verification. The case is now weakened by inaccurate details.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Rushing can compromise the reporting process. Accuracy is essential.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm8_rewind_verify', label: 'Rewind and Verify Facts', nextScene: 'm8_s3a_verified' }]
                  }
                ]
              },
              {
                id: 'm8_s2b_silent',
                title: 'Branch B: Priya Stays Silent',
                panels: [
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Maybe I’m overthinking. I’ll let it go.",
                    side: 'right'
                  },
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Two months later, the pattern explodes into a major audit issue.",
                    side: 'left'
                  },
                  {
                    character: 'Auditor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Auditor',
                    text: "These expenses have been misclassified repeatedly. Why was this not flagged earlier?",
                    side: 'right'
                  },
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "I should have spoken up… What do I do now?",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "The situation has escalated. How can Priya recover her integrity?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_admit', label: '📣 Admit she noticed it earlier and report it now.', nextScene: 'm8_s3b_admit' },
                      { id: 'opt_still_silent', label: '⚠️ Continue staying silent.', nextScene: 'm8_s3b_still_silent' }
                    ]
                  }
                ]
              },
              {
                id: 'm8_s3b_admit',
                title: 'Outcome B1: Late Reporting',
                panels: [
                  {
                    character: 'Ankit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit',
                    text: "You should have reported earlier… but correcting now is still better than continued silence.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Corrective action taken. Redirecting to successful reporting protocol.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm8_redirect_correct', label: 'Return to Ethical Path', nextScene: 'm8_s2a_report' }]
                  }
                ]
              },
              {
                id: 'm8_s3b_still_silent',
                title: 'Outcome B2: Continued Silence',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "The investigation uncovers Priya’s prior access logs. Her silence becomes part of the issue.",
                    side: 'left'
                  },
                  {
                    character: 'Ankit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankit',
                    text: "Priya… choosing silence worsened the outcome. Accountability is a requirement, not a choice.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Silence has led to a failure of integrity. You must learn the correct path.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm8_redirect_final_fail', label: 'Learn from Ethical Path', nextScene: 'm8_s2a_report' }]
                  }
                ]
              },
              {
                id: 'm8_reflection_end',
                title: 'Final Reflection',
                panels: [
                  {
                    character: 'Meera (Narrator)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Speaking up builds the foundation of corporate trust. It's about protecting the long-term health of the team.",
                    side: 'left'
                  },
                  {
                    character: 'Meera (HR Executive)',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Final thought: Integrity is not just in what you do, but what you report. Accuracy and courage are the two wings of accountability.",
                    side: 'left'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "What is the MOST ethical response when noticing repeated suspicious financial patterns?",
          options: [
            "Stay silent to avoid conflict.",
            "Document what you observed and report it responsibly."
          ],
          correctIndex: 1,
          explanation: "Correct. Ethical reporting prevents escalation, protects the organization, and ensures integrity."
        }
      ]
    }
  ],
  assessment: [
    {
      id: 'beq1',
      text: "A project manager subtly suggests to an analyst that 'rounding up' revenue projections will help align with leadership expectations. The analyst knows the rounded figure still falls within a technically acceptable forecasting margin. What is the MOST ethical action?",
      options: [
        "Round the numbers since it does not drastically change the outcome.",
        "Disclose the accurate projection and document reasons for not rounding upward.",
        "Round upward but add a footnote to justify the change.",
        "Ask a peer if rounding is commonly done before deciding."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq2',
      text: "A vendor offers a senior associate a ‘limited-time VIP pass’ to an industry conference during an active procurement cycle. The colleague insists that the pass is not a gift but a ‘professional opportunity.’ What is the correct interpretation?",
      options: [
        "It is acceptable because the conference is industry-related.",
        "It is a conflict of interest because it provides personal benefit during evaluation.",
        "It is acceptable only if the manager approves it.",
        "It is unethical only if the vendor explicitly asks for favourable treatment."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq3',
      text: "A finance specialist discovers expense claims that appear suspicious but cannot determine intent. According to good-faith reporting standards, what is the correct approach?",
      options: [
        "Investigate privately before raising concern.",
        "Report the concern even without full evidence.",
        "Wait until a pattern becomes severe.",
        "Tell the colleague informally to ‘fix it quietly’."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq4',
      text: "A team lead pressures an employee to backdate an approval document due to client expectations. The employee fears escalation will negatively impact the team’s performance rating. What is the MOST ethical choice?",
      options: [
        "Comply once to protect the team and avoid confrontation.",
        "Backdate but write a private email documenting discomfort.",
        "Refuse and escalate the request through ethical channels.",
        "Stay silent and let the lead take responsibility."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq5',
      text: "During a quarterly review, a manager privately asks an analyst to omit two negative metrics from a slide deck, claiming leadership prefers ‘strategic focus areas only.’ How should the analyst respond?",
      options: [
        "Remove the metrics since they are not explicitly required.",
        "Provide the full dataset and include narrative context.",
        "Omit the metrics but verbally mention them during review.",
        "Ask a peer if omissions have been done previously."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq6',
      text: "A junior employee suspects that a senior manager is misusing travel funds but fears retaliation. What principle should guide the employee’s decision?",
      options: [
        "Retaliation risk means reporting should wait.",
        "Reporting must happen only after collecting substantial proof.",
        "Good-faith reporting protects the employee regardless of hierarchy.",
        "The issue should be ignored unless it becomes a legal violation."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq7',
      text: "A team is under pressure to meet a deadline. A colleague suggests sending an incomplete document and updating it quietly afterward. Which factor makes this unethical?",
      options: [
        "The client may not notice the missing sections.",
        "It creates misrepresentation and breaches transparency.",
        "The team is under genuine time pressure.",
        "It is common industry practice during tight deadlines."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq8',
      text: "A procurement analyst receives several small gifts from a long-term vendor throughout the year. None exceed monetary limits individually, but collectively they create influence. What principle applies?",
      options: [
        "The gifts are acceptable because each is within the limit.",
        "The cumulative pattern can still create conflict of interest.",
        "Only explicit bribes violate ethics policies.",
        "The gifts are acceptable if disclosed later."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq9',
      text: "An employee discovers that a colleague is selectively revealing only favourable client survey data to leadership to avoid negative scrutiny. What is the core ethical failure?",
      options: [
        "Poor data cleaning practices.",
        "Violation of fairness and transparency principles.",
        "Lack of understanding of reporting tools.",
        "Minor deviation in analytics standards."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq10',
      text: "A vendor hints at expediting delivery timelines ‘if we can agree on a mutually beneficial arrangement.’ What is the correct interpretation?",
      options: [
        "It is negotiation language and should be explored.",
        "It signals potential bribery or improper influence.",
        "It is harmless unless money changes hands.",
        "It is acceptable if the arrangement is verbal only."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq11',
      text: "A colleague justifies altering minor data values by saying, ‘It won’t change the decision anyway.’ Why is this still unethical?",
      options: [
        "It reflects poor analytical skill.",
        "Small compromises erode integrity over time.",
        "It is illegal regardless of impact.",
        "It is only unethical if leadership finds out."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq12',
      text: "Under pressure, an employee intentionally delays reporting a mistake that could affect compliance. What ethical breach occurred?",
      options: [
        "Lack of collaboration.",
        "Failure to act with timeliness and transparency.",
        "Over-reporting minor issues.",
        "Normal error management."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq13',
      text: "A senior colleague says: ‘Everyone inflates client forecasts slightly. It’s how business works.’ What is the correct response?",
      options: [
        "Follow the informal norm to maintain alignment.",
        "Inflate only if the forecast is still realistic.",
        "Escalate or decline to participate in misrepresentation.",
        "Seek consensus among peers before deciding."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq14',
      text: "A manager offers to overlook a compliance discrepancy if an employee delivers an urgent favour. What principle is violated?",
      options: [
        "Professional courtesy.",
        "Conflict of interest and abuse of authority.",
        "Time management and prioritization.",
        "Delegation protocols."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq15',
      text: "An intern is told to copy competitor confidential data from a public forum that appears leaked. What is the correct approach?",
      options: [
        "Use it since it is publicly available.",
        "Verify legality, then decide.",
        "Refuse and escalate because leaked content remains unethical to use.",
        "Collect it but store it privately."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq16',
      text: "A colleague discourages another from reporting issues, saying ‘It will only complicate things; let it slide.’ What is the ethical flaw?",
      options: [
        "The colleague lacks confidence.",
        "They are promoting a culture of silence and risk.",
        "They misunderstand policy language.",
        "They fear documentation work."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq17',
      text: "During a bidding process, a vendor subtly offers consulting ‘support’ to an evaluator's family member. What principle applies?",
      options: [
        "Unrelated benefits are irrelevant.",
        "This is a clear form of indirect bribery.",
        "It is acceptable if disclosed later.",
        "It is allowed if the evaluator recuses themselves."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq18',
      text: "A manager pressures an employee to hide negative product test results to avoid delaying a launch. What is the correct action?",
      options: [
        "Comply because launch delays affect revenue.",
        "Provide full results and escalate the pressure attempt.",
        "Partially disclose the results.",
        "Delay reporting until after final approval."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq19',
      text: "A team repeatedly misses deadlines because members quietly cover for each other’s incomplete work. Which ethical failure occurs?",
      options: [
        "Inefficient workload distribution.",
        "Collective misrepresentation and lack of accountability.",
        "Team bonding influencing outcomes.",
        "Poor scheduling."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq20',
      text: "An employee receives insider hints from a former colleague at a competitor about pricing changes. What should they do?",
      options: [
        "Use the information discreetly.",
        "Verify the information internally first.",
        "Report the communication as an ethical risk.",
        "Forward it anonymously to procurement."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq21',
      text: "A senior employee pressures a junior analyst to conceal a data error until after submitting a report. What is the biggest ethical risk?",
      options: [
        "A minor delay in correction.",
        "Misrepresentation that may affect key decisions.",
        "Strained relationship between senior and junior.",
        "Reduced productivity."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq22',
      text: "A manager insists on approving all team complaints personally, discouraging direct access to reporting mechanisms. Which ethical issue arises?",
      options: [
        "Managerial efficiency.",
        "Gatekeeping that suppresses transparent reporting.",
        "Proper chain of command.",
        "Enhanced hierarchical control."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq23',
      text: "A business partner tries to influence an employee by offering part-time consulting work on the side. Why is this unethical?",
      options: [
        "It promotes skill development.",
        "It is allowed outside business hours.",
        "It creates conflict of interest and external influence.",
        "It is acceptable if the consulting fee is small."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq24',
      text: "A team manipulates performance dashboards by removing outliers to appear more successful. What is the ethical breach?",
      options: [
        "Poor statistical knowledge.",
        "Misleading representation of performance.",
        "Over-reliance on data visuals.",
        "Lack of consensus."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq25',
      text: "When reporting concerns, why is ‘reasonable suspicion’ enough?",
      options: [
        "Because proving intent is required.",
        "Because early reporting prevents escalation.",
        "Because suspicion replaces evidence.",
        "Because managers prefer early gossip."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq26',
      text: "A colleague asks another to ignore a conflict of interest because ‘it won’t impact the outcome.’ Why is this incorrect?",
      options: [
        "Conflicts affect credibility even if outcomes remain unchanged.",
        "Small conflicts are irrelevant.",
        "Disclosure can be done later.",
        "Only large conflicts matter ethically."
      ],
      correctAnswer: 0
    },
    {
      id: 'beq27',
      text: "A senior manager downplays a whistleblowing report as ‘overreacting.’ What ethical requirement is being violated?",
      options: [
        "Good-faith reporting protections.",
        "Performance management.",
        "Client confidentiality.",
        "Audit documentation rules."
      ],
      correctAnswer: 0
    },
    {
      id: 'beq28',
      text: "A non-financial employee gains access to sensitive financial data due to a system misconfiguration. What is the ethical responsibility?",
      options: [
        "Ignore it since it was unintentional.",
        "Use it only if needed for personal learning.",
        "Report the access issue immediately.",
        "Share it with the intended financial team."
      ],
      correctAnswer: 2
    },
    {
      id: 'beq29',
      text: "A team manipulates meeting minutes to exclude a manager’s unethical directive. Why is this harmful?",
      options: [
        "Meeting minutes are informal documents.",
        "It destroys audit integrity and hides accountability.",
        "It improves team relationships.",
        "It prevents unnecessary conflict."
      ],
      correctAnswer: 1
    },
    {
      id: 'beq30',
      text: "A new employee feels pressured to follow questionable ‘informal shortcuts’ used by the team. What principle should guide their action?",
      options: [
        "Follow team culture for acceptance.",
        "Do a neutral risk assessment and follow formal ethics policy.",
        "Experiment first then decide.",
        "Ask peers whether shortcuts are normal."
      ],
      correctAnswer: 1
    }
  ]
};

export default businessEthicsAndIntegrity;