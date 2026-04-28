import { Course } from '../../types';

const aiEthicsAndWorkplaceUsage: Course = {
  id: 'ai-fundamentals-2024',
  title: 'AI Ethics & Workplace Usage',
  description: 'Navigating the new frontier of Artificial Intelligence: data limits, ethical usage, and policy.',
  category: 'Technology',
  duration: '110 mins',
  icon: '🤖',
  colorTheme: 'rose',
  modules: [
    {
      id: "ai-m1",
      title: "Module 1: Generative AI at Work",
      summary: "Understanding how AI tools fit into daily work, and the responsibilities we carry while using them.",
      order: 1,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Introduction to Generative AI in the Workplace",
          videoUrl: "https://example.com/placeholder-video.mp4",
          instructions: "This video explains what Generative AI is, how it works, and how it should be used responsibly at work."
        },
        {
          type: "text",
          body: "Generative AI is a powerful tool that can assist in productivity, creativity, and decision-making. However, it must be used within the company’s ethical, security, and data protection guidelines."
        },
        {
          type: "check",
          question: "Which of the following BEST describes the purpose of Generative AI at work?",
          options: [
            "A tool that replaces human judgment entirely.",
            "A predictive model that assists with tasks but still requires human verification.",
            "A system that automatically understands all business rules and internal context.",
            "A self-learning system that updates itself using company data."
          ],
          correctIndex: 1,
          explanation: "Generative AI predicts text based on patterns, but does NOT understand business context or update itself from your data. Human judgment is always required."
        },
        {
          type: "check",
          question: "A teammate wants to use a free public AI website to generate a project proposal. What is the biggest risk?",
          options: [
            "The proposal may not be formatted well.",
            "The tool may store or reuse the company’s confidential information.",
            "The website may be slow.",
            "The AI might produce too much text."
          ],
          correctIndex: 1,
          explanation: "Public AI tools may store, process, or reuse your prompts. Sharing internal details violates data safety and confidentiality rules."
        },
        {
          type: "check",
          question: "Which of the following examples shows RESPONSIBLE AI usage?",
          options: [
            "Pasting customer phone numbers and addresses into the AI to generate a service summary.",
            "Using AI to draft an email but reviewing and editing it before sending.",
            "Using AI to classify employee performance ratings directly.",
            "Sharing a confidential contract with AI to rewrite it faster."
          ],
          correctIndex: 1,
          explanation: "AI can support drafting and structuring content, but confidential or sensitive data must NOT be shared, and human review is essential."
        },
        {
          type: "check",
          question: "Case Scenario: You need AI to summarize a technical document. The document contains internal process details but no personal or client data. What is the safest approach?",
          options: [
            "Paste the full document into a public AI tool because it has no personal data.",
            "Share the document with any AI assistant because it's technical, not confidential.",
            "Check if the company-approved AI tool can be used, and if yes, proceed by removing sensitive operational identifiers.",
            "Upload it to a third-party site for faster processing."
          ],
          correctIndex: 2,
          explanation: "Even non-personal data may still be sensitive. Only company-approved tools can be used, and documents should be sanitized when possible."
        }
      ]
    },
    {
      id: "ai-m2",
      title: "Module 2: The Art of Prompting & AI Mechanics",
      summary: "An interactive story where employees learn how Generative AI works, how prompts shape outputs, and how to avoid risky behaviors.",
      order: 2,
      duration: "35 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "The Team That Prompted Wrong - Part 1",
            scenes: [
              {
                id: "m2_s1",
                title: "Scene 1 — The Client Deadline",
                panels: [
                  {
                    character: "Ayesha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
                    text: "We have only 2 hours to draft the client proposal. Should we try using AI to generate the first version?",
                    side: "left",
                    visualDescription: "Director’s Note: Ayesha looks stressed as she stares at the clock."
                  },
                  {
                    character: "Rohan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
                    text: "AI could help, but we must be careful about what we feed it.",
                    side: "right",
                    visualDescription: "Director’s Note: Rohan adjusts his chair, thinking cautiously."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "Before you use it—remember: AI predicts text, it does NOT understand the context.",
                    side: "left",
                    visualDescription: "Director’s Note: Nikhil speaks with authority."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION: Ayesha wants AI to generate a proposal. What prompt should she use?",
                    options: [
                      { id: "opt_good", label: "A. Provide a high-level generic prompt WITHOUT confidential details.", nextScene: "m2_path_good" },
                      { id: "opt_bad", label: "B. Paste confidential client data to get a more accurate output.", nextScene: "m2_path_bad" }
                    ]
                  }
                ]
              },
              {
                id: "m2_path_good",
                title: "Safe Path — Clean Data",
                panels: [
                  {
                    character: "Ayesha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
                    text: "I wrote: ‘Draft a generic project proposal outline for a digital transformation client.’ No names, no numbers.",
                    side: "left",
                    visualDescription: "Director’s Note: Ayesha types carefully, double-checking her input."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "Perfect. AI works best when you give clarity without exposing sensitive data.",
                    side: "right"
                  },
                  {
                    character: "Rohan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
                    text: "This output looks like a great starting point. We’ll add our specific expertise manually.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Path verified. Rejoining team discussion...",
                    type: "choice",
                    options: [{ id: "c_g", label: "Continue", nextScene: "m2_rejoin" }]
                  }
                ]
              },
              {
                id: "m2_path_bad",
                title: "Unsafe Path — Data Exposure",
                panels: [
                  {
                    character: "Ayesha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
                    text: "I pasted the entire client brief—including budget and contract terms—into the AI tool for better accuracy.",
                    side: "left",
                    visualDescription: "Director’s Note: Ayesha bites her lip, looking anxious."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "Ayesha… public AI systems may store your input for training. You may have just leaked our contract terms.",
                    side: "right",
                    visualDescription: "Director’s Note: Nikhil looks genuinely alarmed."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "⚠️ WARNING: Data-privacy breach scenario encountered. Input history may be recorded.",
                    visualDescription: "Director’s Note: A red alert overlay flashes on the screen."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Corrective guidance required. Analyzing risk...",
                    type: "choice",
                    options: [{ id: "c_b", label: "Acknowledge Risk", nextScene: "m2_rejoin" }]
                  }
                ]
              },
              {
                id: "m2_rejoin",
                title: "AI Mechanics Explained",
                panels: [
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "Let’s clarify: AI doesn’t ‘know’ things like a person. It predicts the next most likely word based on patterns.",
                    side: "left",
                    visualDescription: "Director’s Note: Nikhil shows a diagram of cascading word probabilities."
                  },
                  {
                    character: "Rohan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
                    text: "That explains why better prompts give better output. It narrows the 'search space'.",
                    side: "right"
                  },
                  {
                    character: "Ayesha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
                    text: "And why we must NEVER include confidential data. Once it's in the prompt, it's out of our hands.",
                    side: "left"
                  }
                ]
              }
            ]
          }
        },
        {
          type: "check",
          question: "Why did Ayesha’s unsafe prompt (pasting client data) cause a major security issue?",
          options: [
            "Because AI becomes less accurate with more details.",
            "Because public AI tools may store and reuse the confidential data entered for model training.",
            "Because the AI tool doesn't support long paragraphs.",
            "Because proposals cannot be generated using AI legally."
          ],
          correctIndex: 1,
          explanation: "Public AI systems often retain user inputs to improve their models. Entering sensitive internal or client data can lead to permanent data leakage or policy breaches."
        },
        {
          type: "comic",
          comicData: {
            title: "The Team That Prompted Wrong - Part 2",
            scenes: [
              {
                id: "m2_s4",
                title: "Refining the Skill",
                panels: [
                  {
                    character: "Rohan",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
                    text: "Let me try writing a better, safer prompt: ‘Create a structured 5-point outline for a generic digital strategy project proposal.’",
                    side: "right",
                    visualDescription: "Director’s Note: Rohan types a clean, context-rich prompt."
                  },
                  {
                    character: "Ayesha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
                    text: "The output is so much cleaner now! It actually saves us time without risking the data.",
                    side: "left"
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "Exactly. Generative AI reflects the quality of the prompt—not your secret intent.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "FINAL DECISION: Your team wants to finalize the AI draft. What is the BEST next step?",
                    options: [
                      { id: "f_good", label: "Manually verify every fact and rewrite critical sections for accuracy.", nextScene: "m2_end_good" },
                      { id: "f_bad", label: "Prompt the AI repeatedly until it produces a version that looks 'perfect'.", nextScene: "m2_end_bad" }
                    ]
                  }
                ]
              },
              {
                id: "m2_end_good",
                title: "The Responsible Outcome",
                panels: [
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "When humans verify and refine, AI becomes a powerful support tool. You caught a few generic errors too.",
                    side: "left",
                    visualDescription: "Director’s Note: The team looks proud as they review a finalized document."
                  },
                  {
                    character: "Ayesha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha",
                    text: "I get it now — AI assists, but the final accountability is always ours.",
                    side: "right"
                  }
                ]
              },
              {
                id: "m2_end_bad",
                title: "The Over-reliance Outcome",
                panels: [
                  {
                    character: "System",
                    side: "center",
                    text: "⚠️ FAILED: Over-reliance detected. The final document contained factual errors and robotic phrasing. The client flagged it as unprofessional.",
                    visualDescription: "Director’s Note: A screen showing a 'Rejected' status on the proposal submission."
                  },
                  {
                    character: "Nikhil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil",
                    text: "Remember: Never let the AI be the final decision maker. Always verify.",
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
      id: "ai-m3",
      title: "Module 3: Understanding Prompt Engineering",
      summary: "Learn how prompting impacts AI output quality, risk, and reliability.",
      order: 3,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "How Prompt Engineering Works",
          instructions: "Learn how prompting impacts AI output quality, risk, and reliability.",
          videoUrl: "https://example.com/placeholder-video.mp4"
        },
        {
          type: "text",
          body: "Prompts decide how the AI interprets your request. Clarity, structure, and detail influence the accuracy, tone, and usefulness of the AI output. This module teaches how to write safe, effective, and compliant prompts."
        },
        {
          type: "check",
          question: "Logic Check 1: Which of the following is the strongest prompt?",
          options: [
            "Write something about cybersecurity.",
            "Explain cybersecurity in one paragraph.",
            "Explain cybersecurity to a non-technical employee using simple language and give 3 examples.",
            "Cybersecurity??"
          ],
          correctIndex: 2,
          explanation: "Prompts should include audience, context, tone, structure, and clear instructions. Option 3 contains all these elements."
        },
        {
          type: "check",
          question: "Logic Check 2: Why is vague prompting risky in a workplace?",
          options: [
            "AI becomes slower.",
            "AI may invent incorrect details due to lack of clarity.",
            "Employees will think you’re unskilled.",
            "The system crashes."
          ],
          correctIndex: 1,
          explanation: "Vague prompts increase the risk of hallucinations, causing AI to generate inaccurate or fabricated information."
        },
        {
          type: "check",
          question: "Logic Check 3: Which prompt is LEAST safe?",
          options: [
            "Summarize this email after removing all client names.",
            "Draft a generic proposal outline for the retail industry.",
            "Rewrite this message in a professional tone.",
            "Here is our customer database; find common trends."
          ],
          correctIndex: 3,
          explanation: "No sensitive, confidential, or personal data should ever be entered into public AI systems."
        },
        {
          type: "check",
          question: "Logic Check 4 (Scenario): You need to draft a policy email. Which is the safest approach?",
          options: [
            "Paste the full HR policy document into the AI tool for rewriting.",
            "Give the AI a short prompt: 'Rewrite professionally.'",
            "Provide a structured prompt with ONLY the tone, purpose, and outline — no sensitive text.",
            "Skip the email entirely because AI is unsafe."
          ],
          correctIndex: 2,
          explanation: "You can use AI as long as you do not provide confidential content. Provide structure instead of internal data."
        }
      ]
    },
    {
      id: 'ai-m4',
      title: 'Module 4: Benefits & Limitations of Generative AI',
      summary: 'Exploring where GenAI excels, where it fails, and how human oversight protects quality.',
      order: 4,
      duration: '30 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'The Reality Check',
            scenes: [
              {
                id: "m4_s1",
                title: 'Morning Review – The Draft',
                panels: [
                  {
                    character: 'Sara',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
                    side: 'right',
                    text: "I used GenAI to write the project summary. It saved me so much time.",
                    visualDescription: "Director’s Note: Sara sits confidently at her desk, laptop open."
                  },
                  {
                    character: 'Dev',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev',
                    side: 'left',
                    text: "Nice! Did you verify the numbers? AI sometimes makes them up.",
                    visualDescription: "Director’s Note: Dev leans over, curious."
                  },
                  {
                    character: 'Sara',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
                    side: 'right',
                    text: "Oh… I assumed it wouldn’t get such basic things wrong.",
                    visualDescription: "Director’s Note: Sara frowns slightly, reconsidering."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION: Should Sara trust the AI's generated numbers or verify them?",
                    options: [
                      { id: "m4_opt1_a", label: "Trust the AI numbers.", nextScene: "m4_b1_a" },
                      { id: "m4_opt1_b", label: "Verify the data manually.", nextScene: "m4_b1_b" }
                    ]
                  }
                ]
              },
              {
                id: "m4_b1_a",
                title: "Path A: The Cost of Blind Trust",
                panels: [
                  {
                    character: "Sara",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
                    side: "right",
                    text: "I’ll trust it. It looked fine at first glance.",
                    visualDescription: "Director’s Note: Sara hits 'Send' on the email."
                  },
                  {
                    character: "Manager",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manager",
                    side: "left",
                    text: "Sara… The revenue figures in your report are completely wrong. This could mislead the client.",
                    visualDescription: "Director’s Note: Manager stands at her desk with a serious expression."
                  },
                  {
                    character: "Sara",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
                    side: "right",
                    text: "I should’ve checked. AI made it sound so confident…",
                    visualDescription: "Director’s Note: Sara looks embarrassed."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "⚠️ LESSON: AI output must always be verified. Confidence does not equal accuracy.",
                    type: "choice",
                    options: [{ id: "m4_r1", label: "Continue Discussion", nextScene: "m4_s2" }]
                  }
                ]
              },
              {
                id: "m4_b1_b",
                title: "Path B: The Value of Verification",
                panels: [
                  {
                    character: "Sara",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
                    side: "right",
                    text: "Let me double-check these numbers…",
                    visualDescription: "Director’s Note: Sara pulls up spreadsheets to verify."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
                    side: 'left',
                    text: "Good call. AI sometimes generates ‘near-correct’ figures.",
                    visualDescription: "Director’s Note: Dev nods approvingly."
                  },
                  {
                    character: "Sara",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
                    side: "right",
                    text: "Yep—two values were completely off. Glad I checked!",
                    visualDescription: "Director’s Note: Sara corrects the text on her laptop."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "✅ CORRECT CHOICE: AI assists, but human verification ensures accuracy.",
                    type: "choice",
                    options: [{ id: "m4_r2", label: "Continue Discussion", nextScene: "m4_s2" }]
                  }
                ]
              },
              {
                id: "m4_s2",
                title: 'Scene 2 — The Misleading Tone',
                panels: [
                  {
                    character: 'Dev',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev',
                    side: 'left',
                    text: "By the way… the tone of your summary is a bit too positive. AI tends to exaggerate.",
                    visualDescription: "Director’s Note: Dev gestures at her screen."
                  },
                  {
                    character: 'Sara',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
                    side: 'right',
                    text: "But the client loves optimistic messaging, right?",
                    visualDescription: "Director’s Note: Sara tilts her head."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "DECISION: Should Sara keep the AI's overly positive tone?",
                    options: [
                      { id: "m4_opt2_a", label: "Keep the exaggerated tone.", nextScene: "m4_b2_a" },
                      { id: "m4_opt2_b", label: "Adjust tone to match company guidelines.", nextScene: "m4_b2_b" }
                    ]
                  }
                ]
              },
              {
                id: "m4_b2_a",
                title: "Path A: The Unrealistic Promise",
                panels: [
                  {
                    character: "Client",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Client",
                    side: "left",
                    text: "This summary sounds unrealistic. Are you overpromising on delivery dates?",
                    visualDescription: "Director’s Note: Client on a video call, raising an eyebrow."
                  },
                  {
                    character: "Sara",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
                    side: "right",
                    text: "I'm sorry—I'll revise. The AI made it sound more enthusiastic than the real roadmap allows.",
                    visualDescription: "Director’s Note: Sara looks apologetic."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "⚠️ LESSON: AI tone must be reviewed for professionalism and factual alignment.",
                    type: "choice",
                    options: [{ id: "m4_r3", label: "Next Insights", nextScene: "m4_s3" }]
                  }
                ]
              },
              {
                id: "m4_b2_b",
                title: "Path B: Balanced Professionalism",
                panels: [
                  {
                    character: "Sara",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
                    side: "right",
                    text: "Let me rewrite this section with a more balanced, realistic tone.",
                    visualDescription: "Director’s Note: Sara edits the draft to be more grounded."
                  },
                  {
                    character: "Dev",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
                    side: "left",
                    text: "Much better. This sounds like 'us'—professional and accurate.",
                    visualDescription: "Director’s Note: Dev smiles at the refined draft."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "✅ CORRECT: Tone must align with company standards—not AI assumptions.",
                    type: "choice",
                    options: [{ id: "m4_r4", label: "Final Wrap Up", nextScene: "m4_s3" }]
                  }
                ]
              },
              {
                id: "m4_s3",
                title: 'Scene 3 — Final Insights',
                panels: [
                  {
                    character: 'Dev',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev',
                    side: 'left',
                    text: "AI is great for speed, summaries, and structure.",
                    visualDescription: "Director’s Note: Dev summarizes the core strengths."
                  },
                  {
                    character: 'Sara',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
                    side: 'right',
                    text: "But it can hallucinate, exaggerate, or misinterpret context.",
                    visualDescription: "Director’s Note: Sara acknowledges the limitations."
                  },
                  {
                    character: 'System',
                    side: "center",
                    text: "FINAL TAKEAWAY: AI accelerates work, but people ensure truth, tone, and trustworthiness.",
                    visualDescription: "Director’s Note: The team stands together, laptop closed."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "ai-m5",
      title: "Module 5: Real-World AI Misuse Risks",
      summary: "Exploring where GenAI excels, where it fails, and how human oversight protects quality through scenario-based logic checks.",
      order: 5,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Understanding Real-World AI Risks",
          instructions: "This is a placeholder training video. Once exported, replace this link with the final full-length module video.",
          videoUrl: "https://example.com/placeholder-video.mp4"
        },
        {
          type: "text",
          body: "Before proceeding, please ensure you have watched the complete video above. The following scenarios test your ability to apply safe, ethical, and responsible AI practices at work."
        },
        {
          type: "check",
          question: "Scenario 1: An employee uses a public GenAI tool to rewrite a client proposal and accidentally includes sensitive project data in the prompt. What is the MOST accurate assessment of the risk?",
          options: [
            "It is safe because the data is only used temporarily for generating output.",
            "It is a major breach since public GenAI tools may store or learn from the sensitive information provided.",
            "It is allowed as long as the final output is accurate.",
            "It is acceptable because the employee did not intend to leak data."
          ],
          correctIndex: 1,
          explanation: "Public GenAI tools may retain, train on, or log user inputs. Sharing client-specific or confidential information is considered a serious data exposure risk even if unintentional."
        },
        {
          type: "check",
          question: "Scenario 2: A manager instructs their team to use Generative AI to generate performance feedback summaries to save time. However, the tool creates confident but fabricated statements about some employees. What is the CORRECT decision?",
          options: [
            "Allow AI-generated summaries as long as they ‘sound correct’.",
            "Use AI summaries only for employees with simple roles.",
            "Stop using AI for performance summaries because AI cannot replace managerial judgment.",
            "Use AI-generated text but skip human review to remain unbiased."
          ],
          correctIndex: 2,
          explanation: "Performance feedback requires contextual and factual accuracy. AI hallucinations can introduce bias, unfair ratings, and factual errors. Managers must rely on verified observations—not automated predictions."
        },
        {
          type: "check",
          question: "Scenario 3 (Case Study): Your teammate Kavya uses GenAI to quickly draft a research summary based on confidential internal documents. The summary seems well-written, but when reviewing it, you notice the model added assumptions and projections that do not exist in the real report. What is the BEST course of action?",
          options: [
            "Submit the summary anyway because the added projections could be beneficial.",
            "Remove the fabricated portions and review each statement against the source documents before using the summary.",
            "Use the AI-generated summary but mention verbally that ‘AI added some assumptions’.",
            "Ask GenAI to fix its own hallucinations without human review."
          ],
          correctIndex: 1,
          explanation: "AI hallucinations cannot self-correct reliably. Any fabricated or assumed content must be manually identified, removed, and validated against the original internal documents."
        },
        {
          type: "text",
          body: "End of Module 5. Your choices demonstrate how well you understand responsible AI use. In the next module, we explore the practical rules and accountability structures that guide GenAI usage at work."
        }
      ]
    },
    {
      id: "ai-m6",
      title: "Module 6: Data Protection & Safe AI Use",
      summary: "Employees learn how to protect confidential data while using GenAI tools through branching decisions.",
      order: 6,
      duration: "35 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "Data Protection & Safe AI Use — Interactive Scenario",
            scenes: [
              {
                id: "m6_s1",
                title: "The Risky Email",
                panels: [
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "I need to summarize this escalated client complaint quickly… Using GenAI would save a lot of time.",
                    side: "right",
                    visualDescription: "Director’s Note: Amit sits at his workstation, hesitating as he hovers over a long client email."
                  },
                  {
                    character: "Kavya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
                    text: "Does the email contain any confidential data?",
                    side: "left",
                    visualDescription: "Director’s Note: Kavya walks by and notices Amit staring intensely at his screen."
                  },
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "Yes… full names, account IDs, contract figures… basically everything.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "⚠ DECISION POINT: Should Amit paste the email into the GenAI tool?",
                    options: [
                      { id: "m6_opt1_a", label: "Yes — it’s urgent, and AI can process it faster.", nextScene: "m6_branch_wrong_1" },
                      { id: "m6_opt1_b", label: "No — confidential data cannot be shared in AI tools.", nextScene: "m6_branch_correct_1" }
                    ]
                  }
                ]
              },
              {
                id: "m6_branch_wrong_1",
                title: "Consequence: Confidential Data Shared",
                panels: [
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "I’ll paste it… what’s the worst that could happen?",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "⚠ ALERT: You just shared contract numbers, names and personal identifiers with a public AI tool.",
                    visualDescription: "Director’s Note: Red alert flashes."
                  },
                  {
                    character: "Kavya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
                    text: "Amit! This creates a data breach risk. You must never paste sensitive information directly!",
                    side: "left",
                    visualDescription: "Director’s Note: Kavya looks shocked as she sees the AI window."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "❌ CONSEQUENCE: This action violates data protection policy.",
                    type: "choice",
                    options: [{ id: "m6_r1", label: "Rewind and Choose Safety", nextScene: "m6_s1" }]
                  }
                ]
              },
              {
                id: "m6_branch_correct_1",
                title: "Success: Protecting Client Data",
                panels: [
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "Yeah… sharing this is definitely risky. I shouldn’t use it directly.",
                    side: "right"
                  },
                  {
                    character: "Kavya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
                    text: "Good call. But you can still use AI—just without exposing client information.",
                    side: "left"
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena",
                    text: "Try converting it into a generic summary: remove identifiers, keep only the structure.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Safe methodology established. Proceeding...",
                    type: "choice",
                    options: [{ id: "m6_c1", label: "Continue", nextScene: "m6_safe_alt" }]
                  }
                ]
              },
              {
                id: "m6_safe_alt",
                title: "Safe Alternative",
                panels: [
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "Okay, I’ll rewrite the complaint as: 'A customer reported repeated service delays and billing discrepancies…'",
                    side: "right",
                    visualDescription: "Director’s Note: Amit types a sanitized version of the email."
                  },
                  {
                    character: "Kavya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
                    text: "Perfect. Now the AI can help you without exposing real data.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Scenario evolution detected. New risk emerging.",
                    type: "choice",
                    options: [{ id: "m6_c2", label: "Next Challenge", nextScene: "m6_file_risk" }]
                  }
                ]
              },
              {
                id: "m6_file_risk",
                title: "New Risk — Uploading the File",
                panels: [
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "AI can analyze attachments too… maybe I should upload the original PDF?",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "⚠ DECISION POINT: Should Amit upload the client’s original email PDF to the AI tool?",
                    options: [
                      { id: "m6_opt2_a", label: "Upload the real file — faster and accurate.", nextScene: "m6_branch_wrong_2" },
                      { id: "m6_opt2_b", label: "No — attachments can contain sensitive metadata.", nextScene: "m6_branch_correct_2" }
                    ]
                  }
                ]
              },
              {
                id: "m6_branch_wrong_2",
                title: "Consequence: Attaching the File",
                panels: [
                  {
                    character: "System",
                    side: "center",
                    text: "⚠ RISK ALERT: The PDF contains hidden metadata including client email IDs and geolocation.",
                    visualDescription: "Director’s Note: Red metadata audit trail displayed."
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena",
                    text: "Never upload files directly! Even if text seems generic, metadata can leak confidential information.",
                    side: "right"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "❌ VIOLATION: Serious privacy risk encountered.",
                    type: "choice",
                    options: [{ id: "m6_r2", label: "Rewind and Review Policy", nextScene: "m6_file_risk" }]
                  }
                ]
              },
              {
                id: "m6_branch_correct_2",
                title: "Correct: No Sensitive Attachments",
                panels: [
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "Right. Metadata… totally forgot about that!",
                    side: "right"
                  },
                  {
                    character: "Kavya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
                    text: "That’s why we always stick to sanitized text only.",
                    side: "left"
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Security standards verified. Finalizing chapter...",
                    type: "choice",
                    options: [{ id: "m6_c3", label: "Closing Remarks", nextScene: "m6_closing" }]
                  }
                ]
              },
              {
                id: "m6_closing",
                title: "Module Conclusion",
                panels: [
                  {
                    character: "Kavya",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
                    text: "Remember: No real names, IDs, financial data, or documents in AI tools.",
                    side: "left"
                  },
                  {
                    character: "Leena",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leena",
                    text: "AI helps with structure. Humans protect data.",
                    side: "right"
                  },
                  {
                    character: "Amit",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
                    text: "Got it. AI is powerful—but privacy is non-negotiable.",
                    side: "right",
                    visualDescription: "Director’s Note: The team stands together confidently."
                  }
                ]
              }
            ]
          }
        },
        {
          type: "check",
          question: "Amit wants to use GenAI to summarize a client complaint email. What is the safest approach?",
          options: [
            "Paste the full email into the GenAI tool — it's efficient.",
            "Upload the original client PDF for accurate summarizing.",
            "Rewrite the complaint into a generic, anonymized version before using AI."
          ],
          correctIndex: 2,
          explanation: "Only anonymized, non-sensitive data should be used with GenAI tools. Uploading or pasting confidential information directly violates data protection rules and corporate policy."
        }
      ]
    },
    {
      id: "ai-m7",
      title: "Module 7: Advanced AI Risks & Ethical Boundaries",
      summary: "This module covers deeper risks in AI usage including hallucinations, bias, regulatory concerns, and organizational responsibilities.",
      order: 7,
      duration: "20 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "Advanced AI Risks & Ethical Boundaries",
          instructions: "⚠ Placeholder Video: The actual training video for Module 7 will appear here after integration. This placeholder ensures the flow remains intact in your LMS until the final video asset is uploaded.",
          videoUrl: "https://example.com/placeholder-ai-ethics-video.mp4"
        },
        {
          type: "check",
          question: "Which of the following is a major organizational risk when using AI tools for critical decision-making?",
          options: [
            "AI hallucinations leading to fabricated or unreliable information being used.",
            "AI making employees work faster than usual.",
            "AI refusing to generate content unless prompted twice.",
            "AI tools being too creative with formatting."
          ],
          correctIndex: 0,
          explanation: "AI hallucinations occur when the model produces confident but false information. Relying on these outputs without human verification creates major compliance and operational risks."
        },
        {
          type: "check",
          question: "Which of the following situations requires mandatory human oversight?",
          options: [
            "Summarizing a public news article.",
            "Drafting informal internal messages.",
            "Using AI-generated insights in policy, client-facing content, or legally sensitive work.",
            "Asking AI to correct grammar in a friendly email."
          ],
          correctIndex: 2,
          explanation: "High-impact work — such as policies, legal documents, client communication, compliance decisions — must NEVER rely solely on AI output. Human review is mandatory."
        }
      ]
    },
    {
      id: "ai-m8",
      title: "Module 8: Roles & Responsibilities in Using GenAI",
      summary: "An interactive comic storyline that teaches accountability, safe AI usage, and ethical decision-making.",
      order: 8,
      duration: "30 mins",
      parts: [
        {
          type: "comic",
          comicData: {
            title: "The Accountability Framework",
            scenes: [
              {
                id: "m8_s1",
                title: "The Escalation",
                panels: [
                  {
                    character: "Sneha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
                    side: "left",
                    text: "Team… I think something’s wrong. The model generated a completely incorrect compliance summary.",
                    visualDescription: "Director’s Note: Sneha stands at her workstation, staring anxiously at her screen."
                  },
                  {
                    character: "Anil (Manager)",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
                    side: "right",
                    text: "Show me. Did you input any confidential information by mistake?",
                    visualDescription: "Director’s Note: Anil steps closer, expression serious and concerned."
                  },
                  {
                    character: "Sneha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
                    side: "left",
                    text: "No confidential data—but the output still looks risky. I'm not sure we should send this to the client.",
                    visualDescription: "Director’s Note: Sneha taps nervously on her keyboard."
                  },
                  {
                    character: "Varun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Varun",
                    side: "left",
                    text: "Maybe we can fix it ourselves? Not involve management?",
                    visualDescription: "Director’s Note: Varun crosses his arms, unsure whether escalation is necessary."
                  },
                  {
                    character: "Anil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
                    side: "right",
                    text: "Using GenAI is a shared responsibility. Every decision has consequences.",
                    visualDescription: "Director’s Note: Anil’s tone becomes firmer; a quiet tension spreads in the room."
                  },
                  {
                    character: "System",
                    side: "center",
                    type: "choice",
                    text: "⚠ DECISION POINT: What should Sneha do after noticing incorrect AI output?",
                    options: [
                      { id: "m8_opt1_a", label: "Option A: Escalate immediately with full context.", nextScene: "m8_branch_A1" },
                      { id: "m8_opt1_b", label: "Option B: Quietly fix the errors without escalation.", nextScene: "m8_branch_B1" }
                    ]
                  }
                ]
              },
              {
                id: "m8_branch_A1",
                title: "Responsible Path — Accountability",
                panels: [
                  {
                    character: "Sneha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
                    side: "left",
                    text: "Anil, here’s the full prompt history and the output. We should review this together.",
                    visualDescription: "Director’s Note: Sneha hands over logs."
                  },
                  {
                    character: "Anil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
                    side: "right",
                    text: "Good call. Transparency helps us trace the issue. This is the right approach.",
                    visualDescription: "Director’s Note: Anil nods with appreciation."
                  },
                  {
                    character: "Varun",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Varun",
                    side: "left",
                    text: "So escalation isn't about blame… it's about accuracy.",
                    visualDescription: "Director’s Note: Varun looks thoughtful."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Accountability protocol verified. Rejoining team reflection.",
                    type: "choice",
                    options: [{ id: "m8_c1", label: "Continue", nextScene: "m8_merged" }]
                  }
                ]
              },
              {
                id: "m8_branch_B1",
                title: "Consequence: Silent Mistake",
                panels: [
                  {
                    character: "Sneha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
                    side: "left",
                    text: "I can fix this myself. No need to escalate… I think.",
                    visualDescription: "Director’s Note: Sneha hesitates before making quick edits."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "Two hours later…",
                    visualDescription: "Scene transition overlay."
                  },
                  {
                    character: "Client (Email)",
                    side: "right",
                    text: "‘Your compliance summary has multiple inaccuracies. This is concerning.’",
                    visualDescription: "Director’s Note: Red notification email flashes."
                  },
                  {
                    character: "Anil (Manager)",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
                    side: "right",
                    text: "Sneha… why wasn’t this escalated? We could have prevented this.",
                    visualDescription: "Director’s Note: Anil looks disappointed."
                  },
                  {
                    character: "System",
                    side: "center",
                    text: "❌ CONSEQUENCE: Undisclosed errors lead to reputational damage.",
                    type: "choice",
                    options: [{ id: "m8_r1", label: "Rewind and Escalate", nextScene: "m8_s1" }]
                  }
                ]
              },
              {
                id: "m8_merged",
                title: "Lessons Learned",
                panels: [
                  {
                    character: "Sneha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
                    side: "left",
                    text: "Okay… I get it. AI isn’t the problem. It’s how responsibly we handle its output.",
                    visualDescription: "Director’s Note: Sneha reflects after the discussion."
                  },
                  {
                    character: "Anil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
                    side: "right",
                    text: "Exactly. Human oversight. Clear escalation. No assumptions.",
                    visualDescription: "Director’s Note: Anil gives a reassuring nod."
                  }
                ]
              }
            ]
          }
        },
        {
          type: "check",
          question: "Who is responsible for ensuring AI-generated content is accurate and compliant?",
          options: [
            "The AI tool itself",
            "Only the manager",
            "The employee using the AI tool",
            "No one—it’s automated"
          ],
          correctIndex: 2,
          explanation: "Responsibility ALWAYS stays with the human using the AI tool. AI assists, but employees must review and verify all output before final use."
        },
        {
          type: "comic",
          comicData: {
            title: "Final Reflection",
            scenes: [
              {
                title: "Shared Responsibility",
                panels: [
                  {
                    character: "Sneha",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
                    side: "left",
                    text: "GenAI helps… but humans lead. That’s clear now.",
                    visualDescription: "Director’s Note: Sneha smiles, more confident."
                  },
                  {
                    character: "Anil",
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anil",
                    side: "right",
                    text: "Exactly. When we all play our roles, AI becomes a powerful partner—not a risk.",
                    visualDescription: "Director’s Note: Anil closes the module with a firm nod."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "ai-m9",
      title: "Module 9: Advanced Governance & AI Risk Controls",
      summary: "Understanding risk controls and governance frameworks for AI.",
      order: 9,
      duration: "12 mins",
      parts: [
        {
          type: "videoPlaceholder",
          title: "AI Risk Controls — Placeholder",
          videoUrl: "https://example.com/placeholder-video.mp4",
          instructions: "This is a temporary placeholder video. The actual training video will be added during the final development stage after exporting from Google AI Studio."
        },
        {
          type: "text",
          body: "Please watch the entire video to continue. Once the final video is added, this placeholder will automatically be replaced at deployment."
        },
        {
          type: "check",
          question: "What is the correct next step after watching the full video in this module?",
          options: [
            "Skip ahead without watching because this is only a placeholder.",
            "Ensure the full video is watched and acknowledged before moving on.",
            "Use AI tools to generate the missing content.",
            "Report the placeholder as an error in the LMS."
          ],
          correctIndex: 1,
          explanation: "Even with a placeholder, the module structure requires that learners acknowledge the viewing step. In the final version, the video will be mandatory before continuing."
        }
      ]
    }
  ],
  assessment: [
    {
      id: 'aiq1',
      text: 'A team member uses GenAI to draft a proposal. The output contains plausible but incorrect market data. Which principle was violated?',
      options: [
        'AI systems cannot generate market data, so no principle is violated',
        'Human oversight & verification',
        'Prompt engineering best practices only',
        'Tool-usage governance, but not accuracy responsibilities'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq2',
      text: 'Which scenario MOST accurately demonstrates “automation bias”?',
      options: [
        'Editing AI output heavily before submitting it',
        'Assuming AI output is correct because it “sounds confident”',
        'Rejecting all AI outputs without review',
        'Using AI only for grammar corrections'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq3',
      text: 'A user gives an AI tool a client’s real contract to summarize. The AI’s privacy policy states it may use prompts for model training. What is the PRIMARY risk?',
      options: [
        'The AI will rewrite the contract inaccurately',
        'Permanent loss of control over sensitive client information',
        'The summary will not meet brand guidelines',
        'The output may have grammatical mistakes'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq4',
      text: 'GenAI creates a financial forecast that looks detailed but is entirely fabricated. This failure mode is known as:',
      options: [
        'Retrieval drift',
        'Cognitive bias',
        'Hallucination',
        'Inference compression'
      ],
      correctAnswer: 2
    },
    {
      id: 'aiq5',
      text: 'A team uses unapproved AI tools because they produce “better results.” Which organizational responsibility is being violated?',
      options: [
        'Productivity enablement only',
        'Approved-tool governance',
        'Prompt responsibility only',
        'Training obligations only'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq6',
      text: 'Which of the following prompts carries the HIGHEST compliance risk?',
      options: [
        '“Rewrite this text to be more formal.”',
        '“Summarize this client’s personal medical history for the report.”',
        '“Give me 5 ideas for a marketing tagline.”',
        '“Draft a general project status update template.”'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq7',
      text: 'A senior manager asks AI to generate interview questions but doesn’t check them. The questions later appear discriminatory. This MOST clearly violates:',
      options: [
        'Creativity guidelines',
        'Ethical review & oversight',
        'Productivity principles',
        'AI model tuning rules'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq8',
      text: 'Which situation best demonstrates a “data leakage” event involving GenAI?',
      options: [
        'Using weak passwords for tools',
        'Sharing confidential project details in AI prompts',
        'Using AI-generated wording in an email',
        'AI forgetting previous conversation history'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq9',
      text: 'A staff member anonymizes a document before uploading it to GenAI—but the anonymization is imperfect. What is the correct interpretation?',
      options: [
        'It is safe because no names were used',
        'Risk remains because contextual clues may re-identify the client',
        'Model training prevents risk',
        'GenAI automatically masks all identifiers'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq10',
      text: 'Which of the following responsibilities belongs SOLELY to the human user (not the organization, not the AI)?',
      options: [
        'Ensuring the AI model stores data securely',
        'Verifying accuracy and contextual correctness of outputs',
        'Updating the AI system backend',
        'Managing the global model parameters'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq11',
      text: 'GenAI suggests a legally non-compliant clause in a contract draft. What is the MOST correct response?',
      options: [
        'Use the clause anyway since AI is trained on legal data',
        'Review with legal/compliance before using anything',
        'Ask AI to regenerate until it looks correct',
        'Assume the mistake will not have business impact'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq12',
      text: 'Which is an example of “prompt injection risk”?',
      options: [
        'A user gives incorrect instructions to AI',
        'A malicious input forces AI to bypass rules',
        'AI asking follow-up questions',
        'AI refusing to perform unsafe tasks'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq13',
      text: 'A team relies completely on AI for customer emails. Customer complaints increase due to inaccurate responses. The failure occurred because:',
      options: [
        'AI tools cannot write emails',
        'Loss of human judgment & domain expertise',
        'Too many prompts were used',
        'The AI was too slow'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq14',
      text: 'Which action MOST aligns with ethical AI usage?',
      options: [
        'Using AI to replace all employee decision-making',
        'Using AI outputs as suggestions, reviewed by humans',
        'Copying AI output without reading it',
        'Sharing customer complaints with AI for analysis'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq15',
      text: 'A user wants AI to generate a competitor analysis, but the data it returns is not traceable to any source. This indicates:',
      options: [
        'Reliable AI inference',
        'A hallucinated or synthetic output',
        'Strong model grounding',
        'Verified external retrieval'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq16',
      text: 'Case: An employee uploads internal HR grievances into GenAI to help “rewrite them politely.” The tool’s policy states data may be reviewed by human trainers. What is the MOST severe risk?',
      options: [
        'Tone inconsistency in the rewritten grievance',
        'Exposure of sensitive employee complaints to external parties',
        'Reduced writing quality',
        'Loss of AI session history'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq17',
      text: 'Case: AI generates a performance review draft. It subtly uses language implying gender bias. What is the ethical failure?',
      options: [
        'User didn’t ask for a long enough prompt',
        'The AI model reproduced historical societal bias',
        'The AI used too much training compute',
        'Bias cannot occur in language models'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq18',
      text: 'Case: A team uses AI-generated code snippets from public models. Later, security finds vulnerabilities identical to open-source exploits. What was the oversight?',
      options: [
        'AI-generated content cannot contain vulnerabilities',
        'No security review or code verification was performed',
        'The prompts were not long enough',
        'The team used too many AI tools'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq19',
      text: 'Case: During an incident, AI recommends shutting down a server immediately, but doing so would cause financial loss. What should the engineer rely on?',
      options: [
        'AI’s urgency',
        'Human risk assessment & escalation protocol',
        'Majority AI vote',
        'AI hallucination probability score'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq20',
      text: 'Case: AI rewrites an email and unintentionally commits the company to a legal obligation. Who is accountable?',
      options: [
        'The AI tool',
        'The employee who used the tool',
        'The legal department',
        'The provider of the AI model'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq21',
      text: 'Which scenario best illustrates “overreliance risk”?',
      options: [
        'AI being used only for brainstorming',
        'Employees assuming AI outputs are authoritative without evaluation',
        'Employees reviewing all AI outputs carefully',
        'AI refusing unsafe requests'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq22',
      text: 'Which prompt MOST likely increases the chance of hallucination?',
      options: [
        '“Summarize this policy document.”',
        '“Invent the last two quarters’ sales numbers and justify them.”',
        '“Rewrite this in simpler language.”',
        '“Generate 3 tagline options for a brand.”'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq23',
      text: 'AI suggests an action that complies with policy but violates ethical fairness. What should be prioritized?',
      options: [
        'Policy compliance alone',
        'Ethical principles AND policy compliance',
        'Whichever is faster',
        'The AI suggestion since it is neutral'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq24',
      text: 'Which failure mode is MOST likely when AI receives vague or underspecified prompts?',
      options: [
        'Stronger accuracy',
        'Overgeneralization & hallucination',
        'Reduced hallucination',
        'Guaranteed correctness'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq25',
      text: 'Which describes the correct relationship between humans and AI in workplace tasks?',
      options: [
        'AI is the decision-maker; humans execute',
        'AI assists; humans remain accountable for decisions',
        'Humans only verify if they have time',
        'AI determines ethical boundaries automatically'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq26',
      text: 'A user gives AI a prompt containing anonymized but detailed situational context. What risk remains?',
      options: [
        'None, all anonymized data is safe',
        'Re-identification from contextual clues',
        'AI will refuse the prompt',
        'AI will automatically delete the data'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq27',
      text: 'AI-generated research summaries occasionally include citations to nonexistent papers. This is due to:',
      options: [
        'AI’s inability to produce formatted text',
        'Pattern-based synthesis without factual grounding',
        'Weak encryption in the model',
        'Users asking too many questions'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq28',
      text: 'Which action BEST aligns with responsible prompt engineering?',
      options: [
        'Providing detailed context while excluding sensitive data',
        'Copying full client documents into prompts',
        'Using personal data to improve accuracy',
        'Submitting unclear prompts repeatedly'
      ],
      correctAnswer: 0
    },
    {
      id: 'aiq29',
      text: 'If two AI tools provide contradictory answers, what is the most ethical next step?',
      options: [
        'Choose the answer that seems more confident',
        'Escalate to subject-matter experts and verify with real data',
        'Pick the shorter answer',
        'Assume the newer model is correct'
      ],
      correctAnswer: 1
    },
    {
      id: 'aiq30',
      text: 'Which principle captures the core philosophy of ethical GenAI usage?',
      options: [
        'AI replaces human judgment',
        'Human oversight remains central even when AI accelerates work',
        'AI-generated outputs are inherently neutral',
        'AI is responsible for compliance failures'
      ],
      correctAnswer: 1
    }
  ]
};

export default aiEthicsAndWorkplaceUsage;