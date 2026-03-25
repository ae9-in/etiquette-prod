import { Course } from '../../types';

const healthAndSafetyOhs: Course = {
  id: 'health-safety-2024',
  title: 'Health and Safety (OHS)',
  description: 'Promoting a culture of physical safety, ergonomic well-being, and mental health awareness.',
  category: 'Safety & Wellness',
  duration: '120 mins',
  icon: '🏥',
  colorTheme: 'emerald',
  modules: [
    {
      id: 'hs-m1',
      title: 'Module 1: Foundations of OHS',
      summary: 'Understanding the importance of Occupational Health and Safety in the modern workplace.',
      order: 1,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Introduction to Workplace Safety',
          videoUrl: '/assets/placeholders/hs-m1-video.mp4',
          instructions: 'Watch this session to understand your rights and responsibilities under OHS standards.'
        },
        { type: 'text', body: "Safety isn't just about avoiding accidents; it's about building sustainable work habits." },
        { type: 'tip', title: "The 20-20-20 Rule", body: "Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain." }
      ]
    },
    {
      id: 'hs-m2',
      title: 'Module 2: Reporting Hazards & Shared Responsibility',
      summary: 'Identifying environmental risks and understanding the collaborative nature of workplace safety.',
      order: 2,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Identifying and Reporting Hazards',
          videoUrl: '/assets/placeholders/hs-m2-video.mp4',
          instructions: 'Learn the official protocols for flagging risks before they turn into incidents.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Hazard Awareness & Shared Responsibility',
            scenes: [{
              title: 'Detecting Risks',
              panels: [
                {
                  character: 'Meera',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                  text: "Safety works only when everyone participates. Employees are expected to notice and report hazards, not ignore them.",
                  side: 'left'
                },
                {
                  character: 'Ravi',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi&top=shortHair&clothing=shirt',
                  text: "Anita, I just noticed that the fire exit near our section is blocked with stored cartons.",
                  side: 'right'
                },
                {
                  character: 'Anita',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita&top=longHair&clothing=blazer',
                  text: "Yeah, I saw that earlier too. I assumed facilities would handle it.",
                  side: 'right'
                }
              ]
            }]
          }
        },
        {
          type: 'check',
          question: "What is the best course of action when you notice a safety hazard like a blocked fire exit?",
          options: [
            "Leave hazards unreported because facilities might handle it eventually.",
            "Report hazards immediately to prevent potential accidents."
          ],
          correctIndex: 1,
          explanation: "Reporting hazards early prevents accidents and protects everyone. Ignoring hazards increases risk."
        }
      ]
    },
    {
      id: 'hs-m3',
      title: 'Module 3: Fire Safety & Emergency Equipment',
      summary: 'Essential knowledge for fire prevention and correct usage of emergency tools.',
      order: 3,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Fire Safety Fundamentals',
          videoUrl: '/assets/placeholders/hs-m3-video.mp4',
          instructions: 'Watch this demonstration on the different classes of fire and how to use extinguishers using the PASS method.'
        },
        {
          type: 'check',
          question: "What does the 'PASS' method stand for when using a fire extinguisher?",
          options: [
            "Pull, Aim, Squeeze, Sweep",
            "Point, Activate, Spray, Stop",
            "Push, Aim, Shake, Slide"
          ],
          correctIndex: 0,
          explanation: "PASS is the universal acronym for Pull the pin, Aim at the base, Squeeze the lever, and Sweep side to side."
        }
      ]
    },
    {
      id: 'hs-m4',
      title: 'Module 4: Safe Work Practices & Accident Prevention',
      summary: 'Identifying near-misses, understanding safe equipment usage, and the importance of proactive accident prevention.',
      order: 4,
      duration: '25 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Preventing Workplace Accidents',
          videoUrl: '/assets/placeholders/hs-m4-video.mp4',
          instructions: 'This video covers the most common causes of workplace injury and how to prevent them through daily discipline.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Safe Work Practices',
            scenes: [{
              title: 'Near-Miss at the Pantry',
              panels: [
                {
                  character: 'Arjun',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&clothing=shirt',
                  text: "Whoa… I almost slipped there. The floor near the pantry is wet.",
                  side: 'right'
                },
                {
                  character: 'Meera',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                  text: "Near-misses like this are early warning signs. Accident prevention is about acting before someone gets injured.",
                  side: 'left'
                }
              ]
            }]
          }
        },
        {
          type: 'check',
          question: "How should near-misses be handled to ensure long-term safety?",
          options: [
            "Ignore near-misses because nothing bad actually happened.",
            "Report near-misses immediately to prevent future accidents."
          ],
          correctIndex: 1,
          explanation: "Reporting near-misses helps prevent accidents before they occur. Ignoring them allows hidden risks to grow."
        }
      ]
    },
    {
      id: 'hs-m5',
      title: 'Module 5: Ergonomics & Workstation Setup',
      summary: 'Optimizing your workstation to prevent long-term musculoskeletal strain.',
      order: 5,
      duration: '30 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Workplace Ergonomics',
          videoUrl: '/assets/placeholders/hs-m5-video.mp4',
          instructions: 'Watch this session to learn the ideal posture, monitor height, and chair settings for a healthy work life.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Ergonomic Awareness Simulation',
            scenes: [{
              title: 'Workstation Observations',
              panels: [
                {
                  character: 'Nikhil',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&top=shortHair&hairColor=black&clothing=shirt',
                  text: "My neck has been hurting a lot lately. By the end of the day, my shoulders feel completely stiff.",
                  side: 'right'
                },
                {
                  character: 'Meera',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                  text: "That’s exactly how ergonomic issues start. Strain builds up over time. Posture actually matters that much.",
                  side: 'left'
                }
              ]
            }]
          }
        },
        {
          type: 'check',
          question: "Decision point: How should you handle persistent workstation discomfort?",
          options: [
            "Ignore discomfort because it will likely go away on its own.",
            "Adjust posture, use ergonomic tools, and report recurring discomfort."
          ],
          correctIndex: 1,
          explanation: "Addressing discomfort early helps prevent long-term issues. Ergonomics is a shared responsibility."
        }
      ]
    },
    {
      id: 'hs-m6',
      title: 'Module 6: Mental Health & Workplace Wellbeing',
      summary: 'Recognizing stress factors and building a supportive team environment.',
      order: 6,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Mental Health Awareness',
          videoUrl: '/assets/placeholders/hs-m6-video.mp4',
          instructions: 'Understand the signs of workplace burnout and the resources available for mental health support.'
        },
        {
          type: 'check',
          question: "Which of these is a healthy way to manage workplace stress?",
          options: [
            "Staying late every night to 'catch up' indefinitely",
            "Taking regular breaks and discussing workload issues with your manager",
            "Ignoring the stress until it goes away"
          ],
          correctIndex: 1,
          explanation: "Open communication and balanced breaks are essential for long-term mental wellbeing."
        }
      ]
    },
    {
      id: 'hs-m7',
      title: 'Module 7: First Aid & Initial Response',
      summary: 'Basic first aid awareness and how to react during medical emergencies.',
      order: 7,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'First Aid Basics',
          videoUrl: '/assets/placeholders/hs-m7-video.mp4',
          instructions: 'Learn the basic steps for responding to common medical issues like fainting, minor burns, and cuts.'
        },
        {
          type: 'check',
          question: "What should you do FIRST if a colleague collapses?",
          options: [
            "Check for safety, call for help/emergency services, and alert a first aider",
            "Try to give them water immediately",
            "Wait for them to wake up"
          ],
          correctIndex: 0,
          explanation: "Initial assessment and calling for expert medical help is always the priority in a collapse scenario."
        }
      ]
    },
    {
      id: 'hs-m8',
      title: 'Module 8: Incident Reporting & Unsafe Conditions',
      summary: 'Understanding the importance of early reporting to prevent serious workplace accidents.',
      order: 8,
      duration: '25 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'The Power of Incident Reporting',
          videoUrl: '/assets/placeholders/hs-m8-video.mp4',
          instructions: 'Learn the step-by-step process for filing an incident or near-miss report.'
        },
        {
          type: 'comic',
          comicData: {
            title: 'Reporting for Safety',
            scenes: [{
              title: 'The Near-Miss Observation',
              panels: [
                {
                  character: 'Sanjay',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay&top=shortHair&clothing=shirt',
                  text: "I almost slipped near the storage area just now. There’s water leaking from the cooler.",
                  side: 'right'
                },
                {
                  character: 'Meera',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                  text: "Reporting isn’t about blame. It’s about prevention. Small issues become big risks if ignored.",
                  side: 'left'
                }
              ]
            }]
          }
        },
        {
          type: 'check',
          question: "When should you report a near-miss or unsafe condition?",
          options: [
            "Wait until someone gets hurt before reporting.",
            "Report near-misses and unsafe conditions immediately."
          ],
          correctIndex: 1,
          explanation: "Early reporting prevents injuries and strengthens workplace safety."
        }
      ]
    },
    {
      id: 'hs-m9',
      title: 'Module 9: Safety Culture & Active Bystander',
      summary: 'Your role in influencing a safer environment for everyone.',
      order: 9,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Active Bystander Intervention',
          videoUrl: '/assets/placeholders/hs-m9-video.mp4',
          instructions: 'Watch this to learn how to respectfully intervene when you see unsafe behavior.'
        },
        {
          type: 'check',
          question: "What is an 'Active Bystander' in safety?",
          options: [
            "Someone who watches an accident happen",
            "Someone who notices a risk and takes action to prevent harm",
            "Someone who documents safety violations for HR only"
          ],
          correctIndex: 1,
          explanation: "Active bystanders take ownership of their environment and intervene proactively to keep others safe."
        }
      ]
    },
    {
      id: 'hs-m10',
      title: 'Module 10: OHS Summary & Compliance',
      summary: 'A wrap-up of all safety protocols and regulatory compliance standards.',
      order: 10,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'OHS Certification Wrap-up',
          videoUrl: '/assets/placeholders/hs-m10-video.mp4',
          instructions: 'A final summary of our organizational safety policies before the final exam.'
        },
        {
          type: 'quote',
          body: 'Safety is a journey, not a destination. Your commitment to these protocols saves lives every day.'
        }
      ]
    }
  ],
  assessment: [
    {
      id: 'hsq1',
      text: 'What is the primary goal of workplace ergonomics?',
      options: ['To make the office look modern', 'To reduce physical strain and injury', 'To save on electricity'],
      correctAnswer: 1
    },
    {
      id: 'hsq2',
      text: 'If you see a colleague using a broken chair, what should you do?',
      options: ['Wait for them to fall', 'Advise them of the risk and report the broken equipment', 'Hide the chair'],
      correctAnswer: 1
    },
    {
      id: 'hsq3',
      text: 'Whose responsibility is workplace health and safety?',
      options: ['The CEO only', 'The Facilities Team', 'Every single employee and manager'],
      correctAnswer: 2
    }
  ]
};

export default healthAndSafetyOhs;