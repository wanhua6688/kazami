"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../lib/language-context';
import { useSearchParams } from 'next/navigation';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // 创建带语言参数的链接
  const getLocalizedHref = (path: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', language);
    return `${path}?${params.toString()}`;
  };

  // 翻译内容
  const translations = {
    en: {
      news: 'News',
      about: 'About Us',
      journey: 'Our Journey',
      services: 'Services',
      cases: 'Case Studies',
      locations: 'Locations',
      contact: 'Contact Us',
      join: 'Join Us',
      legal: 'Legal'
    },
    ja: {
      news: 'ニュース',
      about: '会社について',
      journey: '私たちの歩み',
      services: 'サービス',
      cases: '事例研究',
      locations: '拠点一覧',
      contact: 'お問い合わせ',
      join: '採用情報',
      legal: '法的事項'
    }
  };

  const t = translations[language];

  return (
    <header className={`header ${isScrolled ? 'shadow' : ''}`} id="header">
      <div className="header_inner max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="logo">
          <Link href={getLocalizedHref('/')}>
            <Image
              src="/logo.png"
              alt="Kazami Management Research Institute"
              width={130}
              height={32}
              priority
            />
          </Link>
        </h1>

        <div className="flex items-center">
          <LanguageSwitcher className="mr-6 hidden md:flex" />
          <nav className={`gNaviWrapper ${isNavOpen ? 'is-open' : ''}`} id="gNaviWrapper">
            <ul className="gNavi hidden md:flex space-x-6">
              <li><Link href={getLocalizedHref('/about')}>{t.about}</Link></li>
              <li><Link href={getLocalizedHref('/services')}>{t.services}</Link></li>
              <li><Link href={getLocalizedHref('/case')}>{t.cases}</Link></li>
              <li><Link href={getLocalizedHref('/contact')}>{t.contact}</Link></li>
              <li><Link href={getLocalizedHref('/join')}>{t.join}</Link></li>
            </ul>
          </nav>

          <button
            className="gNaviButton md:hidden flex flex-col justify-center items-center w-8 h-8"
            id="gNaviButton"
            onClick={toggleNav}
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isNavOpen ? 'transform rotate-45 translate-y-1' : 'mb-1.5'}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isNavOpen ? 'opacity-0' : 'mb-1.5'}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${isNavOpen ? 'transform -rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="mobile-nav md:hidden bg-white w-full shadow-lg">
          <div className="px-4 py-2 border-b">
            <LanguageSwitcher />
          </div>
          <ul className="flex flex-col px-4 py-2">
            <li className="py-2 border-b"><Link href={getLocalizedHref('/about')} onClick={() => setIsNavOpen(false)}>{t.about}</Link></li>
            <li className="py-2 border-b"><Link href={getLocalizedHref('/services')} onClick={() => setIsNavOpen(false)}>{t.services}</Link></li>
            <li className="py-2 border-b"><Link href={getLocalizedHref('/case')} onClick={() => setIsNavOpen(false)}>{t.cases}</Link></li>
            <li className="py-2 border-b"><Link href={getLocalizedHref('/contact')} onClick={() => setIsNavOpen(false)}>{t.contact}</Link></li>
            <li className="py-2 border-b"><Link href={getLocalizedHref('/join')} onClick={() => setIsNavOpen(false)}>{t.join}</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
