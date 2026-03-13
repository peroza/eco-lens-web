import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const BASE_URL = import.meta.env.BASE_URL;

const screenshots = [
  {
    src: `${BASE_URL}screenshots/home.png`,
    alt: "EcoLens app home screen",
  },
  {
    src: `${BASE_URL}screenshots/ranking.png`,
    alt: "EcoLens app ranking screen",
  },
];

const AppScreenshots = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section id="app" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">EcoLens App</h2>
        <p className="section-subtitle">
          A glimpse into how EcoLens helps communities make more sustainable food choices.
        </p>

        <div className="max-w-4xl mx-auto mt-8">
          <Carousel
            className="relative"
            opts={{
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.alt}>
                  <div className="flex justify-center">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full max-w-2xl md:max-w-3xl object-contain"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="max-w-4xl mx-auto mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://apps.apple.com/us/app/ecolens/id6745223300"
            aria-label="Download EcoLens on the Apple App Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${BASE_URL}download-app/apple_store.svg`}
              alt="Download on the App Store"
              className="h-10 md:h-12 w-auto object-contain"
              loading="lazy"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.anonymous.ecolensapp"
            aria-label="Download EcoLens on Google Play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${BASE_URL}download-app/google_play.png`}
              alt="Get it on Google Play"
              className="h-10 md:h-12 w-auto object-contain"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;

