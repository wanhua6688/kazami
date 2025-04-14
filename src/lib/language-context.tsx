"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// SearchParamsWrapper 用于安全地使用 useSearchParams
function SearchParamsWrapper() {
  const searchParams = useSearchParams();
  return { searchParams };
}

// 内部包装组件，用于使用 SearchParams
const InnerLanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { searchParams } = SearchParamsWrapper();
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 从 URL 查询参数中检测语言
    const langParam = searchParams.get('lang');
    if (langParam === 'en' || langParam === 'ja') {
      setLanguage(langParam as Language);
    }
  }, [searchParams]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 提供带有 Suspense 边界的包装器
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading language settings...</div>}>
      <InnerLanguageProvider>{children}</InnerLanguageProvider>
    </Suspense>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
