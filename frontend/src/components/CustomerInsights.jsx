import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MapPin, User, Activity, Wallet, UserMinus, CreditCard } from 'lucide-react';

const insights = [
  { icon: MapPin, text: 'Customers from Germany churn most.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { icon: User, text: 'Older customers have higher churn.', color: 'text-[#EF4444]', bg: 'bg-[#EF4444]/10' },
  { icon: Activity, text: 'Inactive members are more likely to leave.', color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10' },
  { icon: Wallet, text: 'Higher balance customers churn more.', color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' },
  { icon: UserMinus, text: 'Female customers have slightly higher churn.', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { icon: CreditCard, text: 'Credit score has weak impact on churn.', color: 'text-slate-500', bg: 'bg-slate-500/10' },
];

export default function CustomerInsights() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#14B8A6]/10 p-2 rounded-xl text-[#14B8A6]">
          <Lightbulb size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Customer Insights</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Key findings from Exploratory Data Analysis (EDA)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, idx) => {
          const Icon = insight.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-[18px] p-5 flex items-start gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className={`p-3 rounded-xl ${insight.bg} ${insight.color} shrink-0`}>
                <Icon size={24} />
              </div>
              <p className="text-slate-700 dark:text-slate-200 font-medium pt-1">
                {insight.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
