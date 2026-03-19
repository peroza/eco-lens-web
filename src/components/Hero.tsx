import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundTranslate = Math.min(scrollY * 0.15, 60);

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 eco-gradient opacity-70 transition-transform duration-500 ease-out"
        style={{ transform: `translateY(${backgroundTranslate}px)` }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12 animate-fadeIn">
          {/* Text column */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <p className="text-sm md:text-base font-poppins tracking-[0.35em] md:tracking-[0.3em] text-eco-green mb-2">
              ECOLENS
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-eco-green-dark mb-6 font-poppins animate-growUp leading-snug">
              Connecting{" "}
              <span className="bg-white/70 px-3 py-1 rounded-full inline-block text-center md:px-2 md:py-0.5 md:text-left lg:whitespace-nowrap">
                committed consumers
              </span>
              <span className="block mt-2">
                with{" "}
                <span className="bg-white/70 px-3 py-1 rounded-full inline-block text-center md:px-2 md:py-0.5 md:text-left lg:whitespace-nowrap">
                  committed producers
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              EcoLens turns campus meals into climate-friendly choices with
              playful challenges, EcoScores, and real-world rewards.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#app"
                className="eco-button shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105"
              >
                See the app
              </a>
              <a
                href="#goals"
                className="bg-white border-2 border-eco-green text-eco-green-dark font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg hover:bg-gray-50 transform transition-transform duration-200 hover:scale-105"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Phone mockups */}
          <div
            className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0"
            onMouseEnter={() => setIsStackExpanded(true)}
            onMouseLeave={() => setIsStackExpanded(false)}
            onClick={() => setIsStackExpanded((prev) => !prev)}
          >
            <div className="absolute -inset-6 bg-eco-mint/40 blur-3xl rounded-full pointer-events-none" />

            {/* Back-most phone */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div
                className={`w-full max-w-[11rem] sm:max-w-xs lg:max-w-sm transition-transform duration-300 ease-out ${
                  isStackExpanded
                    ? "rotate-[-18deg] -translate-x-10 translate-y-4"
                    : "rotate-6 translate-x-[-10px] translate-y-[20px]"
                }`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/ranking-p.png`}
                  alt="EcoLens ranking screen portrait"
                  className="w-full h-auto rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle phone */}
            <div className="relative w-full flex justify-center">
              <div
                className={`w-full max-w-[11rem] sm:max-w-xs lg:max-w-sm transition-transform duration-300 ease-out ${
                  isStackExpanded
                    ? "rotate-0 translate-x-0 translate-y-0"
                    : "rotate-[-10deg] translate-x-4 translate-y-6"
                }`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}screenshots/ranking-f.png`}
                  alt="EcoLens ranking screen"
                  className="w-full h-auto rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Front phone */}
            <div className="absolute inset-0 flex items-center justify-center animate-float-slow">
              <div
                className={`relative w-full flex justify-center transition-transform duration-300 ease-out ${
                  isStackExpanded
                    ? "translate-x-10 -translate-y-2 rotate-6"
                    : ""
                }`}
              >
                <div className="w-full max-w-[11rem] sm:max-w-xs lg:max-w-sm">
                  <img
                    src={`${import.meta.env.BASE_URL}screenshots/home.png`}
                    alt="EcoLens home screen"
                    className="w-full h-auto rounded-3xl"
                    loading="lazy"
                  />

                  {/* Stats badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-lg flex items-center gap-2 text-xs md:text-sm">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-gray-900">
                      500+ Quizzes played by our users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="white"
        >
          <path
            fillOpacity="1"
            d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
