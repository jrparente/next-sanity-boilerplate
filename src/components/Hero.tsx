import Link from "next/link";
import SanityImage from "@/components/SanityImage";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type HeroProps = {
  title?: string;
  subtitle?: string;
  cta?: { title: string; link: string };
  logoList?: { title: string; logos: { asset: SanityImageSource }[] };
};

export default function Hero({ title, subtitle, cta, logoList }: HeroProps) {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Title */}
        {title && (
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
        )}
        {/* Subtitle */}
        {subtitle && (
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            {subtitle}
          </p>
        )}
        {/* CTA Button */}
        {cta?.title && cta?.link && (
          <div className="flex justify-center mb-8 lg:mb-16">
            <Link
              href={cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              {cta.title}
            </Link>
          </div>
        )}
        {/* Logo List */}
        {logoList && logoList.logos && logoList.logos.length > 0 && (
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              {logoList.title}
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              {logoList.logos.map(
                (logo: { asset: SanityImageSource }, index: number) => (
                  <div
                    key={index}
                    className="mr-5 mb-5 lg:mb-0 hover:text-gray-800"
                  >
                    {logo.asset && (
                      <SanityImage
                        source={logo.asset}
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
