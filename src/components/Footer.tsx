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
      companyAddress: '123 Business Avenue, Tokyo, Japan',
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
      companyAddress: '東京都ビジネス通り123番地',
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
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
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
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">+81 3-1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">info@kmri.com</span>
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

        {/* Newsletter subscription */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">{t.newsletter}</h3>
            <p className="text-gray-400 mb-4 text-sm">{t.newsletterDescription}</p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all"
              >
                {t.subscribeButton}
              </button>
            </form>
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
