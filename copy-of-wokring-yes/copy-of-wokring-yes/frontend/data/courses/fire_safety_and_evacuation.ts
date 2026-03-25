import { Course } from '../../types';

const fireSafetyAndEvacuation: Course = {
  id: 'fire-safety-2024',
  title: 'Fire Safety & Evacuation',
  description: 'Life-saving protocols for fire prevention, detection, and building evacuation.',
  category: 'Safety & Wellness',
  duration: '45 mins',
  icon: '🔥',
  colorTheme: 'amber',
  modules: [
    {
      id: 'fs-m1',
      title: 'Module 1: Fire Hazards and Prevention',
      summary: 'Interactive simulation on identifying hazards, reporting risks, and making safe decisions.',
      order: 1,
      duration: '20 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Fire Prevention in Action — Interactive Simulation',
            scenes: [
              {
                id: 'intro_fire',
                title: 'Awareness Begins',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Fire safety begins long before a fire happens. Awareness prevents emergencies.",
                    side: 'left'
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "So most fires are preventable if we notice risks early?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Exactly. Prevention is everyone’s responsibility—not just facilities or security.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'hazard_setup',
                title: 'A Typical Workday',
                panels: [
                  {
                    character: 'System',
                    text: "Scenario: You notice an overloaded power strip under a desk with multiple devices plugged in.",
                    side: 'center'
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "It looks risky. What would you do?",
                    side: 'right'
                  }
                ]
              },
              {
                id: 'decision_hazard',
                title: 'Decision Point — Electrical Hazard',
                panels: [
                  {
                    character: 'System',
                    text: "Choose your action:",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_ignore', label: 'Ignore it — not your equipment', nextScene: 'wrong_ignore_hazard' },
                      { id: 'opt_report', label: 'Report it to facilities immediately', nextScene: 'correct_report_hazard' },
                      { id: 'opt_joke', label: 'Take a photo and joke about it in chat', nextScene: 'wrong_joke_hazard' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_ignore_hazard',
                title: 'Consequence — Delayed Reaction',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Ignoring hazards allows risks to grow silently.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Increased fire probability.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind1', label: 'Try Again', nextScene: 'decision_hazard' }]
                  }
                ]
              },
              {
                id: 'wrong_joke_hazard',
                title: 'Consequence — Unsafe Culture',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Mocking safety concerns discourages reporting and normalizes risk.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Unsafe culture reinforced.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind2', label: 'Rewind Decision', nextScene: 'decision_hazard' }]
                  }
                ]
              },
              {
                id: 'correct_report_hazard',
                title: 'Correct — Early Prevention',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Good call. Facilities replaced the strip before it overheated.",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Early reporting prevents emergencies before alarms ever ring.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'blocked_exit_setup',
                title: 'Another Risk Appears',
                panels: [
                  {
                    character: 'System',
                    text: "Later, you notice boxes stacked near an emergency exit door.",
                    side: 'center'
                  }
                ]
              },
              {
                id: 'decision_exit',
                title: 'Decision Point — Exit Blockage',
                panels: [
                  {
                    character: 'System',
                    text: "What action do you take?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_move', label: 'Move the boxes aside immediately', nextScene: 'correct_move_exit' },
                      { id: 'opt_walk', label: 'Walk past — someone else will fix it', nextScene: 'wrong_walk_exit' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_walk_exit',
                title: 'Consequence — Evacuation Risk',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Blocked exits delay evacuation and cost critical seconds.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Evacuation risk increased.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind3', label: 'Try Again', nextScene: 'decision_exit' }]
                  }
                ]
              },
              {
                id: 'correct_move_exit',
                title: 'Correct — Clear Exit',
                panels: [
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "Good thing we moved them — that exit is now usable.",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Clear exits are lifesaving pathways, not storage areas.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'fire_summary',
                title: 'Key Prevention Principles',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Prevention is noticing hazards, reporting early, and maintaining clear escape routes.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "You completed Module 1 — Fire Hazards & Prevention.",
                    side: 'center'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Which action BEST supports fire prevention?",
          options: [
            "Assuming facilities will notice hazards",
            "Reporting risks and clearing exits immediately",
            "Ignoring minor electrical overloads"
          ],
          correctIndex: 1,
          explanation: "Fire prevention depends on early detection and immediate corrective action by every employee."
        }
      ]
    },
    {
      id: 'fs-m2',
      title: 'Module 2: Fire Detection & Alarm Systems',
      summary: 'Understanding fire alarms, detection systems, and employee response expectations.',
      order: 2,
      duration: '10 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Fire Detection & Alarm Awareness',
          instructions: 'This video explains how fire detection systems work, types of alarms, and how employees must respond immediately.',
          videoUrl: 'https://example.com/placeholder-fire-alarm-video'
        },
        {
          type: 'check',
          question: 'You hear a fire alarm but do not see smoke or flames. What is the correct action?',
          options: [
            'Ignore it until someone confirms it is real',
            'Immediately stop work and begin evacuation calmly',
            'Wait at your desk for instructions from colleagues'
          ],
          correctIndex: 1,
          explanation: 'Every alarm must be treated as real. Immediate evacuation prevents delays that could cost lives. Waiting for confirmation wastes critical response time.'
        }
      ]
    },
    {
      id: 'fs-m3',
      title: 'Module 3: Types of Fires & Fire Extinguishers',
      summary: 'Interactive branching simulation on fire classifications, extinguisher use, and the PASS technique.',
      order: 3,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Fire Types & Extinguisher Decisions — Interactive Simulation',
            scenes: [
              {
                id: 'intro_fire_types',
                title: 'Why Fire Types Matter',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Not all fires are the same. Using the wrong extinguisher can make a small fire explode into a major emergency.",
                    side: 'left'
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "So choosing the wrong extinguisher is actually dangerous, not just ineffective?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Exactly. Knowledge + calm action = safety.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'scenario_classA',
                title: 'Scenario — Storage Room Fire',
                panels: [
                  {
                    character: 'System',
                    text: "A small fire starts in a storage cabinet filled with paper and cardboard.",
                    side: 'center'
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "You are trained and the fire is small. What extinguisher do you choose?",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Select the correct extinguisher:",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_water', label: 'Water / Foam Extinguisher', nextScene: 'correct_classA' },
                      { id: 'opt_co2', label: 'CO₂ Extinguisher', nextScene: 'wrong_classA_co2' },
                      { id: 'opt_ignore', label: 'Wait and watch', nextScene: 'wrong_classA_ignore' }
                    ]
                  }
                ]
              },
              {
                id: 'correct_classA',
                title: 'Correct — Class A Response',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Correct. Paper and wood fires are Class A. Water or foam is ideal.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Proceed to next situation.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_c', label: 'Continue', nextScene: 'scenario_classC' }]
                  }
                ]
              },
              {
                id: 'scenario_classC',
                title: 'Scenario — Electrical Spark',
                panels: [
                  {
                    character: 'System',
                    text: "A computer workstation sparks and catches fire.",
                    side: 'center'
                  },
                  {
                    character: 'System',
                    side: 'center',
                    text: "What do you do?",
                    type: 'choice',
                    options: [
                      { id: 'opt_water2', label: 'Throw Water', nextScene: 'wrong_electrical_water' },
                      { id: 'opt_co22', label: 'Use CO₂ Extinguisher', nextScene: 'correct_electrical' }
                    ]
                  }
                ]
              },
              {
                id: 'correct_electrical',
                title: 'Correct — Electrical Fire Response',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "CO₂ removes oxygen and is safe for electrical equipment.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Moving to extinguisher operation.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_pass', label: 'Next: Technique', nextScene: 'pass_decision' }]
                  }
                ]
              },
              {
                id: 'pass_decision',
                title: 'PASS Technique',
                panels: [
                  {
                    character: 'System',
                    text: "You now hold the extinguisher. What is the FIRST step?",
                    side: 'center'
                  },
                  {
                    character: 'System',
                    text: "Select the first step:",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'opt_aim', label: 'Aim', nextScene: 'wrong_pass' },
                      { id: 'opt_pull', label: 'Pull the Pin', nextScene: 'correct_pass' }
                    ]
                  }
                ]
              },
              {
                id: 'correct_pass',
                title: 'Correct — PASS Technique',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Correct. Pull → Aim → Squeeze → Sweep.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Finalizing mission.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_sum', label: 'Finish', nextScene: 'summary_fire' }]
                  }
                ]
              },
              {
                id: 'summary_fire',
                title: 'Module Summary',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Identify the fire type, choose the correct extinguisher, and follow PASS. Safety first—if unsure, evacuate.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "You completed Module 3 — Fire Types & Extinguishers.",
                    side: 'center'
                  }
                ]
              },
              {
                id: 'wrong_classA_co2',
                title: 'Consequence — Ineffective Choice',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "CO₂ can work, but it’s not ideal for deep paper fires. The fire reignites.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Fire grows due to incomplete suppression.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewindA1', label: 'Try Again', nextScene: 'scenario_classA' }]
                  }
                ]
              },
              {
                id: 'wrong_classA_ignore',
                title: 'Consequence — Delay',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Delays allow fire to spread. Early action prevents escalation.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Fire alarm triggers building evacuation.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewindA2', label: 'Rewind', nextScene: 'scenario_classA' }]
                  }
                ]
              },
              {
                id: 'wrong_electrical_water',
                title: 'Consequence — Shock Risk',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Water conducts electricity. This can cause severe injury.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Personal injury risk increased.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewindC', label: 'Try Again', nextScene: 'scenario_classC' }]
                  }
                ]
              },
              {
                id: 'wrong_pass',
                title: 'Incorrect Sequence',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Without pulling the pin, the extinguisher won’t activate.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Remember: PASS = Pull, Aim, Squeeze, Sweep.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewindPASS', label: 'Retry', nextScene: 'pass_decision' }]
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'fs-m4',
      title: 'Module 4: Fire Detection Systems & Alarms',
      summary: 'Understanding alarms, detectors, and immediate response protocols.',
      order: 4,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Fire Detection & Alarm Systems — Awareness Video',
          instructions: 'Learn how smoke detectors, heat sensors, and alarm systems protect buildings and how employees must respond.',
          videoUrl: 'https://placeholder.video/fire-detection-training.mp4'
        },
        {
          type: 'check',
          question: 'You hear a fire alarm but do not see smoke. What is the correct action?',
          options: [
            'Ignore it and continue working',
            'Wait for someone else to confirm',
            'Treat it as real and begin evacuation immediately'
          ],
          correctIndex: 2,
          explanation: 'Correct. Every alarm must be treated as real. Delay wastes critical evacuation time.'
        },
        {
          type: 'check',
          question: 'During a fire drill, a colleague suggests staying back to finish an email. What should you do?',
          options: [
            'Agree and stay back together',
            'Inform them the drill is mandatory and evacuate immediately',
            'Ignore them and quietly leave'
          ],
          correctIndex: 1,
          explanation: 'Correct. Drills simulate real emergencies. Participation builds automatic safe response.'
        },
        {
          type: 'quote',
          body: 'Great job! You understand fire detection and alarm response. Continuous awareness is our best defense.'
        }
      ]
    },
    {
      id: 'fs-m5',
      title: 'Module 5: Emergency Response (What To Do In Case of Fire)',
      summary: 'Interactive emergency decision simulation teaching evacuation discipline and survival behavior.',
      order: 5,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Fire Emergency Simulation — Decision Based Training',
            scenes: [
              {
                id: 'fs_intro',
                title: 'Alarm Sounds',
                panels: [
                  {
                    character: 'System',
                    text: "SCENARIO: You are working at your desk. The fire alarm suddenly rings.",
                    side: 'center'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Treat every alarm as real. Seconds matter more than certainty.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'fs_decision_1',
                title: 'Decision — First Reaction',
                panels: [
                  {
                    character: 'System',
                    text: "What is your immediate action?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'check_source', label: 'Wait and check if it’s real', nextScene: 'wrong_wait' },
                      { id: 'evacuate_now', label: 'Stop work and start evacuation', nextScene: 'correct_start' },
                      { id: 'collect_items', label: 'Collect laptop and belongings', nextScene: 'wrong_items' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_wait',
                title: 'Consequence — Delay',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Waiting wastes critical seconds. Smoke spreads faster than people realize.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Evacuation delayed. Risk increased.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs1', label: 'Rewind Decision', nextScene: 'fs_decision_1' }]
                  }
                ]
              },
              {
                id: 'wrong_items',
                title: 'Consequence — Property Over Safety',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Belongings can be replaced. Lives cannot.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Exit congestion caused.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs2', label: 'Try Again', nextScene: 'fs_decision_1' }]
                  }
                ]
              },
              {
                id: 'correct_start',
                title: 'Correct — Immediate Evacuation',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Let’s go. Leave everything. Follow the exit signs.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Moving to route planning...",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_route', label: 'Choose Route', nextScene: 'fs_decision_2' }]
                  }
                ]
              },
              {
                id: 'fs_decision_2',
                title: 'Decision — Route Choice',
                panels: [
                  {
                    character: 'System',
                    text: "You reach the corridor. Elevator is nearby. Stairs are further.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'use_elevator', label: 'Use Elevator — faster', nextScene: 'wrong_elevator' },
                      { id: 'use_stairs', label: 'Use Staircase Exit', nextScene: 'correct_stairs' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_elevator',
                title: 'Consequence — Elevator Risk',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Elevators can fail, trap occupants, or fill with smoke.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: High Fatality Risk.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs3', label: 'Rewind', nextScene: 'fs_decision_2' }]
                  }
                ]
              },
              {
                id: 'correct_stairs',
                title: 'Correct — Staircase',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Stairs ensure controlled evacuation. Good decision.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Next survival challenge...",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_smoke', label: 'Encounter Smoke', nextScene: 'fs_decision_3' }]
                  }
                ]
              },
              {
                id: 'fs_decision_3',
                title: 'Decision — Smoke Encounter',
                panels: [
                  {
                    character: 'System',
                    text: "Smoke begins filling the stairwell.",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'run_through', label: 'Run upright quickly', nextScene: 'wrong_run' },
                      { id: 'stay_low', label: 'Stay low and cover mouth', nextScene: 'correct_low' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_run',
                title: 'Consequence — Smoke Inhalation',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Smoke inhalation causes unconsciousness faster than flames cause burns.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Oxygen deprivation risk.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs4', label: 'Try Again', nextScene: 'fs_decision_3' }]
                  }
                ]
              },
              {
                id: 'correct_low',
                title: 'Correct — Smoke Survival',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Cleaner air stays near the floor. Good control.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Completing evacuation...",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_finish', label: 'Arrive at Assembly', nextScene: 'fs_summary' }]
                  }
                ]
              },
              {
                id: 'fs_summary',
                title: 'Assembly Point',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "You reached the assembly point and stayed with your team. Discipline saved time and risk.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Module Complete — Emergency readiness achieved.",
                    side: 'center'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "Why are elevators prohibited during fire emergencies?",
          options: [
            "They are slower than stairs",
            "They may fail, trap occupants, or fill with smoke",
            "Because companies prefer stairs"
          ],
          correctIndex: 1,
          explanation: "Elevators rely on electricity and shafts can become smoke chimneys, creating severe entrapment and suffocation risk."
        }
      ]
    },
    {
      id: 'fs-m6',
      title: 'Module 6: Fire Safety Demonstration Video',
      summary: 'Visual walkthrough of evacuation flow, extinguisher handling, and real-world fire response scenarios.',
      order: 6,
      duration: '10 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Fire Safety Demonstration',
          instructions: 'This video demonstrates correct evacuation behavior, extinguisher usage, and emergency response discipline.',
          videoUrl: 'https://example.com/placeholder-fire-safety-video'
        },
        {
          type: 'check',
          question: 'While watching the evacuation demo, what was the FIRST action employees took when the alarm sounded?',
          options: [
            'Called colleagues to confirm the alarm',
            'Stopped work and proceeded to the nearest exit',
            'Opened windows to check for smoke'
          ],
          correctIndex: 1,
          explanation: 'Correct. Immediate evacuation without delay prevents congestion and reduces smoke exposure risk.'
        },
        {
          type: 'check',
          question: 'Why did the demonstrator avoid using the elevator during the fire scenario?',
          options: [
            'Elevators are slower than stairs',
            'Elevators can malfunction or fill with smoke',
            'Company policy prefers staircases only'
          ],
          correctIndex: 1,
          explanation: 'Elevators depend on electricity and shafts can channel smoke, creating entrapment hazards.'
        },
        {
          type: 'check',
          question: 'What key behavior ensured safe group evacuation in the video?',
          options: [
            'Running quickly to exits',
            'Maintaining calm and following fire warden instructions',
            'Waiting for managers to lead first'
          ],
          correctIndex: 1,
          explanation: 'Controlled, calm movement prevents falls, panic, and exit blockages.'
        }
      ]
    },
    {
      id: 'fs-m7',
      title: 'Module 7: Roles & Responsibilities',
      summary: 'Interactive branching simulation on employer, employee, and fire warden duties.',
      order: 7,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Who Does What During a Fire?',
            scenes: [
              {
                id: 'fs7_intro',
                title: 'Shared Responsibility',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Fire safety only works when everyone knows their role. Confusion costs time — and time costs lives.",
                    side: 'left'
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "So it’s not just the fire warden’s job?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Exactly. Employers build the system, employees follow it, and wardens lead during emergencies.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'fs7_scenario',
                title: 'Scenario Begins',
                panels: [
                  {
                    character: 'System',
                    text: "A fire alarm sounds. Smoke is seen near the pantry. You are the nearest employee.",
                    side: 'center'
                  }
                ]
              },
              {
                id: 'fs7_decision1',
                title: 'Decision Point — Employee Responsibility',
                panels: [
                  {
                    character: 'System',
                    text: "What do you do first?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'd1_ignore', label: 'Assume someone else reported it', nextScene: 'fs7_wrong_ignore' },
                      { id: 'd1_report', label: 'Trigger alarm & inform security', nextScene: 'fs7_correct_report' },
                      { id: 'd1_investigate', label: 'Go closer to check fire size', nextScene: 'fs7_wrong_investigate' }
                    ]
                  }
                ]
              },
              {
                id: 'fs7_wrong_ignore',
                title: 'Consequence — Assumption',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Assumptions delay response. Delay increases damage and risk.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Emergency escalation delayed.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs7_1', label: 'Rewind', nextScene: 'fs7_decision1' }]
                  }
                ]
              },
              {
                id: 'fs7_wrong_investigate',
                title: 'Consequence — Unsafe Curiosity',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Approaching fire without equipment risks smoke inhalation and burns.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Personal safety compromised.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs7_2', label: 'Rewind', nextScene: 'fs7_decision1' }]
                  }
                ]
              },
              {
                id: 'fs7_correct_report',
                title: 'Correct — Immediate Reporting',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Alarm raised. Fire wardens activated. Good decision.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Moving to active emergency phase...",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_warden', label: 'Next: Interaction', nextScene: 'fs7_decision2' }]
                  }
                ]
              },
              {
                id: 'fs7_decision2',
                title: 'Decision Point — Fire Warden Role',
                panels: [
                  {
                    character: 'System',
                    text: "A fire warden asks you to help guide visitors toward the exit. What do you do?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'd2_refuse', label: 'Say it’s not your job', nextScene: 'fs7_wrong_refuse' },
                      { id: 'd2_help', label: 'Assist calmly and guide visitors', nextScene: 'fs7_correct_help' }
                    ]
                  }
                ]
              },
              {
                id: 'fs7_wrong_refuse',
                title: 'Consequence — Role Rigidity',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "In emergencies, cooperation overrides job descriptions.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Evacuation slowed.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs7_3', label: 'Try Again', nextScene: 'fs7_decision2' }]
                  }
                ]
              },
              {
                id: 'fs7_correct_help',
                title: 'Correct — Cooperative Action',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Team cooperation ensures faster, safer evacuation.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Evacuation successful. Fast-forward to routine safety...",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_maintenance', label: 'Next: Prevention', nextScene: 'fs7_decision3' }]
                  }
                ]
              },
              {
                id: 'fs7_decision3',
                title: 'Decision Point — Employer Responsibility Awareness',
                panels: [
                  {
                    character: 'System',
                    text: "You notice the extinguisher gauge is low weeks later. What now?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'd3_ignore', label: 'Ignore — not urgent', nextScene: 'fs7_wrong_gauge' },
                      { id: 'd3_report', label: 'Report maintenance immediately', nextScene: 'fs7_correct_gauge' }
                    ]
                  }
                ]
              },
              {
                id: 'fs7_wrong_gauge',
                title: 'Consequence — Preventable Failure',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Unreported equipment failure turns small fires into disasters.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Infrastructure risk increased.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_fs7_4', label: 'Rewind', nextScene: 'fs7_decision3' }]
                  }
                ]
              },
              {
                id: 'fs7_correct_gauge',
                title: 'Correct — Shared Responsibility',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Reporting ensures employer systems stay functional.",
                    side: 'right'
                  },
                  {
                    character: 'System',
                    text: "Shared accountability verified.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'to_fin', label: 'Finish Story', nextScene: 'fs7_summary' }]
                  }
                ]
              },
              {
                id: 'fs7_summary',
                title: 'Key Takeaway',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Employers build safety systems. Employees follow them. Wardens lead emergencies. Safety succeeds only together.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Module 7 Complete — Responsibility is Shared.",
                    side: 'center'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'check',
          question: "During a fire evacuation, whose instructions take priority?",
          options: [
            "Immediate Manager",
            "Fire Warden",
            "Any Senior Employee"
          ],
          correctIndex: 1,
          explanation: "Fire wardens are specifically trained for emergencies and their instructions override normal hierarchy."
        }
      ]
    },
    {
      id: 'fs-m8',
      title: 'Module 8: Fire Drill Simulation & Awareness Video',
      summary: 'Watch a simulated fire drill and validate your understanding through logic checks.',
      order: 8,
      duration: '15 mins',
      parts: [
        {
          type: 'videoPlaceholder',
          title: 'Fire Drill Simulation',
          instructions: 'This video demonstrates a complete office fire drill, including alarm response, evacuation, assembly points, and warden coordination.',
          videoUrl: 'https://example.com/placeholder-fire-drill-video.mp4'
        },
        {
          type: 'check',
          question: 'During a fire drill, what is the PRIMARY objective for employees?',
          options: [
            'Finish current work quickly before leaving',
            'Evacuate calmly using designated exits',
            'Wait for manager confirmation before moving',
            'Collect personal belongings before exiting'
          ],
          correctIndex: 1,
          explanation: 'Correct. The main objective is a calm and immediate evacuation using designated exits. Delays increase risk.'
        },
        {
          type: 'check',
          question: 'If you notice someone using an elevator during a drill, what should you do?',
          options: [
            'Ignore it since it is only a drill',
            'Follow them to exit faster',
            'Alert them to use stairs and inform a fire warden',
            'Record it and report later'
          ],
          correctIndex: 2,
          explanation: 'Correct. Elevators are unsafe during fires. Immediate correction prevents dangerous habits.'
        },
        {
          type: 'check',
          question: 'Why are assembly points important after evacuation?',
          options: [
            'To rest and socialize',
            'For headcount and accountability',
            'To wait for elevators to reopen',
            'To retrieve belongings later'
          ],
          correctIndex: 1,
          explanation: 'Assembly points allow headcounts and ensure no one is missing or trapped inside.'
        },
        {
          type: 'check',
          question: 'A colleague insists the alarm is a false alert and refuses to move. What is the BEST response?',
          options: [
            'Agree and continue working',
            'Evacuate yourself and notify a fire warden',
            'Argue loudly with them',
            'Wait until others decide'
          ],
          correctIndex: 1,
          explanation: 'Correct. Personal safety comes first, and fire wardens are trained to handle non-compliance.'
        }
      ]
    },
    {
      id: 'fs-m9',
      title: 'Module 9: Special Emergency Situations',
      summary: 'Interactive branching simulation for trapped scenarios, smoke exposure, and rescue judgment.',
      order: 9,
      duration: '25 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Critical Fire Scenarios — Interactive Simulation',
            scenes: [
              {
                id: 'm9_intro',
                title: 'Unexpected Situations',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Not all emergencies follow evacuation drills. Sometimes situations become unpredictable.",
                    side: 'left',
                    visualDescription: "Dim lighting. Emergency alert flashing on screen."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "So this is about what happens when things don’t go as planned?",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Exactly. Your decisions here determine survival — not speed, but judgment.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm9_scenario',
                title: 'Smoke on the Floor',
                panels: [
                  {
                    character: 'System',
                    text: "Scenario: You are on the 4th floor. Smoke begins entering the corridor and the nearest exit is blocked.",
                    side: 'center'
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "You must decide quickly. What do you do?",
                    side: 'right'
                  }
                ]
              },
              {
                id: 'm9_decision1',
                title: 'Decision — Immediate Reaction',
                panels: [
                  {
                    character: 'System',
                    text: "Choose your action:",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'run_smoke', label: 'Run through smoke to reach exit', nextScene: 'wrong_smoke' },
                      { id: 'seal_room', label: 'Enter nearest room and seal gaps', nextScene: 'correct_room' },
                      { id: 'hide_desk', label: 'Hide under desk and wait', nextScene: 'wrong_hide' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_smoke',
                title: 'Consequence — Smoke Inhalation',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Smoke causes disorientation and suffocation within seconds.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Visibility lost. Breathing difficulty.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_smoke', label: 'Rewind Decision', nextScene: 'm9_decision1' }]
                  }
                ]
              },
              {
                id: 'wrong_hide',
                title: 'Consequence — Unsafe Shelter',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Desks offer no smoke protection. Lack of airflow increases risk.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Smoke accumulation intensifies.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_hide', label: 'Try Again', nextScene: 'm9_decision1' }]
                  }
                ]
              },
              {
                id: 'correct_room',
                title: 'Correct — Controlled Isolation',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Closing the door and sealing gaps slows smoke entry.",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Good. Now signal rescuers and stay near fresh air.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm9_decision2',
                title: 'Decision — Communication',
                panels: [
                  {
                    character: 'System',
                    text: "How do you signal for help?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'phone_call', label: 'Call emergency/security', nextScene: 'correct_call' },
                      { id: 'break_window', label: 'Break window immediately', nextScene: 'wrong_window' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_window',
                title: 'Consequence — Air Surge',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Breaking windows increases oxygen flow and can intensify flames.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Fire intensification risk.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_window', label: 'Rewind', nextScene: 'm9_decision2' }]
                  }
                ]
              },
              {
                id: 'correct_call',
                title: 'Correct — Emergency Alert',
                panels: [
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
                    text: "I’ve informed security and shared my location.",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Clear communication increases rescue speed dramatically.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm9_decision3',
                title: 'Decision — Helping Others',
                panels: [
                  {
                    character: 'System',
                    text: "You hear someone shouting in the corridor. What now?",
                    side: 'center',
                    type: 'choice',
                    options: [
                      { id: 'rush_out', label: 'Rush out to help immediately', nextScene: 'wrong_rush' },
                      { id: 'guide_voice', label: 'Guide them verbally from inside', nextScene: 'correct_voice' }
                    ]
                  }
                ]
              },
              {
                id: 'wrong_rush',
                title: 'Consequence — Dual Risk',
                panels: [
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor',
                    text: "Unplanned rescue attempts can create multiple victims.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "Outcome: Increased exposure risk.",
                    side: 'center',
                    type: 'choice',
                    options: [{ id: 'rewind_rush', label: 'Try Again', nextScene: 'm9_decision3' }]
                  }
                ]
              },
              {
                id: 'correct_voice',
                title: 'Correct — Safe Assistance',
                panels: [
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya',
                    text: "Stay low and move toward the exit on your left!",
                    side: 'right'
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "You assisted without risking additional casualties.",
                    side: 'left'
                  }
                ]
              },
              {
                id: 'm9_summary',
                title: 'Key Takeaways',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
                    text: "Special emergencies require calm isolation, smart signaling, and safe assistance.",
                    side: 'left'
                  },
                  {
                    character: 'System',
                    text: "You completed Special Emergency Situations. Judgment saves lives.",
                    side: 'center'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: 'fs-m10',
      title: 'Module 10: Do’s & Don’ts During Fire & Emergencies',
      summary: 'Mandatory safe practices and common mistakes to avoid during emergency evacuations.',
      order: 10,
      duration: '15 mins',
      parts: [
        {
          type: 'comic',
          comicData: {
            title: 'Safety Guidelines: Do’s and Don’ts',
            scenes: [
              {
                title: 'Emergency Conduct',
                panels: [
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "Welcome to Module 10: Do’s and Don’ts during fire and emergencies. Behavior matters as much as equipment.",
                    side: 'left',
                    visualDescription: "Director’s Note: Meera stands by a board titled 'Do’s & Don’ts'. Team listens attentively."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "Correct actions save lives. Wrong actions—even quick ones—can escalate danger.",
                    side: 'left',
                    visualDescription: "Director’s Note: Close-up of Meera speaking firmly."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt',
                    text: "So emergencies require controlled decisions, not rushed ones.",
                    side: 'right',
                    visualDescription: "Director’s Note: Aarav takes notes."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer',
                    text: "Exactly. Panic leads to mistakes that affect everyone.",
                    side: 'right',
                    visualDescription: "Director’s Note: Riya responds calmly."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "Let’s start with DO’s—behaviors that are mandatory and safe.",
                    side: 'left',
                    visualDescription: "Director’s Note: Slide shifts to 'DO’s: Mandatory Safe Practices'."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DO: Stay calm. Panic spreads quickly and causes injuries.",
                    side: 'left',
                    visualDescription: "Director’s Note: Meera demonstrates slow breathing."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt',
                    text: "Calmness keeps the group steady.",
                    side: 'right',
                    visualDescription: "Director’s Note: Aarav nods, absorbing the point."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DO: Treat every alarm as real. Evacuate immediately.",
                    side: 'left',
                    visualDescription: "Director’s Note: Alarm symbol glows on screen."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer',
                    text: "Waiting to confirm wastes critical seconds.",
                    side: 'right',
                    visualDescription: "Director’s Note: Riya speaks with clarity."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DO: Use only designated emergency exits and staircases.",
                    side: 'left',
                    visualDescription: "Director’s Note: Meera points at an exit diagram."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DO: Move quickly but do not run. Running leads to falls and panic.",
                    side: 'left',
                    visualDescription: "Director’s Note: Crowd movement shown in orderly lines."
                  },
                  {
                    character: 'Aarav',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&top=shortHair&mouth=open&clothing=shirt',
                    text: "Speed without control becomes a risk.",
                    side: 'right',
                    visualDescription: "Director’s Note: Aarav comments thoughtfully."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DO: Stay low if there is smoke. Cleaner air is near the floor.",
                    side: 'left',
                    visualDescription: "Director’s Note: Meera demonstrates low posture."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DO: Follow fire warden instructions immediately and without debate.",
                    side: 'left',
                    visualDescription: "Director’s Note: Fire warden icon displayed on the slide."
                  },
                  {
                    character: 'Mr. Kapoor',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kapoor&top=shortHair&hairColor=grey&mouth=serious&clothing=suit',
                    text: "In emergencies, wardens’ authority overrides regular hierarchy.",
                    side: 'left',
                    visualDescription: "Director’s Note: Mr. Kapoor reinforces leadership compliance."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DON’T: Use elevators. They can fail or fill with smoke.",
                    side: 'left',
                    visualDescription: "Director’s Note: Elevator crossed-out icon appears."
                  },
                  {
                    character: 'Riya',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&top=longHair&mouth=smile&clothing=blazer',
                    text: "Stairs are the only safe option.",
                    side: 'right',
                    visualDescription: "Director’s Note: Riya gestures toward staircase signage."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DON’T: Return for belongings. Property is replaceable—lives aren’t.",
                    side: 'left',
                    visualDescription: "Director’s Note: Visual cue of a desk left behind."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "DON’T: Block exits, run, push, or spread unverified information.",
                    side: 'left',
                    visualDescription: "Director’s Note: Slide lists prohibited behaviors clearly."
                  },
                  {
                    character: 'Meera',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&top=longHair&hairColor=brown&mouth=smile&clothing=blazer',
                    text: "Key takeaway: Calm, disciplined, procedure-led behavior saves lives. This completes Module 10.",
                    side: 'left',
                    visualDescription: "Director’s Note: Final slide reads 'Safety = Discipline'."
                  }
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
      "id": "fsq1",
      "text": "During a routine workday, you notice a faint burning smell near a workstation where multiple extension cords are connected to a single outlet. The employee using the station claims everything is working fine and asks you not to report it. Which response aligns BEST with fire prevention principles?",
      "options": [
        "Respect their request and ignore the smell to avoid conflict.",
        "Unplug all devices immediately without informing anyone.",
        "Report the hazard through official channels while advising safe load reduction.",
        "Wait until visible smoke appears before taking action."
      ],
      "correctAnswer": 2
    },
    {
      "id": "fsq2",
      "text": "A small paper fire begins in a waste bin near a printer that is still plugged in. You have a water extinguisher nearby. What is the MOST accurate assessment?",
      "options": [
        "Use water immediately because paper fires are always safe for water.",
        "Disconnect power first if safe, then assess extinguisher suitability.",
        "Throw water regardless of electrical risk.",
        "Ignore it and wait for alarms."
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq3",
      "text": "Which factor contributes MOST significantly to rapid fire spread in modern office environments compared to older workplaces?",
      "options": [
        "Carpet color choices",
        "Higher concentration of synthetic materials and electrical density",
        "Larger meeting rooms",
        "Glass partitions"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq4",
      "text": "You observe employees frequently propping open a fire exit door for ventilation. What is the most critical risk created by this behavior?",
      "options": [
        "Energy inefficiency",
        "Compromised smoke containment and fire barrier failure",
        "Noise disturbance",
        "Reduced lighting"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq5",
      "text": "In fire emergencies, why is human panic considered a secondary hazard rather than a primary cause?",
      "options": [
        "Because it rarely occurs",
        "Because panic amplifies injury probability and obstructs evacuation",
        "Because alarms eliminate panic",
        "Because wardens prevent it entirely"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq6",
      "text": "CASE STUDY: During a fire drill, half the floor continues working because they assume it is only a test. Two exits are partially blocked by temporary furniture placed earlier for an event. After the drill, management debates whether this behavior is acceptable since it was not a real fire. What is the MOST accurate conclusion?",
      "options": [
        "Drills do not require seriousness because no real risk exists.",
        "Blocking exits is acceptable if removed later.",
        "Complacency during drills creates lethal habits during real emergencies.",
        "Furniture placement has no evacuation impact."
      ],
      "correctAnswer": 2
    },
    {
      "id": "fsq7",
      "text": "Which fire class presents the highest risk of violent flare-up when water is used incorrectly?",
      "options": [
        "Class A",
        "Class B",
        "Class C",
        "Class D"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq8",
      "text": "Why is ‘accountability at assembly points’ a critical evacuation objective?",
      "options": [
        "To maintain attendance records",
        "To confirm evacuation completeness and detect missing persons",
        "To enforce discipline",
        "To reduce noise"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq9",
      "text": "Which behavior MOST directly increases smoke inhalation risk during evacuation?",
      "options": [
        "Walking briskly",
        "Standing upright in dense smoke",
        "Following wardens",
        "Holding handrails"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq10",
      "text": "Why are elevators prohibited during fire emergencies even if they appear functional?",
      "options": [
        "They consume power",
        "They may stall, open into fire zones, or fill with smoke",
        "They slow evacuation statistics",
        "They are difficult to operate"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq11",
      "text": "CASE STUDY: An employee attempts to extinguish a medium-sized electrical fire using a nearby extinguisher but blocks the only visible exit while doing so. The fire grows slightly but remains contained. Evaluate the decision.",
      "options": [
        "Correct because extinguishing attempts are always prioritized.",
        "Incorrect because exit obstruction removes escape viability.",
        "Acceptable if fire is controlled quickly.",
        "Correct since bravery outweighs risk."
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq12",
      "text": "What is the primary objective of sealing door gaps when trapped?",
      "options": [
        "Sound insulation",
        "Smoke infiltration delay",
        "Temperature control",
        "Visibility enhancement"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq13",
      "text": "Which responsibility belongs MOST directly to the employer?",
      "options": [
        "Avoiding elevators",
        "Installing and maintaining safety infrastructure",
        "Following exit signs",
        "Carrying personal safety kits"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq14",
      "text": "Why should employees avoid returning for belongings even if evacuation seems slow?",
      "options": [
        "Because property insurance covers losses",
        "Because delay multiplies exposure risk for self and others",
        "Because rules demand obedience",
        "Because belongings block exits"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq15",
      "text": "Which factor MOST reduces effective extinguisher usage success?",
      "options": [
        "Incorrect PASS technique",
        "Extinguisher color",
        "Room lighting",
        "Floor texture"
      ],
      "correctAnswer": 0
    },
    {
      "id": "fsq16",
      "text": "CASE STUDY: Smoke begins entering a conference room. One employee breaks the window for fresh air while another seals the door and calls security. Analyze the safer action.",
      "options": [
        "Breaking the window is always correct.",
        "Sealing the door and calling security preserves containment and communication.",
        "Both are equal.",
        "Neither action matters."
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq17",
      "text": "Which psychological response MOST commonly delays evacuation?",
      "options": [
        "Curiosity and confirmation bias",
        "Physical fatigue",
        "Environmental noise",
        "Temperature discomfort"
      ],
      "correctAnswer": 0
    },
    {
      "id": "fsq18",
      "text": "Why is training considered more important than equipment availability?",
      "options": [
        "Equipment expires",
        "Untrained decisions negate equipment value",
        "Training is cheaper",
        "Equipment is optional"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq19",
      "text": "Which hazard is MOST overlooked in office fire risk assessments?",
      "options": [
        "Decor items",
        "Improper cable management and socket overloading",
        "Window blinds",
        "Coffee machines"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq20",
      "text": "Why must fire wardens’ instructions override hierarchy?",
      "options": [
        "To avoid arguments",
        "Because survival protocols require unified command",
        "To enforce discipline",
        "Because policies demand it"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq21",
      "text": "CASE STUDY: An employee delays evacuation to send a final email update to clients, believing professional responsibility is critical. Evaluate the action.",
      "options": [
        "Acceptable professionalism",
        "Unacceptable prioritization of work over life safety",
        "Depends on urgency",
        "Acceptable if under two minutes"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq22",
      "text": "Which condition makes extinguisher use inappropriate?",
      "options": [
        "Fire is smaller than a waste bin",
        "Escape route is unclear or blocked",
        "Nearby smoke detector active",
        "Two people present"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq23",
      "text": "What is the most effective anti-panic measure?",
      "options": [
        "Strict enforcement",
        "Regular realistic drills",
        "Warning emails",
        "Security presence"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq24",
      "text": "Why must exit signage remain illuminated at all times?",
      "options": [
        "Regulatory requirement",
        "Visibility during power outages and smoke conditions",
        "Aesthetic value",
        "Maintenance tracking"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq25",
      "text": "Which response is MOST appropriate when encountering thick smoke?",
      "options": [
        "Run quickly",
        "Stay upright",
        "Stay low and cover nose/mouth",
        "Call colleagues"
      ],
      "correctAnswer": 2
    },
    {
      "id": "fsq26",
      "text": "CASE STUDY: During evacuation, an employee attempts to help a colleague retrieve a laptop from their desk before exiting. Evaluate the risk logic.",
      "options": [
        "Teamwork priority",
        "Property recovery justified",
        "Creates dual exposure and delays safe exit",
        "Acceptable if laptop is critical"
      ],
      "correctAnswer": 2
    },
    {
      "id": "fsq27",
      "text": "Which environment increases fire acceleration MOST rapidly?",
      "options": [
        "Open balconies",
        "Closed, oxygen-rich indoor spaces with synthetics",
        "Carpeted hallways",
        "Concrete stairwells"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq28",
      "text": "Why are headcounts non-negotiable?",
      "options": [
        "Attendance records",
        "Ensuring no trapped individuals remain unnoticed",
        "Policy compliance",
        "Noise control"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq29",
      "text": "Which factor MOST influences survival probability in enclosed fire scenarios?",
      "options": [
        "Footwear",
        "Speed of response and decision clarity",
        "Clothing material",
        "Desk location"
      ],
      "correctAnswer": 1
    },
    {
      "id": "fsq30",
      "text": "What is the ultimate principle behind all fire safety protocols?",
      "options": [
        "Asset protection",
        "Regulatory compliance",
        "Preservation of human life over property",
        "Operational continuity"
      ],
      "correctAnswer": 2
    }
  ]
};

export default fireSafetyAndEvacuation;