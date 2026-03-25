import { Course } from '../../types';

const poshPreventionOfSexualHarassment: Course = {
  id: 'posh-certification-2024',
  title: 'POSH: Prevention of Sexual Harassment',
  description: 'Master the legal, ethical, and organizational frameworks of the POSH Act, 2013 through real-world workplace scenarios.',
  category: 'Legal Compliance',
  duration: '120 mins',
  icon: '⚖️',
  colorTheme: 'violet',
  modules: [
    {
      id: "posh-m1",
      title: "Module 1: Introduction to POSH",
      summary: "Understanding the roots, purpose, and importance of POSH.",
      order: 1,
      duration: "25 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Foundations of Safety",
            scenes: [
              {
                id: "start",
                title: "The Orientation Room",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "Welcome to Module 1. Today, we explore why POSH matters beyond just knowing the law.",
                    visualDescription: "A bright training room as Meera steps in with a warm smile."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Honestly, Meera… I know the basics, but I’m not sure I fully understand how harassment is defined.",
                    visualDescription: "Aarav adjusts his ID card, genuinely curious."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Same here. I want to know what is ‘okay’ vs ‘crossing the line’.",
                    visualDescription: "Riya sits upright, notebook open."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Riya looks uncomfortable when a colleague stands too close in the elevator. What should Aarav do?",
                    options: [
                      { id: "choice1A", label: "A. Stay silent. It’s awkward but maybe it’s nothing.", nextScene: "path_silent" },
                      { id: "choice1B", label: "B. Ask Riya privately if she is okay.", nextScene: "path_checkin" }
                    ]
                  }
                ]
              },
              {
                id: "path_silent",
                title: "Path: Silence",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    text: "(thinking) It's probably fine… No need to overreact.",
                    visualDescription: "Aarav hesitates and walks away."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    text: "Why did he stand so close…? I feel really uncomfortable.",
                    visualDescription: "Riya stands alone, anxious."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "When we ignore signs, the person feeling unsafe stays silent. Supportive workplaces need active bystanders.",
                    type: "text"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Let's move to the next lesson.",
                    type: "choice",
                    options: [{ id: "m1_1", label: "Continue", nextScene: "merge1" }]
                  }
                ]
              },
              {
                id: "path_checkin",
                title: "Path: Support",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    text: "Hey Riya, you looked uncomfortable. Are you okay?",
                    visualDescription: "Aarav speaks softly, away from others."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    text: "Thanks for asking… That person stood way too close. It felt deliberate.",
                    visualDescription: "Riya sighs and clutches her notebook."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "I saw the tension too. Early support makes a big difference. POSH encourages awareness and empathy.",
                    type: "text"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Let's move to the next lesson.",
                    type: "choice",
                    options: [{ id: "m1_2", label: "Continue", nextScene: "merge1" }]
                  }
                ]
              },
              {
                id: "merge1",
                title: "The Pillars",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    text: "POSH is built on three pillars: Prevention, Prohibition, and Redressal.",
                    visualDescription: "Three glowing icons appear: Shield, Stop Sign, Justice Scales."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    text: "So it’s more than reporting misconduct?",
                    visualDescription: "Aarav leans forward thoughtfully."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Riya receives a message from a senior: 'Join me after training? Alone. Need to discuss your future 😉'. What should she do?",
                    options: [
                      { id: "choice2A", label: "A. Ignore it. Maybe he’s joking.", nextScene: "path_ignore" },
                      { id: "choice2B", label: "B. Talk to Meera immediately.", nextScene: "path_report" }
                    ]
                  }
                ]
              },
              {
                id: "path_ignore",
                title: "Path: Risk",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "(thinking) Maybe he didn’t mean anything… I’ll ignore it.",
                    visualDescription: "Riya bites her lip nervously."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Riya, ignoring early red flags lets situations escalate. Unwelcome messages count as misconduct.",
                    type: "text"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Conclusion of Module 1.",
                    type: "choice",
                    options: [{ id: "m1_3", label: "Finish", nextScene: "merge2" }]
                  }
                ]
              },
              {
                id: "path_report",
                title: "Path: Resolution",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "Meera… I got this message. It made me uncomfortable.",
                    visualDescription: "Riya hands her phone to Meera."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Thank you for sharing. Digital harassment is still harassment. Impact matters more than intent.",
                    type: "text"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Conclusion of Module 1.",
                    type: "choice",
                    options: [{ id: "m1_4", label: "Finish", nextScene: "merge2" }]
                  }
                ]
              },
              {
                id: "merge2",
                title: "Impact and Beyond",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    text: "If it feels unwelcome, it must be addressed. Great. You’ve completed Module 1.",
                    visualDescription: "The scene fades into completion."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "posh-m2",
      title: "Module 2: What is a Workplace?",
      summary: "Exploring the expanded legal definition of workplace under POSH.",
      order: 2,
      duration: "45 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Module 2: Understanding the Workplace",
            scenes: [
              {
                id: "m2_start",
                title: "A New Question",
                panels: [
                  { character: "Meera", text: "Welcome back. Today we discuss what ‘workplace’ legally means.", side: "left", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" },
                  { character: "Aarav", text: "Isn’t it just… the office?", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
                  { character: "Meera", text: "Not anymore. Work happens everywhere.", side: "left", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "Riya meets a client at a café. The client gets too close. Does POSH apply?",
                    options: [
                      { id: "m2_q1_a1", label: "No, it’s a public café.", nextScene: "m2_d1_wrong" },
                      { id: "m2_q1_a2", label: "Yes, it’s an official work meeting.", nextScene: "m2_d1_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m2_d1_correct",
                title: "Correct",
                panels: [
                  { character: "Meera", text: "Exactly. A workplace is anywhere work is conducted.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next scenario...", options: [{ id: "m2_c1", label: "Continue", nextScene: "m2_q2" }] }
                ]
              },
              {
                id: "m2_d1_wrong",
                title: "Misunderstanding",
                panels: [
                  { character: "Riya", text: "I didn’t report it… but now I feel unsafe meeting other clients.", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya" },
                  { character: "Meera", text: "Extended workplace protects employees everywhere work is done.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next scenario...", options: [{ id: "m2_c2", label: "Continue", nextScene: "m2_q2" }] }
                ]
              },
              {
                id: "m2_q2",
                title: "Decision 2",
                panels: [
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "During WFH, Aarav receives an inappropriate comment during a Zoom call. What should he do?",
                    options: [
                      { id: "m2_q2_a1", label: "Ignore it because it’s online.", nextScene: "m2_d2_wrong" },
                      { id: "m2_q2_a2", label: "Document and report it as workplace misconduct.", nextScene: "m2_d2_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m2_d2_correct",
                title: "Good Documentation",
                panels: [
                  { character: "Meera", text: "WFH is fully covered under POSH. Digital spaces matter.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next scenario...", options: [{ id: "m2_c3", label: "Continue", nextScene: "m2_q3" }] }
                ]
              },
              {
                id: "m2_d2_wrong",
                title: "Online Neglect",
                panels: [
                  { character: "Aarav", text: "Ignoring it encouraged them… it got worse.", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
                  { character: "Meera", text: "Digital spaces are still workplace interactions.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next scenario...", options: [{ id: "m2_c4", label: "Continue", nextScene: "m2_q3" }] }
                ]
              },
              {
                id: "m2_q3",
                title: "Decision 3",
                panels: [
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "A drunk colleague makes a sexual remark at the company offsite. Does POSH apply?",
                    options: [
                      { id: "m2_q3_a1", label: "No, it’s after hours.", nextScene: "m2_d3_wrong" },
                      { id: "m2_q3_a2", label: "Yes, it’s a company-sponsored event.", nextScene: "m2_d3_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m2_d3_correct",
                title: "Right Answer",
                panels: [
                  { character: "Meera", text: "Company events = legal workplace. Awareness is key.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Final scenario...", options: [{ id: "m2_c5", label: "Continue", nextScene: "m2_q4" }] }
                ]
              },
              {
                id: "m2_d3_wrong",
                title: "Costly Assumption",
                panels: [
                  { character: "Meera", text: "This attitude allows misconduct to go unchecked at events.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Final scenario...", options: [{ id: "m2_c6", label: "Continue", nextScene: "m2_q4" }] }
                ]
              },
              {
                id: "m2_q4",
                title: "Decision 4",
                panels: [
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "Riya receives inappropriate messages on WhatsApp from a vendor. Does POSH cover third parties?",
                    options: [
                      { id: "m2_q4_a1", label: "No, only employees count.", nextScene: "m2_d4_wrong" },
                      { id: "m2_q4_a2", label: "Yes, vendors & clients are included.", nextScene: "m2_d4_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m2_d4_correct",
                title: "Exactly",
                panels: [
                  { character: "Meera", text: "Harassment from ANY third party is covered. POSH covers all professional interactions.", side: "left" },
                  { character: "System", side: "center", text: "Module 2 Complete!", type: "text" }
                ]
              },
              {
                id: "m2_d4_wrong",
                title: "Risky Misconception",
                panels: [
                  { character: "Riya", text: "The vendor’s behavior escalated over time…", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya" },
                  { character: "Meera", text: "Vendors and clients are included. Don't let misconceptions put you at risk.", side: "left" },
                  { character: "System", side: "center", text: "Module 2 Complete!", type: "text" }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "posh-m3",
      title: "Module 3: What Constitutes Sexual Harassment?",
      summary: "Video-based explanation of the legal definition and examples.",
      order: 3,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Understanding Sexual Harassment",
          videoUrl: "/assets/placeholders/module3-video.mp4",
          instructions: "Watch this video to learn the legal definitions under the POSH Act."
        },
        {
          type: "check",
          question: "Which of the following is the PRIMARY factor in determining if an act constitutes sexual harassment under POSH?",
          options: [
            "The intent of the person doing the act",
            "The impact and perception of the person receiving the act",
            "The location where the act occurred"
          ],
          correctIndex: 1,
          explanation: "Under the POSH Act, impact overrides intent. If a behavior is unwelcome and has the effect of harassment, it counts regardless of the perpetrator's intentions."
        }
      ]
    },
    {
      id: "posh-m4",
      title: "Module 4: Quid Pro Quo & Hostile Work Environment",
      summary: "Understanding the two main forms of sexual harassment under the Act.",
      order: 4,
      duration: "25 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Quid Pro Quo vs Hostile Work Environment",
          videoUrl: "/assets/placeholders/module4-video.mp4",
          instructions: "Watch this video to understand how harassment manifests as explicit trade-offs or environmental toxicity."
        },
        {
          type: "check",
          question: "Which of the following is an example of 'Quid Pro Quo' harassment?",
          options: [
            "A manager offering a promotion in exchange for a sexual favor.",
            "A colleague making inappropriate jokes in the cafeteria.",
            "Excluding someone from a team lunch."
          ],
          correctIndex: 0,
          explanation: "Quid Pro Quo (this for that) happens when an employment benefit is conditioned on sexual favors."
        }
      ]
    },
    {
      id: "posh-m5",
      title: "Module 5: Prevention & Employee Duties",
      summary: "Your role in maintaining a safe and respectful workplace culture.",
      order: 5,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Employee Duties & Prevention Strategies",
          videoUrl: "/assets/placeholders/module5-video.mp4",
          instructions: "Learn about active bystander intervention and individual responsibilities under the POSH policy."
        },
        {
          type: "check",
          question: "What should an employee do if they witness harassment happening to a colleague?",
          options: [
            "Stay silent to avoid getting involved in 'drama'.",
            "Encourage the colleague to report and offer bystander support or report as a witness.",
            "Record it and share it on personal social media to expose the person."
          ],
          correctIndex: 1,
          explanation: "Active bystanders play a critical role in prevention. Supporting a colleague and following official reporting channels ensures a safe workplace culture."
        }
      ]
    },
    {
      id: "posh-m6",
      title: "Module 6: Internal Committee (IC)",
      summary: "A complaint is filed. The IC process unfolds—and your decisions shape the outcome.",
      order: 6,
      duration: "45 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "The Complaint",
            scenes: [
              {
                id: "startScene",
                title: "The Decision to Report",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "Meera… I’m ready. I want to file the complaint. I can’t keep pretending I’m okay.",
                    visualDescription: "Riya stands in Meera’s office holding a sealed envelope, visibly anxious but determined."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    text: "I’m proud of you, Riya. The Internal Committee will ensure a fair, confidential process.",
                    visualDescription: "Meera gently gestures for Riya to sit."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "What should Riya do before formally submitting the complaint?",
                    options: [
                      { id: "choice6A", label: "Submit immediately without reviewing evidence.", nextScene: "pathWrong1" },
                      { id: "choice6B", label: "Review her evidence and prepare a clear written statement.", nextScene: "pathRight1" }
                    ]
                  }
                ]
              },
              {
                id: "pathWrong1",
                title: "Rushed Submission",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "I’ll submit it as it is… I just want this over with.",
                    visualDescription: "Riya hands over the incomplete complaint."
                  },
                  {
                    character: "IC Member (Anita)",
                    side: "left",
                    text: "Riya, these details are vague. Without clear statements, we risk delays.",
                    visualDescription: "Anita reviews the file with concern."
                  },
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Consequences: Incomplete complaints slow the process and weaken the case.",
                    visualDescription: "Paperwork being returned for corrections."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Rerouting to the correct path...",
                    type: "choice",
                    options: [{ id: "c1", label: "Prepare Statement", nextScene: "pathRight1" }]
                  }
                ]
              },
              {
                id: "pathRight1",
                title: "Prepared Submission",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "I’ve organized all screenshots, messages, and the timeline.",
                    visualDescription: "Riya hands a folder to Meera."
                  },
                  {
                    character: "IC Chairperson",
                    side: "left",
                    text: "Riya, we acknowledge your complaint. Neutrality and confidentiality are our priority.",
                    visualDescription: "Formal meeting room."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "What should the IC do FIRST?",
                    options: [
                      { id: "choice6C", label: "Inform the respondent immediately with all evidence.", nextScene: "pathWrong2" },
                      { id: "choice6D", label: "Review internally and assess POSH criteria.", nextScene: "pathRight2" }
                    ]
                  }
                ]
              },
              {
                id: "pathWrong2",
                title: "Premature Disclosure",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Consequence: Premature disclosure can intimidate the complainant and compromise neutrality.",
                    visualDescription: "The screen darkens."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Returning to correct protocol…",
                    type: "choice",
                    options: [{ id: "c2", label: "Review Procedures", nextScene: "pathRight2" }]
                  }
                ]
              },
              {
                id: "pathRight2",
                title: "Proper IC Procedure",
                panels: [
                  {
                    character: "IC Chairperson",
                    side: "left",
                    text: "Our first job is to determine jurisdiction and ensure criteria are met.",
                    visualDescription: "Document review."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    text: "Meera, the IC reached out to me as a witness. What should I do?",
                    visualDescription: "Aarav stands nervously."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "How should Aarav respond?",
                    options: [
                      { id: "choice6E", label: "Refuse to speak because he fears office gossip.", nextScene: "pathWrong3" },
                      { id: "choice6F", label: "Provide honest, factual details about what he witnessed.", nextScene: "pathRight3" }
                    ]
                  }
                ]
              },
              {
                id: "pathWrong3",
                title: "Silence",
                panels: [
                  {
                    character: "Narrator",
                    side: "center",
                    text: "Consequence: Silence from witnesses weakens investigations.",
                    visualDescription: "Empty IC chair."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Returning to correct behavior...",
                    type: "choice",
                    options: [{ id: "c3", label: "Provide Statement", nextScene: "pathRight3" }]
                  }
                ]
              },
              {
                id: "pathRight3",
                title: "Honest Input",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    text: "I’ll tell the IC exactly what I saw. It’s the right thing to do.",
                    visualDescription: "Aarav enters the meeting room."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Riya feels supported by the structured process.",
                    visualDescription: "Meera and Riya look relieved."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "posh-m7",
      title: "Module 7: Duties of Management – Leadership’s Role",
      summary: "Leadership sets the tone. Decisions at the top define the workplace culture.",
      order: 7,
      duration: "30 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Leadership Steps In",
            scenes: [
              {
                id: "m7_start",
                title: "Leadership Steps In",
                panels: [
                  { character: "Mr. Kapoor", text: "I overheard inappropriate remarks in the cafeteria today.", side: "left", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor" },
                  { character: "Meera", text: "Small behaviors become big problems if ignored.", side: "left", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" },
                  { character: "Aarav", text: "So leadership has to respond instantly?", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "Kapoor hears an inappropriate joke. What should he do?",
                    options: [
                      { id: "m7_q1_a1", label: "Ignore it to keep the atmosphere light.", nextScene: "m7_d1_wrong" },
                      { id: "m7_q1_a2", label: "Address it respectfully and firmly.", nextScene: "m7_d1_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m7_d1_correct",
                title: "Positive Culture",
                panels: [
                  { character: "Riya", text: "Thank you, sir. That made everyone feel safer.", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m7_c1", label: "Continue", nextScene: "m7_rejoin1" }] }
                ]
              },
              {
                id: "m7_d1_wrong",
                title: "Culture Deteriorates",
                panels: [
                  { character: "Aarav", text: "People think jokes like that are allowed now…", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m7_c2", label: "Continue", nextScene: "m7_rejoin1" }] }
                ]
              },
              {
                id: "m7_rejoin1",
                title: "Back to Training",
                panels: [
                  { character: "Meera", text: "Leadership sets the tone for workplace culture.", side: "left" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "A junior employee confides in Kapoor privately about harassment fear. Should he…",
                    options: [
                      { id: "m7_q2_a1", label: "Tell them to ‘stay strong’ and handle it themselves.", nextScene: "m7_d2_wrong" },
                      { id: "m7_q2_a2", label: "Guide them to the IC and ensure safety protocols.", nextScene: "m7_d2_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m7_d2_correct",
                title: "Responsible Leadership",
                panels: [
                  { character: "Meera", text: "Leaders must support employees in distress.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m7_c3", label: "Continue", nextScene: "m7_rejoin2" }] }
                ]
              },
              {
                id: "m7_d2_wrong",
                title: "Victim Blaming",
                panels: [
                  { character: "Riya", text: "I felt invalidated when he didn’t take it seriously…", side: "right" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m7_c4", label: "Continue", nextScene: "m7_rejoin2" }] }
                ]
              },
              {
                id: "m7_rejoin2",
                title: "Awareness",
                panels: [
                  { character: "Mr. Kapoor", text: "Support builds trust.", side: "left" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "Kapoor learns the accused is a top performer. Should that matter?",
                    options: [
                      { id: "m7_q3_a1", label: "Yes, high performers should be given more leniency.", nextScene: "m7_d3_wrong" },
                      { id: "m7_q3_a2", label: "No. Rules apply equally regardless of position.", nextScene: "m7_d3_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m7_d3_correct",
                title: "Fairness Maintained",
                panels: [
                  { character: "Mr. Kapoor", text: "Performance never outweighs conduct.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m7_c5", label: "Continue", nextScene: "m7_rejoin3" }] }
                ]
              },
              {
                id: "m7_d3_wrong",
                title: "Bias Damages Trust",
                panels: [
                  { character: "Meera", text: "Employees stop trusting leadership when favoritism appears.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m7_c6", label: "Continue", nextScene: "m7_rejoin3" }] }
                ]
              },
              {
                id: "m7_rejoin3",
                title: "Fair Process",
                panels: [
                  { character: "Meera", text: "Bias destroys safety. Equality protects all.", side: "left" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "A department head wants to ‘handle things internally’ without involving IC. Kapoor should…",
                    options: [
                      { id: "m7_q4_a1", label: "Let them handle it quietly.", nextScene: "m7_d4_wrong" },
                      { id: "m7_q4_a2", label: "Insist IC be involved as mandated by POSH.", nextScene: "m7_d4_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m7_d4_correct",
                title: "Legal Compliance",
                panels: [
                  { character: "Mr. Kapoor", text: "IC involvement is mandatory. No exceptions.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Done", options: [{ id: "m7_c7", label: "Finish", nextScene: "m7_rejoin4" }] }
                ]
              },
              {
                id: "m7_d4_wrong",
                title: "Unsafe Shortcut",
                panels: [
                  { character: "Meera", text: "Internal settlements violate the law and risk retaliation.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Done", options: [{ id: "m7_c8", label: "Finish", nextScene: "m7_rejoin4" }] }
                ]
              },
              {
                id: "m7_rejoin4",
                title: "Moving Forward",
                panels: [
                  { character: "Mr. Kapoor", text: "IC is the only lawful pathway to resolution.", side: "left" },
                  { character: "System", text: "Module 7 Complete!", type: "text", side: "center" }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "posh-m8",
      title: "Module 8: Confidentiality & Non-Retaliation",
      summary: "Rumors begin circulating. Leadership must intervene to protect the process.",
      order: 8,
      duration: "25 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Whispers Begin",
            scenes: [
              {
                id: "m8_start",
                title: "Whispers Begin",
                panels: [
                  { character: "Aarav", text: "Meera, rumors are spreading about Riya’s complaint…", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
                  { character: "Meera", text: "That is a serious breach. Confidentiality is mandatory.", side: "left", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" },
                  { character: "Mr. Kapoor", text: "Anyone retaliating or gossiping will face action.", side: "left", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "A colleague asks Aarav: ‘What happened with Riya’s case?’ What should he do?",
                    options: [
                      { id: "m8_q1_a1", label: "Share the details quietly.", nextScene: "m8_d1_wrong" },
                      { id: "m8_q1_a2", label: "Say it’s confidential and cannot be discussed.", nextScene: "m8_d1_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m8_d1_correct",
                title: "Right Response",
                panels: [
                  { character: "Meera", text: "Confidentiality protects everyone and ensures fairness.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m8_c1", label: "Continue", nextScene: "m8_rejoin1" }] }
                ]
              },
              {
                id: "m8_d1_wrong",
                title: "Harmful Gossip",
                panels: [
                  { character: "Riya", text: "People are whispering everywhere… I feel exposed.", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m8_c2", label: "Continue", nextScene: "m8_rejoin1" }] }
                ]
              },
              {
                id: "m8_rejoin1",
                title: "Back to Module",
                panels: [
                  { character: "Meera", text: "Confidentiality is non-negotiable.", side: "left" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "A manager subtly reduces Riya’s responsibilities after the complaint. Is this allowed?",
                    options: [
                      { id: "m8_q2_a1", label: "Yes, to ‘avoid drama’.", nextScene: "m8_d2_wrong" },
                      { id: "m8_q2_a2", label: "No. This is retaliation and illegal.", nextScene: "m8_d2_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m8_d2_correct",
                title: "Protection",
                panels: [
                  { character: "Meera", text: "Retaliation is illegal. HR will intervene immediately.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m8_c3", label: "Continue", nextScene: "m8_rejoin2" }] }
                ]
              },
              {
                id: "m8_d2_wrong",
                title: "Unlawful Behavior",
                panels: [
                  { character: "Mr. Kapoor", text: "This violates POSH and damages trust.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m8_c4", label: "Continue", nextScene: "m8_rejoin2" }] }
                ]
              },
              {
                id: "m8_rejoin2",
                title: "Returning",
                panels: [
                  { character: "Mr. Kapoor", text: "Retaliation will never be tolerated.", side: "left" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "A coworker posts a vague status online about ‘people ruining teams with drama’. What should Meera do?",
                    options: [
                      { id: "m8_q3_a1", label: "Ignore it since no names were mentioned.", nextScene: "m8_d3_wrong" },
                      { id: "m8_q3_a2", label: "Investigate it as indirect retaliation.", nextScene: "m8_d3_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m8_d3_correct",
                title: "Good Compliance",
                panels: [
                  { character: "Meera", text: "Indirect retaliation is still retaliation.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m8_c5", label: "Continue", nextScene: "m8_rejoin3" }] }
                ]
              },
              {
                id: "m8_d3_wrong",
                title: "Culture Erodes",
                panels: [
                  { character: "Aarav", text: "People feel unsafe reporting now.", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
                  { character: "System", type: "choice", side: "center", text: "Next...", options: [{ id: "m8_c6", label: "Continue", nextScene: "m8_rejoin3" }] }
                ]
              },
              {
                id: "m8_rejoin3",
                title: "Awareness Restored",
                panels: [
                  { character: "Meera", text: "Online behavior still impacts workplace safety.", side: "left" },
                  {
                    character: "System",
                    type: "choice",
                    side: "center",
                    text: "The accused asks Riya for a private meeting ‘to sort things out.’ What should she do?",
                    options: [
                      { id: "m8_q4_a1", label: "Agree for closure.", nextScene: "m8_d4_wrong" },
                      { id: "m8_q4_a2", label: "Decline and inform IC immediately.", nextScene: "m8_d4_correct" }
                    ]
                  }
                ]
              },
              {
                id: "m8_d4_correct",
                title: "Safe Move",
                panels: [
                  { character: "Meera", text: "Unauthorized contact must be reported immediately.", side: "left" },
                  { character: "System", type: "choice", side: "center", text: "Done", options: [{ id: "m8_c7", label: "Finish", nextScene: "m8_rejoin4" }] }
                ]
              },
              {
                id: "m8_d4_wrong",
                title: "Risky Situation",
                panels: [
                  { character: "Riya", text: "He tried convincing me to withdraw… I feel cornered.", side: "right", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya" },
                  { character: "System", type: "choice", side: "center", text: "Done", options: [{ id: "m8_c8", label: "Finish", nextScene: "m8_rejoin4" }] }
                ]
              },
              {
                id: "m8_rejoin4",
                title: "Safe Process",
                panels: [
                  { character: "Meera", text: "Confidentiality and protection are pillars of POSH.", side: "left" },
                  { character: "System", text: "Module 8 Complete!", type: "text", side: "center" }
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
      "id": "q1",
      "text": "Under the POSH Act, which of the following BEST captures the principle that overrides 'intent' in determining sexual harassment?",
      "options": [
        "Mens rea doctrine",
        "Impact-based assessment",
        "Assumption of implied consent",
        "Power-neutral interpretation"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q2",
      "text": "Which of the following situations qualifies as sexual harassment even if the complainant did NOT explicitly reject the behaviour?",
      "options": [
        "The complainant laughed nervously during inappropriate comments",
        "The complainant responded positively once",
        "The complainant ignored all the messages",
        "The complainant explicitly consented verbally"
      ],
      "correctAnswer": 0
    },
    {
      "id": "q3",
      "text": "Which of the following **must** be part of the Internal Committee's structure as per POSH?",
      "options": [
        "One legal advisor from the company's law firm",
        "Two members nominated by a union leader",
        "At least one external member with experience in women’s issues",
        "One senior male employee for gender balance"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q4",
      "text": "Which of these falls under the employer’s NON-DELEGABLE responsibility under POSH?",
      "options": [
        "Ensuring the accused has immediate access to legal counsel",
        "Creating a culture free from hostile behavior",
        "Ensuring the accused is informed before the complaint is filed",
        "Guaranteeing the complainant receives financial compensation"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q5",
      "text": "A senior employee sends a junior employee memes with double meanings during a client trip. The junior laughs to avoid awkwardness. Which legal principle applies?",
      "options": [
        "Professional immunity during travel",
        "Implied consent due to laughter",
        "Power imbalance nullifies assumed consent",
        "POSH doesn’t cover offsite interactions"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q6",
      "text": "Which of the following constitutes **sexual harassment** even if done without direct communication?",
      "options": [
        "Staring persistently in a sexually suggestive manner",
        "Forwarding project files late night",
        "Sitting next to a colleague in the cafeteria",
        "Typing in caps during a meeting"
      ],
      "correctAnswer": 0
    },
    {
      "id": "q7",
      "text": "During an inquiry, an IC member casually mentions the complainant’s name to another colleague. Which principle is violated?",
      "options": [
        "Procedural hierarchy",
        "Confidentiality under Section 16",
        "Vicarious liability",
        "Conflict escalation protocol"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q8",
      "text": "Which of the following is TRUE about retaliation under POSH?",
      "options": [
        "Retaliation is only verbal",
        "Retaliation can occur even after the case closes",
        "Retaliation applies only to the complainant",
        "Retaliation must be intentional to be actionable"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q9",
      "text": "A complainant withdraws the complaint due to emotional fatigue. What must the IC do?",
      "options": [
        "Close the case immediately",
        "Continue the inquiry if the IC believes the case merits examination",
        "Hand over the case to police automatically",
        "Persuade the complainant to continue"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q10",
      "text": "Which of the following CANNOT be treated as evidence under POSH?",
      "options": [
        "Metadata of deleted messages",
        "Screenshots without timestamps",
        "Corroborating witness testimony",
        "Anonymous rumours without any specifics"
      ],
      "correctAnswer": 3
    },
    {
      "id": "q11",
      "text": "What is the maximum time allowed for the IC to complete an inquiry?",
      "options": [
        "60 days",
        "90 days",
        "120 days",
        "30 days"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q12",
      "text": "Which of the following counts as creating a 'hostile work environment'?",
      "options": [
        "Teasing a colleague for their handwriting",
        "Repeated sexual jokes during team outings",
        "Discussing political views loudly",
        "Rejecting gossip invitations"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q13",
      "text": "The IC receives a complaint with insufficient detail. What is the appropriate action?",
      "options": [
        "Reject the complaint immediately",
        "Request additional information without invalidating the complaint",
        "Ask the HR head for instructions",
        "Wait for the accused to respond first"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q14",
      "text": "A male contractor harasses a female employee at a client site. Who is responsible under POSH?",
      "options": [
        "Only the contractor’s employer",
        "Only the client company",
        "The employee’s employer, for ensuring safe work environments even offsite",
        "No one, because the incident occurred externally"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q15",
      "text": "The accused claims the behaviour was “meant as a joke.” How should the IC proceed?",
      "options": [
        "Dismiss the complaint immediately",
        "Evaluate based on the complainant’s perception and impact",
        "Ask both parties to compromise",
        "Warn the complainant for overreacting"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q16",
      "text": "CASE STUDY A: Riya receives late-night messages from her senior saying, “You looked stunning today” and “Wish we had more private time.” She ignores them. The next week, he reduces her project responsibilities. Which concept applies MOST strongly?",
      "options": [
        "Victim's fault for not responding",
        "Retaliation linked to rejected advances",
        "Performance-based restructuring",
        "Time-management delegation"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q17",
      "text": "Based on CASE STUDY A, what is the strongest evidence the IC should examine?",
      "options": [
        "Whether the senior previously praised other employees",
        "Digital timestamps of messages and project reassignment timing",
        "The senior’s popularity in the company",
        "Riya’s past performance in unrelated quarters"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q18",
      "text": "Based on CASE STUDY A, which principle applies even if there were no witnesses?",
      "options": [
        "Testimony is invalid without witnesses",
        "Circumstantial evidence holds no weight",
        "Pattern analysis and digital trail evaluation",
        "Hierarchy-based dismissal of complaints"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q19",
      "text": "CASE STUDY B: A team is on a company-sponsored retreat. A male coworker makes repeated 'jokes' about a female coworker sharing a room with him. Others laugh. She feels uncomfortable but stays silent. Which POSH principle applies?",
      "options": [
        "Humour negates harassment",
        "Consent is assumed in group settings",
        "Silence ≠ consent; sexually coloured remarks = harassment",
        "Retreats are exempt from POSH"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q20",
      "text": "Based on CASE STUDY B, who is responsible for preventing escalation?",
      "options": [
        "Only the complainant",
        "Only HR",
        "Leadership and every employee present",
        "Only resort management"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q21",
      "text": "Based on CASE STUDY B, what additional risk factor increases harassment severity?",
      "options": [
        "The resort location",
        "Group normalisation of inappropriate behaviour",
        "Lack of mobile network",
        "Availability of snacks"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q22",
      "text": "CASE STUDY C: Aarav accidentally deletes a chat containing relevant evidence. He informs Meera immediately. What should the IC do?",
      "options": [
        "Penalize Aarav for destruction of evidence",
        "Examine backups, metadata, and timelines before concluding",
        "Dismiss the entire case",
        "Automatically favour the complainant"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q23",
      "text": "Based on CASE STUDY C, what principle applies to accidental deletion?",
      "options": [
        "Intent matters; accidental deletion ≠ tampering",
        "Accidental deletion is equivalent to deliberate destruction",
        "IC must reverse the burden of proof",
        "Complainant must file a fresh case"
      ],
      "correctAnswer": 0
    },
    {
      "id": "q24",
      "text": "CASE STUDY D: A woman files a complaint. During inquiry, the respondent’s friends stop inviting her to team meetings and exclude her from email threads. What principle is violated?",
      "options": [
        "Management neutrality",
        "Non-retaliation requirement",
        "Procedural fairness",
        "Digital governance rules"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q25",
      "text": "Based on CASE STUDY D, who must intervene immediately?",
      "options": [
        "Only the IC after the inquiry",
        "The complainant's closest colleague",
        "Management + IC jointly",
        "The respondent himself"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q26",
      "text": "Which behaviour constitutes third-party harassment?",
      "options": [
        "A vendor repeatedly asking a female employee to meet privately",
        "A colleague asking for help on a project",
        "An HR manager giving feedback",
        "A team lead assigning tasks"
      ],
      "correctAnswer": 0
    },
    {
      "id": "q27",
      "text": "What is the IC’s role if both parties give contradictory statements?",
      "options": [
        "Dismiss the case as 'he said, she said'",
        "Evaluate consistency, evidence, timelines, and circumstantial indicators",
        "Automatically favour seniority",
        "Ask both to resolve it informally"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q28",
      "text": "Which of the following qualifies as 'unwelcome' behaviour?",
      "options": [
        "Behaviour the complainant explicitly states is offensive",
        "Behaviour society considers universally offensive",
        "Behaviour perceived as unwanted by the complainant regardless of societal norms",
        "Behaviour that the accused intended as polite"
      ],
      "correctAnswer": 2
    },
    {
      "id": "q29",
      "text": "Which action violates Section 16 of the POSH Act?",
      "options": [
        "IC discussing procedural deadlines internally",
        "HR sharing case facts with managers not involved in the inquiry",
        "IC requesting evidence from complainant",
        "Complainant discussing emotional stress with a counsellor"
      ],
      "correctAnswer": 1
    },
    {
      "id": "q30",
      "text": "Which of the following is a mandatory outcome after the IC concludes an inquiry?",
      "options": [
        "Make the findings public for transparency",
        "Submit a written report to the employer with recommendations",
        "File an FIR for every confirmed case",
        "Terminate the respondent immediately"
      ],
      "correctAnswer": 1
    }
  ]
};

export default poshPreventionOfSexualHarassment;