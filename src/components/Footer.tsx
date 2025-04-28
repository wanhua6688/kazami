"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../lib/language-context';
import { useSearchParams } from 'next/navigation';

const Footer = () => {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  // 创建带语言参数的链接
  const getLocalizedHref = (path: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', language);
    return `${path}?${params.toString()}`;
  };

  // 翻译内容
  const translations = {
    en: {
      about: 'About Us',
      services: 'Services',
      cases: 'Case Studies',
      contact: 'Contact Us',
      join: 'Join Us',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      sitemap: 'Sitemap',
      copyright: 'Copyright 2025 Kazami Management Research Institute. All Rights Reserved.',
      companyAddress: 'Shiba 3-chome, minato ward, Tokyo',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      reachUs: 'Reach Us',
      newsletter: 'Subscribe to our newsletter',
      newsletterDescription: 'Get the latest updates and insights delivered straight to your inbox.',
      subscribeButton: 'Subscribe',
      emailPlaceholder: 'Your email address'
    },
    ja: {
      about: '会社について',
      services: 'サービス',
      cases: '事例研究',
      contact: 'お問い合わせ',
      join: '採用情報',
      legal: '法的事項',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      sitemap: 'サイトマップ',
      copyright: ' 2025 風見経営研究所. All Rights Reserved.',
      companyAddress: 'とうきょうと みなとく しば さんちょうめ',
      callUs: 'お電話',
      emailUs: 'メール',
      followUs: 'フォロー',
      quickLinks: 'クイックリンク',
      resources: 'リソース',
      reachUs: 'お問い合わせ',
      newsletter: 'ニュースレターにご登録ください',
      newsletterDescription: '最新の情報とインサイトをメールでお届けします。',
      subscribeButton: '登録',
      emailPlaceholder: 'メールアドレス'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Top section with company info and links */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <Link href={getLocalizedHref('/')} className="inline-block">
                {/* <Image 
                  src="/logo-white.png" 
                  alt="Kazami Management Research Institute" 
                  width={180} 
                  height={50} 
                  className="h-10 w-auto"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/";
                  }}
                /> */}
              </Link>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {t.companyAddress}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href={getLocalizedHref('/about')} className="text-gray-400 hover:text-white transition-colors">{t.about}</Link></li>
              <li><Link href={getLocalizedHref('/services')} className="text-gray-400 hover:text-white transition-colors">{t.services}</Link></li>
              <li><Link href={getLocalizedHref('/case')} className="text-gray-400 hover:text-white transition-colors">{t.cases}</Link></li>
              <li><Link href={getLocalizedHref('/join')} className="text-gray-400 hover:text-white transition-colors">{t.join}</Link></li>
            </ul>
          </div>

        
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.reachUs}</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">+81 3-1234-5678</span>
              </li> */}
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">hr@kazamimri.com</span>
              </li>
              <li className="mt-6">
                <Link 
                  href={getLocalizedHref('/contact')}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800 mt-8 pt-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            <small>{t.copyright}</small>
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Link
        href="#top"
        className="scrollToTop fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary/80 text-white flex items-center justify-center hover:bg-primary transition-colors shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;
