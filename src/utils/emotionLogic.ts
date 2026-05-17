import { differenceInDays, startOfDay } from 'date-fns';
import type { Task, RobotEmotion, EmotionLevel } from '../types';

export function calculateDaysRemaining(deadline: string): number {
  const today = startOfDay(new Date());
  const deadlineDate = startOfDay(new Date(deadline));
  return differenceInDays(deadlineDate, today);
}

export function determineEmotionByTaskCount(taskCount: number): RobotEmotion {
  if (taskCount >= 7) return 'angry';
  if (taskCount >= 5) return 'panic';
  if (taskCount >= 3) return 'suspicious';
  return 'smile';
}

export function calculateOverallEmotion(tasks: Task[]): RobotEmotion {
  const activeTasks = tasks.filter(task => !task.isCompleted);
  const taskCount = activeTasks.length;

  return determineEmotionByTaskCount(taskCount);
}
