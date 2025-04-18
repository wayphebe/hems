'use client';

import { LightBulbIcon } from '@heroicons/react/24/outline';

type Tip = {
  id: string;
  title: string;
  description: string;
  savingAmount: string;
  category: 'appliance' | 'behavior' | 'schedule';
};

export default function EnergySavingTips() {
  const tips: Tip[] = [
    {
      id: '1',
      title: '调整空调温度',
      description: '将空调温度调高1°C，舒适度基本不变',
      savingAmount: '预计每月节省12度电',
      category: 'behavior',
    },
    {
      id: '2',
      title: '使用峰谷电价',
      description: '将洗衣机使用时间调整到夜间',
      savingAmount: '预计每月节省25元',
      category: 'schedule',
    },
    {
      id: '3',
      title: '及时清洗空调滤网',
      description: '空调滤网已使用2个月，建议清洗',
      savingAmount: '预计每月节省8度电',
      category: 'appliance',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <LightBulbIcon className="w-5 h-5 text-yellow-500" />
        <h3 className="text-lg font-semibold text-gray-900">节能建议</h3>
      </div>

      <div className="space-y-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="flex items-start p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {tip.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {tip.description}
                  </p>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {tip.savingAmount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
        查看更多节能建议
      </button>
    </div>
  );
} 