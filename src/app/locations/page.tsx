import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Locations | Kazami Global',
  description: 'Kazami has global offices in Thailand, China, Korea, and Europe, providing management consulting services worldwide.',
};

export default function LocationsPage() {
  return (
    <>
      <div className="crumbsWrap bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <ul className="crumbs flex text-sm">
            <li className="after:content-['>'] after:mx-2"><Link href="/">Top</Link></li>
            <li>Locations</li>
          </ul>
        </div>
      </div>

      <div className="bigHeader h-[300px] flex items-center bg-[url('https://ext.same-assets.com/888824625/287560765.png')] bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:bg-black/30">
        <div className="bigHeaderInner relative z-10 container mx-auto px-4 text-white">
          <h1 className="bigHeader_heading text-4xl font-bold mb-4 text-white">Locations</h1>
          <div className="bigHeaer_lead">
            <p className="text-xl">Kazami's global presence and reach</p>
          </div>
        </div>
      </div>

      <section className="section py-12">
        <div className="section_inner container mx-auto px-4">
          <h2 className="headingLv2">Global Network</h2>
          <div className="section_desc max-w-4xl mx-auto text-center mb-12">
            <p>Kazami currently has five subsidiaries; two in China, and one in Thailand, South Korea, and Italy respectively. We provide services in every country by dispatching consultants from any one of our global offices. Where necessary, our Japanese consultants work together with our global consultants in order to provide the best solution for the client.</p>
          </div>

          <div className="locations_map relative w-full h-[600px] mb-12">
            <Image
              src="https://ext.same-assets.com/888824625/4167863234.png"
              alt="Kazami Global Locations"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className="stats grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="stat p-4 text-center">
              <div className="text-5xl font-bold text-secondary">5</div>
              <div className="text-sm mt-2">Subsidiaries</div>
            </div>
            <div className="stat p-4 text-center">
              <div className="text-5xl font-bold text-secondary">58+</div>
              <div className="text-sm mt-2">Countries</div>
            </div>
            <div className="stat p-4 text-center">
              <div className="text-5xl font-bold text-secondary">400+</div>
              <div className="text-sm mt-2">Consultants</div>
            </div>
            <div className="stat p-4 text-center">
              <div className="text-5xl font-bold text-secondary">2750+</div>
              <div className="text-sm mt-2">Projects Each Year</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-0">
        <h2 className="headingLv2">Global Offices</h2>

        <div className="branchesWrap bgColorWater pt-12 pb-16">
          <div className="branches max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-60 md:h-auto">
                    <Image
                      src="https://ext.same-assets.com/888824625/719943881.jpeg"
                      alt="Kazami Japan"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-4">Kazami Japan (Headquarters)</h3>
                    <p className="mb-4">JMA Consultants Inc.</p>
                    <p className="mb-6">Shinjuku Nomura Building, 32nd Floor<br />1-26-2 Nishi-Shinjuku, Shinjuku-ku<br />Tokyo 163-0532, Japan</p>
                    <p className="mb-4">
                      <span className="font-semibold">Tel:</span> +81-3-3344-5111<br />
                      <span className="font-semibold">Fax:</span> +81-3-3344-5112
                    </p>
                    <div>
                      <Link href="https://www.Kazami.co.jp/" target="_blank" className="lineBtn inline-flex items-center gap-2">
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="branches_list grid grid-cols-1 md:grid-cols-2 gap-8">
              <li className="bg-white rounded shadow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://ext.same-assets.com/888824625/371730375.jpeg"
                      alt="Kazami Thailand"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-4">Kazami Thailand</h3>
                    <p className="mb-4">JMA Consultants (Thailand) Co., Ltd.</p>
                    <p className="mb-6">Sino-Thai Tower, 21st Floor<br />32/45 Sukhumvit 21 Road (Asoke)<br />Bangkok 10110, Thailand</p>
                    <div>
                      <Link href="http://www.Kazami.co.th/" target="_blank" className="lineBtn inline-flex items-center gap-2">
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="bg-white rounded shadow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://ext.same-assets.com/888824625/1717457813.jpeg"
                      alt="Kazami China"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-4">Kazami China</h3>
                    <p className="mb-4">JMA Consultants China Co., Ltd.</p>
                    <p className="mb-6">Shanghai World Financial Center<br />100 Century Avenue<br />Pudong New District, Shanghai, China</p>
                    <div>
                      <Link href="http://www.Kazami.com.cn/index_en.aspx" target="_blank" className="lineBtn inline-flex items-center gap-2">
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="bg-white rounded shadow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://ext.same-assets.com/888824625/272398500.jpeg"
                      alt="Kazami Korea"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-4">Kazami Korea</h3>
                    <p className="mb-4">JMA Consultants Korea Inc.</p>
                    <p className="mb-6">Seoul, South Korea</p>
                    <div>
                      <Link href="http://www.Kazami.co.kr/" target="_blank" className="lineBtn inline-flex items-center gap-2">
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="bg-white rounded shadow overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://ext.same-assets.com/888824625/382300640.jpeg"
                      alt="Kazami Europe"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-bold text-primary mb-4">Kazami Europe</h3>
                    <p className="mb-4">Kazami Europe S.p.A.</p>
                    <p className="mb-6">Via Aurelio Saffi, 20<br />20123 Milan, Italy</p>
                    <div>
                      <Link href="http://www.Kazamieurope.com/" target="_blank" className="lineBtn inline-flex items-center gap-2">
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="text-center mt-12">
              <Link href="https://dlabo.Kazami.co.jp/global_inquiry" target="_blank" className="lineBtn inline-flex flex-col">
                <span>Other Countries</span>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="headingLv2">Global Reach, Local Expertise</h2>
          <p className="max-w-4xl mx-auto mb-8">Our international network of consultants allows us to combine deep local knowledge with global best practices. We understand the unique challenges of each market and tailor our approach to meet the specific needs of our clients.</p>
          <Link href="/about/ourjourney/" className="fillBtn">Learn About Our Journey</Link>
        </div>
      </section>
    </>
  );
}
