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
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl border border-black/40 py-3 max-w-3xl w-full">
              <div className="flex justify-between items-center h-12 px-6">
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
              
              <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 leading-relaxed font-light italic text-left">
                <div className="flex items-end justify-between">
                  <span>
                    AI-powered analysis that combines<br />
                    visual design evaluation with technical<br />
                    SEO checks to <span className="text-teal-600 dark:text-teal-400 font-medium">maximize performance.</span>
                  </span>
                  
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

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto pl-2 sm:pl-3 lg:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-16">
              How It <span className="italic font-thin">Works</span>
            </h2>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-800 dark:text-slate-200 mb-4">Upload Your Landing Page</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    Simply upload a screenshot of your landing page or provide the URL. 
                    Our AI will analyze both visual design and technical SEO elements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-800 dark:text-slate-200 mb-4">AI Analysis</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    Our advanced AI examines design patterns, content structure, 
                    technical SEO factors, and conversion optimization opportunities.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-lg font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-800 dark:text-slate-200 mb-4">Get Actionable Insights</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    Receive detailed recommendations with specific improvements 
                    to maximize your landing page performance and conversions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto pl-2 sm:pl-3 lg:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-8">
                Ready to <span className="italic font-thin">Analyze</span> Your Landing Page?
              </h2>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto">
                Upload your landing page screenshot or provide a URL to get instant AI-powered SEO insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Upload Interface */}
              <div className="flex justify-center lg:justify-start">
                <div className="border-2 border-dashed border-emerald-300 dark:border-emerald-600 rounded-2xl p-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm w-full max-w-md">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-light text-slate-800 dark:text-slate-200 mb-4">
                      Upload Your Landing Page
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 font-light mb-8">
                      Drag and drop your screenshot here, or click to browse
                    </p>

                    <div className="flex flex-col gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 text-lg font-medium rounded-xl flex items-center justify-center space-x-3"
                      >
                        <Upload className="w-5 h-5" />
                        <span>Upload Screenshot</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white bg-transparent px-8 py-4 text-lg font-medium rounded-xl flex items-center justify-center space-x-3 transition-all duration-300"
                      >
                        <Link className="w-5 h-5" />
                        <span>Analyze URL</span>
                      </motion.button>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
                      Supports PNG, JPG, and WebP formats up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Analytics Preview */}
              <div>
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200 dark:border-slate-700 h-full">
                  <div className="space-y-6">
                    {/* SEO Score */}
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">87</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 mb-3">Overall SEO Score</div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">2.3s</div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">Load Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">92</div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">Accessibility</div>
                      </div>
                    </div>

                    {/* Core Web Vitals */}
                    <div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-3">Core Web Vitals</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">LCP</span>
                          </div>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">1.2s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">FID</span>
                          </div>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">0.15s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-slate-300">CLS</span>
                          </div>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">0.08</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-3">Key Insights</div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">Excellent mobile responsiveness</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">Optimize image compression</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">Strong content structure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto pl-2 sm:pl-3 lg:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-16">
              Trusted by <span className="italic font-thin">Industry Leaders</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <blockquote className="text-lg text-slate-600 dark:text-slate-300 italic mb-4 leading-relaxed">
                  "Increased our conversion rate by 40% in just two weeks."
                </blockquote>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Alex Chen</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Marketing Director at TechCorp</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <blockquote className="text-lg text-slate-600 dark:text-slate-300 italic mb-4 leading-relaxed">
                  "The AI insights saved us months of manual analysis work."
                </blockquote>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Sarah Kim</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Product Manager at StartupXYZ</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  M
                </div>
                <blockquote className="text-lg text-slate-600 dark:text-slate-300 italic mb-4 leading-relaxed">
                  "Finally, a tool that actually understands our business needs."
                </blockquote>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Mike Rodriguez</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Growth Lead at ScaleUp Inc</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto pl-2 sm:pl-3 lg:pl-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-200 mb-16">
              Frequently Asked <span className="italic font-thin">Questions</span>
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3">
                  How does Spotly analyze landing pages?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Spotly uses advanced AI to analyze both visual design elements and technical SEO factors, 
                  providing comprehensive insights for landing page optimization.
                </p>
              </div>

              <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3">
                  What types of insights do you provide?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  We provide actionable recommendations on design improvements, content optimization, 
                  technical SEO fixes, and conversion rate optimization strategies.
                </p>
              </div>

              <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3">
                  How long does the analysis take?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Most analyses are completed within minutes. Complex pages may take up to 5 minutes 
                  for comprehensive evaluation.
                </p>
              </div>

              <div className="border-b border-slate-200 dark:border-slate-700 pb-6">
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-3">
                  Do you support all types of landing pages?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  Yes, Spotly works with any landing page format - from simple HTML pages to complex 
                  React applications and WordPress sites.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-600 dark:text-slate-300">
        <div className="max-w-7xl mx-auto pl-2 sm:pl-3 lg:pl-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-medium italic text-slate-800 dark:text-slate-200 mb-6 tracking-wide">
              Spotly
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              AI-powered SEO analysis that combines visual design evaluation with technical 
              optimization to maximize your landing page performance.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="border-t border-slate-300 dark:border-slate-700 pt-8">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light">
                © 2024 Spotly. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
