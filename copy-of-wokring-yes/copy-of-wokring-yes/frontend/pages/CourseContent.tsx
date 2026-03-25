import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProfile, ContentPart, DiagnosticData, ComicData, Hotspot, HotspotChoice } from '../types';
import { XP_RULES } from '../systems/gamification';

interface CourseContentProps {
  state: UserProfile;
  updateProgress: (courseId: string, moduleId?: string, isCompleted?: boolean, score?: number) => void;
  onGainXP: (amount: number) => void;
}

const CourseContent: React.FC<CourseContentProps> = ({ state, updateProgress, onGainXP }) => {
  const { id, moduleId } = useParams<{ id: string, moduleId: string }>();
  const navigate = useNavigate();

  const course = COURSES.find(c => c.id === id);
  const module = course?.modules.find(m => m.id === moduleId);

  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; show: boolean; msg?: string } | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [foundFlags, setFoundFlags] = useState<Set<string>>(new Set());

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Simulation specific state
  const [diagChallengeIdx, setDiagChallengeIdx] = useState(0);
  const [diagComplete, setDiagComplete] = useState(false);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [currentPanelIdx, setCurrentPanelIdx] = useState(0);
  const [comicRead, setComicRead] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPartIndex(0);
    setFeedback(null);
    setDiagChallengeIdx(0);
    setDiagComplete(false);
    setComicRead(false);
    setCurrentSceneIdx(0);
    setCurrentPanelIdx(0);
    setFoundFlags(new Set());
    setActiveHotspot(null);
    setSelectedOption(null);
  }, [moduleId]);

  if (!course || !module) return null;

  const currentPart = module.parts[currentPartIndex];
  const isFirstPart = currentPartIndex === 0;
  const isLastPart = currentPartIndex === module.parts.length - 1;
  const isLastModule = course.modules.indexOf(module) === course.modules.length - 1;

  const handleNextPart = () => {
    if (currentPart?.type === 'diagnostic' && !diagComplete) return;
    if (currentPart?.type === 'comic' && !comicRead) return;

    onGainXP(XP_RULES.STEP_COMPLETE);

    if (!isLastPart) {
      setCurrentPartIndex(prev => prev + 1);
      setFeedback(null);
    } else {
      handleNextModule();
    }
  };

  const handleNextModule = () => {
    updateProgress(course.id, module.id, false);
    if (!isLastModule) {
      const nextIndex = course.modules.indexOf(module) + 1;
      navigate(`/course/${course.id}/module/${course.modules[nextIndex].id}`);
    } else {
      navigate(`/course/${course.id}/assessment`);
    }
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    if (foundFlags.has(hotspot.id)) return;
    setActiveHotspot(hotspot);
  };

  const handleChoiceSelect = (choice: HotspotChoice, hotspot: Hotspot) => {
    setFeedback({ isCorrect: choice.isCorrect, show: true, msg: choice.feedback });
    if (choice.isCorrect) {
      onGainXP(XP_RULES.LOGIC_CHECK_CORRECT);
      setFoundFlags(prev => new Set(prev).add(hotspot.id));
      setTimeout(() => { setActiveHotspot(null); setFeedback(null); }, 1500);
    } else {
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  const nextDiagChallenge = (challenges: any[]) => {
    if (diagChallengeIdx < challenges.length - 1) {
      setDiagChallengeIdx(prev => prev + 1);
      setFoundFlags(new Set());
    } else {
      setDiagComplete(true);
    }
  };

  const renderDiagnostic = (diag: DiagnosticData) => {
    const challenge = diag.challenges[diagChallengeIdx];
    const totalFlagsInScene = challenge.hotspots?.filter(h => h.isRedFlag).length || 0;
    const allFoundInScene = foundFlags.size === totalFlagsInScene;

    if (diagComplete) {
      return (
        <div className="text-center py-24 animate-in zoom-in">
          <div className="h-20 w-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-8 shadow-xl">✓</div>
          <h3 className="text-5xl font-black text-slate-900 mb-6 tracking-tight italic font-['Bangers']">Observation Log Verified</h3>
          <p className="text-xl text-slate-500 mb-16 max-w-xl mx-auto font-medium leading-relaxed">{diag.successMessage}</p>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-10">
        <header className="bg-slate-900 p-8 rounded-[32px] text-white flex flex-col md:flex-row justify-between items-center border-b-[8px] border-indigo-600 shadow-xl">
          <div>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 inline-block">Statutory Simulation</span>
            <h3 className="text-2xl font-black italic tracking-tight font-['Bangers']">"{challenge.prompt}"</h3>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Identified Risks</p>
            <p className="text-4xl font-black text-white tracking-tighter">{foundFlags.size} / {totalFlagsInScene}</p>
          </div>
        </header>

        <div className="relative w-full aspect-video bg-slate-100 rounded-[48px] overflow-hidden border-[10px] border-black shadow-[24px_24px_0px_rgba(0,0,0,0.1)]">
          <img src={challenge.backgroundImage || undefined} className="w-full h-full object-cover opacity-60 grayscale" alt="Scenario" />

          {challenge.hotspots?.map((hotspot) => (
            <div key={hotspot.id} className="absolute z-30" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}>
              {!foundFlags.has(hotspot.id) ? (
                <button onClick={() => handleHotspotClick(hotspot)} className="h-14 w-14 bg-rose-600 border-[6px] border-black rounded-full flex items-center justify-center text-white font-black animate-pulse shadow-lg">
                  !
                </button>
              ) : (
                <div className="h-14 w-14 bg-emerald-500 border-[6px] border-black rounded-full flex items-center justify-center text-white font-black">✓</div>
              )}

              {activeHotspot?.id === hotspot.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 z-50 min-w-[300px]">
                  <div className="bg-white border-[6px] border-black p-8 shadow-[12px_12px_0px_#000] relative animate-in zoom-in rounded-none">
                    <p className="text-[10px] font-black uppercase mb-6 text-slate-400 tracking-widest border-b-2 pb-3">Analyze Observation:</p>
                    <div className="flex flex-col gap-3">
                      {hotspot.choices?.map((choice, i) => (
                        <button key={i} onClick={() => handleChoiceSelect(choice, hotspot)} className="w-full p-4 bg-slate-50 border-4 border-slate-100 rounded-none text-slate-700 text-xs font-black uppercase text-left hover:bg-black hover:text-white transition-all">
                          {choice.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {feedback?.show && (
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] p-10 border-[10px] border-black shadow-[32px_32px_0px_#000] animate-in zoom-in ${feedback.isCorrect ? 'bg-emerald-400 text-black' : 'bg-rose-400 text-black'}`}>
              <h4 className="text-4xl font-black uppercase mb-4 tracking-tighter font-['Bangers']">{feedback.isCorrect ? 'Validation Logic: Pass' : 'Validation Logic: Fail'}</h4>
              <p className="text-sm font-bold bg-black/5 p-4 italic">"{feedback.msg}"</p>
            </div>
          )}

          {allFoundInScene && !feedback?.show && (
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-[110] flex flex-col items-center justify-center p-20 text-center">
              <h4 className="text-6xl font-black text-white uppercase tracking-tighter mb-8 italic font-['Bangers']">Area Secured</h4>
              <button onClick={() => nextDiagChallenge(diag.challenges)} className="px-16 py-6 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-indigo-500 transition-all shadow-2xl active:scale-95">
                {diagChallengeIdx < diag.challenges.length - 1 ? 'Evaluate Next Zone' : 'Finish Diagnostic'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderComic = (comic: ComicData) => {
    const currentScene = comic.scenes[currentSceneIdx];
    const currentPanel = currentScene?.panels[currentPanelIdx];
    const isAtComicEnd = (currentPanelIdx === currentScene?.panels.length - 1) && (currentSceneIdx === comic.scenes.length - 1);

    const nextPanel = () => {
      if (currentPanel.type === 'choice') return;
      if (currentPanelIdx < currentScene.panels.length - 1) {
        setCurrentPanelIdx(prev => prev + 1);
      } else if (currentSceneIdx < comic.scenes.length - 1) {
        setCurrentSceneIdx(prev => prev + 1);
        setCurrentPanelIdx(0);
      } else {
        setComicRead(true);
        handleNextPart();
      }
    };

    if (!currentPanel) return null;

    return (
      <div className="max-w-5xl mx-auto w-full px-2 md:px-0">
        <div className="bg-white border-[6px] md:border-[10px] border-black rounded-[40px] md:rounded-[80px] shadow-[16px_16px_0px_rgba(0,0,0,1)] md:shadow-[40px_40px_0px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden min-h-[500px] md:min-h-[750px]">

          {/* Top Panel: VISUAL MODULE Title */}
          <div className="p-6 md:p-10 px-6 md:px-14 flex justify-between items-start gap-4">
            <div>
              <h4 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic font-['Bangers'] leading-none">Visual Module</h4>
              <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 md:mt-3">
                Foundations of Safety / The Orientation Room
              </p>
              <div className="h-1 md:h-2 bg-black w-full mt-4 md:mt-6"></div>
            </div>
            <div className="bg-black text-white p-4 px-6 md:p-6 md:px-8 rounded-none flex items-center justify-center font-['Bangers'] text-2xl md:text-4xl italic shadow-lg shrink-0">#{currentSceneIdx + 1}</div>
          </div>

          <div className="px-4 md:px-14 pb-4 md:pb-14 flex-grow flex flex-col">
            {/* Main Visual Display Container */}
            <div
              onClick={currentPanel.type !== 'choice' ? nextPanel : undefined}
              className={`flex-grow relative flex flex-col border-[4px] md:border-[8px] border-black bg-white overflow-hidden ${currentPanel.type !== 'choice' ? 'cursor-pointer hover:bg-slate-50' : ''}`}
            >
              {/* Cinematic Yellow Status Bar */}
              <div className="bg-yellow-400 border-b-[4px] md:border-b-[6px] border-black p-3 md:p-4 px-4 md:px-8 flex items-center gap-4">
                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black">
                  Cinematic Note: <span className="opacity-80 ml-1 md:ml-2 block md:inline mt-1 md:mt-0">{currentPanel.visualDescription || "A regular workplace interaction takes place."}</span>
                </p>
              </div>

              {/* Halftone Visual Area */}
              <div className="flex-grow relative flex items-center justify-center p-4 md:p-12 overflow-hidden h-[300px] md:h-auto">
                <div className="absolute inset-0 halftone opacity-10"></div>
                <div className="absolute inset-0 action-lines opacity-5"></div>

                {/* Character Graphics */}
                {currentPanel.avatar && (
                  <img
                    src={currentPanel.avatar}
                    alt={currentPanel.character}
                    className="h-40 w-40 md:h-80 md:w-80 object-contain z-10 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.1)] md:drop-shadow-[20px_20px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-12 duration-700"
                  />
                )}

                {/* The Signature Dialogue Bubble */}
                <div className={`absolute z-20 w-[90%] md:w-full max-w-[300px] md:max-w-[450px] transform ${currentPanel.side === 'left' ? 'md:-translate-x-1/4' : currentPanel.side === 'right' ? 'md:translate-x-1/4' : ''}`}>
                  <div className="bg-white border-[4px] md:border-[6px] border-black p-6 md:p-10 rounded-[20px] md:rounded-[32px] shadow-xl md:shadow-2xl relative">
                    <p className="text-sm md:text-xl font-black text-black leading-tight italic">
                      "{currentPanel.text}"
                    </p>

                    {/* Decision Blocks */}
                    {currentPanel.type === 'choice' && (
                      <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-8">
                        {currentPanel.options?.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              const nextIdx = comic.scenes.findIndex(s => s.id === opt.nextScene);
                              setCurrentSceneIdx(nextIdx === -1 ? currentSceneIdx + 1 : nextIdx);
                              setCurrentPanelIdx(0);
                            }}
                            className="group relative flex items-center bg-slate-900 text-white p-4 md:p-5 rounded-none border-2 md:border-4 border-black hover:bg-indigo-600 transition-all text-left"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-indigo-500 group-hover:bg-yellow-400"></div>
                            <span className="ml-3 md:ml-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] leading-tight">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Bubble tail */}
                    <div className="absolute -bottom-4 md:-bottom-6 left-8 md:left-12 w-0 h-0 border-l-[10px] md:border-l-[15px] border-l-transparent border-r-[10px] md:border-r-[15px] border-r-transparent border-t-[10px] md:border-t-[15px] border-t-black"></div>
                  </div>

                  {/* Character Tag Box */}
                  <div className="flex mt-3 md:mt-6 ml-6 md:ml-10">
                    <div className="bg-white border-[3px] md:border-[4px] border-black px-4 md:px-6 py-1.5 md:py-2 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] text-black shadow-lg">
                      {currentPanel.character.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Black Footer Navigation */}
              <div className="bg-black p-4 md:p-8 px-6 md:px-12 flex justify-between items-center gap-4">
                <div className="flex gap-1.5 md:gap-3 flex-wrap">
                  {comic.scenes.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2.5 w-2.5 md:h-4 md:w-4 border md:border-2 border-white transition-all ${currentSceneIdx === i ? 'bg-yellow-400' : 'bg-transparent opacity-40'}`}
                    ></div>
                  ))}
                </div>
                <p className="text-yellow-400 font-black italic uppercase tracking-[0.1em] md:tracking-[0.3em] text-[8px] md:text-[11px] text-right">
                  {currentPanel.type === 'choice' ? 'Pending Decision' : isAtComicEnd ? 'Finish Section' : 'Continue Dialogue'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPart = (part: ContentPart) => {
    if (!part) return null;
    switch (part.type) {
      case 'comic': return renderComic(part.comicData!);
      case 'diagnostic': return renderDiagnostic(part.diagnosticData!);
      case 'text': return <p className="text-2xl text-slate-800 leading-relaxed font-black max-w-3xl mx-auto text-center py-20 italic">"{part.body}"</p>;
      case 'videoPlaceholder':
        return (
          <div className="p-16 bg-slate-900 rounded-[56px] text-white text-center border-[8px] border-indigo-600/30 max-w-4xl mx-auto">
            <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-white/20">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>
            <h4 className="text-4xl font-black mb-6 italic font-['Bangers']">{part.title}</h4>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 mx-auto">{part.instructions}</p>
          </div>
        );
      case 'quote':
        return (
          <div className="p-16 bg-white border-l-[10px] border-indigo-600 max-w-3xl mx-auto shadow-sm">
            <p className="text-3xl font-black text-slate-900 italic leading-snug">{part.body}</p>
          </div>
        );
      case 'check':
        return (
          <div className="space-y-12 max-w-3xl mx-auto text-center">
            <span className="px-6 py-2 bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest rounded-full">Knowledge Checkpoint</span>
            <h4 className="text-4xl font-black text-slate-900 tracking-tight leading-tight italic font-['Bangers']">{part.question}</h4>
            <div className="grid grid-cols-1 gap-5">
              {part.options?.map((opt, i) => (
                <button key={i} onClick={() => { setSelectedOption(i); const isCorrect = i === part.correctIndex; setFeedback({ isCorrect, show: true, msg: part.explanation }); if (isCorrect) onGainXP(XP_RULES.LOGIC_CHECK_CORRECT); }} className={`p-8 text-left border-[6px] rounded-2xl transition-all font-black text-lg ${selectedOption === i ? (i === part.correctIndex ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-rose-500 bg-rose-50 text-rose-700') : 'border-slate-100 bg-white text-slate-500 hover:border-slate-300'}`}>
                  {opt}
                </button>
              ))}
            </div>
            {feedback?.show && (
              <div className={`p-10 border-[6px] animate-in slide-in-from-top-4 ${feedback.isCorrect ? 'border-emerald-500 bg-emerald-50' : 'border-rose-500 bg-rose-50'}`}>
                <p className="text-xs font-black mb-3 uppercase tracking-widest">{feedback.isCorrect ? 'Verified' : 'Review Required'}</p>
                <p className="text-base font-bold italic opacity-90">"{feedback.msg}"</p>
              </div>
            )}
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen flex flex-col pb-40">
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-100 sticky top-16 md:top-24 z-40 py-4 md:py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
            <Link to={`/course/${course.id}`} className="p-2 md:p-3 hover:bg-slate-50 border-2 border-slate-100 rounded-2xl transition-all shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            </Link>
            <div className="overflow-hidden">
              <p className="text-[9px] md:text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-0 md:mb-1 truncate">{course.title.split(':')[0]}</p>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight italic font-['Bangers'] truncate">{module.title}</h2>
            </div>
          </div>
          <div className="flex md:flex-col items-center justify-between md:items-end w-full md:w-auto min-w-0 md:min-w-[200px] border-t md:border-0 border-slate-100 pt-3 md:pt-0">
            <p className="text-[9px] md:text-[10px] font-black text-slate-400 mb-0 md:mb-2 uppercase tracking-widest leading-none">Step {currentPartIndex + 1} of {module.parts.length}</p>
            <div className="w-32 md:w-full bg-slate-100 h-1.5 md:h-2 rounded-full overflow-hidden">
              <div className="bg-slate-900 h-full transition-all duration-700" style={{ width: `${((currentPartIndex + 1) / module.parts.length) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-6 lg:p-14">
        <div className="max-w-7xl w-full">
          <div className="p-4 lg:p-12 min-h-[500px] flex flex-col justify-between">
            <div className="animate-in fade-in duration-1000">
              {renderPart(currentPart)}
            </div>

            <div className="mt-24 flex items-center justify-between pt-14 border-t border-slate-100">
              <button onClick={() => setCurrentPartIndex(i => i - 1)} disabled={isFirstPart} className={`px-10 py-5 font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all ${isFirstPart ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:text-slate-900'}`}>Previous</button>
              <button onClick={handleNextPart} disabled={(currentPart?.type === 'diagnostic' && !diagComplete) || (currentPart?.type === 'comic' && !comicRead)} className="px-16 py-6 bg-slate-900 text-white hover:bg-indigo-600 rounded-[32px] font-black uppercase text-[10px] tracking-[0.2em] transition-all active:scale-95 shadow-xl disabled:bg-slate-50 disabled:text-slate-300">
                {isLastPart ? (isLastModule ? 'Proceed to Final Assessment' : 'Complete Module') : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;