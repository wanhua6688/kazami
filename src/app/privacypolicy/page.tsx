import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Kazami Global',
  description: 'Kazami Global Website Privacy Policy and Cookie Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="crumbsWrap bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <ul className="crumbs flex text-sm">
            <li className="after:content-['>'] after:mx-2"><Link href="/">Top</Link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit https://global.Kazami.co.jp (the "Site").</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">PERSONAL INFORMATION WE COLLECT</h2>

          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."</p>

          <p>We collect Device Information using the following technologies:</p>

          <ul className="list-disc pl-6 my-4">
            <li>"Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.allaboutcookies.org</a>.</li>
            <li>"Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
            <li>"Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.</li>
          </ul>

          <p>Additionally when you submit a contact form or make a purchase through the Site, we collect certain information from you, including your name, email address, phone number, and company information. We refer to this information as "Contact Information."</p>

          <p>When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Contact Information.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>

          <p>We use the Contact Information that we collect generally to communicate with you when you've filled out a contact form. We use the Device Information that we collect to help us screen for potential risk and fraud, and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site).</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">SHARING YOUR PERSONAL INFORMATION</h2>

          <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>.</p>

          <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">YOUR RIGHTS</h2>

          <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

          <p>Additionally, if you are a European resident we note that we are processing your information in order to communicate with you when you've contacted us, or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Japan and the United States.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">DATA RETENTION</h2>

          <p>When you submit a contact form through the Site, we will maintain your Contact Information for our records unless and until you ask us to delete this information.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">CHANGES</h2>

          <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">CONTACT US</h2>

          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail or by mail using the details provided below:</p>

          <p className="mt-4">
            JMA Consultants Inc.<br />
            Shinjuku Nomura Bldg. 32F, 1-26-2 Nishi-Shinjuku, Shinjuku-ku, Tokyo, 163-0532, Japan<br />
            Email: <a href="mailto:info@Kazami.co.jp" className="text-primary hover:underline">info@Kazami.co.jp</a>
          </p>
        </div>
      </div>
    </>
  );
}
