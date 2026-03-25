export type ContentPartType = 'text' | 'list' | 'quote' | 'check' | 'tip' | 'scenario' | 'diagnostic' | 'comic' | 'videoPlaceholder';

export interface HotspotChoice {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Hotspot {
  id: string;
  label: string;
  description: string;
  isRedFlag: boolean;
  feedback: string;
  x: number;
  y: number;
  choices?: HotspotChoice[];
}

export interface SceneCharacterBubble {
  character: string;
  text: string;
  x: number;
  y: number;
  side: 'left' | 'right';
  avatar: string;
}

export interface DiagnosticChallenge {
  id: string;
  prompt: string;
  backgroundImage?: string;
  options?: { text: string; isCorrect: boolean; feedback: string }[];
  hotspots?: Hotspot[];
  characterBubbles?: SceneCharacterBubble[];
}

export interface DiagnosticData {
  type: 'audit' | 'radar' | 'red-flag';
  title: string;
  instructions: string;
  challenges: DiagnosticChallenge[];
  successMessage: string;
}

export interface ComicChoiceOption {
  id: string;
  label: string;
  nextScene: string;
}

export interface ComicPanel {
  character: string;
  avatar?: string;
  text: string;
  side: 'left' | 'right' | 'center';
  emotion?: string;
  visualDescription?: string;
  type?: 'text' | 'choice';
  options?: ComicChoiceOption[];
}

export interface ComicScene {
  id?: string;
  title: string;
  panels: ComicPanel[];
}

export interface ComicData {
  title: string;
  scenes: ComicScene[];
}

export interface ContentPart {
  type: ContentPartType;
  title?: string;
  body?: string;
  items?: string[];
  question?: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
  diagnosticData?: DiagnosticData;
  comicData?: ComicData;
  videoUrl?: string;
  instructions?: string;
}

export interface Module {
  id: string;
  title: string;
  summary: string;
  order: number;
  duration?: string;
  parts: ContentPart[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  modules: Module[];
  assessment: Question[];
  icon: string;
  colorTheme?: string;
}

export interface UserProgress {
  courseId: string;
  completedModules: string[];
  assessmentScore?: number;
  isCompleted: boolean;
  completionDate?: string;
  lastUpdated?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'hr' | 'employee' | 'platform_admin';
  department: string;
  avatar: string;
  progress: Record<string, UserProgress>;
  assignedCourses: string[];
  xp?: number;
}

export interface AppState {
  session: any | null;
  profile: UserProfile | null;
  loading: boolean;
}