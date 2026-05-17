import { useState, useEffect } from 'react';
import type { Task } from '../types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('task-tracker-data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse tasks', e);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('task-tracker-data', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = async (name: string, deadline: string) => {
    // Simulasi asynchronous loading
    await new Promise(resolve => setTimeout(resolve, 1200));


    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      deadline,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = async (id: string) => {
    // Simulasi asynchronous loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
}
