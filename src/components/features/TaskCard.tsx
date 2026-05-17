import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Check, Trash2, Clock, Bell, Loader2 } from 'lucide-react';
import type { Task } from '../../types';
import { calculateDaysRemaining } from '../../utils/emotionLogic';
import { generateICS } from '../../utils/ics';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => Promise<void> | void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const daysRemaining = calculateDaysRemaining(task.deadline);
  
  const getDaysBadge = () => {
    if (task.isCompleted) return <Badge variant="secondary">Completed</Badge>;
    if (daysRemaining < 0) return <Badge variant="destructive">Overdue</Badge>;
    if (daysRemaining === 0) return <Badge variant="destructive">Due Today</Badge>;
    if (daysRemaining <= 2) return <Badge variant="destructive">{daysRemaining} days left</Badge>;
    if (daysRemaining <= 4) return <Badge className="bg-orange-500 hover:bg-orange-600 text-white">{daysRemaining} days left</Badge>;
    if (daysRemaining <= 6) return <Badge className="bg-amber-500 hover:bg-amber-600 text-white">{daysRemaining} days left</Badge>;
    return <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">{daysRemaining} days left</Badge>;
  };

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(task.id);
  };

  const handleSetAlarm = () => {
    generateICS(task.name, task.deadline);
  };

  return (
    <Card className={cn("transition-all duration-300", task.isCompleted ? "opacity-60 bg-[#fafafc]" : "")}>
      <CardContent className="p-[24px] flex items-center justify-between gap-[24px]">
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={() => onToggle(task.id)}
            className={cn(
              "w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center transition-colors shrink-0",
              task.isCompleted ? "bg-[#0066cc] border-[#0066cc] text-white" : "border-[#cccccc] hover:border-[#0066cc]"
            )}
          >
            {task.isCompleted && <Check className="w-4 h-4" />}
          </button>
          
          <div className="flex flex-col space-y-1">
            <span className={cn("font-semibold text-[17px] tracking-[-0.374px] text-[#1d1d1f]", task.isCompleted && "line-through text-[#7a7a7a]")}>
              {task.name}
            </span>
            <div className="flex items-center text-[14px] text-[#7a7a7a] tracking-[-0.224px]">
              <Clock className="w-3 h-3 mr-1" />
              {format(new Date(task.deadline), 'PPP')}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {getDaysBadge()}
          <Button variant="ghost" size="icon" onClick={handleSetAlarm} className="text-[#0066cc] hover:text-[#0071e3] hover:bg-[#f5f5f7]">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" disabled={isDeleting} onClick={handleDelete} className="text-[#cccccc] hover:text-[#ff3b30] hover:bg-[#ffebe9]">
            {isDeleting ? <Loader2 className="w-5 h-5 animate-spin text-[#ff3b30]" /> : <Trash2 className="w-5 h-5" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
