import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Nav } from "@/components/site/Nav";
import { Hero, Metrics, Profile } from "@/components/site/Intro";
import { Explore } from "@/components/site/Explore";
import { Process, Services, Tours } from "@/components/site/Work";
import { Reviews } from "@/components/site/Reviews";
import { Awards, Clients, Faq } from "@/components/site/Trust";
import { Contact, Footer } from "@/components/site/Outro";

const title = "Hani Ezzat — Licensed Tour Guide in Cairo, Egypt";
const description =
  "Private tours of Cairo with Hani Ezzat, a licensed Egyptian guide: ancient, Islamic, Christian and modern Cairo in Arabic, English and German.";

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
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Metrics />
        <Explore />
        <Tours />
        <Services />
        <Reviews />
        <Clients />
        <Process />
        <Awards />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
