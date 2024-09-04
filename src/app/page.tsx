import { groq } from "next-sanity";
import { client } from "@/lib/sanity/client";
import Hero from "@/components/Hero";

// Server component to fetch and display posts
export default async function Home() {
  const query = groq`
    *[_type == "homepage"][0]
  `;

  const pageData = await client.fetch(query);

  if (
    !pageData ||
    !pageData.contentBlocks ||
    pageData.contentBlocks.length === 0
  ) {
    return (
      <main className="container mx-auto px-4 py-12">
        <p>No content available for the homepage.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Display the Hero section if present */}
      {pageData.contentBlocks &&
        pageData.contentBlocks.length > 0 &&
        pageData.contentBlocks.map((block: any, index: number) => {
          switch (block._type) {
            case "hero":
              return (
                <Hero
                  key={index}
                  title={block.title}
                  subtitle={block.subtitle}
                  cta={block.cta}
                  logoList={block.logoList}
                />
              );
          }
        })}
    </main>
  );
}
