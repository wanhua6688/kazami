"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';

export default function LegalPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const basePath = language === 'ja' ? '/ja' : '';
  
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] mb-12">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt="Legal Information"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            {language === 'en' ? 'Legal Information' : '法的情報'}
          </h1>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.legal.privacy.title}</h2>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-6">{t.legal.privacy.statement}</p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'en' ? 'Information We Collect' : '収集する情報'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {language === 'en' 
                    ? 'We may collect personal information such as your name, email address, and phone number when you contact us through our website or sign up for our newsletters. We also collect anonymous usage data to improve our website and services.'
                    : '当社のウェブサイトを通じてお問い合わせいただいたり、ニュースレターに登録したりする際に、お名前、メールアドレス、電話番号などの個人情報を収集する場合があります。また、ウェブサイトやサービスを改善するために、匿名の使用データも収集しています。'}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'en' ? 'How We Use Your Information' : '情報の使用方法'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'We use your information to provide and improve our services, to communicate with you, and to fulfill our contractual obligations. We do not sell or rent your personal information to third parties.'
                    : '当社は、サービスの提供と改善、お客様とのコミュニケーション、契約上の義務の履行のために、お客様の情報を使用します。当社は、お客様の個人情報を第三者に販売したり貸したりすることはありません。'}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'en' ? 'Data Security' : 'データセキュリティ'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security measures include encryption, secure servers, and regular security audits.'
                    : '当社は、お客様の個人情報が不正アクセス、改ざん、開示、または破壊されないよう、適切な措置を講じています。当社のセキュリティ対策には、暗号化、安全なサーバー、定期的なセキュリティ監査が含まれます。'}
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">{t.legal.terms.title}</h2>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-6">{t.legal.terms.statement}</p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'en' ? 'Website Usage' : 'ウェブサイトの使用'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'This website is provided for informational purposes only. By using this website, you agree not to misuse it in any way that could damage, disable, or impair our services.'
                    : 'このウェブサイトは情報提供のみを目的として提供されています。このウェブサイトを使用することにより、当社のサービスを損傷、無効化、または阻害するような方法で悪用しないことに同意するものとします。'}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'en' ? 'Intellectual Property' : '知的財産'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {language === 'en'
                    ? 'All content on this website, including text, graphics, logos, and images, is the property of Kazami Management Research Institute and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our explicit permission.'
                    : 'テキスト、グラフィック、ロゴ、画像を含む、このウェブサイト上のすべてのコンテンツは風見経営研究所の財産であり、著作権法によって保護されています。当社の明示的な許可なく、複製、配布、または派生物を作成することはできません。'}
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {language === 'en' ? 'Limitation of Liability' : '責任の制限'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Kazami Management Research Institute shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of this website or our services.'
                    : '風見経営研究所は、このウェブサイトまたは当社のサービスの使用に起因する、または何らかの形で関連する直接的、間接的、偶発的、結果的、または特別な損害について責任を負わないものとします。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            {language === 'en' ? 'Have Questions?' : 'ご質問がありますか？'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'If you have any questions about our privacy policy or terms of use, please contact us.' 
              : 'プライバシーポリシーや利用規約についてご質問がある場合は、お問い合わせください。'}
          </p>
          <Link 
            href={`${basePath}/contact`} 
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors"
          >
            {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
          </Link>
        </div>
      </section>
    </div>
  );
}
