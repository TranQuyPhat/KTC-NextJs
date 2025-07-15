"use client";

import { useState, useEffect } from "react";
import { Task } from "../lib/mockdb";

export default function TaskCSR() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/task`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to load tasks");
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
        <h1 className="text-xl font-bold text-red-800">Error</h1>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Task CSR (Client-Side Rendering)
      </h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-3 border rounded-lg bg-white shadow-sm"
          >
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <div className="mt-2">
              <span
                className={`px-2 py-1 rounded text-sm ${
                  task.completed
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
