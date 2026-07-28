import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-12 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
          Built with <Heart size={14} className="text-[#EF4444] fill-[#EF4444]" /> for AI & FinTech
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          <span>Python</span>
          <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
          <span>Scikit-learn</span>
          <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
          <span>React</span>
          <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
          <span>Tailwind CSS</span>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 Bank Customer Churn AI
        </div>
      </div>
    </footer>
  );
}
