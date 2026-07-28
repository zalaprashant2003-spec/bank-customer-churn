import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, LineChart, Code, ArrowRightLeft, Settings, Brain, Sliders, Zap, ArrowRight, GitMerge } from 'lucide-react';

const steps = [
  { name: 'Dataset', icon: Database, color: 'text-blue-500' },
  { name: 'Cleaning', icon: Filter, color: 'text-teal-500' },
  { name: 'EDA', icon: LineChart, color: 'text-indigo-500' },
  { name: 'Encoding', icon: Code, color: 'text-purple-500' },
  { name: 'Scaling', icon: ArrowRightLeft, color: 'text-pink-500' },
  { name: 'Feature Eng.', icon: Settings, color: 'text-rose-500' },
  { name: 'Training', icon: Brain, color: 'text-orange-500' },
  { name: 'Tuning', icon: Sliders, color: 'text-amber-500' },
  { name: 'Prediction', icon: Zap, color: 'text-[#10B981]' },
];

export default function MLPipeline() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-indigo-500/10 p-2 rounded-xl text-indigo-500">
          <GitMerge size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Machine Learning Pipeline</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">End-to-end data processing and modeling workflow</p>
        </div>
      </div>
      
      <div className="glass rounded-[24px] p-8 overflow-hidden">
        <div className="flex items-center justify-between overflow-x-auto pb-4 hide-scrollbar snap-x">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-3 min-w-[80px] snap-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-soft flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:-translate-y-2 transition-transform duration-300 relative z-10">
                    <Icon size={28} className={step.color} />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300 text-center">
                    {step.name}
                  </span>
                </motion.div>
                {idx < steps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.1 }}
                    className="flex-1 min-w-[30px] h-[2px] bg-slate-200 dark:bg-slate-700 relative -top-4 origin-left"
                  >
                    <ArrowRight size={14} className="absolute -right-2 -top-1.5 text-slate-300 dark:text-slate-600" />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
