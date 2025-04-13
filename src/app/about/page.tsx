"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// 创建一个客户端组件来处理 useSearchParams
function AboutPageContent() {
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

        {/* 公司简介部分 - 简约日式设计 */}
        <section className="py-20 bg-white relative">
          {/* 背景装饰 */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/3 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-blue-500/3 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* 标题 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {language === 'en' ? 'ABOUT KAZAMI' : 'KAZAMIについて'}
              </span>
              <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
                {t.about.companyProfile.title}
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-px bg-primary/30"></div>
                <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
                <div className="w-12 h-px bg-primary/30"></div>
              </div>
              <p className="text-gray-600">
                {t.about.companyProfile.description}
              </p>
            </motion.div>
            
            {/* 公司简介内容 - 图文布局 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* 日式装饰元素 */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/20 z-10 hidden lg:block"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/20 z-10 hidden lg:block"></div>
                
                <div className="overflow-hidden rounded-sm shadow-lg relative z-1">
                  <Image 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                    alt="Kazami Office"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-medium mb-6 border-l-4 border-primary pl-4">
                  {language === 'en' ? 'Our History' : '私たちの歴史'}
                </h3>
                
                <div className="space-y-6 text-gray-700">
                  <p>
                    {language === 'en' 
                      ? 'Founded in 1942, Kazami Management Research Institute has been at the forefront of management consulting in Japan and across Asia for over eight decades. Our journey began with a simple mission: to help businesses thrive through innovation and operational excellence.' 
                      : '1942年に設立されたKazami経営研究所は、80年以上にわたり、日本およびアジア全域の経営コンサルティングの最前線に立ってきました。私たちの旅は、イノベーションと卓越した運用を通じてビジネスの繁栄を支援するという簡単な使命から始まりました。'}
                  </p>
                  <p>
                    {language === 'en' 
                      ? 'Over the decades, we have evolved and expanded our services to meet the changing needs of businesses in an increasingly global and digital marketplace, while staying true to our Japanese heritage of precision, dedication, and continuous improvement.' 
                      : '数十年にわたり、私たちはますますグローバルでデジタル化する市場環境において、企業の変化するニーズに応えるためにサービスを進化させ拡大してきました。同時に、精密さ、献身、継続的改善という日本の伝統を大切にしています。'}
                  </p>
                </div>
                
                {/* 日式设计元素 - 时间线点缀 */}
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-light">1942</div>
                  <div className="w-32 h-px bg-gradient-to-r from-primary/50 to-primary/10"></div>
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-light">1970</div>
                  <div className="w-32 h-px bg-gradient-to-r from-blue-400/50 to-blue-400/10"></div>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-light">2023</div>
                </div>
              </motion.div>
            </div>
            
            {/* 公司文化 - 使命愿景价值观卡片 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            >
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

  // 主页面组件
  export default function AboutPage() {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <AboutPageContent />
      </Suspense>
    );
  }
