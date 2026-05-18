import { Card, CardContent } from '../ui/card';
import type { RobotEmotion } from '../../types';
import robot1 from '../../assets/robot1.png';
import robot2 from '../../assets/robot2.png';
import robot3 from '../../assets/robot3.png';
import robot4 from '../../assets/robot4.png';

interface RobotWidgetProps {
  emotion: RobotEmotion;
  totalActiveTasks: number;
}

export function RobotWidget({ emotion, totalActiveTasks }: RobotWidgetProps) {
  const getEmotionDetails = () => {
    switch (emotion) {
      case 'smile': return { image: robot1, bg: 'bg-[#fafafc] dark:bg-zinc-800', label: 'Good job 👍✨' };
      case 'suspicious': return { image: robot2, bg: 'bg-[#fafafc] dark:bg-zinc-800', label: 'okayy, but dont forget!🤨' };
      case 'panic': return { image: robot3, bg: 'bg-[#fafafc] dark:bg-zinc-800', label: 'Not good😰 finish it now!' };
      case 'angry': return { image: robot4, bg: 'bg-[#fafafc] dark:bg-zinc-800', label: 'WHAT ARE YOU DOINGG??!!😡 GO FINISH YOUR TASK!' };
      default: return { image: robot1, bg: 'bg-[#fafafc] dark:bg-zinc-800', label: 'Good job 👍✨' };
    }
  };

  const { image, bg, label } = getEmotionDetails();

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300">
      <CardContent className="p-0 flex flex-col items-center justify-center">
        <div className={`w-full flex justify-center items-center py-12 px-8 transition-colors duration-500 ${bg}`}>
          <img 
            src={image} 
            alt={label}
            className="w-full max-w-[240px] h-auto object-contain transition-all duration-500 hover:scale-105"
            style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.22) 3px 5px 30px)" }} 
          />
        </div>
        
        <div className="text-center space-y-2 p-8 pt-6">
          <h2 className="text-[34px] font-semibold tracking-[-0.374px] text-[#1d1d1f] dark:text-zinc-50">{label}</h2>
          <p className="text-muted-foreground dark:text-zinc-400 text-[17px] font-normal">
            Total Active Tasks: <span className="text-[#1d1d1f] dark:text-zinc-50 font-semibold ml-1">{totalActiveTasks}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
