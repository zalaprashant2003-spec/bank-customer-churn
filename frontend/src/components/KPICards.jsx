import React from 'react';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;
import { Users, UserMinus, Percent, AlertTriangle, CheckCircle2, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const kpiData = [
  { id: 1, title: 'Total Customers', value: 10000, subtitle: '+12% from last month', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10', sparkline: 'M0 10 Q 5 0 10 5 T 20 15' },
  { id: 2, title: 'Total Churned', value: 2037, subtitle: '20.37% churn rate', icon: UserMinus, color: 'text-[#EF4444]', bg: 'bg-[#EF4444]/10', sparkline: 'M0 15 Q 5 5 10 10 T 20 5' },
  { id: 3, title: 'Retention Rate', value: 79.63, suffix: '%', subtitle: 'Target: 85%', icon: Percent, color: 'text-[#10B981]', bg: 'bg-[#10B981]/10', decimals: 2, sparkline: 'M0 5 Q 5 15 10 10 T 20 5' },
  { id: 4, title: 'High Risk Customers', value: 1546, subtitle: 'Requires immediate action', icon: AlertTriangle, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10', sparkline: 'M0 15 Q 5 5 10 15 T 20 0' },
  { id: 5, title: 'Prediction Accuracy', value: 87, suffix: '%', subtitle: 'On test dataset', icon: CheckCircle2, color: 'text-[#0F766E]', bg: 'bg-[#0F766E]/10', sparkline: 'M0 10 Q 5 5 10 5 T 20 0' },
  { id: 6, title: 'Model Used', value: 'SVM', isText: true, subtitle: 'Support Vector Machine', icon: Bot, color: 'text-purple-500', bg: 'bg-purple-500/10', sparkline: 'M0 10 L 5 5 L 10 15 L 15 5 L 20 10' },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-[18px] p-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon size={100} className={kpi.color} />
            </div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className={`p-3 rounded-xl ${kpi.bg} ${kpi.color}`}>
                <Icon size={24} />
              </div>
              <svg width="40" height="20" viewBox="0 0 20 20" className="opacity-50">
                <path d={kpi.sparkline} fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={kpi.color} />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                {kpi.title}
              </h3>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {kpi.isText ? (
                  kpi.value
                ) : (
                  <CountUp
                    end={kpi.value}
                    decimals={kpi.decimals || 0}
                    duration={2}
                    separator=","
                    suffix={kpi.suffix || ''}
                  />
                )}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                {kpi.subtitle}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
