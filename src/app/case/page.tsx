"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

export default function CasePage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  // 动画变体
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // 案例研究数据 - 扩展内容
  const caseStudies = [
    {
      id: 1,
      title: language === 'en' ? 'Electronics Manufacturer - Southeast Asian Expansion' : '電子機器メーカー - 東南アジア展開',
      image: 'https://images.unsplash.com/photo-1563770557117-73e8397e6015?q=80&w=1974&auto=format&fit=crop',
      category: language === 'en' ? 'Market Expansion' : '市場拡大',
      client: language === 'en' ? 'Japanese Electronics Manufacturer' : '日本の電子機器メーカー',
      duration: language === 'en' ? '8 months' : '8ヶ月',
      scope: language === 'en' 
        ? 'Kazami supported the client\'s overseas market expansion, providing services including market analysis, entry strategy formulation, and risk management.' 
        : '風見経営研究所はクライアントの海外市場拡大をサポートし、市場分析、参入戦略の策定、リスク管理を含むサービスを提供しました。',
      challenge: language === 'en'
        ? 'The client faced saturated domestic market conditions and needed to expand into Southeast Asia while navigating cultural differences and regulatory challenges.'
        : 'クライアントは国内市場の飽和に直面し、文化的な違いと規制上の課題に対処しながら東南アジアに進出する必要がありました。',
      solution: language === 'en'
        ? 'Comprehensive market research, customized entry strategy with phased approach, and localized partnership development.'
        : '包括的な市場調査、段階的アプローチによるカスタマイズされた参入戦略、現地パートナーシップの開発。',
      results: language === 'en'
        ? 'Successfully established operations in Southeast Asia with 35% first-year growth exceeding projections.'
        : '予測を上回る35%の初年度成長率で東南アジアでの事業を成功裏に確立。',
      summary: language === 'en' 
        ? 'The client aimed to enter Southeast Asian markets in response to domestic market saturation. The detailed market research and customized entry strategy provided by Kazami enabled the company to successfully establish operations in Southeast Asia.' 
        : 'クライアントは国内市場の飽和に対応するため、東南アジア市場への進出を目指していました。風見経営研究所が提供した詳細な市場調査とカスタマイズされた参入戦略により、同社は東南アジアに営業所を設立することに成功しました。'
    },
    {
      id: 2,
      title: language === 'en' ? 'Financial Services - Digital Transformation' : '金融サービス - デジタルトランスフォーメーション',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop',
      category: language === 'en' ? 'Digital Transformation' : 'デジタル変革',
      client: language === 'en' ? 'Major Regional Bank' : '大手地方銀行',
      duration: language === 'en' ? '12 months' : '12ヶ月',
      scope: language === 'en' 
        ? 'End-to-end digital transformation including customer experience redesign, process automation, and cultural change management.' 
        : '顧客体験の再設計、プロセス自動化、文化的変革管理を含む包括的なデジタル変革。',
      challenge: language === 'en'
        ? 'Declining customer engagement, competition from fintech startups, and legacy systems hampering innovation.'
        : '顧客エンゲージメントの低下、フィンテックスタートアップからの競争、レガシーシステムによるイノベーションの妨げ。',
      solution: language === 'en'
        ? 'Comprehensive digital roadmap, mobile banking platform redesign, AI-powered customer service, and staff upskilling program.'
        : '包括的なデジタルロードマップ、モバイルバンキングプラットフォームの再設計、AI搭載の顧客サービス、スタッフのスキルアップグレードプログラム。',
      results: language === 'en'
        ? 'Customer engagement increased by 42%, operational costs reduced by 28%, and new digital services launched in half the historical time-to-market.'
        : '顧客エンゲージメントが42%増加、運用コストが28%削減、新デジタルサービスが従来の市場投入時間の半分で立ち上げ。',
      summary: language === 'en' 
        ? 'A regional bank struggling with digital adoption partnered with Kazami to completely reimagine their customer journey and internal processes. The transformation resulted in significant improvements in customer satisfaction and operational efficiency.' 
        : 'デジタル導入に苦戦していた地方銀行が風見と提携し、顧客の旅とプロセスを完全に再構築。その変革により、顧客満足度と業務効率が大幅に向上しました。'
    }
  ];
  
  // 顾客评价数据 - 扩展内容
  const testimonials = [
    {
      id: 1,
      quote: language === 'en' 
        ? 'Working with Kazami was truly impressive. Throughout the entire partnership, the Kazami team demonstrated a high degree of flexibility and diverse service capabilities. Even when faced with complex international market environments or sudden changes, they were able to quickly adjust strategies and ensure the smooth progress of our project. Particularly noteworthy was their customized service, which truly helped address specific issues in our business expansion instead of providing generic solutions.' 
        : '風見経営研究所との協力は本当に印象的でした。パートナーシップ全体を通して、風見チームは高度な柔軟性と多様なサービス能力を発揮しました。複雑な国際市場環境に直面しても、突然の変化に対応しても、彼らは素早く戦略を調整し、私たちのプロジェクトの円滑な進行を確保することができました。特に注目すべきは彼らのカスタマイズされたサービスで、一般的な解決策を提供するのではなく、私たちのビジネス拡大における特定の問題に真に取り組むのに役立ちました。',
      author: language === 'en' ? 'Client, Manufacturing Industry' : 'クライアント、製造業',
      company: language === 'en' ? 'Leading Electronics Manufacturer' : '大手電子機器メーカー',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1769&auto=format&fit=crop',
    },
    {
      id: 2,
      quote: language === 'en' 
        ? 'The digital transformation consultancy provided by Kazami completely changed our business trajectory. Their team not only helped us implement new technologies but fundamentally transformed how we think about our customer relationships and internal processes. The results have exceeded our expectations, with significant improvements in both operational efficiency and customer satisfaction metrics.' 
        : '風見経営研究所が提供するデジタル変革コンサルティングは、私たちのビジネスの軌道を完全に変えました。彼らのチームは新しい技術の導入を支援するだけでなく、顧客関係や内部プロセスについての考え方を根本的に変革しました。結果は私たちの期待を超えるもので、業務効率と顧客満足度指標の両方で大幅な改善が見られました。',
      author: language === 'en' ? 'Director of Digital Strategy' : 'デジタル戦略ディレクター',
      company: language === 'en' ? 'Regional Financial Institution' : '地方金融機関',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    }
  ];
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern Japanese Style */}
      <section className="relative w-full h-[70vh] mb-0">
        {/* 日式笔刷装饰背景 */}
        <div className="absolute -right-40 top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop"
          alt="Case Studies"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-95"
        />
        
        {/* 日式装饰边框元素 */}
        <div className="absolute top-8 right-8 bottom-8 left-8 border border-white/10 z-10 pointer-events-none"></div>
        <div className="absolute top-10 right-10 bottom-10 left-10 border border-white/10 z-10 pointer-events-none"></div>
        
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
            
            <h1 className="text-white text-5xl md:text-6xl font-light mb-6 tracking-wider">
              {language === 'en' ? 'Success Stories' : '成功事例'}
            </h1>
            <div className="w-24 h-[1px] bg-white/70 mx-auto mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed">
              {language === 'en' 
                ? 'Discover how our expertise has helped businesses transform challenges into opportunities' 
                : '当社の専門知識がどのようにしてビジネスの課題を機会に変えたかをご覧ください'}
            </p>
          </motion.div>
        </div>
        
        {/* 日式风格装饰元素 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-primary/30 z-20"></div>
      </section>

      {/* Featured Case Study - Showcase */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-96 bg-primary/5 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'FEATURED WORK' : '注目の実績'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'Transformational Results' : '変革的な成果'}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Our work spans across industries and geographies, each project tailored to drive measurable impact and sustainable growth.' 
                : '私たちの仕事は業界や地域を超え、各プロジェクトは測定可能な影響と持続可能な成長を促進するために調整されています。'}
            </p>
          </motion.div>
          
          {/* Case Study Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-sm shadow-md overflow-hidden max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
                  alt="Digital Transformation Case" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                  <span className="text-white text-sm font-medium bg-primary/70 px-3 py-1 rounded-sm">
                    {language === 'en' ? 'DIGITAL TRANSFORMATION' : 'デジタル変革'}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {language === 'en' ? 'Financial Services Reinvention' : '金融サービスの再創造'}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-px bg-primary/50 mr-3"></div>
                    <span className="text-sm text-gray-500 uppercase">
                      {language === 'en' ? 'CHALLENGE' : '課題'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'A regional bank faced declining engagement and growing competition from digital-first financial services.' 
                      : '地方銀行はエンゲージメントの低下とデジタルファーストの金融サービスからの競争の増加に直面していました。'}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-px bg-primary/50 mr-3"></div>
                    <span className="text-sm text-gray-500 uppercase">
                      {language === 'en' ? 'APPROACH' : 'アプローチ'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' 
                      ? 'We developed a comprehensive digital strategy and led implementation across customer touchpoints, internal processes, and organizational culture.' 
                      : '顧客接点、内部プロセス、組織文化にわたる包括的なデジタル戦略を開発し、実装をリードしました。'}
                  </p>
                </div>
                
                <div className="flex justify-between text-sm mt-8">
                  <div>
                    <span className="block text-gray-500 mb-1">{language === 'en' ? 'RESULTS' : '結果'}</span>
                    <span className="font-semibold text-primary">+42% {language === 'en' ? 'Engagement' : 'エンゲージメント'}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">{language === 'en' ? 'TIME FRAME' : '期間'}</span>
                    <span className="font-semibold">12 {language === 'en' ? 'months' : 'ヶ月'}</span>
                  </div>
                  <div>
                    <Link 
                      href="#financial-case-detail" 
                      className="text-primary font-medium hover:underline flex items-center"
                    >
                      {language === 'en' ? 'Read More' : '詳細を見る'}
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Japanese Inspired */}
      <section className="py-20 bg-gray-50 relative">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute -left-40 top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'CLIENT VOICES' : 'クライアントの声'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'What Our Clients Say' : 'お客様の声'}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeIn}
                className="bg-white rounded-sm shadow-md overflow-hidden relative group"
              >
                {/* 日式装饰边框 */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* 引用标记 */}
                <div className="mb-6 text-primary/20">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                  <p>{testimonial.quote.length > 200 ? testimonial.quote.substring(0, 200) + '...' : testimonial.quote}</p>
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4 border border-gray-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* 案例研究部分 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'OUR IMPACT' : '私たちの影響'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'Case Studies' : '事例研究'}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Explore how our methodologies and expertise have helped organizations overcome challenges and achieve sustainable growth.' 
                : '私たちの手法と専門知識がどのようにして組織が課題を克服し、持続可能な成長を達成するのに役立ったかをご覧ください。'}
            </p>
          </motion.div>
          
          {/* 案例研究网格 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
          >
            {caseStudies.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                variants={fadeIn}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-56">
                  <Image 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <span className="inline-block bg-primary/70 text-white text-xs font-medium px-2 py-1 mb-3">
                        {caseStudy.category}
                      </span>
                      <h3 className="text-white text-xl font-semibold leading-tight">
                        {caseStudy.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="block text-gray-500 text-xs mb-1">
                        {language === 'en' ? 'CLIENT' : 'クライアント'}
                      </span>
                      <span className="font-medium text-gray-800">{caseStudy.client}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-xs mb-1">
                        {language === 'en' ? 'DURATION' : '期間'}
                      </span>
                      <span className="font-medium text-gray-800">{caseStudy.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-px bg-primary/50 mr-3"></div>
                      <span className="text-xs text-gray-500 uppercase">
                        {language === 'en' ? 'CHALLENGE' : '課題'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {caseStudy.challenge.length > 100 ? caseStudy.challenge.substring(0, 100) + '...' : caseStudy.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-px bg-primary/50 mr-3"></div>
                      <span className="text-xs text-gray-500 uppercase">
                        {language === 'en' ? 'RESULTS' : '結果'}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium">
                      {caseStudy.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* 指标部分 */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute -right-40 top-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 shadow-sm text-center group hover:shadow-md transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="text-4xl text-primary font-light mb-2">90%</div>
                <div className="text-sm text-gray-500 mb-2">{language === 'en' ? 'OF OUR CLIENTS' : 'のクライアント'}</div>
                <div className="text-gray-700 font-medium">
                  {language === 'en' ? 'Renew their partnership with us' : '当社とのパートナーシップを更新'}
                </div>
              </div>
              
              <div className="bg-white p-8 shadow-sm text-center group hover:shadow-md transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="text-4xl text-primary font-light mb-2">120+</div>
                <div className="text-sm text-gray-500 mb-2">{language === 'en' ? 'PROJECTS' : 'プロジェクト'}</div>
                <div className="text-gray-700 font-medium">
                  {language === 'en' ? 'Successfully delivered on time' : '時間通りに成功裏に納品'}
                </div>
              </div>
              
              <div className="bg-white p-8 shadow-sm text-center group hover:shadow-md transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="text-4xl text-primary font-light mb-2">36%</div>
                <div className="text-sm text-gray-500 mb-2">{language === 'en' ? 'AVERAGE' : '平均'}</div>
                <div className="text-gray-700 font-medium">
                  {language === 'en' ? 'ROI increase for our clients' : 'クライアントのROI増加'}
                </div>
              </div>
              
              <div className="bg-white p-8 shadow-sm text-center group hover:shadow-md transition-all duration-300 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="text-4xl text-primary font-light mb-2">15+</div>
                <div className="text-sm text-gray-500 mb-2">{language === 'en' ? 'YEARS' : '年'}</div>
                <div className="text-gray-700 font-medium">
                  {language === 'en' ? 'Of industry experience' : '業界での経験'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* 行动号召部分 */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 装饰背景元素 */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* 几何装饰元素 */}
        <div className="absolute top-40 -right-16 w-32 h-32 border border-primary/10 rotate-45"></div>
        <div className="absolute bottom-20 -left-16 w-32 h-32 border border-primary/10 rotate-45"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' 
                ? 'Ready to Transform Your Business?' 
                : 'ビジネスを変革する準備はできていますか？'}
            </h2>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              {language === 'en' 
                ? 'Our team of experienced consultants is ready to help you navigate complex challenges and achieve sustainable growth. Let\'s start the conversation about how we can help your organization thrive.' 
                : '経験豊富なコンサルタントのチームが、複雑な課題を乗り越え、持続可能な成長を達成するお手伝いをする準備ができています。貴社の組織が繁栄するためのサポート方法について、ぜひ対話を始めましょう。'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={language === 'ja' ? '/ja/contact' : '/contact'} 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 border border-primary transition-colors duration-300"
              >
                {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
              </Link>
              
              <Link 
                href={language === 'ja' ? '/ja/services' : '/services'} 
                className="inline-block bg-white text-primary hover:bg-gray-50 font-medium py-3 px-8 border border-primary/20 hover:border-primary/50 transition-colors duration-300"
              >
                {language === 'en' ? 'Explore Our Services' : 'サービスを見る'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
