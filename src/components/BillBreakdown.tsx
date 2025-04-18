'use client';

import { ChartBarIcon } from '@heroicons/react/24/outline';

type BillItem = {
  id: string;
  name: string;
  amount: number;
  usage?: number;
  rate?: number;
};

export default function BillBreakdown() {
  const billItems: BillItem[] = [
    {
      id: '1',
      name: '峰时用电',
      amount: 89.5,
      usage: 74.6,
      rate: 1.2,
    },
    {
      id: '2',
      name: '平时用电',
      amount: 65.3,
      usage: 65.3,
      rate: 1.0,
    },
    {
      id: '3',
      name: '谷时用电',
      amount: 31.7,
      usage: 52.8,
      rate: 0.6,
    },
    {
      id: '4',
      name: '基本电费',
      amount: 51.8,
    },
  ];

  const total = billItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6">
        <div className="flex items-center space-x-2">
          <ChartBarIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-gray-900">电费构成</h3>
        </div>
        <div className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
          ¥ {total.toFixed(2)}
        </div>
      </div>

      <div className="space-y-4">
        {billItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 mb-1">
              <div className="flex items-center space-x-2 min-w-[120px]">
                <span className="text-sm text-gray-600">{item.name}</span>
                {item.rate && (
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    (¥{item.rate}/kWh)
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 ml-auto">
                <span className="text-sm font-medium whitespace-nowrap">
                  ¥{item.amount.toFixed(2)}
                </span>
                {item.usage && (
                  <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:inline-block">
                    {item.usage} kWh
                  </span>
                )}
              </div>
            </div>
            {item.usage && (
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{
                      width: `${(item.amount / total) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap sm:hidden">
                  {item.usage} kWh
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
            <span className="text-gray-600">环比变化</span>
            <span className="text-red-600 font-medium">+5.2%</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
            <span className="text-gray-600">同比变化</span>
            <span className="text-green-600 font-medium">-8.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
} 