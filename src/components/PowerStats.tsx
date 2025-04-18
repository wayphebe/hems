'use client';

import { useState, useEffect } from 'react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/solid';

export default function PowerStats() {
  const [stats, setStats] = useState({
    currentPower: 0,
    todayUsage: 0,
    monthlyBill: 0,
    trends: {
      power: 5.2, // 相比上一时段的变化百分比
      usage: -3.8,
      bill: 2.1,
    }
  });

  useEffect(() => {
    // 模拟数据
    setStats({
      currentPower: 2.5,
      todayUsage: 15.8,
      monthlyBill: 186.5,
      trends: {
        power: 5.2,
        usage: -3.8,
        bill: 2.1,
      }
    });
  }, []);

  const renderTrend = (value: number) => {
    const Icon = value >= 0 ? ArrowTrendingUpIcon : ArrowTrendingDownIcon;
    const color = value >= 0 ? 'text-red-600' : 'text-green-600';
    return (
      <div className={`flex items-center ${color} text-sm font-medium`}>
        <Icon className="w-4 h-4 mr-1" />
        <span>{Math.abs(value)}%</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
      {/* 实时用电量卡片 */}
      <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-700">实时用电量</h2>
          {renderTrend(stats.trends.power)}
        </div>
        <div className="flex items-baseline">
          <div className="text-4xl font-bold text-blue-600">
            {stats.currentPower}
          </div>
          <div className="ml-2 text-xl text-gray-500">kW</div>
        </div>
        <p className="text-gray-500 mt-2 text-sm">当前功率消耗</p>
      </div>

      {/* 今日用电统计卡片 */}
      <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-700">今日用电</h2>
          {renderTrend(stats.trends.usage)}
        </div>
        <div className="flex items-baseline">
          <div className="text-4xl font-bold text-green-600">
            {stats.todayUsage}
          </div>
          <div className="ml-2 text-xl text-gray-500">kWh</div>
        </div>
        <p className="text-gray-500 mt-2 text-sm">累计用电量</p>
      </div>

      {/* 本月电费预估卡片 */}
      <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-700">本月电费</h2>
          {renderTrend(stats.trends.bill)}
        </div>
        <div className="flex items-baseline">
          <div className="text-4xl font-bold text-purple-600">
            ¥ {stats.monthlyBill}
          </div>
        </div>
        <p className="text-gray-500 mt-2 text-sm">预估金额</p>
      </div>
    </div>
  );
} 