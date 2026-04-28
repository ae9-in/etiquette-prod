import { Course } from '../../types';

const employeeCodeOfConduct: Course = {
  id: 'employee-conduct-2024',
  title: 'Employee Code of Conduct',
  description: 'A comprehensive guide to ethics, behavior, and professional standards in the Indian workplace.',
  category: 'Corporate Ethics',
  duration: '150 mins',
  icon: '🤝',
  colorTheme: 'emerald',
  modules: [
    {
      id: 'ec-m1',
      title: 'Module 1: Workplace Respect & Behavior',
      summary: 'Fostering a culture of dignity, professionalism, and integrity across all interactions.',
      order: 1,
      duration: '30 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Respect & Dignity at Work',
          videoUrl: '/assets/placeholders/ec-m1-video.mp4',
          instructions: 'Watch this session to understand the foundation of our behavioral standards.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Foundations of Respect',
            scenes: [
              {
                id: 'intro_respect',
                title: 'Professional Conduct Standards',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Welcome to Module 1: Workplace Respect & Behavior. Everything begins with how we treat each other.",
                    side: 'left',
                    visualDescription: "Director’s Note: Training room with a slide titled 'Module 1 — Respect & Behavior'."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Respect is not an HR requirement—it is the base layer of organizational culture.",
                    side: 'left',
                    visualDescription: "Director’s Note: Close-up of Meera emphasizing the foundation theme."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "So it’s more than just being polite?",
                    side: 'right',
                    visualDescription: "Director’s Note: Aarav leans forward curiously."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Absolutely. Respect is consistency in dignity, safety, communication, and fairness.",
                    side: 'left',
                    visualDescription: "Director’s Note: Meera gestures to a slide listing: Dignity • Communication • Safety • Fairness."
                  }
                ]
              },
              {
                id: 'daily_behavior',
                title: 'Everyday Professionalism',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "What does professional behavior look like on a daily basis?",
                    side: 'right',
                    visualDescription: "Director’s Note: Riya sits with a notebook."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "It means being mindful of tone, body language, words, and consistency—even on stressful days.",
                    side: 'left',
                    visualDescription: "Director’s Note: Meera speaks calmly with neutral posture."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "What about disagreements? That’s where things usually escalate.",
                    side: 'right',
                    visualDescription: "Director’s Note: Aarav raises an eyebrow thoughtfully."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "During disagreements, stay objective. Attack the problem—not the person.",
                    side: 'left',
                    visualDescription: "Director’s Note: Slide behind Meera reads: 'Professional Disagreement = Issue, Not Identity'."
                  }
                ]
              },
              {
                id: 'feedback_comparison',
                title: 'Feedback: Respectful vs Harmful',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Let’s look at examples of respectful and harmful feedback.",
                    side: 'left',
                    visualDescription: "Director’s Note: Split screen—green and red columns."
                  },
                  {
                    character: 'Meera',
                    text: "Correct: 'The report needs more details in section 3. Let’s refine it together.'",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Director’s Note: Calm collaborative scene."
                  },
                  {
                    character: 'Meera',
                    text: "Incorrect: 'You never do anything right.'",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Director’s Note: Harsh red X appears."
                  },
                  {
                    character: 'Riya',
                    text: "So it’s about clarity without belittling.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    visualDescription: "Director’s Note: Close-up of Riya nodding."
                  }
                ]
              },
              {
                id: 'misconduct_examples',
                title: 'What Misconduct Looks Like',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Misconduct isn’t always dramatic. It can be subtle patterns too.",
                    side: 'left',
                    visualDescription: "Director’s Note: Kapoor addresses the team with seriousness."
                  },
                  {
                    character: 'Meera',
                    text: "Bullying, humiliation, exclusion, and misuse of authority are all violations of our Code.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Director’s Note: Icons of prohibited behaviors appear."
                  },
                  {
                    character: 'Aarav',
                    text: "Exclusion counts as misconduct?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    visualDescription: "Director’s Note: Aarav looks surprised."
                  },
                  {
                    character: 'Meera',
                    text: "Yes. Exclusion harms collaboration and trust. Respect means inclusion.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Director’s Note: Meera gestures to a slide reading 'Inclusion = Respect'."
                  }
                ]
              },
              {
                id: 'decision_point',
                title: 'Decision Point: Handling Tension',
                panels: [
                  {
                    character: 'Meera',
                    text: "Let’s test your decision-making. Aarav made an honest mistake in a client report.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Director’s Note: Meera stands beside a projected scenario slide."
                  },
                  {
                    character: 'Riya',
                    text: "You notice it and must respond. What would you do?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    visualDescription: "Director’s Note: Riya presents the options."
                  },
                  {
                    character: 'System',
                    text: "Scenario: An honest mistake is found. Choose your action:",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_a', label: 'A — Call Aarav out loudly in front of the team.', nextScene: 'wrong_choice_a' },
                      { id: 'opt_b', label: 'B — Walk to him privately and help fix it.', nextScene: 'correct_choice_b' },
                      { id: 'opt_c', label: 'C — Ignore the error and hope no one notices.', nextScene: 'wrong_choice_c' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_choice_a',
                title: 'Consequence: Public Criticism',
                panels: [
                  {
                    character: 'Meera',
                    text: "Public shaming is disrespectful and destroys trust.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Aarav',
                    text: "I felt humiliated, even though it was an honest mistake…",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'System',
                    text: 'That approach damaged the team culture. Let\'s try again.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_a', label: 'Rewind and Try Again', nextScene: 'decision_point' }]
                  }
                ]
              },
              {
                id: 'wrong_choice_c',
                title: 'Consequence: Ignoring the Issue',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Ignoring mistakes leads to bigger problems later. We value accountability.",
                    side: 'left'
                  },
                  {
                    character: 'Meera',
                    text: "Avoiding responsibility is not respectful behavior. It puts the company at risk.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Accountability is key to respect. Let\'s try another path.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_c', label: 'Rewind and Try Again', nextScene: 'decision_point' }]
                  }
                ]
              },
              {
                id: 'correct_choice_b',
                title: 'Correct Choice: Private & Constructive',
                panels: [
                  {
                    character: 'Riya',
                    text: "Taking him aside privately was the right move.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Aarav',
                    text: "I appreciated the support instead of criticism. I'll be more careful next time.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "Respect is shown best through empathy, understanding, and constructive feedback.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Well done! You maintained dignity while ensuring quality.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'proceed_final', label: 'Continue Lesson', nextScene: 'reporting' }]
                  }
                ]
              },
              {
                id: 'reporting',
                title: 'Reporting Wrong Behavior',
                panels: [
                  {
                    character: 'Meera',
                    text: "If you observe misconduct—speak up early. Silence enables harm.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Riya',
                    text: "Reports are confidential, right?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Meera',
                    text: "Yes. You can approach HR, your manager, or use official reporting channels.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Meera',
                    text: "Respect is not optional—it defines our culture and our professionalism.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which of the following is considered respectful behavior when providing feedback?",
          options: [
            "Criticizing the person's intelligence",
            "Addressing the specific issue privately and constructively",
            "Ignoring the mistake to avoid awkwardness"
          ],
          correctIndex: 1,
          explanation: "Respectful feedback focuses on the issue, not the individual, and is delivered in a way that encourages improvement without humiliation."
        }
      ]
    },
    {
      id: 'ec-m2',
      title: 'Module 2: Attendance & Punctuality',
      summary: 'Guidelines for maintaining reliability, accountability, and professional discipline through consistent attendance.',
      order: 2,
      duration: '35 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Timing & Professional Discipline',
          videoUrl: '/assets/placeholders/ec-m2-video.mp4',
          instructions: 'Watch this session to understand our attendance policy and professional expectations.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Timing & Reliability',
            scenes: [
              {
                id: 'm2_start',
                title: 'The Foundation of Workflow',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Welcome to Module 2: Attendance & Punctuality. Let's understand why timing matters beyond clocking in.",
                    side: 'left',
                    visualDescription: "Director’s Note: Office lobby scene with a digital clock showing 9:00 AM sharp."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Punctuality is not about rules—it's about reliability. Teams depend on each other to begin the day smoothly.",
                    side: 'left',
                    visualDescription: "Director’s Note: Visual timeline showing tasks dependent on morning syncs."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "So arriving late affects more than just my own schedule?",
                    side: 'right',
                    visualDescription: "Director’s Note: Aarav looks up thoughtfully."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Yes. When one link delays, the entire chain slows down.",
                    side: 'left',
                    visualDescription: "Director’s Note: Animation of gears slowing due to one stuck gear."
                  }
                ]
              },
              {
                id: 'm2_recording',
                title: 'Recording Hours Properly',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Attendance rules sometimes confuse people. What exactly counts as proper compliance?",
                    side: 'right',
                    visualDescription: "Director’s Note: Riya reviews her attendance dashboard."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "You must record attendance through official systems—biometric, portal, or app—depending on company policy.",
                    side: 'left'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Never ask someone to 'punch in' for you. Proxy attendance is serious misconduct.",
                    side: 'left',
                    visualDescription: "Director’s Note: Red X overlay on a panel showing two employees whispering at a scanner."
                  },
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Proxy attendance violates trust and can trigger disciplinary action—up to termination.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm2_delays',
                title: 'When Delays Happen',
                panels: [
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "What should someone do if they're stuck in traffic or the train is delayed?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Communicate proactively—and early. A message before your shift starts helps the team plan.",
                    side: 'left',
                    visualDescription: "Director’s Note: Example message on screen: 'Stuck in traffic, ETA 9:35. Will make up the time.'"
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "What if someone consistently informs but keeps being late?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Consistency matters. Repeated tardiness—despite communication—still affects workflow.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm2_leave',
                title: 'Planned & Unplanned Leave',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Sometimes personal emergencies come up. How should employees handle unexpected leave?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Notify your manager immediately. Sudden absence without communication disrupts team planning heavily.",
                    side: 'left'
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "And for planned leave?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Apply through the official portal well in advance. Last-minute requests should be avoided unless unavoidable.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm2_decision_late',
                title: 'Decision Point: You’re Running Late',
                panels: [
                  {
                    character: 'System',
                    text: "Scenario: You realize you will reach 30 minutes late. What do you do?",
                    side: 'center',
                    type: 'choice',
                    visualDescription: "Director’s Note: Clock ticking overlay.",
                    options: [
                      { id: 'm2_opt_a', label: 'A — Say nothing and join quietly when you arrive.', nextScene: 'm2_wrong_choice_a' },
                      { id: 'm2_opt_b', label: 'B — Text your manager immediately with an ETA.', nextScene: 'm2_correct_choice_b' },
                      { id: 'm2_opt_c', label: 'C — Ask a teammate to punch you in.', nextScene: 'm2_wrong_choice_c' }
                    ]
                  }
                ]
              },
              {
                id: 'm2_wrong_choice_a',
                title: 'Consequence: Silent Late Arrival',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Arriving silently disrupts planning. Your team spent 30 minutes waiting for context.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Professional discipline requires transparency. Let\'s try again.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm2_rewind_a', label: 'Rewind and Choose Again', nextScene: 'm2_decision_late' }]
                  }
                ]
              },
              {
                id: 'm2_wrong_choice_c',
                title: 'Consequence: Proxy Marking',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Proxy attendance is serious misconduct. Never involve others in rule violations.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Honesty is a core pillar of our Code. Choose a better path.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm2_rewind_c', label: 'Rewind and Choose Again', nextScene: 'm2_decision_late' }]
                  }
                ]
              },
              {
                id: 'm2_correct_choice_b',
                title: 'Correct Choice: Transparent Communication',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Informing your manager helps the team adjust instantly.",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Transparency builds trust. This is the right professional approach.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Great decision! Reliability is built on honesty.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm2_proceed', label: 'Continue Lesson', nextScene: 'm2_early_exit' }]
                  }
                ]
              },
              {
                id: 'm2_early_exit',
                title: 'Leaving Early the Right Way',
                panels: [
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "What if someone has a doctor appointment at 4 PM?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Request early exit approval in advance. Transparency avoids confusion.",
                    side: 'left',
                    visualDescription: "Director’s Note: Screenshot of early exit request form."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "What if the manager is unavailable?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Escalate through official channels—don’t just leave quietly.",
                    side: 'left'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Punctuality shows respect—for your time, for others, and for the organization.",
                    side: 'left'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which of the following is considered serious misconduct regarding attendance?",
          options: [
            "Informing the manager about a 10-minute traffic delay",
            "Asking a teammate to record attendance on your behalf (proxy marking)",
            "Applying for a planned leave 2 weeks in advance"
          ],
          correctIndex: 1,
          explanation: "Proxy attendance is a violation of trust and organizational integrity, often categorized as serious misconduct."
        }
      ]
    },
    {
      id: 'ec-m3',
      title: 'Module 3: Health, Safety & Fire Safety',
      summary: 'Understanding safety protocols, hazard identification, emergency response, and everyday workplace safety behavior.',
      order: 3,
      duration: '30 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Safety Fundamentals',
          videoUrl: '/assets/placeholders/ec-m3-video.mp4',
          instructions: 'Watch this safety orientation to understand emergency protocols and everyday wellness.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Workplace Safety Protocols',
            scenes: [
              {
                id: 'm3_intro',
                title: 'Awareness & Responsibility',
                panels: [
                  {
                    character: 'Meera',
                    text: "Welcome to Module 3: Health, Safety & Fire Safety. Safety is not a department’s job—it is everyone’s daily duty.",
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    side: 'left',
                    visualDescription: "Director's Note: Training room with safety posters and emergency signs."
                  },
                  {
                    character: 'Riya',
                    text: "So safety includes more than just fire drills?",
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    side: 'right',
                    visualDescription: "Director's Note: Riya sitting with a notepad."
                  },
                  {
                    character: 'Meera',
                    text: "Absolutely. It includes ergonomic posture, avoiding hazards, knowing exits, proper reporting, and emergency readiness.",
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm3_hazards',
                title: 'Spotting Risks Early',
                panels: [
                  {
                    character: 'Aarav',
                    text: "What counts as a workplace hazard?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "Anything that can cause harm—wet floors, loose wires, blocked exits, damaged equipment, or unsafe behavior.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Director’s Note: Panels show a puddle, frayed wire, and a box blocking a fire exit."
                  },
                  {
                    character: 'Mr. Kapoor',
                    text: "Never ignore a small issue—today’s inconvenience becomes tomorrow’s accident.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor'
                  }
                ]
              },
              {
                id: 'm3_reporting',
                title: 'Speak Up Immediately',
                panels: [
                  {
                    character: 'Riya',
                    text: "If I see exposed wiring but I'm in a hurry, is it okay to report it later?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Meera',
                    text: "No. Reporting must be immediate. A few minutes can make a huge difference in preventing accidents.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Aarav',
                    text: "Who do we report hazards to?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "Facilities, Admin, or designated Safety Officers. Use the official reporting system if available.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  }
                ]
              },
              {
                id: 'm3_fire_basics',
                title: 'Fire Awareness',
                panels: [
                  {
                    character: 'Meera',
                    text: "In emergencies, decisions must be quick, calm, and correct. Let’s start with fire basics.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Aarav',
                    text: "If an alarm rings, should I finish saving my work first?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "No. Stop immediately and evacuate. Human life > work completion.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Riya',
                    text: "What about elevators?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Meera',
                    text: "Never use elevators during fire evacuation. Use only designated stairwells.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  }
                ]
              },
              {
                id: 'm3_decision',
                title: 'Decision Point: Fire Alarm Rings',
                panels: [
                  {
                    character: 'System',
                    text: "Scenario: The fire alarm goes off. What do you do first?",
                    side: 'center',
                    type: 'choice',
                    visualDescription: "Director’s Note: Flashing red alarm lights in the background.",
                    options: [
                      { id: 'm3_opt_a', label: 'A — Grab your laptop and bag before leaving.', nextScene: 'm3_wrong_a' },
                      { id: 'm3_opt_b', label: 'B — Evacuate immediately and follow marked routes.', nextScene: 'm3_correct_b' },
                      { id: 'm3_opt_c', label: 'C — Check if the alarm might be a drill and wait a minute.', nextScene: 'm3_wrong_c' }
                    ]
                  }
                ]
              },
              {
                id: 'm3_wrong_a',
                title: 'Consequence: Delayed Evacuation',
                panels: [
                  {
                    character: 'Meera',
                    text: "Stopping to pack belongings wastes precious time. During emergencies every second counts.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Delayed evacuation is high risk. Let\'s try again.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm3_r1', label: 'Rewind and Choose Correctly', nextScene: 'm3_decision' }]
                  }
                ]
              },
              {
                id: 'm3_wrong_c',
                title: 'Consequence: Dangerous Assumption',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Assuming an alarm is 'just a drill' is extremely risky. All alarms must be treated as real.",
                    side: 'left'
                  },
                  {
                    character: 'Meera',
                    text: "Avoiding responsibility is not respectful behavior. It puts the company at risk.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Assumptions create danger. Rerouting...',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm3_r2', label: 'Rewind and Choose Again', nextScene: 'm3_decision' }]
                  }
                ]
              },
              {
                id: 'm3_correct_b',
                title: 'Correct Choice: Evacuate Immediately',
                panels: [
                  {
                    character: 'Riya',
                    text: "Following routes and staying calm makes evacuation smooth and safe.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Meera',
                    text: "Excellent decision. Safety begins with immediate action.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Path verified. Proceeding to post-evacuation protocol.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_c1', label: 'Next: Post-Evacuation', nextScene: 'm3_post_evac' }]
                  }
                ]
              },
              {
                id: 'm3_post_evac',
                title: 'Post-Evacuation Protocols',
                panels: [
                  {
                    character: 'Aarav',
                    text: "After reaching the assembly point, can we leave if everything seems normal?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "No. Stay until authorities or safety officers give an all-clear. Early re-entry is dangerous.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Mr. Kapoor',
                    text: "Roll call ensures everyone is accounted for. Skipping it creates panic and confusion.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor'
                  }
                ]
              },
              {
                id: 'm3_summary',
                title: 'Module Summary',
                panels: [
                  {
                    character: 'Meera',
                    text: "Safety is proactive—identify risks early, report quickly, and respond calmly.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Riya',
                    text: "Evacuate immediately during alarms. No assumptions, no delays.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Aarav',
                    text: "And always follow drills; they prepare us for real emergencies.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'ec-m4',
      title: 'Module 4: What Is NOT Acceptable at Work',
      summary: 'Understanding inappropriate behavior, boundaries, respectful interactions, and consequences of violations.',
      order: 4,
      duration: '30 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Professional Boundaries',
          videoUrl: '/assets/placeholders/ec-m4-video.mp4',
          instructions: 'Watch this session to understand behavioral boundaries and non-negotiables.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Crossing the Line',
            scenes: [
              {
                id: 'm4_s1',
                title: 'The Inappropriate Meme',
                panels: [
                  {
                    character: 'Aarav',
                    text: "Who just sent *that* in the team group!? That’s… not funny at all.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    visualDescription: "Aarav staring at his phone, eyebrows raised in concern."
                  },
                  {
                    character: 'Riya',
                    text: "I felt really uncomfortable. Why do people think inappropriate jokes are harmless?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    visualDescription: "Riya shows her phone to Meera."
                  },
                  {
                    character: 'Meera',
                    text: "A workplace isn’t a place for offensive humor. Intent doesn’t erase impact.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  }
                ]
              },
              {
                id: 'm4_s2',
                title: 'The Boundaries',
                panels: [
                  {
                    character: 'Meera',
                    text: "Let’s be clear—certain behaviors are never acceptable at work.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    visualDescription: "Icons pop up: inappropriate jokes, comments, touching, staring."
                  },
                  {
                    character: 'Riya',
                    text: "Even things like ‘compliments’ can feel wrong if they cross boundaries.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Aarav',
                    text: "So basically anything that objectifies, discomforts, or singles someone out?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "Yes — and also sexual comments, personal remarks, romantic pressure, unwelcome messaging, and inappropriate body language.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  }
                ]
              },
              {
                id: 'm4_decision_1',
                title: 'Decision Point: A Boundaries Test',
                panels: [
                  {
                    character: 'System',
                    text: "Scenario: Aarav notices a colleague wearing a new outfit. What should he do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'm4_1_a', label: 'A — Say: “You look hot today!”', nextScene: 'm4_wrong_1a' },
                      { id: 'm4_1_b', label: 'B — Say: “Nice outfit, very professional!”', nextScene: 'm4_correct_1b' },
                      { id: 'm4_1_c', label: 'C — Say nothing, but keep staring at them.', nextScene: 'm4_wrong_1c' }
                    ]
                  }
                ]
              },
              {
                id: 'm4_wrong_1a',
                title: 'Consequence: Overstepping Boundaries',
                panels: [
                  {
                    character: 'Riya',
                    text: "That would make anyone uncomfortable. It’s inappropriate and sexualized.",
                    side: 'right',
                    emotion: 'shocked',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'System',
                    text: 'This crosses the line of professional conduct. Let\'s try again.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm4_rewind_1a', label: 'Rewind and Try Again', nextScene: 'm4_decision_1' }]
                  }
                ]
              },
              {
                id: 'm4_wrong_1c',
                title: 'Consequence: Silent Discomfort',
                panels: [
                  {
                    character: 'Meera',
                    text: "Staring is intrusive and creates discomfort. Respect includes appropriate body language.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Staring is never acceptable workplace behavior. Rerouting...',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm4_rewind_1c', label: 'Rewind and Choose Again', nextScene: 'm4_decision_1' }]
                  }
                ]
              },
              {
                id: 'm4_correct_1b',
                title: 'Correct Choice: Professional Compliments',
                panels: [
                  {
                    character: 'Aarav',
                    text: "So the key is keeping comments professional, neutral, and non-personal.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "Exactly. Appreciation should never cross into personal or intimate territory.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Professional boundary maintained. Proceed to next scenario.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm4_p1', label: 'Continue to Digital Boundaries', nextScene: 'm4_s4' }]
                  }
                ]
              },
              {
                id: 'm4_s4',
                title: 'Online Boundaries Matter Too',
                panels: [
                  {
                    character: 'Riya',
                    text: "Sometimes people behave differently online… like sending inappropriate memes.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Meera',
                    text: "Digital spaces are workplace environments too. Unwelcome DMs, late-night messages, sexual content—completely unacceptable.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  }
                ]
              },
              {
                id: 'm4_decision_2',
                title: 'Decision Point: Late-Night Text',
                panels: [
                  {
                    character: 'System',
                    text: "Scenario: A colleague messages you at 11:45 PM saying: “Hey… you awake? Want to talk?” How do you respond?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'm4_2_a', label: 'A — Reply casually: “Sure :) What’s up?”', nextScene: 'm4_wrong_2a' },
                      { id: 'm4_2_b', label: 'B — Do not reply; report if pattern continues.', nextScene: 'm4_correct_2b' },
                      { id: 'm4_2_c', label: 'C — Send a laughing emoji and continue the chat.', nextScene: 'm4_wrong_2c' }
                    ]
                  }
                ]
              },
              {
                id: 'm4_wrong_2a',
                title: 'Consequence: Blurred Boundaries',
                panels: [
                  {
                    character: 'Meera',
                    text: "Engaging encourages inappropriate familiarity. Keep boundaries clear, especially after work hours.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Professionalism requires clear distance in personal interactions. Try again.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm4_rewind_2a', label: 'Rewind and Try Again', nextScene: 'm4_decision_2' }]
                  }
                ]
              },
              {
                id: 'm4_wrong_2c',
                title: 'Consequence: Unintentional Encouragement',
                panels: [
                  {
                    character: 'Riya',
                    text: "Your response could be misinterpreted as interest or permission for inappropriate conversation.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'System',
                    text: 'This path leads to unnecessary risk and confusion. Rerouting...',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm4_rewind_2c', label: 'Rewind and Choose Again', nextScene: 'm4_decision_2' }]
                  }
                ]
              },
              {
                id: 'm4_correct_2b',
                title: 'Correct Choice: Maintain Boundaries',
                panels: [
                  {
                    character: 'Meera',
                    text: "Good judgment. You’re not obligated to respond. If it persists, report it to HR or IC.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'System',
                    text: 'Decision verified. Moving to physical conduct rules.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'm4_p2', label: 'Continue to Physical Conduct', nextScene: 'm4_s6' }]
                  }
                ]
              },
              {
                id: 'm4_s6',
                title: 'Unwelcome Physical or Verbal Behavior',
                panels: [
                  {
                    character: 'Aarav',
                    text: "What about people who touch unnecessarily? Like a hand on the shoulder?",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  },
                  {
                    character: 'Meera',
                    text: "Touching without clear consent is unacceptable. Even gestures that seem friendly may make someone uncomfortable.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Riya',
                    text: "And comments about someone’s body or personal life are definitely out of line.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  }
                ]
              },
              {
                id: 'm4_summary',
                title: 'Module Summary',
                panels: [
                  {
                    character: 'Meera',
                    text: "A respectful workplace is built on boundaries. If an action can hurt, offend, or discomfort—don’t do it.",
                    side: 'left',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
                  },
                  {
                    character: 'Riya',
                    text: "Impact matters more than intent.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya'
                  },
                  {
                    character: 'Aarav',
                    text: "And if you’re unsure—choose professionalism.",
                    side: 'right',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'ec-m5',
      title: 'Module 5: Confidentiality & Data Protection',
      summary: 'A long-form, interactive comic storyline where employees learn confidentiality and data protection responsibilities.',
      order: 5,
      duration: '40 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Data Privacy Standards',
          videoUrl: '/assets/placeholders/ec-m5-video.mp4',
          instructions: 'Watch this overview of our data protection standards and encryption policies.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Guardians of Trust',
            scenes: [
              {
                id: 'm5_s1',
                title: 'A Regular Morning… Or Not',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Good morning team. Today’s topic is simple but powerful — confidentiality and data protection.",
                    visualDescription: "Meera stands in front of a digital board showing 'Confidentiality'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "Isn't confidentiality mostly an IT thing?",
                    visualDescription: "Aarav raises his hand, genuinely confused."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "It involves IT, yes — but every employee holds sensitive data in some form.",
                    visualDescription: "Meera taps her tablet, highlighting examples."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Like payroll details, customer information, internal presentations…",
                    visualDescription: "Riya lists examples on her notepad."
                  }
                ]
              },
              {
                id: 'm5_decision_1',
                title: 'The Printer Incident',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Let’s test your instincts. Suppose you find a printed salary sheet left on a printer.",
                    visualDescription: "A zoomed-in panel of a confidential 'Salary Statement' lying on the printer."
                  },
                  {
                    character: "System",
                    text: "What do you do with the abandoned sensitive document?",
                    side: 'center',
                    type: "choice",
                    options: [
                      { id: "choiceA1", label: "A. Leave it there. It’s not your document.", nextScene: "scene_wrongA1" },
                      { id: "choiceA2", label: "B. Pick it up and hand it over to HR immediately.", nextScene: "scene_rightA1" },
                      { id: "choiceA3", label: "C. Take a quick look out of curiosity.", nextScene: "scene_wrongA2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrongA1",
                title: 'Consequence: Bystander Inaction',
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Someone else picked it up… and now the whole department knows the salary differences.",
                    visualDescription: "Employees whispering in the background."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Aarav, even ignoring a breach allows it to grow. Inaction can still cause harm.",
                    visualDescription: "Meera looks disappointed."
                  },
                  {
                    character: "System",
                    text: "Inaction enabled a privacy breach. Let's try again.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'r_a1', label: 'Rewind', nextScene: 'm5_decision_1' }]
                  }
                ]
              },
              {
                id: "scene_wrongA2",
                title: 'Consequence: Privacy Violation',
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "I only peeked for a second… but someone saw me.",
                    visualDescription: "Aarav looks embarrassed as colleagues stare."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Curiosity isn’t harmless when it violates privacy. This is a disciplinary concern.",
                    visualDescription: "Meera gives a serious reminder."
                  },
                  {
                    character: "System",
                    text: "Integrity means respecting privacy even when unobserved. Try again.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'r_a2', label: 'Rewind', nextScene: 'm5_decision_1' }]
                  }
                ]
              },
              {
                id: "scene_rightA1",
                title: 'Correct Choice: Proactive Security',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Exactly what a responsible employee should do — secure the document and report it.",
                    visualDescription: "Meera smiles approvingly."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    side: "left",
                    text: "Confidentiality is built through small, everyday actions like this.",
                    visualDescription: "Mr. Kapoor enters with a firm nod."
                  },
                  {
                    character: "System",
                    text: "Physical data secured. Proceeding to digital security scenario.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_a1', label: 'Next: Digital Mistake', nextScene: 'm5_s3' }]
                  }
                ]
              },
              {
                id: "m5_s3",
                title: "Digital Confidentiality Mistake",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "Oops… I think I might’ve sent the wrong attachment to a vendor.",
                    visualDescription: "Aarav looking horrified at his laptop."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "What did you send?",
                    visualDescription: "Riya leans in."
                  },
                  {
                    character: "System",
                    text: "Scenario: A sensitive file was sent to the wrong external party. How do you respond?",
                    side: 'center',
                    type: "choice",
                    options: [
                      { id: "choiceB1", label: "A. Ignore it and hope they won’t open it.", nextScene: "scene_wrongB1" },
                      { id: "choiceB2", label: "B. Immediately inform your manager and IT.", nextScene: "scene_rightB1" },
                      { id: "choiceB3", label: "C. Delete the email from your Sent folder.", nextScene: "scene_wrongB2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrongB1",
                title: "Consequence: Escalated Leak",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "The vendor opened it. They now have access to internal pricing sheets.",
                    visualDescription: "Aarav covering his face, devastated."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    side: "left",
                    text: "Silence makes incidents worse. Reporting early prevents escalation.",
                    visualDescription: "Mr. Kapoor looks serious."
                  },
                  {
                    character: "System",
                    text: "Hoping for the best is not a security strategy. Try again.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'r_b1', label: 'Rewind', nextScene: 'm5_s3' }]
                  }
                ]
              },
              {
                id: "scene_wrongB2",
                title: "Consequence: Concealment Risk",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Deleting your copy doesn’t undo the breach. It can also look like concealment.",
                    visualDescription: "Meera gives a stern warning."
                  },
                  {
                    character: "System",
                    text: "Integrity requires transparency when mistakes happen. Try again.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'r_b2', label: 'Rewind', nextScene: 'm5_s3' }]
                  }
                ]
              },
              {
                id: "scene_rightB1",
                title: "Correct Choice: Immediate Disclosure",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Good call, Aarav. IT can revoke access or control the damage.",
                    visualDescription: "Riya nods approvingly."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Honesty and quick reporting are part of the Code of Conduct.",
                    visualDescription: "Meera smiles gently."
                  },
                  {
                    character: "System",
                    text: "Risk contained through transparency. Proceed to final summary.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_b1', label: 'Wrap-Up', nextScene: 'm5_s4' }]
                  }
                ]
              },
              {
                id: 'm5_s4',
                title: "Final Lesson",
                panels: [
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    side: "left",
                    text: "Confidentiality isn’t optional. It’s the foundation of trust — with employees, clients, and stakeholders.",
                    visualDescription: "Mr. Kapoor addresses the group."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Every action — physical or digital — matters.",
                    visualDescription: "Meera stands confidently beside the team."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "We’re all responsible. Not just IT.",
                    visualDescription: "Riya smiles with clarity."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'ec-m6',
      title: 'Module 6: Professional Behavior & Integrity',
      summary: 'A branching, long-form comic storyline about workplace professionalism, integrity, and misconduct prevention.',
      order: 6,
      duration: '45 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Integrity in Action',
          videoUrl: '/assets/placeholders/ec-m6-video.mp4',
          instructions: 'Watch this session on maintaining organizational integrity and reporting misconduct.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Integrity at Work',
            scenes: [
              {
                id: 'm6_s1',
                title: 'Scene 1 — Tensions in the Air',
                panels: [
                  {
                    character: "Meera (HR Trainer)",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Welcome to Module 6. Today, we’ll explore professionalism, integrity, and conduct at work.",
                    visualDescription: "Meera stands in front of a board titled 'Professional Workplace Behavior'."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "I know we have rules, but sometimes the workplace feels... complicated.",
                    visualDescription: "Aarav rubs the back of his neck, nervous."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Boundaries get blurry when deadlines close in or frustrations rise.",
                    visualDescription: "Riya folds her arms thoughtfully."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Exactly why conduct matters. Let’s begin with a real scenario.",
                    visualDescription: "Meera taps her tablet and the scene shifts."
                  }
                ]
              },
              {
                id: 'm6_s2',
                title: 'Scene 2 — A Heated Moment',
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "Riya, why didn’t you complete the report on time? We missed the client review!",
                    visualDescription: "Aarav confronts Riya at her desk; tension rises."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "I told you yesterday the data wasn’t finalized. You rushed through it anyway!",
                    visualDescription: "Riya clenches her jaw, upset."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "How should Aarav respond?",
                    type: "choice",
                    options: [
                      { id: "choiceC1", label: "A. Raise voice and blame her for the delay.", nextScene: "scene_wrongC1" },
                      { id: "choiceC2", label: "B. Suggest they discuss the issue calmly.", nextScene: "scene_rightC1" },
                      { id: "choiceC3", label: "C. Walk away and send a harsh email instead.", nextScene: "scene_wrongC2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrongC1",
                title: "Wrong Choice — Losing Control",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "This always happens with you! You never follow timelines!",
                    visualDescription: "Aarav yells; nearby employees stare."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    side: "left",
                    text: "Aarav. My office. Now.",
                    visualDescription: "Mr. Kapoor looks furious."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Raising your voice violates conduct guidelines. Emotional outbursts damage trust and culture.",
                    visualDescription: "Meera sighs, disappointed."
                  },
                  {
                    character: "System",
                    text: "Redirecting you to the correct storyline.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "r_c1", label: "Rewind and Try Again", nextScene: "m6_s2" }]
                  }
                ]
              },
              {
                id: "scene_wrongC2",
                title: "Wrong Choice — Sending a Harsh Email",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "I’ll just put everything in writing. She deserves to feel accountable.",
                    visualDescription: "Aarav angrily types a long, accusatory email."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "This email is inappropriate and humiliating. I’m reporting this to HR.",
                    visualDescription: "Riya bites her lip, upset."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Written communication must remain professional. Emails are official records.",
                    visualDescription: "Meera highlights a policy document."
                  },
                  {
                    character: "System",
                    text: "Returning to the correct path.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "r_c2", label: "Rewind and Choose Again", nextScene: "m6_s2" }]
                  }
                ]
              },
              {
                id: "scene_rightC1",
                title: "Correct Choice — Composure",
                panels: [
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "Riya… let’s step aside and sort this out calmly.",
                    visualDescription: "Aarav softens his tone."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Thank you. I didn’t want this to escalate either.",
                    visualDescription: "Riya takes a deep breath."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Professionalism is choosing composure even when emotions run high.",
                    visualDescription: "Meera looks proud."
                  },
                  {
                    character: "System",
                    text: "Scenario complete. Proceeding to Integrity Test.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "p_c1", label: "Next Lesson", nextScene: "m6_s3" }]
                  }
                ]
              },
              {
                id: "m6_s3",
                title: "Scene 3 — Integrity Test",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "A client emailed me asking for early access to a report that isn't approved yet.",
                    visualDescription: "Riya points at her laptop."
                  },
                  {
                    character: "System",
                    text: "How should Riya respond?",
                    side: "center",
                    type: "choice",
                    options: [
                      { id: "choiceD1", label: "A. Share it anyway to impress the client.", nextScene: "scene_wrongD1" },
                      { id: "choiceD2", label: "B. Inform them it is under review and will be shared once approved.", nextScene: "scene_rightD1" },
                      { id: "choiceD3", label: "C. Forward the mail to a colleague and ask them to handle it.", nextScene: "scene_wrongD2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrongD1",
                title: "Wrong Choice — Premature Disclosure",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Here’s the document. Please keep it confidential.",
                    visualDescription: "Riya sends the file."
                  },
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    side: "left",
                    text: "Riya, this violates policy. Unapproved documents can’t be shared externally.",
                    visualDescription: "Mr. Kapoor looks stern."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Integrity means following approval processes, even under pressure.",
                    visualDescription: "Meera highlights an approval workflow chart."
                  },
                  {
                    character: "System",
                    text: "Retry and choose the principled path.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "r_d1", label: "Rewind", nextScene: "m6_s3" }]
                  }
                ]
              },
              {
                id: "scene_wrongD2",
                title: "Wrong Choice — Passing Responsibility",
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Forwarding responsibility without context can lead to miscommunication or a breach.",
                    visualDescription: "Meera looks concerned."
                  },
                  {
                    character: "System",
                    text: "Ownership is key to integrity. Try again.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "r_d2", label: "Rewind", nextScene: "m6_s3" }]
                  }
                ]
              },
              {
                id: "scene_rightD1",
                title: "Correct Choice — Ethical Communication",
                panels: [
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "Thank you for your request. The report is under internal review and will be shared upon approval.",
                    visualDescription: "Riya types calmly."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Clear, honest, professional — that’s integrity.",
                    visualDescription: "Meera smiles warmly."
                  },
                  {
                    character: "System",
                    text: "Integrity verified. Proceeding to final summary.",
                    side: "center",
                    type: "choice",
                    options: [{ id: "p_d1", label: "Finish Lesson", nextScene: "m6_s4" }]
                  }
                ]
              },
              {
                id: "m6_s4",
                title: "Scene 4 — Final Workplace Lesson",
                panels: [
                  {
                    character: "Mr. Kapoor",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor",
                    side: "left",
                    text: "Professional behavior is not about perfection. It’s about responsibility and respect.",
                    visualDescription: "Mr. Kapoor addresses the team."
                  },
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Integrity builds culture. Culture builds trust. Trust builds organizations.",
                    visualDescription: "Meera stands confidently."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "I get it now. Conduct is not just rules—it’s how we protect each other.",
                    visualDescription: "Aarav smiles, understanding the lesson."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'ec-m7',
      title: 'Module 7: Workplace Communication & Digital Etiquette',
      summary: 'A branching comic storyline about responsible communication—verbal, written, digital, and remote.',
      order: 7,
      duration: '45 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Effective Communication',
          videoUrl: '/assets/placeholders/ec-m7-video.mp4',
          instructions: 'Watch this session on digital etiquette and constructive workplace communication.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Communication That Builds Trust',
            scenes: [
              {
                id: 'm7_s1',
                title: 'Scene 1 — The Morning Storm',
                panels: [
                  {
                    character: "Meera",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    side: "left",
                    text: "Welcome to Module 7. Communication is the backbone of workplace culture.",
                    visualDescription: "Meera stands in a conference room with a screen titled ‘Responsible Communication’."
                  },
                  {
                    character: "Aarav",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    side: "right",
                    text: "But communication is tricky… especially online.",
                    visualDescription: "Aarav adjusts his laptop bag while rubbing his forehead."
                  },
                  {
                    character: "Riya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    side: "right",
                    text: "I've seen messages misunderstood, emails misread, and tone lost completely.",
                    visualDescription: "Riya shrugs, recalling incidents."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Exactly. Let’s look at a scenario.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
                    visualDescription: "Meera taps her tablet."
                  }
                ]
              },
              {
                id: 'm7_s2',
                title: 'Scene 2 — The Email That Exploded',
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    text: "Riya, did you see the email Ravi sent last night? He copied the entire team!",
                    visualDescription: "Aarav looks frustrated, opening his inbox."
                  },
                  {
                    character: "Riya",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    text: "He basically accused logistics of ‘laziness’. That’s harsh.",
                    visualDescription: "Riya scrolls through the email chain."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "How should Aarav respond to this email chain?",
                    type: "choice",
                    options: [
                      { id: "choiceM7A1", label: "A. Reply-all immediately and defend with a sharp tone.", nextScene: "scene_wrongA1" },
                      { id: "choiceM7A2", label: "B. Privately message Ravi and suggest a talk.", nextScene: "scene_rightA1" },
                      { id: "choiceM7A3", label: "C. Ignore the email completely.", nextScene: "scene_wrongA2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrongA1",
                title: "Wrong Choice — Escalation Chaos",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    text: "Reply-all: ‘This is unprofessional. Maybe check facts before throwing accusations!’",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
                    visualDescription: "Aarav angrily hits ‘Send’."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Reply-all wars damage culture. They escalate conflicts publicly.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "Publicly defending errors can backfire. Try a private approach.",
                    side: "center",
                    type: 'choice',
                    options: [{ id: 'r_m7_a1', label: 'Rewind', nextScene: 'm7_s2' }]
                  }
                ]
              },
              {
                id: "scene_wrongA2",
                title: "Wrong Choice — Silence",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "Ignoring this won’t solve the conflict. The tension will grow.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Avoidance is not professionalism. Responsible communication requires action.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "Passive behavior enables toxic threads. Try another path.",
                    side: "center",
                    type: 'choice',
                    options: [{ id: 'r_m7_a2', label: 'Rewind', nextScene: 'm7_s2' }]
                  }
                ]
              },
              {
                id: "scene_rightA1",
                title: "Correct Choice — Composure",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    text: "Hey Ravi, I think emotions were high yesterday. Let’s discuss this offline before we reply.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Ravi",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi",
                    text: "You're right. I shouldn’t have worded it like that.",
                    visualDescription: "Ravi looks embarrassed."
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Good communication defuses, not ignites.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "Conflict contained. Proceeding to pantry scenario.",
                    side: "center",
                    type: 'choice',
                    options: [{ id: 'p_m7_a1', label: 'Next: The Gossip Trap', nextScene: 'm7_s3' }]
                  }
                ]
              },
              {
                id: 'm7_s3',
                title: 'Scene 3 — The Gossip Trap',
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "Guys, someone said the marketing head is getting demoted. Any idea?",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
                    visualDescription: "Riya walks into the pantry, overhearing hushed whispers."
                  },
                  {
                    character: "Aarav",
                    side: "right",
                    text: "I heard that too… but from someone’s cousin who works nowhere near here.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "How should Riya respond to rumor spreading?",
                    type: "choice",
                    options: [
                      { id: "choiceM7B1", label: "A. Join in and contribute assumptions.", nextScene: "scene_wrongB1" },
                      { id: "choiceM7B2", label: "B. Stop the gossip and remind others it is harmful.", nextScene: "scene_rightB1" },
                      { id: "choiceM7B3", label: "C. Stay quiet but remain listening.", nextScene: "scene_wrongB2" }
                    ]
                  }
                ]
              },
              {
                id: "scene_wrongB1",
                title: "Wrong Choice — Fueling Gossip",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "Maybe it’s true. I’ve noticed he’s been tense lately!",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Mr. Kapoor",
                    side: "left",
                    text: "Gossip destroys trust. We do not speculate about colleagues' lives.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor"
                  },
                  {
                    character: "System",
                    text: "Contributing to rumors violates integrity. Try again.",
                    side: "center",
                    type: 'choice',
                    options: [{ id: 'r_m7_b1', label: 'Rewind', nextScene: 'm7_s3' }]
                  }
                ]
              },
              {
                id: "scene_wrongB2",
                title: "Wrong Choice — Enabling",
                panels: [
                  {
                    character: "Meera",
                    side: "left",
                    text: "Staying silent signals approval. Ethical communication means discouraging harmful talk.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "Passive enabling hurts team morale. Choose a stronger stance.",
                    side: "center",
                    type: 'choice',
                    options: [{ id: 'r_m7_b2', label: 'Rewind', nextScene: 'm7_s3' }]
                  }
                ]
              },
              {
                id: "scene_rightB1",
                title: "Correct Choice — Ending Rumors",
                panels: [
                  {
                    character: "Riya",
                    side: "right",
                    text: "Let’s not discuss unverified things. It’s unfair and unprofessional.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
                  },
                  {
                    character: "Aarav",
                    text: "You're right. We shouldn’t speculate.",
                    side: "right",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Stopping gossip is part of workplace integrity.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  },
                  {
                    character: "System",
                    text: "Professional boundary set. Moving to digital etiquette.",
                    side: "center",
                    type: 'choice',
                    options: [{ id: 'p_m7_b1', label: 'Continue', nextScene: 'm7_s4' }]
                  }
                ]
              },
              {
                id: 'm7_s4',
                title: "Scene 4 — Digital Behavior & Online Etiquette",
                panels: [
                  {
                    character: "Aarav",
                    side: "right",
                    text: "Meera, is sending memes on work groups okay?",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"
                  },
                  {
                    character: "Meera",
                    side: "left",
                    text: "Only if they’re appropriate and the group’s purpose allows casual sharing.",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  // Fix: Missing required 'assessment' property in Course type
  assessment: [
    {
      id: 'ecq1',
      text: 'Which behavior is essential for a respectful workplace?',
      options: [
        'Publicly shaming a colleague for a mistake',
        'Addressing issues privately and constructively',
        'Ignoring mistakes to avoid confrontation',
        'Only following rules when being watched'
      ],
      correctAnswer: 1
    },
    {
      id: 'ecq2',
      text: 'What is the correct action if you are running late for work?',
      options: [
        'Say nothing and join quietly later',
        'Ask a teammate to mark your attendance (proxy marking)',
        'Proactively communicate your ETA to your manager',
        'Ignore the delay and hope no one notices'
      ],
      correctAnswer: 2
    },
    {
      id: 'ecq3',
      text: 'How should workplace hazards like blocked fire exits be handled?',
      options: [
        'Ignored if you are in a hurry',
        'Reported immediately to facilities or safety officers',
        'Left for the maintenance team to find during an audit',
        'Only reported if an accident actually occurs'
      ],
      correctAnswer: 1
    },
    {
      id: 'ecq4',
      text: 'Is it acceptable to use personal cloud storage for company files?',
      options: [
        'Yes, if it is faster than the VPN',
        'Only if the manager gives verbal permission',
        'No, official data must only be handled on approved company systems',
        'Yes, for non-sensitive documents only'
      ],
      correctAnswer: 2
    },
    {
      id: 'ecq5',
      text: 'What should you do if you notice a teammate spreading unverified rumors?',
      options: [
        'Join the conversation to stay informed',
        'Quietly listen without participating',
        'Politely stop the gossip and remind them it is unprofessional',
        'Report the conversation to a client'
      ],
      correctAnswer: 2
    }
  ]
};

// Fix: Missing default export for the module
export default employeeCodeOfConduct;