'use client';

import { useState, useEffect } from 'react';
import PowerUsageChart from "@/components/PowerUsageChart";
import PowerStats from "@/components/PowerStats";
import PowerAlerts from "@/components/PowerAlerts";
import EnergySavingTips from "@/components/EnergySavingTips";
import BillBreakdown from "@/components/BillBreakdown";
import DevicePowerRanking from "@/components/DevicePowerRanking";

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // 初始化时间
    setCurrentTime(new Date().toLocaleString('zh-CN'));
    
    // 每秒更新时间
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString('zh-CN'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
          {/* 页面标题 */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">家庭能源管理</h1>
              <p className="mt-1 text-sm text-gray-500">
                实时监控您的能源使用情况
              </p>
            </div>
            <div className="text-sm text-gray-500 whitespace-nowrap">
              更新时间：{currentTime}
            </div>
          </div>

          {/* 统计卡片 */}
          <div className="w-full">
            <PowerStats />
          </div>

          {/* 用电趋势和告警区域 */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="xl:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">用电趋势</h3>
                <div className="min-h-[400px]">
                  <PowerUsageChart />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row xl:flex-col gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-1 xl:flex-none bg-white rounded-xl shadow-lg overflow-hidden">
                <PowerAlerts />
              </div>
              <div className="flex-1 xl:flex-none bg-white rounded-xl shadow-lg overflow-hidden">
                <EnergySavingTips />
              </div>
            </div>
          </div>

          {/* 设备用电和电费分析 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden min-h-[500px]">
              <DevicePowerRanking />
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden min-h-[500px]">
              <BillBreakdown />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
