import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  source?: SanityImageSource;
};

export default function SanityImage({ source, ...rest }: Props) {
  if (!source) {
    return null; // Don't render anything if there's no image source
  }

  // Generate the URL for the main image and a blurred version for placeholders
  const imageUrl = urlFor(source).url();
  const blurUrl = urlFor(source).width(20).quality(20).url();

  return (
    <Image
      src={imageUrl}
      alt={"Image"}
      placeholder="blur"
      blurDataURL={blurUrl}
      {...rest}
    />
  );
}
