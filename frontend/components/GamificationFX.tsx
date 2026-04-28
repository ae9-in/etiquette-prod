import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { calculateBadge } from '../systems/gamification';

interface Props {
  lastXPGain: { amount: number; timestamp: number } | null;
  xp: number;
}

const GamificationFX: React.FC<Props> = ({ lastXPGain, xp }) => {
  const [showToast, setShowToast] = useState(false);
  const [rankUpData, setRankUpData] = useState<{ name: string; icon: string } | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (lastXPGain && lastXPGain.amount > 0) {
      const oldBadge = calculateBadge(xp - lastXPGain.amount);
      const newBadge = calculateBadge(xp);

      if (newBadge.id !== oldBadge.id) {
        setRankUpData({ name: newBadge.name, icon: newBadge.icon });
        setShowConfetti(true);
        setTimeout(() => setRankUpData(null), 5000);
        setTimeout(() => setShowConfetti(false), 8000);
      }

      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastXPGain, xp]);

  return (
    <div className="gamification-fx-layer fixed inset-0 pointer-events-none z-[9999]">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={400} gravity={0.15} />}

      {/* XP GAIN TOAST (Bottom Left) */}
      {showToast && lastXPGain && (
        <div className="absolute bottom-10 left-10 animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="bg-indigo-600 border-[3px] border-black p-4 px-6 rounded-full shadow-[8px_8px_0px_#000] flex items-center gap-3">
            <span className="text-xl">⭐</span>
            <span className="text-white font-black uppercase text-xs tracking-widest">+{lastXPGain.amount} XP GAINED</span>
          </div>
        </div>
      )}

      {/* COMPACT RANK UP MODAL (Smaller Card Style) */}
      {rankUpData && (
        <div className="absolute top-24 right-10 w-full max-w-[320px] animate-in slide-in-from-right-10 duration-700">
          <div className="bg-[#0f172a] p-6 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden flex items-center gap-5">
             {/* Left Icon Square */}
             <div className="h-16 w-16 bg-white rounded-2xl border-4 border-black flex items-center justify-center text-3xl shadow-lg shrink-0">
               {rankUpData.icon}
             </div>
             
             {/* Text Content */}
             <div className="flex-grow">
                <p className="text-indigo-400 font-black uppercase tracking-widest text-[9px] mb-0.5">Rank Upgraded</p>
                <h2 className="text-2xl font-black text-white italic font-['Bangers'] tracking-tight leading-tight">
                  {rankUpData.name.toUpperCase()}
                </h2>
                <div className="flex items-baseline gap-1 mt-1">
                   <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Unlocked at {xp} XP</span>
                </div>
             </div>

             {/* Decorative Halftone */}
             <div className="absolute inset-0 halftone opacity-5 pointer-events-none"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamificationFX;