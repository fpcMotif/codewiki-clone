import { BrowserSection } from "@/components/home/browser-section";
import { FeaturedRepos } from "@/components/home/featured-repos";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Title } from "@solidjs/meta";
import { onMount } from "solid-js";

export default function Home() {
    onMount(async () => {
        // Bootstrap client-side DOM behaviors (i18n, observers)
        try {
            const { bootstrap } = await import("@/client/bootstrap");
            bootstrap();
        } catch (error) {
            console.error("Failed to bootstrap client-side behaviors:", error);
        }
    });

    return (
        <>
            <Title>Code Wiki</Title>
            <sdlc-agents-root>
                <landing-page>
                    <Header />

                    <app-home>
                        <div class="home-container">
                            <HeroSection />
                            <section class="sticky-hero-cube-section" />

                            <FeaturedRepos />
                            <FeaturesSection />

                            <BrowserSection />
                        </div>
                    </app-home>
                </landing-page>
                <Footer />
            </sdlc-agents-root>
        </>
    );
}
