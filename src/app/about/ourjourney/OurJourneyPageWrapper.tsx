"use client";

import React, { Suspense, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// SearchParamsWrapper 用于安全地使用 useSearchParams
function SearchParamsWrapper() {
  const searchParams = useSearchParams();
  return { searchParams };
}

interface ClientProps {
  children?: ReactNode;
}

function OurJourneyPageContent() {
  return (
    <>
      <div className="crumbsWrap bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <ul className="crumbs flex text-sm">
            <li className="after:content-['>'] after:mx-2"><Link href="/">Top</Link></li>
            <li className="after:content-['>'] after:mx-2"><Link href="/about/">About Kazami</Link></li>
            <li>Our Journey</li>
          </ul>
        </div>
      </div>

      <div className="bigHeader h-[300px] flex items-center bg-[url('https://ext.same-assets.com/888824625/3860481784.jpeg')] bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:bg-black/40">
        <div className="bigHeaderInner relative z-10 container mx-auto px-4 text-white">
          <h1 className="bigHeader_heading text-4xl font-bold mb-4 text-white">Our Journey</h1>
          <div className="bigHeaer_lead">
            <p className="text-xl">The history of Kazami's evolution since 1942</p>
          </div>
        </div>
      </div>

      <section className="smallSection sectionStyle py-12">
        <div className="section_inner max-w-4xl mx-auto px-4">
          <h2 className="secHeadingLv2 text-2xl font-bold text-primary mb-6">Our History</h2>

          <div className="timeline space-y-12">
            <div className="timeline-item flex flex-col md:flex-row gap-8">
              <div className="timeline-year w-full md:w-1/4">
                <h3 className="text-4xl font-bold text-secondary">1942</h3>
              </div>
              <div className="timeline-content w-full md:w-3/4">
                <h4 className="text-xl font-bold text-primary mb-2">Foundation</h4>
                <p className="mb-4">JMA (Japan Management Association) was established as a governmental organization to improve the productivity of Japanese industry to sustain the war effort.</p>
                <div className="bg-gray-100 p-6 rounded">
                  <p className="italic text-gray-600">
                    "The foundation of JMA was a milestone in Japan's industrial history, setting the groundwork for the management consulting profession in the country."
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item flex flex-col md:flex-row gap-8">
              <div className="timeline-year w-full md:w-1/4">
                <h3 className="text-4xl font-bold text-secondary">1950s</h3>
              </div>
              <div className="timeline-content w-full md:w-3/4">
                <h4 className="text-xl font-bold text-primary mb-2">Introduction of PM (Productive Maintenance)</h4>
                <p className="mb-4">JMA Consulting Division (Predecessor of Kazami) introduced PM to Japanese companies in 1951. Initially it was referred to as "Preventive Maintenance," then the interpretation was changed to "Productive Maintenance."</p>
                <p>This period marked the beginning of Japan's industrial renaissance, as the country began to recover and rebuild after World War II.</p>
              </div>
            </div>

            <div className="timeline-item flex flex-col md:flex-row gap-8">
              <div className="timeline-year w-full md:w-1/4">
                <h3 className="text-4xl font-bold text-secondary">1960s-70s</h3>
              </div>
              <div className="timeline-content w-full md:w-3/4">
                <h4 className="text-xl font-bold text-primary mb-2">Contributions to TPS and TPM</h4>
                <p className="mb-4">Our legendary consultant Shigeo Shingo worked with Toyota Motor Corporation and developed SMED (Single Minute Exchange of Die), one of the important methods of TPS (Toyota Production System).</p>
                <p className="mb-4">Japan Institute of Plant Maintenance (JIPM) was split from Japan Management Association in 1969 and promoted Total Productive Maintenance (TPM), which is now one of the most important management methodologies in manufacturing industry.</p>
              </div>
            </div>

            <div className="timeline-item flex flex-col md:flex-row gap-8">
              <div className="timeline-year w-full md:w-1/4">
                <h3 className="text-4xl font-bold text-secondary">1980s</h3>
              </div>
              <div className="timeline-content w-full md:w-3/4">
                <h4 className="text-xl font-bold text-primary mb-2">Establishment of Kazami</h4>
                <p className="mb-4">The consulting division of JMA was separated to form JMA Consultants Inc. (Kazami).</p>
                <p>This separation allowed Kazami to focus entirely on developing and delivering world-class consulting services, building on the foundation established within JMA.</p>
              </div>
            </div>

            <div className="timeline-item flex flex-col md:flex-row gap-8">
              <div className="timeline-year w-full md:w-1/4">
                <h3 className="text-4xl font-bold text-secondary">1990s-2000s</h3>
              </div>
              <div className="timeline-content w-full md:w-3/4">
                <h4 className="text-xl font-bold text-primary mb-2">Global Expansion</h4>
                <p className="mb-4">Kazami expanded its reach globally, establishing subsidiaries in China, Thailand, South Korea, and Europe.</p>
                <p>This global expansion allowed Kazami to bring Japanese management principles and methodologies to companies around the world, while adapting them to local cultures and business environments.</p>
              </div>
            </div>

            <div className="timeline-item flex flex-col md:flex-row gap-8">
              <div className="timeline-year w-full md:w-1/4">
                <h3 className="text-4xl font-bold text-secondary">Present</h3>
              </div>
              <div className="timeline-content w-full md:w-3/4">
                <h4 className="text-xl font-bold text-primary mb-2">Continuing Innovation</h4>
                <p className="mb-4">Today, Kazami continues to innovate in management consulting, combining traditional Japanese management principles with modern technologies and methodologies.</p>
                <p>With over 400 consultants globally and projects in more than 58 countries, Kazami remains at the forefront of management consulting, helping companies achieve operational excellence and sustainable growth.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="smallSection sectionStyle py-12 bg-gray-50">
        <div className="section_inner max-w-4xl mx-auto px-4 text-center">
          <h2 className="secHeadingLv2 text-2xl font-bold text-primary mb-6">Our Legacy</h2>
          <p className="mb-8">Kazami's journey spans over eight decades, during which we have contributed significantly to the development of management methodologies that have transformed businesses worldwide. Our consultants have worked with leading companies across various industries, helping them achieve operational excellence and sustainable growth.</p>
          <div className="stats grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="stat p-4">
              <div className="text-5xl font-bold text-secondary">75+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
            <div className="stat p-4">
              <div className="text-5xl font-bold text-secondary">400+</div>
              <div className="text-sm">Consultants Worldwide</div>
            </div>
            <div className="stat p-4">
              <div className="text-5xl font-bold text-secondary">2750+</div>
              <div className="text-sm">Projects Each Year</div>
            </div>
            <div className="stat p-4">
              <div className="text-5xl font-bold text-secondary">58+</div>
              <div className="text-sm">Countries</div>
            </div>
          </div>
          <Link href="/about/" className="fillBtn">Learn More About Kazami</Link>
        </div>
      </section>
    </>
  );
}

function InnerWrapper() {
  // 在这个组件中安全地使用 useSearchParams
  const { searchParams } = SearchParamsWrapper();
  // 这里可以使用 searchParams，但我们并不需要
  
  return <OurJourneyPageContent />;
}

function SearchParamsWrapperWithContent() {
  return (
    <Suspense fallback={<div>Loading params...</div>}>
      <InnerWrapper />
    </Suspense>
  );
}

export default function OurJourneyPageWrapper() {
  return (
    <Suspense fallback={<div>Loading page data...</div>}>
      <SearchParamsWrapperWithContent />
    </Suspense>
  );
}
