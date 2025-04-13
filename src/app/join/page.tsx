"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';

export default function JoinPage() {
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
  
  // 团队成员数据
  const teamMembers = [
    {
      name: language === 'en' ? 'Hiroshi Tanaka' : '田中 博',
      role: language === 'en' ? 'Senior Consultant' : 'シニアコンサルタント',
      quote: language === 'en' 
        ? 'Working at Kazami has been incredibly rewarding. The collaborative environment and challenging projects have helped me grow professionally while making a real impact for our clients.' 
        : '風見経営研究所での仕事は非常にやりがいがあります。協力的な環境と挑戦的なプロジェクトは、クライアントに実際の影響をもたらしながら、私が専門的に成長するのに役立っています。',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      name: language === 'en' ? 'Yuki Yamamoto' : '山本 由紀',
      role: language === 'en' ? 'Digital Strategy Consultant' : 'デジタル戦略コンサルタント',
      quote: language === 'en' 
        ? 'Kazami encourages innovation and out-of-the-box thinking. I\'ve had the opportunity to lead transformative projects and continuously develop my skills in an inspiring environment.' 
        : '風見経営研究所はイノベーションと型破りな思考を奨励しています。刺激的な環境の中で、変革的なプロジェクトをリードし、スキルを継続的に開発する機会がありました。',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
    }
  ];
  
  // 职位数据扩展
  const jobPositions = [
    {
      title: language === 'en' ? 'Senior Management Consultant' : 'シニアマネジメントコンサルタント',
      location: language === 'en' ? 'Tokyo (Remote Available)' : '東京（リモート可能）',
      type: language === 'en' ? 'Full-time' : '正社員',
      description: language === 'en' 
        ? 'Lead strategic consulting projects for our clients, developing innovative solutions to complex business challenges. Requires 8+ years of consulting experience, strong leadership, and expertise in one or more industries.' 
        : 'クライアントの戦略的コンサルティングプロジェクトをリードし、複雑なビジネス課題に革新的なソリューションを開発します。コンサルティング経験8年以上、強いリーダーシップ、一つ以上の業界での専門知識が必要です。',
      requirements: language === 'en'
        ? ['MBA or equivalent advanced degree', 'Strategic thinking and problem-solving skills', 'Excellent client communication', 'Experience leading teams', 'Industry-specific expertise'] 
        : ['MBA または同等の高度な学位', '戦略的思考と問題解決能力', '優れたクライアントコミュニケーション', 'チームリーダーとしての経験', '業界固有の専門知識']
    },
    {
      title: language === 'en' ? 'Digital Transformation Consultant' : 'デジタルトランスフォーメーションコンサルタント',
      location: language === 'en' ? 'Osaka or Tokyo' : '大阪または東京',
      type: language === 'en' ? 'Full-time' : '正社員',
      description: language === 'en' 
        ? 'Help our clients navigate their digital transformation journey by developing comprehensive strategies, implementing new technologies, and optimizing business processes. This role requires a blend of business acumen and technological understanding.' 
        : '包括的な戦略の開発、新しいテクノロジーの導入、ビジネスプロセスの最適化により、クライアントのデジタルトランスフォーメーションの旅をサポートします。この役割にはビジネス感覚と技術理解の両方が必要です。',
      requirements: language === 'en'
        ? ['Experience with digital transformation projects', 'Knowledge of emerging technologies', 'Change management skills', 'Process optimization expertise', 'Client-facing experience'] 
        : ['デジタルトランスフォーメーションプロジェクトの経験', '新興テクノロジーの知識', '変更管理スキル', 'プロセス最適化の専門知識', 'クライアント対応の経験']
    },
    {
      title: language === 'en' ? 'Junior Consultant' : 'ジュニアコンサルタント',
      location: language === 'en' ? 'Tokyo' : '東京',
      type: language === 'en' ? 'Full-time' : '正社員',
      description: language === 'en' 
        ? 'Entry-level position for graduates looking to build a career in management consulting. You will support senior team members with research, analysis, and client deliverables while learning our methodologies and building your consulting skillset.' 
        : '管理コンサルティングでのキャリアを築きたい卒業生向けのエントリーレベルの職位です。シニアチームメンバーの調査、分析、クライアント向け成果物をサポートしながら、当社の手法を学び、コンサルティングスキルセットを構築します。',
      requirements: language === 'en'
        ? ['Bachelor\'s degree in Business, Economics, or related field', 'Strong analytical skills', 'Excellent communication skills', 'Willingness to learn and grow', 'Collaborative mindset'] 
        : ['経営学、経済学、または関連分野の学士号', '強い分析スキル', '優れたコミュニケーションスキル', '学習と成長への意欲', '協力的なマインドセット']
    }
  ];
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern Japanese Style */}
      <section className="relative w-full h-[70vh] mb-0">
        {/* 日式装饰背景 */}
        <div className="absolute -right-40 top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 bg-gray-900/50 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
          alt="Join Our Team"
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
              {language === 'en' ? 'Join Our Team' : 'チームに参加する'}
            </h1>
            <div className="w-24 h-[1px] bg-white/70 mx-auto mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto px-4 leading-relaxed">
              {language === 'en' 
                ? 'Build a meaningful career where innovation meets impact' 
                : 'イノベーションがインパクトを生み出す意義あるキャリアを築く'}
            </p>
          </motion.div>
        </div>
        
        {/* 日式风格装饰元素 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-primary/30 z-20"></div>
      </section>

      {/* Why Join Us Section - Japanese Inspired */}
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
              {language === 'en' ? 'OUR PHILOSOPHY' : '私たちの理念'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'Why Choose Kazami' : 'なぜ風見を選ぶのか'}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'At Kazami, we believe in the power of our people. We foster a collaborative culture where innovative thinking and personal growth are encouraged, enabling us to deliver exceptional value to our clients.' 
                : '風見経営研究所では、人々の力を信じています。革新的な思考と個人の成長を奨励する協力的な文化を育み、クライアントに卓越した価値を提供できるようにしています。'}
            </p>
          </motion.div>
          
          {/* Culture & Values Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div 
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 7 17l-5-5"></path>
                    <path d="m22 10-7.5 7.5L13 16"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Excellence' : '卓越性'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We are committed to delivering exceptional quality in everything we do, constantly striving to exceed expectations and set new standards.'
                    : '私たちは行うすべてのことで卓越した品質を提供することに取り組み、常に期待を超え、新たな基準を設定するよう努めています。'}
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                    <path d="m4.93 4.93 14.14 14.14"></path>
                    <path d="m19.07 4.93-14.14 14.14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Innovation' : 'イノベーション'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We embrace creative thinking and novel approaches to solve complex problems, challenging conventions to drive meaningful change.'
                    : '私たちは複雑な問題を解決するために創造的思考と新しいアプローチを取り入れ、意味のある変化をもたらすために慣例に挑戦します。'}
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Collaboration' : '協力'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We value diverse perspectives and believe that the best solutions emerge from teamwork, mutual respect, and open communication.'
                    : '私たちは多様な視点を重視し、最良のソリューションはチームワーク、相互尊重、オープンなコミュニケーションから生まれると信じています。'}
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Integrity' : '誠実さ'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We uphold the highest ethical standards in all our interactions, building trust through transparency, honesty, and accountability.'
                    : '私たちはすべての交流において最高の倫理基準を維持し、透明性、誠実さ、説明責任を通じて信頼を構築します。'}
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Continuous Learning' : '継続的な学習'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We foster a culture of lifelong learning and professional development, enabling our team to stay at the forefront of industry knowledge.'
                    : '私たちは生涯学習と専門能力開発の文化を育み、チームが業界知識の最前線にとどまれるようにしています。'}
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.78l1.06 1.06L12 5.67l-1.06-1.06a5.4 5.4 0 0 0-7.78-7.78l1.06-1.06L12 21.23l7.78-7.78 1.06-1.06a5.4 5.4 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Client Focus' : 'クライアント重視'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'We are dedicated to understanding our clients\' challenges and delivering solutions that create lasting value for their businesses.'
                    : '私たちはクライアントの課題を理解し、彼らのビジネスに持続的な価値を生み出すソリューションを提供することに専念しています。'}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Testimonials */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute -right-40 top-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'TEAM VOICES' : 'チームの声'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'From Our Team Members' : 'チームメンバーからのメッセージ'}
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
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm relative group"
              >
                {/* 日式装饰边框 */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4 border border-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{member.name}</div>
                    <div className="text-sm text-primary">{member.role}</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                  <div className="mb-4 text-primary/20">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p>{member.quote}</p>
                </blockquote>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Current Openings - Modern List */}
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
              {language === 'en' ? 'CAREER OPPORTUNITIES' : 'キャリア機会'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'Current Openings' : '現在の募集ポジション'}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Explore our open positions and find the perfect role where you can grow professionally while making a meaningful impact.' 
                : '私たちの求人を探索し、専門的に成長しながら意義のある影響を与えることができる完璧な役割を見つけてください。'}
            </p>
          </motion.div>
          
          {/* Job Positions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-5xl mx-auto"
          >
            {jobPositions.map((position, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="mb-8 bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="p-8 relative">
                  {/* 装饰边框 */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-medium text-gray-800 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {position.location}
                        </span>
                        <span className="inline-flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(`Application for ${position.title} Position`)}`}
                      className="inline-flex items-center justify-center px-4 py-2 border border-primary text-sm font-medium rounded-sm text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {language === 'en' ? 'Apply Now' : '応募する'}
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="text-gray-700 mb-6">
                      <p>{position.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                        {language === 'en' ? 'REQUIREMENTS' : '必要条件'}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-gray-700 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 border border-gray-100 rounded-sm"
          >
            <h3 className="text-lg font-medium mb-4 text-center text-gray-800">
              {language === 'en' ? 'Application Process' : '応募プロセス'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="text-center">
                <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-3">
                  <span className="font-medium">1</span>
                </div>
                <h4 className="text-sm font-medium mb-2">{language === 'en' ? 'Submit Application' : '応募書類の提出'}</h4>
                <p className="text-xs text-gray-600">
                  {language === 'en' ? 'Send your resume and cover letter to our HR team' : '履歴書と志望動機書を人事チームに送付'}
                </p>
              </div>
              <div className="text-center">
                <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-3">
                  <span className="font-medium">2</span>
                </div>
                <h4 className="text-sm font-medium mb-2">{language === 'en' ? 'Interview Process' : '面接プロセス'}</h4>
                <p className="text-xs text-gray-600">
                  {language === 'en' ? 'Initial screening followed by team and case interviews' : '初期スクリーニングの後、チーム面接とケース面接'}
                </p>
              </div>
              <div className="text-center">
                <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-3">
                  <span className="font-medium">3</span>
                </div>
                <h4 className="text-sm font-medium mb-2">{language === 'en' ? 'Offer & Onboarding' : 'オファーと入社'}</h4>
                <p className="text-xs text-gray-600">
                  {language === 'en' ? 'Successful candidates receive offers and comprehensive onboarding' : '成功した候補者はオファーと包括的な入社オリエンテーションを受けます'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute -right-40 top-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {language === 'en' ? 'EMPLOYEE BENEFITS' : '福利厚生'}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === 'en' ? 'What We Offer' : '私たちが提供するもの'}
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
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-primary text-3xl mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m12 6 4 6h-8l4 6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3 text-center text-gray-800">
                {language === 'en' ? 'Professional Development' : '専門能力開発'}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {language === 'en'
                  ? 'Structured learning programs, mentorship, and ongoing education opportunities.'
                  : '体系的な学習プログラム、メンターシップ、継続的な教育の機会。'}
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-primary text-3xl mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3 text-center text-gray-800">
                {language === 'en' ? 'Work-Life Balance' : 'ワークライフバランス'}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {language === 'en'
                  ? 'Flexible working arrangements and policies that respect personal time.'
                  : '柔軟な勤務体制と個人の時間を尊重するポリシー。'}
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-primary text-3xl mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3 text-center text-gray-800">
                {language === 'en' ? 'Comprehensive Benefits' : '包括的な福利厚生'}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {language === 'en'
                  ? 'Health insurance, retirement plans, and wellness programs for employees.'
                  : '健康保険、退職金制度、従業員向けウェルネスプログラム。'}
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-primary text-3xl mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3 text-center text-gray-800">
                {language === 'en' ? 'Global Opportunities' : 'グローバルな機会'}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {language === 'en'
                  ? 'Chances to work on international projects and gain global experience.'
                  : '国際的なプロジェクトに取り組み、グローバルな経験を積む機会。'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action - Japanese Inspired */}
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
                ? 'Ready to Take the Next Step?' 
                : '次のステップを踏む準備はできていますか？'}
            </h2>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              {language === 'en' 
                ? 'We\'re looking for passionate individuals who want to grow professionally while making a meaningful impact. Send your resume and cover letter today to start your journey with Kazami.' 
                : '私たちは、意義のある影響を与えながら専門的に成長したいと考えている情熱的な人材を探しています。今日、履歴書と志望動機書を送信して、風見経営研究所との旅を始めましょう。'}
            </p>
            
            <a 
              href={`mailto:${t.contact.email}?subject=${encodeURIComponent(language === 'en' ? 'Job Application Inquiry' : '求人応募の問い合わせ')}`}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 border border-primary transition-colors duration-300"
            >
              {language === 'en' ? 'Apply Now' : '今すぐ応募'}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
