"use client";

import Link from 'next/link';
import { Suspense, ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-primary mb-8">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="fillBtn">
        Return to Homepage
      </Link>
    </div>
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
  // 这里可以使用 searchParams，但我们不需要
  
  return <NotFoundContent />;
}

function SearchParamsWrapperWithContent() {
  return (
    <Suspense fallback={<div>Loading params...</div>}>
      <InnerWrapper />
    </Suspense>
  );
}

export default function NotFoundClient() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchParamsWrapperWithContent />
    </Suspense>
  );
}
