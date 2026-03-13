
import React from "react";

type LogoItem = {
  name: string;
  src: string;
  url?: string;
};

const BASE_URL = import.meta.env.BASE_URL;

const partners: LogoItem[] = [
  {
    name: "New Roots",
    src: `${BASE_URL}partners/NEW ROOTS_Logo-basique_RVB_black.png`,
    url: "https://newroots.ch/en/",
  },
  {
    name: "Déliss",
    src: `${BASE_URL}partners/logo-deliss.png`,
    url: "https://www.deliss.org/",
  },
  {
    name: "tibits",
    src: `${BASE_URL}partners/tibits_4c_pos_os.png`,
    url: "https://tibits.ch/en",
  },
  {
    name: "Ragi",
    src: `${BASE_URL}partners/Ragi Logo.png`,
    url: "https://www.ragi.ch/",
  },
  {
    name: "Chiche",
    src: `${BASE_URL}partners/Chiche Logo.png`,
    url: "https://chiche.xyz/",
  },
  {
    name: "planted",
    src: `${BASE_URL}partners/Logotype_planted_puple_rgb.png`,
    url: "https://planted.ch/",
  },
  {
    name: "Racines",
    src: `${BASE_URL}partners/racines.png`,
  },
  {
    name: "PilzChef",
    src: `${BASE_URL}partners/pilzchef.png`,
  },
];

const supporters: LogoItem[] = [
  {
    name: "EPFL IFNC",
    src: `${BASE_URL}supporters/EPFL IFNC Logo.png`,
    url: "https://www.epfl.ch/labs/lsir/integrative-food-science-and-nutrition-center-project/",
  },
  {
    name: "Durabilité EPFL",
    src: `${BASE_URL}supporters/epfl-durabilite.png`,
    url: "https://www.epfl.ch/about/sustainability/fr/durabilite/",
  },
  {
    name: "Pi2Life",
    src: `${BASE_URL}supporters/pi2life.jpeg`,
    url: "https://pi2.life/home",
  },
  {
    name: "DLAB",
    src: `${BASE_URL}supporters/dlab.png`,
    url: "https://dlab.epfl.ch/",
  },
  {
    name: "PBU",
    src: `${BASE_URL}supporters/PBU_white.jpg`,
    url: "https://www.plantbaseduniversities.org/",
  },
  {
    name: "Vegetables Logo",
    src: `${BASE_URL}supporters/vegetables-logo-noir-vert-B_20250509_142536_0000.png`,
    url: "https://vege-tables.com/en/",
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
                        className={`w-full object-contain ${
                          partner.name === "PilzChef" ? "max-h-20" : "max-h-16"
                        }`}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={partner.src}
                      alt={partner.name}
                      className={`w-full object-contain ${
                        partner.name === "PilzChef" ? "max-h-20" : "max-h-16"
                      }`}
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
                  {supporter.url ? (
                    <a
                      href={supporter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={supporter.src}
                        alt={supporter.name}
                        className="max-h-16 w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={supporter.src}
                      alt={supporter.name}
                      className="max-h-16 w-full object-contain"
                      loading="lazy"
                    />
                  )}
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
