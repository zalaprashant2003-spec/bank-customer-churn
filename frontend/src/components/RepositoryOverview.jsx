import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, FileText, Image as ImageIcon, Database, FileJson, FileCode2, ChevronRight, FolderOpen, GitBranch } from 'lucide-react';

const repoStructure = [
  { name: 'notebook', type: 'folder', icon: Folder, openIcon: FolderOpen, children: [{ name: 'Bank_Customer_Churn_Prediction.ipynb', type: 'file', icon: FileCode2, color: 'text-orange-500' }] },
  { name: 'data', type: 'folder', icon: Folder, openIcon: FolderOpen, children: [{ name: 'Churn_Modelling.csv', type: 'file', icon: Database, color: 'text-emerald-500' }] },
  { name: 'images', type: 'folder', icon: Folder, openIcon: FolderOpen, children: [{ name: 'architecture.png', type: 'file', icon: ImageIcon, color: 'text-blue-500' }] },
  { name: 'README.md', type: 'file', icon: FileText, color: 'text-slate-400' },
  { name: 'requirements.txt', type: 'file', icon: FileText, color: 'text-slate-400' },
  { name: 'LICENSE', type: 'file', icon: FileText, color: 'text-slate-400' },
];

function FileNode({ node, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = node.type === 'folder' ? (isOpen ? node.openIcon : node.icon) : node.icon;
  const isFolder = node.type === 'folder';

  return (
    <div className="w-full">
      <div 
        className={`flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer transition-colors ${depth > 0 ? 'ml-6' : ''}`}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        <div className="w-4 h-4 flex items-center justify-center">
          {isFolder && (
            <ChevronRight size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          )}
        </div>
        <Icon size={18} className={node.color || 'text-slate-400 dark:text-slate-500'} />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{node.name}</span>
      </div>
      {isFolder && isOpen && node.children && (
        <div className="border-l border-slate-200 dark:border-slate-700 ml-5 pl-2 mt-1">
          {node.children.map((child, idx) => (
            <FileNode key={idx} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RepositoryOverview() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-1 glass rounded-[24px] p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-slate-900 dark:bg-white p-2 rounded-xl text-white dark:text-slate-900">
            <GitBranch size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Repository</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Project structure</p>
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 font-mono">
          {repoStructure.map((node, idx) => (
            <FileNode key={idx} node={node} />
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-2 glass rounded-[24px] p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">About this project</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          This dashboard is the frontend interface for the Bank Customer Churn Prediction Machine Learning project. 
          It demonstrates the integration of advanced data analytics and predictive modeling in a premium FinTech UI. 
          The underlying ML model processes customer demographics, account information, and behavioral data to predict churn probability with 87% accuracy.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Python', 'Pandas', 'Scikit-learn', 'React', 'Tailwind CSS', 'Framer Motion'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
