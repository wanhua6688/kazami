"use client";

import { useState, useEffect, Suspense, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

function HomePageContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const basePath = language === 'ja' ? '/ja' : '';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Modern Hero Section with Slider */}
      <div className="relative h-screen max-h-[800px] overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
                alt="Kazami Management Research Institute"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
                alt="Kazami Management Research Institute"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                alt="Kazami Management Research Institute"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute inset-0 flex flex-col justify-center z-10 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
                {language === 'en' ? 'Innovate. Transform. Succeed.' : 'イノベーション。変革。成功。'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
                {language === 'en' 
                  ? 'Strategic consulting for business growth and innovation' 
                  : 'ビジネスの成長とイノベーションのための戦略コンサルティング'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={`${basePath}/about`} className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-semibold transition-all">
                  {language === 'en' ? 'Learn More' : '詳細を見る'}
                </Link>
                <Link href={`${basePath}/contact`} className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-md font-semibold transition-all">
                  {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Company Introduction Section - Modern Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 clip-path-diagonal z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            {/* 左侧图片区域 */}
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className="relative">
                {/* 装饰性背景 */}
                <div className="bg-primary/10 absolute -left-6 -top-6 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="bg-blue-300/10 absolute -right-4 -bottom-8 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="bg-pink-300/10 absolute left-20 bottom-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                {/* 日式装饰元素 */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary/30 z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary/30 z-10"></div>
                
                {/* 主图 */}
                <div className="relative z-1 overflow-hidden shadow-2xl">
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
                      alt="Kazami Team"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                  {/* 装饰横条 */}
                  <div className="absolute -left-1 top-1/3 w-3 h-16 bg-primary"></div>
                </div>
                
                {/* 额外的小图 */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg overflow-hidden border-4 border-white hidden md:block">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62baf72?q=80&w=1970&auto=format&fit=crop"
                    alt="Kazami Office"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* 右侧内容区域 */}
            <div className="w-full md:w-1/2">
              {/* 标签 */}
              <div className="p-1 inline-block rounded-full bg-gradient-to-r from-primary to-blue-500 mb-6">
                <div className="bg-white p-1 rounded-full">
                  <div className="bg-gradient-to-r from-primary to-blue-500 rounded-full text-white text-xs px-4 py-1">
                    {language === 'en' ? 'ABOUT US' : '会社概要'}
                  </div>
                </div>
              </div>
              
              {/* 标题 */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-gray-900">
                {language === 'en' ? 'Our Story' : '私たちの物語'}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                {/* 主要内容 */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t.home.companyIntro}
                </p>
                
                {/* 关键数据统计 */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-gray-600">{language === 'en' ? 'Years Experience' : '年の経験'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-gray-600">{language === 'en' ? 'Projects Completed' : '完了したプロジェクト'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-gray-600">{language === 'en' ? 'Expert Consultants' : '専門コンサルタント'}</div>
                  </div>
                </div>
                
                {/* 补充说明文字 */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  {language === 'en' 
                    ? 'We combine traditional Japanese business philosophies with modern global practices to deliver exceptional results for our clients across various industries.'
                    : '伝統的な日本のビジネス哲学と現代のグローバルなプラクティスを組み合わせ、さまざまな業界のクライアントに卓越した結果を提供します。'}
                </p>
                
                {/* 引用语 */}
                <div className="border-l-4 border-primary pl-4 italic text-gray-600 mb-8">
                  {language === 'en'
                    ? '"Our mission is to contribute to the sustainable growth of businesses through innovative management consulting."'
                    : '「私たちの使命は、革新的な経営コンサルティングを通じて、企業の持続的な成長に貢献することです。」'}
                </div>
                
                {/* 链接按钮 */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={`${basePath}/about`}
                    className="text-primary font-semibold inline-flex items-center group"
                  >
                    {language === 'en' ? 'Learn more about us' : '詳細はこちら'} 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href={`${basePath}/services`}
                    className="text-gray-500 hover:text-primary font-semibold inline-flex items-center group"
                  >
                    {language === 'en' ? 'Our services' : 'サービス紹介'} 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              {language === 'en' ? 'OUR PRINCIPLES' : '私たちの原則'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.home.coreValues.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.coreValues.values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Modern Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              {language === 'en' ? 'EXPERTISE' : '専門知識'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.home.industries.title}</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-4 text-primary group-hover:text-white">
                  <svg className="w-8 h-8 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
                <p className="font-medium">{language === 'en' ? 'Fast-moving Consumer Goods' : '日用消費財'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-medium">{language === 'en' ? 'Financial Services' : '金融サービス'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="font-medium">{language === 'en' ? 'Retail & Distribution' : '小売・流通'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="font-medium">{language === 'en' ? 'Manufacturing' : '製造業'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="font-medium">{language === 'en' ? 'Public Sector' : '公共部門'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-medium">{language === 'en' ? 'High-Tech Industries' : 'ハイテク産業'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{language === 'en' ? 'Ready to work with us?' : 'ご相談をお待ちしております'}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Contact us today to learn how we can help your business grow and succeed.' 
              : '今日お問い合わせいただき、ビジネスの成長と成功をサポートする方法についてご相談ください。'}
          </p>
          <Link 
            href={`${basePath}/contact`}
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
          >
            {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </Link>
        </div>
      </section>
    </>
  );
}

// SearchParamsWrapper 用于安全地使用 useSearchParams
function SearchParamsWrapper() {
  const searchParams = useSearchParams();
  return { searchParams };
}

interface ClientProps {
  children?: ReactNode;
}

function InnerWrapper() {
  // 在这个组件中安全地使用 useSearchParams
  const { searchParams } = SearchParamsWrapper();
  // 这里可以使用 searchParams，但不需要
  
  return <HomePageContent />;
}

function SearchParamsWrapperWithContent() {
  return (
    <Suspense fallback={<div>Loading params...</div>}>
      <InnerWrapper />
    </Suspense>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchParamsWrapperWithContent />
    </Suspense>
  );
}
