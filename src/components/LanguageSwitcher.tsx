"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { useLanguage } from '../lib/language-context';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { language, setLanguage } = useLanguage();

  const switchLanguage = (lang: 'en' | 'ja') => {
    if (lang === language) return;
    
    // 创建新的URL查询参数
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', lang);
    
    // 构建新路径
    const newPath = `${pathname}?${params.toString()}`;
    
    // 更新语言上下文
    setLanguage(lang);
    
    // 导航到新路径
    router.push(newPath);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button 
        variant={language === 'en' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => switchLanguage('en')}
        className="text-xs"
      >
        English
      </Button>
      <Button 
        variant={language === 'ja' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => switchLanguage('ja')}
        className="text-xs"
      >
        日本語
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
