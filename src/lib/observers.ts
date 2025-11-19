/**
 * Shows/hides the header search bar based on hero section visibility.
 */
export function initHeaderObserver(): void {
    const headerSearch = document.querySelector(".header-search");
    const heroSection = document.querySelector(".hero-section"); // Changed from .hero-section to match class used in HeroSection.svelte if needed, but keeping original selector

    if (!(headerSearch && heroSection)) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                headerSearch.classList.toggle("visible", !entry.isIntersecting);
            }
        },
        {
            threshold: 0.1,
            rootMargin: "-100px 0px 0px 0px", // Trigger when hero is 100px from top
        }
    );

    observer.observe(heroSection);
}

/**
 * Animates the sticky visual layers with a smooth scroll effect.
 */
export function initStickyScrollAnimation(): void {
    const stickySection = document.querySelector<HTMLElement>(".sticky-section");
    const textSectionsContainer =
        document.querySelector<HTMLElement>(".split-sections");
    const animationContainer = document.querySelector<HTMLElement>(
        ".scroll-animation-container"
    );
    const layers = document.querySelectorAll<HTMLElement>(
        ".sticky-visual .layer"
    );

    if (
        !(stickySection && textSectionsContainer && animationContainer) ||
        layers.length === 0
    ) {
        return;
    }

    const numLayers = layers.length;

    // Dynamically create a wrapper for the layers to apply transform on
    const innerContainer = document.createElement("div");
    innerContainer.style.willChange = "transform";

    // Clear original layers and append them to the new wrapper
    animationContainer.innerHTML = "";
    for (const layer of layers) {
        layer.style.height = `${animationContainer.offsetHeight}px`;
        innerContainer.appendChild(layer);
    }
    animationContainer.appendChild(innerContainer);

    const handleScroll = () => {
        const textRect = textSectionsContainer.getBoundingClientRect();
        const scrollableHeight =
            textSectionsContainer.offsetHeight - window.innerHeight;

        // Calculate scroll progress (0 to 1) within the text container
        const progress = -textRect.top / scrollableHeight;
        const clampedProgress = Math.max(0, Math.min(1, progress));

        if (Number.isNaN(clampedProgress)) {
            return;
        }

        // The total distance the inner container needs to travel
        const totalScrollDistance =
            (numLayers - 1) * animationContainer.offsetHeight;
        const translateY = -clampedProgress * totalScrollDistance;

        innerContainer.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial position
}
