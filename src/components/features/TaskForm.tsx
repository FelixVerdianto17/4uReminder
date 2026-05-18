import { useState } from 'react';
import { CalendarIcon, Plus, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '../../lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { PwaInstallButton } from './PwaInstallButton';

interface TaskFormProps {
  onAddTask: (name: string, deadline: string) => Promise<void> | void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !date) return;
    
    setIsLoading(true);
    await onAddTask(name.trim(), date.toISOString());
    setIsLoading(false);
    
    setName('');
    setDate(undefined);
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex flex-col space-y-1.5">
          <CardTitle>Add New Task</CardTitle>
          <CardDescription>Enter task details and a deadline to track it.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="What needs to be done?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
          <Popover>
            <PopoverTrigger
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full sm:w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a deadline</span>}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
            </PopoverContent>
          </Popover>
          <Button type="submit" disabled={!name.trim() || !date || isLoading} className="w-full sm:w-auto">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
            {isLoading ? 'Adding...' : 'Add Task'}
          </Button>
        </form>
        <div className="mt-10 text-center">
          <PwaInstallButton />  
        </div>
      </CardContent>
    </Card>
  );
}
