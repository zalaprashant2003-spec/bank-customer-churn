import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle } from 'lucide-react';

const models = [
  { name: 'Support Vector Machine', accuracy: '87.4%', precision: '85.2%', recall: '82.1%', f1: '83.6%', cv: '86.5%', best: true },
  { name: 'Logistic Regression', accuracy: '81.2%', precision: '78.5%', recall: '71.4%', f1: '74.8%', cv: '80.1%', best: false },
  { name: 'Random Forest', accuracy: '86.1%', precision: '84.0%', recall: '80.5%', f1: '82.2%', cv: '85.2%', best: false },
  { name: 'KNN', accuracy: '82.5%', precision: '80.1%', recall: '76.3%', f1: '78.1%', cv: '81.9%', best: false },
  { name: 'Naive Bayes', accuracy: '78.9%', precision: '71.2%', recall: '79.4%', f1: '75.1%', cv: '77.8%', best: false },
];

export default function ModelComparison() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Model Comparison</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Performance metrics evaluated on test dataset</p>
        </div>
      </div>
      
      <div className="glass rounded-[18px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700/50">
                <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-300">Algorithm</th>
                <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-300">Accuracy</th>
                <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-300">Precision</th>
                <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-300">Recall</th>
                <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-300">F1 Score</th>
                <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-300">Cross Validation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {models.map((model, idx) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  key={model.name} 
                  className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${model.best ? 'bg-[#0F766E]/5 dark:bg-[#0F766E]/10' : ''}`}
                >
                  <td className="py-4 px-6 font-medium text-slate-900 dark:text-white flex items-center gap-2">
                    {model.best && <Trophy size={16} className="text-[#F59E0B]" />}
                    {model.name}
                    {model.best && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#10B981]/10 text-[#10B981]">
                        Best Model
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className={model.best ? 'font-bold text-[#0F766E] dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}>{model.accuracy}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300">{model.precision}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300">{model.recall}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300">{model.f1}</td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-300">{model.cv}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
}
