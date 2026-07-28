import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Retained', value: 7963 },
  { name: 'Churned', value: 2037 },
];

const COLORS = ['#10B981', '#EF4444'];

export default function ChurnOverview() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-[18px] p-6 h-full flex flex-col"
    >
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Customer Churn Overview</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Proportion of retained vs churned customers in the dataset.</p>
      
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              animationBegin={200}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              itemStyle={{ color: '#1E293B', fontWeight: 'bold' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
