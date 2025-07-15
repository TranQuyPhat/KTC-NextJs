import { db, simulateDelay } from '../../lib/mockdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  await simulateDelay();
  const tasks = db.getAllTasks();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  await simulateDelay();
  const data = await request.json();
  
  if (!data.title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  
  const newTask = db.createTask({
    title: data.title,
    description: data.description || "",
    completed: data.completed || false
  });
  
  return NextResponse.json(newTask, { status: 201 });
}