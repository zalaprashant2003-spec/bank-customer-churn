import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, AlertCircle, TrendingUp, ShieldCheck, CheckCircle } from 'lucide-react';
import CountUpModule from 'react-countup';
const CountUp = CountUpModule.default || CountUpModule;

export default function PredictionModule() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [result, setResult] = useState(null);

  const handlePredict = (e) => {
    e.preventDefault();
    setIsPredicting(true);
    // Simulate API call
    setTimeout(() => {
      setIsPredicting(false);
      setResult({
        probability: 78,
        risk: 'High',
        color: '#EF4444',
        suggestions: [
          'Offer premium loyalty program',
          'Waive credit card annual fee',
          'Assign dedicated relationship manager'
        ]
      });
    }, 1500);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <div className="glass rounded-[18px] p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#0F766E]/10 p-2 rounded-xl text-[#0F766E]">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Live Prediction</h2>
        </div>
        
        <form onSubmit={handlePredict} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Credit Score</label>
              <input type="number" defaultValue={650} className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Geography</label>
              <select className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white">
                <option>France</option>
                <option>Germany</option>
                <option>Spain</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Gender</label>
              <select className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Age</label>
              <input type="number" defaultValue={45} className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white" />
            </div>
            <div className="space-y-1 col-span-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Balance</label>
              <input type="number" defaultValue={125000} className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Products</label>
              <input type="number" defaultValue={2} className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimated Salary</label>
              <input type="number" defaultValue={85000} className="w-full px-4 py-2 bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] outline-none transition-all dark:text-white" />
            </div>
            
            <div className="col-span-2 flex gap-6 pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0F766E] rounded border-slate-300 focus:ring-[#0F766E]" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Has Credit Card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-[#0F766E] rounded border-slate-300 focus:ring-[#0F766E]" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Is Active Member</span>
              </label>
            </div>
          </div>
          
          <button 
            type="submit" 
            disabled={isPredicting}
            className="w-full py-3.5 mt-6 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] hover:from-[#0F766E]/90 hover:to-[#14B8A6]/90 text-white font-bold rounded-xl shadow-lg shadow-[#0F766E]/20 transition-all flex justify-center items-center gap-2"
          >
            {isPredicting ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Run Prediction <Sparkles size={18} /></>
            )}
          </button>
        </form>
      </div>

      <div className="glass rounded-[18px] p-8 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-900/50">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-slate-400 dark:text-slate-500"
            >
              <ShieldCheck size={64} className="mx-auto mb-4 opacity-50" />
              <p>Enter customer details and click predict to see the churn risk assessment.</p>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <div className="text-center mb-8">
                <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">Churn Probability</h3>
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle className="text-slate-200 dark:text-slate-800" strokeWidth="12" stroke="currentColor" fill="transparent" r="80" cx="96" cy="96" />
                    <motion.circle 
                      initial={{ strokeDashoffset: 502 }}
                      animate={{ strokeDashoffset: 502 - (502 * result.probability) / 100 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-[#EF4444]" 
                      strokeWidth="12" 
                      strokeDasharray="502" 
                      strokeLinecap="round" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="80" cx="96" cy="96" 
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">
                      <CountUp end={result.probability} duration={1.5} />%
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 bg-[#EF4444]/10 text-[#EF4444]`}>
                      {result.risk} Risk
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-5 border border-slate-200 dark:border-slate-700/50">
                <h4 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 mb-4">
                  <TrendingUp size={18} className="text-[#10B981]" />
                  Retention Suggestions
                </h4>
                <ul className="space-y-3">
                  {result.suggestions.map((s, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      key={i} 
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <div className="mt-0.5 bg-[#10B981]/20 p-1 rounded-full text-[#10B981]">
                        <CheckCircle size={12} />
                      </div>
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
