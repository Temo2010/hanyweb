import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Nav } from "@/components/site/Nav";
import { Hero, Metrics, Profile } from "@/components/site/Intro";
import { Goal, Tours } from "@/components/site/Work";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Trust";
import { Contact, Footer } from "@/components/site/Outro";
import { LoadingScreen } from "@/components/site/LoadingScreen";

const title = "Hani Ezzat — Licensed Tour Guide in Cairo";
const description =
  "Private tours of Cairo with Hani Ezzat, a licensed guide: ancient, Islamic, Christian and modern Cairo in Arabic, English and German.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Metrics />
        <Tours />
        <Goal />
        <Reviews />
        <Faq />
        <Contact />

      </main>
      <Footer />
    </LanguageProvider>
  );
}

