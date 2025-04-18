'use client';

import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

type TimeRange = '24h' | '7d' | '30d';

export default function PowerUsageChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('24h');
  const [data, setData] = useState<Array<{ time: string; usage: number; average: number }>>([]);

  useEffect(() => {
    // 根据时间范围生成不同的数据
    const generateData = () => {
      switch (timeRange) {
        case '24h':
          return Array.from({ length: 24 }, (_, i) => ({
            time: `${i}:00`,
            usage: Math.random() * 3 + 1,
            average: 2.5,
          }));
        case '7d':
          return Array.from({ length: 7 }, (_, i) => ({
            time: `周${['日', '一', '二', '三', '四', '五', '六'][i]}`,
            usage: Math.random() * 30 + 20,
            average: 25,
          }));
        case '30d':
          return Array.from({ length: 30 }, (_, i) => ({
            time: `${i + 1}日`,
            usage: Math.random() * 100 + 50,
            average: 75,
          }));
      }
    };

    setData(generateData());
  }, [timeRange]);

  const timeRangeOptions: { value: TimeRange; label: string }[] = [
    { value: '24h', label: '24小时' },
    { value: '7d', label: '7天' },
    { value: '30d', label: '30天' },
  ];

  if (data.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">用电趋势</h2>
        <div className="flex space-x-2">
          {timeRangeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setTimeRange(option.value)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${
                  timeRange === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="time"
              stroke="#666"
              tick={{ fill: '#666' }}
              tickLine={{ stroke: '#666' }}
            />
            <YAxis
              stroke="#666"
              tick={{ fill: '#666' }}
              tickLine={{ stroke: '#666' }}
              label={{
                value: timeRange === '24h' ? 'kW' : 'kWh',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#666' },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="usage"
              name="实际用电"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="average"
              name="平均用电"
              stroke="#9ca3af"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 