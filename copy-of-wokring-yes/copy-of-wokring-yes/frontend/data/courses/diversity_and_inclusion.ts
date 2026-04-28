import { Course } from '../../types';

const diversityAndInclusion: Course = {
  id: 'diversity-inclusion-2024',
  title: 'Diversity and Inclusion',
  description: 'Fostering a workspace where unique perspectives thrive and every voice is heard.',
  category: 'Corporate Culture',
  duration: '90 mins',
  icon: '🌈',
  colorTheme: 'violet',
  modules: [
    {
      id: 'di-m1',
      title: 'Module 1: Unconscious Bias',
      summary: 'Identifying and mitigating the hidden biases we all carry.',
      order: 1,
      duration: '10 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Introduction to Unconscious Bias',
          videoUrl: 'https://example.com/placeholder-diversity-video.mp4',
          instructions: 'This is a placeholder video for Module 1: Unconscious Bias. Replace this video URL after exporting your Google AI Studio project.'
        },
        {
          type: 'check',
          question: 'What is the biggest risk of unconscious bias in a diverse workplace?',
          options: [
            'It only affects new employees and not long-term teams.',
            'It influences decisions without us realizing, impacting fairness and inclusion.',
            'It has no real impact if the team communicates regularly.'
          ],
          correctIndex: 1,
          explanation: 'Correct! Unconscious bias is dangerous precisely because it operates without awareness, affecting decisions, opportunities, and inclusion.'
        },
        {
          type: 'text',
          body: "Inclusion is an active choice we make every day in our interactions."
        }
      ]
    },
    {
      id: 'di-m3',
      title: 'Module 3: Respectful Dialogue & Inclusion',
      summary: 'Mastering inclusive teamwork and respectful communication in a diverse group.',
      order: 3,
      duration: '20 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Inclusive Teamwork Simulation',
            scenes: [{
              title: 'The Meeting Room',
              panels: [
                {
                  character: 'Karan',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt',
                  text: "Before we decide, I’d like to hear ideas from everyone.",
                  side: 'left',
                  visualDescription: "Director’s Note: Karan stands at the conference table, encouraging open discussion."
                },
                {
                  character: 'Vikram',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&top=shortHair&clothing=shirt',
                  text: "We should focus on finishing this quickly to meet the deadline.",
                  side: 'right'
                },
                {
                  character: 'Karan',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt',
                  text: "Thanks, Vikram. Ananya, what’s your view?",
                  side: 'left'
                },
                {
                  character: 'Ananya',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&top=longHair&clothing=blazer',
                  text: "Speed is important, but accuracy matters too. We can balance both.",
                  side: 'right'
                },
                {
                  character: 'Karan',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt',
                  text: "That’s a good point. Let’s consider both perspectives.",
                  side: 'left',
                  visualDescription: "Director’s Note: Karan notes down both ideas to help the team evaluate options fairly."
                },
                {
                  character: 'Vikram',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&top=shortHair&clothing=shirt',
                  text: "I didn’t think about accuracy earlier. Your suggestion makes sense.",
                  side: 'right',
                  visualDescription: "Director’s Note: Vikram looks toward Ananya with appreciation."
                },
                {
                  character: 'Ananya',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&top=longHair&clothing=blazer',
                  text: "I’m glad we discussed it openly.",
                  side: 'right'
                },
                {
                  character: 'Vikram',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&top=shortHair&clothing=shirt',
                  text: "We don’t really need more discussion. Let’s just move ahead.",
                  side: 'right',
                  visualDescription: "Director’s Note: Vikram dismisses further input, unintentionally cutting Ananya off."
                },
                {
                  character: 'Ananya',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&top=longHair&clothing=blazer',
                  text: "…Okay.",
                  side: 'right',
                  visualDescription: "Director’s Note: Ananya looks slightly uncomfortable but stays silent."
                },
                {
                  character: 'Karan',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt',
                  text: "Let’s pause. Everyone’s input is important. Respectful discussion helps us do better work.",
                  side: 'left',
                  visualDescription: "Director’s Note: Karan gently steps in to address the imbalance in the conversation."
                },
                {
                  character: 'Vikram',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&top=shortHair&clothing=shirt',
                  text: "You’re right. Sorry for cutting you off, Ananya.",
                  side: 'right'
                },
                {
                  character: 'Ananya',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&top=longHair&clothing=blazer',
                  text: "Thanks for saying that.",
                  side: 'right'
                },
                {
                  character: 'Karan',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt',
                  text: "Let’s revisit your point, Ananya. Anything you’d like to add before we decide?",
                  side: 'left',
                  visualDescription: "Director’s Note: Karan reopens the space for equal participation."
                },
                {
                  character: 'Ananya',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&top=longHair&clothing=blazer',
                  text: "I think if we combine Vikram’s sense of urgency with a quick quality check, we’ll deliver well and on time.",
                  side: 'right'
                },
                {
                  character: 'Karan',
                  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&top=shortHair&clothing=shirt',
                  text: "Great suggestion. It balances efficiency and accuracy.",
                  side: 'left'
                }
              ]
            }]
          }
        }
      ]
    },
    {
      id: 'di-m5',
      title: 'Module 5: Fairness, Transparency & Equal Opportunity',
      summary: 'A branching comic simulation where employees navigate transparency, fairness, and equal access to opportunity.',
      order: 5,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Transparency & Decision-Making Simulation (Branching Edition)',
            scenes: [
              {
                id: 'm5_s1',
                title: 'The Announcement',
                panels: [
                  {
                    character: "Neha (Team Lead)",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "We have an upcoming leadership training program. Selection will be based on performance and role requirements.",
                    side: "left",
                    visualDescription: "Director's Note: Neha stands before her team in the open workspace."
                  },
                  {
                    character: "Siddharth",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
                    text: "Will the selection criteria be shared with everyone?",
                    side: "right"
                  },
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "Of course. The criteria will be common for all eligible team members.",
                    side: "left"
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
                    text: "That sounds fair. Transparency helps clear confusion early.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION 1: Siddharth feels he wasn’t considered for a past project. What should he do?",
                    options: [
                      { id: "dp1_correct", label: "A: Speak with Neha now and raise the concern respectfully.", nextScene: "dp1_correct_scene" },
                      { id: "dp1_wrongA", label: "B: Stay silent—he assumes decisions are already final.", nextScene: "dp1_wrongA_scene" },
                      { id: "dp1_wrongB", label: "C: Complain to colleagues privately about being overlooked.", nextScene: "dp1_wrongB_scene" }
                    ]
                  }
                ]
              },
              {
                id: "dp1_correct_scene",
                title: "DP1 Correct",
                panels: [
                  {
                    character: "Siddharth",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
                    text: "Neha, I wanted to ask—why wasn’t I informed about the client project last week?",
                    side: "right"
                  },
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "That’s a fair question. We should have communicated that more transparently. I appreciate you raising it.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Issue resolved transparently. Next step?",
                    options: [{ id: "m5_c1", label: "Return to Story", nextScene: "dp1_return_scene" }]
                  }
                ]
              },
              {
                id: "dp1_wrongA_scene",
                title: "DP1 Wrong A",
                panels: [
                  {
                    character: "Siddharth",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
                    text: "(thinking) Maybe it doesn’t matter. I’ll just ignore it…",
                    side: "right"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "Avoiding conversations leads to silent disengagement and erodes trust.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Silence breeds resentment. Try speaking up?",
                    options: [{ id: "m5_r1", label: "Rewind", nextScene: "m5_s1" }]
                  }
                ]
              },
              {
                id: "dp1_wrongB_scene",
                title: "DP1 Wrong B",
                panels: [
                  {
                    character: "Siddharth",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
                    text: "Can you believe Neha didn’t even consider me? This is so biased.",
                    side: "right"
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
                    text: "Siddharth… venting to us won’t solve it. You should talk to Neha directly.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Office gossip damages culture. Choose direct communication?",
                    options: [{ id: "m5_r2", label: "Rewind", nextScene: "m5_s1" }]
                  }
                ]
              },
              {
                id: "dp1_return_scene",
                title: "Return to Story",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "Going forward, all project opportunities will be shared openly.",
                    side: "left"
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
                    text: "That will build more trust in the team.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION 2: Neha must choose between two employees for an urgent client assignment. How should she decide?",
                    options: [
                      { id: "dp2_wrongA", label: "A: Pick the one she personally prefers working with.", nextScene: "dp2_wrongA_scene" },
                      { id: "dp2_correct", label: "B: Use objective criteria—skills, availability, and metrics.", nextScene: "dp2_correct_scene" },
                      { id: "dp2_wrongB", label: "C: Choose randomly to appear “neutral”.", nextScene: "dp2_wrongB_scene" }
                    ]
                  }
                ]
              },
              {
                id: "dp2_correct_scene",
                title: "DP2 Correct",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "I’ll evaluate skills, past performance, and who is available. That ensures fairness.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Objective fairness achieved. Continue?",
                    options: [{ id: "m5_c2", label: "Back to Story", nextScene: "dp2_return_scene" }]
                  }
                ]
              },
              {
                id: "dp2_wrongA_scene",
                title: "DP2 Wrong A",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "(thinking) I’ll pick the person I’m more comfortable with…",
                    side: "left"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "Personal preference leads to unconscious bias and perceived favoritism.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Favoritism detected. Try a criteria-based method?",
                    options: [{ id: "m5_r3", label: "Rewind", nextScene: "dp1_return_scene" }]
                  }
                ]
              },
              {
                id: "dp2_wrongB_scene",
                title: "DP2 Wrong B",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "(thinking) Random selection avoids bias, right…?",
                    side: "left"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "Random choices are equally unfair—decisions must be based on relevant criteria.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Randomness overlooks competence. Try again?",
                    options: [{ id: "m5_r4", label: "Rewind", nextScene: "dp1_return_scene" }]
                  }
                ]
              },
              {
                id: "dp2_return_scene",
                title: "Back to Story",
                panels: [
                  {
                    character: "Siddharth",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
                    text: "Objective criteria feel reassuring. It keeps things predictable.",
                    side: "right"
                  },
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "Exactly. That’s how we build equitable systems.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION 3: Only two employees applied for a training due to unclear communication. What should Neha do?",
                    options: [
                      { id: "dp3_wrongA", label: "A: Proceed anyway—others should have asked.", nextScene: "dp3_wrongA_scene" },
                      { id: "dp3_correct", label: "B: Reopen the application and clarify the communication to everyone.", nextScene: "dp3_correct_scene" },
                      { id: "dp3_wrongB", label: "C: Ask her favorite employee privately if they want to join.", nextScene: "dp3_wrongB_scene" }
                    ]
                  }
                ]
              },
              {
                id: "dp3_correct_scene",
                title: "DP3 Correct",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "I’ll resend the announcement clearly. Everyone deserves equal access.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Equal opportunity reinforced. Finish module?",
                    options: [{ id: "m5_c3", label: "Go to Summary", nextScene: "module5_end_scene" }]
                  }
                ]
              },
              {
                id: "dp3_wrongA_scene",
                title: "DP3 Wrong A",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "I'll just proceed…",
                    side: "left"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "This results in unequal opportunity and potential grievances later.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Communication gaps lead to exclusion. Try again?",
                    options: [{ id: "m5_r5", label: "Rewind", nextScene: "dp2_return_scene" }]
                  }
                ]
              },
              {
                id: "dp3_wrongB_scene",
                title: "DP3 Wrong B",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "(thinking) Maybe I’ll ask someone privately…",
                    side: "left"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "Private invitations undermine fairness and can be interpreted as favoritism.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Favoritism undermines trust. Try a transparent path?",
                    options: [{ id: "m5_r6", label: "Rewind", nextScene: "dp2_return_scene" }]
                  }
                ]
              },
              {
                id: "module5_end_scene",
                title: "Module Summary",
                panels: [
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "Fairness and transparency are the foundation of workplace trust.",
                    side: "left"
                  },
                  {
                    character: "Pooja",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
                    text: "Open communication really makes processes feel unbiased.",
                    side: "right"
                  },
                  {
                    character: "Siddharth",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
                    text: "Equal opportunity helps everyone feel valued and motivated.",
                    side: "right"
                  },
                  {
                    character: "Neha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
                    text: "Exactly. Fair systems build strong, inclusive teams.",
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
      id: 'di-m6',
      title: 'Module 6: Inclusive Behaviours at Work (Video Learning)',
      summary: 'A video-based learning module exploring inclusive behaviours, workplace respect, and everyday actions that shape team culture.',
      order: 6,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Placeholder Video: Inclusive Behaviours at Work',
          videoUrl: 'https://example.com/placeholder_video.mp4',
          instructions: 'This is a placeholder video. The final training video will be inserted after export from Google AI Studio. Note: Completion is required to proceed to the scenarios.'
        },
        {
          type: 'check',
          question: "Scenario 1: During a team discussion, two employees dominate the conversation while others appear hesitant to speak. As the meeting lead, what is the MOST inclusive action?",
          options: [
            "Allow the conversation to flow naturally—participation depends on individual confidence.",
            "Pause the discussion, invite input from quieter members, and ensure psychological safety.",
            "End the discussion quickly to avoid discomfort and move to the next agenda point."
          ],
          correctIndex: 1,
          explanation: "Correct! Inclusive leaders intentionally create space for quieter voices. Allowing the conversation to flow unchecked reinforces imbalance, while shutting it down avoids the real issue."
        },
        {
          type: 'check',
          question: "Scenario 2: A team member shares that they felt excluded from an informal group discussion where key decisions were influenced. What is the MOST appropriate immediate response?",
          options: [
            "Tell them not to worry—informal conversations are normal in the workplace.",
            "Acknowledge their concern, apologise for the oversight, and commit to ensuring decisions are made transparently.",
            "Advise them to be more assertive next time so they don't miss out."
          ],
          correctIndex: 1,
          explanation: "Correct! Inclusion requires awareness of how informal influence affects fairness. Validating concerns and creating transparent decision processes builds trust and equal opportunity."
        }
      ]
    },
    {
      id: 'di-m7',
      title: 'Module 7: Inclusive Communication & Collaboration',
      summary: 'Building equitable communication, active listening, and inclusive collaboration habits through branching scenarios.',
      order: 7,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Inclusive Collaboration Simulation',
            scenes: [
              {
                id: "m7_s1",
                title: "The Strategy Session Begins",
                panels: [
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Before we finalize the plan, I want everyone to share their thoughts.",
                    side: "left",
                    visualDescription: "Director’s Note: Team sits around a conference table. Ritika opens the meeting with an inclusive cue."
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
                    text: "I think the timeline needs a slight adjustment. It’s too tight.",
                    side: "right"
                  },
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Thanks, Arjun. Sameer, what’s your view?",
                    side: "left"
                  },
                  {
                    character: "Sameer",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                    text: "I agree. And we should divide tasks based on strengths.",
                    side: "right"
                  },
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Great point. Skill-based task allocation can improve fairness.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION 1: Vikram interrupts mid-discussion: “We don’t need so much talk. Let’s just move ahead.” What should Ritika do?",
                    options: [
                      { id: "m7_dp1_a", label: "A: Move forward quickly — efficiency matters.", nextScene: "m7_path1A_wrong" },
                      { id: "m7_dp1_b", label: "B: Acknowledge Vikram, but reopen space for others so all voices are heard.", nextScene: "m7_path1B_correct" },
                      { id: "m7_dp1_c", label: "C: Ask only senior members for input to save time.", nextScene: "m7_path1C_wrong" }
                    ]
                  }
                ]
              },
              {
                id: "m7_path1B_correct",
                title: "Correct Response",
                panels: [
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Let’s pause. I appreciate the urgency, Vikram — but everyone’s input matters.",
                    side: "left"
                  },
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Sameer, your point was interrupted. Please go on.",
                    side: "left"
                  },
                  {
                    character: "Vikram",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
                    text: "You're right. Sorry for jumping in.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Inclusion reinforced. Rejoining main story...",
                    options: [{ id: "m7_c1", label: "Continue", nextScene: "m7_return_1" }]
                  }
                ]
              },
              {
                id: "m7_path1A_wrong",
                title: "Wrong Path: Efficiency Over Inclusion",
                panels: [
                  {
                    character: "Sameer",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                    text: "It’s okay… I guess.",
                    side: "right",
                    visualDescription: "Director’s Note: Sameer looks discouraged."
                  },
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Let’s move ahead then.",
                    side: "left"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "The team proceeds — but Sameer feels sidelined. Trust begins to weaken.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Exclusion creates silent disengagement. Try again?",
                    options: [{ id: "m7_r1", label: "Rewind", nextScene: "m7_s1" }]
                  }
                ]
              },
              {
                id: "m7_path1C_wrong",
                title: "Wrong Path: Prioritizing Hierarchy",
                panels: [
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Let’s hear only from senior members for now.",
                    side: "left"
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
                    text: "But the juniors are handling most tasks…",
                    side: "right"
                  },
                  {
                    character: "Director’s Note",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                    text: "Excluding certain voices reinforces bias and weakens collaboration.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Hierarchy should not silence contribution. Try again?",
                    options: [{ id: "m7_r2", label: "Rewind", nextScene: "m7_s1" }]
                  }
                ]
              },
              {
                id: "m7_return_1",
                title: "Back to Main Story",
                panels: [
                  {
                    character: "Sameer",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                    text: "I appreciate the space to share. My point is about distributing work more fairly.",
                    side: "right"
                  },
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Good. Balanced contribution helps everyone succeed.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION 2: Later, Sameer hesitates and says: “I felt my idea got missed earlier.” What should Ritika do?",
                    options: [
                      { id: "m7_dp2_a", label: "A: Revisit Sameer’s idea and create space for him to speak again.", nextScene: "m7_path2A_correct" },
                      { id: "m7_dp2_b", label: "B: Encourage him to speak next time but move forward now.", nextScene: "m7_path2B_wrong" },
                      { id: "m7_dp2_c", label: "C: Ask Arjun to evaluate Sameer’s idea privately later.", nextScene: "m7_path2C_wrong" }
                    ]
                  }
                ]
              },
              {
                id: "m7_path2A_correct",
                title: "Correct Response",
                panels: [
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Thanks for speaking up, Sameer. Let’s revisit your point right now.",
                    side: "left"
                  },
                  {
                    character: "Sameer",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                    text: "I think adjusting load based on strengths will ease pressure on the team.",
                    side: "right"
                  },
                  {
                    character: "Arjun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
                    text: "I agree — that will help us hit deadlines more effectively.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "Equitable decision validated. Continue?",
                    options: [{ id: "m7_c2", label: "Continue", nextScene: "m7_return_2" }]
                  }
                ]
              },
              {
                id: "m7_path2B_wrong",
                title: "Wrong Path: Delaying Inclusion",
                panels: [
                  {
                    character: "Ritika",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                    text: "Let’s move ahead now, but speak up quickly next time.",
                    side: "left"
                  },
                  {
                    character: "Sameer",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                    text: "...Sure.",
                    side: "right",
                    visualDescription: "Director’s Note: Sameer withdraws, feeling unheard again."
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Delaying inclusion is denying it. Try again?",
                      options: [{ id: "m7_r3", label: "Rewind", nextScene: "m7_return_1" }]
                    }
                  ]
                },
                {
                  id: "m7_path2C_wrong",
                  title: "Wrong Path: Private Handling",
                  panels: [
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Arjun, please review Sameer’s suggestion later.",
                      side: "left"
                    },
                    {
                      character: "Sameer",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                      text: "It’s okay… never mind.",
                      side: "right"
                    },
                    {
                      character: "Director’s Note",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                      text: "Handling concerns privately avoids the real issue — lack of open communication.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Open issues require open resolution. Try again?",
                      options: [{ id: "m7_r4", label: "Rewind", nextScene: "m7_return_1" }]
                    }
                  ]
                },
                {
                  id: "m7_return_2",
                  title: "Back to Main Story",
                  panels: [
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Let’s align tasks based on skill, bandwidth, and fairness.",
                      side: "left"
                    },
                    {
                      character: "Sameer",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                      text: "That feels more inclusive.",
                      side: "right"
                    },
                    {
                      character: "Arjun",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
                      text: "Agreed. This is a better plan.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "DECISION 3: How should Ritika reinforce psychological safety at the end of the meeting?",
                      options: [
                        { id: "m7_dp3_a", label: "A: Encourage everyone to share honest feedback regularly.", nextScene: "m7_path3A_correct" },
                        { id: "m7_dp3_b", label: "B: Conclude quickly since the plan is finalized.", nextScene: "m7_path3B_wrong" },
                        { id: "m7_dp3_c", label: "C: Only ask senior members for improvement suggestions.", nextScene: "m7_path3C_wrong" }
                      ]
                    }
                  ]
                },
                {
                  id: "m7_path3A_correct",
                  title: "Correct Response",
                  panels: [
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Before we close — if you ever feel unheard or uncomfortable, please raise it immediately. We grow when everyone contributes.",
                      side: "left"
                    },
                    {
                      character: "Sameer",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                      text: "That really helps. Thank you.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Psychological safety established. Proceeding to summary...",
                      options: [{ id: "m7_c3", label: "Finish Simulation", nextScene: "m7_end_module" }]
                    }
                  ]
                },
                {
                  id: "m7_path3B_wrong",
                  title: "Wrong Path: Rushing Closure",
                  panels: [
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Alright, we're done. Let’s move on.",
                      side: "left"
                    },
                    {
                      character: "Director’s Note",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                      text: "An abrupt close prevents concerns from surfacing, weakening inclusion.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Safety requires space. Try again?",
                      options: [{ id: "m7_r5", label: "Rewind", nextScene: "m7_return_2" }]
                    }
                  ]
                },
                {
                  id: "m7_path3C_wrong",
                  title: "Wrong Path: Flattened Participation",
                  panels: [
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Senior members, share any final thoughts?",
                      side: "left"
                    },
                    {
                      character: "Director’s Note",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Director",
                      text: "Limiting whose voice matters reinforces hierarchy and breaks psychological safety.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Safety is for the whole team. Try again?",
                      options: [{ id: "m7_r6", label: "Rewind", nextScene: "m7_return_2" }]
                    }
                  ]
                },
                {
                  id: "m7_end_module",
                  title: "Module Summary",
                  panels: [
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Inclusive communication means: equal participation, accountability, and safe spaces for honest feedback.",
                      side: "left"
                    },
                    {
                      character: "Arjun",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
                      text: "This process made our decisions stronger.",
                      side: "right"
                    },
                    {
                      character: "Sameer",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer",
                      text: "And it made me feel valued.",
                      side: "right"
                    },
                    {
                      character: "Ritika",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
                      text: "Great collaboration today. Let’s keep building an inclusive team culture.",
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
        id: 'di-m8',
        title: 'Module 8: Building Everyday Inclusive Behaviours',
        summary: 'Sustaining an inclusive workplace through consistent daily actions and recognition.',
        order: 8,
        duration: '15 mins',
        parts: [
          {
            type: 'comic',
            comicData: {
              title: 'Everyday Inclusion – Interactive Simulation',
              scenes: [
                {
                  id: "m8_s1",
                  title: 'Morning Huddle',
                  panels: [
                    {
                      character: "Amit",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit&top=shortHair&clothing=shirt",
                      text: "I want everyone here to feel comfortable sharing ideas and opinions.",
                      side: "left",
                      visualDescription: "Team gathered in a morning stand-up circle."
                    },
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha&top=longHair&clothing=blazer",
                      text: "That really helps. It’s easier to speak when we know we’ll be heard.",
                      side: "right"
                    },
                    {
                      character: "Kabir",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir&top=shortHair&clothing=shirt",
                      text: "Yes, it builds trust across the team.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "DECISION 1: Kabir wants to appreciate Nisha’s work. What should he do?",
                      options: [
                        { id: "m8_dp1_a", label: "A: Publicly acknowledge her specific contribution.", nextScene: "m8_path1_correct" },
                        { id: "m8_dp1_b", label: "B: Say nothing to avoid awkwardness.", nextScene: "m8_path1A_wrong" },
                        { id: "m8_dp1_c", label: "C: Send a private vague message later.", nextScene: "m8_path1B_wrong" }
                      ]
                    }
                  ]
                },
                {
                  id: "m8_path1_correct",
                  title: "Positive Recognition",
                  panels: [
                    {
                      character: "Kabir",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir",
                      text: "Nisha, your dashboard redesign improved clarity for the whole team. Thank you.",
                      side: "right"
                    },
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
                      text: "I appreciate that — it motivates me to keep improving.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Recognition strengthens engagement. Continue?",
                      options: [{ id: "m8_c1", label: "Continue", nextScene: "m8_return_1" }]
                    }
                  ]
                },
                {
                  id: "m8_path1A_wrong",
                  title: "Missed Opportunity",
                  panels: [
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
                      text: "I wasn’t sure if my work made a difference…",
                      side: "right"
                    },
                    {
                      character: "Director’s Note",
                      text: "Lack of recognition can reduce engagement and confidence.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Inaction can lead to disengagement. Try a positive approach?",
                      options: [{ id: "m8_r1", label: "Rewind", nextScene: "m8_s1" }]
                    }
                  ]
                },
                {
                  id: "m8_path1B_wrong",
                  title: "Low-Impact Feedback",
                  panels: [
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
                      text: "Thanks… I wish I knew what exactly worked.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Vague feedback is less helpful than specific praise. Try again?",
                      options: [{ id: "m8_r2", label: "Rewind", nextScene: "m8_s1" }]
                    }
                  ]
                },
                {
                  id: "m8_return_1",
                  title: "Back to Team Flow",
                  panels: [
                    {
                      character: "Amit",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                      text: "Recognition helps us grow collectively.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "DECISION 2: Nisha says she felt excluded yesterday. How should Amit respond?",
                      options: [
                        { id: "m8_dp2_a", label: "A: Acknowledge and invite her feedback.", nextScene: "m8_path2_correct" },
                        { id: "m8_dp2_b", label: "B: Say it wasn’t intentional and move on.", nextScene: "m8_path2A_wrong" },
                        { id: "m8_dp2_c", label: "C: Defend the team’s decision.", nextScene: "m8_path2B_wrong" }
                      ]
                    }
                  ]
                },
                {
                  id: "m8_path2_correct",
                  title: "Empathetic Response",
                  panels: [
                    {
                      character: "Amit",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                      text: "Thank you for sharing that. Let’s understand what happened and fix it.",
                      side: "left"
                    },
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
                      text: "I really appreciate being heard.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Empathy builds trust. Continue?",
                      options: [{ id: "m8_c2", label: "Continue", nextScene: "m8_return_2" }]
                    }
                  ]
                },
                {
                  id: "m8_path2A_wrong",
                  title: "Dismissive Response",
                  panels: [
                    {
                      character: "Director’s Note",
                      text: "Intent does not erase impact. Dismissal weakens trust.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Dismissing concerns prevents resolution. Try an empathetic path?",
                      options: [{ id: "m8_r3", label: "Rewind", nextScene: "m8_return_1" }]
                    }
                  ]
                },
                {
                  id: "m8_path2B_wrong",
                  title: "Defensive Response",
                  panels: [
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
                      text: "I didn’t mean to accuse anyone…",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Defensiveness shuts down open dialogue. Try again?",
                      options: [{ id: "m8_r4", label: "Rewind", nextScene: "m8_return_1" }]
                    }
                  ]
                },
                {
                  id: "m8_return_2",
                  title: "Team Alignment Continues",
                  panels: [
                    {
                      character: "Kabir",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir",
                      text: "Feedback helps us improve as a group.",
                      side: "right"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "DECISION 3: How should the team ensure inclusion continues daily?",
                      options: [
                        { id: "m8_dp3_a", label: "A: Conduct regular feedback loops and daily check-ins.", nextScene: "m8_path3_correct" },
                        { id: "m8_dp3_b", label: "B: Assume inclusion will continue automatically.", nextScene: "m8_path3A_wrong" },
                        { id: "m8_dp3_c", label: "C: Only address issues during annual reviews.", nextScene: "m8_path3B_wrong" }
                      ]
                    }
                  ]
                },
                {
                  id: "m8_path3_correct",
                  title: "Sustainable Practice",
                  panels: [
                    {
                      character: "Amit",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                      text: "We’ll schedule monthly feedback sessions and quick weekly check-ins.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Proactive habits verified. Finalize simulation?",
                      options: [{ id: "m8_c3", label: "Finish", nextScene: "m8_end" }]
                    }
                  ]
                },
                {
                  id: "m8_path3A_wrong",
                  title: "Passive Approach",
                  panels: [
                    {
                      character: "Director’s Note",
                      text: "Inclusion fades without active effort.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Inclusion is not automatic. Choose a proactive plan?",
                      options: [{ id: "m8_r5", label: "Rewind", nextScene: "m8_return_2" }]
                    }
                  ]
                },
                {
                  id: "m8_path3B_wrong",
                  title: "Delayed Action",
                  panels: [
                    {
                      character: "Director’s Note",
                      text: "Annual reviews are too infrequent to maintain culture.",
                      side: "left"
                    },
                    {
                      character: "System",
                      side: "center",
                      type: "choice",
                      text: "Culture requires frequent attention. Try again?",
                      options: [{ id: "m8_r6", label: "Rewind", nextScene: "m8_return_2" }]
                    }
                  ]
                },
                {
                  id: "m8_end",
                  title: "Conclusion – Everyday Inclusion",
                  panels: [
                    {
                      character: "Amit",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                      text: "Inclusion is built through daily intentional actions.",
                      side: "left"
                    },
                    {
                      character: "Nisha",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
                      text: "Recognition and empathy make a real difference.",
                      side: "right"
                    },
                    {
                      character: "Kabir",
                      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir",
                      text: "And everyone shares responsibility.",
                      side: "right"
                    }
                  ]
                }
              ]
            }
          },
          {
            type: 'check',
            question: "What sustains an inclusive culture most effectively?",
            options: [
              "Assuming it will continue naturally.",
              "Consistent daily actions and regular feedback loops."
            ],
            correctIndex: 1,
            explanation: "Inclusion is a continuous effort that requires consistent behavior and open communication."
          }
        ]
      }
    ],
    assessment: [
      {
        id: "diq1",
        text: "Which scenario BEST represents unconscious bias rather than intentional discrimination?",
        options: [
          "A manager openly refuses to hire women.",
          "A recruiter repeatedly selects candidates from the same university without noticing the pattern.",
          "An employee insults a colleague publicly.",
          "A supervisor threatens termination based on religion."
        ],
        correctAnswer: 1
      },
      {
        id: "diq2",
        text: "Affinity bias most often leads to:",
        options: [
          "Strict performance evaluations",
          "Preference for individuals with similar backgrounds or interests",
          "Random decision making",
          "Conflict resolution efficiency"
        ],
        correctAnswer: 1
      },
      {
        id: "diq3",
        text: "Psychological safety primarily ensures:",
        options: [
          "Employees avoid conflict",
          "Employees agree with leadership",
          "Employees feel safe expressing ideas without fear of punishment",
          "Employees work faster"
        ],
        correctAnswer: 2
      },
      {
        id: "diq4",
        text: "Case: During meetings, one employee consistently interrupts quieter team members. Productivity is high, but participation is low. What is the MOST effective intervention?",
        options: [
          "Ignore it since productivity is unaffected",
          "Privately coach the interrupter and set meeting participation norms",
          "Remove quieter members from meetings",
          "Reduce meeting duration"
        ],
        correctAnswer: 1
      },
      {
        id: "diq5",
        text: "Tokenism differs from inclusion because tokenism:",
        options: [
          "Increases representation",
          "Focuses on symbolic presence without meaningful participation",
          "Encourages diversity initiatives",
          "Promotes leadership accountability"
        ],
        correctAnswer: 1
      },
      {
        id: "diq6",
        text: "A diversity initiative fails when:",
        options: [
          "Metrics are measured quarterly",
          "Leadership involvement is absent",
          "Training is conducted annually",
          "Employee feedback is anonymous"
        ],
        correctAnswer: 1
      },
      {
        id: "diq7",
        text: "Case: A high-performing employee from a minority background is repeatedly overlooked for client presentations. Performance reviews are strong. The root risk is:",
        options: [
          "Lack of experience",
          "Implicit bias affecting visibility",
          "Workload imbalance",
          "Communication gaps"
        ],
        correctAnswer: 1
      },
      {
        id: "diq8",
        text: "Microaggressions are dangerous because they:",
        options: [
          "Are always intentional",
          "Occur rarely",
          "Accumulate psychological impact over time",
          "Are easy to detect"
        ],
        correctAnswer: 2
      },
      {
        id: "diq9",
        text: "Which leadership behavior MOST supports inclusive culture?",
        options: [
          "Delegating diversity to HR only",
          "Modeling inclusive behavior consistently",
          "Avoiding difficult conversations",
          "Limiting decision transparency"
        ],
        correctAnswer: 1
      },
      {
        id: "diq10",
        text: "Intersectionality refers to:",
        options: [
          "Single identity analysis",
          "The overlap of multiple identity factors affecting experiences",
          "Workplace hierarchy",
          "Cultural uniformity"
        ],
        correctAnswer: 1
      },
      {
        id: "diq11",
        text: "Case: An employee declines after-hours networking due to caregiving duties and later misses promotion opportunities. This illustrates:",
        options: [
          "Meritocracy",
          "Structural bias",
          "Personal choice impact only",
          "Performance decline"
        ],
        correctAnswer: 1
      },
      {
        id: "diq12",
        text: "The strongest indicator of inclusive communication is:",
        options: [
          "Frequent emails",
          "Equal airtime and acknowledgment of contributions",
          "Strict meeting agendas",
          "High message volume"
        ],
        correctAnswer: 1
      },
      {
        id: "diq13",
        text: "Which practice reduces confirmation bias?",
        options: [
          "Seeking only supporting data",
          "Structured evaluation criteria",
          "Speed-based decisions",
          "Peer popularity voting"
        ],
        correctAnswer: 1
      },
      {
        id: "diq14",
        text: "Diversity without inclusion typically results in:",
        options: [
          "Higher engagement",
          "Surface-level representation with low retention",
          "Faster decision cycles",
          "Lower training costs"
        ],
        correctAnswer: 1
      },
      {
        id: "diq15",
        text: "Equity differs from equality because equity:",
        options: [
          "Treats everyone identically",
          "Adjusts support based on individual need",
          "Reduces accountability",
          "Avoids measurement"
        ],
        correctAnswer: 1
      },
      {
        id: "diq16",
        text: "Case: Anonymous surveys reveal employees fear speaking up despite open-door policies. The missing element is:",
        options: [
          "Written policies",
          "Psychological trust reinforced through leadership action",
          "Performance incentives",
          "Increased workload"
        ],
        correctAnswer: 1
      },
      {
        id: "diq17",
        text: "Inclusive hiring MOST effectively uses:",
        options: [
          "Unstructured interviews",
          "Blind resume screening and competency scoring",
          "Referral-only recruitment",
          "Manager discretion"
        ],
        correctAnswer: 1
      },
      {
        id: "diq18",
        text: "Bias interruption techniques aim to:",
        options: [
          "Eliminate diversity",
          "Pause and reassess decision triggers",
          "Speed up processes",
          "Increase hierarchy"
        ],
        correctAnswer: 1
      },
      {
        id: "diq19",
        text: "A team that values dissenting opinions is demonstrating:",
        options: [
          "Groupthink",
          "Psychological safety",
          "Authority bias",
          "Competitive dominance"
        ],
        correctAnswer: 1
      },
      {
        id: "diq20",
        text: "The most reliable metric for inclusion is:",
        options: [
          "Headcount diversity only",
          "Retention, engagement, and promotion parity",
          "Training attendance",
          "Meeting frequency"
        ],
        correctAnswer: 1
      },
      {
        id: "diq21",
        text: "Case: A manager promotes only employees who socialize after work. This primarily reflects:",
        options: [
          "Performance alignment",
          "Affinity bias",
          "Random selection",
          "Policy compliance"
        ],
        correctAnswer: 1
      },
      {
        id: "diq22",
        text: "Allyship in the workplace requires:",
        options: [
          "Silent agreement",
          "Active support and advocacy for underrepresented voices",
          "Delegation to HR",
          "Avoiding conflict"
        ],
        correctAnswer: 1
      },
      {
        id: "diq23",
        text: "Cultural competence involves:",
        options: [
          "Memorizing stereotypes",
          "Understanding and adapting respectfully to differences",
          "Ignoring differences",
          "Uniform communication"
        ],
        correctAnswer: 1
      },
      {
        id: "diq24",
        text: "Inclusive feedback is characterized by:",
        options: [
          "Public criticism",
          "Specific, respectful, and behavior-focused guidance",
          "Emotional reactions",
          "Vague praise"
        ],
        correctAnswer: 1
      },
      {
        id: "diq25",
        text: "The risk of homogeneous leadership teams is:",
        options: [
          "Higher creativity",
          "Reduced perspective diversity and innovation",
          "Better consensus",
          "Faster hiring"
        ],
        correctAnswer: 1
      },
      {
        id: "diq26",
        text: "Case: Employees hesitate to disagree with senior leaders despite open forums. The MOST likely barrier is:",
        options: [
          "Lack of meeting structure",
          "Power distance and fear of repercussions",
          "Technical knowledge gaps",
          "Low attendance"
        ],
        correctAnswer: 1
      },
      {
        id: "diq27",
        text: "An inclusive workplace MOST effectively balances:",
        options: [
          "Speed and silence",
          "Representation, participation, and fairness",
          "Hierarchy and control",
          "Uniformity and compliance"
        ],
        correctAnswer: 1
      },
      {
        id: "diq28",
        text: "Which practice strengthens everyday inclusion?",
        options: [
          "Occasional annual workshops only",
          "Consistent micro-behaviors like acknowledgment and listening",
          "Ignoring small issues",
          "Reducing communication"
        ],
        correctAnswer: 1
      },
      {
        id: "diq29",
        text: "Bias awareness training fails when:",
        options: [
          "Follow-up actions and accountability are missing",
          "Leaders participate",
          "Feedback is collected",
          "Metrics are tracked"
        ],
        correctAnswer: 0
      },
      {
        id: "diq30",
        text: "The ultimate indicator of inclusive success is:",
        options: [
          "Uniform thinking",
          "Employees feeling valued, safe, and empowered to contribute",
          "Reduced debates",
          "Shorter meetings"
        ],
        correctAnswer: 1
      }
    ]
};

export default diversityAndInclusion;