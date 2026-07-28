import React from 'react';
import { Bell, Search, Sun, Moon, UserCircle, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopNavigation({ darkMode, setDarkMode }) {
  return (
    <nav className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center gap-2">
            <div className="bg-[#0F766E]/10 p-2 rounded-xl text-[#0F766E] dark:text-emerald-400">
              <Landmark size={24} className="stroke-[1.5]" />
            </div>
            <span className="font-semibold text-xl tracking-tight text-[#1E293B] dark:text-white">
              Bank Customer Churn AI
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0F766E] transition-colors">
                <Search size={18} />
              </div>
              <input
                type="text"
                className="block w-64 pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-white/50 dark:bg-slate-900/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E]/50 focus:border-[#0F766E] transition-all sm:text-sm dark:text-white"
                placeholder="Search analytics, models..."
              />
            </div>

            <button className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-[#EF4444] ring-2 ring-white dark:ring-slate-900"></span>
            </button>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="flex items-center gap-2 pl-2">
              <UserCircle size={28} className="text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
