export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

let tasks: Task[] = [
  { id: 1, title: "Learn Next.js", description: "Study SSR, SSG, ISR, and CSR", completed: false },
  { id: 2, title: "Build a project", description: "Create a task management app", completed: true },
  { id: 3, title: "Deploy to Vercel", description: "Deploy the Next.js application", completed: false },
];

let nextId = 4;

export const db = {
  getAllTasks: (): Task[] => [...tasks],
  getTaskById: (id: number | string): Task | undefined => {
    const taskId = typeof id === 'string' ? parseInt(id) : id;
    return tasks.find(task => task.id === taskId);
  },
  createTask: (task: Omit<Task, 'id'>): Task => {
    const newTask: Task = { ...task, id: nextId++ };
    tasks.push(newTask);
    return newTask;
  },
  updateTask: (id: number | string, updates: Partial<Omit<Task, 'id'>>): Task | null => {
    const taskId = typeof id === 'string' ? parseInt(id) : id;
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return null;
    tasks[index] = { ...tasks[index], ...updates };
    return tasks[index];
  },
  deleteTask: (id: number | string): boolean => {
    const taskId = typeof id === 'string' ? parseInt(id) : id;
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  }
};

export const simulateDelay = (ms: number = 500): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));