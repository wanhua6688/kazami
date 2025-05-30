import { Suspense } from 'react';
import NotFoundClient from './NotFoundClient';

export default function NotFound() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <NotFoundClient />
    </Suspense>
  );
}
