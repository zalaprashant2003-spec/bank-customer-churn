import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  LineChart, Line, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { motion } from 'framer-motion';

const geoData = [
  { name: 'France', Total: 5014, Churned: 810 },
  { name: 'Germany', Total: 2509, Churned: 814 },
  { name: 'Spain', Total: 2477, Churned: 413 },
];

const ageData = [
  { age: '18-25', rate: 7.5 },
  { age: '26-35', rate: 11.2 },
  { age: '36-45', rate: 19.8 },
  { age: '46-55', rate: 35.4 },
  { age: '56-65', rate: 42.1 },
  { age: '65+', rate: 25.5 },
];

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Geography Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-[18px] p-6 flex flex-col"
      >
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Churn by Geography</h3>
        <div className="flex-1 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={geoData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <RechartsTooltip cursor={{ fill: 'rgba(15, 118, 110, 0.05)' }} contentStyle={{ borderRadius: '12px' }} />
              <Legend iconType="circle" />
              <Bar dataKey="Total" fill="#14B8A6" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="Churned" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Age Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-[18px] p-6 flex flex-col"
      >
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Churn Rate by Age</h3>
        <div className="flex-1 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="age" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <RechartsTooltip contentStyle={{ borderRadius: '12px' }} />
              <Line type="monotone" dataKey="rate" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, fill: '#F59E0B', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
