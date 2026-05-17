export interface Task {
  id: string;
  name: string;
  deadline: string; // Stored as ISO string
  isCompleted: boolean;
  createdAt: string;
}

export type RobotEmotion = 'smile' | 'suspicious' | 'panic' | 'angry';

export interface EmotionLevel {
  emotion: RobotEmotion;
  severity: number;
}
