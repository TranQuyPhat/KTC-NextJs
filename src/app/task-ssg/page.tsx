import { Task } from '.././lib/mockdb';

export default async function TaskSSG() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task`);
  
  if (!res.ok) {
    return <div>Failed to load tasks</div>;
  }
  
  const tasks: Task[] = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task SSG (Static Site Generation)</h1>
      <ul className="space-y-3">
        {tasks.map(task => (
          <li key={task.id} className="p-3 border rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <div className="mt-2">
              <span className={`px-2 py-1 rounded text-sm ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Opt-in to static generation
export const dynamic = 'force-static';