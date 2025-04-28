"use client";

import React, { Suspense, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

// SearchParamsWrapper 用于安全地使用 useSearchParams
function SearchParamsWrapper() {
  const searchParams = useSearchParams();
  return { searchParams };
}

interface ClientProps {
  children?: ReactNode;
}

function ServicesPageContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-0">
      {/* Hero Section - 日式美学风格 */}
      <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/banner/b4.jpg"
          alt="Our Services"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="object-center"
        />
        {/* 优雅的渐变叠加 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-center justify-center">
          <div className="container mx-auto px-4 relative">
            {/* 日式设计元素 - 装饰性框架 */}
            <div className="absolute top-20 left-20 w-40 h-40 border-t-2 border-l-2 border-white/30 z-10 hidden lg:block"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 border-b-2 border-r-2 border-white/30 z-10 hidden lg:block"></div>

            <div className="text-center max-w-4xl mx-auto relative">
              {/* 装饰性元素 */}
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>

              <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                {language === "en" ? "Our Services" : "サービス"}
              </h1>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Innovative consulting solutions tailored to propel your business forward"
                  : "革新的なコンサルティングソリューションでビジネスの前進をサポート"}
              </p>

              {/* 装饰性分隔 */}
              <div className="w-24 h-0.5 bg-primary/70 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* 视差滚动提示 */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg
            className="w-8 h-8 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* 专业能力展示部分 - 新增 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/3 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-blue-500/3 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* 日式装饰元素 - 水平线 */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-primary/30"></div>
              <div className="w-2 h-2 rounded-full bg-primary/60 mx-3"></div>
              <div className="w-16 h-px bg-primary/30"></div>
            </div>

            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-3">
              {language === "en" ? "OUR METHODOLOGY" : "私たちの方法論"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en"
                ? "How We Deliver Exceptional Results"
                : "優れた結果を提供する方法"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Our approach fuses Japanese precision with global innovation, creating measurable impact for your business"
                : "日本の精密さとグローバルな革新を融合し、お客様のビジネスに測定可能な影響を創出します"}
            </p>
          </div>

          {/* 专业能力卡片 - 重新设计为更简洁的布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {/* 卡片1 */}
            <div className="relative group transition-all duration-300">
              {/* 日式装饰边框 */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="px-6 pt-8 pb-6 relative h-full bg-white rounded-sm shadow-sm group-hover:shadow-md transition-all duration-300 border-t-2 border-transparent group-hover:border-t-primary">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en" ? "Precision Analysis" : "精密分析"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "We identify opportunities with methodical data analysis and deep industry expertise"
                    : "体系的なデータ分析と深い業界知識で機会を特定します"}
                </p>
              </div>
            </div>

            {/* 卡片2 */}
            <div className="relative group transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="px-6 pt-8 pb-6 relative h-full bg-white rounded-sm shadow-sm group-hover:shadow-md transition-all duration-300 border-t-2 border-transparent group-hover:border-t-primary">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 012 2v1a2 2 0 01-2 2h-2v4l.586-.586z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en" ? "Tailored Strategy" : "カスタム戦略"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "We design solutions specific to your business context, culture, and objectives"
                    : "ビジネスの状況、文化、目標に特化したソリューションを設計します"}
                </p>
              </div>
            </div>

            {/* 卡片3 */}
            <div className="relative group transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="px-6 pt-8 pb-6 relative h-full bg-white rounded-sm shadow-sm group-hover:shadow-md transition-all duration-300 border-t-2 border-transparent group-hover:border-t-primary">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en" ? "Efficient Execution" : "効率的な実行"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "We implement with meticulous attention to detail while minimizing business disruption"
                    : "ビジネスの中断を最小限に抑えながら、細部まで綿密に実装します"}
                </p>
              </div>
            </div>

            {/* 卡片4 */}
            <div className="relative group transition-all duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="px-6 pt-8 pb-6 relative h-full bg-white rounded-sm shadow-sm group-hover:shadow-md transition-all duration-300 border-t-2 border-transparent group-hover:border-t-primary">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en" ? "Kaizen Evolution" : "カイゼン進化"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === "en"
                    ? "We apply continuous improvement principles to ensure sustainable long-term success"
                    : "持続可能な長期的成功を確保するために継続的改善の原則を適用します"}
                </p>
              </div>
            </div>
          </div>

          {/* 服务流程图表 - 改进为更日式的设计 */}
          <div className="mt-24 max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-12">
              {language === "en" ? "Our Proven Process" : "実証されたプロセス"}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {/* 连接线 */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary/10 hidden md:block"></div>

              {/* 阶段1 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center mb-12 md:mb-0 relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Discovery" : "発見"}
                </h4>
                <p className="text-sm text-gray-600 max-w-[180px]">
                  {language === "en"
                    ? "Analyze current state and identify needs"
                    : "現状の分析とニーズの特定"}
                </p>
              </div>

              {/* 阶段2 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center mb-12 md:mb-0 relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Design" : "設計"}
                </h4>
                <p className="text-sm text-gray-600 max-w-[180px]">
                  {language === "en"
                    ? "Create tailored strategy and solution"
                    : "カスタム戦略とソリューションの作成"}
                </p>
              </div>

              {/* 阶段3 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center mb-12 md:mb-0 relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Implementation" : "実施"}
                </h4>
                <p className="text-sm text-gray-600 max-w-[180px]">
                  {language === "en"
                    ? "Execute with precision and collaboration"
                    : "精密さと協力による実行"}
                </p>
              </div>

              {/* 阶段4 */}
              <div className="w-full md:w-1/4 flex flex-col items-center text-center relative">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-primary font-bold">04</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Improvement" : "改善"}
                </h4>
                <p className="text-sm text-gray-600 max-w-[180px]">
                  {language === "en"
                    ? "Measure, evaluate, and continuously improve"
                    : "測定、評価、継続的改善"}
                </p>
              </div>
            </div>
          </div>

          {/* 日式设计元素 - 底部装饰 */}
          <div className="flex items-center justify-center mt-24">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <div className="w-12 h-px bg-primary/20 mx-2"></div>
            <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
            <div className="w-12 h-px bg-primary/20 mx-2"></div>
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Overview - 日式简约风格 */}
      <section className="py-20 lg:py-28 relative">
        {/* 背景装饰 */}
        <div className="absolute top-0 -left-10 w-40 h-40 bg-primary/5 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/5 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4">
          {/* 日式装饰元素 */}
          <div className="mb-16 relative">
            {/* 圆点装饰 */}
            <div className="absolute -top-6 right-1/4 w-3 h-3 rounded-full bg-primary/40 hidden lg:block"></div>
            <div className="absolute top-10 left-1/3 w-2 h-2 rounded-full bg-primary/30 hidden lg:block"></div>

            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-3 mx-auto">
              {language === "en" ? "WHAT WE OFFER" : "サービス内容"}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-center">
              {t.services.overview}
            </h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-center text-lg text-gray-700 leading-relaxed">
              {language === "en"
                ? "We provide comprehensive consulting services to help your business grow and succeed in today's competitive market, combining traditional Japanese business philosophy with modern global practices."
                : "現代の競争市場でビジネスの成長と成功を支援する包括的なコンサルティングサービスを提供しています。伝統的な日本のビジネス哲学と現代のグローバルなプラクティスを組み合わせています。"}
            </p>
          </div>

          {/* 服务概览卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* 卡片1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-transparent hover:border-l-primary relative group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300">
                {language === "en" ? "Business Strategy" : "ビジネス戦略"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Develop effective business strategies that align with your goals and market opportunities."
                  : "目標と市場機会に合った効果的なビジネス戦略を策定します。"}
              </p>
            </div>

            {/* 卡片2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-transparent hover:border-l-primary relative group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300">
                {language === "en" ? "Digital Transformation" : "デジタル変革"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Navigate the digital landscape and transform your business with cutting-edge technologies."
                  : "最先端テクノロジーでデジタル環境を活用し、ビジネスを変革します。"}
              </p>
            </div>

            {/* 卡片3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-transparent hover:border-l-primary relative group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300">
                {language === "en" ? "HR Management" : "人材管理"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Optimize your human resources to build high-performing teams that drive success."
                  : "高パフォーマンスチームを構築するための人材最適化をサポートします。"}
              </p>
            </div>

            {/* 卡片4 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-transparent hover:border-l-primary relative group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-primary font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300">
                {language === "en" ? "Global Strategy" : "グローバル戦略"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Expand your business globally with strategic planning and international market expertise."
                  : "戦略的計画と国際市場の専門知識でグローバルにビジネスを展開します。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List - 日式风格列表 */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute -top-12 -right-12 w-24 h-24 border-t-2 border-r-2 border-primary/10 hidden lg:block"></div>
        <div className="absolute -bottom-12 -left-12 w-24 h-24 border-b-2 border-l-2 border-primary/10 hidden lg:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          {t.services.strategies.map((strategy, index) => (
            <div key={index} className="mb-24 last:mb-0">
              {/* 板块标题 - 日式极简风格 */}
              <div className="mb-12 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-primary/40 mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {strategy.title}
                  </h2>
                </div>
                {/* 装饰线 */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>
              </div>

              {/* 服务项目卡片 - 网格布局 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {strategy.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border-l-2 border-transparent hover:border-l-primary relative group"
                  >
                    {/* 卡片装饰 */}
                    <div className="absolute top-4 right-4 w-8 h-8 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>

                    <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* 阅读更多指示器 */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 服务列表部分 - 优化为更现代化简约的设计 */}
      <section className="py-20 bg-white relative">
        <div className="absolute right-0 top-0 bg-primary/5 w-1/3 h-96 -z-10"></div>
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
              {language === "en" ? "OUR EXPERTISE" : "私たちの専門知識"}
            </span>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
              {language === "en"
                ? "Strategic Solutions"
                : "戦略的ソリューション"}
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-primary/30"></div>
              <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
              <div className="w-12 h-px bg-primary/30"></div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Comprehensive consulting solutions tailored to address your most complex business challenges with precision and innovation."
                : "すべてのビジネス課題に対して、日本の方法論とグローバルなベストプラクティスを組み合わせた包括的なサポートを提供します。"}
            </p>
          </motion.div>
          {/* 战略类别 - 业务战略规划 */}
          <div className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-12 h-px bg-primary"></div>
              <h3 className="text-2xl font-semibold ml-4">
                {language === "en"
                  ? "Business Strategy Planning"
                  : "ビジネス戦略計画"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 市场战略 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en" ? "Market Strategy" : "市場戦略"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Focus on optimizing the business portfolio through market and customer demand analysis, enhancing the competitiveness of existing products, and exploring new business opportunities to support long-term growth."
                    : "市場と顧客需要の分析を通じてビジネスポートフォリオを最適化し、既存製品の競争力を高め、長期的な成長をサポートする新しいビジネス機会を探ります。"}
                </p>
              </motion.div>

              {/* 情景规划 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Scenario Planning"
                    : "シナリオプランニング"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Develop strategies by envisioning various future scenarios, helping businesses better navigate uncertainties and changes in the market environment."
                    : "様々な将来のシナリオを想定して戦略を立て、企業が市場環境の不確実性や変化をよりよく乗り切れるよう支援します。"}
                </p>
              
              </motion.div>

              {/* 多元化战略 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Diversification Strategy"
                    : "多角化戦略"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Utilize detailed market research, target market selection, resource allocation, and risk management. Explore new areas related or unrelated to current operations to diversify risks and increase revenue streams."
                    : "詳細な市場調査、ターゲット市場の選定、リソース配分、リスク管理を活用。リスクを分散し、収益源を増やすために、現在の事業に関連または無関連の新しい分野を探ります。"}
                </p>
              
              </motion.div>

              {/* 业务振兴战略 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Business Revitalization Strategy"
                    : "ビジネス再生戦略"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Achieve performance recovery and sustainable development through restructuring, operational optimization, product quality and service enhancement, and investment in new technologies and markets."
                    : "再構築、業務最適化、製品品質とサービス向上、新技術と市場への投資を通じて、業績回復と持続可能な発展を実現します。"}
                </p>
              
              </motion.div>
            </div>
          </div>

          {/* 战略类别 - 数字化转型战略 */}
          <div className="mb-20">
            <div className="flex items-center mb-10">
              <div className="w-12 h-px bg-primary"></div>
              <h3 className="text-2xl font-semibold ml-4">
                {language === "en"
                  ? "Digital Transformation Strategies"
                  : "デジタル変革戦略"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 数字业务战略 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Digital Business Strategy"
                    : "デジタルビジネス戦略"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Comprehensive strategy covering benchmarking, strategic planning, review, and implementation support for digital business transformation."
                    : "デジタルビジネス変革のためのベンチマーキング、戦略計画、レビュー、実装サポートを含む包括的な戦略。"}
                </p>
              
              </motion.div>

              {/* 技术战略 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Technology Strategy"
                    : "テクノロジー戦略"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Targeted technology investigation, strategic review, and implementation support to ensure technological advancement aligns with business objectives."
                    : "技術の進歩がビジネス目標に合致するよう、的を絞った技術調査、戦略的レビュー、実装サポートを提供します。"}
                </p>
              
              </motion.div>

              {/* 业务模式改革 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Business Model Reform"
                    : "ビジネスモデル改革"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Focus on promoting platform development and enhancing omni-channel capabilities. Integrate online and offline channels for improved customer experience and service efficiency."
                    : "プラットフォーム開発の促進とオムニチャネル機能の強化に焦点を当て、顧客体験とサービス効率を向上させるためにオンラインとオフラインのチャネルを統合します。"}
                </p>
              
              </motion.div>

              {/* 业务流程改革 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-t border-gray-100 hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md group relative"
              >
                <div className="absolute top-4 right-4 w-6 h-6 opacity-10 bg-primary/20 rounded-sm rotate-12 group-hover:rotate-45 transition-all duration-500 hidden lg:block"></div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Business Process Reform"
                    : "ビジネスプロセス改革"}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {language === "en"
                    ? "Automate and optimize business processes with digital tools like AI and RPA to enhance operational efficiency and reduce costs."
                    : "AIやRPAなどのデジタルツールを活用して業務プロセスを自動化・最適化し、運用効率を高めコスト削減を実現します。"}
                </p>
              
              </motion.div>
            </div>
          </div>

          {/* 底部装饰元素 */}
          <div className="flex items-center justify-center mt-16">
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
            <div className="w-8 h-px bg-primary/20 mx-2"></div>
            <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
            <div className="w-8 h-px bg-primary/20 mx-2"></div>
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 行业专长部分 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-20 pt-20 border-t border-gray-100"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {language === "en" ? "INDUSTRY EXPERTISE" : "業界専門知識"}
          </span>
          <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
            {language === "en"
              ? "Our Industry Focus"
              : "私たちの業界フォーカス"}
          </h3>
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-primary/30"></div>
            <div className="w-2 h-2 bg-primary/60 mx-3 rotate-45"></div>
            <div className="w-12 h-px bg-primary/30"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {language === "en"
              ? "Specialized knowledge and proven methodologies across diverse industries to help you navigate sector-specific challenges."
              : "多様な業界にわたる専門知識と実証済みの方法論で、業種固有の課題解決をサポートします。"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 制造业 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all group"
          >
            <div className="mb-5 flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extralight text-gray-200 group-hover:text-primary/20 transition-colors">
                01
              </span>
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {language === "en" ? "Manufacturing" : "製造業"}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {language === "en"
                ? "Specializing in lean manufacturing, supply chain optimization, quality management, and digital factory transformation."
                : "リーン生産方式、サプライチェーン最適化、品質管理、デジタル工場変革に特化したサービスを提供しています。"}
            </p>
           
          </motion.div>

          {/* 金融服务 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all group"
          >
            <div className="mb-5 flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extralight text-gray-200 group-hover:text-primary/20 transition-colors">
                02
              </span>
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {language === "en" ? "Financial Services" : "金融サービス"}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {language === "en"
                ? "Risk management, regulatory compliance, digital banking strategies, and operational efficiency solutions for financial institutions."
                : "金融機関向けのリスク管理、規制コンプライアンス、デジタルバンキング戦略、業務効率化ソリューションを提供しています。"}
            </p>
           
          </motion.div>

          {/* 医疗健康 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all group"
          >
            <div className="mb-5 flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extralight text-gray-200 group-hover:text-primary/20 transition-colors">
                03
              </span>
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {language === "en" ? "Healthcare" : "医療・ヘルスケア"}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {language === "en"
                ? "Patient experience enhancement, healthcare process optimization, telehealth implementation, and healthcare supply chain management."
                : "患者体験の向上、医療プロセスの最適化、遠隔医療の導入、医療サプライチェーン管理に関するソリューションを提供しています。"}
            </p>
            {/* <div className="border-t border-gray-100 pt-4 mt-auto">
              <span className="text-primary text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                {language === 'en' ? 'Explore Solutions' : 'ソリューションを探る'} 
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </div> */}
          </motion.div>
          {/* 零售与消费品 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all group"
          >
            <div className="mb-5 flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extralight text-gray-200 group-hover:text-primary/20 transition-colors">
                04
              </span>
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {language === "en" ? "Retail & Consumer Goods" : "小売・消費財"}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {language === "en"
                ? "Omnichannel strategy, customer journey optimization, inventory management, and retail digital transformation solutions."
                : "オムニチャネル戦略、顧客体験の最適化、在庫管理、小売デジタル変革ソリューションを提供しています。"}
            </p>
           
          </motion.div>

          {/* 科技与媒体 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all group"
          >
            <div className="mb-5 flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extralight text-gray-200 group-hover:text-primary/20 transition-colors">
                05
              </span>
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {language === "en"
                ? "Technology & Media"
                : "テクノロジー・メディア"}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {language === "en"
                ? "Innovation management, product development strategies, digital content distribution, and technology monetization models."
                : "イノベーション管理、製品開発戦略、デジタルコンテンツ配信、テクノロジー収益化モデルに関するソリューションを提供しています。"}
            </p>
           
          </motion.div>

          {/* 能源与公共事业 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-white border border-gray-100 rounded-sm hover:shadow-md transition-all group"
          >
            <div className="mb-5 flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-3xl font-extralight text-gray-200 group-hover:text-primary/20 transition-colors">
                06
              </span>
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {language === "en"
                ? "Energy & Utilities"
                : "エネルギー・公共事業"}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {language === "en"
                ? "Sustainable energy solutions, smart grid technology implementation, utility operational efficiency, and renewable energy integration."
                : "持続可能なエネルギーソリューション、スマートグリッド技術の導入、公共事業の運用効率化、再生可能エネルギーの統合に関するソリューションを提供しています。"}
            </p>
           
          </motion.div>
          {/* 行业卡片部分将在此添加 */}
        </div>
      </motion.div>

      {/* 客户案例和成果展示部分 - 新增 */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent opacity-70 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent opacity-70"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* 标题部分 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-3">
              {language === "en" ? "SUCCESS STORIES" : "成功事例"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en"
                ? "Transforming Businesses Together"
                : "ともにビジネスを変革する"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "See how our consulting services have helped organizations achieve remarkable results"
                : "当社のコンサルティングサービスが組織の顕著な結果達成にどのように貢献したかをご覧ください"}
            </p>
          </div>

          {/* 成果数据统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-50 p-8 rounded-sm text-center relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  92%
                </div>
                <p className="text-gray-600">
                  {language === "en"
                    ? "Client Satisfaction Rate"
                    : "クライアント満足度"}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm text-center relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <span className="text-primary font-bold">200+</span>
                </div>
                <p className="text-gray-600">
                  {language === "en"
                    ? "Projects Completed"
                    : "完了したプロジェクト"}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm text-center relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  30%
                </div>
                <p className="text-gray-600">
                  {language === "en"
                    ? "Average Revenue Growth"
                    : "平均収益増加率"}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-sm text-center relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <span className="text-primary font-bold">5+</span>
                </div>
                <p className="text-gray-600">
                  {language === "en" ? "Years Experience" : "年の経験"}
                </p>
              </div>
            </div>
          </div>

          {/* 客户案例卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 案例1 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
                  alt="Manufacturing Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-sm">
                      {language === "en" ? "Manufacturing" : "製造業"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Supply Chain Optimization"
                    : "サプライチェーン最適化"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "en"
                    ? "Helped a leading electronics manufacturer reduce operational costs by 22% through lean supply chain transformation."
                    : "大手電子機器メーカーのサプライチェーン改革により、運用コストを22%削減することに貢献しました。"}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {language === "en"
                      ? "Results: 22% cost reduction"
                      : "結果: コスト22%削減"}
                  </span>
                </div>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2069&auto=format&fit=crop"
                  alt="Digital Transformation Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-sm">
                      {language === "en"
                        ? "Financial Services"
                        : "金融サービス"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Digital Transformation"
                    : "デジタルトランスフォーメーション"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "en"
                    ? "Guided a financial institution through comprehensive digital transformation, resulting in 35% increased customer engagement."
                    : "金融機関の包括的なデジタル変革を支援し、顧客エンゲージメントが35%向上しました。"}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {language === "en"
                      ? "Results: 35% higher engagement"
                      : "結果: エンゲージメント35%向上"}
                  </span>
                </div>
              </div>
            </div>

            {/* 案例3 */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=2076&auto=format&fit=crop"
                  alt="Retail Strategy Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-sm">
                      {language === "en" ? "Retail" : "小売業"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {language === "en"
                    ? "Market Expansion Strategy"
                    : "市場拡大戦略"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "en"
                    ? "Developed expansion strategy for a retail chain entering Southeast Asian markets, achieving 40% growth in first year."
                    : "東南アジア市場に参入する小売チェーンの拡大戦略を策定し、初年度に40%の成長を達成しました。"}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {language === "en"
                      ? "Results: 40% first-year growth"
                      : "結果: 初年度40%成長"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section - 现代化日式风格 */}
      <section id="consulting" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* 标题部分 */}
          <div className="text-center mb-16 relative">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-3">
              {language === "en"
                ? "CONSULTING APPROACH"
                : "コンサルティングアプローチ"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en"
                ? "An Integrated Approach"
                : "統合的なアプローチ"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              {language === "en"
                ? "We provide comprehensive support for all business challenges, combining Japanese methodology with global best practices."
                : "すべてのビジネス課題に対して、日本の方法論とグローバルなベストプラクティスを組み合わせた包括的なサポートを提供します。"}
            </p>
            <div className="w-16 h-1 bg-primary/20 mx-auto"></div>
          </div>

          {/* 咨询方法论部分 - 图文结合 */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左侧图片 */}
              <div className="relative">
                {/* 装饰元素 */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 z-10 hidden lg:block"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 z-10 hidden lg:block"></div>

                <div className="overflow-hidden rounded-sm shadow-lg relative z-1">
                  <Image
                    src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069&auto=format&fit=crop"
                    alt="Consulting Approach"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* 右侧内容 */}
              <div>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
                  {language === "en"
                    ? "Our Consulting Methodology"
                    : "当社のコンサルティング方法論"}
                </h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                      01
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Analysis & Discovery"
                          : "分析と発見"}
                      </h4>
                      <p className="text-gray-600">
                        {language === "en"
                          ? "We begin with a comprehensive assessment of your current business situation, challenges, and opportunities."
                          : "現在のビジネス状況、課題、機会の包括的な評価から始めます。"}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                      02
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Strategy Development"
                          : "戦略開発"}
                      </h4>
                      <p className="text-gray-600">
                        {language === "en"
                          ? "We create tailored solutions and strategies based on data-driven insights and industry best practices."
                          : "データ駆動の洞察と業界のベストプラクティスに基づいて、カスタマイズされたソリューションと戦略を作成します。"}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                      03
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Implementation Support"
                          : "実装サポート"}
                      </h4>
                      <p className="text-gray-600">
                        {language === "en"
                          ? "We work alongside your team to implement solutions, providing training and guidance throughout the process."
                          : "チームと協力してソリューションを実装し、プロセス全体を通じてトレーニングとガイダンスを提供します。"}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                      04
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Continuous Improvement"
                          : "継続的改善"}
                      </h4>
                      <p className="text-gray-600">
                        {language === "en"
                          ? "We establish frameworks for ongoing evaluation and refinement to ensure sustainable long-term success."
                          : "持続可能な長期的成功を確保するために、継続的な評価と改善のためのフレームワークを確立します。"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InnerWrapper() {
  // 这个组件会安全地使用 useSearchParams（通过 useLanguage hook）
  return <ServicesPageContent />;
}

function SearchParamsWrapperWithContent() {
  return (
    <Suspense fallback={<div>Loading params...</div>}>
      <InnerWrapper />
    </Suspense>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchParamsWrapperWithContent />
    </Suspense>
  );
}
