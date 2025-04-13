"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  // Handle cookie consent
  useEffect(() => {
    const cookieConsent = localStorage.getItem('Kazami-cookie-consent');
    if (cookieConsent) {
      setAcceptedCookies(true);
    } else {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('Kazami-cookie-consent', 'accepted');
    setAcceptedCookies(true);
  };

  // This runs only on the client after hydration
  useEffect(() => {
    document.body.id = "top";
    document.body.className = "";
  }, []);

  return (
    <body id="top" suppressHydrationWarning>
      {children}

      {/* GDPR Cookie Consent */}
      {!acceptedCookies && (
        <div className="gdprPopup fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
          <div className="gdprPopup_inner container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="gdprPopup_policy text-sm md:text-base">
              This website stores cookies on your computer. These cookies are used to improve our website and provide more personalized services to you. To find out more about the cookies we use, See our <a href="/privacypolicy/" target="_blank" className="text-primary underline" rel="noreferrer">PRIVACY POLICY</a>
            </p>
            <button
              className="gdprPopup_button bg-secondary text-white font-semibold px-6 py-2 rounded whitespace-nowrap"
              onClick={acceptCookies}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </body>
  );
}
