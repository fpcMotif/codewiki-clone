<script lang="ts">
    import Cube from "$lib/components/Cube.svelte";
    import ActionIcon from "$lib/components/icons/ActionIcon.svelte";
    import ArrowIcon from "$lib/components/icons/ArrowIcon.svelte";
    import { i18n } from "$lib/i18n.svelte";

    let strings = $derived({
        title: i18n.t("browserSection.title") || "Add the missing dimension to your software",
        cta: i18n.t("browserSection.cta") || "See Code Wiki in action"
    });
</script>

<section class="browser-section">
    <div class="browser-section-content">
        <h2>
            {strings.title}
        </h2>
        <div class="desktop-graphic">
            <div class="screen shine">
                <div class="screen-content">
                    <a
                        class="browser-section-cta"
                        href="https://codewiki.google/github.com/google-gemini/gemini-cli"
                        rel="noopener"
                        target="_blank"
                    >
                        <div class="browser-section-cta-content">
                            <ActionIcon />
                            <p>
                                {strings.cta}
                            </p>
                            <ArrowIcon />
                        </div>
                    </a>
                    <Cube />
                    <div class="browser-bar">
                        <div class="browser-dots">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <div class="address-bar"></div>
                    </div>
                </div>
            </div>
            <div class="base"></div>
        </div>
    </div>
</section>
