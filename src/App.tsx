
import { useTasks } from './hooks/useTasks';
import { calculateOverallEmotion } from './utils/emotionLogic';
import { RobotWidget } from './components/features/RobotWidget';
import { TaskForm } from './components/features/TaskForm';
import { TaskList } from './components/features/TaskList';
import { InstallPrompt } from './components/features/InstallPrompt';

function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  
  const overallEmotion = calculateOverallEmotion(tasks);
  const activeTaskCount = tasks.filter(t => !t.isCompleted).length;

  return (
    <div className="min-h-screen bg-[#f5f5f7] pb-[calc(80px+env(safe-area-inset-bottom))]">
      <header className="text-center py-[60px] md:py-[80px] px-4 pt-[calc(40px+env(safe-area-inset-top))]">
        <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f]">4u reminder & 4u bot</h1>
        <p className="text-[21px] md:text-[28px] font-normal leading-[1.14] tracking-[0.196px] mt-4 text-[#1d1d1f] max-w-2xl mx-auto">Keep your robot happy by completing tasks on time.</p>
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
            <h2 className="text-[34px] font-semibold tracking-[-0.374px] text-[#1d1d1f] leading-[1.1]">Your Tasks</h2>
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
