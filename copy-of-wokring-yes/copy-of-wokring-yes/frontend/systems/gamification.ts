export const XP_RULES = {
  STEP_COMPLETE: 15,
  LOGIC_CHECK_CORRECT: 50,
  MODULE_COMPLETE: 200,
  ASSESSMENT_PASS: 500,
  COURSE_COMPLETE: 1000
};

export const BADGES = [
  { id: 'rookie', name: 'Rookie', xp: 0, icon: '🐣' },
  { id: 'explorer', name: 'Explorer', xp: 200, icon: '🧭' },
  { id: 'specialist', name: 'Specialist', xp: 1000, icon: '🛡️' },
  { id: 'guardian', name: 'Guardian', xp: 2500, icon: '👑' },
  { id: 'legend', name: 'Legend', xp: 5000, icon: '💎' }
];

export const calculateBadge = (xp: number) => {
  return [...BADGES].reverse().find(b => xp >= b.xp) || BADGES[0];
};

export const getNextBadge = (xp: number) => {
  return BADGES.find(b => xp < b.xp) || null;
};