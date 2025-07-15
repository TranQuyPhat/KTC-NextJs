import { Task } from '.././lib/mockdb';

interface TaskCardProps {
  task: Task;
  renderType: 'SSR' | 'SSG' | 'ISR' | 'CSR';
}

const TaskCard = ({ task, renderType }: TaskCardProps) => {
  const renderTypeColors = {
    SSR: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800' },
    SSG: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-800' },
    ISR: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
    CSR: { border: 'border-yellow-500', bg: 'bg-yellow-50', text: 'text-yellow-800' },
  };

  const colors = renderTypeColors[renderType] || renderTypeColors.SSR;

  return (
    <div className={`border-l-4 ${colors.border} p-4 rounded-lg shadow-sm bg-white ${colors.bg}`}>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-gray-500">ID: {task.id}</span>
        <span className={`text-xs px-2 py-1 rounded ${colors.text}`}>
          {renderType}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;