'use client';

import { Button } from '@/components/ui/button';
import { Upload, Link, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section with Integrated Navigation */}
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto pl-0 sm:pl-0 lg:pl-0 flex-1 flex flex-col">
          {/* Floating Navigation */}
          <nav className="pt-8 pb-8 flex justify-center">
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl border border-black/40 px-6 py-3 max-w-3xl w-full">
              <div className="flex justify-between items-center h-12">
                {/* Logo */}
                <div className="flex items-center">
                  <span className="text-xl font-medium italic text-slate-800 dark:text-slate-200 tracking-wide">
                    Spotly
                  </span>
                </div>

                {/* Center Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#features" className="text-sm font-light text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors tracking-wide">
                    Features
                  </a>
                  <a href="#pricing" className="text-sm font-light text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors tracking-wide">
                    Pricing
                  </a>
                  <a href="#contact" className="text-sm font-light text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors tracking-wide">
                    Contact
                  </a>
                </div>

                {/* Get Started Button */}
                <Button className="bg-orange-600 hover:bg-orange-700 text-white border-0 px-8 py-3 h-12 text-sm font-medium tracking-wide rounded-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </nav>

          {/* Main Content - Vertically Centered */}
          <div className="text-left flex-1 flex items-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 leading-tight text-left">
                <span className="text-slate-800 dark:text-slate-200">
                  <em className="font-thin italic underline decoration-1 decoration-emerald-400 dark:decoration-emerald-500 underline-offset-4">Precision SEO</em> <span className="font-light">Insights Crafted for Landing Pages.</span>
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 leading-relaxed font-light italic text-left space-y-2">
                <div>AI-powered analysis that combines</div>
                <div>visual design evaluation with technical</div>
                <div className="flex items-end justify-between">
                  <span>SEO checks to <span className="text-teal-600 dark:text-teal-400 font-medium">maximize performance.</span></span>
                  
                  {/* Get Started Button - Aligned with bottom of subheader */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="ml-8"
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 8px 20px rgba(16, 185, 129, 0.15)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-16 py-6 text-xl font-medium tracking-wide min-w-[280px] overflow-hidden group border border-black/40"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">Get Started</span>
                      
                      {/* Subtle shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
