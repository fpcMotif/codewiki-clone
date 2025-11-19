import Cube from "@/components/cube";
import { ActionIcon } from "@/components/icons/action-icon";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import { useTranslation } from "@/hooks/use-translation";

export function BrowserSection() {
    const { t } = useTranslation();

    return (
        <section class="browser-section">
            <div class="browser-section-content">
                <h2>
                    {t("browserSection.title") || "Add the missing dimension to your software"}
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
                                    <p>{t("browserSection.cta") || "See Code Wiki in action"}</p>
                                    <ArrowIcon />
                                </div>
                            </a>
                            <Cube />
                            <div class="browser-bar">
                                <div class="browser-dots">
                                    <div class="dot" />
                                    <div class="dot" />
                                    <div class="dot" />
                                </div>
                                <div class="address-bar" />
                            </div>
                        </div>
                    </div>
                    <div class="base" />
                </div>
            </div>
        </section>
    );
}
