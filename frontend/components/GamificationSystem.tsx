import React from 'react';
import { calculateBadge, getNextBadge } from '../systems/gamification';

interface Props {
  xp: number;
}

const GamificationSystem: React.FC<Props> = ({ xp }) => {
  const currentBadge = calculateBadge(xp);
  const nextBadge = getNextBadge(xp);
  
  const progress = nextBadge 
    ? Math.round(((xp - currentBadge.xp) / (nextBadge.xp - currentBadge.xp)) * 100) 
    : 100;

  return (
    <div className="fixed bottom-8 left-8 z-[60] animate-in slide-in-from-left duration-700">
      <div className="bg-slate-900 border-4 border-black p-6 rounded-[32px] shadow-[12px_12px_0px_#000] flex items-center gap-6 min-w-[280px]">
        <div className="h-16 w-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center text-3xl shadow-lg">
          {currentBadge.icon}
        </div>
        <div className="flex-grow">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">{currentBadge.name}</p>
          <div className="flex items-baseline gap-2 mb-3">
             <h4 className="text-2xl font-black text-white italic font-['Bangers']">{xp}</h4>
             <span className="text-[10px] font-bold text-slate-500 uppercase">Total XP</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-white/10">
             <div className="bg-indigo-500 h-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationSystem;