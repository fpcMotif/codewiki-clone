import { createFileRoute } from "@tanstack/react-router";
import { BrowserSection } from "@/components/home/browser-section";
import { FeaturedRepos } from "@/components/home/featured-repos";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { useClientBootstrap } from "@/hooks/use-client-bootstrap";
import { useDevReactGrab } from "@/hooks/use-dev-react-grab";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  // Load react-grab in dev (matches original HTML inline script)
  useDevReactGrab();

  // Bootstrap client-side DOM behaviors (i18n, theme, observers, Three.js)
  useClientBootstrap();

  return (
    <sdlc-agents-root>
      <landing-page>
        <Header />

        <app-home>
          <div className="home-container">
            <HeroSection />
            <section className="sticky-hero-cube-section" />

            <FeaturedRepos />
            <FeaturesSection />

            <BrowserSection />
          </div>
        </app-home>
      </landing-page>
      <Footer />
    </sdlc-agents-root>
  );
}
