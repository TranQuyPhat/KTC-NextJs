import { db, simulateDelay } from '../../../lib/mockdb';
import type { NextApiRequest } from 'next';
import type { NextRequest as AppRequest } from 'next/server';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(_req: NextRequest, context: any) {
  const id = context.params.id;
  const task = db.getTaskById(id);

  if (!task) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  return NextResponse.json(task);
}
