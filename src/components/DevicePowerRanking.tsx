'use client';

import { useState } from 'react';
import { ChartBarIcon, ArrowSmallUpIcon, ArrowSmallDownIcon } from '@heroicons/react/24/solid';

type Device = {
  id: string;
  name: string;
  power: number; // 当前功率（W）
  dailyUsage: number; // 日均用电量（kWh）
  weeklyUsage: number; // 周均用电量（kWh）
  monthlyUsage: number; // 月均用电量（kWh）
  trend: number; // 相比上一时段变化百分比
  category: '制冷/制热' | '厨房电器' | '洗护电器' | '娱乐设备' | '其他';
};

export default function DevicePowerRanking() {
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('day');
  
  // 基于中国家庭常见电器功率和使用习惯模拟数据
  const devices: Device[] = [
    {
      id: '1',
      name: '空调（客厅）',
      power: 1200,
      dailyUsage: 4.8,
      weeklyUsage: 31.5,  // 周末使用较多
      monthlyUsage: 125.0, // 根据季节变化
      trend: 15.2,
      category: '制冷/制热',
    },
    {
      id: '2',
      name: '电热水器',
      power: 2000,
      dailyUsage: 3.2,
      weeklyUsage: 21.8,  // 较为稳定的使用模式
      monthlyUsage: 92.5,
      trend: -5.5,
      category: '洗护电器',
    },
    {
      id: '3',
      name: '冰箱',
      power: 150,
      dailyUsage: 1.8,
      weeklyUsage: 12.6,  // 稳定运行
      monthlyUsage: 54.0,
      trend: 0.2,
      category: '厨房电器',
    },
    {
      id: '4',
      name: '洗衣机',
      power: 400,
      dailyUsage: 1.2,
      weeklyUsage: 9.8,   // 周末使用较多
      monthlyUsage: 38.5,
      trend: 12.8,
      category: '洗护电器',
    },
    {
      id: '5',
      name: '电视',
      power: 120,
      dailyUsage: 0.8,
      weeklyUsage: 6.2,   // 周末使用增加
      monthlyUsage: 25.5,
      trend: -2.3,
      category: '娱乐设备',
    },
    {
      id: '6',
      name: '电饭煲',
      power: 800,
      dailyUsage: 0.6,
      weeklyUsage: 4.2,   // 工作日使用较多
      monthlyUsage: 18.0,
      trend: 1.5,
      category: '厨房电器',
    },
  ];

  // 根据选择的时间范围获取用电量
  const getUsageByTimeRange = (device: Device) => {
    switch (timeRange) {
      case 'week':
        return device.weeklyUsage;
      case 'month':
        return device.monthlyUsage;
      default:
        return device.dailyUsage;
    }
  };

  // 根据时间范围获取单位显示
  const getUnitDisplay = () => {
    switch (timeRange) {
      case 'week':
        return '周均';
      case 'month':
        return '月均';
      default:
        return '日均';
    }
  };

  // 根据用电量排序
  const sortedDevices = [...devices].sort(
    (a, b) => getUsageByTimeRange(b) - getUsageByTimeRange(a)
  );

  // 计算总用电量
  const totalUsage = devices.reduce(
    (sum, device) => sum + getUsageByTimeRange(device),
    0
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <ChartBarIcon className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">设备用电排行</h3>
        </div>
        <div className="flex space-x-2 text-sm">
          <button
            onClick={() => setTimeRange('day')}
            className={`px-3 py-1 rounded-md ${
              timeRange === 'day'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            今日
          </button>
          <button
            onClick={() => setTimeRange('week')}
            className={`px-3 py-1 rounded-md ${
              timeRange === 'week'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            本周
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-3 py-1 rounded-md ${
              timeRange === 'month'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            本月
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedDevices.map((device) => (
          <div key={device.id} className="relative">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">
                  {device.name}
                </span>
                <span className="text-xs text-gray-500">
                  ({device.power}W)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">
                  {getUsageByTimeRange(device).toFixed(1)} kWh
                </span>
                <div
                  className={`flex items-center text-xs ${
                    device.trend > 0 ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {device.trend > 0 ? (
                    <ArrowSmallUpIcon className="w-4 h-4" />
                  ) : (
                    <ArrowSmallDownIcon className="w-4 h-4" />
                  )}
                  {Math.abs(device.trend)}%
                </div>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${(getUsageByTimeRange(device) / totalUsage) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{getUnitDisplay()}总用电量</span>
          <span className="font-medium text-gray-900">
            {totalUsage.toFixed(1)} kWh
          </span>
        </div>
      </div>
    </div>
  );
} 