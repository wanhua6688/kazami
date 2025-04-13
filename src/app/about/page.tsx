"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const searchParams = useSearchParams();

  // 创建带语言参数的链接
  const getLocalizedHref = (path: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", language);
    return `${path}?${params.toString()}`;
  };

  // 动画变体
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Japanese Inspired Design */}
      <section className="relative w-full h-[80vh] mb-0">
        {/* 日式笔刷装饰背景 */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 bg-gray-900/30 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1624155805033-13d7500adc2a?q=80&w=1430&auto=format&fit=crop"
          alt="About Kazami"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-95"
        />

        {/* 日式装饰边框元素 */}
        <div className="absolute top-10 right-10 bottom-10 left-10 border border-white/10 z-10 pointer-events-none"></div>
        <div className="absolute top-12 right-12 bottom-12 left-12 border border-white/10 z-10 pointer-events-none"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-px bg-white/40"></div>
              <div className="w-2 h-2 bg-white/60 mx-3 rotate-45"></div>
              <div className="w-8 h-px bg-white/40"></div>
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-light mb-6 tracking-wider">
              {language === 'en' ? 'Our Story' : '私たちの物語'}
            </h1>
            <div className="w-24 h-[1px] bg-white/70 mx-auto mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed">
              {language === 'en' 
                ? 'Dedicated to excellence in management consulting since 1942, blending traditional Japanese precision with global innovation' 
                : '1942年以来、日本の精密さとグローバルな革新を融合し、経営コンサルティングの卓越性を追求してきました'}
            </p>

            {/* 向下滚动指示器 */}
            <motion.div 
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 日式风格装饰元素 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-primary/30 z-20"></div>
      </section>

      {/* Company Philosophy Section - Zen-Inspired */}
      <section className="py-24 bg-white relative">
        {/* 日式装饰背景元素 */}
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-primary/5 -z-10"></div>
        <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/3 rounded-full filter blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {language === 'en' ? 'OUR PHILOSOPHY' : '私たちの哲学'}
              </span>
              <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">
                {language === 'en' ? 'Management Expertise Rooted in Tradition' : '伝統に根ざした経営の専門知識'}
              </h2>
              <div className="w-16 h-[1px] bg-primary/30 mx-auto mb-8"></div>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                {language === 'en' 
                  ? 'Kazami blends traditional Japanese management principles with modern global insights. We value precision, continuous improvement, and deep stakeholder relationships to deliver sustainable business transformations.'
                  : 'Kazamiは、伝統的な日本の経営原則と現代のグローバルな洞察を融合させています。持続可能なビジネス変革を実現するために、精密さ、継続的な改善、そして深いステークホルダーとの関係を大切にしています。'}
              </p>

              {/* 日式设计元素 - 引用标记 */}
              <div className="relative inline-block px-8 py-6 text-lg text-gray-700 italic max-w-2xl">
                <div className="absolute top-0 left-0 w-10 h-10">
                  <svg className="w-6 h-6 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-center">
                  {language === 'en'
                    ? 'Excellence is not a destination, but a continuous journey of improvement.'
                    : '優れていることは目的地ではなく、改善の継続的な旅です。'}
                </p>
                <div className="absolute bottom-0 right-0 w-10 h-10 flex justify-end items-end">
                  <svg className="w-6 h-6 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {/* 卡片1：精确洞察 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 border-t-2 border-primary shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {language === 'en' ? 'Precision Insights' : '精密な洞察'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We combine meticulous analysis with deep industry expertise to identify opportunities others miss.'
                  : '綿密な分析と深い業界専門知識を組み合わせて、他では見落とされる機会を特定します。'}
              </p>
            </motion.div>

            {/* 卡片2：持续改进 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 border-t-2 border-primary shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {language === 'en' ? 'Continuous Improvement' : '継続的改善'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Embracing the Kaizen philosophy, we focus on creating sustainable improvement processes.'
                  : 'カイゼン哲学を採用し、持続可能な改善プロセスの構築に注力しています。'}
              </p>
            </motion.div>

            {/* 卡片3：全球视野 */}
            <motion.div 
              variants={fadeIn}
              className="bg-white p-8 border-t-2 border-primary shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {language === 'en' ? 'Global Perspective' : 'グローバルな視点'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'We blend Japanese excellence with international best practices for solutions that work across cultures.'
                  : '文化を超えて機能するソリューションのために、日本の卓越性と国際的なベストプラクティスを融合させています。'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="relative my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-sm -z-10"></div>
        <div className="w-full h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>
        <div className="max-w-2xl mx-auto py-8 px-4 text-center">
          <p className="text-lg text-gray-600 italic">
            {language === 'en' 
              ? 'Through our tailored solutions, we aim to create sustainable value while preserving the traditional Japanese management philosophy of harmony, respect, and continuous improvement.' 
              : 'カスタマイズされたソリューションを通じて、調和、尊重、継続的改善という伝統的な日本の経営哲学を守りながら、持続可能な価値を創造することを目指しています。'}
          </p>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-primary/30"></div>
      </div>

      {/* Mission & Vision Section - Japanese Inspired */}
      <section className="py-24 bg-white relative">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gray-50 -z-10"></div>
        <div className="absolute -left-32 bottom-1/4 w-64 h-64 bg-primary/3 rounded-full filter blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {language === 'en' ? 'PURPOSE & DIRECTION' : '目的と方向性'}
              </span>
              <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">
                {language === 'en' ? 'Mission & Vision' : 'ミッション & ビジョン'}
              </h2>
              
              {/* 日式装饰元素 */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-12 h-px bg-primary/30"></div>
                <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
                <div className="w-12 h-px bg-primary/30"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* 日式装饰边框 */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="inline-block mb-6 p-2.5 bg-primary/10 text-primary rounded-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">
                  {t.about.mission.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.about.mission.description}
                </p>
                
                {/* 日式设计元素 - 标语 */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="text-sm text-primary/70 flex items-center">
                    <span className="w-3 h-px bg-primary/50 mr-2"></span>
                    <span>{language === 'en' ? 'Excellence through collaboration' : '協力による卓越性'}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* 日式装饰边框 */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="inline-block mb-6 p-2.5 bg-blue-100/50 text-blue-700 rounded-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">
                  {t.about.vision.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.about.vision.description}
                </p>
                
                {/* 日式设计元素 - 标语 */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="text-sm text-blue-600/70 flex items-center">
                    <span className="w-3 h-px bg-blue-400/50 mr-2"></span>
                    <span>{language === 'en' ? 'Innovation with purpose' : '目的ある革新'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* 底部装饰元素 */}
          <div className="flex items-center justify-center mt-16">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <div className="w-12 h-px bg-primary/20 mx-2"></div>
            <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
            <div className="w-12 h-px bg-primary/20 mx-2"></div>
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
