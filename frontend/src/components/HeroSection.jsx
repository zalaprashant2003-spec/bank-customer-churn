import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row items-center justify-between gap-12 py-8"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] font-medium text-sm">
          <BrainCircuit size={16} />
          <span>AI-Powered Analytics</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
          Bank Customer <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#14B8A6]">
            Churn Prediction
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          Predict customer churn using advanced Machine Learning models to help banks improve customer retention, enhance loyalty, and significantly reduce revenue loss.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F766E] hover:bg-[#0F766E]/90 text-white font-medium transition-all shadow-lg shadow-[#0F766E]/20">
            Start Prediction <ArrowRight size={18} />
          </button>
          <button className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm">
            View Models
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative w-full max-w-lg mx-auto">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F766E]/20 to-[#14B8A6]/20 rounded-full blur-3xl" />
        <div className="relative glass rounded-[24px] p-8 border border-white/40 dark:border-slate-700/50 shadow-soft">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-[18px] p-4 shadow-inner border border-slate-200/50 dark:border-slate-700/50 flex flex-col justify-between">
                <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Accuracy</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">87.4%</div>
                </div>
              </div>
              <div className="h-40 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-[18px] p-4 text-white shadow-lg shadow-[#0F766E]/20 flex flex-col justify-end hover:scale-[1.02] transition-transform">
                <div className="text-sm opacity-80">High Risk Identified</div>
                <div className="text-3xl font-bold">1,546</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 glass rounded-[18px] p-4 flex flex-col justify-between bg-white/50 dark:bg-slate-800/50 hover:scale-[1.02] transition-transform">
                <div className="w-8 h-8 rounded-full bg-[#EF4444]/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Churn Rate</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">20.37%</div>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-[18px] p-4 shadow-inner border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center">
                <BrainCircuit size={48} className="text-[#0F766E] opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
