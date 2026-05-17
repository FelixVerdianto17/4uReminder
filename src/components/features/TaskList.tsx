import type { Task } from '../../types';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => Promise<void> | void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center p-[48px] border border-[#e0e0e0] rounded-[18px] bg-[#fafafc]">
        <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-[-0.374px]">No tasks yet.</h3>
        <p className="text-[14px] text-[#7a7a7a] mt-1 tracking-[-0.224px]">Add a task above to get started!</p>
      </div>
    );
  }

  // Sort: uncompleted first, then by closest deadline
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.isCompleted && !b.isCompleted) return 1;
    if (!a.isCompleted && b.isCompleted) return -1;
    return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
  });

  return (
    <div className="space-y-3">
      {sortedTasks.map(task => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}
