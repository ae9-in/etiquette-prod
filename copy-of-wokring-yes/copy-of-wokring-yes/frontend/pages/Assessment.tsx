
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProfile } from '../types';

interface AssessmentProps {
  state: UserProfile;
  updateProgress: (courseId: string, moduleId?: string, isCompleted?: boolean, score?: number) => void;
}

const Assessment: React.FC<AssessmentProps> = ({ state, updateProgress }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!course) return null;

  const handleSelect = (qId: string, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    let score = 0;
    course.assessment.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    
    const percent = Math.round((score / course.assessment.length) * 100);
    const pass = percent >= 10;

    updateProgress(course.id, undefined, pass, percent);
    setSubmitted(true);
    
    setTimeout(() => {
      navigate(`/course/${course.id}/completed`);
    }, 1500);
  };

  const allAnswered = Object.keys(answers).length === course.assessment.length;

  return (
    <div className="bg-[#fffdfa] min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-12 text-center">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em] mb-4 inline-block">Final Knowledge Check</span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Assessment: {course.title.split(':')[0]}</h1>
          <p className="text-slate-400 mt-4 font-medium">Score 70% or higher to receive certification.</p>
        </header>

        <div className="space-y-8">
          {course.assessment.map((q, qIdx) => (
            <div key={q.id} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-slate-50 group-hover:bg-orange-500 transition-colors"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex gap-5">
                <span className="text-orange-500 font-black">Q{qIdx + 1}.</span> {q.text}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {q.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(q.id, oIdx)}
                    disabled={submitted}
                    className={`p-6 text-left rounded-3xl border-2 transition-all font-bold ${
                      answers[q.id] === oIdx 
                        ? 'border-orange-500 bg-orange-50 text-orange-700' 
                        : 'border-slate-50 hover:border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900'
                    } ${submitted && q.correctAnswer === oIdx ? 'border-emerald-500 bg-emerald-50' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt}</span>
                      {answers[q.id] === oIdx && <span className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px]">✓</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleSubmit}
            disabled={!allAnswered || submitted}
            className={`px-16 py-6 rounded-[28px] font-black text-lg shadow-2xl transition-all active:scale-95 ${
              allAnswered && !submitted 
                ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            {submitted ? 'Validating Answers...' : 'Submit Assessment'}
          </button>
          {!allAnswered && !submitted && (
            <p className="mt-6 text-[10px] text-slate-400 font-black uppercase tracking-widest">Complete all questions to unlock submission</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
