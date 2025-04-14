import { Suspense } from 'react';
import OurJourneyClient from './OurJourneyClient';
import OurJourneyPageWrapper from './OurJourneyPageWrapper';

// 服务器组件
export default function OurJourneyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <OurJourneyClient>
        <OurJourneyPageWrapper />
      </OurJourneyClient>
    </Suspense>
  );
}

export const metadata = {
  title: 'Our Journey | Kazami Global',
  description: 'Learn about Kazami\'s journey as Japan\'s oldest management consulting firm, founded in 1942.',
};
