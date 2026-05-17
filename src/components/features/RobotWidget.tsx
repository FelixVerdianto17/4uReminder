import { Card, CardContent } from '../ui/card';
import type { RobotEmotion } from '../../types';
import { Bot, Smile, Search, AlertTriangle, Frown } from 'lucide-react';

interface RobotWidgetProps {
  emotion: RobotEmotion;
  totalActiveTasks: number;
}

export function RobotWidget({ emotion, totalActiveTasks }: RobotWidgetProps) {
  const getEmotionDetails = () => {
    switch (emotion) {
      case 'smile': return { icon: Smile, color: 'text-[#0066cc]', bg: 'bg-[#fafafc]', label: 'All Good!' };
      case 'suspicious': return { icon: Search, color: 'text-[#ff9f0a]', bg: 'bg-[#fafafc]', label: 'Suspicious...' };
      case 'panic': return { icon: AlertTriangle, color: 'text-[#ff3b30]', bg: 'bg-[#fafafc]', label: 'Panic Mode!' };
      case 'angry': return { icon: Frown, color: 'text-[#ff3b30]', bg: 'bg-[#fafafc]', label: 'ANGRY!' };
      default: return { icon: Smile, color: 'text-[#0066cc]', bg: 'bg-[#fafafc]', label: 'All Good!' };
    }
  };

  const { icon: EmotionIcon, color, bg, label } = getEmotionDetails();

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300">
      <CardContent className="p-8 flex flex-col items-center justify-center space-y-6">
        <div className={`p-8 rounded-full transition-colors duration-500 ${bg}`}>
          <div className="relative">
            <Bot className={`w-32 h-32 ${color} transition-all duration-500`} style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.22) 3px 5px 30px)" }} />
            <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-white ring-1 ring-[#e0e0e0]">
              <EmotionIcon className={`w-8 h-8 ${color}`} />
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-[34px] font-semibold tracking-[-0.374px] text-[#1d1d1f]">{label}</h2>
          <p className="text-muted-foreground text-[17px] font-normal">
            Total Active Tasks: <span className="text-[#1d1d1f] font-semibold ml-1">{totalActiveTasks}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
