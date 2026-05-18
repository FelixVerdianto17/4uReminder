
import { useTasks } from './hooks/useTasks';
import { calculateOverallEmotion } from './utils/emotionLogic';
import { RobotWidget } from './components/features/RobotWidget';
import { TaskForm } from './components/features/TaskForm';
import { TaskList } from './components/features/TaskList';
import { InstallPrompt } from './components/features/InstallPrompt';
import { PuffyHeader } from './components/ui/PuffyHeader';
import { ThemeToggle } from './components/features/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const { isDarkMode, toggleTheme } = useTheme();
  
  const overallEmotion = calculateOverallEmotion(tasks);
  const activeTaskCount = tasks.filter(t => !t.isCompleted).length;

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-zinc-950 transition-colors duration-300 pb-[calc(80px+env(safe-area-inset-bottom))]">
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <header className="text-center py-[60px] md:py-[80px] px-4 pt-[calc(40px+env(safe-area-inset-top))] relative">
        <PuffyHeader />
        <p className="text-[21px] md:text-[28px] font-normal leading-[1.14] tracking-[0.196px] mt-8 text-[#1d1d1f] dark:text-zinc-100 max-w-2xl mx-auto">keep <span className="text-blue-500">foyu</span> happy by completing tasks on time.</p>
      </header>

      <main className="max-w-[980px] mx-auto px-4 md:px-8 space-y-[80px]">
        <section className="flex justify-center">
          <RobotWidget emotion={overallEmotion} totalActiveTasks={activeTaskCount} />
        </section>
        <section className="max-w-[640px] mx-auto">
          <TaskForm onAddTask={addTask} />
        </section>
        
        <section className="max-w-[640px] mx-auto">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-[34px] font-semibold tracking-[-0.374px] text-[#1d1d1f] dark:text-zinc-50 leading-[1.1]">Your Tasks</h2>
            <div className="text-[17px] text-muted-foreground font-normal pb-1">
              {tasks.length} total
            </div>
          </div>
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </section>
      </main>

      <InstallPrompt />
    </div>
  );
}

export default App;
