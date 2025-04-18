'use client';

import { useState } from 'react';
import { ExclamationCircleIcon, BellIcon, CogIcon } from '@heroicons/react/24/solid';

type Alert = {
  id: string;
  type: 'warning' | 'danger';
  title: string;
  description: string;
  time: string;
};

export default function PowerAlerts() {
  const [alerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'danger',
      title: '空调功率异常',
      description: '当前功率3.5kW，超过正常值50%',
      time: '2分钟前',
    },
    {
      id: '2',
      type: 'warning',
      title: '用电量突增',
      description: '过去1小时用电量较平时增加35%',
      time: '15分钟前',
    },
  ]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <BellIcon className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-semibold text-gray-900">用电异常提醒</h3>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <CogIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-start p-4 rounded-lg ${
              alert.type === 'danger' ? 'bg-red-50' : 'bg-yellow-50'
            }`}
          >
            <ExclamationCircleIcon
              className={`w-5 h-5 mt-0.5 ${
                alert.type === 'danger' ? 'text-red-600' : 'text-yellow-600'
              }`}
            />
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                <span className="text-xs text-gray-500">{alert.time}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {alerts.length === 0 && (
        <div className="text-center py-6">
          <p className="text-gray-500">暂无异常提醒</p>
        </div>
      )}
    </div>
  );
} 