"use client";

import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function NotFoundContent() {
  const searchParams = useSearchParams();
  
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

export default function NotFoundClient() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
