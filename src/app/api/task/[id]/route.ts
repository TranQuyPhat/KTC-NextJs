import { db, simulateDelay } from'./../../../lib/mockdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await simulateDelay();
  const task = db.getTaskById(params.id);
  
  if (!task) {
    return NextResponse.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json(task);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  await simulateDelay();
  const data = await request.json();
  
  const updatedTask = db.updateTask(params.id, {
    title: data.title,
    description: data.description,
    completed: data.completed
  });
  
  if (!updatedTask) {
    return NextResponse.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json(updatedTask);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await simulateDelay();
  const success = db.deleteTask(params.id);
  
  if (!success) {
    return NextResponse.json(
      { error: "Task not found" },
      { status: 404 }
    );
  }
  
  return new Response(null, { status: 204 });
}