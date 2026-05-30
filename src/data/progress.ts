import { Progress, ExamResult } from "./types";

const STORAGE_KEY = "paa-utp-progress";

function getDefault(): Progress {
  return { completedTopics: [], exerciseResults: {}, examHistory: [] };
}

export function getProgress(): Progress {
  if (typeof window === "undefined") return getDefault();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : getDefault();
  } catch {
    return getDefault();
  }
}

export function saveProgress(progress: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markTopicComplete(topicId: string) {
  const p = getProgress();
  if (!p.completedTopics.includes(topicId)) {
    p.completedTopics.push(topicId);
  }
  saveProgress(p);
}

export function saveExerciseResult(exerciseId: string, correct: boolean) {
  const p = getProgress();
  p.exerciseResults[exerciseId] = correct;
  saveProgress(p);
}

export function saveExamResult(result: ExamResult) {
  const p = getProgress();
  p.examHistory.push(result);
  saveProgress(p);
}

export function getStats() {
  const p = getProgress();
  const totalExercises = Object.keys(p.exerciseResults).length;
  const correctExercises = Object.values(p.exerciseResults).filter(Boolean).length;
  const accuracy = totalExercises > 0 ? Math.round((correctExercises / totalExercises) * 100) : 0;
  const lastExam = p.examHistory.length > 0 ? p.examHistory[p.examHistory.length - 1] : null;

  return {
    completedTopics: p.completedTopics.length,
    totalExercises,
    correctExercises,
    accuracy,
    examsCompleted: p.examHistory.length,
    lastExam,
    examHistory: p.examHistory,
  };
}
