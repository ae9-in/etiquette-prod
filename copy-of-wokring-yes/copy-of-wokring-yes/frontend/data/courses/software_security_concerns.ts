import { Course } from '../../types';

const softwareSecurityConcerns: Course = {
  id: 'software-sec-2024',
  title: 'Software Security Concerns',
  description: 'Best practices for secure coding, vulnerability management, and dev-sec-ops.',
  category: 'Engineering',
  duration: '140 mins',
  icon: '🛡️',
  colorTheme: 'indigo',
  modules: [
    {
      id: 'ss-m1',
      title: 'Module 1: Secure Development Lifecycle',
      summary: 'Integrating security into every phase of code production.',
      order: 1,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Secure Development Lifecycle — Introduction',
          instructions: 'This video introduces how security must be embedded into planning, coding, testing, deployment, and maintenance stages.',
          videoUrl: 'https://example.com/placeholder-video'
        },
        {
          type: 'text',
          body: "Security is not a feature; it is a fundamental requirement of quality software. Every phase of development must consider risks, vulnerabilities, and preventive controls."
        }
      ]
    },
    {
      id: 'ss-m2',
      title: 'Module 2: Password Safety & Secure Login Practices',
      summary: 'Interactive simulation on strong password habits, login safety, and digital accountability.',
      order: 2,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Password Safety — Interactive Simulation',
            scenes: [
              {
                id: 'pw_intro',
                title: 'Your Digital Key',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer',
                    text: "Today we’re talking about passwords — your digital office keys.",
                    side: 'left',
                    visualDescription: "Director's Note: Riya stands in a modern office huddle area."
                  },
                  {
                    character: 'Neha',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&top=longHair&hairColor=brown&mouth=smile&clothing=shirt',
                    text: "I just reuse one password everywhere. Easier to remember.",
                    side: 'right',
                    visualDescription: "Director's Note: Neha looks casual, shrugging her shoulders."
                  },
                  {
                    character: 'Arjun',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&mouth=serious&clothing=blazer',
                    text: "That’s the most common starting point of real breaches.",
                    side: 'left',
                    visualDescription: "Director's Note: Arjun crosses his arms, looking serious."
                  }
                ]
              },
              {
                id: 'pw_scenario',
                title: 'A Quick Situation',
                panels: [
                  {
                    character: 'System',
                    text: "You receive an email asking you to reset your company password immediately.",
                    side: 'center',
                    visualDescription: "Director's Note: A large laptop screen shows a red-flagged email notification."
                  },
                  {
                    character: 'System',
                    text: "What do you do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'pw_click', label: 'Click the link instantly', nextScene: 'pw_wrong_click' },
                      { id: 'pw_verify', label: 'Verify sender with IT first', nextScene: 'pw_correct_verify' },
                      { id: 'pw_ignore', label: 'Ignore completely', nextScene: 'pw_wrong_ignore' }
                    ]
                  }
                ]
              },
              {
                id: 'pw_wrong_click',
                title: 'Consequence — Phishing Success',
                panels: [
                  {
                    character: 'Arjun',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
                    text: "The link was fake. Your credentials are compromised.",
                    side: 'left',
                    visualDescription: "Director's Note: A digital shield shatters on the screen."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Unauthorized access detected. Credentials leaked to external actors.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'pw_rewind1', label: 'Rewind Decision', nextScene: 'pw_scenario' }]
                  }
                ]
              },
              {
                id: 'pw_wrong_ignore',
                title: 'Consequence — Missed Alert',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "The email was actually legitimate from IT. Your account expires tomorrow.",
                    side: 'left',
                    visualDescription: "Director's Note: Riya points to an 'Account Expiring' warning."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Account Lockout Risk. Proactive security involves verifying, not just ignoring.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'pw_rewind2', label: 'Try Again', nextScene: 'pw_scenario' }]
                  }
                ]
              },
              {
                id: 'pw_correct_verify',
                title: 'Correct — Verification First',
                panels: [
                  {
                    character: 'Arjun',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
                    text: "Good move. Verification prevents phishing and mistakes.",
                    side: 'left',
                    visualDescription: "Director's Note: Arjun gives a thumbs up beside a 'Verified' icon."
                  },
                  {
                    character: 'System',
                    text: "You now need to create a new password.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'pw_easy', label: 'CompanyName123', nextScene: 'pw_wrong_easy' },
                      { id: 'pw_strong', label: 'Random 14-char mix', nextScene: 'pw_correct_strong' }
                    ]
                  }
                ]
              },
              {
                id: 'pw_wrong_easy',
                title: 'Consequence — Predictable Password',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Attackers guess patterns using public data. That password is weak.",
                    side: 'left',
                    visualDescription: "Director's Note: A password strength meter drops to red."
                  },
                  {
                    character: 'System',
                    text: "Outcome: High Breach Probability. Avoid personal or company-specific predictable patterns.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'pw_rewind3', label: 'Choose Again', nextScene: 'pw_correct_verify' }]
                  }
                ]
              },
              {
                id: 'pw_correct_strong',
                title: 'Correct — Strong Password',
                panels: [
                  {
                    character: 'Arjun',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
                    text: "Strong passwords reduce automated attack success drastically.",
                    side: 'left',
                    visualDescription: "Director's Note: The meter hits green: 'Unbreakable'."
                  },
                  {
                    character: 'System',
                    text: "A colleague asks for your login to finish urgent work while you're at lunch.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'pw_share', label: 'Share temporarily', nextScene: 'pw_wrong_share' },
                      { id: 'pw_refuse', label: 'Refuse & suggest access request', nextScene: 'pw_correct_refuse' }
                    ]
                  }
                ]
              },
              {
                id: 'pw_wrong_share',
                title: 'Consequence — Accountability Loss',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Password sharing removes audit trails and creates risk for both of you.",
                    side: 'left',
                    visualDescription: "Director's Note: A blurred image of two people at one screen."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Compliance Violation. Accountability is tied to your individual credentials.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'pw_rewind4', label: 'Try Different Choice', nextScene: 'pw_correct_strong' }]
                  }
                ]
              },
              {
                id: 'pw_correct_refuse',
                title: 'Correct — Secure Alternative',
                panels: [
                  {
                    character: 'Arjun',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
                    text: "Perfect. Proper access requests keep accountability intact.",
                    side: 'left',
                    visualDescription: "Director's Note: Arjun points at a helpdesk portal."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Verify emails, create strong passwords, never share logins.",
                    side: 'left',
                    visualDescription: "Director's Note: Summary slide appears."
                  },
                  {
                    character: 'System',
                    text: "Password safety is personal responsibility and organizational security combined.",
                    side: 'center'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which habit MOST improves login security?",
          options: [
            "Reusing passwords across systems",
            "Using personal information for convenience",
            "Creating unique strong passwords and verifying login requests"
          ],
          correctIndex: 2,
          explanation: "Strong, unique passwords combined with verification practices significantly reduce breach risk and maintain accountability."
        }
      ]
    },
    {
      id: 'ss-m3',
      title: 'Module 3: Vulnerability Awareness & Secure Practices',
      summary: 'Video module placeholder — focuses on identifying vulnerabilities and applying secure behaviour.',
      order: 3,
      duration: '20 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Module 3 — Vulnerability Awareness (Placeholder)',
          instructions: 'This is a placeholder video. Replace with final training video after export. Note: Video completion is required to proceed to the logic checks.',
          videoUrl: 'PLACEHOLDER_VIDEO_URL'
        },
        {
          type: 'check',
          question: "Which situation is MOST likely a software vulnerability risk?",
          options: [
            "Updating software regularly",
            "Using outdated plugins and ignoring updates",
            "Locking your system when leaving desk"
          ],
          correctIndex: 1,
          explanation: "Outdated plugins and ignored updates create exploitable security gaps that attackers commonly target."
        },
        {
          type: 'check',
          question: "If you discover a potential vulnerability, what should you do FIRST?",
          options: [
            "Try fixing it secretly yourself",
            "Ignore it if nothing is broken",
            "Report it immediately to IT or Security Team"
          ],
          correctIndex: 2,
          explanation: "Early reporting allows proper investigation and prevents larger incidents. Self-fix attempts can worsen risks."
        },
        {
          type: 'check',
          question: "Why are regular security patches critical?",
          options: [
            "They improve system colors and themes",
            "They close known security loopholes exploited by attackers",
            "They increase internet speed"
          ],
          correctIndex: 1,
          explanation: "Patches fix known vulnerabilities. Delaying them leaves systems exposed to already-documented exploits."
        }
      ]
    },
    {
      id: 'ss-m4',
      title: 'Module 4: Phishing & Social Engineering Awareness',
      summary: 'Interactive branching simulation on identifying manipulation tactics and responding safely.',
      order: 4,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'The Suspicious Email — Interactive Security Simulation',
            scenes: [
              {
                id: 'intro_phishing',
                title: 'A Normal Morning',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer',
                    text: "Security incidents rarely begin with alarms. They begin quietly—with a single click.",
                    side: 'left',
                    visualDescription: "Office environment; screen shows inbox notification."
                  },
                  {
                    character: 'Karan',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&mouth=open&clothing=shirt',
                    text: "I just got an urgent email from ‘IT Support’ asking me to reset my password.",
                    side: 'right'
                  }
                ]
              },
              {
                id: 'email_display',
                title: 'The Email',
                panels: [
                  {
                    character: 'System',
                    text: "Email Subject: *URGENT: Account Suspension Notice*\nLink: it-secure-portal-verify.com",
                    side: 'center',
                    visualDescription: "Close-up of a suspicious looking email header."
                  }
                ]
              },
              {
                id: 'decision_click',
                title: 'Decision Point — First Reaction',
                panels: [
                  {
                    character: 'System',
                    text: "What do you do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_click', label: 'Click the link immediately', nextScene: 'wrong_click' },
                      { id: 'opt_hover', label: 'Hover to inspect the link first', nextScene: 'inspect_link' },
                      { id: 'opt_ignore', label: 'Ignore completely', nextScene: 'wrong_ignore_email' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_click',
                title: 'Consequence — Credential Theft',
                panels: [
                  {
                    character: 'System',
                    text: "You entered credentials. The page was fake.",
                    side: 'center',
                    visualDescription: "Browser showing a 'Loading...' spinner on a suspicious login page."
                  },
                  {
                    character: 'IT Alert',
                    text: "Unusual login detected from another country.",
                    side: 'center',
                    visualDescription: "Red flashing alert: 'ACCOUNT COMPROMISED'."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Account Compromised. Credentials leaked to external actors.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_click', label: 'Rewind', nextScene: 'decision_click' }]
                  }
                ]
              },
              {
                id: 'wrong_ignore_email',
                title: 'Consequence — Missed Reporting',
                panels: [
                  {
                    character: 'Arjun',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&top=shortHair&hairColor=black&mouth=serious&clothing=blazer',
                    text: "Ignoring phishing doesn’t help IT block it for others.",
                    side: 'left',
                    visualDescription: "Arjun stands beside a whiteboard showing 'Threat Awareness'."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Threat persists for team. Silence enables attackers to target your colleagues.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_ignore', label: 'Try Again', nextScene: 'decision_click' }]
                  }
                ]
              },
              {
                id: 'inspect_link',
                title: 'Inspection',
                panels: [
                  {
                    character: 'Karan',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan',
                    text: "The domain looks strange… not our company URL.",
                    side: 'right',
                    visualDescription: "Mouse cursor hovering over a link, revealing 'http://it-secure-portal-verify.com/login'."
                  }
                ]
              },
              {
                id: 'decision_next',
                title: 'Decision Point — Next Step',
                panels: [
                  {
                    character: 'System',
                    text: "Now what?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_report', label: 'Report to IT Security', nextScene: 'correct_report' },
                      { id: 'opt_delete', label: 'Delete and move on', nextScene: 'partial_delete' }
                    ]
                  }
                ]
              },
              {
                id: 'partial_delete',
                title: 'Partial Safety',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "You stayed safe—but others may still fall for it.",
                    side: 'left',
                    visualDescription: "Riya looks at a crowded office floor."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Personal safety achieved, team risk remains. Collective security requires reporting.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_partial', label: 'Choose Better Action', nextScene: 'decision_next' }]
                  }
                ]
              },
              {
                id: 'correct_report',
                title: 'Correct — Collective Protection',
                panels: [
                  {
                    character: 'IT Team',
                    text: "Phishing domain blocked company-wide.",
                    side: 'center',
                    visualDescription: "IT dashboard showing: 'Domain Blacklisted: it-secure-portal-verify.com'."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Security improves when individuals act early.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'decision_followup',
                title: 'Decision Point — Follow-Up',
                panels: [
                  {
                    character: 'System',
                    text: "A colleague says they already clicked it. What do you do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_blame', label: 'Blame them publicly', nextScene: 'wrong_blame' },
                      { id: 'opt_help', label: 'Guide them to IT immediately', nextScene: 'correct_help' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_blame',
                title: 'Consequence — Culture Damage',
                panels: [
                  {
                    character: 'System',
                    text: "Public blame discourages future reporting. People hide mistakes, increasing risk.",
                    side: 'center',
                    visualDescription: "Sad emoji overlay on a Slack-style chat interface."
                  },
                  {
                    character: 'System',
                    text: "Outcome: Toxic security culture. Mistakes are buried rather than fixed.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_blame', label: 'Retry', nextScene: 'decision_followup' }]
                  }
                ]
              },
              {
                id: 'correct_help',
                title: 'Correct — Supportive Security',
                panels: [
                  {
                    character: 'IT Alert',
                    text: "Password reset and session revoked.",
                    side: 'center',
                    visualDescription: "Screen showing a successful password change confirmation."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Security is technical—but also cultural.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'summary_phishing',
                title: 'Key Takeaway',
                panels: [
                  {
                    character: 'System',
                    text: "Inspect • Report • Support — these three actions prevent most phishing incidents.",
                    side: 'center',
                    visualDescription: "Final summary slide with icons for Eye, Megaphone, and Heart."
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "What is the MOST effective response to a phishing attempt?",
          options: [
            "Ignore it silently",
            "Click to verify authenticity",
            "Inspect and report immediately"
          ],
          correctIndex: 2,
          explanation: "Inspection prevents personal compromise, reporting prevents organizational compromise."
        }
      ]
    },
    {
      id: 'ss-m5',
      title: 'Module 5: Safe Use of Company Devices ("Handle With Care")',
      summary: 'Interactive branching simulation on protecting company devices and preventing unauthorized access.',
      order: 5,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Handle With Care — Interactive Device Security Simulation',
            scenes: [
              {
                id: 'device_intro',
                title: 'A Simple Moment',
                panels: [
                  {
                    character: 'System',
                    text: 'Scenario: Rahul steps away from his desk for coffee. His laptop remains unlocked.',
                    side: 'center',
                    visualDescription: "Open office area; Rahul stands and moves away from a glowing laptop screen."
                  },
                  {
                    character: 'Pooja',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja',
                    text: 'Rahul… your laptop is still open.',
                    side: 'right'
                  }
                ]
              },
              {
                id: 'device_decision_1',
                title: 'Decision Point — Immediate Action',
                panels: [
                  {
                    character: 'System',
                    text: 'What should Rahul do?',
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_ignore', label: 'Ignore — back in 2 minutes', nextScene: 'wrong_ignore' },
                      { id: 'opt_lock', label: 'Lock the screen immediately', nextScene: 'correct_lock' },
                      { id: 'opt_shutdown', label: 'Shut down completely every time', nextScene: 'neutral_shutdown' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_ignore',
                title: 'Consequence — Unauthorized Access',
                panels: [
                  {
                    character: 'System',
                    text: 'A passerby sends emails from Rahul’s account.',
                    side: 'center',
                    visualDescription: "A dark silhouette leans over the laptop while Rahul is away."
                  },
                  {
                    character: 'Amit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    text: 'Now we have audit confusion and accountability issues.',
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Outcome: Data risk increased.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_a', label: 'Rewind', nextScene: 'device_decision_1' }]
                  }
                ]
              },
              {
                id: 'neutral_shutdown',
                title: 'Overcorrection',
                panels: [
                  {
                    character: 'Sonal',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    text: 'Shutting down every time isn’t practical. Locking is faster and secure.',
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Redirecting to efficient security...',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_lock', label: 'Choose Lock Option', nextScene: 'device_decision_1' }]
                  }
                ]
              },
              {
                id: 'correct_lock',
                title: 'Correct — Screen Locked',
                panels: [
                  {
                    character: 'Rahul',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    text: 'Windows + L. Done.',
                    side: 'right',
                    visualDescription: "Rahul presses keys quickly; the screen goes to a login wallpaper."
                  },
                  {
                    character: 'Amit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    text: 'Perfect. Fast, secure, and accountable.',
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Path verified. Proceed to next challenge.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_usb', label: 'Next: File Transfer', nextScene: 'device_decision_2' }]
                  }
                ]
              },
              {
                id: 'device_decision_2',
                title: 'Decision Point — File Transfer',
                panels: [
                  {
                    character: 'System',
                    text: 'Rahul needs to move files quickly. A personal USB is nearby.',
                    side: 'center',
                    visualDescription: "A generic black USB stick lies on the desk beside the work laptop.",
                    type: 'choice',
                    options: [
                      { id: 'opt_usb_personal', label: 'Use personal USB', nextScene: 'wrong_usb' },
                      { id: 'opt_usb_company', label: 'Use IT-approved USB', nextScene: 'correct_usb' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_usb',
                title: 'Consequence — Malware Risk',
                panels: [
                  {
                    character: 'Amit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    text: 'Unknown USBs can inject malware instantly.',
                    side: 'left',
                    visualDescription: "Red progress bar: 'System Infection Detected'."
                  },
                  {
                    character: 'System',
                    text: 'Outcome: System infection risk ↑',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_usb', label: 'Try Again', nextScene: 'device_decision_2' }]
                  }
                ]
              },
              {
                id: 'correct_usb',
                title: 'Correct — Approved Device',
                panels: [
                  {
                    character: 'Sonal',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    text: 'Approved devices are scanned and monitored.',
                    side: 'left',
                    visualDescription: "IT-issued USB with an 'Approved' sticker."
                  },
                  {
                    character: 'System',
                    text: 'Secure transfer confirmed. Proceeding...',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_home', label: 'Next: Home Usage', nextScene: 'device_decision_3' }]
                  }
                ]
              },
              {
                id: 'device_decision_3',
                title: 'Decision Point — Home Usage',
                panels: [
                  {
                    character: 'System',
                    text: 'Rahul’s nephew asks to use the work laptop for games.',
                    side: 'center',
                    visualDescription: "Living room setting; a child reaches for the work laptop.",
                    type: 'choice',
                    options: [
                      { id: 'opt_allow', label: 'Allow — supervised', nextScene: 'wrong_allow' },
                      { id: 'opt_deny', label: 'Deny politely', nextScene: 'correct_deny' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_allow',
                title: 'Consequence — Policy Violation',
                panels: [
                  {
                    character: 'Amit',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
                    text: 'Non-work usage introduces download and exposure risks.',
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: 'Outcome: Compliance breach. Organizational assets are for business only.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_home', label: 'Rewind', nextScene: 'device_decision_3' }]
                  }
                ]
              },
              {
                id: 'correct_deny',
                title: 'Correct — Official Use Only',
                panels: [
                  {
                    character: 'Rahul',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
                    text: 'Sorry, this is only for office work.',
                    side: 'right',
                    visualDescription: "Rahul gently closes the laptop lid."
                  },
                  {
                    character: 'System',
                    text: 'Boundary respected. Simulation finalizing.',
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'p_sum', label: 'Final Summary', nextScene: 'device_summary' }]
                  }
                ]
              },
              {
                id: 'device_summary',
                title: 'Key Takeaways',
                panels: [
                  {
                    character: 'Sonal',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sonal',
                    text: 'Lock screens, use approved devices, and restrict personal usage.',
                    side: 'left',
                    visualDescription: "Summary slide showing Shield, Lock, and Laptop icons."
                  },
                  {
                    character: 'System',
                    text: 'Secure devices = secure data. Personal responsibility drives collective safety.',
                    side: 'center'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which action BEST protects company devices?",
          options: [
            "Sharing device access with trusted family",
            "Locking screens and using only approved peripherals",
            "Saving files to personal drives for speed"
          ],
          correctIndex: 1,
          explanation: "Security depends on access control, approved tools, and accountability—not convenience."
        }
      ]
    },
    {
      id: 'ss-m6',
      title: 'Module 6: “It’s Just Data… Or Is It?”',
      summary: 'Interactive simulation on protecting company and confidential data through real-world decision making.',
      order: 6,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Data Protection Decision Simulation',
            scenes: [
              {
                id: 'intro_data',
                title: 'Everyday Data Handling',
                panels: [
                  {
                    character: 'Nandita',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nandita',
                    text: "We handle sensitive information every day — often without realizing its impact.",
                    side: 'left',
                    visualDescription: "Office training room, slide reads 'Data = Asset'."
                  },
                  {
                    character: 'Kavya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya',
                    text: "But it’s just spreadsheets and emails most of the time.",
                    side: 'right'
                  },
                  {
                    character: 'Suresh',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
                    text: "And those spreadsheets contain customer identities, payroll data, and contracts.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'scenario_email',
                title: 'Scenario — The Shortcut',
                panels: [
                  {
                    character: 'System',
                    text: "Kavya needs to send a customer file urgently but the company VPN is slow.",
                    side: 'center'
                  }
                ]
              },
              {
                id: 'decision_send',
                title: 'Decision Point — File Transfer',
                panels: [
                  {
                    character: 'System',
                    text: "What should she do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_personal_email', label: 'Send from personal Gmail', nextScene: 'wrong_personal_email' },
                      { id: 'opt_wait_vpn', label: 'Wait and send via company system', nextScene: 'correct_vpn' },
                      { id: 'opt_whatsapp', label: 'Send via WhatsApp', nextScene: 'wrong_whatsapp' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_personal_email',
                title: 'Consequence — Loss of Control',
                panels: [
                  {
                    character: 'Suresh',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
                    text: "Personal email removes audit trails and encryption safeguards.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Data governance violated.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind1', label: 'Try Again', nextScene: 'decision_send' }]
                  }
                ]
              },
              {
                id: 'wrong_whatsapp',
                title: 'Consequence — Unrecoverable Leak',
                panels: [
                  {
                    character: 'Nandita',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nandita',
                    text: "Consumer messaging apps lack enterprise compliance controls.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Potential regulatory breach.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind2', label: 'Retry Decision', nextScene: 'decision_send' }]
                  }
                ]
              },
              {
                id: 'correct_vpn',
                title: 'Correct — Secure Channel',
                panels: [
                  {
                    character: 'Kavya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya',
                    text: "I’ll wait. Security over speed.",
                    side: 'right'
                  },
                  {
                    character: 'Suresh',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
                    text: "Delays are temporary. Breaches are permanent.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'decision_physical',
                title: 'Decision Point — Physical Documents',
                panels: [
                  {
                    character: 'System',
                    text: "Later, Kavya prints confidential contracts. Lunch break arrives.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_desk_leave', label: 'Leave on desk', nextScene: 'wrong_desk' },
                      { id: 'opt_lock_drawer', label: 'Lock drawer', nextScene: 'correct_drawer' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_desk',
                title: 'Consequence — Visual Exposure',
                panels: [
                  {
                    character: 'Nandita',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nandita',
                    text: "Unauthorized viewing counts as a breach.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Confidentiality compromised.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind3', label: 'Rewind', nextScene: 'decision_physical' }]
                  }
                ]
              },
              {
                id: 'correct_drawer',
                title: 'Correct — Physical Safeguard',
                panels: [
                  {
                    character: 'Suresh',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
                    text: "Digital security means nothing if physical access is careless.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'decision_reporting',
                title: 'Decision Point — Suspicion',
                panels: [
                  {
                    character: 'System',
                    text: "Kavya accidentally emails the wrong recipient but notices instantly.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_ignore_mistake', label: 'Hope they delete it', nextScene: 'wrong_ignore_mistake' },
                      { id: 'opt_report_it', label: 'Report immediately', nextScene: 'correct_report' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_ignore_mistake',
                title: 'Consequence — Escalated Damage',
                panels: [
                  {
                    character: 'Suresh',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
                    text: "Unreported breaches multiply damage silently.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Legal exposure increased.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind4', label: 'Retry', nextScene: 'decision_reporting' }]
                  }
                ]
              },
              {
                id: 'correct_report',
                title: 'Correct — Early Containment',
                panels: [
                  {
                    character: 'Nandita',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nandita',
                    text: "Early reporting enables recall, encryption, and legal mitigation.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'summary_data',
                title: 'Key Takeaway',
                panels: [
                  {
                    character: 'System',
                    text: "Data protection = Digital + Physical + Behavioral Security.",
                    side: 'center'
                  },
                  {
                    character: 'Suresh',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh',
                    text: "Security failures rarely come from complexity — they come from shortcuts.",
                    side: 'left'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which principle best defines secure data handling?",
          options: [
            "Speed over security",
            "Security only for IT teams",
            "Security in every decision and medium"
          ],
          correctIndex: 2,
          explanation: "Data protection is behavioral, digital, and physical. Responsibility is shared — not delegated."
        }
      ]
    },
    {
      id: 'ss-m7',
      title: 'Module 7: Secure Coding & Vulnerability Awareness (Video)',
      summary: 'Understanding common vulnerabilities and safe coding practices through guided video learning.',
      order: 7,
      duration: '35 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Secure Coding Practices — Training Video',
          instructions: 'Watch this training session to understand common software vulnerabilities, safe coding patterns, and how to maintain code integrity. Completion is required to proceed.',
          videoUrl: 'PLACEHOLDER_VIDEO_URL_REPLACE_LATER'
        },
        {
          type: 'check',
          question: "Have you watched the entire Secure Coding Practices video?",
          options: [
            "No, I skipped parts.",
            "Yes, I completed it fully."
          ],
          correctIndex: 1,
          explanation: "You must complete the training video before attempting the knowledge checks."
        },
        {
          type: 'check',
          question: "Which action best prevents SQL Injection vulnerabilities?",
          options: [
            "Using long passwords",
            "Parameterized queries and input validation",
            "Hiding database error messages only",
            "Increasing server RAM"
          ],
          correctIndex: 1,
          explanation: "Parameterized queries separate code from data, preventing malicious input execution."
        },
        {
          type: 'check',
          question: "Why is regular dependency updating critical in software projects?",
          options: [
            "To reduce file size",
            "To gain new UI features",
            "To patch known security vulnerabilities",
            "To improve internet speed"
          ],
          correctIndex: 2,
          explanation: "Outdated libraries often contain publicly known vulnerabilities that attackers exploit."
        },
        {
          type: 'check',
          question: "A developer discovers a vulnerability right before release. What is the BEST action?",
          options: [
            "Ignore it to meet deadlines",
            "Document it and fix later",
            "Report immediately and delay release if necessary",
            "Disable logs"
          ],
          correctIndex: 2,
          explanation: "Security risks outweigh release timelines. Immediate reporting prevents large-scale breaches."
        },
        {
          type: 'check',
          question: "Secure coding responsibility belongs to:",
          options: [
            "Only the Security Team",
            "Only Senior Developers",
            "Every engineer and reviewer involved in the lifecycle"
          ],
          correctIndex: 2,
          explanation: "Security must be embedded at every stage — design, coding, testing, and deployment."
        }
      ]
    },
    {
      id: 'ss-m8',
      title: 'Module 8: Advanced Security Practices (Video Module)',
      summary: 'Video-based learning with post-view logic validation.',
      order: 8,
      duration: '30 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Advanced Security Practices',
          instructions: 'This video covers encryption, network security, incident escalation, and real-world breach case studies.',
          videoUrl: 'https://placeholder-url.com/ss-m8-video'
        },
        {
          type: 'check',
          question: "An employee downloads an open-source library without verifying its origin. What is the PRIMARY risk?",
          options: [
            "Slower application performance",
            "Unauthorized access through embedded malicious code",
            "License expiration issues"
          ],
          correctIndex: 1,
          explanation: "Unverified libraries can contain malware or backdoors. This is a supply-chain security threat."
        },
        {
          type: 'check',
          question: "Which action BEST reduces the impact of a ransomware attack?",
          options: [
            "Restarting the system repeatedly",
            "Maintaining encrypted offline backups",
            "Disabling antivirus temporarily"
          ],
          correctIndex: 1,
          explanation: "Offline, encrypted backups allow recovery without paying ransom or losing critical data."
        },
        {
          type: 'check',
          question: "A breach is suspected but not confirmed. What is the MOST secure first step?",
          options: [
            "Ignore until proof appears",
            "Immediately notify IT/Security team",
            "Delete all system logs"
          ],
          correctIndex: 1,
          explanation: "Early reporting enables containment and investigation before damage escalates."
        }
      ]
    },
    {
      id: 'ss-m9',
      title: 'Module 9: Roles & Responsibilities ("Security Is Everyone’s Job")',
      summary: 'Interactive branching simulation on shared accountability in software security.',
      order: 9,
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Security Is Everyone’s Job — Interactive Simulation',
            scenes: [
              {
                id: 'ss9_intro',
                title: 'The Morning Stand-Up',
                panels: [
                  {
                    character: 'Rohan',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
                    text: "I received a strange login email yesterday. I ignored it.",
                    side: 'right'
                  },
                  {
                    character: 'Sneha',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
                    text: "Ignored it? Why didn’t you report it?",
                    side: 'right'
                  },
                  {
                    character: 'Arvind',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arvind',
                    text: "This is actually the perfect example for today’s lesson.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'ss9_decision1',
                title: 'Decision Point — Suspicious Email',
                panels: [
                  {
                    character: 'System',
                    text: "You notice a suspicious login email. What do you do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_delete', label: 'Delete and move on', nextScene: 'ss9_wrong_delete' },
                      { id: 'opt_report', label: 'Report to IT Security immediately', nextScene: 'ss9_correct_report' },
                      { id: 'opt_click', label: 'Click link to check authenticity', nextScene: 'ss9_wrong_click' }
                    ]
                  }
                ]
              },
              {
                id: 'ss9_wrong_delete',
                title: 'Consequence — Silent Risk',
                panels: [
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Deleting hides the problem. Others may still be targeted.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Threat remains active.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind1', label: 'Try Again', nextScene: 'ss9_decision1' }]
                  }
                ]
              },
              {
                id: 'ss9_wrong_click',
                title: 'Consequence — Compromised Credentials',
                panels: [
                  {
                    character: 'Arvind',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arvind',
                    text: "Clicking unknown links can expose your login instantly.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Account breach risk increased.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind2', label: 'Rewind', nextScene: 'ss9_decision1' }]
                  }
                ]
              },
              {
                id: 'ss9_correct_report',
                title: 'Correct — Early Reporting',
                panels: [
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Good call. Reporting early protects the entire company.",
                    side: 'left'
                  },
                  {
                    character: 'Arvind',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arvind',
                    text: "Security works when employees act quickly.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'ss9_decision2',
                title: 'Decision Point — Manager Responsibility',
                panels: [
                  {
                    character: 'System',
                    text: "You are a manager. A team member reports a security doubt. What is your response?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_dismiss', label: 'Dismiss — “It’s probably nothing.”', nextScene: 'ss9_wrong_manager' },
                      { id: 'opt_support', label: 'Acknowledge and escalate to IT', nextScene: 'ss9_correct_manager' }
                    ]
                  }
                ]
              },
              {
                id: 'ss9_wrong_manager',
                title: 'Consequence — Discouraged Reporting',
                panels: [
                  {
                    character: 'Sneha',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
                    text: "If managers dismiss concerns, employees stop reporting.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Culture of silence formed.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind3', label: 'Try Supportive Approach', nextScene: 'ss9_decision2' }]
                  }
                ]
              },
              {
                id: 'ss9_correct_manager',
                title: 'Correct — Supportive Leadership',
                panels: [
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Managers set the tone. Encouragement increases security awareness.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'ss9_decision3',
                title: 'Decision Point — IT Response',
                panels: [
                  {
                    character: 'System',
                    text: "As IT Security, you detect suspicious login attempts. What next?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_ignore_it', label: 'Monitor silently', nextScene: 'ss9_wrong_it' },
                      { id: 'opt_alert_it', label: 'Notify affected users + enforce reset', nextScene: 'ss9_correct_it' }
                    ]
                  }
                ]
              },
              {
                id: 'ss9_wrong_it',
                title: 'Consequence — Delayed Action',
                panels: [
                  {
                    character: 'Arvind',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arvind',
                    text: "Delay increases breach likelihood.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Threat window widened.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind4', label: 'Act Proactively', nextScene: 'ss9_decision3' }]
                  }
                ]
              },
              {
                id: 'ss9_correct_it',
                title: 'Correct — Proactive Defense',
                panels: [
                  {
                    character: 'Arvind',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arvind',
                    text: "Immediate alerts and resets reduce risk dramatically.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'ss9_summary',
                title: 'Shared Accountability',
                panels: [
                  {
                    character: 'Priya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
                    text: "Employees notice. Managers support. IT protects.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Security succeeds only when all roles act responsibly.",
                    side: 'center'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which statement BEST describes software security responsibility?",
          options: [
            "Only IT is responsible",
            "Employees and managers handle culture, IT handles systems",
            "Security is shared across all roles"
          ],
          correctIndex: 2,
          explanation: "Security effectiveness depends on collaboration between employees, managers, and IT. No single role can ensure protection alone."
        }
      ]
    }
  ],
  assessment: [
    {
      id: 'ssq1',
      text: 'A developer pushes API keys to a public Git repository by mistake but deletes it within 10 minutes. What is the MOST correct action?',
      options: [
        'Do nothing since it was removed quickly',
        'Rotate all exposed keys immediately and audit access logs',
        'Only inform the project manager',
        'Wait to see if any misuse occurs'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq2',
      text: 'A QA engineer downloads production data locally for testing convenience. Which risk is MOST critical?',
      options: [
        'Performance slowdown',
        'Unauthorized data exposure and compliance breach',
        'Version mismatch',
        'Testing delay'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq3',
      text: 'An employee receives a password reset request email from “IT Support” with a shortened URL. Best response?',
      options: [
        'Click link but change password later',
        'Forward to colleagues asking if it’s real',
        'Report phishing and avoid clicking',
        'Ignore permanently'
      ],
      correctAnswer: 2
    },
    {
      id: 'ssq4',
      text: 'Case: A manager asks a developer to bypass security review to meet deadline. Proper action?',
      options: [
        'Comply silently',
        'Delay project indefinitely',
        'Escalate risk and document decision',
        'Disable security features temporarily'
      ],
      correctAnswer: 2
    },
    {
      id: 'ssq5',
      text: 'Which practice MOST reduces lateral movement after a breach?',
      options: [
        'Strong Wi-Fi password',
        'Role-based access control and least privilege',
        'Daily stand-ups',
        'Code formatting tools'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq6',
      text: 'Case: A laptop with VPN access is stolen from a café. First response?',
      options: [
        'Buy a new laptop',
        'Change wallpaper remotely',
        'Immediately report and revoke credentials',
        'Wait 24 hours'
      ],
      correctAnswer: 2
    },
    {
      id: 'ssq7',
      text: 'Which password pattern is MOST secure?',
      options: [
        'Company@123',
        'John1999!',
        'Unique passphrase with symbols and length >14',
        'Password1'
      ],
      correctAnswer: 2
    },
    {
      id: 'ssq8',
      text: 'Case: A contractor requests admin rights “temporarily.” Correct response?',
      options: [
        'Grant full access',
        'Share your credentials',
        'Provide limited, time-bound access approval',
        'Ignore request'
      ],
      correctAnswer: 2
    },
    {
      id: 'ssq9',
      text: 'Primary risk of using personal USB devices?',
      options: [
        'Slow transfer speed',
        'Malware and unauthorized data extraction',
        'Device heating',
        'Battery drain'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq10',
      text: 'Case: Logs show repeated failed logins from foreign IPs. IT should?',
      options: [
        'Ignore if system still works',
        'Notify users, enforce resets, block IPs',
        'Only inform finance',
        'Delete logs'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq11',
      text: 'Secure coding principle MOST related to preventing injection attacks?',
      options: [
        'Input validation and sanitization',
        'Dark mode UI',
        'Compression algorithms',
        'File naming conventions'
      ],
      correctAnswer: 0
    },
    {
      id: 'ssq12',
      text: 'Case: An intern emails client data to personal Gmail to “work faster.” Correct action?',
      options: [
        'Praise initiative',
        'Report incident and remove data',
        'Ignore once',
        'Ask to encrypt Gmail'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq13',
      text: 'Two-Factor Authentication primarily protects against?',
      options: [
        'Hardware failure',
        'Credential theft',
        'Slow networks',
        'Software bugs'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq14',
      text: 'Case: A team stores secrets in a shared spreadsheet. Best remediation?',
      options: [
        'Rename file',
        'Move to encrypted secret manager',
        'Limit editing rights only',
        'Password protect sheet'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq15',
      text: 'Greatest risk of unattended unlocked workstation?',
      options: [
        'Screen burn-in',
        'Unauthorized actions under your identity',
        'Battery drain',
        'Keyboard wear'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq16',
      text: 'Case: Production logs contain user PII. Correct step?',
      options: [
        'Archive logs publicly',
        'Mask or anonymize sensitive fields',
        'Delete all logs permanently',
        'Share with marketing'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq17',
      text: 'Principle ensuring users access only what they need?',
      options: [
        'Open Access',
        'Least Privilege',
        'Full Trust',
        'Shared Credentials'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq18',
      text: 'Case: Developer disables HTTPS for debugging and forgets to re-enable. Primary consequence?',
      options: [
        'Lower CPU usage',
        'Exposure to interception and data theft',
        'Better SEO',
        'Faster testing'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq19',
      text: 'Most effective defense against phishing?',
      options: [
        'Strong firewall alone',
        'Employee awareness + reporting culture',
        'Bigger monitors',
        'Frequent password reuse'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq20',
      text: 'Case: Former employee account still active. Risk?',
      options: [
        'Low disk space',
        'Unauthorized system access',
        'Slow login times',
        'UI glitches'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq21',
      text: 'Secure file disposal method?',
      options: [
        'Regular trash bin',
        'Secure shredding or encrypted wipe',
        'Desktop folder deletion',
        'Email to self'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq22',
      text: 'Case: Manager discourages reporting minor incidents. Long-term effect?',
      options: [
        'Faster delivery',
        'Culture of silence increasing breach probability',
        'Reduced costs',
        'Higher morale'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq23',
      text: 'Why rotate API keys regularly?',
      options: [
        'Improve UI',
        'Limit exposure window after compromise',
        'Reduce latency',
        'Enhance visuals'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq24',
      text: 'Case: Using public Wi-Fi without VPN to access company CRM leads to?',
      options: [
        'Improved speed',
        'Traffic interception risk',
        'Automatic encryption',
        'Better battery life'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq25',
      text: 'Primary purpose of audit logs?',
      options: [
        'Decorative analytics',
        'Traceability and incident investigation',
        'Storage testing',
        'UI metrics'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq26',
      text: 'Case: Developer copies production DB to local machine. Correct approach?',
      options: [
        'Encrypt laptop only',
        'Use anonymized or synthetic data instead',
        'Share with teammates',
        'Upload to personal cloud'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq27',
      text: 'Which behavior weakens security MOST?',
      options: [
        'Screen locking',
        'Password sharing with colleagues',
        'Using MFA',
        'Reporting incidents early'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq28',
      text: 'Case: Suspicious USB found in office parking. Proper action?',
      options: [
        'Plug in to identify owner',
        'Hand over to IT/security team',
        'Keep it',
        'Throw in trash'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq29',
      text: 'Goal of DevSecOps?',
      options: [
        'Remove testing',
        'Integrate security into every development stage',
        'Reduce documentation',
        'Eliminate reviews'
      ],
      correctAnswer: 1
    },
    {
      id: 'ssq30',
      text: 'Case: Multiple small ignored alerts later lead to breach. Core lesson?',
      options: [
        'Alerts are optional',
        'Early detection and response prevent escalation',
        'Only large incidents matter',
        'Security slows productivity'
      ],
      correctAnswer: 1
    }
  ]
};

export default softwareSecurityConcerns;