import { Task } from '.././lib/mockdb';
import TaskCard from '.././components/TaskCard';
import LoadingSpinner from '.././components/LoadingSpinner';

export default async function TaskSSR() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task`, {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h1 className="text-xl font-bold text-red-800">Error</h1>
        <p className="text-red-600">Failed to load tasks</p>
      </div>
    );
  }
  
  const tasks: Task[] = await res.json();

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-2">Task SSR (Server-Side Rendering)</h1>
        <p className="text-gray-600 mb-6">
          This page is rendered on the server on every request. The data is fetched fresh from the 
          API each time a user visits this page.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
        </div>
      </div>
      
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} renderType="SSR" />
        ))}
      </div>
    </div>
  );
}