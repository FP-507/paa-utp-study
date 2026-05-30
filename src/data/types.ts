export interface Subtopic {
  id: string;
  title: string;
  content: string;
  examples: { problem: string; solution: string }[];
  tips: string[];
  exercises: Exercise[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subtopics: Subtopic[];
}

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic?: string;
  subtopic?: string;
}

export interface ExamConfig {
  totalQuestions: number;
  timeMinutes: number;
  sections: { name: string; count: number }[];
}

export interface ExamResult {
  date: string;
  score: number;
  total: number;
  timeUsed: number;
  breakdown: { section: string; correct: number; total: number }[];
}

export interface Progress {
  completedTopics: string[];
  exerciseResults: Record<string, boolean>;
  examHistory: ExamResult[];
}
