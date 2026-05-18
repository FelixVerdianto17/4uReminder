import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={onToggle}
      className="absolute top-4 right-4 md:top-8 md:right-8 bg-white dark:bg-zinc-900 border-[#cccccc] dark:border-zinc-700 text-[#1d1d1f] dark:text-zinc-50 hover:bg-[#f5f5f7] dark:hover:bg-zinc-800 rounded-full transition-colors z-50 shadow-sm"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  );
}
