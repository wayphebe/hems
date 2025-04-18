'use client';

import { useEffect, useState } from 'react';
import { BoltIcon, Battery100Icon, HomeIcon, SunIcon } from '@heroicons/react/24/solid';

type EnergyFlow = {
  gridInput: number;    // 从电网输入的功率 (kW)
  solarInput: number;   // 光伏发电功率 (kW)
  batteryInput: number; // 电池充电功率 (kW)
  batteryOutput: number;// 电池放电功率 (kW)
  homeConsumption: number; // 家庭用电功率 (kW)
  batteryLevel: number; // 电池电量百分比 (%)
};

export default function EnergyFlowChart() {
  // 使用静态演示数据
  const flowData: EnergyFlow = {
    gridInput: 2.2,
    solarInput: 1.5,
    batteryInput: 1.0,
    batteryOutput: 0.8,
    homeConsumption: 2.7,
    batteryLevel: 85,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <BoltIcon className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">家庭能量流向</h3>
      </div>

      <div className="relative h-96">
        {/* 简化的连接线 - 移到最底层 */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: 0 }}>
          {/* 电网到储能 */}
          <line x1="15%" y1="15%" x2="45%" y2="45%" 
                className="stroke-gray-300" strokeWidth="2" />
          
          {/* 光伏到储能 */}
          <line x1="85%" y1="15%" x2="55%" y2="45%" 
                className="stroke-gray-300" strokeWidth="2" />
          
          {/* 电网到家庭 */}
          <line x1="15%" y1="15%" x2="50%" y2="85%" 
                className="stroke-gray-300" strokeWidth="2" />
          
          {/* 光伏到家庭 */}
          <line x1="85%" y1="15%" x2="50%" y2="85%" 
                className="stroke-gray-300" strokeWidth="2" />
          
          {/* 储能到家庭 */}
          <line x1="50%" y1="50%" x2="50%" y2="80%" 
                className="stroke-gray-300" strokeWidth="2" />
        </svg>

        {/* 电网 - 增加 z-index */}
        <div className="absolute top-4 left-8 flex flex-col items-center" style={{ zIndex: 1 }}>
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
            <BoltIcon className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <span className="text-sm font-medium text-gray-600 bg-white px-2 rounded-full">电网</span>
            <span className="mt-1 text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
              {flowData.gridInput.toFixed(1)} kW
            </span>
          </div>
        </div>

        {/* 光伏 - 增加 z-index */}
        <div className="absolute top-4 right-8 flex flex-col items-center" style={{ zIndex: 1 }}>
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
            <SunIcon className="w-8 h-8 text-yellow-600" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <span className="text-sm font-medium text-gray-600 bg-white px-2 rounded-full">光伏</span>
            <span className="mt-1 text-xs text-yellow-600 font-medium bg-yellow-50 px-2 py-1 rounded-full">
              {flowData.solarInput.toFixed(1)} kW
            </span>
          </div>
        </div>

        {/* 储能系统 - 增加 z-index */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ zIndex: 1 }}>
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
            <Battery100Icon className="w-10 h-10 text-green-600" />
          </div>
          <div className="mt-3 flex flex-col items-center bg-white px-3 py-1 rounded-lg">
            <span className="text-sm font-medium text-gray-600">储能系统</span>
            <span className="mt-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
              {flowData.batteryLevel}%
            </span>
            <div className="mt-1 text-xs space-y-1">
              <div className="text-blue-600">充电: {flowData.batteryInput.toFixed(1)} kW</div>
              <div className="text-green-600">放电: {flowData.batteryOutput.toFixed(1)} kW</div>
            </div>
          </div>
        </div>

        {/* 家庭用电 - 增加 z-index */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ zIndex: 1 }}>
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow-md">
            <HomeIcon className="w-8 h-8 text-orange-600" />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <span className="text-sm font-medium text-gray-600 bg-white px-2 rounded-full">家庭用电</span>
            <span className="mt-1 text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded-full">
              {flowData.homeConsumption.toFixed(1)} kW
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600 mb-1">储能容量</span>
            <span className="font-semibold text-gray-900">10.0 kWh</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600 mb-1">光伏功率</span>
            <span className="font-semibold text-yellow-600">{flowData.solarInput.toFixed(1)} kW</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600 mb-1">当前用电</span>
            <span className="font-semibold text-orange-600">
              {flowData.homeConsumption.toFixed(1)} kW
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 