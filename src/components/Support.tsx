
import React from 'react';

type LogoItem = {
  name: string;
  src: string;
  url?: string;
};

const partners: LogoItem[] = [
  {
    name: 'New Roots',
    src: '/partners/NEW ROOTS_Logo-basique_RVB_black.png',
    url: 'https://newroots.ch/en/',
  },
  {
    name: 'Déliss',
    src: '/partners/logo-deliss.png',
    url: 'https://www.deliss.org/',
  },
  {
    name: 'tibits',
    src: '/partners/tibits_4c_pos_os.png',
    url: 'https://tibits.ch/en',
  },
  {
    name: 'Ragi',
    src: '/partners/Ragi Logo.png',
    url: 'https://www.ragi.ch/',
  },
  {
    name: 'Chiche',
    src: '/partners/Chiche Logo.png',
    url: 'https://chiche.xyz/',
  },
  {
    name: 'planted',
    src: '/partners/Logotype_planted_puple_rgb.png',
    url: 'https://planted.ch/',
  },
];

const supporters: LogoItem[] = [
  {
    name: 'EPFL IFNC',
    src: '/supporters/EPFL IFNC Logo.png',
  },
  {
    name: 'Durabilité EPFL',
    src: '/supporters/epfl-durabilite.png',
  },
  {
    name: 'Pi2Life',
    src: '/supporters/pi2life.jpeg',
  },
  {
    name: 'DLAB',
    src: '/supporters/dlab.png',
  },
  {
    name: 'PBU',
    src: '/supporters/PBU_white.jpg',
  },
  {
    name: 'Vegetables Logo',
    src: '/supporters/vegetables-logo-noir-vert-B_20250509_142536_0000.png',
  },
];

const Support = () => {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Partners &amp; Supporters</h2>
        <p className="section-subtitle">
          EcoLens is made possible thanks to the commitment of our partners and supporters.
        </p>

        <div className="mt-12 max-w-5xl mx-auto space-y-12">
          {/* Partners */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-eco-green-dark mb-6">
              Partners
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center w-40 h-28 md:w-44 md:h-28 transition-transform hover:scale-105"
                >
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-h-16 w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className="max-h-16 w-full object-contain"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Supporters */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-eco-green-dark mb-6">
              Supporters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
              {supporters.map((supporter) => (
                <div
                  key={supporter.name}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center w-40 h-28 md:w-44 md:h-28 transition-transform hover:scale-105"
                >
                  <img
                    src={supporter.src}
                    alt={supporter.name}
                    className="max-h-16 w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
