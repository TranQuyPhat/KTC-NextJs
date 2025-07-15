import { notFound } from 'next/navigation';
import { Task } from '../../lib/mockdb';

interface Params {
  id: string;
}

export default async function TaskISR({ params }: { params: Params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task/${params.id}`, {
    next: { revalidate: 10 },
  });
  
  if (!res.ok) {
    if (res.status === 404) return notFound();
    return <div>Failed to load task</div>;
  }
  
  const task: Task = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task ISR (Incremental Static Regeneration)</h1>
      <div className="p-5 border rounded-lg bg-white shadow-md max-w-2xl">
        <h2 className="font-bold text-xl mb-2">{task.title}</h2>
        <p className="text-gray-700 mb-4">{task.description}</p>
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {task.completed ? 'Completed' : 'Pending'}
          </span>
          <span className="text-sm text-gray-500">ID: {task.id}</span>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`);
  
  if (!res.ok) {
    return [];
  }
  
  const tasks: Task[] = await res.json();

  return tasks.map(task => ({
    id: task.id.toString(),
  }));
}